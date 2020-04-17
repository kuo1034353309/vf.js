/* eslint-disable no-unused-vars */
import { VFStage } from './display/VFStage';
import calculateUpdatePlayerSize from './utils/CalculatePlayerSize';
import importScript from './utils/ImportScript';
import IEvent from './event/IEvent';
import { IVFOptions, EngineAPI } from './IVFEngine';
import { IVFDataV1, ScaleMode, VFStateCode, ITransitionData } from './core/model/IVFData';
import Config from './core/Config';
import System from './core/System';
import { EventType } from './event/EventType';
import { EventLevel } from './event/EventLevel';
import ErrorDisplay from './error/ErrorDisplay';
import readFileSync from './utils/readFileSync';

declare var VFBUILDDATE: any; //webpack全局变量，prod环境使用

export class Player implements EngineAPI {

    /**
     * 系统环境
     * @type {System}
     */
    public static system: System;
    /**
     * @private
     * @type {vf.Application}
     */
    private app?: vf.Application;

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
    public get readyState() {
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
        console.group('VF Player: - v' + options.engineVersion);
        // 1、启动后检查并初始化运行环境
        Player.system = System.getInstance();
        // 影响卸载与垃圾回收
        // Engine.system.systemEvent.on(EventType.STATE, this.onSystemCheck, this);

        //  2、解析外部配置参数并初始化
        this.config = new Config(options);
        // 影响卸载与垃圾回收
        // this.config.systemEvent.on(EventType.STATE, this.onConfigCheck, this);
        this._errpanel = new ErrorDisplay(this.config);

        this.initSystemEvent();

        this._readyState = VFStateCode.INIT;
        console.log('Build Date - ' + VFBUILDDATE);
        console.groupEnd();
        //  3、如果配了资源地址，则启动数据加载
        if (this.config.src) { this.play(this.config.src); }

    }

    public async play(src?: any) {
        if (this._readyState !== VFStateCode.INIT &&
            this._readyState !== VFStateCode.LOADED) {
            this.reload();
        }
        this.loadData(src);
    }

    public pause() {
        if (this.stage) {
            this.stage.pause();
        }
    }

    public resume() {
        if (this.stage) {
            this.stage.resume();
        }
    }

    public reset() {
        if (this.stage) {
            this.stage.reset();
        }
    }

    public message(msg: IEvent) {
        this.config.systemEvent.emit(EventType.ONMESSAGE, msg);
    }

    public runtimeLog(msg: IEvent) {
        this.onMessage(msg);
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

    public dispose(removeView: boolean = false): void {

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
    public onError = (err: any) => {
        //
    }

    /**
     * 接口，避免写入逻辑
     */
    public onInit = () => {
        //
    }

    /**
     * 接口，避免写入逻辑
     */
    public onReady = () => {
        //
    }

    /**
     * 接口，避免写入逻辑
     */
    public onSceneCreate = () => {
        //
    }

    /**
     * 接口，避免写入逻辑
     */
    public onMessage = (msg: IEvent) => {
        //
    }

    /**
     * 接口，避免写入逻辑
     */
    public onDispose = () => {
        //
    }

    private initSystemEvent() {
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
    private async start() {
        if (!this._data) { return; }
        // 0、更新配置
        this.config.width = this._data.width; // 设计尺寸
        this.config.height = this._data.height; // 设计尺寸
        if (this.config.scaleMode === undefined) {
            this.config.scaleMode = this._data.scaleMode || ScaleMode.NO_SCALE;
        }

        // 1、关闭PX的sayHello();
        vf.utils.skipHello();

        // 2、初始化渲染引擎，并将渲染器的画布添加到容器（目前是PIXI）
        const options = {
            width: this.config.width,
            height: this.config.height,
            backgroundColor: parseInt(this.config.bgcolor || '0', 16),
            transparent: this.config.wmode === 'transparent' ? true : false,
            antialias: true,
        };
        this.app = new vf.Application(options);
        this.app.view.style.zIndex = '0';
        this.config.container.appendChild(this.app.view);

        // 3、初始化基于PX容器的VF场景
        this.stage = new VFStage(this._data, this.config, this);
        this.stage.app = this.app;
        this.app.stage.addChild(this.stage.container);

        // 4、 适配处理
        calculateUpdatePlayerSize(this.app.view, this.stage, this.config.scaleMode);

        // 5、初始化API模块，并通知外部'vf[hashid] api is ready'
        this.readyState = VFStateCode.READY;

        // 6、加载场景资源
        this.stage.start();
    }

    private async loadData(src: any) {

        this.readyState = VFStateCode.LOAD;

        const onStatus = this.onStatus.bind(this);

        await this.config.i18n.load(this.config.cdns.default, onStatus);

        if (typeof src === 'string') {
            this._data = await readFileSync(src, { responseType: 'json' }).catch((value) => { onStatus(value); });
        } else if (typeof src === 'object') {
            this._data = src;
        }

        const data = this._data;
        if (data) {
            if (data.conversion) {
                if (typeof src === 'string') {
                    const version = src.split('?')[1] || 'v=0';
                    // tslint:disable-next-line: max-line-length
                    const conversionPath = src.substr(0, src.lastIndexOf('/')) + '/' + data.conversion + '?' + version;
                    await importScript(conversionPath).catch((e: IEvent) => {
                        this.onStatus(e);
                    });
                    const vFConversion = await new (window as any).VFConversion();
                    await vFConversion.analysis(this.config.conversionData, this._data);
                } else {
                    this.onStatus({ code: 'E0005', level: EventLevel.ERROR, data: data.conversion });
                }
            }
            this.readyState = VFStateCode.LOADED;
            await this.start();
        }
    }

    private onSystemCheck(evt: any) {
        // 检查系统环境不支持的报错
        // this.onError(evt);
    }

    private onConfigCheck(evt: any) {
        // 验证配置信息有问题的报错
        // this.onError(evt);
    }

    // ------------------------- 外部与钩子 ---------------------------//
    /**
     * 接收到服务
     * @param msg 
     */
    private sendMessage(msg: IEvent) {
        this.onMessage(msg);
    }

    /**
     * 接收到的状态
     * @param msg 
     */
    private onStatus(msg: IEvent) {
        if (msg.level === EventLevel.ERROR || msg.level === EventLevel.WARNING) {
            if (msg.level === EventLevel.ERROR) {
                this._errpanel.setMessage(msg.code, msg.data);
            }
            msg.message = this._errpanel.getText(msg.code, msg.data);
            this.onError(msg);
            return;
        }
        switch (msg.code) {
        case VFStateCode.INIT:
            this.onInit();
            break;
        case VFStateCode.READY:
            this.onReady();
            break;
        case VFStateCode.SCENE_CREATE:
            this.onSceneCreate();
            break;
        default:
            this.onMessage(msg);
        }
    }


}