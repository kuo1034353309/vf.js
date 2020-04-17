(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/launcher/src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/loading2.svg":
/*!*****************************!*\
  !*** ./assets/loading2.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyAgZGlzcGxheTogYmxvY2s7IHNoYXBlLXJlbmRlcmluZzogYXV0bzsiIHdpZHRoPSI0MXB4IiBoZWlnaHQ9IjQxcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+CjxnIHRyYW5zZm9ybT0icm90YXRlKDAgNTAgNTApIj4KICA8cmVjdCB4PSI0NiIgeT0iMjkiIHJ4PSI0IiByeT0iMyIgd2lkdGg9IjgiIGhlaWdodD0iNiIgID4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTswIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iLTAuOTE2NjY2NjY2NjY2NjY2NnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+CiAgPC9yZWN0Pgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMzAgNTAgNTApIj4KICA8cmVjdCB4PSI0NiIgeT0iMjkiIHJ4PSI0IiByeT0iMyIgd2lkdGg9IjgiIGhlaWdodD0iNiIgID4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTswIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iLTAuODMzMzMzMzMzMzMzMzMzNHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+CiAgPC9yZWN0Pgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNjAgNTAgNTApIj4KICA8cmVjdCB4PSI0NiIgeT0iMjkiIHJ4PSI0IiByeT0iMyIgd2lkdGg9IjgiIGhlaWdodD0iNiIgID4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTswIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iLTAuNzVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogIDwvcmVjdD4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDkwIDUwIDUwKSI+CiAgPHJlY3QgeD0iNDYiIHk9IjI5IiByeD0iNCIgcnk9IjMiIHdpZHRoPSI4IiBoZWlnaHQ9IjYiICA+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjY2NjY2NjY2NjY2NjY2NjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogIDwvcmVjdD4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDEyMCA1MCA1MCkiPgogIDxyZWN0IHg9IjQ2IiB5PSIyOSIgcng9IjQiIHJ5PSIzIiB3aWR0aD0iOCIgaGVpZ2h0PSI2IiAgPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSItMC41ODMzMzMzMzMzMzMzMzM0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4KICA8L3JlY3Q+CjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTAgNTApIj4KICA8cmVjdCB4PSI0NiIgeT0iMjkiIHJ4PSI0IiByeT0iMyIgd2lkdGg9IjgiIGhlaWdodD0iNiIgID4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTswIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iLTAuNXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+CiAgPC9yZWN0Pgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDUwIDUwKSI+CiAgPHJlY3QgeD0iNDYiIHk9IjI5IiByeD0iNCIgcnk9IjMiIHdpZHRoPSI4IiBoZWlnaHQ9IjYiICA+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjQxNjY2NjY2NjY2NjY2NjdzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogIDwvcmVjdD4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDIxMCA1MCA1MCkiPgogIDxyZWN0IHg9IjQ2IiB5PSIyOSIgcng9IjQiIHJ5PSIzIiB3aWR0aD0iOCIgaGVpZ2h0PSI2IiAgPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSItMC4zMzMzMzMzMzMzMzMzMzMzcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4KICA8L3JlY3Q+CjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgyNDAgNTAgNTApIj4KICA8cmVjdCB4PSI0NiIgeT0iMjkiIHJ4PSI0IiByeT0iMyIgd2lkdGg9IjgiIGhlaWdodD0iNiIgID4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTswIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iLTAuMjVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogIDwvcmVjdD4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDI3MCA1MCA1MCkiPgogIDxyZWN0IHg9IjQ2IiB5PSIyOSIgcng9IjQiIHJ5PSIzIiB3aWR0aD0iOCIgaGVpZ2h0PSI2IiAgPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSItMC4xNjY2NjY2NjY2NjY2NjY2NnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+CiAgPC9yZWN0Pgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMzAwIDUwIDUwKSI+CiAgPHJlY3QgeD0iNDYiIHk9IjI5IiByeD0iNCIgcnk9IjMiIHdpZHRoPSI4IiBoZWlnaHQ9IjYiICA+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjA4MzMzMzMzMzMzMzMzMzMzcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4KICA8L3JlY3Q+CjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgzMzAgNTAgNTApIj4KICA8cmVjdCB4PSI0NiIgeT0iMjkiIHJ4PSI0IiByeT0iMyIgd2lkdGg9IjgiIGhlaWdodD0iNiIgID4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTswIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+CiAgPC9yZWN0Pgo8L2c+CjwhLS0gW2xkaW9dIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vIC0tPjwvc3ZnPg==");

/***/ }),

/***/ "./packages/launcher/src/Launcher.ts":
/*!*******************************************!*\
  !*** ./packages/launcher/src/Launcher.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var loading2_svg_1 = __webpack_require__(/*! ../../../assets/loading2.svg */ "./assets/loading2.svg");
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
        this.version = "0.2.0";
        // eslint-disable-next-line no-undef
        this.buildInfo = "2020-4-16 7:56:18 PM";
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
            default: [
                 false ? undefined : '',
                 false ? undefined : '',
            ],
            image: [
                 false ? undefined : '',
                 false ? undefined : '',
            ],
            media: [
                 false ? undefined : '',
                 false ? undefined : '',
            ],
            wx: [
                 false ? undefined : '',
                 false ? undefined : '',
            ],
        };
    };
    /**
     * 环境依赖配置，可以读取一个engine-vserion.json文件获取版本依赖，由于还需要单独加载（本地动态脚本替换不科学～），为了速度，暂缓修改。
     */
    VIPKIDLauncher.prototype.getEnvConfig = function (index) {
        var w = window;
        var cdn = this._config.vfvars.cdns.default[index];
        var libs = [];
        if (w['vf']['CanvasRenderer'] === undefined) {
            var v = 'vf-v5.2.21-v10';
            if (false) {}
            else {
                libs.push("./libs/" + v + "/vf.js");
            }
        }
        if (w['vf']['gui'] === undefined) {
            var v = 'gui-v1.2.4';
            if (false) {}
            else {
                libs.push("./libs/" + v + "/gui.js");
            }
        }
        if (w['vf']['player'] === undefined) {
            var v = 'player-v0.1.2';
            if (false) {}
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
            img_1.src = loading2_svg_1.default;
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
            var event_1 = { code: '404', level: "error" /* ERROR */, data: null, message: script.src + " #404" };
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
            this.completeCall(new window['vf']['player']['Player'](this._config));
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


/***/ }),

/***/ "./packages/launcher/src/index.ts":
/*!****************************************!*\
  !*** ./packages/launcher/src/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./Launcher */ "./packages/launcher/src/Launcher.ts"));


/***/ })

/******/ });
});
//# sourceMappingURL=launcher.js.map