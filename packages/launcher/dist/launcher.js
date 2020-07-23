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
/*! exports provided: deleteVF, createVF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteVF", function() { return deleteVF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVF", function() { return createVF; });
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loading */ "./packages/launcher/src/Loading.ts");

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
        this.version = "0.6.1-debug";
        // eslint-disable-next-line no-undef
<<<<<<< HEAD
        this.buildInfo = "2020/7/22 下午4:20:06";
=======
        this.buildInfo = "7/20/2020, 4:48:12 PM";
>>>>>>> 97c82cc53612807dbab2e8088ffcc2ef350a138c
        this._extendsLibsUrl = [];
        this._loadcount = 0;
        this._loadMaxCount = 40;
        if (completeCall === undefined) {
            // eslint-disable-next-line no-throw-literal
            throw 'completeCall === undefined';
        }
        this._loading = new _Loading__WEBPACK_IMPORTED_MODULE_0__["Loading"](options.container);
        if (window['vf'] === undefined) {
            window['vf'] = {};
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
        if (options.loading) {
            if (options.loading.position) {
                this._loading.position = options.loading.position;
            }
            if (options.loading.image) {
                this._loading.image = options.loading.image;
            }
        }
        this._config = options;
        this.completeCall = completeCall;
        this.errorCall = errorCall;
        this._exclude = options.exclude || [];
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
    VIPKIDLauncher.prototype.getLibUrl = function (version, cdn, name) {
        var url = '';
        if (name === undefined) {
            return { url: version, version: version };
        }
        if (false) {}
        else {
            switch (name) {
                case 'player':
                    url = "./packages/player/dist/" + name + ".js";
                    break;
                default:
                    url = "./libs/" + version + "/" + name + ".js";
            }
        }
        switch (name) {
            case 'vf':
                if (this.debugVFPath) {
                    url = this.debugVFPath;
                }
                break;
            case 'gui':
                if (this.debugGuiPath) {
                    url = this.debugGuiPath;
                }
                break;
            case 'player':
                if (this.debugPlayerPath) {
                    url = this.debugPlayerPath;
                }
                break;
        }
        return { url: url, version: version };
    };
    /**
     * 环境依赖配置，可以读取一个engine-vserion.json文件获取版本依赖，由于还需要单独加载（本地动态脚本替换不科学～），为了速度，暂缓修改。
     */
    VIPKIDLauncher.prototype.getEnvConfig = function (index) {
        var _this = this;
        var cdn = this._config.vfvars.cdns.default[index];
        var libs = [];
        var canLibs = [];
        var extendsLibsUrl = this._extendsLibsUrl;
        if (this._config.debug) {
            libs.push(this.getLibUrl("https://s.vipkidstatic.com/vf/engine/debug/vconsole.min.js"));
        }
        if (this._config.showFPS) {
            libs.push(this.getLibUrl("https://s.vipkidstatic.com/vf/engine/debug/stats.min.js"));
        }
        if (this._exclude.indexOf('vf') === -1) {
            libs.push(this.getLibUrl("vf-v5.2.4-v29", cdn, 'vf'));
        }
        extendsLibsUrl.forEach(function (value) {
            libs.push(_this.getLibUrl(value));
        });
        if (this._exclude.indexOf('gui') === -1) {
            libs.push(this.getLibUrl("gui-v1.7.6", cdn, 'gui'));
        }
        if (this._exclude.indexOf('player') === -1) {
            libs.push(this.getLibUrl("player-v" + "0.6.1", cdn, 'player'));
        }
        libs.forEach(function (value) {
            // eslint-disable-next-line eqeqeq
            if (document.getElementById(value.version) == null) {
                canLibs.push(value);
            }
        });
        return canLibs;
    };
    VIPKIDLauncher.prototype.loadJs = function () {
        if (this._loadcount >= this._loadMaxCount) {
            this.createEngine();
            return;
        }
        var libs = this.getEnvConfig(this._cdnsIndex);
        if (libs.length === 0) {
            this.createEngine();
            return;
        }
        this._loading.show();
        this._loadcount++;
        var item = libs.shift();
        if (item) {
            var script = document.createElement('script');
            script.setAttribute('name', 'vf-script');
            script.type = 'text/javascript';
            script.id = item.version;
            script.title = "0.6.1-debug";
            script.async = false;
            script.src = item.url;
            script.addEventListener('load', this.onJsComplete.bind(this), false);
            script.addEventListener('error', this.onJsError.bind(this), false);
            document.body.appendChild(script);
        }
        else {
            throw new Error('[VF LOG] launcher loadJs item of undefined!');
        }
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
            if (this._config.debug && vf.utils.getSystemInfo().device.type === 'mobile') {
                // eslint-disable-next-line no-new
                new window.VConsole();
            }
            if (this._config.showFPS) {
                var stats_1 = new window.Stats();
                stats_1.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
                document.body.appendChild(stats_1.dom);
                var animate_1 = function () {
                    stats_1.begin();
                    // monitored code goes here
                    stats_1.end();
                    requestAnimationFrame(animate_1);
                };
                requestAnimationFrame(animate_1);
            }
            if (this._exclude.indexOf('player') === -1) {
                // eslint-disable-next-line no-undef
                vf.utils.skipHello();
                var player = new window['vf']['player']['Player'](this._config);
                // eslint-disable-next-line no-undef
                vf.utils.versionPrint(this.version);
                this.completeCall(player);
            }
            else {
                this.completeCall(null);
            }
            this.completeCall = undefined;
            this.errorCall = undefined;
        }
        this._loading.hide();
        this._loading.dispose();
    };
    return VIPKIDLauncher;
}());
function deleteVF() {
    var list = document.getElementsByName('vf-script');
    while (list.length) {
        list[0].remove();
    }
    var w = window;
    try {
        if (w) {
            if (w.vf) {
                delete w.vf;
            }
            if (w.gui) {
                delete w.gui;
            }
            if (w.VFConversion) {
                delete w.VFConversion;
            }
        }
    }
    catch (e) {
        //
    }
}
function createVF(options, completeCall, errorCall) {
    var scripts = document.getElementsByName('vf-script');
    var version = "0.6.1-debug";
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].title !== version) {
            deleteVF();
            break;
        }
    }
    // eslint-disable-next-line no-new
    var launcher = new VIPKIDLauncher(options, completeCall, errorCall);
    launcher.debugVFPath = options.debugVFPath;
    launcher.debugGuiPath = options.debugGuiPath;
    launcher.debugPlayerPath = options.debugPlayerPath;
}


/***/ }),

/***/ "./packages/launcher/src/Loading.ts":
/*!******************************************!*\
  !*** ./packages/launcher/src/Loading.ts ***!
  \******************************************/
/*! exports provided: Loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony import */ var _assets_loading2_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/loading2.svg */ "./assets/loading2.svg");

var Loading = /** @class */ (function () {
    function Loading(div) {
        this._isShow = false;
        /**
         * 设置位置，默认右下
         */
        this.position = 'rightBottom';
        this._parent = div;
        this._image = _assets_loading2_svg__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
    Object.defineProperty(Loading.prototype, "image", {
        get: function () {
            return this._image;
        },
        /** 设置显示位图 */
        set: function (value) {
            if (this._loadingImg) {
                this._loadingImg.src = value;
            }
            this._image = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 关于Loading界面布局的可以提出去
     */
    Loading.prototype.show = function () {
        var _container = this._parent;
        if (this._isShow) {
            return;
        }
        if (!this._image) {
            return;
        }
        this._isShow = true;
        var img = this._loadingImg = new Image();
        img.name = 'vf-loading';
        img.id = Date.now().toString();
        img.style.position = 'absolute';
        img.src = this._image;
        var bound = this.getInnerBound(_container);
        var loadingPostion = this.position;
        img.onload = function () {
            // 临时 默认右下
            var left = (bound.w - img.width);
            var top = (bound.h - img.height);
            switch (loadingPostion) {
                case 'leftTop':
                    left = 0;
                    top = 0;
                    break;
                case 'rightTop':
                    left = (bound.w - img.width);
                    top = 0;
                    break;
                case 'leftBottom':
                    left = 0;
                    top = (bound.h - img.height);
                    break;
                case 'rightBottom':
                    left = (bound.w - img.width);
                    top = (bound.h - img.height);
                    break;
                default: // center
                    left = (bound.w - img.width) >> 1;
                    top = (bound.h - img.height) >> 1;
            }
            if (Array.isArray(loadingPostion)) {
                left = loadingPostion[0];
                top = loadingPostion[1];
            }
            img.style.left = left + "px";
            img.style.top = top + "px";
            _container.appendChild(img);
        };
    };
    /**
     * 关于Loading界面布局的可以提出去
     */
    Loading.prototype.hide = function () {
        var loading = this._loadingImg;
        if (loading && loading.parentNode) {
            loading.onload = null;
            loading.parentNode.removeChild(loading);
            loading.remove();
            // this._loading = undefined;
        }
        this._isShow = false;
    };
    Loading.prototype.dispose = function () {
        this._loadingImg = undefined;
        this._parent = undefined;
        this._image = undefined;
    };
    Loading.prototype.getInnerBound = function (ele) {
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
    return Loading;
}());



/***/ }),

/***/ "./packages/launcher/src/index.ts":
/*!****************************************!*\
  !*** ./packages/launcher/src/index.ts ***!
  \****************************************/
/*! exports provided: deleteVF, createVF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Launcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Launcher */ "./packages/launcher/src/Launcher.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteVF", function() { return _Launcher__WEBPACK_IMPORTED_MODULE_0__["deleteVF"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createVF", function() { return _Launcher__WEBPACK_IMPORTED_MODULE_0__["createVF"]; });




/***/ })

/******/ });
});
//# sourceMappingURL=launcher.js.map