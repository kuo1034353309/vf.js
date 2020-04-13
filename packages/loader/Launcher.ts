/* eslint-disable no-unused-vars */
import { IVFOptions, EngineAPI, APIHook } from '../../src/IVFEngine';
import LoadingAsset from '../../src/assets/loading2.svg';
import IEvent from '../../src/event/IEvent';
import { EventLevel } from '../../src/event/EventLevel';
import { ITransitionData } from '../../src/core/model/IVFData';

/**
 * vf集成方案加载器 
 * 
 */
export class VIPKIDLauncher{

    private readonly _config: IVFOptions;

    private _cdnsIndex = 0;
    private _background?: HTMLImageElement;
    private _engine?: EngineAPI;

    private _errorLoadCount = 0;
    private _errorLoadMaxCount = 10;

    private completeCall?:Function;
    private errorCall?:Function;

    // 环境依赖配置，可以读取一个engine-vserion.json文件获取版本依赖，由于还需要单独加载（本地动态脚本替换不科学～），为了速度，暂缓修改。
    private env_config = {
        'vf': () => {
            return [(window as any)['vf'], 'vf-v5.2.21-v10/vf.min.js'];
        },
        'vf.gui': () => {
            return [(window as any)['vf']['gui'], './gui-v1.2.4/vf-gui.min.js'];
        },
        'vf.player': () => {
            return [(window as any)['vf']['player'], 'player-v0.1.0/player.js'];
        },
    }

    /** 
     * 对外接口 IVFEngineAPI
     */
    constructor(options: IVFOptions,completeCall:Function,errorCall?:Function) {

        if(completeCall === undefined){
            throw 'completeCall === undefined';
        }
        if (options.vfvars.cdns === undefined) {
            options.vfvars.cdns = this.getDefaultCDN();
        }

        options.container.style.display = 'none';

        this._config = options;
        this.completeCall = completeCall;
        this.errorCall = errorCall;
        this.loadJs();
    }


    /**
     * 获取默认CDN
     * @param isProd 
     */
    public getDefaultCDN(isProd = true){
        return {
            default:[
                isProd? 'https://s.***.com/':'',
                isProd? 'https://s.***.com/':'',
            ],
            image:[
                isProd? 'https://img.***.com/':'',
                isProd? 'https://img.***.com/':'',
            ],
            media:[
                isProd? 'https://media.***.com/':'',
                isProd? 'https://media.***.com/':'',
            ],
            wx:[
                isProd? 'https://wx.***.com/':'',
                isProd? 'https://wx.***.com/':'',
            ]
        };
        
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
                    case 'center':
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
    }

    private onJsComplete(evt: Event) {
        this.removeJsLoadEvent(evt);
        this.loadJs();
    }

    private onJsError(evt: Event) {

        if (this._errorLoadCount > this._errorLoadMaxCount && this.errorCall) {
            const script = evt.target as HTMLScriptElement;
            const event = { code: '404', level: EventLevel.ERROR, data: null, message: script.src + ' #404' };
            this.errorCall(event);
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

        const cdn = this.getDefaultCDN().default[this._cdnsIndex] + 'vf/engine/';

        for (const key in env_config) {
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

        if(this.completeCall){
            this.completeCall(new (window as any)['vf']['player']['Player'](this._config));
            this.completeCall = undefined;
            this.errorCall = undefined;
        }
        this.fadeOut();
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
}


export function createApp(options: IVFOptions,playerCall: Function,errorCall?: Function){

    new VIPKIDLauncher(options,playerCall,errorCall);
}


const w = (window as any);

if(w.vf == null){
    w.vf = {};
}

console.log(vf);

w.vf.Launcher = VIPKIDLauncher;
