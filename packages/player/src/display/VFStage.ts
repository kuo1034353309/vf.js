import { ITransitionData, IVFDataV1, SceneEvent, VFStateCode } from '../core/model/IVFData';
import { VariableManager } from '../core/VariableManager';
import { SoundManager } from '../sound/SoundManager';
import { VFScene } from './VFScene';
import { RES } from '../core/RES';
import { renderTexture, applyTransition } from '../utils/VFUtil';
import Config from '../core/Config';
import * as Plugs from './plugs/PlugIndex';
import { IPlug } from './plugs/IPlug';
import { EventLevel } from '../event/EventLevel';
import { EventType } from '../event/EventType';
import { Player } from '../Player';
import IEvent from '../event/IEvent';
import StateEvent from '@player/event/StateEvent';

enum STAGE_STATUS {
    NONE,
    LOADING,
    READY,
    PLAYING,
    PAUSED,
    STOP,
}

// eslint-disable-next-line no-undef
export class VFStage extends vf.gui.Stage {
    public variableManager: VariableManager;
    public soundManager: SoundManager;
    public tween: vf.gui.Tween;
    public fps = 30;
    public readonly config: Config;
    public readonly player: Player;
    /**
     * 插件列表 
     */
    public readonly plugs = new Map<string, IPlug>();
    //
    private data: IVFDataV1;
    private curScene?: VFScene;
    private status: STAGE_STATUS = STAGE_STATUS.NONE;

    private res: RES;

    constructor(data: IVFDataV1, config: Config, player: Player) {

        super(config.width, config.height);
        this.data = data;
        this.config = config;
        this.player = player;
        vf.gui.Utils.debug = config.debug;
        // 配置数据后，创建各种管理器
        this.res = new RES(this);
        this.variableManager = new VariableManager();
        this.soundManager = new SoundManager(this.res, this);
        this.tween = new vf.gui.Tween();
        // eslint-disable-next-line no-new
        new Plugs.PlugIndex();
    }

    public getSystemEvent(): StateEvent{
        return this.config.systemEvent;
    }

    public get systemEvent(): StateEvent {
        return this.config.systemEvent;
    }

    /**
     * 即使没有引用也不要删除这个接口，GUI在调用
     * @param msg 
     */
    public sendToPlayer(msg: IEvent): void {
        if (msg.message === undefined) {
            msg.message = '';
        }
        if (msg.target && msg.target['libId']) {
            msg.message += `, id = ${msg.target['id']} , libId = ${msg.target['libId']}`;
        }
        this.player.runtimeLog(msg);
    }

    public start(): void {

        if (this.app) {
            this.app.ticker.add(this.onGUITickerUpdata, this);
        }

        // TODO: 适配
        // 初始化加载界面
        this.status = STAGE_STATUS.LOADING;
        this.res.on(SceneEvent.LoadComplete, this.loadAssetCompleted, this);
        this.res.on(SceneEvent.LoadProgress, this.loadProgress, this);
        // 开始加载
        this.res.loadData(this.data);
    }
    public pause(): void {
        if (this.curScene) {
            this.status = STAGE_STATUS.PAUSED;
            this.curScene.pause();
            this.soundManager.pause();
        }
    }
    public resume(): void {
        if (this.curScene) {
            this.curScene.resume();
            this.soundManager.resume();
            this.status = STAGE_STATUS.PLAYING;
        }
    }
    public reset(): void {
        if (this.status === STAGE_STATUS.NONE ||
            this.status === STAGE_STATUS.LOADING) {
            return;
        }
        if (this.curScene) {
            this.curScene.dispose();
            this.curScene = undefined;
        }
        this.variableManager.clear();
        this.soundManager.clear();
        this.createScene();
    }
    public dispose(): void {
        this.releaseAll();

        if (this.curScene) {
            this.curScene.dispose();
        }
        if (this.tween) {
            this.tween.release();
        }

        // this.removeChildren();

        if (this.app && this.app.ticker) {
            this.app.ticker.remove(this.onGUITickerUpdata, this);
            this.app.ticker.stop();
            // this.app.ticker.destroy();
        }
        if (this.res) {
            this.res.off(SceneEvent.LoadComplete, this.loadAssetCompleted, this);
            this.res.off(SceneEvent.LoadProgress, this.loadProgress, this);
            this.res.destroy();
            this.res = null as any;
        }
        this.plugs.forEach((value) => {
            value.release();
        });
    }

    /** 获取当前的场景 */
    public getCurScene(): VFScene | undefined {
        return this.curScene;
    }

    public switchToNextScene(transition?: ITransitionData): void {
        if (this.curScene) {
            const curSceneId = this.curScene.id;
            const nextScene = this.res.createNextScene(curSceneId, this);

            if (nextScene) {
                this.switchToScene(nextScene, transition);
            }
        }
    }

    public switchToPrevScene(transition?: ITransitionData): void {
        if (this.curScene) {
            const curSceneId = this.curScene.id;
            const prevScene = this.res.createPrevScene(curSceneId, this);

            if (prevScene) {
                this.switchToScene(prevScene, transition);
            }
        }
    }

    public switchToSceneId(sceneId: string, transition?: ITransitionData): void {
        const scene = this.res.createScene(sceneId, this);

        if (scene) {
            this.switchToScene(scene, transition);
        }
    }

    private switchToScene(scene: VFScene, transition?: ITransitionData): void {
        if (scene && this.app) {
            let transitionData = transition;
            let prevTexture: vf.RenderTexture | undefined;

            if (this.curScene) {
                if (this.curScene.transition || transitionData) {
                    if (transitionData == null) {
                        transitionData = this.curScene.transition;
                    }
                    prevTexture = renderTexture(this.app, this.container, this.container.width, this.container.height);
                }
                this.removeChild(this.curScene);
                this.curScene.dispose();
            }
            this.curScene = scene;
            this.curScene.width = this.width;
            this.curScene.height = this.height;
            this.addChild(scene);
            if (transitionData && prevTexture) {
                applyTransition(this, prevTexture, transitionData);
            } else {
                this.emit(SceneEvent.TransitionStart);
                this.emit(SceneEvent.TransitionEnd);
            }
        }
    }

    private loadAssetCompleted(e: any): void {
        this.systemEvent.emit(EventType.STATUS, {
            code: SceneEvent.LoadComplete, level: EventLevel.STATUS, data: null,
        });
        // 加载完毕
        this.status = STAGE_STATUS.READY;
        this.createScene();
        this.createPlugs();
        this.systemEvent.emit(EventType.STATUS, {
            code: VFStateCode.SCENE_CREATE, level: EventLevel.STATUS, data: null,
        });
    }

    private loadProgress(e: any): void {
        this.systemEvent.emit(EventType.STATUS, {
            code: SceneEvent.LoadProgress, level: EventLevel.STATUS, data: e,
        });
    }

    private createPlugs(): void {
        const plugsData = this.config.plugs;

        for (const value of plugsData) {
            const PlugsClass = ((Plugs as any)[value.id]);

            if (PlugsClass) {
                const plug: IPlug = new PlugsClass(value.id, this);

                plug.load(value);
            }
        }
    }

    private createScene(): void {
        // 创建场景
        const scene = this.res.createFirstScene(this);

        if (scene) {
            this.curScene = scene;
            this.addChild(scene);
        }
        this.status = STAGE_STATUS.PLAYING;
    }

    private onGUITickerUpdata(deltaTime: number): void {
        if (this.app) {
            vf.gui.TickerShared.update(deltaTime,
                this.app.ticker.lastTime,
                this.app.ticker.elapsedMS);
        }

    }
}

