/* eslint-disable max-len */
/* eslint-disable no-new */
import { ITransitionData, IVFDataV1, SceneEvent } from '../core/model/IVFData';
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
import { getSceneData, getSceneAssets, getSceneJS, assetsRepair, getNextSceneData, getPrevSceneData, getSceneDataByIndex } from './SceneDataUtils';

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
    public readonly data: IVFDataV1;
    public readonly config: Config;
    public readonly player: Player;
    public readonly res: RES;
    public readonly variableManager: VariableManager;
    public readonly soundManager: SoundManager;
    public readonly plugs = new Map<string, IPlug>(); // 插件列表

    /**
     * 延迟一帧显示，避免坐标0，0
     */
    private _delayedDisplayId: any = -1;

    private curScene?: VFScene;
    private curSceneId?: string;
    private curSceneTransition?: ITransitionData;

    private status: STAGE_STATUS = STAGE_STATUS.NONE;

    constructor(data: IVFDataV1, config: Config, player: Player) {
        super(config.width, config.height, player.app);
        this.data = assetsRepair(data);
        this.config = config;
        this.player = player;
        this.variableManager = new VariableManager();
        this.soundManager = new SoundManager(this);
        new Plugs.PlugIndex();
        const res = this.res = new RES(this);

        res.on(SceneEvent.LoadComplete, this.loadAssetCompleted, this);
        res.on(SceneEvent.LoadProgress, this.loadProgress, this);
    }

    public getSystemEvent(): StateEvent{
        return this.config.systemEvent;
    }

    /**
     * 获取系统总线
     */
    public get systemEvent(): StateEvent {
        return this.config.systemEvent;
    }

    /** 获取当前的场景 */
    public getCurScene(): VFScene | undefined {
        return this.curScene;
    }

    /**
     * 即使没有引用也不要删除这个接口，GUI在调用
     * @param msg
     */
    public sendToPlayer(msg: IEvent): void {
        if (msg.message === undefined) {
            msg.message = '';
        }
        if (msg.target && msg.target.libId) {
            msg.message += `, id = ${msg.target.id} , libId = ${msg.target.libId}`;
        }
        this.player.runtimeLog(msg);
    }

    public start(): void {
        // 初始化加载界面
        this.status = STAGE_STATUS.LOADING;

        const data = this.data;

        const sceneData = getSceneData(data, this.curSceneId);

        if (sceneData === undefined) {
            throw new Error(`scene does not exist!`);
        }
        this.systemEvent.emit(EventType.STATUS, {
            code: SceneEvent.SceneLoad, level: EventLevel.STATUS, data: [this.curSceneId],
        });
        this.curSceneId = sceneData.id;// 首次加载curSceneId = null.
        this.res.loadData(getSceneAssets(data, sceneData), getSceneJS(data));
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
        this.start();
        //对齐syncManager时间
        this.syncManager && this.syncManager.init();
    }
    public dispose(): void {
        this.curSceneId = undefined;
        this.curSceneTransition = undefined;

        if (this.app && this.app.ticker) {
            this.app.ticker.stop();
            // this.app.ticker.destroy();
        }

        this.releaseAll();

        if (this.curScene) {
            this.curScene.dispose();
        }

        if (this.res) {
            this.res.removeAllListeners();
            this.res.destroy();
            (this as any).res = null as any;
        }

        this.plugs.forEach((value) => {
            value.release();
        });
    }

    public switchToSceneId(sceneId: string, transition?: ITransitionData): void {
        this.curSceneId = sceneId;
        this.curSceneTransition = transition;
        this.start();
    }

    public switchToSceneIndex(index: number, transition?: ITransitionData): void {
        const sceneData = getSceneDataByIndex(this.data, parseInt(index as any, 0));

        if (sceneData) {
            this.switchToSceneId(sceneData.id, transition);
        }
    }

    public switchToNextScene(transition?: ITransitionData): void {
        const sceneData = getNextSceneData(this.data, this.curSceneId);

        if (sceneData) {
            this.switchToSceneId(sceneData.id, transition);
        }
    }

    public switchToPrevScene(transition?: ITransitionData): void {
        const sceneData = getPrevSceneData(this.data, this.curSceneId);

        if (sceneData) {
            this.switchToSceneId(sceneData.id, transition);
        }
    }

    private switchToScene(scene: VFScene, transition?: ITransitionData): void {
        if (scene && this.app) {
            let transitionData = transition;
            let prevTexture: vf.RenderTexture | undefined;

            if (this.curScene) {
                if (this.curScene.transition || transitionData) {
                    if (transitionData === undefined) {
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
            }
            else {
                this.emit(SceneEvent.TransitionStart);
                this.emit(SceneEvent.TransitionEnd);
            }

            if (this.syncManager) {
                this.syncManager.init();
            }

            this.visible = false;
            clearTimeout(this._delayedDisplayId);
            this._delayedDisplayId = setTimeout(() => {
                this.visible = true;
            }, 60);

            this.status = STAGE_STATUS.PLAYING;
        }
    }

    private loadAssetCompleted(): void {
        this.systemEvent.emit(EventType.STATUS, {
            code: SceneEvent.LoadComplete, level: EventLevel.STATUS, data: [this.curSceneId],
        });
        // 加载完毕
        this.status = STAGE_STATUS.READY;

        if (this.curSceneId !== undefined) {
            const scene = this.res.createScene(this.curSceneId, this);

            if (scene) {
                this.switchToScene(scene, this.curSceneTransition);
            }

            this.createPlugs();
            this.systemEvent.emit(EventType.STATUS, {
                code: SceneEvent.ScenComplete, level: EventLevel.STATUS, data: null,
            });
        }
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
}

