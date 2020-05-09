/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { VFStage } from './display/VFStage';
import calculateUpdatePlayerSize from './utils/CalculatePlayerSize';
import importScript from './utils/ImportScript';
import IEvent from './event/IEvent';
import { IVFOptions, EngineAPI } from './IVFEngine';
import { IVFDataV1, ScaleMode, VFStateCode, ITransitionData } from './core/model/IVFData';
import Config from './core/Config';
import { EventType } from './event/EventType';
import { EventLevel } from './event/EventLevel';
import ErrorDisplay from './error/ErrorDisplay';
import readFileSync from './utils/readFileSync';

declare let VFBUILDDATE: any; // webpack全局变量，prod环境使用

export class Player implements EngineAPI {
    /**
     * @private
     * @type {vf.Application}
     */
    private app: vf.Application;

    /**
     * @private
     * @type {VFStage}
     */
    private stage?: VFStage;

    /**
     * @private
     * @type {IVFDataV1}
     */
    private _data?: IVFDataV1;

    /**
     * @private
     * @type {VFStage}
     */
    private _readyState: VFStateCode;
    public get readyState(): VFStateCode {
        return this._readyState;
    }
    public set readyState(value) {
        this._readyState = value;
        this.config.systemEvent.emit(EventType.STATUS, { code: value, level: EventLevel.STATUS, data: value });
    }

    /**
     * @private
     * @type {boolean}
     */
    private _errpanel: ErrorDisplay;

    /**
     * @private
     * @type {Config}
     */
    private config: Config;

    constructor(options: IVFOptions) {
        //  1. 初始化配置
        this.config = new Config(options);
        const config = this.config;

        // eslint-disable-next-line no-console
        console.groupEnd();

        // 2. 初始化引擎
        // eslint-disable-next-line no-undef
        this.app = new vf.Application({
            backgroundColor: parseInt(config.bgcolor || '0', 16),
            transparent: config.wmode === 'transparent',
            antialias: true,
        });

        this._errpanel = new ErrorDisplay(this.config);

        this.initSystemEvent();

        this._readyState = VFStateCode.INIT;

        //  3、如果配了资源地址，则启动数据加载
        if (this.config.src) { this.play(this.config.src); }
    }

    public async play(src?: any): Promise<void> {
        if (this._readyState !== VFStateCode.INIT
            && this._readyState !== VFStateCode.LOADED) {
            this.reload();
        }
        this.loadData(src);
    }

    public pause(): void {
        if (this.stage) {
            this.stage.pause();
        }
    }

    public resume(): void {
        if (this.stage) {
            this.stage.resume();
        }
    }

    public reset(): void {
        if (this.stage) {
            this.stage.reset();
        }
    }

    public message(msg: IEvent): void {
        this.config.systemEvent.emit(EventType.ONMESSAGE, msg);
    }

    public runtimeLog(msg: IEvent): void {
        if (this.onMessage) {
            this.onMessage(msg);
        }
    }

    public switchToNextScene(transition?: ITransitionData): void {
        if (this.stage) {
            this.stage.switchToNextScene(transition);
        }
    }

    public switchToPrevScene(transition?: ITransitionData): void {
        if (this.stage) {
            this.stage.switchToPrevScene(transition);
        }
    }

    public switchToSceneId(sceneId: string, transition?: ITransitionData): void {
        if (this.stage) {
            this.stage.switchToSceneId(sceneId, transition);
        }
    }

    public dispose(removeView = false): void {
        if (this.readyState === VFStateCode.DISABLED) {
            return;
        }
        // if (vf.sound) {
        //     vf.sound.close();
        // }

        this.config.systemEvent.removeAllListeners();

        if (this.stage) {
            this.stage.dispose();
        }

        if (this.app && this.app.stage) {
            this.app.destroy(removeView, { children: true, texture: true, baseTexture: true });
        }

        this.onDispose();
        this.readyState = VFStateCode.DISABLED;
    }

    /**
     * 接口，避免写入逻辑
     */
    // eslint-disable-next-line handle-callback-err
    public onError = (err: any) => {
        //
    };

    /**
     * 接口，避免写入逻辑
     */
    public onInit = () => {
        //
    };

    /**
     * 接口，避免写入逻辑
     */
    public onReady = () => {
        //
    };

    /**
     * 接口，避免写入逻辑
     */
    public onSceneCreate = () => {
        //
    };

    /**
     * 接口，避免写入逻辑
     */
    public onMessage = (msg: IEvent) => {
        //
    };

    /**
     * 接口，避免写入逻辑
     */
    public onDispose = () => {
        //
    };

    private initSystemEvent(): void {
        const event = this.config.systemEvent;

        event.on(EventType.MESSAGE, this.sendMessage, this);
        event.on(EventType.STATUS, this.onStatus, this);
    }

    private reload(): void {
        this.config.systemEvent.removeAllListeners();

        if (this.stage) {
            this.stage.dispose();
        }

        if (this.app) {
            this.app.destroy(true, { children: true, texture: true, baseTexture: true });
        }

        this.initSystemEvent();
    }

    /**
     * 启动
     * TODO：
     *   1、目前是打包到一起的pixi引擎，后面需改改成按配置异步加载
     *   2、按配置对画布做自适应布局
     *   3、重新定义版本号的输出结构（VF标识、版本、编译时间、环境支持信息..），提到版本控制模块里
     */
    private async start(): Promise<void> {
        if (!this._data) { return; }
        const config = this.config;
        const data = this._data;

        // 0、更新配置
        if (data.width && data.height) {
            config.width = data.width; // 设计尺寸
            config.height = data.height; // 设计尺寸
        }
        if (config.scaleMode === undefined) {
            config.scaleMode = this._data.scaleMode || ScaleMode.NO_SCALE;
        }
        config.output('Config Info：', config.info);
        // 2、初始化渲染引擎，并将渲染器的画布添加到容器（目前是PIXI）
        const view = this.app.view;

        view.width = config.width;
        view.height = config.height;
        view.style.zIndex = '0';
        this.config.container.appendChild(this.app.view);

        // 3、初始化基于PX容器的VF场景
        this.stage = new VFStage(this._data, this.config, this);
        this.stage.app = this.app;
        this.app.stage.addChild(this.stage.container);

        // 4、 适配处理
        calculateUpdatePlayerSize(this.app.view, this.stage, this.config.scaleMode as any);

        // 5、初始化API模块，并通知外部'vf[hashid] api is ready'
        this.readyState = VFStateCode.READY;

        // 6、加载场景资源
        this.stage.start();
    }

    private async loadData(src: any): Promise<void> {
        this.readyState = VFStateCode.LOAD;

        const onStatus = this.onStatus.bind(this);

        await this.config.i18n.load(this.config.cdns.default, onStatus);

        if (typeof src === 'string') {
            this._data = await readFileSync(src, { responseType: 'json' }).catch((value) => { onStatus(value); });
        }
        else if (typeof src === 'object') {
            this._data = src;
        }

        const data = this._data;

        if (data) {
            if (data.conversion) {
                if (typeof src === 'string') {
                    const version = src.split('?')[1] || 'v=0';
                    // tslint:disable-next-line: max-line-length
                    const conversionPath = `${src.substr(0, src.lastIndexOf('/'))}/${data.conversion}?${version}`;

                    await importScript(conversionPath).catch((e: IEvent) => {
                        this.onStatus(e);
                    });
                    const vFConversion = await new (window as any).VFConversion();

                    await vFConversion.analysis(this.config.conversionData, this._data);
                }
                else {
                    this.onStatus({ code: 'E0005', level: EventLevel.ERROR, data: data.conversion });
                }
            }
            this.readyState = VFStateCode.LOADED;
            await this.start();
        }
    }

    // ------------------------- 外部与钩子 ---------------------------//
    /**
     * 接收到服务
     * @param msg
     */
    private sendMessage(msg: IEvent): void {
        this.onMessage(msg);
    }

    /**
     * 接收到的状态
     * @param msg
     */
    private onStatus(msg: IEvent): void {
        if (msg.level === EventLevel.ERROR || msg.level === EventLevel.WARNING) {
            if (msg.level === EventLevel.ERROR) {
                this._errpanel.setMessage(msg.code, msg.data);
            }
            msg.message = this._errpanel.getText(msg.code, msg.data);
            if (this.onError) {
                this.onError(msg);
            }

            return;
        }
        switch (msg.code) {
            case VFStateCode.INIT:
                if (this.onInit) {
                    this.onInit();
                }
                break;
            case VFStateCode.READY:
                if (this.onReady) {
                    this.onReady();
                }
                break;
            case VFStateCode.SCENE_CREATE:
                if (this.onSceneCreate) {
                    this.onSceneCreate();
                }
                break;
            default:
                if (this.onMessage) {
                    this.onMessage(msg);
                }
        }
    }
}
const w = (window as any);

if (w.vf === undefined) {
    w.vf = {};
}

w.vf.player = { Player };
