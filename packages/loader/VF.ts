import { IVFOptions, EngineAPI, APIHook } from '../../src/IVFEngine';
import LoadingAsset from '../../src/assets/loading2.svg';
import IEvent from '../../src/event/IEvent';
import { EventLevel } from '../../src/event/EventLevel';
import { ITransitionData } from '../../src/core/model/IVFData';

/**
 * vf-engine的加载器 
 * 
 */
export class VF implements EngineAPI {

    // options.vfvars.cdns = {'default':string[],'image':string[],'media':string[],'wx':string[]}
    private readonly _cdns: string[] = [];
    private readonly _config: IVFOptions;

    private _cdnsIndex = 0;
    private _background?: HTMLImageElement;
    private _engine?: EngineAPI;

    private _errorLoadCount = 0;
    private _errorLoadMaxCount = 10;

    public fixVersion = '';

    // 环境依赖配置，可以读取一个engine-vserion.json文件获取版本依赖，由于还需要单独加载（本地动态脚本替换不科学～），为了速度，暂缓修改。
    private env_config = {
        'PIXI': () => {
            return [(window as any)['PIXI'], 'pixi-v5.2.0/pixi-legacy.min.js'];
        },
        'PIXI.sound': () => {
            return [(window as any)['PIXI'] && (window as any)['PIXI']['sound'], 'pixi-sound-v3.0.4/pixi-sound.js'];
        },
        'Promise': () => {
            return [(window as any)['Promise'], `vf-engine-v1.0.0/vf-polyfills.js`];
        },
        'vfgui': () => {
            return [(window as any)['gui'], './vf-gui-v1.1.21/vf-gui.min.js?v=' + this.fixVersion];
        },
        'vfengine': () => {
            return [(window as any)['vfengine'], `vf-engine-v${this._config.engineVersion}/vf-engine.js?v=` + this.fixVersion];
        },
    }

    /** 
     * 对外接口 IVFEngineAPI
     */
    constructor(options: IVFOptions) {
        if (options.vfvars.cdns === undefined) {
            throw 'vf ==> cdns  is not defined';
        }
        if (options.fixVersion) {
            this.fixVersion = options.fixVersion;
        }
        this._config = options;
        this._cdns = options.vfvars.cdns.default;
        this.loadJs();
    }

    /**
     * 关于Loading界面布局的可以提出去
     */
    private showLoading() {
        const _container = this._config.container;
        if (this._background && this._background.parentElement) {
            return;
        }
        if (_container) {
            let img = this._background = new Image();
            img.name = 'loading';
            img.style.position = 'absolute';
            img.src = LoadingAsset;
            const bound = this.getInnerBound(_container);
            const loadingPostion = this._config.loadingPostion || '';
            img.onload = function () {
                //临时 默认右下
                let left = (bound.w - img.width);
                let top = (bound.h - img.height);
                switch(loadingPostion){
                    case "center":
                        left = (bound.w - img.width) >> 1;
                        top = (bound.h - img.height) >> 1;
                        break;
                }
                if(Array.isArray(loadingPostion)){
                    left = loadingPostion[0];
                    top = loadingPostion[1];
                }
                img.style.left = left + 'px';
                img.style.top = top + 'px';
                _container.appendChild(img);
                img.onload = null;
            };

        }
    }

    /**
     * 关于Loading界面布局的可以提出去
     */
    private hideLoading() {
        if (this._background) {
            this._background.remove();
            //this._background = undefined;
        }
    }

    private getInnerBound(ele: HTMLElement) {
        let parentElement = ele;
        let w = ele.clientWidth;
        let h = ele.clientHeight;
        for (let i = 0; i < 5; i++) {
            if (parentElement.clientWidth == 0 && parentElement.parentElement) {
                parentElement = parentElement.parentElement;
            } else {
                w = parentElement.clientWidth;
                h = parentElement.clientHeight;
                break;
            }
        }
        return { w, h };
    }

    private loadJs() {
        if (this.getLibs().length === 0) {
            this.createEngine();
            this.createHook();
            return;
        }
        this.showLoading();
        const item = this.getLibs().shift() as string;

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = false;
        script.src = item;
        script.addEventListener('load', this.onJsComplete.bind(this), false);
        script.addEventListener('error', this.onJsError.bind(this), false);
        document.body.appendChild(script);

        //影响调试
        //const request = new HttpRequest(item);
        //const loader = new HttpLoader();
        //loader.dataFormat = LoaderDataFormat.TEXT;
        //loader.on(LoaderEvent.PROGRESS, this.onJsProgress, this);
        //loader.on(LoaderEvent.COMPLETE, this.onJsComplete, this);
        //loader.on(LoaderEvent.ERROR, this.onJsError, this);
        //loader.on(LoaderEvent.START, (evt) => { this.logger.onEvent(evt) });
        //loader.addListener(LoaderEvent.HTTP_STATUS, (evt) => { this.logger.onEvent(evt) });
        //loader.on(LoaderEvent.CLOSE, (evt) => { this.logger.onEvent(evt) });
        //loader.load(request);
    }

    private onJsComplete(evt: Event) {
        this.removeJsLoadEvent(evt);
        this.loadJs();
    }

    private onJsError(evt: Event) {
        if (this._errorLoadCount > this._errorLoadMaxCount) {
            const hook: APIHook = this as any;
            const script = evt.target as HTMLScriptElement;
            const event = { code: '404', level: EventLevel.ERROR, data: null, message: script.src + ' #404' };
            hook.onError(event);
            return;
        }
        this._cdnsIndex++;
        this._errorLoadCount++;
        if (evt.target) {
            (evt.target as any).parentNode.removeChild(evt.target);
        }

        this.removeJsLoadEvent(evt);
        this.loadJs();
        // TODO：加载失败如果baseUrl有其他CDN地址则切换CDN再次加载
        // TODO: 捕获的err统一交给error模块处理
        // 需要注意目前任何一个依赖模块无法载入都会影响使用，所以无法跳过直接交给error模块提示异常即可。
    }

    private removeJsLoadEvent(evt: Event) {
        if (evt.target) {
            evt.target.removeEventListener('load', this.onJsComplete);
            evt.target.removeEventListener('error', this.onJsError);
        }
    }

    /**
     * 检查前置库
     */
    private getLibs(): string[] {
        let libs = [];
        const env_config: any = this.env_config;
        const cdn = (this._cdns[this._cdnsIndex] || '') + 'vf/engine/';
        for (const key in env_config) {
            if(this._config.vfvars.useNativeAudio && key === 'PIXI.sound'){
                continue;
            }
            if (env_config[key]()[0] === undefined) {
                libs.push(cdn + env_config[key]()[1]);
            }
        }
        return libs;
    }

    /**
     * 创建引擎
     */
    private createEngine() {
        if (this._engine) {
            return this._engine;
        }
        if ((window as any)['vfengine'] === undefined) {
            const hook: APIHook = this as any;
            const event = { code: EventLevel.ERROR, level: EventLevel.ERROR, data: null, message: 'engine initialization error!' };
            hook.onError(event);
            return;
        }
        let engine = this._engine = new (window as any)['vfengine'](this._config);
        return engine;
    }

    private createHook() {
        let engine = this._engine as EngineAPI;
        if (engine === undefined) {
            return;
        }

        const hook: APIHook = this as any;
        engine.onReady = () => {
            (engine as any).app.view.style.display = 'none';
            hook.onReady();
        };
        engine.onSceneCreate = () => {
            this.fadeOut();
            hook.onSceneCreate();
        };
        engine.onMessage = (msg: IEvent) => {
            hook.onMessage(msg);
        };
        engine.onError = (evt: IEvent) => {
            hook.onError(evt);
        };
        engine.onDispose = () => {
            hook.onDispose();
        };
    }

    private intervalId = -1;
    private fadeOut() {

        const canvas = (this._engine as any).app.view as HTMLCanvasElement;
        canvas.style.opacity = '0';
        canvas.style.display = 'block';

        let speed = this._config.fadeInTime || 30;
        if( speed !== 0){
            let num = 0;
            let intervalId = this.intervalId = setInterval(() => {
                num++;
                canvas.style.opacity = (num / 10).toString();
                if (num >= 30) {
                    clearInterval(intervalId);
                    this.hideLoading();
                }
            }, speed);
        }else{
            this.hideLoading();
        }


    }

    // -----------------------  Engine API -----------------------//
    private getEngine() {
        const engine = this._engine;
        if (engine === undefined) {
            this.onError({ code: 'E0000', level: EventLevel.ERROR, message: '[VF LOG] engine is not defined', data: null });
            return undefined;
        }
        return engine;
    }

    public play(src?: any) {
        const engine = this.getEngine();
        if (engine) {
            engine.play(src);
        }
    }

    public dispose(boolean?: boolean) {
        const engine = this.getEngine();
        if (engine) {
            engine.dispose();
        }
        clearInterval(this.intervalId);
        this.hideLoading();
        if (engine) {
            engine.dispose(true);
            engine.onReady = () => { };
            engine.onSceneCreate = () => { };
            engine.onMessage = () => { };
            engine.onError = () => { };
            engine.onDispose = () => { };
        }
        this._engine = undefined;
    }


    public pause() {
        const engine = this.getEngine();
        if (engine) {
            engine.pause();
        }
    }


    public resume() {
        const engine = this.getEngine();
        if (engine) {
            engine.resume();
        }
    }


    public reset() {
        const engine = this.getEngine();
        if (engine) {
            engine.reset();
        }
    }


    public message(msg: IEvent) {
        const engine = this.getEngine();
        if (engine) {
            engine.message(msg);
        }
    }


    public switchToNextScene(transition?: ITransitionData) {
        const engine = this.getEngine();
        if (engine) {
            engine.switchToNextScene(transition);
        }
    }


    public switchToPrevScene(transition?: ITransitionData) {
        const engine = this.getEngine();
        if (engine) {
            engine.switchToPrevScene(transition);
        }
    }


    public switchToSceneId(sceneId: string, transition?: ITransitionData) {
        const engine = this.getEngine();
        if (engine) {
            engine.switchToSceneId(sceneId, transition);
        }
    }



    public onError(evt: IEvent) {
        // 外部钩子
    }


    public onInit() {
        // 外部钩子
    }


    public onReady() {
        // 外部钩子
    }


    public onSceneCreate() {
        // 外部钩子
    }


    public onMessage(msg: IEvent) {
        // 外部钩子
    }


    public onDispose() {
        // 外部钩子
    }


}

(window as any).VF = VF;
