/* eslint-disable no-eq-null */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable dot-notation */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { IVFOptions, EngineAPI } from '@player/IVFEngine';
import IEvent from '@player/event/IEvent';
import { EventLevel } from '@player/event/EventLevel';
import LoadingAsset from '../../../assets/loading2.svg';

declare let VFBUILDDATE: any; // 编译时间

declare let LAUNCHERVERION: any;

declare let VFVERSION: any;

declare let GUIVERSION: any;

declare let PLAYERRVERION: any;

/**
 * vf集成方案加载器
 *
 */

class VIPKIDLauncher {
    private readonly _config: IVFOptions;

    private _cdnsIndex = 0;
    private _loading?: HTMLImageElement;

    private _errorLoadCount = 0;
    private _errorLoadMaxCount = 10;

    private completeCall?: Function;
    private errorCall?: Function;

    private version = LAUNCHERVERION;
    // eslint-disable-next-line no-undef
    private buildInfo = VFBUILDDATE;

    private _extendsLibsUrl: string[] = [];

    private _loadcount = 0;
    private _loadMaxCount = 40;

    public debugGuiPath?: string;

    /**
     * 对外接口 IVFEngineAPI
     */
    constructor(options: IVFOptions, completeCall: Function, errorCall?: Function) {
        if (completeCall === undefined) {
            // eslint-disable-next-line no-throw-literal
            throw 'completeCall === undefined';
        }

        if ((window as any)['vf'] === undefined) {
            (window as any)['vf'] = {};
        }
        if (options.vfvars === undefined) {
            options.vfvars = {};
        }
        if (options.vfvars.cdns === undefined) {
            options.vfvars.cdns = this.getDefaultCDN();
        }
        if (options.libs) {
            this._extendsLibsUrl = options.libs.concat();
        }

        this._config = options;
        this.completeCall = completeCall;
        this.errorCall = errorCall;
        this.loadJs();
    }

    /**
     * 获取默认CDN
     * @param isProd
     */
    public getDefaultCDN() {
        return {
            default: [
                process.env.NODE_ENV === 'production' ? 'https://s.vipkidstatic.com/' : '',
                process.env.NODE_ENV === 'production' ? 'https://s.vipkidresource.com/' : '',
            ],
            image: [
                process.env.NODE_ENV === 'production' ? 'https://img.vipkidstatic.com/' : '',
                process.env.NODE_ENV === 'production' ? 'https://img.vipkidresource.com/' : '',
            ],
            media: [
                process.env.NODE_ENV === 'production' ? 'https://media.vipkidstatic.com/' : '',
                process.env.NODE_ENV === 'production' ? 'https://media.vipkidresource.com/' : '',
            ],
            wx: [
                process.env.NODE_ENV === 'production' ? 'https://wx.vipkidstatic.com/' : '',
                process.env.NODE_ENV === 'production' ? 'https://wx.vipkidresource.com/' : '',
            ],
        };
    }

    private getLibUrl(version: string, cdn?: string, name?: string) {
        let url = '';

        if (name === undefined) {
            return { url: version, version };
        }
        if (process.env.NODE_ENV === 'production') {
            url = `${cdn}vf/engine/${version}/${name}.min.js`;
        }
        else {
            switch (name) {
                case 'player':
                    url = `./packages/player/dist/${name}.js`;
                    break;
                default:
                    url = `./libs/${version}/${name}.js`;
            }
        }
        if (name === 'gui' && this.debugGuiPath) {
            url = this.debugGuiPath;
        }

        return { url, version };
    }
    /**
     * 环境依赖配置，可以读取一个engine-vserion.json文件获取版本依赖，由于还需要单独加载（本地动态脚本替换不科学～），为了速度，暂缓修改。
     */
    private getEnvConfig(index: number) {
        const cdn = this._config.vfvars.cdns.default[index];
        const libs: { url: string; version: string }[] = [];
        const canLibs: { url: string; version: string }[] = [];
        const extendsLibsUrl = this._extendsLibsUrl;

        if (this._config.debug) {
            libs.push(this.getLibUrl(`https://s.vipkidstatic.com/vf/engine/debug/vconsole.min.js`));
        }

        if (this._config.showFPS) {
            libs.push(this.getLibUrl(`https://s.vipkidstatic.com/vf/engine/debug/stats.min.js`));
        }

        libs.push(this.getLibUrl(VFVERSION, cdn, 'vf'));

        extendsLibsUrl.forEach((value) => {
            libs.push(this.getLibUrl(value));
        });

        libs.push(this.getLibUrl(GUIVERSION, cdn, 'gui'));

        libs.push(this.getLibUrl(`player-v${PLAYERRVERION}`, cdn, 'player'));

        libs.forEach((value) => {
            // eslint-disable-next-line eqeqeq
            if (document.getElementById(value.version) == null) {
                canLibs.push(value);
            }
        });

        return canLibs;
    }

    /**
     * 关于Loading界面布局的可以提出去
     */
    private showLoading() {
        const _container = this._config.container;

        if (this._loading) {
            return;
        }
        if (_container) {
            const img = this._loading = new Image();

            img.name = 'vf-loading';
            img.id = Date.now().toString();
            img.style.position = 'absolute';
            img.src = LoadingAsset;
            const bound = this.getInnerBound(_container);
            const loadingPostion = this._config.loadingPostion || '';

            img.onload = () => {
                // 临时 默认右下
                let left = (bound.w - img.width);
                let top = (bound.h - img.height);

                switch (loadingPostion) {
                    case 'center':
                        left = (bound.w - img.width) >> 1;
                        top = (bound.h - img.height) >> 1;
                        break;
                }
                if (Array.isArray(loadingPostion)) {
                    left = loadingPostion[0];
                    top = loadingPostion[1];
                }
                img.style.left = `${left}px`;
                img.style.top = `${top}px`;
                _container.appendChild(img);
                img.onload = null;
            };
        }
    }

    /**
     * 关于Loading界面布局的可以提出去
     */
    private hideLoading() {
        const loading = this._loading;

        if (loading && loading.parentNode) {
            loading.onload = null;
            loading.parentNode.removeChild(loading);
            loading.remove();
            // this._loading = undefined;
        }
    }

    private getInnerBound(ele: HTMLElement) {
        let parentElement = ele;
        let w = ele.clientWidth;
        let h = ele.clientHeight;

        for (let i = 0; i < 5; i++) {
            if (parentElement.clientWidth === 0 && parentElement.parentElement) {
                parentElement = parentElement.parentElement;
            }
            else {
                w = parentElement.clientWidth;
                h = parentElement.clientHeight;
                break;
            }
        }

        return { w, h };
    }

    private loadJs() {
        if (this._loadcount >= this._loadMaxCount) {
            this.createEngine();

            return;
        }

        const libs = this.getEnvConfig(this._cdnsIndex);

        if (libs.length === 0) {
            this.createEngine();

            return;
        }

        this.showLoading();

        this._loadcount++;

        const item = libs.shift();

        if (item) {
            const script = document.createElement('script');

            script.setAttribute('name', 'vf-script');
            script.type = 'text/javascript';
            script.id = item.version;
            script.title = LAUNCHERVERION;
            script.async = false;
            script.src = item.url;
            script.addEventListener('load', this.onJsComplete.bind(this), false);
            script.addEventListener('error', this.onJsError.bind(this), false);
            document.body.appendChild(script);
        }
        else {
            throw new Error('[VF LOG] launcher loadJs item of undefined!');
        }
    }

    private onJsComplete(evt: Event) {
        this.removeJsLoadEvent(evt);
        this.loadJs();
    }

    private onJsError(evt: Event) {
        if (this._errorLoadCount > this._errorLoadMaxCount) {
            const script = evt.target as HTMLScriptElement;
            const event = { code: '404', level: EventLevel.ERROR, data: null, message: `${script.src} #404` };

            if (this.errorCall) {
                this.errorCall(event);
            }
            this.removeJsLoadEvent(evt);

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
     * 创建引擎
     */
    private createEngine() {
        if (this.completeCall) {
            if (this._config.debug && vf.utils.getSystemInfo().device.type === 'mobile') {
                // eslint-disable-next-line no-new
                new (window as any).VConsole();
            }
            if (this._config.showFPS) {
                const stats = new (window as any).Stats();

                stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
                document.body.appendChild(stats.dom);

                const animate = () => {
                    stats.begin();
                    // monitored code goes here
                    stats.end();
                    requestAnimationFrame(animate);
                };

                requestAnimationFrame(animate);
            }
            // eslint-disable-next-line no-undef
            vf.utils.skipHello();
            const player = new (window as any)['vf']['player']['Player'](this._config);

            // eslint-disable-next-line no-undef
            vf.utils.versionPrint(this.version);
            this.completeCall(player);
            this.completeCall = undefined;
            this.errorCall = undefined;
        }
        this.hideLoading();
    }
}

export function createVF(options: IVFOptions, completeCall: (player: EngineAPI) => {}, errorCall?: (e: IEvent) => {}) {
    const scripts = document.getElementsByName('vf-script');
    const version = LAUNCHERVERION;

    if (scripts.length > 0 && scripts[0].title !== version) {
        scripts.forEach((value) => {
            if (value.parentNode) {
                value.parentNode.removeChild(value);
            }
        });
        delete window.vf;
    }

    // eslint-disable-next-line no-new
    const launcher = new VIPKIDLauncher(options, completeCall, errorCall);

    launcher.debugGuiPath = (options as any).debugGuiPath;
}

export function deleteVF() {
    const list = document.getElementsByName('vf-script');

    while (list.length) {
        list[0].remove();
    }
    delete window.vf;
    delete (window as any).PIXI;
}
