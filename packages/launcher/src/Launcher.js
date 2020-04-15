"use strict";
exports.__esModule = true;
var EventLevel_1 = require("@player/event/EventLevel");
var loading2_svg_1 = require("../../../assets/loading2.svg");
/**
 * vf集成方案加载器
 *
 */
var VIPKIDLauncher = /** @class */ (function () {
    /**
     * 对外接口 IVFEngineAPI
     */
    function VIPKIDLauncher(options, completeCall, errorCall) {
        this._cdnsIndex = 0;
        this._errorLoadCount = 0;
        this._errorLoadMaxCount = 10;
        if (completeCall === undefined) {
            // eslint-disable-next-line no-throw-literal
            throw 'completeCall === undefined';
        }
        if (window['vf'] === undefined) {
            window['vf'] = {};
        }
        if (options.vfvars === undefined) {
            options.vfvars = {};
        }
        if (options.vfvars.cdns === undefined) {
            options.vfvars.cdns = this.getDefaultCDN();
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
    VIPKIDLauncher.prototype.getDefaultCDN = function () {
        return {
            "default": [
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
            ]
        };
    };
    /**
     * 环境依赖配置，可以读取一个engine-vserion.json文件获取版本依赖，由于还需要单独加载（本地动态脚本替换不科学～），为了速度，暂缓修改。
     */
    VIPKIDLauncher.prototype.getEnvConfig = function (index) {
        var w = window;
        var cdn = this._config.vfvars.cdns["default"][index];
        var libs = [];
        if (w['vf']['CanvasRenderer'] === undefined) {
            var v = 'vf-v5.2.21-v10';
            if (process.env.NODE_ENV === 'production') {
                libs.push(cdn + "vf/engine/" + v + "/vf.min.js");
            }
            else {
                libs.push("./libs/" + v + "/vf.js");
            }
        }
        if (w['vf']['gui'] === undefined) {
            var v = 'gui-v1.2.4';
            if (process.env.NODE_ENV === 'production') {
                libs.push(cdn + "vf/engine/" + v + "/gui.min.js");
            }
            else {
                libs.push("./libs/" + v + "/gui.js");
            }
        }
        if (w['vf']['player'] === undefined) {
            var v = 'player-v0.1.2';
            if (process.env.NODE_ENV === 'production') {
                libs.push(cdn + "vf/engine/" + v + "/player.min.js");
            }
            else {
                libs.push("./packages/player/dist/" + v + ".js");
            }
        }
        return libs;
    };
    /**
     * 关于Loading界面布局的可以提出去
     */
    VIPKIDLauncher.prototype.showLoading = function () {
        var _container = this._config.container;
        if (this._background && this._background.parentElement) {
            return;
        }
        if (_container) {
            var img_1 = this._background = new Image();
            img_1.name = 'loading';
            img_1.style.position = 'absolute';
            img_1.src = loading2_svg_1["default"];
            var bound_1 = this.getInnerBound(_container);
            var loadingPostion_1 = this._config.loadingPostion || '';
            img_1.onload = function () {
                // 临时 默认右下
                var left = (bound_1.w - img_1.width);
                var top = (bound_1.h - img_1.height);
                switch (loadingPostion_1) {
                    case 'center':
                        left = (bound_1.w - img_1.width) >> 1;
                        top = (bound_1.h - img_1.height) >> 1;
                        break;
                }
                if (Array.isArray(loadingPostion_1)) {
                    left = loadingPostion_1[0];
                    top = loadingPostion_1[1];
                }
                img_1.style.left = left + "px";
                img_1.style.top = top + "px";
                _container.appendChild(img_1);
                img_1.onload = null;
            };
        }
    };
    /**
     * 关于Loading界面布局的可以提出去
     */
    VIPKIDLauncher.prototype.hideLoading = function () {
        if (this._background) {
            this._background.remove();
            // this._background = undefined;
        }
    };
    VIPKIDLauncher.prototype.getInnerBound = function (ele) {
        var parentElement = ele;
        var w = ele.clientWidth;
        var h = ele.clientHeight;
        for (var i = 0; i < 5; i++) {
            if (parentElement.clientWidth === 0 && parentElement.parentElement) {
                parentElement = parentElement.parentElement;
            }
            else {
                w = parentElement.clientWidth;
                h = parentElement.clientHeight;
                break;
            }
        }
        return { w: w, h: h };
    };
    VIPKIDLauncher.prototype.loadJs = function () {
        var libs = this.getEnvConfig(this._cdnsIndex);
        if (libs.length === 0) {
            this.createEngine();
            return;
        }
        this.showLoading();
        var item = libs.shift();
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = false;
        script.src = item;
        script.addEventListener('load', this.onJsComplete.bind(this), false);
        script.addEventListener('error', this.onJsError.bind(this), false);
        document.body.appendChild(script);
    };
    VIPKIDLauncher.prototype.onJsComplete = function (evt) {
        this.removeJsLoadEvent(evt);
        this.loadJs();
    };
    VIPKIDLauncher.prototype.onJsError = function (evt) {
        if (this._errorLoadCount > this._errorLoadMaxCount) {
            var script = evt.target;
            var event_1 = { code: '404', level: EventLevel_1.EventLevel.ERROR, data: null, message: script.src + " #404" };
            if (this.errorCall) {
                this.errorCall(event_1);
            }
            this.removeJsLoadEvent(evt);
            return;
        }
        this._cdnsIndex++;
        this._errorLoadCount++;
        if (evt.target) {
            evt.target.parentNode.removeChild(evt.target);
        }
        this.removeJsLoadEvent(evt);
        this.loadJs();
        // TODO：加载失败如果baseUrl有其他CDN地址则切换CDN再次加载
        // TODO: 捕获的err统一交给error模块处理
        // 需要注意目前任何一个依赖模块无法载入都会影响使用，所以无法跳过直接交给error模块提示异常即可。
    };
    VIPKIDLauncher.prototype.removeJsLoadEvent = function (evt) {
        if (evt.target) {
            evt.target.removeEventListener('load', this.onJsComplete);
            evt.target.removeEventListener('error', this.onJsError);
        }
    };
    /**
     * 创建引擎
     */
    VIPKIDLauncher.prototype.createEngine = function () {
        if (this.completeCall) {
            this.completeCall(new window['vf']['player']['Engine'](this._config));
            this.completeCall = undefined;
            this.errorCall = undefined;
        }
        this.hideLoading();
    };
    return VIPKIDLauncher;
}());
function createVF(options, completeCall, errorCall) {
    // eslint-disable-next-line no-new
    new VIPKIDLauncher(options, completeCall, errorCall);
}
exports.createVF = createVF;
