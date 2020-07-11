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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/player/src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/assets/Assets.ts":
/*!***********************************!*\
  !*** ./packages/assets/Assets.ts ***!
  \***********************************/
/*! exports provided: getAssetType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAssetType", function() { return getAssetType; });
// import * as IRES from './IRES';
// import readFileSync from '../../src/utils/readFileSync';
function getAssetType(extensionName) {
    switch (extensionName) {
        case 'gif':
        case 'png':
        case 'bmp':
        case 'jpg':
        case 'jpeg':
        case 'tif':
        case 'tiff':
        case 'webp':
        case 'tga':
        case 'svg':
        case 'svg+xml':
            return 4 /* Image */;
        case 'mp3':
        case 'ogg':
        case 'wav':
            return 5 /* Audio */;
        case 'mp4':
        case 'webm':
        case 'mov':
            return 6 /* Video */;
        case 'json':
            return 3 /* Json */;
        default:
            return 0 /* Unknown */;
    }
}
// export class RES{
//     private _defaultCdn:string[] = [];
//     private _tempAnchor: HTMLAnchorElement | null = null;
//     private _loadStrategyMap: Partial<Record<string, AbstractLoadStrategyCtor>> = {
//         // images
//         gif:        ImageLoadStrategy,
//         png:        ImageLoadStrategy,
//         bmp:        ImageLoadStrategy,
//         jpg:        ImageLoadStrategy,
//         jpeg:       ImageLoadStrategy,
//         tif:        ImageLoadStrategy,
//         tiff:       ImageLoadStrategy,
//         webp:       ImageLoadStrategy,
//         tga:        ImageLoadStrategy,
//         svg:        ImageLoadStrategy,
//         'svg+xml':  ImageLoadStrategy, // for SVG data urls
//         // audio
//         mp3:        AudioLoadStrategy,
//         ogg:        AudioLoadStrategy,
//         wav:        AudioLoadStrategy,
//         // videos
//         mp4:        VideoLoadStrategy,
//         webm:       VideoLoadStrategy,
//         mov:        VideoLoadStrategy,
//     }
//     public async getRes<K extends keyof XMLHttpRequestEventTargetEventMap>(url: string, options: Options = {}, listener?: Array<[ K , (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any]>): Promise < any > {
//         const cdns = this._defaultCdn;
//         for (const value of cdns) {
//             const data = await readFileSync( (value || '') + url, options, listener);
//             if (data) {
//                 return data;
//             }
//         }
//         return;
//     }
// }


/***/ }),

/***/ "./packages/player/src/Player.ts":
/*!***************************************!*\
  !*** ./packages/player/src/Player.ts ***!
  \***************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _display_VFStage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display/VFStage */ "./packages/player/src/display/VFStage.ts");
/* harmony import */ var _utils_CalculatePlayerSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/CalculatePlayerSize */ "./packages/player/src/utils/CalculatePlayerSize.ts");
/* harmony import */ var _utils_ImportScript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/ImportScript */ "./packages/player/src/utils/ImportScript.ts");
/* harmony import */ var _core_Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/Config */ "./packages/player/src/core/Config.ts");
/* harmony import */ var _error_ErrorDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error/ErrorDisplay */ "./packages/player/src/error/ErrorDisplay.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */





var Player = /** @class */ (function () {
    function Player(options) {
        /**
         * 接口，避免写入逻辑
         */
        // eslint-disable-next-line handle-callback-err
        this.onError = function (err) {
            //
        };
        /**
         * 接口，避免写入逻辑
         */
        this.onInit = function () {
            //
        };
        /**
         * 接口，避免写入逻辑
         */
        this.onReady = function () {
            //
        };
        /**
         * 接口，避免写入逻辑
         */
        this.onSceneLoad = function () {
            //
        };
        /**
         * 接口，避免写入逻辑
         */
        this.onSceneCreate = function () {
            //
        };
        /**
         * 接口，避免写入逻辑
         */
        this.onMessage = function (msg) {
            //
        };
        /**
         * 接口，避免写入逻辑
         */
        this.onDispose = function () {
            //
        };
        //  1. 初始化配置
        this.option = options;
        this.config = new _core_Config__WEBPACK_IMPORTED_MODULE_3__["default"](options);
        // 2. 初始化引擎
        this.app = this.createApp();
        this._errpanel = new _error_ErrorDisplay__WEBPACK_IMPORTED_MODULE_4__["default"](this.config, options.useCustomErrorPanel);
        this.initSystemEvent();
        this._readyState = "init" /* INIT */;
        //  3、如果配了资源地址，则启动数据加载
        if (options.src) {
            this.play(options.src);
        }
    }
    Object.defineProperty(Player.prototype, "readyState", {
        get: function () {
            return this._readyState;
        },
        set: function (value) {
            this._readyState = value;
            this.config.systemEvent.emit("status" /* STATUS */, { code: value, level: "status" /* STATUS */, data: value });
        },
        enumerable: true,
        configurable: true
    });
    Player.prototype.createApp = function () {
        var options = this.option;
        var config = this.config;
        // eslint-disable-next-line no-undef
        var app = new vf.Application({
            backgroundColor: parseInt(config.bgcolor || '0', 16),
            transparent: config.wmode === 'transparent',
            antialias: true,
            resolution: options.resolution,
            forceCanvas: options.forceCanvas,
            powerPreference: 'low-power'
        });
        var frameRate = options.frameRate || 30;
        app.ticker.maxFPS = frameRate;
        vf.Ticker.system.maxFPS = frameRate;
        vf.Ticker.shared.stop();
        vf.Ticker.shared.maxFPS = frameRate;
        vf.gui.TickerShared.maxFPS = frameRate;
        vf.gui.Utils.debug = options.debug || false;
        return app;
    };
    Player.prototype.play = function (src) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this._readyState !== "init" /* INIT */
                    && this._readyState !== "loaded" /* LOADED */) {
                    this.reload();
                }
                this.loadData(src);
                return [2 /*return*/];
            });
        });
    };
    Player.prototype.playData = function (src, data) {
        if (data) {
            this.config.conversionData = data;
        }
        this.play(src);
    };
    Player.prototype.pause = function () {
        if (this.stage) {
            this.stage.pause();
        }
    };
    Player.prototype.resume = function () {
        if (this.stage) {
            this.stage.resume();
        }
    };
    Player.prototype.reset = function () {
        if (this.stage) {
            this.stage.reset();
        }
    };
    Player.prototype.message = function (msg) {
        this.config.systemEvent.emit("onMessage" /* ONMESSAGE */, msg);
    };
    Player.prototype.runtimeLog = function (msg) {
        if (this.onMessage) {
            this.onMessage(msg);
        }
    };
    /**
     * 发消息到stage（实际上是uiStage）
     * @param msg
     */
    Player.prototype.sendToStage = function (msg) {
        var stage = this.stage;
        if (stage && stage.receiveFromPlayer) {
            stage.receiveFromPlayer(msg);
        }
    };
    Player.prototype.switchToNextScene = function (transition) {
        if (this.stage) {
            this.stage.switchToNextScene(transition);
        }
    };
    Player.prototype.switchToPrevScene = function (transition) {
        if (this.stage) {
            this.stage.switchToPrevScene(transition);
        }
    };
    Player.prototype.switchToSceneId = function (sceneId, transition) {
        sceneId = sceneId.toString();
        if (this.stage) {
            this.stage.switchToSceneId(sceneId, transition);
        }
        else {
            this.defaultScene = { callBack: this.switchToSceneId, params: [sceneId, transition] };
        }
    };
    Player.prototype.switchToSceneIndex = function (index, transition) {
        if (this.stage) {
            this.stage.switchToSceneIndex(index, transition);
        }
        else {
            this.defaultScene = { callBack: this.switchToSceneIndex, params: [index, transition] };
        }
    };
    Player.prototype.dispose = function (removeView) {
        if (removeView === void 0) { removeView = false; }
        if (this.readyState === "disabled" /* DISABLED */) {
            return;
        }
        this.option = null;
        this.defaultScene = undefined;
        this.config.systemEvent.removeAllListeners();
        if (this.stage) {
            this.stage.dispose();
        }
        vf.AudioEngine.Ins().dispose();
        if (this.app && this.app.stage) {
            this.app.destroy(removeView, { children: true, texture: true, baseTexture: true });
        }
        this.stage = undefined;
        this.app = null;
        this.onDispose();
        this.readyState = "disabled" /* DISABLED */;
    };
    Player.prototype.initSystemEvent = function () {
        var event = this.config.systemEvent;
        event.on("message" /* MESSAGE */, this.sendMessage, this);
        event.on("status" /* STATUS */, this.onStatus, this);
    };
    Player.prototype.reload = function () {
        var config = this.config;
        config.systemEvent.removeAllListeners();
        vf.AudioEngine.Ins().dispose();
        if (this.stage) {
            this.stage.dispose();
        }
        if (this.app) {
            this.app.destroy(true, { children: true, texture: true, baseTexture: true });
        }
        this.stage = undefined;
        this.app = this.createApp();
        this.initSystemEvent();
    };
    /**
     * 启动
     * TODO：
     *   1、目前是打包到一起的pixi引擎，后面需改改成按配置异步加载
     *   2、按配置对画布做自适应布局
     *   3、重新定义版本号的输出结构（VF标识、版本、编译时间、环境支持信息..），提到版本控制模块里
     */
    Player.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var config, data, container, clientRect, view;
            return __generator(this, function (_a) {
                if (!this._data) {
                    return [2 /*return*/];
                }
                config = this.config;
                data = this._data;
                container = this.config.container;
                clientRect = Object(_utils_CalculatePlayerSize__WEBPACK_IMPORTED_MODULE_1__["getBoundingClientRect"])(container);
                // 0、更新配置
                config.width = vf.gui.Utils.formatRelative(data.width, clientRect.width);
                config.height = vf.gui.Utils.formatRelative(data.height, clientRect.height);
                if (config.scaleMode === undefined) {
                    config.scaleMode = this._data.scaleMode || "noScale" /* NO_SCALE */;
                }
                config.output('Config Info：', config.info);
                view = this.app.view;
                view.width = config.width;
                view.height = config.height;
                view.style.zIndex = '0';
                container.appendChild(this.app.view);
                // 3、初始化基于PX容器的VF场景
                this.stage = new _display_VFStage__WEBPACK_IMPORTED_MODULE_0__["VFStage"](this._data, this.config, this);
                // 4、 适配处理
                // eslint-disable-next-line max-len
                Object(_utils_CalculatePlayerSize__WEBPACK_IMPORTED_MODULE_1__["calculateUpdatePlayerSize"])(container, this.app.view, this.stage, this.config.scaleMode, this.app.renderer.resolution);
                // 5、初始化API模块，并通知外部'vf[hashid] api is ready'
                this.readyState = "ready" /* READY */;
                // 6、加载场景资源 
                if (this.defaultScene) {
                    this.defaultScene.callBack.call(this, this.defaultScene.params[0], this.defaultScene.params[1]);
                }
                else {
                    this.stage.start();
                }
                return [2 /*return*/];
            });
        });
    };
    Player.prototype.loadData = function (src) {
        return __awaiter(this, void 0, void 0, function () {
            var onStatus, _a, data, version, conversionPath, vFConversion;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.readyState = "load" /* LOAD */;
                        onStatus = this.onStatus.bind(this);
                        return [4 /*yield*/, this.config.i18n.load(this.config.cdns.default, onStatus)];
                    case 1:
                        _b.sent();
                        if (!(typeof src === 'string')) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, vf.utils.readFileSync(src, { responseType: 'json' }).catch(function (value) { onStatus(value); })];
                    case 2:
                        _a._data = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        if (typeof src === 'object') {
                            this._data = src;
                        }
                        _b.label = 4;
                    case 4:
                        data = this._data;
                        if (!data) return [3 /*break*/, 11];
                        if (!data.conversion) return [3 /*break*/, 9];
                        if (!(typeof src === 'string')) return [3 /*break*/, 8];
                        version = src.split('?')[1] || 'v=0';
                        conversionPath = src.substr(0, src.lastIndexOf('/')) + "/" + data.conversion + "?" + version;
                        return [4 /*yield*/, Object(_utils_ImportScript__WEBPACK_IMPORTED_MODULE_2__["default"])(conversionPath).catch(function (e) {
                                _this.onStatus(e);
                            })];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, new window.VFConversion()];
                    case 6:
                        vFConversion = _b.sent();
                        return [4 /*yield*/, vFConversion.analysis(this.config.conversionData, this._data)];
                    case 7:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        this.onStatus({ code: 'E0005', level: "error" /* ERROR */, data: data.conversion });
                        _b.label = 9;
                    case 9:
                        this.readyState = "loaded" /* LOADED */;
                        return [4 /*yield*/, this.start()];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    // ------------------------- 外部与钩子 ---------------------------//
    /**
     * 接收到服务
     * @param msg
     */
    Player.prototype.sendMessage = function (msg) {
        this.onMessage(msg);
    };
    /**
     * 接收到的状态
     * @param msg
     */
    Player.prototype.onStatus = function (msg) {
        if (msg.level === "error" /* ERROR */ || msg.level === "warning" /* WARNING */) {
            if (msg.level === "error" /* ERROR */) {
                this._errpanel.setMessage(msg.code, msg.data);
            }
            msg.message = this._errpanel.getText(msg.code, msg.data);
            if (this.onError) {
                this.onError(msg);
            }
            return;
        }
        switch (msg.code) {
            case "init" /* INIT */:
                if (this.onInit) {
                    this.onInit();
                }
                break;
            case "ready" /* READY */:
                if (this.onReady) {
                    this.onReady();
                }
                break;
            case "SceneLoad" /* SceneLoad */:
                if (this.onSceneLoad) {
                    this.onSceneLoad();
                }
                break;
            case "ScenComplete" /* ScenComplete */:
                if (this.onSceneCreate) {
                    this.onSceneCreate();
                }
                break;
            default:
                if (this.onMessage) {
                    this.onMessage(msg);
                }
        }
    };
    return Player;
}());

var w = window;
if (w.vf === undefined) {
    w.vf = {};
}
w.vf.player = { Player: Player };


/***/ }),

/***/ "./packages/player/src/core/BaseInfo.ts":
/*!**********************************************!*\
  !*** ./packages/player/src/core/BaseInfo.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_StateEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../event/StateEvent */ "./packages/player/src/event/StateEvent.ts");
/**
 * 信息、参数、配置对象基类
 *
 * @author 8088
 */

var BaseInfo = /** @class */ (function () {
    function BaseInfo() {
        /** 系统与对外事件 */
        this.systemEvent = new _event_StateEvent__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.PROPERTY_CHANGE = '.Property.Changed';
        this.PROPERTY_SET_ERROR = '.Property.SetError';
    }
    /**
     * Add a listener for a given event.
     */
    BaseInfo.prototype.on = function (event, fn, context) {
        this.systemEvent.on(event, fn, context);
        return this;
    };
    BaseInfo.prototype.addListener = function (event, fn, context) {
        return this.on(event, fn, context);
    };
    /**
     * Remove the listeners of a given event.
     */
    BaseInfo.prototype.removeListener = function (event, fn, context, once) {
        return this.off(event, fn, context, once);
    };
    BaseInfo.prototype.off = function (event, fn, context, once) {
        this.systemEvent.off(event, fn, context, once);
        return this;
    };
    /**
     * 生成唯一标识ID
     *
     * @return 随机码
     */
    BaseInfo.prototype.createRandomId = function () {
        // return String((new Date()).getTime()) + this.createRandomIdentifier(3);
        var specialChars = new Array('8', '9', 'A', 'B');
        return this.createRandomIdentifier(8, 15) + '-' + this.createRandomIdentifier(4, 15) + '-8' + this.createRandomIdentifier(3, 15) + '-' + specialChars[this.randomIntegerWithinRange(0, 3)] + this.createRandomIdentifier(3, 15) + '-' + this.createRandomIdentifier(12, 15);
    };
    /**
     * 生成会话ID
     *
     * @return 随机码
     */
    BaseInfo.prototype.getSessionId = function () {
        var _sessionId;
        var date = new Date();
        _sessionId = String(date.getTime()) + String(1000 + date.getMilliseconds()) + String(Math.floor(Math.random() * 9000) + 1000);
        return _sessionId;
    };
    /**
     * 属性被更改后抛出changed事件
     *
     * @param	propertyName 对应已更改的属性名称
     */
    BaseInfo.prototype.propertyChange = function (propertyName) {
        this.systemEvent.emit("state" /* STATE */, {
            code: this.getClassName(this) + this.PROPERTY_CHANGE,
            level: "status" /* STATUS */,
            data: { name: propertyName, value: this[propertyName] },
        });
    };
    /**
     * 属性设置
     * - 超出了对应支持的范围，上报此错误。
     *
     * @param	propertyName 属性名称
     * @param	setValue 想要更改的值
     */
    BaseInfo.prototype.propertyError = function (propertyName, setValue) {
        this.systemEvent.emit("state" /* STATE */, {
            code: this.getClassName(this) + this.PROPERTY_SET_ERROR,
            level: "error" /* ERROR */,
            data: { name: propertyName, value: setValue }
            // message: 'mark:是否需要加详细的描述 打运行时日志 待定...'
        });
    };
    Object.defineProperty(BaseInfo.prototype, "info", {
        get: function () {
            return {};
        },
        enumerable: true,
        configurable: true
    });
    BaseInfo.prototype.output = function (ttl, obj) {
        console.groupCollapsed(ttl);
        for (var key in obj) {
            console.log('%c' + key + ':', 'color: violet;', obj[key]);
        }
        console.groupEnd();
    };
    // Internals..
    //
    BaseInfo.prototype.createRandomIdentifier = function (length, radix) {
        if (radix === void 0) { radix = 61; }
        var characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var id = [];
        radix = (radix > 61) ? 61 : radix;
        while (length--) {
            id.push(characters[this.randomIntegerWithinRange(0, radix)]);
        }
        return id.join('');
    };
    BaseInfo.prototype.randomIntegerWithinRange = function (min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    };
    BaseInfo.prototype.getClassName = function (value) {
        var regex = /function (.{1,})\(/;
        var results = regex.exec(value.constructor.toString());
        return (results && results.length > 1) ? results[1] : '';
    };
    return BaseInfo;
}());
/* harmony default export */ __webpack_exports__["default"] = (BaseInfo);


/***/ }),

/***/ "./packages/player/src/core/Config.ts":
/*!********************************************!*\
  !*** ./packages/player/src/core/Config.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseInfo */ "./packages/player/src/core/BaseInfo.ts");
/* harmony import */ var _I18N__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./I18N */ "./packages/player/src/core/I18N.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 外部配置信息
 * - TODO:
 * 封装功能相关信息、参数配置 并提供默认值
 * 当有元素变化时 抛出事件
 * 当有元素异常时 抛出异常
 * - NOTE:
 * 初始化时虽然会抛出属性变化事件，但是vf并没初始化完成，不会受影响
 * 如需抛出更改之前的属性值，需要将事件改为先发 并带上老属性值和设置的value.
 * @author 8088
 */


var Config = /** @class */ (function (_super) {
    __extends(Config, _super);
    function Config(options) {
        var _this = _super.call(this) || this;
        _this._vfvars = {};
        _this._plugs = [];
        _this.realFPS = true;
        _this._container = options.container;
        _this.uuid = vf.utils.uid();
        _this._id = options.id || _this.createRandomId();
        _this._src = options.src || undefined;
        _this._play = options.play === undefined ? true : Boolean(options.play);
        _this._loop = options.loop === undefined ? false : Boolean(options.loop);
        _this._menu = options.menu === undefined ? true : Boolean(options.menu);
        _this._scaleMode = options.scaleMode || undefined;
        _this._align = options.align || 'tl';
        _this._wmode = options.wmode || 'transparent';
        _this._bgcolor = options.bgcolor;
        _this._vfvars = options.vfvars || {};
        _this._frameRate = options.frameRate || 30;
        _this._width = options.width || 320;
        _this._height = options.height || 240;
        _this._orientation = options.orientation || 'auto';
        _this._maxTouches = options.maxTouches || 2;
        _this._showFPS = options.showFPS === undefined ? true : Boolean(options.showFPS);
        _this._showLog = options.showLog === undefined ? true : Boolean(options.showLog);
        _this._conversionData = options.conversionData;
        _this._debug = options.debug || false;
        _this._plugs = options.plugs || _this._plugs;
        _this._logAdvancedTrace = options.logAdvancedTrace || false;
        _this.cdns = Array.isArray(options.vfvars.cdns) ? { default: options.vfvars.cdns } : options.vfvars.cdns;
        if (_this.cdns.image === undefined) {
            _this.cdns.image = _this.cdns.default.concat();
        }
        if (_this.cdns.media === undefined) {
            _this.cdns.media = _this.cdns.default.concat();
        }
        if (_this.cdns.wx === undefined) {
            _this.cdns.wx = _this.cdns.default.concat();
        }
        _this._language = options.language || vf.utils.getSystemInfo().language;
        _this._i18n = new _I18N__WEBPACK_IMPORTED_MODULE_1__["default"](_this._language);
        _this.realFPS = options.realFPS === true ? true : false;
        return _this;
    }
    Object.defineProperty(Config.prototype, "container", {
        get: function () {
            return this._container;
        },
        set: function (value) {
            if (this._container === value) {
                return;
            }
            this._container = value;
            this.propertyChange('container');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            if (this._id === value) {
                return;
            }
            this._id = value;
            this.propertyChange('id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "src", {
        get: function () {
            return this._src;
        },
        set: function (value) {
            if (this._src === value) {
                return;
            }
            this._src = value;
            this.propertyChange('src');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "play", {
        get: function () {
            return this._play;
        },
        set: function (value) {
            if (this._play === value) {
                return;
            }
            this._play = value;
            this.propertyChange('play');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "loop", {
        get: function () {
            return this._loop;
        },
        set: function (value) {
            if (this._loop === value) {
                return;
            }
            this._loop = value;
            this.propertyChange('loop');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "menu", {
        get: function () {
            return this._menu;
        },
        set: function (value) {
            if (this._menu === value) {
                return;
            }
            this._menu = value;
            this.propertyChange('menu');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "scaleMode", {
        get: function () {
            return this._scaleMode;
        },
        set: function (value) {
            if (this._scaleMode === value) {
                return;
            }
            this._scaleMode = value;
            this.propertyChange('scaleMode');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "align", {
        get: function () {
            return this._align;
        },
        set: function (value) {
            if (this._align === value) {
                return;
            }
            this._align = value;
            this.propertyChange('align');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "wmode", {
        get: function () {
            return this._wmode;
        },
        set: function (value) {
            if (this._wmode === value) {
                return;
            }
            this._wmode = value;
            this.propertyChange('wmode');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "bgcolor", {
        get: function () {
            return this._bgcolor;
        },
        set: function (value) {
            if (this._bgcolor === value) {
                return;
            }
            this._bgcolor = value;
            this.propertyChange('bgcolor');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "vfvars", {
        /**
         * useNativeAudio : boolean
         * cdns: string[]
         */
        get: function () {
            return this._vfvars;
        },
        set: function (value) {
            // if (_.isEmpty(value)) { return; }
            // if (_.isEqual(this._vfvars, value)) { return; }
            if (this._vfvars === value) {
                return;
            }
            this._vfvars = value;
            this.propertyChange('vfvars');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "plugs", {
        get: function () {
            return this._plugs;
        },
        set: function (value) {
            this._plugs = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "frameRate", {
        get: function () {
            return this._frameRate;
        },
        set: function (value) {
            if (this._frameRate === value) {
                return;
            }
            this._frameRate = value;
            this.propertyChange('frameRate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            if (this._width === value) {
                return;
            }
            this._width = value;
            this.propertyChange('width');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            if (this._height === value) {
                return;
            }
            this._height = value;
            this.propertyChange('height');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "orientation", {
        get: function () {
            return this._orientation;
        },
        set: function (value) {
            if (this._orientation === value) {
                return;
            }
            this._orientation = value;
            this.propertyChange('orientation');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "maxTouches", {
        get: function () {
            return this._maxTouches;
        },
        set: function (value) {
            if (this._maxTouches === value) {
                return;
            }
            this._maxTouches = value;
            this.propertyChange('maxTouches');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "showFPS", {
        get: function () {
            return this._showFPS;
        },
        set: function (value) {
            if (this._showFPS === value) {
                return;
            }
            this._showFPS = value;
            this.propertyChange('showFPS');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "showLog", {
        get: function () {
            return this._showLog;
        },
        set: function (value) {
            if (this._showLog === value) {
                return;
            }
            this._showLog = value;
            this.propertyChange('showLog');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "conversionData", {
        get: function () {
            return this._conversionData;
        },
        set: function (value) {
            if (this._conversionData === value) {
                return;
            }
            this._conversionData = value;
            this.propertyChange('conversionData');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "debug", {
        get: function () {
            return this._debug;
        },
        set: function (value) {
            if (this._debug === value) {
                return;
            }
            this._debug = value;
            this.propertyChange('debug');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "logAdvancedTrace", {
        get: function () {
            return this._logAdvancedTrace;
        },
        set: function (value) {
            if (this._logAdvancedTrace === value) {
                return;
            }
            this._logAdvancedTrace = value;
            this.propertyChange('logAdvancedTrace');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "language", {
        get: function () {
            return this._language;
        },
        set: function (value) {
            if (this._language === value) {
                return;
            }
            this._language = value;
            this.propertyChange('language');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "i18n", {
        get: function () {
            return this._i18n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "info", {
        get: function () {
            return {
                container: this.container,
                id: this.id,
                src: this.src,
                play: this.play,
                loop: this.loop,
                menu: this.menu,
                scaleMode: this.scaleMode,
                align: this.align,
                wmode: this.wmode,
                bgcolor: this.bgcolor,
                vfvars: this.vfvars,
                plugs: this.plugs,
                frameRate: this.frameRate,
                width: this.width,
                height: this.height,
                orientation: this.orientation,
                maxTouches: this.maxTouches,
                showFPS: this.showFPS,
                showLog: this.showLog,
                logAdvancedTrace: this.logAdvancedTrace,
                conversionData: this.conversionData,
                debug: this.debug,
                language: this.language,
                i18n: this.i18n.info,
            };
        },
        enumerable: true,
        configurable: true
    });
    return Config;
}(_BaseInfo__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Config);


/***/ }),

/***/ "./packages/player/src/core/I18N.ts":
/*!******************************************!*\
  !*** ./packages/player/src/core/I18N.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseInfo */ "./packages/player/src/core/BaseInfo.ts");
/* harmony import */ var _utils_readFileSync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/readFileSync */ "./packages/player/src/utils/readFileSync.ts");
/* harmony import */ var _utils_VFUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/VFUtil */ "./packages/player/src/utils/VFUtil.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * 国际化
 * - TODO:
 * 1、根据配置/默认载入对应语言数据并初始化
 * 2、外部统一通过i18n实例接口 通过 key 取信息, 支持批量取
 * 3、支持语言切换
 * @author 8088
 */



var I18N = /** @class */ (function (_super) {
    __extends(I18N, _super);
    function I18N(language) {
        var _this = _super.call(this) || this;
        _this.lang = '';
        _this._readyState = "init" /* INIT */;
        _this.lang = language.toLocaleLowerCase();
        if (_this.lang.indexOf('en') !== -1) {
            _this.lang = 'en-us';
        }
        else {
            _this.lang = 'zh-cn';
        }
        return _this;
    }
    Object.defineProperty(I18N.prototype, "readyState", {
        get: function () {
            return this._readyState;
        },
        set: function (value) {
            this._readyState = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(I18N.prototype, "info", {
        get: function () {
            return ['zh-CN', 'en-US'];
        },
        enumerable: true,
        configurable: true
    });
    I18N.prototype.t = function (key, param) {
        var data = this._data;
        if (data && data[key]) {
            return Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_2__["stringFormat"])(data[key].message.toString(), param);
        }
        return "This message code[" + key + "] is not defined. \n JSON = " + JSON.stringify(param);
    };
    I18N.prototype.load = function (cdns, onError) {
        return __awaiter(this, void 0, void 0, function () {
            var url, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.lang && this._readyState !== "ready" /* READY */)) return [3 /*break*/, 2];
                        url = '';
                        if (false) {}
                        else {
                            url = "packages/i18n/" + this.lang + ".json";
                        }
                        _a = this;
                        return [4 /*yield*/, Object(_utils_readFileSync__WEBPACK_IMPORTED_MODULE_1__["readFileSyncExt"])(url, cdns, { responseType: 'json' }).catch(function (value) {
                                onError(value);
                            })];
                    case 1:
                        _a._data = _b.sent();
                        if (this._data) {
                            this._readyState = "ready" /* READY */;
                            return [2 /*return*/, true];
                        }
                        _b.label = 2;
                    case 2: return [2 /*return*/, false];
                }
            });
        });
    };
    return I18N;
}(_BaseInfo__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (I18N);


/***/ }),

/***/ "./packages/player/src/core/RES.ts":
/*!*****************************************!*\
  !*** ./packages/player/src/core/RES.ts ***!
  \*****************************************/
/*! exports provided: RES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RES", function() { return RES; });
/* harmony import */ var _utils_ImportScript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ImportScript */ "./packages/player/src/utils/ImportScript.ts");
/* harmony import */ var _display_VFScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/VFScene */ "./packages/player/src/display/VFScene.ts");
/* harmony import */ var _VariableManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VariableManager */ "./packages/player/src/core/VariableManager.ts");
/* harmony import */ var _display_VFComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../display/VFComponent */ "./packages/player/src/display/VFComponent.ts");
/* harmony import */ var _actionTask_ActionList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actionTask/ActionList */ "./packages/player/src/core/actionTask/ActionList.ts");
/* harmony import */ var _animation_Animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animation/Animation */ "./packages/player/src/core/animation/Animation.ts");
/* harmony import */ var _assets_Assets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/Assets */ "./packages/assets/Assets.ts");
/* harmony import */ var _utils_getUrl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getUrl */ "./packages/player/src/utils/getUrl.ts");
/* harmony import */ var _utils_base64toBlob__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/base64toBlob */ "./packages/player/src/utils/base64toBlob.ts");
/* harmony import */ var _display_SceneDataUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../display/SceneDataUtils */ "./packages/player/src/display/SceneDataUtils.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var RES = /** @class */ (function (_super) {
    __extends(RES, _super);
    function RES(stage) {
        var _this = _super.call(this) || this;
        _this.vfResources = {};
        _this.vfActions = [];
        _this._resources = [];
        _this._sceneMap = {};
        _this._loadNum = 0;
        _this._assetFails = new Map();
        _this._isLoadScript = false;
        _this._isLoadResource = false;
        vf.gui.Utils.setSourcePath(_this.getImageAsset.bind(_this));
        vf.gui.Utils.setDisplayObjectPath(_this.getDisplayObject.bind(_this));
        _this.stage = stage;
        _this.initGlobalVariable();
        return _this;
    }
    Object.defineProperty(RES.prototype, "data", {
        get: function () {
            return this.stage.data;
        },
        enumerable: true,
        configurable: true
    });
    RES.prototype.destroy = function () {
        if (this.vfResources) {
            for (var id in this.vfResources) {
                if (this.vfResources[id]) {
                    var resource = this.vfResources[id];
                    if (resource.texture) {
                        resource.texture.destroy(true);
                        delete this.vfResources[id];
                    }
                    else if (resource.sound) {
                        if (resource.sound.media) {
                            resource.sound.destroy();
                        }
                        delete this.vfResources[id];
                    }
                }
            }
        }
        vf.utils.destroyTextureCache();
        vf.utils.clearTextureCache();
        if (this._loader) {
            this._loader.destroy();
        }
        this.stage = undefined;
        this._sceneMap = {};
    };
    RES.prototype.loadData = function (assets, js) {
        return __awaiter(this, void 0, void 0, function () {
            var stage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(assets.length === 0 && js.length === 0)) return [3 /*break*/, 1];
                        this.emit("LoadComplete" /* LoadComplete */, null);
                        return [3 /*break*/, 4];
                    case 1:
                        stage = this.stage;
                        this._isLoadScript = false;
                        this._isLoadResource = false;
                        return [4 /*yield*/, this.loadAllScript(stage, js)];
                    case 2:
                        _a.sent(); // 先加载脚本 loadAllAsset 非同步，后续单独提取assets同步加载，此处js并不算入进度
                        return [4 /*yield*/, this.loadAllAsset(stage, assets)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RES.prototype.createScene = function (id, vfStage) {
        var sceneData = Object(_display_SceneDataUtils__WEBPACK_IMPORTED_MODULE_9__["getSceneData"])(this.data, id);
        if (sceneData) {
            var vfScene = this._sceneMap[id];
            if (vfScene == null) {
                vfScene = new _display_VFScene__WEBPACK_IMPORTED_MODULE_1__["VFScene"](vfStage);
                vfScene.transition = sceneData.transition;
            }
            vfScene.id = id;
            this._sceneMap[id] = vfScene;
            if (sceneData.libId) {
                var scene = this.createComponent(sceneData.libId, sceneData.id);
                if (scene) {
                    scene.width = vfStage.width;
                    scene.height = vfStage.height;
                    vfScene.addComponent(scene);
                }
            }
            return vfScene;
        }
        return null;
    };
    RES.prototype.dataURLtoBlob = function (dataurl) {
        var arr = dataurl.split(',');
        var mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    };
    RES.prototype.getImageAsset = function (index) {
        // base64
        if (index.toString().substr(0, 4) === 'data') {
            return Object(_utils_base64toBlob__WEBPACK_IMPORTED_MODULE_8__["compatible"])(index);
        }
        var resource = this.getAsset(index);
        if (resource) {
            var assetData = this.data.assets[index];
            switch (assetData.type) {
                case "image" /* IMAGE */:
                    return resource.texture;
                case "sheet" /* SHEET */:
                    return resource.spritesheet;
                default:
                    return resource;
            }
        }
        return undefined;
    };
    RES.prototype.getDisplayObject = function (id, target) {
        if (id == undefined) {
            return undefined;
        }
        // 单独写组件ID为创建一个组件复制到显示对象，如果是从场景ID - ID - ID为查找
        if (id.toString().substr(0, 4) === 'this' && target && target.parent instanceof _display_VFComponent__WEBPACK_IMPORTED_MODULE_3__["VFComponent"]) {
            var childIds = id.split('#');
            childIds.shift();
            var child = target.parent;
            while (childIds.length > 0 && child) {
                var id_1 = childIds.shift();
                child = child.getChildById(id_1);
            }
            if (child) {
                return child;
            }
            this.stage.systemEvent.emitError('E0006', [id], "warning" /* WARNING */);
            return undefined;
        }
        return this.creategui(id);
    };
    RES.prototype.getAsset = function (index) {
        var assetData = this.data.assets[index];
        if (assetData === undefined || assetData.id === undefined) {
            this.stage.systemEvent.emitError('E0003', [index], "warning" /* WARNING */);
            return undefined;
        }
        // eslint-disable-next-line max-len
        if ((assetData.type === "audio" /* AUDIO */ || assetData.type === "sound" /* SOUND */) && this.stage.config.vfvars.useNativeAudio) {
            return this.data.assets[index];
        }
        return this.vfResources[assetData.id.toString()];
    };
    RES.prototype.loadAllScript = function (stage, asstes) {
        return __awaiter(this, void 0, void 0, function () {
            var item, i, cls;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < asstes.length)) return [3 /*break*/, 4];
                        item = asstes[i];
                        return [4 /*yield*/, Object(_utils_ImportScript__WEBPACK_IMPORTED_MODULE_0__["default"])(item.url, stage.config.cdns, item.name).catch(function (e) {
                                stage.systemEvent.error(e);
                            })];
                    case 2:
                        cls = _a.sent();
                        if (cls) {
                            if (cls.isFilter && item.name) {
                                vf.gui.Filter.list.set(item.name, cls); // 添加到滤镜列表
                            }
                        }
                        _a.label = 3;
                    case 3:
                        ++i;
                        return [3 /*break*/, 1];
                    case 4:
                        this._isLoadScript = true;
                        this.loadResourceComplete();
                        return [2 /*return*/];
                }
            });
        });
    };
    RES.prototype.loadAllAsset = function (stage, assets) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                assets.forEach(function (assetsItem) {
                    if (assetsItem.type === undefined) {
                        stage.systemEvent.emitError('E0001', [assetsItem.id]);
                        return;
                    }
                    if (assetsItem.url === '' || assetsItem.url === undefined) {
                        stage.systemEvent.emitError('E0003', [assetsItem.id], "warning" /* WARNING */);
                        return;
                    }
                    if (assetsItem.type === "audio" /* AUDIO */ && stage.config.vfvars.useNativeAudio) {
                        stage.systemEvent.emitError('S0004', [assetsItem.id], "warning" /* WARNING */);
                        return;
                    }
                    if (assetsItem.type === "sound" /* SOUND */ && stage.config.vfvars.useNativeAudio) {
                        stage.systemEvent.emitError('S0004', [assetsItem.id], "warning" /* WARNING */);
                        return;
                    }
                    _this._resources.push(assetsItem);
                });
                this.loadResources();
                return [2 /*return*/];
            });
        });
    };
    RES.prototype.initGlobalVariable = function () {
        if (this.data.global) {
            this.stage.variableManager.addVariableConfig(_VariableManager__WEBPACK_IMPORTED_MODULE_2__["VariableManager"].GLOBAL_ID, this.data.global);
            this.stage.variableManager.addVariableToGlobal(this.data.global);
        }
        if (this.vfActions) {
            for (var i = 0, len = this.vfActions.length; i < len; i++) {
                var action = this.vfActions[i];
                if (action && action.type === 37 /* DefineVariable */) {
                    var defAction = action;
                    this.stage.variableManager.addVariableDataToGlobal(defAction.varId, defAction.variableType, defAction.value);
                }
            }
        }
    };
    RES.prototype.createComponent = function (libId, id) {
        if (id === undefined || id === '') {
            this.stage.systemEvent.emitError('E0004', [id], undefined, "libId = " + libId);
            return null;
        }
        var componentData = this.data.components[libId];
        var component = null;
        if (componentData) {
            switch (componentData.type) {
                case "custom" /* Custom */:
                    component = this.createCustomComponent(libId, id);
                    if (componentData.interactabled !== undefined) {
                        component.interactabled = componentData.interactabled; // 性能优化，有部分业务，并不需要自定义组件有事件功能，可提前禁用
                    }
                    if (componentData.style !== undefined) {
                        component.style = componentData.style;
                    }
                    break;
                default:
                    component = this.creategui(libId);
                    break;
            }
        }
        return component;
    };
    RES.prototype.creategui = function (id) {
        var componentData = this.data.components[id];
        if (!componentData) {
            return null;
        }
        var type = componentData.type;
        // tslint:disable-next-line: new-parens
        var ui;
        try {
            var cls = vf.gui.Utils.getGuiClass(type);
            ui = new cls();
        }
        catch (e) {
            this.stage.systemEvent.emitError('E0004', [id]);
            throw new Error("guiNamespace['" + type + "'] === undefined");
        }
        if (ui) {
            for (var key in componentData) {
                if (key in componentData) {
                    switch (key) {
                        case 'id':
                            // tslint:disable-next-line: no-string-literal
                            ui.libId = componentData[key];
                            break;
                        case 'name':
                            // tslint:disable-next-line: no-string-literal
                            ui.libName = componentData[key];
                            break;
                        case 'type':
                        case 'children':
                        case 'animations':
                        case 'actions':
                        case 'libs':
                            break;
                        default:
                            ui[key] = componentData[key];
                            break;
                    }
                }
            }
        }
        return ui;
    };
    RES.prototype.createCustomComponent = function (libId, id) {
        var componentData = this.data.components[libId];
        var customData = componentData;
        var vfComponent = new _display_VFComponent__WEBPACK_IMPORTED_MODULE_3__["VFComponent"]();
        vfComponent.name = customData.name;
        vfComponent.libId = libId;
        vfComponent.id = id;
        if (customData.props) {
            this.stage.variableManager.addVariableConfig(libId.toString(), customData.props);
            this.stage.variableManager.addVariableToComponent(vfComponent);
        }
        if (customData.children) {
            for (var i = 0, len = customData.children.length; i < len; i++) {
                var childData = customData.children[i];
                if ('libId' in childData) {
                    var childComponentData = this.data.components[childData.libId];
                    var child = this.createComponent(childData.libId, childData.id);
                    if (child) {
                        switch (childComponentData.type) {
                            default:
                                this.applyDisplayComponentProperty(child, childData);
                                break;
                        }
                        vfComponent.addChild(child);
                    }
                }
            }
        }
        if (customData.actionList && customData.actionList !== '') {
            var actionList = new _actionTask_ActionList__WEBPACK_IMPORTED_MODULE_4__["ActionList"](vfComponent, customData.actionList);
            vfComponent.actionList = actionList;
        }
        else if (libId !== undefined) {
            var actions = this.getVfsByComponentId(libId.toString());
            if (actions) {
                var actionList = new _actionTask_ActionList__WEBPACK_IMPORTED_MODULE_4__["ActionList"](vfComponent, actions);
                vfComponent.actionList = actionList;
            }
        }
        if (customData.animations) {
            var realFPS = this.stage.config.realFPS;
            var animation = new _animation_Animation__WEBPACK_IMPORTED_MODULE_5__["Animation"](vfComponent, customData.animations, this.data.fps, realFPS, this.data.animationTemplate);
            vfComponent.animation = animation;
        }
        return vfComponent;
    };
    RES.prototype.applyDisplayComponentProperty = function (display, data) {
        for (var key in data) {
            if (key in data) {
                switch (key) {
                    // case 'id':
                    // case 'name':
                    case 'libId':
                    case 'type':
                    case 'children':
                    case 'animations':
                    case 'actions':
                        break;
                    default:
                        if (key.indexOf('filter') === 0) {
                            this.applyFilter(display, key, data[key]);
                        }
                        else {
                            display[key] = data[key];
                        }
                        break;
                }
            }
        }
    };
    RES.prototype.applyFilter = function (display, filterKey, value) {
        var filterKeys = filterKey.split('.');
        var target = display;
        for (var i = 0, len = filterKeys.length; i < len - 1; i++) {
            var curkey = filterKeys[i];
            if (target && target[curkey]) {
                target = target[curkey];
            }
        }
        if (target) {
            target[filterKeys[filterKeys.length - 1]] = value;
        }
    };
    RES.prototype.loadResourceComplete = function () {
        if (this._isLoadResource && this._isLoadScript) {
            this.emit("LoadComplete" /* LoadComplete */, [this._loader, this._resources]);
        }
    };
    RES.prototype.loadResources = function () {
        var _this = this;
        if (this._loader === undefined) {
            this._loader = new vf.Loader();
        }
        var loader = this._loader;
        var urls = {};
        var resources = this._resources;
        this._loadNum = 0;
        for (var i = 0, len = resources.length; i < len; i++) {
            var res = resources[i];
            if (res.id && loader.resources[res.id]) {
                continue;
            }
            if (urls[res.url]) {
                urls[res.url].push(res.id);
                continue;
            }
            if (res.type === "audio" /* AUDIO */ || res.type === "sound" /* SOUND */) {
                // 微信wechat不能直接加载audio类型
                // eslint-disable-next-line max-len
                loader.add(res.id, Object(_utils_getUrl__WEBPACK_IMPORTED_MODULE_7__["getUrl"])(res.url, this.data.baseUrl), { loadType: vf.LoaderResource.LOAD_TYPE.XHR, xhrType: 'arraybuffer' });
            }
            else {
                loader.add(res.id, Object(_utils_getUrl__WEBPACK_IMPORTED_MODULE_7__["getUrl"])(res.url, this.data.baseUrl));
            }
            urls[res.url] = [res.id];
        }
        var progressId = 0;
        var completeId = 0;
        var errorId = 0;
        progressId = loader.onProgress.add(function (loader2, resources) {
            _this._loadNum++;
            _this.emit("LoadProgress" /* LoadProgress */, [loader2.progress, _this._loadNum, _this._resources.length, resources]);
        });
        completeId = loader.onComplete.add(function (loader2, resources) {
            _this.vfResources = resources;
            if (!_this.loadFailResources()) {
                for (var key in urls) {
                    var id = urls[key].shift();
                    while (urls[key].length > 0) {
                        _this.vfResources[urls[key].shift()] = resources[id];
                    }
                }
                loader.onComplete.detach(progressId);
                loader.onComplete.detach(completeId);
                loader.onComplete.detach(errorId);
                _this._isLoadResource = true;
                _this.loadResourceComplete();
            }
        });
        errorId = loader.onError.add(function (error, loader2, loaderResource) {
            var assetFail = _this._assetFails.get(loaderResource.name);
            if (assetFail) {
                if (assetFail.count >= 4) {
                    _this._assetFails.delete(loaderResource.name);
                    _this.stage.systemEvent.emitError('404', [loaderResource.url]);
                }
                assetFail.count++;
            }
            else {
                _this._assetFails.set(loaderResource.name, { id: loaderResource.name,
                    url: loaderResource.url,
                    extension: loaderResource.extension, count: 1 });
            }
        });
        loader.load();
    };
    /** */
    RES.prototype.loadFailResources = function () {
        if (this._loader === undefined) {
            return false;
        }
        if (this._assetFails.size <= 0) {
            return false;
        }
        var loader = this._loader;
        var cdns = this.stage.config.cdns;
        this._assetFails.forEach(function (res) {
            var type = Object(_assets_Assets__WEBPACK_IMPORTED_MODULE_6__["getAssetType"])(res.extension);
            var cdn;
            switch (type) {
                case 4 /* Image */:
                    cdn = cdns.image;
                    break;
                case 5 /* Audio */:
                case 6 /* Video */:
                    cdn = cdns.media;
                    break;
                default:
                    cdn = cdns.default;
            }
            var url = cdn[(res.count - 1) % cdn.length];
            if (res.url.indexOf('http') !== -1 || res.url.indexOf('//') === 0) {
                url += res.url.substr(res.url.indexOf('/', res.url.indexOf('.')));
            }
            else {
                url += res.url;
            }
            delete loader.resources[res.id];
            loader.add(res.id, url);
        });
        return true;
    };
    RES.prototype.getVfsByComponentId = function (libId) {
        if (this.vfActions) {
            for (var i = 0, len = this.vfActions.length; i < len; i++) {
                var action = this.vfActions[i];
                if (action && action.type === 36 /* ActionList */ && action.value === libId) {
                    return action.execute;
                }
            }
        }
        return undefined;
    };
    return RES;
}(vf.utils.EventEmitter));



/***/ }),

/***/ "./packages/player/src/core/VariableManager.ts":
/*!*****************************************************!*\
  !*** ./packages/player/src/core/VariableManager.ts ***!
  \*****************************************************/
/*! exports provided: VariableManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariableManager", function() { return VariableManager; });
/* harmony import */ var _model_IVFData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/IVFData */ "./packages/player/src/core/model/IVFData.ts");
/* harmony import */ var _utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/VFUtil */ "./packages/player/src/utils/VFUtil.ts");


var VariableManager = /** @class */ (function () {
    function VariableManager() {
        this.variableConfig = {};
        this.variableMap = {};
        this.runFunctionId = 0;
        this.functionMap = {};
        //
    }
    /**
     * Fisher-Yates shuffle
     * @param arr
     */
    VariableManager.prototype.shuffle = function (arr) {
        for (var i = arr.length - 1; i >= 0; i--) {
            var randomIndex = Math.floor(Math.random() * (i + 1));
            var itemAtIndex = arr[randomIndex];
            arr[randomIndex] = arr[i];
            arr[i] = itemAtIndex;
        }
    };
    VariableManager.prototype.clear = function () {
        this.variableMap = {};
        this.functionMap = {};
    };
    VariableManager.prototype.getFunctionId = function () {
        return ++this.runFunctionId;
    };
    VariableManager.prototype.getFunctionTask = function (name) {
        return this.functionMap[name];
    };
    VariableManager.prototype.setFunctionTask = function (name, task) {
        this.functionMap[name] = task;
    };
    VariableManager.prototype.addVariableConfig = function (id, variableData) {
        if (!this.variableConfig[id]) {
            var normalConfig = this.normalizeVariableConfig(variableData);
            this.variableConfig[id] = normalConfig;
        }
    };
    VariableManager.prototype.normalizeVariableConfig = function (variableData) {
        for (var id in variableData) {
            if (variableData.hasOwnProperty(id)) {
                var v = variableData[id];
                var varV = this.createIVariableData(id, v);
                variableData[id] = varV;
            }
        }
        return variableData;
    };
    VariableManager.prototype.addVariableToGlobal = function (variableData) {
        var globalId = VariableManager.GLOBAL_ID;
        this.variableMap[globalId] = this.deepCopy(variableData);
        if (this.variableConfig[globalId]) {
            var variables = this.variableConfig[globalId];
            this.variableMap[globalId] = this.deepCopy(variables);
        }
        else {
            this.addVariableConfig(globalId, variableData);
            if (this.variableConfig[globalId]) {
                var variables = this.variableConfig[globalId];
                this.variableMap[globalId] = this.deepCopy(variables);
            }
        }
    };
    VariableManager.prototype.addVariableToComponent = function (component) {
        var libId = component.libId;
        if (libId) {
            if (this.variableConfig[libId.toString()]) {
                var variables = this.variableConfig[libId.toString()];
                this.variableMap[component.id.toString()] = this.deepCopy(variables);
            }
        }
    };
    VariableManager.prototype.addVariableDataToComponent = function (component, varId, type, data) {
        var libId = component.libId;
        var compId = component.id;
        this.addVariable(libId, compId, varId, type, data);
    };
    VariableManager.prototype.addVariableDataToGlobal = function (varId, type, data) {
        this.addVariable(VariableManager.GLOBAL_ID, VariableManager.GLOBAL_ID, varId, type, data);
    };
    VariableManager.prototype.addVariable = function (libId, targetId, varId, type, data) {
        var variableData = {
            id: varId,
            type: type,
            value: data,
        };
        var variable2 = {
            id: varId,
            type: type,
            value: data,
        };
        var globalVarConfig = this.variableConfig[libId];
        if (!globalVarConfig) {
            globalVarConfig = {};
            this.variableConfig[libId] = globalVarConfig;
        }
        globalVarConfig[varId] = variableData;
        var globalVarMap = this.variableMap[targetId];
        if (!globalVarMap) {
            globalVarMap = {};
            this.variableMap[targetId] = globalVarMap;
        }
        globalVarMap[varId] = variable2;
    };
    VariableManager.prototype.getGlobalVariable = function (id) {
        return this.getVariable(VariableManager.GLOBAL_ID, id);
    };
    VariableManager.prototype.getVariable = function (hasCode, id) {
        var varData = this.variableMap[hasCode];
        if (varData && varData[id]) {
            return varData[id];
        }
    };
    VariableManager.prototype.getVariableByData = function (component, expressItem) {
        if (expressItem[0] === _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].PARAM_VALUE) {
            return this.getVariable(VariableManager.GLOBAL_ID, expressItem[2]);
        }
        var varComponent = Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__["getTargetComponent"])(component, expressItem[1]);
        var hashCode = varComponent ? varComponent.id.toString() : VariableManager.GLOBAL_ID;
        var varItem = this.getVariable(hashCode, expressItem[2]);
        return varItem;
    };
    VariableManager.prototype.caculateExpress = function (component, express) {
        var stackOut = [];
        var stackOperate = [];
        for (var i = 0, len = express.length; i < len; i++) {
            var expressItem = express[i];
            switch (expressItem[0]) {
                case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].CONST:
                case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].VARIABLE:
                case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].STSTEN:
                case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].RANDOM:
                case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].PROPERTY:
                case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].ARRAY_LEN:
                case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].ARRAY_VALUE:
                case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].OBJECT_VALUE:
                case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].PARAM_VALUE:
                case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].ARRAY_FUNCTION:
                case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].COMPONENT:
                    stackOut.push(expressItem);
                    break;
                case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].OPERATION:
                    switch (expressItem[1]) {
                        case '(':
                            stackOperate.push(expressItem);
                            break;
                        case ')':
                            var v = stackOperate.pop();
                            while (v && v[1] !== '(') {
                                stackOut.push(v);
                                v = stackOperate.pop();
                            }
                            break;
                        default:
                            var operateStr = expressItem[1];
                            var curPriority = VariableManager.OPERATE_PRIORITY[operateStr];
                            if (!curPriority) {
                                // can not support this operation:
                                this.emitError(component, 'E1001', [operateStr], "warning" /* WARNING */);
                                return 0;
                            }
                            else {
                                if (stackOperate.length > 0) {
                                    var topOperate = stackOperate[stackOperate.length - 1];
                                    var topOperatePriority = VariableManager.OPERATE_PRIORITY[topOperate[1]];
                                    if (curPriority > topOperatePriority) {
                                        stackOperate.push(expressItem);
                                    }
                                    else {
                                        while (curPriority <= topOperatePriority) {
                                            stackOut.push(topOperate);
                                            stackOperate.pop();
                                            if (stackOperate.length > 0) {
                                                topOperate = stackOperate[stackOperate.length - 1];
                                                topOperatePriority =
                                                    VariableManager.OPERATE_PRIORITY[topOperate[1]];
                                            }
                                            else {
                                                break;
                                            }
                                        }
                                        stackOperate.push(expressItem);
                                    }
                                }
                                else {
                                    stackOperate.push(expressItem);
                                }
                            }
                            break;
                    }
                    break;
                default:
                    break;
            }
        }
        if (stackOperate.length > 0) {
            while (stackOperate.length > 0) {
                var operateStr = stackOperate.pop();
                if (operateStr) {
                    stackOut.push(operateStr);
                }
            }
        }
        var value = this.caculateExpressValue(component, stackOut);
        return value;
    };
    VariableManager.prototype.getExpressItemValue = function (component, expressItem) {
        var result;
        switch (expressItem[0]) {
            case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].CONST:
                result = (expressItem[1]);
                break;
            case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].VARIABLE:
                var varItem = this.getVariableByData(component, expressItem);
                if (varItem) {
                    result = (varItem.value);
                }
                else {
                    this.emitError(component, 'E1002', [expressItem.join(',')], "warning" /* WARNING */);
                    // can not find variable:
                }
                break;
            case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].STSTEN:
                var curDate = new Date();
                var systemValue = 0;
                switch (expressItem[1]) {
                    case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["SystemValueType"].TIME:
                        systemValue = curDate.getTime();
                        break;
                    case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["SystemValueType"].YEAR:
                        systemValue = curDate.getFullYear();
                        break;
                    case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["SystemValueType"].MONTH:
                        systemValue = curDate.getMonth();
                        break;
                    case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["SystemValueType"].DAY:
                        systemValue = curDate.getDay();
                        break;
                    case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["SystemValueType"].DATE:
                        systemValue = curDate.getDate();
                        break;
                    default:
                        break;
                }
                result = (systemValue);
                break;
            case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].RANDOM:
                var randomValue = 0;
                if (expressItem.length >= 3) {
                    var min = expressItem[1];
                    var max = expressItem[2];
                    randomValue = Math.round(Math.random() * (max - min)) + min;
                }
                else {
                    randomValue = Math.random();
                }
                result = (randomValue);
                break;
            case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].COMPONENT:
                var targetArr0 = expressItem[1];
                var targetComponent0 = Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__["getTargetComponent"])(component, targetArr0);
                result = targetComponent0;
                break;
            case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].PROPERTY:
                var targetArr = expressItem[1];
                var targetComponent = Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__["getTargetComponent"])(component, targetArr);
                var componentProperty = targetComponent;
                if (componentProperty && expressItem.length >= 3) {
                    for (var i = 2, len = expressItem.length; i < len; i++) {
                        var key = expressItem[i];
                        if (componentProperty && key !== undefined) {
                            componentProperty = componentProperty[key];
                        }
                    }
                    result = componentProperty;
                }
                else {
                    result = undefined;
                }
                break;
            case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].ARRAY_LEN:
                var arrItem = this.getVariableByData(component, expressItem);
                if (arrItem) {
                    result = (arrItem.value.length);
                }
                else {
                    this.emitError(component, 'E1002', [expressItem.join(',')], "warning" /* WARNING */);
                    // can not find variable:
                }
                break;
            case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].ARRAY_VALUE:
                // expressItem 0:type, 1:componentId, 2: variableId, 3: index, 4?: property
                var arrItem1 = this.getVariableByData(component, expressItem);
                if (arrItem1) {
                    var arr = arrItem1.value;
                    var index = expressItem[3];
                    if (Array.isArray(index)) {
                        var indexVar = this.getExpressItemValue(component, index);
                        if (Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(indexVar)) {
                            index = indexVar;
                        }
                        else {
                            // can not find array index by variable:
                            this.emitError(component, 'E1003', [index], "warning" /* WARNING */);
                            index = 0;
                        }
                    }
                    result = arr[index];
                    if (expressItem.length >= 5 && result) {
                        result = result[expressItem[4]];
                    }
                }
                else {
                    this.emitError(component, 'E1002', [expressItem.join(',')], "warning" /* WARNING */);
                    // can not find variable:
                }
                break;
            case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].ARRAY_FUNCTION:
                var arrItem2 = this.getVariableByData(component, expressItem);
                if (arrItem2) {
                    if (Array.isArray(arrItem2.value)) {
                        var targetArray = arrItem2.value;
                        switch (expressItem[3]) {
                            case 'pop': // [10, [], 'arr', 'pop']
                                result = targetArray.pop();
                                break;
                            case 'push': // [10, [], 'arr', 'push', [0, 4]]
                                if (expressItem.length > 4) {
                                    var pushTarget = this.getExpressItemValue(component, expressItem[4]);
                                    result = targetArray.push(pushTarget);
                                }
                                break;
                            case 'shift': // [10, [], 'arr', 'shift']
                                result = targetArray.shift();
                                break;
                            case 'unshift': // [10, [], 'arr', 'unshift', [0, 4]]
                                if (expressItem.length > 4) {
                                    var unshiftTarget = this.getExpressItemValue(component, expressItem[4]);
                                    result = targetArray.unshift(unshiftTarget);
                                }
                                break;
                            case 'concat': // [10, [], 'arr', 'concat', [0, [1,2]]]
                                if (expressItem.length > 3) {
                                    if (expressItem.length > 4) {
                                        var concatTarget = this.getExpressItemValue(component, expressItem[4]);
                                        result = targetArray.concat(concatTarget);
                                    }
                                    else {
                                        result = targetArray.concat();
                                    }
                                }
                                break;
                            case 'splice': // [10, [], 'arr', 'splice', [0, 1], [0,1] => $arr.splice(1,1);
                                if (expressItem.length === 5) {
                                    var startValue = this.getExpressItemValue(component, expressItem[4]);
                                    result = targetArray.splice(startValue);
                                }
                                else if (expressItem.length === 6) {
                                    var startValue = this.getExpressItemValue(component, expressItem[4]);
                                    var deleteCount = this.getExpressItemValue(component, expressItem[5]);
                                    result = targetArray.splice(startValue, deleteCount);
                                }
                                else if (expressItem.length > 6) {
                                    var startValue = this.getExpressItemValue(component, expressItem[4]);
                                    var deleteCount = this.getExpressItemValue(component, expressItem[5]);
                                    var addValue = this.getExpressItemValue(component, expressItem[6]);
                                    result = targetArray.splice(startValue, deleteCount, addValue);
                                }
                                break;
                            default:
                                // array has not function: 
                                this.emitError(component, 'E1004', [expressItem[3]], "warning" /* WARNING */);
                                break;
                        }
                    }
                    else {
                        // variable is not array: 
                        this.emitError(component, 'E1005', [expressItem.join(',')], "warning" /* WARNING */);
                    }
                }
                else {
                    this.emitError(component, 'E1002', [expressItem.join(',')], "warning" /* WARNING */);
                    // can not find variable:
                }
                break;
            case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].OBJECT_VALUE:
            case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].PARAM_VALUE:
                // expressItem 0:type, 1:componentId, 2: variableId, 3: property, 4?: property
                var objItem = this.getVariableByData(component, expressItem);
                if (objItem) {
                    var obj = objItem.value;
                    for (var i = 3, len = expressItem.length; i < len; i++) {
                        var key = expressItem[i];
                        if (obj && key !== undefined) {
                            obj = obj[key];
                        }
                    }
                    result = obj;
                }
                break;
            default:
                break;
        }
        return result;
    };
    VariableManager.prototype.caculateExpressValue = function (component, stackExpress) {
        var stackOut = [];
        if (stackExpress.length === 1) {
            return this.getExpressItemValue(component, stackExpress[0]);
        }
        for (var i = 0, len = stackExpress.length; i < len; i++) {
            var expres = stackExpress[i];
            switch (expres[0]) {
                case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].OPERATION:
                    var expItem0 = void 0;
                    var expItem1 = void 0;
                    if (expres[1] === '!') {
                        expItem0 = stackOut.pop();
                    }
                    else {
                        expItem1 = stackOut.pop();
                        expItem0 = stackOut.pop();
                    }
                    var resultItem = this.caculateOneExpress(component, expres[1], expItem0, expItem1);
                    stackOut.push(resultItem);
                    break;
                default:
                    stackOut.push(expres);
                    break;
            }
        }
        if (stackOut.length === 1) {
            return stackOut[0][1];
        }
        else {
            // caculateExpressValue error'
            this.emitError(component, 'E1006', undefined, "warning" /* WARNING */);
            return 0;
        }
    };
    VariableManager.prototype.caculateOneExpress = function (component, operateStr, expItem0, expItem1) {
        var resultItem = [_model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].CONST, 0];
        var result0;
        var result1;
        var result;
        if (expItem0) {
            result0 = this.getExpressItemValue(component, expItem0);
        }
        if (expItem1) {
            result1 = this.getExpressItemValue(component, expItem1);
        }
        switch (operateStr) {
            case '*':
                result = result0 * result1;
                break;
            case '/':
                result = result0 / result1;
                break;
            case '%':
                result = result0 % result1;
                break;
            case '+':
                result = result0 + result1;
                break;
            case '-':
                result = result0 - result1;
                break;
            case '>=':
                result = result0 >= result1;
                break;
            case '<=':
                result = result0 <= result1;
                break;
            case '>':
                result = result0 > result1;
                break;
            case '<':
                result = result0 < result1;
                break;
            case '==':
                // tslint:disable-next-line: triple-equals
                result = result0 == result1;
                break;
            case '===':
                result = result0 === result1;
                break;
            case '!=':
                // tslint:disable-next-line: triple-equals
                result = result0 != result1;
            case '!==':
                result = result0 !== result1;
                break;
            case '!':
                result = !result0;
                break;
            case '&&':
                result = result0 && result1;
                break;
            case '||':
                result = result0 || result1;
                break;
            case '=':
                result = result1;
                if (expItem0) {
                    switch (expItem0[0]) {
                        case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].VARIABLE:
                            var varItem = this.getVariableByData(component, expItem0);
                            if (varItem) {
                                varItem.value = result;
                            }
                            else {
                                this.emitError(component, 'E1002', [expItem0.join(',')], "warning" /* WARNING */);
                                // can not find variable:
                            }
                            break;
                        case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].PROPERTY:
                            var targetArr = expItem0[1];
                            var targetProperty = expItem0[2];
                            var targetComponent = Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__["getTargetComponent"])(component, targetArr);
                            if (targetComponent) {
                                if (expItem0.length >= 3) {
                                    var targetProp = targetComponent;
                                    var prop = targetProperty;
                                    for (var i = 2, len = expItem0.length; i < len; i++) {
                                        prop = expItem0[i];
                                        if (i === len - 1) {
                                            break;
                                        }
                                        else {
                                            if (targetProp) {
                                                targetProp = targetProp[prop];
                                            }
                                            else {
                                                // can not find property: 
                                                this.emitError(component, 'E1007', [expItem0.join(',')], "warning" /* WARNING */);
                                            }
                                        }
                                    }
                                    if (targetProp && prop) {
                                        targetProp[prop] = result;
                                    }
                                    else {
                                        // can not find property: 
                                        this.emitError(component, 'E1007', [expItem0.join(',')], "warning" /* WARNING */);
                                    }
                                }
                            }
                            break;
                        case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].ARRAY_LEN:
                            var arrItem = this.getVariableByData(component, expItem0);
                            if (arrItem) {
                                arrItem.value.length = result;
                            }
                            else {
                                this.emitError(component, 'E1002', [expItem0.join(',')], "warning" /* WARNING */);
                                // can not find variable:
                            }
                            break;
                        case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].ARRAY_VALUE:
                            // expItem0 0:type, 1:componentId, 2: variableId, 3: index, 4?: property
                            var arrItem1 = this.getVariableByData(component, expItem0);
                            if (arrItem1) {
                                var arr = arrItem1.value;
                                var index = expItem0[3] || 0;
                                if (Array.isArray(index)) {
                                    var indexVar = this.getExpressItemValue(component, index);
                                    if (Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(indexVar)) {
                                        index = indexVar;
                                    }
                                    else {
                                        // can not find array index by variable:
                                        this.emitError(component, 'E1003', [index], "warning" /* WARNING */);
                                        index = 0;
                                    }
                                }
                                if (expItem0.length >= 5) {
                                    var obj = arr[index];
                                    var key = void 0;
                                    for (var i = 4, len = expItem0.length; i < len; i++) {
                                        key = expItem0[i];
                                        if (i < len - 1 && obj[key]) {
                                            obj = obj[key];
                                        }
                                    }
                                    if (obj && key !== undefined) {
                                        obj[key] = result;
                                    }
                                }
                                else {
                                    arr[index] = result;
                                }
                            }
                            else {
                                this.emitError(component, 'E1002', [expItem0.join(',')], "warning" /* WARNING */);
                                // can not find variable:
                            }
                            break;
                        case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].OBJECT_VALUE:
                        case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].PARAM_VALUE:
                            // expressItem 0:type, 1:componentId, 2: variableId, 3: property, 4?: property
                            var objItem = this.getVariableByData(component, expItem0);
                            if (objItem) {
                                var obj = objItem.value;
                                var key = void 0;
                                for (var i = 3, len = expItem0.length; i < len; i++) {
                                    key = expItem0[i];
                                    if (i < len - 1 && obj[key]) {
                                        obj = obj[key];
                                    }
                                }
                                if (obj && key !== undefined) {
                                    obj[key] = result;
                                }
                                else {
                                    // 基本类型
                                    objItem.value = result;
                                }
                            }
                            break;
                        case _model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].CONST:
                            // the left value can NOT be const:
                            this.emitError(component, 'E1008', [expItem0.join(',')], "warning" /* WARNING */);
                            break;
                        default:
                            break;
                    }
                }
                break;
            default:
                // can not support this operation:
                this.emitError(component, 'E1001', [operateStr], "warning" /* WARNING */);
                break;
        }
        resultItem[1] = result;
        return resultItem;
    };
    VariableManager.prototype.deepCopy = function (variableData) {
        var str = JSON.stringify(variableData);
        var newVariableData = JSON.parse(str);
        return newVariableData;
    };
    VariableManager.prototype.isIVariableData = function (v) {
        if (Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__["isObject"])(v) &&
            v.hasOwnProperty('type') &&
            v.hasOwnProperty('value') &&
            (v.type === "array" /* ARRAY */ ||
                v.type === "boolean" /* BOOLEAN */ ||
                v.type === "number" /* NUMBER */ ||
                v.type === "object" /* OBJECT */ ||
                v.type === "string" /* STRING */)) {
            return true;
        }
        return false;
    };
    VariableManager.prototype.createIVariableData = function (id, v) {
        if (!this.isIVariableData(v)) {
            var varData = {
                id: id,
                type: "object" /* OBJECT */,
                value: v,
            };
            if (Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__["isBoolean"])(v)) {
                varData.type = "boolean" /* BOOLEAN */;
            }
            else if (Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__["isString"])(v)) {
                varData.type = "string" /* STRING */;
            }
            else if (Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(v)) {
                varData.type = "string" /* STRING */;
            }
            else if (Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__["isArray"])(v)) {
                varData.type = "array" /* ARRAY */;
            }
            else {
                varData.type = "object" /* OBJECT */;
            }
            return varData;
        }
        else {
            return v;
        }
    };
    VariableManager.prototype.emitError = function (component, code, params, level) {
        if (level === void 0) { level = "error" /* ERROR */; }
        var _a;
        if (component && component.vfStage) {
            var vfStage = component.vfStage;
            vfStage.systemEvent.emitError(code, params, level);
        }
        else {
            throw new Error(code + ': ' + ((_a = params) === null || _a === void 0 ? void 0 : _a.join(' ')));
        }
    };
    VariableManager.GLOBAL_ID = 'global';
    VariableManager.OPERATE_PRIORITY = {
        '*': 100,
        '/': 100,
        '%': 98,
        '+': 97,
        '-': 97,
        '>=': 95,
        '<=': 94,
        '>': 93,
        '<': 92,
        '==': 91,
        '===': 91,
        '!=': 90,
        '!==': 90,
        '!': 89,
        '&&': 88,
        '||': 87,
        '=': 86,
    };
    return VariableManager;
}());



/***/ }),

/***/ "./packages/player/src/core/actionTask/ActionList.ts":
/*!***********************************************************!*\
  !*** ./packages/player/src/core/actionTask/ActionList.ts ***!
  \***********************************************************/
/*! exports provided: ActionList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionList", function() { return ActionList; });
/* harmony import */ var _AddListenerTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddListenerTask */ "./packages/player/src/core/actionTask/AddListenerTask.ts");
/* harmony import */ var _SetPropertyTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SetPropertyTask */ "./packages/player/src/core/actionTask/SetPropertyTask.ts");
/* harmony import */ var _ExpressTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpressTask */ "./packages/player/src/core/actionTask/ExpressTask.ts");
/* harmony import */ var _IfTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IfTask */ "./packages/player/src/core/actionTask/IfTask.ts");
/* harmony import */ var _core_QueueTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/QueueTask */ "./packages/player/src/core/actionTask/core/QueueTask.ts");
/* harmony import */ var _DefineFunctionTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DefineFunctionTask */ "./packages/player/src/core/actionTask/DefineFunctionTask.ts");
/* harmony import */ var _FunctionTask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FunctionTask */ "./packages/player/src/core/actionTask/FunctionTask.ts");
/* harmony import */ var _CallFunctionTask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CallFunctionTask */ "./packages/player/src/core/actionTask/CallFunctionTask.ts");
/* harmony import */ var _PrintTask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrintTask */ "./packages/player/src/core/actionTask/PrintTask.ts");
/* harmony import */ var _SoundTask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SoundTask */ "./packages/player/src/core/actionTask/SoundTask.ts");
/* harmony import */ var _PlayAnimationTask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PlayAnimationTask */ "./packages/player/src/core/actionTask/PlayAnimationTask.ts");
/* harmony import */ var _JumpToNextSceneTask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./JumpToNextSceneTask */ "./packages/player/src/core/actionTask/JumpToNextSceneTask.ts");
/* harmony import */ var _JumpToPrevSceneTask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./JumpToPrevSceneTask */ "./packages/player/src/core/actionTask/JumpToPrevSceneTask.ts");
/* harmony import */ var _JumpToSceneTask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./JumpToSceneTask */ "./packages/player/src/core/actionTask/JumpToSceneTask.ts");
/* harmony import */ var _ArrayPopTask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ArrayPopTask */ "./packages/player/src/core/actionTask/ArrayPopTask.ts");
/* harmony import */ var _ArrayPushTask__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ArrayPushTask */ "./packages/player/src/core/actionTask/ArrayPushTask.ts");
/* harmony import */ var _ArraySpliceTask__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ArraySpliceTask */ "./packages/player/src/core/actionTask/ArraySpliceTask.ts");
/* harmony import */ var _ArrayRandomTask__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ArrayRandomTask */ "./packages/player/src/core/actionTask/ArrayRandomTask.ts");
/* harmony import */ var _ArrayInitTask__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ArrayInitTask */ "./packages/player/src/core/actionTask/ArrayInitTask.ts");
/* harmony import */ var _ArrayConcatTask__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ArrayConcatTask */ "./packages/player/src/core/actionTask/ArrayConcatTask.ts");
/* harmony import */ var _ArrayShiftTask__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ArrayShiftTask */ "./packages/player/src/core/actionTask/ArrayShiftTask.ts");
/* harmony import */ var _ArrayUnshiftTask__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ArrayUnshiftTask */ "./packages/player/src/core/actionTask/ArrayUnshiftTask.ts");
/* harmony import */ var _AddListenerCallTask__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./AddListenerCallTask */ "./packages/player/src/core/actionTask/AddListenerCallTask.ts");
/* harmony import */ var _EmitEventTask__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./EmitEventTask */ "./packages/player/src/core/actionTask/EmitEventTask.ts");
/* harmony import */ var _DefineVariableTask__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./DefineVariableTask */ "./packages/player/src/core/actionTask/DefineVariableTask.ts");
/* harmony import */ var _CallProtoFunctionTask__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./CallProtoFunctionTask */ "./packages/player/src/core/actionTask/CallProtoFunctionTask.ts");
/* harmony import */ var _RemoveListenerTask__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./RemoveListenerTask */ "./packages/player/src/core/actionTask/RemoveListenerTask.ts");
/* harmony import */ var _ForTask__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ForTask */ "./packages/player/src/core/actionTask/ForTask.ts");
/* harmony import */ var _BreakTask__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./BreakTask */ "./packages/player/src/core/actionTask/BreakTask.ts");
/* harmony import */ var _WaitTask__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./WaitTask */ "./packages/player/src/core/actionTask/WaitTask.ts");
/* harmony import */ var _SetTimeoutTask__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./SetTimeoutTask */ "./packages/player/src/core/actionTask/SetTimeoutTask.ts");
/* harmony import */ var _SetIntervalTask__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./SetIntervalTask */ "./packages/player/src/core/actionTask/SetIntervalTask.ts");
/* harmony import */ var _EnterFrameTask__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./EnterFrameTask */ "./packages/player/src/core/actionTask/EnterFrameTask.ts");
/* harmony import */ var _EnterFrameCallTask__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./EnterFrameCallTask */ "./packages/player/src/core/actionTask/EnterFrameCallTask.ts");


































var ActionList = /** @class */ (function () {
    function ActionList(component, data) {
        this._actionList = [];
        this.component = component;
        this.data = data;
        this.parseData();
    }
    ActionList.prototype.run = function () {
        if (this._actionList && this._actionList.length) {
            for (var i = 0, len = this._actionList.length; i < len; i++) {
                var task = this._actionList[i];
                task.run();
            }
        }
    };
    ActionList.prototype.stop = function () {
        if (this._actionList && this._actionList.length) {
            for (var i = 0, len = this._actionList.length; i < len; i++) {
                var task = this._actionList[i];
                task.stop();
            }
        }
    };
    ActionList.prototype.pause = function () {
        if (this._actionList && this._actionList.length) {
            for (var i = 0, len = this._actionList.length; i < len; i++) {
                var task = this._actionList[i];
                task.pause();
            }
        }
    };
    ActionList.prototype.resume = function () {
        if (this._actionList && this._actionList.length) {
            for (var i = 0, len = this._actionList.length; i < len; i++) {
                var task = this._actionList[i];
                task.resume();
            }
        }
    };
    ActionList.prototype.parseData = function () {
        if (this.data) {
            if (Array.isArray(this.data)) {
                this.parseAST(this.data);
            }
        }
    };
    ActionList.prototype.addGlobalVariable = function (action) {
        if (this.component && this.component.vfStage) {
            var variableManager = this.component.vfStage.variableManager;
            variableManager.addVariableDataToGlobal(action.varId, action.variableType, action.value);
        }
    };
    ActionList.prototype.parseAST = function (actions) {
        if (actions) {
            for (var i = 0, len = actions.length; i < len; i++) {
                var task = this.parseAction(actions[i]);
                if (task) {
                    this._actionList.push(task);
                }
            }
        }
    };
    ActionList.prototype.parseAction = function (data) {
        var task;
        switch (data.type) {
            case 1 /* Add */:
                task = this.parseAddToStageBefore(data);
                break;
            case 2 /* Added */:
                task = this.parseAddToStage(data);
                break;
            case 4 /* SetProperty */:
                task = this.parseSetProperty(data);
                break;
            case 5 /* Click */:
                task = this.parseClick(data);
                break;
            case 6 /* Express */:
                task = this.parseExpress(data);
                break;
            case 7 /* IfGroup */:
                task = this.parseIf(data);
                break;
            case 11 /* DefineFunction */:
                task = this.parseDefineFunction(data);
                break;
            case 12 /* CallFunction */:
                task = this.parseCallFunction(data);
                break;
            case 0 /* Print */:
                task = this.parsePrint(data);
                break;
            case 13 /* AddEventListener */:
                task = this.parseAddEventListener(data);
                break;
            case 14 /* RemoveEventListener */:
                task = this.parseRemoveEventListener(data);
                break;
            case 15 /* EmitEvent */:
                task = this.parseEmitEvent(data);
                break;
            case 16 /* PlaySound */:
            case 33 /* PauseSound */:
            case 34 /* ResumeSound */:
                task = this.parseSound(data);
                break;
            case 17 /* PlayAnimation */:
                task = this.parsePlayAnimation(data);
                break;
            case 18 /* JumpToNextScene */:
                task = this.parseJumpToNextScene(data);
                break;
            case 19 /* JumpToPrevScene */:
                task = this.parseJumpToPrevScene(data);
                break;
            case 20 /* JumpToScene */:
                task = this.parseJumpToScene(data);
                break;
            case 21 /* ArrayInit */:
                task = new _ArrayInitTask__WEBPACK_IMPORTED_MODULE_18__["ArrayInitTask"](this.component, data);
                break;
            case 22 /* ArrayPop */:
                task = new _ArrayPopTask__WEBPACK_IMPORTED_MODULE_14__["ArrayPopTask"](this.component, data);
                break;
            case 23 /* ArrayPush */:
                task = new _ArrayPushTask__WEBPACK_IMPORTED_MODULE_15__["ArrayPushTask"](this.component, data);
                break;
            case 24 /* ArraySplice */:
                task = new _ArraySpliceTask__WEBPACK_IMPORTED_MODULE_16__["ArraySpliceTask"](this.component, data);
                break;
            case 25 /* ArrayRandom */:
                task = new _ArrayRandomTask__WEBPACK_IMPORTED_MODULE_17__["ArrayRandomTask"](this.component, data);
                break;
            case 26 /* ArrayConcat */:
                task = new _ArrayConcatTask__WEBPACK_IMPORTED_MODULE_19__["ArrayConcatTask"](this.component, data);
                break;
            case 27 /* ArrayShift */:
                task = new _ArrayShiftTask__WEBPACK_IMPORTED_MODULE_20__["ArrayShiftTask"](this.component, data);
                break;
            case 28 /* ArrayUnshift */:
                task = new _ArrayUnshiftTask__WEBPACK_IMPORTED_MODULE_21__["ArrayUnshiftTask"](this.component, data);
                break;
            case 29 /* AddEventListenerCall */:
                task = this.parseAddEventListenerCall(data);
                break;
            case 37 /* DefineVariable */:
                task = new _DefineVariableTask__WEBPACK_IMPORTED_MODULE_24__["DefineVariableTask"](this.component, data);
                break;
            case 30 /* CallProtoFunction */:
                task = new _CallProtoFunctionTask__WEBPACK_IMPORTED_MODULE_25__["CallProtoFunctionTask"](this.component, data);
                break;
            case 31 /* GotoPlay */:
                var gotoData0 = data;
                var gotoPlayData = {
                    type: 30 /* CallProtoFunction */,
                    target: gotoData0.target,
                    name: 'gotoPlay',
                };
                gotoPlayData.params = [];
                if (Array.isArray(gotoData0.name)) {
                    gotoPlayData.params.push(gotoData0.name);
                }
                else {
                    gotoPlayData.params.push([0, gotoData0.name]);
                }
                if (Array.isArray(gotoData0.frame)) {
                    gotoPlayData.params.push(gotoData0.frame);
                }
                else {
                    gotoPlayData.params.push([0, gotoData0.frame]);
                }
                if (Array.isArray(gotoData0.times)) {
                    gotoPlayData.params.push(gotoData0.times);
                }
                else {
                    gotoPlayData.params.push([0, gotoData0.times]);
                }
                task = new _CallProtoFunctionTask__WEBPACK_IMPORTED_MODULE_25__["CallProtoFunctionTask"](this.component, gotoPlayData);
                break;
            case 32 /* GotoStop */:
                var gotoData1 = data;
                var gotoStopData = {
                    type: 30 /* CallProtoFunction */,
                    target: gotoData1.target,
                    name: 'gotoStop',
                };
                gotoStopData.params = [];
                if (Array.isArray(gotoData1.name)) {
                    gotoStopData.params.push(gotoData1.name);
                }
                else {
                    gotoStopData.params.push([0, gotoData1.name]);
                }
                if (Array.isArray(gotoData1.frame)) {
                    gotoStopData.params.push(gotoData1.frame);
                }
                else {
                    gotoStopData.params.push([0, gotoData1.frame]);
                }
                task = new _CallProtoFunctionTask__WEBPACK_IMPORTED_MODULE_25__["CallProtoFunctionTask"](this.component, gotoStopData);
                break;
            case 38 /* For */:
                task = this.parseFor(data);
                break;
            case 39 /* Break */:
                task = new _BreakTask__WEBPACK_IMPORTED_MODULE_28__["BreakTask"]();
                break;
            case 40 /* Wait */:
                task = new _WaitTask__WEBPACK_IMPORTED_MODULE_29__["WaitTask"](this.component, data);
                break;
            case 41 /* SetTimeout */:
                task = this.parseSetTimeout(data);
                break;
            case 42 /* SetInterval */:
                task = this.parseSetInterval(data);
                break;
            case 43 /* EnterFrame */:
                task = this.parseEnterFrame(data);
                break;
            case 44 /* EnterFrameCall */:
                task = this.parseEnterFrameCall(data);
                break;
            default:
                break;
        }
        return task;
    };
    ActionList.prototype.parseSubTask = function (task, data) {
        if (data.execute) {
            for (var i = 0, len = data.execute.length; i < len; i++) {
                var taskData = data.execute[i];
                var subTask = this.parseAction(taskData);
                if (subTask) {
                    task.addSubTask(subTask);
                }
            }
        }
    };
    ActionList.prototype.parseAddToStageBefore = function (data) {
        var addAction = {
            type: 13 /* AddEventListener */,
            event: "Add" /* Add */,
            target: [],
        };
        var task = new _AddListenerTask__WEBPACK_IMPORTED_MODULE_0__["AddListenerTask"](this.component, addAction);
        this.parseSubTask(task, data);
        return task;
    };
    ActionList.prototype.parseAddToStage = function (data) {
        var addedAction = {
            type: 13 /* AddEventListener */,
            event: "Added" /* Added */,
            target: [],
        };
        var task = new _AddListenerTask__WEBPACK_IMPORTED_MODULE_0__["AddListenerTask"](this.component, addedAction);
        this.parseSubTask(task, data);
        return task;
    };
    ActionList.prototype.parseSetProperty = function (data) {
        var task = new _SetPropertyTask__WEBPACK_IMPORTED_MODULE_1__["SetPropertyTask"](this.component, data);
        return task;
    };
    ActionList.prototype.parseClick = function (data) {
        var addlistenerAction = {
            event: "click" /* Click */,
            type: 13 /* AddEventListener */,
            target: data.target,
        };
        var task = new _AddListenerTask__WEBPACK_IMPORTED_MODULE_0__["AddListenerTask"](this.component, addlistenerAction);
        this.parseSubTask(task, data);
        return task;
    };
    ActionList.prototype.parseExpress = function (data) {
        var task = new _ExpressTask__WEBPACK_IMPORTED_MODULE_2__["ExpressTask"](this.component, data);
        return task;
    };
    ActionList.prototype.parseIf = function (data) {
        var task = new _IfTask__WEBPACK_IMPORTED_MODULE_3__["IfTask"](this.component);
        if (data.execute) {
            for (var i = 0, len = data.execute.length; i < len; i++) {
                var ifPart = data.execute[i];
                if (ifPart.type === 8 /* If */
                    || ifPart.type === 9 /* ElseIf */
                    || ifPart.type === 10 /* Else */) {
                    var condition = ifPart.condition;
                    var conditionQue = new _core_QueueTask__WEBPACK_IMPORTED_MODULE_4__["QueueTask"]();
                    if (ifPart.execute) {
                        for (var j = 0, jlen = ifPart.execute.length; j < jlen; j++) {
                            var subTask = this.parseAction(ifPart.execute[j]);
                            if (subTask) {
                                conditionQue.addTask(subTask);
                            }
                        }
                    }
                    task.addCondition(condition, conditionQue);
                }
            }
        }
        return task;
    };
    ActionList.prototype.parseDefineFunction = function (data) {
        var funTask = new _FunctionTask__WEBPACK_IMPORTED_MODULE_6__["FunctionTask"](this.component, data.name);
        this.parseSubTask(funTask, data);
        var task = new _DefineFunctionTask__WEBPACK_IMPORTED_MODULE_5__["DefineFunctionTask"](this.component, data.name, data, funTask);
        return task;
    };
    ActionList.prototype.parseCallFunction = function (data) {
        var task = new _CallFunctionTask__WEBPACK_IMPORTED_MODULE_7__["CallFunctionTask"](this.component, data.name, data);
        return task;
    };
    ActionList.prototype.parsePrint = function (data) {
        var task = new _PrintTask__WEBPACK_IMPORTED_MODULE_8__["PrintTask"](this.component, data);
        return task;
    };
    ActionList.prototype.parseAddEventListener = function (data) {
        var task = new _AddListenerTask__WEBPACK_IMPORTED_MODULE_0__["AddListenerTask"](this.component, data);
        this.parseSubTask(task, data);
        return task;
    };
    ActionList.prototype.parseRemoveEventListener = function (data) {
        var task = new _RemoveListenerTask__WEBPACK_IMPORTED_MODULE_26__["RemoveListenerTask"](this.component, data);
        return task;
    };
    ActionList.prototype.parseEmitEvent = function (data) {
        var task = new _EmitEventTask__WEBPACK_IMPORTED_MODULE_23__["EmitEventTask"](this.component, data);
        return task;
    };
    ActionList.prototype.parseAddEventListenerCall = function (data) {
        if (data.funName) {
            var task = new _AddListenerCallTask__WEBPACK_IMPORTED_MODULE_22__["AddListenerCallTask"](this.component, data);
            return task;
        }
    };
    ActionList.prototype.parseSound = function (data) {
        var task = new _SoundTask__WEBPACK_IMPORTED_MODULE_9__["SoundTask"](this.component, data);
        return task;
    };
    ActionList.prototype.parsePlayAnimation = function (data) {
        var task = new _PlayAnimationTask__WEBPACK_IMPORTED_MODULE_10__["PlayAnimationTask"](this.component, data);
        return task;
    };
    ActionList.prototype.parseJumpToNextScene = function (data) {
        var task = new _JumpToNextSceneTask__WEBPACK_IMPORTED_MODULE_11__["JumpToNextSceneTask"](this.component, data.transition);
        return task;
    };
    ActionList.prototype.parseJumpToPrevScene = function (data) {
        var task = new _JumpToPrevSceneTask__WEBPACK_IMPORTED_MODULE_12__["JumpToPrevSceneTask"](this.component, data.transition);
        return task;
    };
    ActionList.prototype.parseJumpToScene = function (data) {
        var task = new _JumpToSceneTask__WEBPACK_IMPORTED_MODULE_13__["JumpToSceneTask"](this.component, data.value, data.transition);
        return task;
    };
    ActionList.prototype.parseFor = function (data) {
        var task = new _ForTask__WEBPACK_IMPORTED_MODULE_27__["ForTask"](this.component, data);
        this.parseSubTask(task, data);
        return task;
    };
    ActionList.prototype.parseSetTimeout = function (data) {
        var task = new _SetTimeoutTask__WEBPACK_IMPORTED_MODULE_30__["SetTimeoutTask"](this.component, data);
        this.parseSubTask(task, data);
        return task;
    };
    ActionList.prototype.parseSetInterval = function (data) {
        var task = new _SetIntervalTask__WEBPACK_IMPORTED_MODULE_31__["SetIntervalTask"](this.component, data);
        this.parseSubTask(task, data);
        return task;
    };
    ActionList.prototype.parseEnterFrame = function (data) {
        var task = new _EnterFrameTask__WEBPACK_IMPORTED_MODULE_32__["EnterFrameTask"](this.component, data);
        this.parseSubTask(task, data);
        return task;
    };
    ActionList.prototype.parseEnterFrameCall = function (data) {
        var task = new _EnterFrameCallTask__WEBPACK_IMPORTED_MODULE_33__["EnterFrameCallTask"](this.component, data);
        return task;
    };
    return ActionList;
}());



/***/ }),

/***/ "./packages/player/src/core/actionTask/AddListenerCallTask.ts":
/*!********************************************************************!*\
  !*** ./packages/player/src/core/actionTask/AddListenerCallTask.ts ***!
  \********************************************************************/
/*! exports provided: AddListenerCallTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddListenerCallTask", function() { return AddListenerCallTask; });
/* harmony import */ var _core_ContainerTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/ContainerTask */ "./packages/player/src/core/actionTask/core/ContainerTask.ts");
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
/* harmony import */ var _CallFunctionTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CallFunctionTask */ "./packages/player/src/core/actionTask/CallFunctionTask.ts");
/* harmony import */ var _utils_VFUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/VFUtil */ "./packages/player/src/utils/VFUtil.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* eslint-disable no-mixed-spaces-and-tabs */




var AddListenerCallTask = /** @class */ (function (_super) {
    __extends(AddListenerCallTask, _super);
    function AddListenerCallTask(component, data) {
        var _this = _super.call(this) || this;
        _this.runId = -1;
        _this._loopComplete = false;
        _this.data = data;
        _this.component = component;
        _this.eventName = data.event;
        _this.system = data.system === true;
        _this.global = data.global === true;
        _this.funName = data.funName;
        return _this;
    }
    AddListenerCallTask.prototype.run = function () {
        _super.prototype.run.call(this);
        this._loopComplete = true;
        if (this.loopTask.tasks.length === 0 && this.component && this.funName) {
            this.callfunData = {
                type: 12 /* CallFunction */,
                name: this.funName,
                params: [],
            };
            var callfunctionTask = new _CallFunctionTask__WEBPACK_IMPORTED_MODULE_2__["CallFunctionTask"](this.component, this.funName, this.callfunData);
            this.callfun = callfunctionTask;
            this.loopTask.addTask(callfunctionTask);
        }
        if (this.loopTask) {
            this.loopTask.on(_core_BaseTask__WEBPACK_IMPORTED_MODULE_1__["TaskEvent"].EVENT_COMPLETE, this.onLoopComplete, this);
        }
        if (this.component) {
            if (this.system) {
                var vfStage = this.component.vfStage;
                if (vfStage) {
                    vfStage.systemEvent.on(this.eventName, this.onTriger, this);
                }
            }
            else if (this.global) {
                var vfStage = this.component.vfStage;
                if (vfStage) {
                    vfStage.on(this.eventName, this.onTriger, this);
                }
            }
            else {
                this._component = Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_3__["getTargetComponent"])(this.component, this.data.target);
                if (this._component) {
                    this._component.on(this.eventName, this.onTriger, this);
                }
            }
        }
        this.complete();
    };
    AddListenerCallTask.prototype.stop = function () {
        this.complete();
        if (this._component) {
            if (this.system) {
                var vfStage = this._component.vfStage;
                if (vfStage) {
                    vfStage.systemEvent.off(this.eventName, this.onTriger, this);
                }
            }
            else if (this.global) {
                var vfStage = this._component.vfStage;
                if (vfStage) {
                    vfStage.off(this.eventName, this.onTriger, this);
                }
            }
            else {
                this._component.off(this.eventName, this.onTriger, this);
            }
        }
        if (this.loopTask) {
            this.loopTask.off(_core_BaseTask__WEBPACK_IMPORTED_MODULE_1__["TaskEvent"].EVENT_COMPLETE, this.onLoopComplete);
            this.loopTask.complete();
        }
        _super.prototype.stop.call(this);
    };
    AddListenerCallTask.prototype.break = function () {
        this.complete();
        _super.prototype.break.call(this);
    };
    AddListenerCallTask.prototype.onLoopComplete = function () {
        this._loopComplete = true;
    };
    AddListenerCallTask.prototype.onSystemTriger = function (evt) {
        if (evt.code === this.eventName) {
            this.onTriger(evt);
        }
    };
    AddListenerCallTask.prototype.onTriger = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        if (this._isPaused) {
            return;
        }
        if (params && params.length > 0 && this.callfunData) {
            this.callfunData.params = params;
        }
        if (this.loopTask && this._loopComplete) {
            this._loopComplete = false;
            this.loopTask.run();
        }
    };
    return AddListenerCallTask;
}(_core_ContainerTask__WEBPACK_IMPORTED_MODULE_0__["ContainerTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/AddListenerTask.ts":
/*!****************************************************************!*\
  !*** ./packages/player/src/core/actionTask/AddListenerTask.ts ***!
  \****************************************************************/
/*! exports provided: AddListenerTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddListenerTask", function() { return AddListenerTask; });
/* harmony import */ var _core_ContainerTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/ContainerTask */ "./packages/player/src/core/actionTask/core/ContainerTask.ts");
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
/* harmony import */ var _utils_VFUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/VFUtil */ "./packages/player/src/utils/VFUtil.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var AddListenerTask = /** @class */ (function (_super) {
    __extends(AddListenerTask, _super);
    function AddListenerTask(component, data) {
        var _this = _super.call(this) || this;
        _this.component = component;
        _this._loopComplete = false;
        _this.data = data;
        _this.eventName = data.event;
        _this.system = data.system === true;
        _this.global = data.global === true;
        return _this;
    }
    AddListenerTask.prototype.run = function () {
        _super.prototype.run.call(this);
        this._loopComplete = true;
        if (this.component) {
            if (this.loopTask) {
                this.loopTask.on(_core_BaseTask__WEBPACK_IMPORTED_MODULE_1__["TaskEvent"].EVENT_COMPLETE, this.onLoopComplete, this);
            }
            if (this.system) {
                var vfStage = this.component.vfStage;
                if (vfStage) {
                    vfStage.systemEvent.on(this.eventName, this.onTriger, this);
                }
            }
            else if (this.global) {
                var vfStage = this.component.vfStage;
                if (vfStage) {
                    vfStage.on(this.eventName, this.onTriger, this);
                }
            }
            else {
                this._component = Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_2__["getTargetComponent"])(this.component, this.data.target);
                if (this._component) {
                    this._component.on(this.eventName, this.onTriger, this);
                }
            }
        }
        this.complete();
    };
    AddListenerTask.prototype.stop = function () {
        this.complete();
        if (this._component) {
            if (this.system) {
                var vfStage = this._component.vfStage;
                if (vfStage) {
                    vfStage.systemEvent.off(this.eventName, this.onTriger, this);
                }
            }
            else if (this.global) {
                var vfStage = this._component.vfStage;
                if (vfStage) {
                    vfStage.off(this.eventName, this.onTriger, this);
                }
            }
            else {
                this._component.off(this.eventName, this.onTriger, this);
            }
        }
        if (this.loopTask) {
            this.loopTask.off(_core_BaseTask__WEBPACK_IMPORTED_MODULE_1__["TaskEvent"].EVENT_COMPLETE, this.onLoopComplete);
            this.loopTask.complete();
        }
        _super.prototype.stop.call(this);
    };
    AddListenerTask.prototype.break = function () {
        this.complete();
        _super.prototype.break.call(this);
    };
    AddListenerTask.prototype.onLoopComplete = function () {
        this._loopComplete = true;
    };
    AddListenerTask.prototype.onSystemTriger = function (evt) {
        if (evt.code === this.eventName) {
            this.onTriger();
        }
    };
    AddListenerTask.prototype.onTriger = function () {
        if (this._isPaused) {
            return;
        }
        if (this.loopTask && this._loopComplete) {
            this._loopComplete = false;
            this.loopTask.run();
        }
    };
    return AddListenerTask;
}(_core_ContainerTask__WEBPACK_IMPORTED_MODULE_0__["ContainerTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/ArrayConcatTask.ts":
/*!****************************************************************!*\
  !*** ./packages/player/src/core/actionTask/ArrayConcatTask.ts ***!
  \****************************************************************/
/*! exports provided: ArrayConcatTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayConcatTask", function() { return ArrayConcatTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ArrayConcatTask = /** @class */ (function (_super) {
    __extends(ArrayConcatTask, _super);
    function ArrayConcatTask(compontent, data) {
        var _this = _super.call(this) || this;
        _this.component = compontent;
        _this.data = data;
        return _this;
    }
    ArrayConcatTask.prototype.run = function () {
        _super.prototype.run.call(this);
        if (this.component.vfStage && this.data.target) {
            var variableManager = this.component.vfStage.variableManager;
            var arrItem = variableManager.getVariableByData(this.component, this.data.target);
            var concatItem = variableManager.getVariableByData(this.component, this.data.concatArr);
            if (arrItem && concatItem) {
                if (this.data.value) {
                    arrItem.value = concatItem.value.concat(this.data.value);
                }
                else {
                    arrItem.value = concatItem.value.concat();
                }
            }
        }
        this.complete();
    };
    return ArrayConcatTask;
}(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["BaseTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/ArrayInitTask.ts":
/*!**************************************************************!*\
  !*** ./packages/player/src/core/actionTask/ArrayInitTask.ts ***!
  \**************************************************************/
/*! exports provided: ArrayInitTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayInitTask", function() { return ArrayInitTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ArrayInitTask = /** @class */ (function (_super) {
    __extends(ArrayInitTask, _super);
    function ArrayInitTask(compontent, data) {
        var _this = _super.call(this) || this;
        _this.component = compontent;
        _this.data = data;
        return _this;
    }
    ArrayInitTask.prototype.run = function () {
        _super.prototype.run.call(this);
        if (this.component.vfStage && this.data.target) {
            var variableManager = this.component.vfStage.variableManager;
            var arrItem = variableManager.getVariableByData(this.component, this.data.target);
            if (arrItem) {
                arrItem.value = this.data.value;
            }
        }
        this.complete();
    };
    return ArrayInitTask;
}(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["BaseTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/ArrayPopTask.ts":
/*!*************************************************************!*\
  !*** ./packages/player/src/core/actionTask/ArrayPopTask.ts ***!
  \*************************************************************/
/*! exports provided: ArrayPopTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayPopTask", function() { return ArrayPopTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ArrayPopTask = /** @class */ (function (_super) {
    __extends(ArrayPopTask, _super);
    function ArrayPopTask(compontent, data) {
        var _this = _super.call(this) || this;
        _this.component = compontent;
        _this.data = data;
        return _this;
    }
    ArrayPopTask.prototype.run = function () {
        _super.prototype.run.call(this);
        if (this.component.vfStage && this.data.target) {
            var variableManager = this.component.vfStage.variableManager;
            var arrItem = variableManager.getVariableByData(this.component, this.data.target);
            if (arrItem) {
                arrItem.value.pop();
            }
        }
        this.complete();
    };
    return ArrayPopTask;
}(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["BaseTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/ArrayPushTask.ts":
/*!**************************************************************!*\
  !*** ./packages/player/src/core/actionTask/ArrayPushTask.ts ***!
  \**************************************************************/
/*! exports provided: ArrayPushTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayPushTask", function() { return ArrayPushTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ArrayPushTask = /** @class */ (function (_super) {
    __extends(ArrayPushTask, _super);
    function ArrayPushTask(compontent, data) {
        var _this = _super.call(this) || this;
        _this.component = compontent;
        _this.data = data;
        return _this;
    }
    ArrayPushTask.prototype.run = function () {
        _super.prototype.run.call(this);
        if (this.component.vfStage && this.data.target) {
            var variableManager = this.component.vfStage.variableManager;
            var arrItem = variableManager.getVariableByData(this.component, this.data.target);
            if (arrItem) {
                var arr = arrItem.value;
                arr.push(this.data.value);
            }
        }
        this.complete();
    };
    return ArrayPushTask;
}(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["BaseTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/ArrayRandomTask.ts":
/*!****************************************************************!*\
  !*** ./packages/player/src/core/actionTask/ArrayRandomTask.ts ***!
  \****************************************************************/
/*! exports provided: ArrayRandomTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayRandomTask", function() { return ArrayRandomTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ArrayRandomTask = /** @class */ (function (_super) {
    __extends(ArrayRandomTask, _super);
    function ArrayRandomTask(compontent, data) {
        var _this = _super.call(this) || this;
        _this.component = compontent;
        _this.data = data;
        return _this;
    }
    ArrayRandomTask.prototype.run = function () {
        _super.prototype.run.call(this);
        if (this.component.vfStage && this.data.target) {
            var variableManager = this.component.vfStage.variableManager;
            var arrItem = variableManager.getVariableByData(this.component, this.data.target);
            if (arrItem) {
                var arr = arrItem.value;
                variableManager.shuffle(arr);
            }
        }
        this.complete();
    };
    return ArrayRandomTask;
}(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["BaseTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/ArrayShiftTask.ts":
/*!***************************************************************!*\
  !*** ./packages/player/src/core/actionTask/ArrayShiftTask.ts ***!
  \***************************************************************/
/*! exports provided: ArrayShiftTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayShiftTask", function() { return ArrayShiftTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ArrayShiftTask = /** @class */ (function (_super) {
    __extends(ArrayShiftTask, _super);
    function ArrayShiftTask(compontent, data) {
        var _this = _super.call(this) || this;
        _this.component = compontent;
        _this.data = data;
        return _this;
    }
    ArrayShiftTask.prototype.run = function () {
        _super.prototype.run.call(this);
        if (this.component.vfStage && this.data.target) {
            var variableManager = this.component.vfStage.variableManager;
            var arrItem = variableManager.getVariableByData(this.component, this.data.target);
            if (arrItem) {
                arrItem.value.shift();
            }
        }
        this.complete();
    };
    return ArrayShiftTask;
}(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["BaseTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/ArraySpliceTask.ts":
/*!****************************************************************!*\
  !*** ./packages/player/src/core/actionTask/ArraySpliceTask.ts ***!
  \****************************************************************/
/*! exports provided: ArraySpliceTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArraySpliceTask", function() { return ArraySpliceTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ArraySpliceTask = /** @class */ (function (_super) {
    __extends(ArraySpliceTask, _super);
    function ArraySpliceTask(compontent, data) {
        var _this = _super.call(this) || this;
        _this.component = compontent;
        _this.data = data;
        return _this;
    }
    ArraySpliceTask.prototype.run = function () {
        _super.prototype.run.call(this);
        if (this.component.vfStage && this.data.target) {
            var variableManager = this.component.vfStage.variableManager;
            var arrItem = variableManager.getVariableByData(this.component, this.data.target);
            if (arrItem) {
                var value = this.data.value;
                if (value !== undefined) {
                    arrItem.value.splice(this.data.start, this.data.deleteCount || 0, value);
                }
                else {
                    arrItem.value.splice(this.data.start, this.data.deleteCount || 0);
                }
            }
        }
        this.complete();
    };
    return ArraySpliceTask;
}(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["BaseTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/ArrayUnshiftTask.ts":
/*!*****************************************************************!*\
  !*** ./packages/player/src/core/actionTask/ArrayUnshiftTask.ts ***!
  \*****************************************************************/
/*! exports provided: ArrayUnshiftTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayUnshiftTask", function() { return ArrayUnshiftTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ArrayUnshiftTask = /** @class */ (function (_super) {
    __extends(ArrayUnshiftTask, _super);
    function ArrayUnshiftTask(compontent, data) {
        var _this = _super.call(this) || this;
        _this.component = compontent;
        _this.data = data;
        return _this;
    }
    ArrayUnshiftTask.prototype.run = function () {
        _super.prototype.run.call(this);
        if (this.component.vfStage && this.data.target) {
            var variableManager = this.component.vfStage.variableManager;
            var arrItem = variableManager.getVariableByData(this.component, this.data.target);
            if (arrItem) {
                var arr = arrItem.value;
                arr.unshift(this.data.value);
            }
        }
        this.complete();
    };
    return ArrayUnshiftTask;
}(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["BaseTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/BreakTask.ts":
/*!**********************************************************!*\
  !*** ./packages/player/src/core/actionTask/BreakTask.ts ***!
  \**********************************************************/
/*! exports provided: BreakTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakTask", function() { return BreakTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BreakTask = /** @class */ (function (_super) {
    __extends(BreakTask, _super);
    function BreakTask() {
        return _super.call(this) || this;
    }
    BreakTask.prototype.run = function () {
        _super.prototype.run.call(this);
        this.break();
        this.complete();
    };
    return BreakTask;
}(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["BaseTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/CallFunctionTask.ts":
/*!*****************************************************************!*\
  !*** ./packages/player/src/core/actionTask/CallFunctionTask.ts ***!
  \*****************************************************************/
/*! exports provided: CallFunctionTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallFunctionTask", function() { return CallFunctionTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
/* harmony import */ var _display_VFComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../display/VFComponent */ "./packages/player/src/display/VFComponent.ts");
/* harmony import */ var _VariableManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../VariableManager */ "./packages/player/src/core/VariableManager.ts");
/* harmony import */ var _utils_VFUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/VFUtil */ "./packages/player/src/utils/VFUtil.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var CallFunctionTask = /** @class */ (function (_super) {
    __extends(CallFunctionTask, _super);
    function CallFunctionTask(compontent, funName, data) {
        var _this = _super.call(this) || this;
        _this.runId = -1;
        _this.paramIds = [];
        _this.component = compontent;
        _this.funName = funName;
        _this.data = data;
        return _this;
    }
    CallFunctionTask.prototype.run = function () {
        _super.prototype.run.call(this);
        this._component = Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_3__["getTargetComponent"])(this.component, this.data.target);
        if (this._component instanceof _display_VFComponent__WEBPACK_IMPORTED_MODULE_1__["VFComponent"] && this._component && this._component.vfStage) {
            var variableManager = this._component.vfStage.variableManager;
            var funId = this.funName;
            this.runId = variableManager.getFunctionId();
            funId = this._component.hashCode + this.funName;
            // 注入参数
            this.paramIds.length = 0;
            if (this.data.params) {
                var paramValues = [];
                for (var i = 0, len = this.data.params.length; i < len; i++) {
                    var param = this.data.params[i];
                    var paramValue = param;
                    if (Array.isArray(param)) {
                        var paramVar = variableManager.getExpressItemValue(this.component, param);
                        paramValue = paramVar;
                    }
                    paramValues.push(paramValue);
                }
                for (var i = 0, len = paramValues.length; i < len; i++) {
                    var paramId = funId + this.runId + 'param_' + i;
                    this.paramIds.push(paramId);
                    if (!variableManager.variableMap[_VariableManager__WEBPACK_IMPORTED_MODULE_2__["VariableManager"].GLOBAL_ID]) {
                        variableManager.variableMap[_VariableManager__WEBPACK_IMPORTED_MODULE_2__["VariableManager"].GLOBAL_ID] = {};
                    }
                    variableManager.variableMap[_VariableManager__WEBPACK_IMPORTED_MODULE_2__["VariableManager"].GLOBAL_ID][paramId] = {
                        id: paramId,
                        type: "object" /* OBJECT */,
                        value: paramValues[i],
                    };
                }
            }
            this.fun = variableManager.getFunctionTask(funId);
            if (this.fun) {
                // 替换表达式中的参数
                if (this.paramIds.length) {
                    this.fun.injectParams(this.paramIds);
                }
                this.fun.on(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].FUNCTION_RUN_COMPLETE, this.onRunComplete, this);
                this.fun.runWithId(this.runId);
            }
            else {
                this.complete();
            }
        }
        else {
            if (this.component.vfStage) {
                var variableManager = this.component.vfStage.variableManager;
                var runTarget = this._component;
                var funName = this.data.name;
                if (Array.isArray(funName)) {
                    funName = variableManager.getExpressItemValue(this.component, funName);
                }
                var funParam = [];
                if (this.data.params) {
                    for (var i = 0, len = this.data.params.length; i < len; i++) {
                        var param = variableManager.getExpressItemValue(this.component, this.data.params[i]);
                        funParam.push(param);
                    }
                }
                if (runTarget && funName && runTarget[funName]) {
                    // tslint:disable-next-line: ban-types
                    runTarget[funName].apply(runTarget, funParam);
                }
            }
            this.complete();
        }
    };
    CallFunctionTask.prototype.stop = function () {
        _super.prototype.stop.call(this);
        if (this.fun) {
            this.fun.stopWithId(this.runId);
        }
        this.complete();
    };
    CallFunctionTask.prototype.break = function () {
        _super.prototype.break.call(this);
        if (this.fun) {
            this.fun.breakWithId(this.runId);
        }
        this.complete();
    };
    CallFunctionTask.prototype.complete = function () {
        this.runId = 0;
        if (this.fun) {
            this.fun.off(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].FUNCTION_RUN_COMPLETE, this.onRunComplete, this);
        }
        // 删除参数
        if (this.paramIds.length) {
            if (this.component && this.component.vfStage) {
                var variableManager = this.component.vfStage.variableManager;
                for (var i = 0, len = this.paramIds.length; i < len; i++) {
                    var paramId = this.paramIds[i];
                    delete variableManager.variableMap[_VariableManager__WEBPACK_IMPORTED_MODULE_2__["VariableManager"].GLOBAL_ID][paramId];
                }
            }
        }
        _super.prototype.complete.call(this);
    };
    CallFunctionTask.prototype.onRunComplete = function (data) {
        if (data === this.runId) {
            this.complete();
        }
    };
    return CallFunctionTask;
}(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["BaseTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/CallProtoFunctionTask.ts":
/*!**********************************************************************!*\
  !*** ./packages/player/src/core/actionTask/CallProtoFunctionTask.ts ***!
  \**********************************************************************/
/*! exports provided: CallProtoFunctionTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallProtoFunctionTask", function() { return CallProtoFunctionTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
/* harmony import */ var _utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/VFUtil */ "./packages/player/src/utils/VFUtil.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CallProtoFunctionTask = /** @class */ (function (_super) {
    __extends(CallProtoFunctionTask, _super);
    function CallProtoFunctionTask(compontent, data) {
        var _this = _super.call(this) || this;
        _this.component = compontent;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(CallProtoFunctionTask.prototype, "target", {
        get: function () {
            return Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__["getTargetComponent"])(this.component, this.data.target);
        },
        enumerable: true,
        configurable: true
    });
    CallProtoFunctionTask.prototype.run = function () {
        _super.prototype.run.call(this);
        if (this.component.vfStage) {
            var variableManager = this.component.vfStage.variableManager;
            var runTarget = this.target;
            var funName = this.data.name;
            if (Array.isArray(funName)) {
                funName = variableManager.getExpressItemValue(this.component, funName);
            }
            var funParam = [];
            if (this.data.params) {
                for (var i = 0, len = this.data.params.length; i < len; i++) {
                    var param = variableManager.getExpressItemValue(this.component, this.data.params[i]);
                    funParam.push(param);
                }
            }
            if (runTarget && funName && runTarget[funName]) {
                // tslint:disable-next-line: ban-types
                runTarget[funName].apply(runTarget, funParam);
            }
        }
        this.complete();
    };
    return CallProtoFunctionTask;
}(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["BaseTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/DefineFunctionTask.ts":
/*!*******************************************************************!*\
  !*** ./packages/player/src/core/actionTask/DefineFunctionTask.ts ***!
  \*******************************************************************/
/*! exports provided: DefineFunctionTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefineFunctionTask", function() { return DefineFunctionTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
/* harmony import */ var _utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/VFUtil */ "./packages/player/src/utils/VFUtil.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var DefineFunctionTask = /** @class */ (function (_super) {
    __extends(DefineFunctionTask, _super);
    function DefineFunctionTask(compontent, funName, data, fun) {
        var _this = _super.call(this) || this;
        _this.funId = '';
        _this.component = compontent;
        _this.funName = funName;
        _this.fun = fun;
        _this.data = data;
        return _this;
    }
    DefineFunctionTask.prototype.run = function () {
        _super.prototype.run.call(this);
        if (this.component.vfStage) {
            var variableManager = this.component.vfStage.variableManager;
            var funId = this.funName;
            var subComponent = Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__["getTargetComponent"])(this.component, this.data.target);
            if (subComponent) {
                funId = subComponent.hashCode + this.funName;
            }
            variableManager.setFunctionTask(funId, this.fun);
            this.complete();
        }
        else {
            this.complete();
        }
    };
    DefineFunctionTask.prototype.stop = function () {
        _super.prototype.stop.call(this);
    };
    return DefineFunctionTask;
}(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["BaseTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/DefineVariableTask.ts":
/*!*******************************************************************!*\
  !*** ./packages/player/src/core/actionTask/DefineVariableTask.ts ***!
  \*******************************************************************/
/*! exports provided: DefineVariableTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefineVariableTask", function() { return DefineVariableTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
/* harmony import */ var _utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/VFUtil */ "./packages/player/src/utils/VFUtil.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var DefineVariableTask = /** @class */ (function (_super) {
    __extends(DefineVariableTask, _super);
    function DefineVariableTask(compontent, data) {
        var _this = _super.call(this) || this;
        _this.component = compontent;
        _this.data = data;
        return _this;
    }
    DefineVariableTask.prototype.run = function () {
        _super.prototype.run.call(this);
        if (this.component && this.component.vfStage) {
            var variableManager = this.component.vfStage.variableManager;
            var targetComponent = Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__["getTargetComponent"])(this.component, this.data.target);
            if (targetComponent) {
                variableManager.addVariableDataToComponent(targetComponent, this.data.varId, this.data.variableType, this.data.value);
            }
            else {
                variableManager.addVariableDataToGlobal(this.data.varId, this.data.variableType, this.data.value);
            }
        }
        this.complete();
    };
    return DefineVariableTask;
}(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["BaseTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/EmitEventTask.ts":
/*!**************************************************************!*\
  !*** ./packages/player/src/core/actionTask/EmitEventTask.ts ***!
  \**************************************************************/
/*! exports provided: EmitEventTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmitEventTask", function() { return EmitEventTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
/* harmony import */ var _utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/VFUtil */ "./packages/player/src/utils/VFUtil.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var EmitEventTask = /** @class */ (function (_super) {
    __extends(EmitEventTask, _super);
    function EmitEventTask(component, data) {
        var _this = _super.call(this) || this;
        _this.component = component;
        _this.data = data;
        _this.eventName = data.event;
        _this.eventData = data.eventData;
        _this.system = data.system === true;
        _this.global = data.global === true;
        return _this;
    }
    EmitEventTask.prototype.run = function () {
        _super.prototype.run.call(this);
        var component = this.component;
        if (component) {
            var emitEventData = this.getEmitEventData();
            if (this.system) {
                if (component.vfStage) {
                    var systemEvent = component.vfStage.systemEvent;
                    if (typeof emitEventData === 'object') {
                        emitEventData.type = this.eventName;
                        if (this.eventName !== "message" /* MESSAGE */) {
                            systemEvent.emit(this.eventName, emitEventData);
                        }
                        systemEvent.emit("message" /* MESSAGE */, emitEventData); // 外部 
                    }
                    else {
                        systemEvent.emitError('S0003', [this.eventName,
                            JSON.stringify(emitEventData)], "warning" /* WARNING */, this);
                    }
                }
            }
            else if (this.global) {
                if (component.vfStage) {
                    component.vfStage.emit(this.eventName, emitEventData);
                }
            }
            else {
                this.target = Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__["getTargetComponent"])(this.component, this.data.target);
                if (this.target) {
                    this.target.emit(this.eventName, emitEventData);
                }
            }
        }
        this.complete();
    };
    EmitEventTask.prototype.stop = function () {
        this.complete();
        _super.prototype.stop.call(this);
    };
    EmitEventTask.prototype.break = function () {
        this.complete();
        _super.prototype.break.call(this);
    };
    EmitEventTask.prototype.getEmitEventData = function () {
        if (Array.isArray(this.eventData)) {
            if (this.component) {
                var vfStage = (this.component).vfStage;
                if (vfStage) {
                    var data = vfStage.variableManager.getExpressItemValue(this.component, this.eventData);
                    return data;
                }
            }
        }
        return this.eventData;
    };
    return EmitEventTask;
}(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["BaseTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/EnterFrameCallTask.ts":
/*!*******************************************************************!*\
  !*** ./packages/player/src/core/actionTask/EnterFrameCallTask.ts ***!
  \*******************************************************************/
/*! exports provided: EnterFrameCallTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterFrameCallTask", function() { return EnterFrameCallTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
/* harmony import */ var _core_ContainerTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/ContainerTask */ "./packages/player/src/core/actionTask/core/ContainerTask.ts");
/* harmony import */ var _CallFunctionTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CallFunctionTask */ "./packages/player/src/core/actionTask/CallFunctionTask.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var EnterFrameCallTask = /** @class */ (function (_super) {
    __extends(EnterFrameCallTask, _super);
    function EnterFrameCallTask(component, data) {
        var _this = _super.call(this) || this;
        _this.loopTaskComplete = true;
        _this.component = component;
        _this.data = data;
        _this.funName = data.funName;
        if (_this.funName) {
            _this.callfunData = {
                type: 12 /* CallFunction */,
                name: _this.funName,
                params: [],
            };
            var callfunctionTask = new _CallFunctionTask__WEBPACK_IMPORTED_MODULE_2__["CallFunctionTask"](_this.component, _this.funName, _this.callfunData);
            _this.callfun = callfunctionTask;
            _this.loopTask.addTask(callfunctionTask);
        }
        return _this;
    }
    EnterFrameCallTask.prototype.run = function () {
        _super.prototype.run.call(this);
        if (this.component) {
            var vfStage = this.component.vfStage;
            if (vfStage && vfStage.app) {
                if (this.loopTask) {
                    this.loopTask.addListener(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].EVENT_COMPLETE, this.onLoopComplete, this);
                }
                if (!this.tickHandler) {
                    this.tickHandler = vf.gui.Scheduler.setEnterFrame(this.tick.bind(this));
                }
                else {
                    this.tickHandler.restart();
                }
            }
            else {
                this.complete();
            }
        }
        else {
            this.complete();
        }
    };
    EnterFrameCallTask.prototype.complete = function () {
        _super.prototype.complete.call(this);
        if (this.loopTask) {
            this.loopTask.removeListener(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].EVENT_COMPLETE, this.onLoopComplete, this);
        }
        if (this.tickHandler) {
            this.tickHandler.stop();
        }
    };
    EnterFrameCallTask.prototype.stop = function () {
        _super.prototype.stop.call(this);
        this.complete();
    };
    EnterFrameCallTask.prototype.pause = function () {
        _super.prototype.pause.call(this);
        if (this.tickHandler) {
            this.tickHandler.pause();
        }
    };
    EnterFrameCallTask.prototype.resume = function () {
        if (this._isPaused) {
            if (this.tickHandler) {
                this.tickHandler.resume();
            }
        }
        _super.prototype.resume.call(this);
    };
    EnterFrameCallTask.prototype.onLoopComplete = function () {
        this.loopTaskComplete = true;
    };
    EnterFrameCallTask.prototype.tick = function (e) {
        if (this.loopTaskComplete) {
            if (this.loopTask) {
                var dt = e;
                if (this.callfunData) {
                    this.callfunData.params = [dt];
                }
                this.loopTaskComplete = false;
                this.loopTask.run();
            }
        }
    };
    return EnterFrameCallTask;
}(_core_ContainerTask__WEBPACK_IMPORTED_MODULE_1__["ContainerTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/EnterFrameTask.ts":
/*!***************************************************************!*\
  !*** ./packages/player/src/core/actionTask/EnterFrameTask.ts ***!
  \***************************************************************/
/*! exports provided: EnterFrameTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterFrameTask", function() { return EnterFrameTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
/* harmony import */ var _core_ContainerTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/ContainerTask */ "./packages/player/src/core/actionTask/core/ContainerTask.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var EnterFrameTask = /** @class */ (function (_super) {
    __extends(EnterFrameTask, _super);
    function EnterFrameTask(component, data) {
        var _this = _super.call(this) || this;
        _this.loopTaskComplete = true;
        _this.component = component;
        _this.data = data;
        return _this;
    }
    EnterFrameTask.prototype.run = function () {
        _super.prototype.run.call(this);
        if (this.component) {
            var vfStage = this.component.vfStage;
            if (vfStage && vfStage.app) {
                if (this.loopTask) {
                    this.loopTask.addListener(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].EVENT_COMPLETE, this.onLoopComplete, this);
                }
                if (!this.tickHandler) {
                    this.tickHandler = vf.gui.Scheduler.setEnterFrame(this.tick.bind(this));
                }
                else {
                    this.tickHandler.restart();
                }
            }
            else {
                this.complete();
            }
        }
        else {
            this.complete();
        }
    };
    EnterFrameTask.prototype.complete = function () {
        _super.prototype.complete.call(this);
        if (this.loopTask) {
            this.loopTask.removeListener(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].EVENT_COMPLETE, this.onLoopComplete, this);
        }
        if (this.tickHandler) {
            this.tickHandler.stop();
        }
    };
    EnterFrameTask.prototype.stop = function () {
        _super.prototype.stop.call(this);
        this.complete();
    };
    EnterFrameTask.prototype.pause = function () {
        _super.prototype.pause.call(this);
        if (this.tickHandler) {
            this.tickHandler.pause();
        }
    };
    EnterFrameTask.prototype.resume = function () {
        if (this._isPaused) {
            if (this.tickHandler) {
                this.tickHandler.resume();
            }
        }
        _super.prototype.resume.call(this);
    };
    EnterFrameTask.prototype.onLoopComplete = function () {
        this.loopTaskComplete = true;
    };
    EnterFrameTask.prototype.tick = function () {
        if (this.loopTaskComplete) {
            if (this.loopTask) {
                this.loopTask.run();
            }
        }
    };
    return EnterFrameTask;
}(_core_ContainerTask__WEBPACK_IMPORTED_MODULE_1__["ContainerTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/ExpressTask.ts":
/*!************************************************************!*\
  !*** ./packages/player/src/core/actionTask/ExpressTask.ts ***!
  \************************************************************/
/*! exports provided: ExpressTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpressTask", function() { return ExpressTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ExpressTask = /** @class */ (function (_super) {
    __extends(ExpressTask, _super);
    function ExpressTask(compontent, data) {
        var _this = _super.call(this) || this;
        _this.component = compontent;
        _this.data = data;
        return _this;
    }
    ExpressTask.prototype.run = function () {
        _super.prototype.run.call(this);
        if (this.component && this.component.vfStage) {
            var variableManager = this.component.vfStage.variableManager;
            variableManager.caculateExpress(this.component, this.data.express);
        }
        this.complete();
    };
    return ExpressTask;
}(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["BaseTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/ForTask.ts":
/*!********************************************************!*\
  !*** ./packages/player/src/core/actionTask/ForTask.ts ***!
  \********************************************************/
/*! exports provided: ForTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForTask", function() { return ForTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
/* harmony import */ var _core_ContainerTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/ContainerTask */ "./packages/player/src/core/actionTask/core/ContainerTask.ts");
/* harmony import */ var _VariableManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../VariableManager */ "./packages/player/src/core/VariableManager.ts");
/* harmony import */ var _core_ActionListUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/ActionListUtils */ "./packages/player/src/core/actionTask/core/ActionListUtils.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ForTask = /** @class */ (function (_super) {
    __extends(ForTask, _super);
    function ForTask(compontent, data) {
        var _this = _super.call(this) || this;
        _this._totalTimes = 0;
        _this._curTimes = 0;
        _this._paramId = '';
        _this._paramIds = [];
        _this.component = compontent;
        _this.data = data;
        return _this;
    }
    ForTask.prototype.run = function () {
        _super.prototype.run.call(this);
        this._totalTimes = this.getforin();
        this._curTimes = -1;
        if (this.loopTask) {
            this.loopTask.on(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].EVENT_COMPLETE, this.onLoopComplete, this);
            this.loopTask.on(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].EVENT_FAIL, this.onLoopComplete, this);
        }
        this.addParams();
        this.runFor();
    };
    ForTask.prototype.break = function () {
        this._isRunning = false;
        if (this.loopTask) {
            this.loopTask.stop();
        }
        this.complete();
    };
    ForTask.prototype.complete = function () {
        this.removeParams();
        _super.prototype.complete.call(this);
    };
    ForTask.prototype.injectParams = function (paramIds) {
        if (paramIds && paramIds.length) {
            this._paramIds = paramIds;
        }
    };
    ForTask.prototype.runFor = function () {
        if (this._totalTimes > 0 && this._curTimes < this._totalTimes - 1) {
            if (this.loopTask) {
                this._curTimes++;
                if (this.component && this.component.vfStage) {
                    var variableManager = this.component.vfStage.variableManager;
                    var paramI = variableManager.getGlobalVariable(this._paramId);
                    if (paramI) {
                        paramI.value = this._curTimes;
                    }
                }
                this.loopTask.run();
            }
            else {
                this.complete();
            }
        }
        else {
            this.complete();
        }
    };
    ForTask.prototype.getforin = function () {
        if (this.component.vfStage) {
            var variableManager = this.component.vfStage.variableManager;
            var forin = variableManager.getExpressItemValue(this.component, this.data.forin);
            if (Array.isArray(forin)) {
                return forin.length;
            }
            else {
                return parseInt(forin, 10);
            }
        }
        return 0;
    };
    ForTask.prototype.onLoopComplete = function () {
        this.runFor();
    };
    ForTask.prototype.addParams = function () {
        if (this.component && this.component.vfStage) {
            var variableManager = this.component.vfStage.variableManager;
            var paramValues = [];
            var runId = variableManager.getFunctionId();
            var paramId = runId + '_for';
            this._paramId = paramId;
            if (!variableManager.variableMap[_VariableManager__WEBPACK_IMPORTED_MODULE_2__["VariableManager"].GLOBAL_ID]) {
                variableManager.variableMap[_VariableManager__WEBPACK_IMPORTED_MODULE_2__["VariableManager"].GLOBAL_ID] = {};
            }
            variableManager.variableMap[_VariableManager__WEBPACK_IMPORTED_MODULE_2__["VariableManager"].GLOBAL_ID][paramId] = {
                id: paramId,
                type: "object" /* OBJECT */,
                value: 0,
            };
            ///
            if (this.loopTask) {
                var paramIds = this._paramIds.concat([this._paramId]);
                Object(_core_ActionListUtils__WEBPACK_IMPORTED_MODULE_3__["injectParamsToQueueTask"])(this.loopTask, paramIds);
            }
        }
    };
    ForTask.prototype.removeParams = function () {
        if (this.component && this.component.vfStage) {
            var variableManager = this.component.vfStage.variableManager;
            var paramId = this._paramId;
            delete variableManager.variableMap[_VariableManager__WEBPACK_IMPORTED_MODULE_2__["VariableManager"].GLOBAL_ID][paramId];
        }
    };
    return ForTask;
}(_core_ContainerTask__WEBPACK_IMPORTED_MODULE_1__["ContainerTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/FunctionTask.ts":
/*!*************************************************************!*\
  !*** ./packages/player/src/core/actionTask/FunctionTask.ts ***!
  \*************************************************************/
/*! exports provided: FunctionTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionTask", function() { return FunctionTask; });
/* harmony import */ var _core_ContainerTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/ContainerTask */ "./packages/player/src/core/actionTask/core/ContainerTask.ts");
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
/* harmony import */ var _core_ActionListUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/ActionListUtils */ "./packages/player/src/core/actionTask/core/ActionListUtils.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var FunctionTask = /** @class */ (function (_super) {
    __extends(FunctionTask, _super);
    function FunctionTask(compontent, funName) {
        var _this = _super.call(this) || this;
        _this.callTargets = [];
        _this._loopComplete = false;
        _this._component = compontent;
        _this.funName = funName;
        return _this;
    }
    FunctionTask.prototype.injectParams = function (paramIds) {
        if (this.loopTask) {
            Object(_core_ActionListUtils__WEBPACK_IMPORTED_MODULE_2__["injectParamsToQueueTask"])(this.loopTask, paramIds);
        }
    };
    FunctionTask.prototype.runWithId = function (id) {
        if (!this._isRunning) {
            this.callTargets.push(id);
            this.run();
        }
    };
    FunctionTask.prototype.stopWithId = function (id) {
        var index = this.callTargets.indexOf(id);
        if (index >= 0) {
            if (index > 0) {
                this.callTargets.splice(index, 1);
            }
            else {
                this.callTargets.splice(index, 1);
                if (this._isRunning) {
                    this.loopTask.stop();
                }
            }
        }
    };
    FunctionTask.prototype.breakWithId = function (id) {
        var index = this.callTargets.indexOf(id);
        if (index >= 0) {
            if (index > 0) {
                this.callTargets.splice(index, 1);
            }
            else {
                this.callTargets.splice(index, 1);
                if (this._isRunning) {
                    this.loopTask.break();
                }
            }
        }
    };
    FunctionTask.prototype.run = function () {
        _super.prototype.run.call(this);
        this._loopComplete = true;
        if (this.loopTask) {
            this.loopTask.on(_core_BaseTask__WEBPACK_IMPORTED_MODULE_1__["TaskEvent"].EVENT_COMPLETE, this.onLoopComplete, this);
            this.loopTask.on(_core_BaseTask__WEBPACK_IMPORTED_MODULE_1__["TaskEvent"].EVENT_BREAK, this.onBreak, this);
        }
        if (this.callTargets.length > 0) {
            this.loopTask.run();
        }
        else {
            this.complete();
        }
    };
    FunctionTask.prototype.stop = function () {
        this.complete();
        _super.prototype.stop.call(this);
    };
    FunctionTask.prototype.break = function () {
        this.complete();
        _super.prototype.break.call(this);
    };
    FunctionTask.prototype.complete = function () {
        this.callTargets.length = 0;
        this.loopTask.off(_core_BaseTask__WEBPACK_IMPORTED_MODULE_1__["TaskEvent"].EVENT_COMPLETE, this.onLoopComplete, this);
        this.loopTask.off(_core_BaseTask__WEBPACK_IMPORTED_MODULE_1__["TaskEvent"].EVENT_BREAK, this.onBreak, this);
        _super.prototype.complete.call(this);
    };
    FunctionTask.prototype.onLoopComplete = function () {
        if (this.callTargets.length > 0) {
            var callId = this.callTargets[0];
            this.callTargets.shift();
            this._isRunning = false;
            this.emit(_core_BaseTask__WEBPACK_IMPORTED_MODULE_1__["TaskEvent"].FUNCTION_RUN_COMPLETE, callId);
        }
        if (this.callTargets.length > 0) {
            this.loopTask.run();
        }
        else {
            this.complete();
        }
    };
    return FunctionTask;
}(_core_ContainerTask__WEBPACK_IMPORTED_MODULE_0__["ContainerTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/IfTask.ts":
/*!*******************************************************!*\
  !*** ./packages/player/src/core/actionTask/IfTask.ts ***!
  \*******************************************************/
/*! exports provided: IfTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IfTask", function() { return IfTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var IfTask = /** @class */ (function (_super) {
    __extends(IfTask, _super);
    function IfTask(compontent) {
        var _this = _super.call(this) || this;
        _this.conditions = [];
        _this.conditionsRun = [];
        _this.component = compontent;
        return _this;
    }
    IfTask.prototype.addCondition = function (condition, run) {
        if (condition && condition.length) {
            this.conditions.push(condition);
            this.conditionsRun.push(run);
        }
        else {
            this.addElse(run);
        }
    };
    IfTask.prototype.addElse = function (run) {
        this.elseRun = run;
    };
    IfTask.prototype.run = function () {
        _super.prototype.run.call(this);
        this.curRun = this.findTask();
        if (this.curRun) {
            this.curRun.on(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].EVENT_COMPLETE, this.onTaskComplete, this);
            this.curRun.on(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].EVENT_BREAK, this.onTaskBreak, this);
            this.curRun.run();
        }
        else {
            this.complete();
        }
    };
    IfTask.prototype.findTask = function () {
        if (this.component.vfStage) {
            var variableManager = this.component.vfStage.variableManager;
            for (var i = 0, len = this.conditions.length; i < len; i++) {
                var condition = this.conditions[i];
                var result = variableManager.caculateExpress(this.component, condition);
                if (result) {
                    return this.conditionsRun[i];
                }
            }
            if (this.elseRun) {
                return this.elseRun;
            }
        }
    };
    IfTask.prototype.onTaskComplete = function (data) {
        if (this.curRun) {
            this.curRun.off(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].EVENT_COMPLETE, this.onTaskComplete, this);
        }
        this.complete();
    };
    IfTask.prototype.onTaskBreak = function (data) {
        this.break();
        this.complete();
    };
    return IfTask;
}(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["BaseTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/JumpToNextSceneTask.ts":
/*!********************************************************************!*\
  !*** ./packages/player/src/core/actionTask/JumpToNextSceneTask.ts ***!
  \********************************************************************/
/*! exports provided: JumpToNextSceneTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumpToNextSceneTask", function() { return JumpToNextSceneTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JumpToNextSceneTask = /** @class */ (function (_super) {
    __extends(JumpToNextSceneTask, _super);
    function JumpToNextSceneTask(compontent, transition) {
        var _this = _super.call(this) || this;
        _this.component = compontent;
        _this.transition = transition;
        return _this;
    }
    JumpToNextSceneTask.prototype.run = function () {
        _super.prototype.run.call(this);
        var vfStage = this.component.vfStage;
        if (vfStage) {
            vfStage.switchToNextScene(this.transition);
            this.complete();
        }
        else {
            this.complete();
        }
    };
    return JumpToNextSceneTask;
}(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["BaseTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/JumpToPrevSceneTask.ts":
/*!********************************************************************!*\
  !*** ./packages/player/src/core/actionTask/JumpToPrevSceneTask.ts ***!
  \********************************************************************/
/*! exports provided: JumpToPrevSceneTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumpToPrevSceneTask", function() { return JumpToPrevSceneTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JumpToPrevSceneTask = /** @class */ (function (_super) {
    __extends(JumpToPrevSceneTask, _super);
    function JumpToPrevSceneTask(compontent, transition) {
        var _this = _super.call(this) || this;
        _this.component = compontent;
        _this.transition = transition;
        return _this;
    }
    JumpToPrevSceneTask.prototype.run = function () {
        _super.prototype.run.call(this);
        var vfStage = this.component.vfStage;
        if (vfStage) {
            vfStage.switchToPrevScene(this.transition);
            this.complete();
        }
        else {
            this.complete();
        }
    };
    return JumpToPrevSceneTask;
}(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["BaseTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/JumpToSceneTask.ts":
/*!****************************************************************!*\
  !*** ./packages/player/src/core/actionTask/JumpToSceneTask.ts ***!
  \****************************************************************/
/*! exports provided: JumpToSceneTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumpToSceneTask", function() { return JumpToSceneTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JumpToSceneTask = /** @class */ (function (_super) {
    __extends(JumpToSceneTask, _super);
    function JumpToSceneTask(compontent, sceneId, transition) {
        var _this = _super.call(this) || this;
        _this.component = compontent;
        _this.sceneId = sceneId;
        _this.transition = transition;
        return _this;
    }
    JumpToSceneTask.prototype.run = function () {
        _super.prototype.run.call(this);
        var vfStage = this.component.vfStage;
        if (vfStage) {
            vfStage.switchToSceneId(this.sceneId, this.transition);
            this.complete();
        }
        else {
            this.complete();
        }
    };
    return JumpToSceneTask;
}(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["BaseTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/PlayAnimationTask.ts":
/*!******************************************************************!*\
  !*** ./packages/player/src/core/actionTask/PlayAnimationTask.ts ***!
  \******************************************************************/
/*! exports provided: PlayAnimationTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayAnimationTask", function() { return PlayAnimationTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
/* harmony import */ var _utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/VFUtil */ "./packages/player/src/utils/VFUtil.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var PlayAnimationTask = /** @class */ (function (_super) {
    __extends(PlayAnimationTask, _super);
    function PlayAnimationTask(compontent, data) {
        var _this = _super.call(this) || this;
        _this.component = compontent;
        _this.data = data;
        return _this;
    }
    PlayAnimationTask.prototype.run = function () {
        _super.prototype.run.call(this);
        this._component = Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__["getTargetComponent"])(this.component, this.data.target);
        var name = this.getValue();
        var times = this.getTimes();
        if (this._component && this._component.vfStage) {
            this._component.play(name, times);
        }
        this.complete();
    };
    PlayAnimationTask.prototype.getValue = function () {
        if (Array.isArray(this.data.name)) {
            if (this._component && this.component.vfStage) {
                var variableManager = this.component.vfStage.variableManager;
                return variableManager.getExpressItemValue(this._component, this.data.name);
            }
        }
        return this.data.name;
    };
    PlayAnimationTask.prototype.getTimes = function () {
        if (Array.isArray(this.data.times)) {
            if (this._component && this.component.vfStage) {
                var variableManager = this.component.vfStage.variableManager;
                return variableManager.getExpressItemValue(this._component, this.data.times);
            }
        }
        return this.data.times;
    };
    return PlayAnimationTask;
}(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["BaseTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/PrintTask.ts":
/*!**********************************************************!*\
  !*** ./packages/player/src/core/actionTask/PrintTask.ts ***!
  \**********************************************************/
/*! exports provided: PrintTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintTask", function() { return PrintTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
/* harmony import */ var _utils_Trace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Trace */ "./packages/player/src/utils/Trace.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var PrintTask = /** @class */ (function (_super) {
    __extends(PrintTask, _super);
    function PrintTask(component, data) {
        var _this = _super.call(this) || this;
        _this.component = component;
        _this.data = data;
        return _this;
    }
    PrintTask.prototype.run = function () {
        var _a;
        // mark: 运行日志统一移到日志模块处理
        if ((_a = this.component.vfStage) === null || _a === void 0 ? void 0 : _a.config.debug)
            Object(_utils_Trace__WEBPACK_IMPORTED_MODULE_1__["default"])(this.getValue());
        this.complete();
    };
    PrintTask.prototype.getValue = function () {
        if (Array.isArray(this.data.value)) {
            if (this.component.vfStage) {
                var variableManager = this.component.vfStage.variableManager;
                return variableManager.getExpressItemValue(this.component, this.data.value);
            }
        }
        return this.data.value;
    };
    return PrintTask;
}(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["BaseTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/RemoveListenerTask.ts":
/*!*******************************************************************!*\
  !*** ./packages/player/src/core/actionTask/RemoveListenerTask.ts ***!
  \*******************************************************************/
/*! exports provided: RemoveListenerTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveListenerTask", function() { return RemoveListenerTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
/* harmony import */ var _utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/VFUtil */ "./packages/player/src/utils/VFUtil.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var RemoveListenerTask = /** @class */ (function (_super) {
    __extends(RemoveListenerTask, _super);
    function RemoveListenerTask(component, data) {
        var _this = _super.call(this) || this;
        _this._loopComplete = false;
        _this.component = component;
        _this.data = data;
        _this.eventName = data.event;
        _this.system = data.system === true;
        _this.global = data.global === true;
        return _this;
    }
    RemoveListenerTask.prototype.run = function () {
        _super.prototype.run.call(this);
        if (this.component) {
            if (this.system) {
                var vfStage = this.component.vfStage;
                if (vfStage) {
                    vfStage.systemEvent.off(this.eventName);
                }
            }
            else if (this.global) {
                var vfStage = this.component.vfStage;
                if (vfStage) {
                    vfStage.off(this.eventName);
                }
            }
            else {
                this._component = Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__["getTargetComponent"])(this.component, this.data.target);
                if (this._component) {
                    this._component.off(this.eventName);
                }
            }
        }
        this.complete();
    };
    return RemoveListenerTask;
}(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["BaseTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/SetIntervalTask.ts":
/*!****************************************************************!*\
  !*** ./packages/player/src/core/actionTask/SetIntervalTask.ts ***!
  \****************************************************************/
/*! exports provided: SetIntervalTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetIntervalTask", function() { return SetIntervalTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
/* harmony import */ var _utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/VFUtil */ "./packages/player/src/utils/VFUtil.ts");
/* harmony import */ var _core_ContainerTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/ContainerTask */ "./packages/player/src/core/actionTask/core/ContainerTask.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var SetIntervalTask = /** @class */ (function (_super) {
    __extends(SetIntervalTask, _super);
    function SetIntervalTask(component, data) {
        var _this = _super.call(this) || this;
        _this.lastTimes = 0;
        _this.loopTaskComplete = true;
        _this.intervalComplete = true;
        _this._timeout = 0;
        _this._times = 1;
        _this.component = component;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(SetIntervalTask.prototype, "timeout", {
        get: function () {
            var time = 0;
            if (Array.isArray(this.data.value)) {
                if (this.component && this.component.vfStage) {
                    var variableManager = this.component.vfStage.variableManager;
                    time = variableManager.getExpressItemValue(this.component, this.data.value);
                }
            }
            else {
                time = this.data.value;
            }
            if (!Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(time)) {
                time = 1;
            }
            return time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SetIntervalTask.prototype, "times", {
        get: function () {
            var times = 0;
            if (Array.isArray(this.data.times)) {
                if (this.component && this.component.vfStage) {
                    var variableManager = this.component.vfStage.variableManager;
                    times = variableManager.getExpressItemValue(this.component, this.data.times);
                }
            }
            else {
                if (this.data.times === undefined) {
                    times = 0;
                }
                else {
                    times = this.data.times;
                }
            }
            if (!Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(times)) {
                times = 0;
            }
            return times;
        },
        enumerable: true,
        configurable: true
    });
    SetIntervalTask.prototype.run = function () {
        _super.prototype.run.call(this);
        this._timeout = this.timeout;
        this._times = this.times;
        this.lastTimes = this._times;
        if (this.loopTask) {
            this.loopTask.addListener(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].EVENT_COMPLETE, this.onLoopComplete, this);
        }
        this.runOnce(this._timeout, this._times);
    };
    SetIntervalTask.prototype.complete = function () {
        _super.prototype.complete.call(this);
        if (this.timeoutHandler) {
            this.timeoutHandler.stop();
            this.timeoutHandler = undefined;
        }
        if (this.loopTask) {
            this.loopTask.removeListener(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].EVENT_COMPLETE, this.onLoopComplete, this);
        }
    };
    SetIntervalTask.prototype.stop = function () {
        _super.prototype.stop.call(this);
        this.complete();
    };
    SetIntervalTask.prototype.resume = function () {
        if (this._isPaused) {
            if (this.loopTaskComplete && this.intervalComplete) {
                this.checkComplete(this._timeout, this._times);
            }
        }
        _super.prototype.resume.call(this);
    };
    SetIntervalTask.prototype.onLoopComplete = function () {
        this.loopTaskComplete = true;
        if (this.intervalComplete) {
            this.checkComplete(this._timeout, this._times);
        }
    };
    SetIntervalTask.prototype.runOnce = function (timeout, times) {
        var _this = this;
        this.intervalComplete = false;
        if (this.timeoutHandler === undefined) {
            this.timeoutHandler = vf.gui.Scheduler.setTimeout(timeout, function () {
                _this.intervalComplete = true;
                if (_this.timeoutHandler) {
                    _this.timeoutHandler.stop();
                }
                if (_this.loopTaskComplete && _this.intervalComplete) {
                    _this.checkComplete(timeout, times);
                }
            });
        }
        else {
            this.timeoutHandler.restart();
        }
    };
    SetIntervalTask.prototype.checkComplete = function (timeout, times) {
        if (this._isPaused || this._isCompleted) {
            return;
        }
        var isComplete = false;
        if (times > 0) {
            if (this.lastTimes > 0) {
                isComplete = false;
            }
            else {
                isComplete = true;
            }
        }
        else {
            isComplete = false;
        }
        if (isComplete) {
            this.complete();
        }
        else {
            this.lastTimes--;
            if (this.loopTask) {
                this.loopTaskComplete = false;
                this.runOnce(timeout, times);
                this.loopTask.run();
            }
            else {
                this.complete();
            }
        }
    };
    return SetIntervalTask;
}(_core_ContainerTask__WEBPACK_IMPORTED_MODULE_2__["ContainerTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/SetPropertyTask.ts":
/*!****************************************************************!*\
  !*** ./packages/player/src/core/actionTask/SetPropertyTask.ts ***!
  \****************************************************************/
/*! exports provided: SetPropertyTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPropertyTask", function() { return SetPropertyTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
/* harmony import */ var _utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/VFUtil */ "./packages/player/src/utils/VFUtil.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SetPropertyTask = /** @class */ (function (_super) {
    __extends(SetPropertyTask, _super);
    function SetPropertyTask(compontent, data) {
        var _this = _super.call(this) || this;
        _this.component = compontent;
        _this.data = data;
        return _this;
    }
    SetPropertyTask.prototype.run = function () {
        _super.prototype.run.call(this);
        var component = Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__["getTargetComponent"])(this.component, this.data.target);
        if (component) {
            component[this.data.property] = this.getValue();
        }
        this.complete();
    };
    SetPropertyTask.prototype.getValue = function () {
        if (Array.isArray(this.data.value)) {
            if (this.component.vfStage) {
                var variableManager = this.component.vfStage.variableManager;
                return variableManager.getExpressItemValue(this.component, this.data.value);
            }
        }
        return this.data.value;
    };
    return SetPropertyTask;
}(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["BaseTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/SetTimeoutTask.ts":
/*!***************************************************************!*\
  !*** ./packages/player/src/core/actionTask/SetTimeoutTask.ts ***!
  \***************************************************************/
/*! exports provided: SetTimeoutTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTimeoutTask", function() { return SetTimeoutTask; });
/* harmony import */ var _utils_VFUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/VFUtil */ "./packages/player/src/utils/VFUtil.ts");
/* harmony import */ var _core_ContainerTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/ContainerTask */ "./packages/player/src/core/actionTask/core/ContainerTask.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SetTimeoutTask = /** @class */ (function (_super) {
    __extends(SetTimeoutTask, _super);
    function SetTimeoutTask(component, data) {
        var _this = _super.call(this) || this;
        _this.component = component;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(SetTimeoutTask.prototype, "timeout", {
        get: function () {
            var time = 0;
            if (Array.isArray(this.data.value)) {
                if (this.component && this.component.vfStage) {
                    var variableManager = this.component.vfStage.variableManager;
                    time = variableManager.getExpressItemValue(this.component, this.data.value);
                }
            }
            else {
                time = this.data.value;
            }
            if (!Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(time)) {
                time = 1;
            }
            return time;
        },
        enumerable: true,
        configurable: true
    });
    SetTimeoutTask.prototype.run = function () {
        var _this = this;
        _super.prototype.run.call(this);
        var timeout = this.timeout;
        this.timeoutHandler = vf.gui.Scheduler.setTimeout(timeout, function () {
            if (_this.timeoutHandler) {
                _this.timeoutHandler.stop();
                _this.timeoutHandler = undefined;
            }
            if (_this.loopTask) {
                _this.loopTask.run();
            }
        });
        this.complete();
    };
    return SetTimeoutTask;
}(_core_ContainerTask__WEBPACK_IMPORTED_MODULE_1__["ContainerTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/SoundTask.ts":
/*!**********************************************************!*\
  !*** ./packages/player/src/core/actionTask/SoundTask.ts ***!
  \**********************************************************/
/*! exports provided: SoundTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundTask", function() { return SoundTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SoundTask = /** @class */ (function (_super) {
    __extends(SoundTask, _super);
    function SoundTask(compontent, actionData) {
        var _this = _super.call(this) || this;
        _this.component = compontent;
        _this.dataType = actionData.type;
        _this.data = actionData;
        return _this;
    }
    SoundTask.prototype.run = function () {
        _super.prototype.run.call(this);
        if (this.component.vfStage) {
            var soundManager = this.component.vfStage.soundManager;
            var variableManager = this.component.vfStage.variableManager;
            var data = void 0;
            try {
                data = variableManager.getExpressItemValue(this.component, this.data.value);
            }
            catch (e) {
                vf.utils.deprecation('5.2.1-v14', 'Please use the new sound API');
            }
            if (data === undefined) {
                console.log('Please use the new sound API');
                return;
            }
            if (data.assetId === undefined) {
                console.log('execute sound failed, missing assetId');
                return;
            }
            if (data.trackId === undefined) {
                console.log('execute sound failed, missing trackId');
                return;
            }
            data.mode = data.mode || 'sound';
            var soundId = void 0;
            if (Array.isArray(data.assetId)) {
                var soundIdVar = variableManager.getExpressItemValue(this.component, data.assetId);
                if (soundIdVar && soundIdVar.value !== undefined) {
                    soundId = soundIdVar.value;
                }
                else {
                    soundId = soundIdVar;
                }
            }
            else {
                soundId = data.assetId;
            }
            data.assetId = soundId;
            switch (this.dataType) {
                case 16 /* PlaySound */:
                    soundManager.playSound(data);
                    break;
                case 33 /* PauseSound */:
                    soundManager.pauseSound(data);
                    break;
                case 34 /* ResumeSound */:
                    soundManager.resumeSound(data);
                    break;
            }
            this.complete();
        }
        else {
            this.complete();
        }
    };
    return SoundTask;
}(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["BaseTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/WaitTask.ts":
/*!*********************************************************!*\
  !*** ./packages/player/src/core/actionTask/WaitTask.ts ***!
  \*********************************************************/
/*! exports provided: WaitTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitTask", function() { return WaitTask; });
/* harmony import */ var _core_BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
/* harmony import */ var _utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/VFUtil */ "./packages/player/src/utils/VFUtil.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var WaitTask = /** @class */ (function (_super) {
    __extends(WaitTask, _super);
    function WaitTask(component, data) {
        var _this = _super.call(this) || this;
        _this.component = component;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(WaitTask.prototype, "timeout", {
        get: function () {
            var time = 0;
            if (Array.isArray(this.data.value)) {
                if (this.component && this.component.vfStage) {
                    var variableManager = this.component.vfStage.variableManager;
                    time = variableManager.getExpressItemValue(this.component, this.data.value);
                }
            }
            else {
                time = this.data.value;
            }
            if (!Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_1__["isNumber"])(time)) {
                time = 1;
            }
            return time;
        },
        enumerable: true,
        configurable: true
    });
    WaitTask.prototype.run = function () {
        var _this = this;
        _super.prototype.run.call(this);
        var timeout = this.timeout;
        this.timeoutHandler = vf.gui.Scheduler.setTimeout(timeout, function () {
            if (_this.timeoutHandler) {
                _this.timeoutHandler.stop();
                _this.timeoutHandler = undefined;
            }
            _this.complete();
        });
    };
    return WaitTask;
}(_core_BaseTask__WEBPACK_IMPORTED_MODULE_0__["BaseTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/core/ActionListUtils.ts":
/*!*********************************************************************!*\
  !*** ./packages/player/src/core/actionTask/core/ActionListUtils.ts ***!
  \*********************************************************************/
/*! exports provided: injectParamsToQueueTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectParamsToQueueTask", function() { return injectParamsToQueueTask; });
/* harmony import */ var _ExpressTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ExpressTask */ "./packages/player/src/core/actionTask/ExpressTask.ts");
/* harmony import */ var _IfTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../IfTask */ "./packages/player/src/core/actionTask/IfTask.ts");
/* harmony import */ var _SetPropertyTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SetPropertyTask */ "./packages/player/src/core/actionTask/SetPropertyTask.ts");
/* harmony import */ var _PlayAnimationTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PlayAnimationTask */ "./packages/player/src/core/actionTask/PlayAnimationTask.ts");
/* harmony import */ var _SoundTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SoundTask */ "./packages/player/src/core/actionTask/SoundTask.ts");
/* harmony import */ var _CallFunctionTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CallFunctionTask */ "./packages/player/src/core/actionTask/CallFunctionTask.ts");
/* harmony import */ var _PrintTask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PrintTask */ "./packages/player/src/core/actionTask/PrintTask.ts");
/* harmony import */ var _model_IVFData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/IVFData */ "./packages/player/src/core/model/IVFData.ts");
/* harmony import */ var _ForTask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ForTask */ "./packages/player/src/core/actionTask/ForTask.ts");
/* harmony import */ var _CallProtoFunctionTask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../CallProtoFunctionTask */ "./packages/player/src/core/actionTask/CallProtoFunctionTask.ts");
/* harmony import */ var _AddListenerTask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../AddListenerTask */ "./packages/player/src/core/actionTask/AddListenerTask.ts");
/* harmony import */ var _AddListenerCallTask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../AddListenerCallTask */ "./packages/player/src/core/actionTask/AddListenerCallTask.ts");
/* harmony import */ var _RemoveListenerTask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../RemoveListenerTask */ "./packages/player/src/core/actionTask/RemoveListenerTask.ts");
/* harmony import */ var _EmitEventTask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../EmitEventTask */ "./packages/player/src/core/actionTask/EmitEventTask.ts");














function injectParamsToQueueTask(queue, paramIds) {
    var tasks = queue.tasks;
    if (tasks) {
        for (var i = 0, len = tasks.length; i < len; i++) {
            injectParamsToTask(tasks[i], paramIds);
        }
    }
}
function injectParamsToTask(task, paramIds) {
    if (task instanceof _ExpressTask__WEBPACK_IMPORTED_MODULE_0__["ExpressTask"]) {
        var express = (task).data.express;
        modifyParamValue(express, paramIds);
    }
    else if (task instanceof _IfTask__WEBPACK_IMPORTED_MODULE_1__["IfTask"]) {
        var conditions = task.conditions;
        for (var j = 0, jlen = conditions.length; j < jlen; j++) {
            var exp = conditions[j];
            modifyParamValue(exp, paramIds);
        }
        if (task.conditionsRun) {
            var conditionRun = task.conditionsRun;
            for (var i = 0, len = conditionRun.length; i < len; i++) {
                var oneRun = conditionRun[i];
                injectParamsToQueueTask(oneRun, paramIds);
            }
        }
        if (task.elseRun) {
            injectParamsToQueueTask(task.elseRun, paramIds);
        }
    }
    else if (task instanceof _SetPropertyTask__WEBPACK_IMPORTED_MODULE_2__["SetPropertyTask"]) {
        if (task.data.value && Array.isArray(task.data.value)) {
            modiyExpressItemParamValue(task.data.value, paramIds);
        }
    }
    else if (task instanceof _PlayAnimationTask__WEBPACK_IMPORTED_MODULE_3__["PlayAnimationTask"]) {
        if (task.data.name && Array.isArray(task.data.name)) {
            modiyExpressItemParamValue(task.data.name, paramIds);
        }
        if (task.data && task.data.target) {
            modiyExpressItemParamValue(task.data.target, paramIds);
        }
    }
    else if (task instanceof _SoundTask__WEBPACK_IMPORTED_MODULE_4__["SoundTask"]) {
        if (task.data.assetId && Array.isArray(task.data.assetId)) {
            modiyExpressItemParamValue(task.data.assetId, paramIds);
        }
    }
    else if (task instanceof _CallFunctionTask__WEBPACK_IMPORTED_MODULE_5__["CallFunctionTask"]) {
        if (task.data && task.data.params) {
            modifyParamValue(task.data.params, paramIds);
        }
        if (task.data && task.data.target) {
            modiyExpressItemParamValue(task.data.target, paramIds);
        }
    }
    else if (task instanceof _PrintTask__WEBPACK_IMPORTED_MODULE_6__["PrintTask"]) {
        if (task.data && task.data.value) {
            modiyExpressItemParamValue(task.data.value, paramIds);
        }
    }
    else if (task instanceof _ForTask__WEBPACK_IMPORTED_MODULE_8__["ForTask"]) {
        task.injectParams(paramIds);
    }
    else if (task instanceof _AddListenerTask__WEBPACK_IMPORTED_MODULE_10__["AddListenerTask"] ||
        task instanceof _AddListenerCallTask__WEBPACK_IMPORTED_MODULE_11__["AddListenerCallTask"] ||
        task instanceof _RemoveListenerTask__WEBPACK_IMPORTED_MODULE_12__["RemoveListenerTask"] ||
        task instanceof _EmitEventTask__WEBPACK_IMPORTED_MODULE_13__["EmitEventTask"] ||
        task instanceof _CallProtoFunctionTask__WEBPACK_IMPORTED_MODULE_9__["CallProtoFunctionTask"]) {
        if (task.data && task.data.target) {
            modiyExpressItemParamValue(task.data.target, paramIds);
        }
    }
}
function modifyParamValue(express, paramIds) {
    if (!express || !Array.isArray(express)) {
        return;
    }
    for (var j = 0, jlen = express.length; j < jlen; j++) {
        var expressItem = express[j];
        modiyExpressItemParamValue(expressItem, paramIds);
    }
}
function modiyExpressItemParamValue(expressItem, paramIds) {
    if (expressItem[0] === _model_IVFData__WEBPACK_IMPORTED_MODULE_7__["ExpressItemType"].PARAM_VALUE) {
        var paramIndex = expressItem[1];
        if (paramIds.length > paramIndex) {
            expressItem[2] = paramIds[paramIndex];
        }
    }
    else if (expressItem[0] === _model_IVFData__WEBPACK_IMPORTED_MODULE_7__["ExpressItemType"].ARRAY_VALUE) {
        // expressItem 0:type, 1:componentId, 2: variableId, 3: index, 4?: property
        if (Array.isArray(expressItem[3])) {
            modiyExpressItemParamValue(expressItem[3], paramIds);
        }
    }
    else if (expressItem[0] === _model_IVFData__WEBPACK_IMPORTED_MODULE_7__["ExpressItemType"].ARRAY_FUNCTION) {
        if (expressItem[3] == 'push' ||
            expressItem[3] == 'unshift' ||
            expressItem[3] == 'concat') {
            if (Array.isArray(expressItem[4])) {
                modiyExpressItemParamValue(expressItem[4], paramIds);
            }
        }
        else if (expressItem[3] == 'splice') {
            if (Array.isArray(expressItem[4])) {
                modiyExpressItemParamValue(expressItem[4], paramIds);
            }
            if (Array.isArray(expressItem[5])) {
                modiyExpressItemParamValue(expressItem[5], paramIds);
            }
        }
    }
}


/***/ }),

/***/ "./packages/player/src/core/actionTask/core/BaseTask.ts":
/*!**************************************************************!*\
  !*** ./packages/player/src/core/actionTask/core/BaseTask.ts ***!
  \**************************************************************/
/*! exports provided: TaskEvent, BaseTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskEvent", function() { return TaskEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseTask", function() { return BaseTask; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TaskEvent;
(function (TaskEvent) {
    TaskEvent["EVENT_COMPLETE"] = "EVENT_COMPLETE";
    TaskEvent["EVENT_FAIL"] = "EVENT_FAIL";
    TaskEvent["EVENT_BREAK"] = "EVENT_BREAK";
    TaskEvent["FUNCTION_RUN_COMPLETE"] = "FUNCTION_RUN_COMPLETE";
})(TaskEvent || (TaskEvent = {}));
var BaseTask = /** @class */ (function (_super) {
    __extends(BaseTask, _super);
    function BaseTask() {
        var _this = _super.call(this) || this;
        _this._isRunning = false;
        _this._isPaused = false;
        _this._isCompleted = false;
        _this._isFailed = false;
        _this._asynchronous = false;
        return _this;
    }
    BaseTask.prototype.run = function () {
        this._isRunning = true;
        this._isCompleted = false;
        this._isFailed = false;
    };
    BaseTask.prototype.stop = function () {
        this._isRunning = false;
    };
    BaseTask.prototype.pause = function () {
        this._isPaused = true;
    };
    BaseTask.prototype.resume = function () {
        this._isPaused = false;
    };
    BaseTask.prototype.break = function () {
        this._isRunning = false;
        this.emit(TaskEvent.EVENT_BREAK);
    };
    BaseTask.prototype.complete = function () {
        this._isRunning = false;
        this._isCompleted = true;
        this.emit(TaskEvent.EVENT_COMPLETE);
    };
    BaseTask.prototype.fail = function (type, data) {
        if (data === void 0) { data = null; }
        this._isRunning = false;
        this._isFailed = true;
        this.emit(TaskEvent.EVENT_FAIL, data);
    };
    Object.defineProperty(BaseTask.prototype, "asynchronous", {
        get: function () {
            return this._asynchronous;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseTask.prototype, "isRunning", {
        get: function () {
            return this._isRunning;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseTask.prototype, "isCompleted", {
        get: function () {
            return this._isCompleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseTask.prototype, "isFailed", {
        get: function () {
            return this._isFailed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseTask.prototype, "isPaused", {
        get: function () {
            return this._isPaused;
        },
        enumerable: true,
        configurable: true
    });
    return BaseTask;
}(vf.utils.EventEmitter));



/***/ }),

/***/ "./packages/player/src/core/actionTask/core/ContainerTask.ts":
/*!*******************************************************************!*\
  !*** ./packages/player/src/core/actionTask/core/ContainerTask.ts ***!
  \*******************************************************************/
/*! exports provided: ContainerTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerTask", function() { return ContainerTask; });
/* harmony import */ var _BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
/* harmony import */ var _QueueTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueueTask */ "./packages/player/src/core/actionTask/core/QueueTask.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ContainerTask = /** @class */ (function (_super) {
    __extends(ContainerTask, _super);
    function ContainerTask() {
        var _this = _super.call(this) || this;
        _this.loopTask = new _QueueTask__WEBPACK_IMPORTED_MODULE_1__["QueueTask"]();
        _this.loopTask.on(_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].EVENT_BREAK, _this.onBreak, _this);
        return _this;
    }
    ContainerTask.prototype.addSubTask = function (task) {
        if (this.loopTask) {
            this.loopTask.addTask(task);
            if (this.loopTask.asynchronous) {
                this._asynchronous = true;
            }
        }
    };
    ContainerTask.prototype.stop = function () {
        _super.prototype.stop.call(this);
        if (this.loopTask) {
            this.loopTask.off(_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].EVENT_BREAK);
            this.loopTask.stop();
        }
    };
    ContainerTask.prototype.break = function () {
        _super.prototype.break.call(this);
        if (this.loopTask) {
            this.loopTask.off(_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].EVENT_BREAK);
            this.loopTask.break();
        }
    };
    ContainerTask.prototype.pause = function () {
        _super.prototype.pause.call(this);
        if (this.loopTask) {
            this.loopTask.pause();
        }
    };
    ContainerTask.prototype.resume = function () {
        _super.prototype.resume.call(this);
        if (this.loopTask) {
            this.loopTask.resume();
        }
    };
    ContainerTask.prototype.onBreak = function (data) {
        this.break();
    };
    return ContainerTask;
}(_BaseTask__WEBPACK_IMPORTED_MODULE_0__["BaseTask"]));



/***/ }),

/***/ "./packages/player/src/core/actionTask/core/QueueTask.ts":
/*!***************************************************************!*\
  !*** ./packages/player/src/core/actionTask/core/QueueTask.ts ***!
  \***************************************************************/
/*! exports provided: QueueTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueTask", function() { return QueueTask; });
/* harmony import */ var _BaseTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseTask */ "./packages/player/src/core/actionTask/core/BaseTask.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var QueueTask = /** @class */ (function (_super) {
    __extends(QueueTask, _super);
    function QueueTask() {
        var _this = _super.call(this) || this;
        _this._tasks = [];
        _this._currentTask = null;
        _this._curTaskIndex = 0;
        return _this;
    }
    Object.defineProperty(QueueTask.prototype, "tasks", {
        get: function () {
            return this._tasks;
        },
        enumerable: true,
        configurable: true
    });
    QueueTask.prototype.run = function () {
        if (this.isRunning) {
            return;
        }
        this._curTaskIndex = 0;
        _super.prototype.run.call(this);
        this._nextTask();
    };
    QueueTask.prototype.stop = function () {
        _super.prototype.stop.call(this);
        if (this._currentTask) {
            this.clearEvent(this._currentTask);
            this._currentTask.stop();
            this._currentTask = null;
        }
        this._curTaskIndex = Number.MAX_VALUE;
        this.off(_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].EVENT_COMPLETE);
        this.off(_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].EVENT_BREAK);
        this.off(_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].EVENT_FAIL);
        this.complete();
    };
    QueueTask.prototype.pause = function () {
        _super.prototype.pause.call(this);
        if (this._tasks) {
            for (var i = 0, len = this._tasks.length; i < len; i++) {
                this._tasks[i].pause();
            }
        }
    };
    QueueTask.prototype.resume = function () {
        _super.prototype.resume.call(this);
        if (this._tasks) {
            for (var i = 0, len = this._tasks.length; i < len; i++) {
                this._tasks[i].resume();
            }
        }
    };
    QueueTask.prototype.break = function () {
        _super.prototype.break.call(this);
        if (this._currentTask) {
            this.clearEvent(this._currentTask);
            this._currentTask.break();
            this._currentTask = null;
        }
        this._curTaskIndex = Number.MAX_VALUE;
        this.off(_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].EVENT_COMPLETE);
        this.off(_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].EVENT_BREAK);
        this.off(_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].EVENT_FAIL);
        this.complete();
    };
    QueueTask.prototype.addTask = function (task) {
        if (task) {
            if (task.asynchronous) {
                this._asynchronous = true;
            }
            if (this._tasks.indexOf(task) < 0) {
                this._tasks.push(task);
            }
            else {
                throw new Error('duplicate task');
            }
        }
        else {
            throw new Error('ArgumentError');
        }
        return task;
    };
    QueueTask.prototype._nextTask = function (prevTask) {
        var task = null;
        if (this._curTaskIndex < this._tasks.length) {
            task = this._tasks[this._curTaskIndex];
        }
        if (task) {
            this._currentTask = task;
            this._currentTask.on(_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].EVENT_COMPLETE, this.onOneTaskComplete, this);
            this._currentTask.on(_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].EVENT_FAIL, this.onOneTaskFail, this);
            this._currentTask.on(_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].EVENT_BREAK, this.onOneTaskBreak, this);
            this._currentTask.run();
        }
        else {
            this.complete();
        }
    };
    QueueTask.prototype.clearEvent = function (task) {
        if (task) {
            task.off(_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].EVENT_COMPLETE, this.onOneTaskComplete, this);
            task.off(_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].EVENT_FAIL, this.onOneTaskFail, this);
            task.off(_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].EVENT_BREAK, this.onOneTaskBreak, this);
        }
    };
    QueueTask.prototype.onOneTaskBreak = function (data) {
        if (this._currentTask) {
            this.clearEvent(this._currentTask);
            this.emit(_BaseTask__WEBPACK_IMPORTED_MODULE_0__["TaskEvent"].EVENT_BREAK);
            this.complete();
        }
    };
    QueueTask.prototype.onOneTaskFail = function (data) {
        if (this._currentTask) {
            this.clearEvent(this._currentTask);
            this.fail(data.type, data.data);
        }
        else {
            // debug
            throw new Error('no task');
        }
    };
    QueueTask.prototype.onOneTaskComplete = function (data) {
        this.clearEvent(this._currentTask);
        this._curTaskIndex++;
        this._nextTask(this._currentTask);
    };
    return QueueTask;
}(_BaseTask__WEBPACK_IMPORTED_MODULE_0__["BaseTask"]));



/***/ }),

/***/ "./packages/player/src/core/animation/Animation.ts":
/*!*********************************************************!*\
  !*** ./packages/player/src/core/animation/Animation.ts ***!
  \*********************************************************/
/*! exports provided: Animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony import */ var _AnimationClip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationClip */ "./packages/player/src/core/animation/AnimationClip.ts");
/* harmony import */ var _Timeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Timeline */ "./packages/player/src/core/animation/Timeline.ts");
/* harmony import */ var _NumberFrame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NumberFrame */ "./packages/player/src/core/animation/NumberFrame.ts");
/* harmony import */ var _BooleanFrame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BooleanFrame */ "./packages/player/src/core/animation/BooleanFrame.ts");
/* harmony import */ var _StringFrame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StringFrame */ "./packages/player/src/core/animation/StringFrame.ts");
/* harmony import */ var _ColorFrame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ColorFrame */ "./packages/player/src/core/animation/ColorFrame.ts");
/* harmony import */ var _EventTimeline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EventTimeline */ "./packages/player/src/core/animation/EventTimeline.ts");
/* harmony import */ var _EventFrame__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EventFrame */ "./packages/player/src/core/animation/EventFrame.ts");
/* harmony import */ var _PathTimeline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PathTimeline */ "./packages/player/src/core/animation/PathTimeline.ts");









var Animation = /** @class */ (function () {
    function Animation(component, data, fps, realFPS, animationTemplate) {
        if (fps === void 0) { fps = 30; }
        if (realFPS === void 0) { realFPS = true; }
        if (animationTemplate === void 0) { animationTemplate = {}; }
        this.animationMap = {};
        this.animationConfig = {};
        this.status = 0 /* STOP */;
        this.curAnimationClips = [];
        /**
         * realFPS 为 true时，真实的fps和设置的fps不一致时，动画的刷新率取最低的那个。
         * 默认是false， 真实的fps和设置的fps不一致时，动画的刷新率取真实的fps
         */
        this.realFPS = false;
        this.curTime = 0;
        this.curPlayTime = 0;
        this.startTime = 0;
        this.passedTime = 0;
        this.minDeltaT = 33;
        this.deltaT = 0;
        this.fps = 30;
        this.curAnimatinName = '';
        this.curAnimatinDuration = 0;
        this.curAnimatinDurationTime = 0; //每一个loop的持续时间
        this.curAnimationTimes = 0;
        this.curAnimationTotalTime = 0; //当前动画总持续时间（每个loop帧 * 帧间隔 * loop次数）
        this._curPlayTimes = 0;
        this.component = component;
        this.data = data;
        this.realFPS = realFPS;
        if (fps > 0) {
            this.fps = fps;
        }
        this.minDeltaT = Math.ceil(1000 / this.fps);
        this.deltaT = 0;
        this._animationTemplate = animationTemplate;
        this.parseData();
    }
    Animation.prototype.addAnimationClip = function (clip) {
        var name = clip.name;
        var animations = this.animationMap[name];
        if (animations == null) {
            animations = [];
            this.animationMap[name] = animations;
        }
        animations.push(clip);
    };
    Animation.prototype.getPauseData = function () {
        if (this.status === 1 /* PLAYING */) {
            return {
                animation: this.curAnimatinName,
                frame: Math.round(this.curPlayTime * this.fps / 1000),
                times: this.curAnimationTimes <= 0 ?
                    this.curAnimationTimes :
                    (this.curAnimationTimes - this._curPlayTimes),
            };
        }
        return undefined;
    };
    Animation.prototype.playDefaultAnimation = function () {
        if (this.status === 1 /* PLAYING */) {
            return;
        }
        for (var name_1 in this.animationConfig) {
            if (this.animationConfig[name_1]) {
                var config = this.animationConfig[name_1];
                if (config.autoPlay) {
                    this.play(name_1, config.loop ? -1 : 1);
                    break;
                }
            }
        }
    };
    Animation.prototype.gotoPlay = function (name, frameIndex, times) {
        if (times === void 0) { times = 1; }
        if (this.status === 1 /* PLAYING */) {
            this.stop();
        }
        var config = this.animationConfig[name];
        if (config) {
            this.curAnimatinDuration = config.totalTime;
        }
        else {
            // tslint:disable-next-line: no-console
            console.warn('can not find animation:', name);
            return;
        }
        this.curAnimatinName = name;
        this.curAnimationClips = this.animationMap[name];
        this.curAnimationTimes = times;
        this.curAnimationTotalTime = Math.round(this.curAnimatinDuration *
            this.curAnimationTimes * (1000 / this.fps));
        this.curAnimatinDurationTime = Math.round(this.curAnimatinDuration * 1000 / this.fps);
        this.curPlayTime = frameIndex * (1000 / this.fps);
        this.deltaT = 0;
        this.setCurTime(this.curPlayTime);
        this.status = 1 /* PLAYING */;
        this.startTime = 0;
        this.curTime = this.startTime;
        this.startTime -= this.curPlayTime;
        this._curPlayTimes = 0;
        vf.gui.TickerShared.add(this.tick, this);
    };
    Animation.prototype.gotoStop = function (name, frameIndex) {
        if (this.status === 1 /* PLAYING */) {
            this.stop();
        }
        var config = this.animationConfig[name];
        if (config) {
            this.curAnimatinDuration = config.totalTime;
        }
        else {
            // tslint:disable-next-line: no-console
            console.warn('can not find animation:', name);
            return;
        }
        this.curAnimationClips = this.animationMap[name];
        this.curAnimationTimes = 1;
        this.curAnimationTotalTime = Math.round(this.curAnimatinDuration *
            this.curAnimationTimes * (1000 / this.fps));
        this.curAnimatinDurationTime = Math.round(this.curAnimatinDuration * 1000 / this.fps);
        this.curPlayTime = frameIndex * (1000 / this.fps);
        this.deltaT = 0;
        this.setCurTime(this.curPlayTime);
        this.status = 0 /* STOP */;
        this.startTime = 0;
        this.curTime = this.startTime;
        this.startTime -= this.curPlayTime;
        this._curPlayTimes = 0;
        this.tick();
    };
    Animation.prototype.play = function (name, times) {
        if (times === void 0) { times = 1; }
        this.gotoPlay(name, 0, times);
    };
    Animation.prototype.stop = function () {
        vf.gui.TickerShared.remove(this.tick, this);
        this.status = 0 /* STOP */;
        this.skipNextEvent();
    };
    Object.defineProperty(Animation.prototype, "curPlayTimes", {
        set: function (v) {
            if (v !== this._curPlayTimes) {
                this._curPlayTimes = v;
                if (this.component) {
                    this.component.emit("AnimationLoopComplete" /* AnimationLoopComplete */, v);
                    if (this.curAnimationTimes > 0 && this._curPlayTimes >= this.curAnimationTimes) {
                        this.component.emit("AnimationComplete" /* AnimationComplete */);
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Animation.prototype.tick = function () {
        var dt = vf.gui.TickerShared.deltaMS; //by ziye 使用gui的ticker获取帧间隔
        this.curTime += dt;
        this.curPlayTime += dt;
        if (this.realFPS) {
            this.deltaT += dt;
            if (this.deltaT < this.minDeltaT) {
                this.passedTime = this.curTime - this.startTime;
                if (this.curAnimationTimes > 0 &&
                    this.passedTime > this.curAnimationTotalTime) {
                    this.stop();
                }
                this.curPlayTimes = Math.floor(this.passedTime / this.curAnimatinDurationTime);
                return;
            }
            while (this.deltaT > this.minDeltaT) {
                this.deltaT -= this.minDeltaT;
            }
        }
        if (this.curPlayTime > this.curAnimatinDurationTime) {
            if (this.curAnimationTimes < 0 || // 循环播放
                this.curAnimationTimes > 1 && this._curPlayTimes < this.curAnimationTimes - 1) { // 非最后一次播放
                this.curPlayTime = this.curPlayTime % this.curAnimatinDurationTime;
            }
        }
        this.setCurTime(this.curPlayTime);
        this.passedTime = this.curTime - this.startTime;
        if (this.curAnimationTimes > 0 &&
            this.passedTime > this.curAnimationTotalTime) {
            this.stop();
        }
        this.curPlayTimes = Math.floor(this.passedTime / this.curAnimatinDurationTime);
    };
    Animation.prototype.setCurTime = function (curTime) {
        if (this.curAnimationClips) {
            for (var i = 0, len = this.curAnimationClips.length; i < len; i++) {
                var clip = this.curAnimationClips[i];
                clip.curTime = curTime;
            }
        }
    };
    Animation.prototype.skipNextEvent = function () {
        if (this.curAnimationClips) {
            for (var i = 0, len = this.curAnimationClips.length; i < len; i++) {
                var clip = this.curAnimationClips[i];
                clip.skipNextEvent();
            }
        }
    };
    //  parse
    Animation.prototype.parseData = function () {
        if (this.component && this.data) {
            for (var i = 0, len = this.data.length; i < len; i++) {
                this.parseAnimation(this.data[i]);
            }
        }
    };
    Animation.prototype.parseAnimation = function (anim) {
        var name = anim.name;
        var totalTime = anim.duration || 0;
        var loop = anim.loop;
        var autoPlay = anim.autoPlay;
        var config = {
            loop: loop,
            totalTime: totalTime,
            autoPlay: autoPlay,
        };
        this.animationConfig[name] = config;
        var duration = 0;
        for (var key in anim.children) {
            var subAnim = anim.children[key];
            if (subAnim) {
                var subAnimation = void 0;
                if (typeof subAnim === 'string') {
                    subAnimation = this._animationTemplate[subAnim];
                }
                else {
                    subAnimation = subAnim;
                }
                if (subAnimation) {
                    var ac = this.parseAnimationClip(key, name, subAnimation);
                    if (ac && ac.totalTime > duration) {
                        duration = ac.totalTime;
                    }
                }
            }
        }
        if (!anim.duration || anim.duration <= 0) {
            anim.duration = duration;
            config.totalTime = duration;
        }
    };
    Animation.prototype.parseAnimationClip = function (componentId, animName, subAnimation) {
        var childId = componentId;
        var component;
        if (childId === "event" /* EVENT */) {
            component = this.component;
        }
        else {
            component = this.component.getChildById(childId);
        }
        if (component) {
            var animClip = new _AnimationClip__WEBPACK_IMPORTED_MODULE_0__["AnimationClip"](animName);
            animClip.name = animName;
            animClip.fps = this.fps;
            animClip.target = component;
            animClip.totalTime = subAnimation.duration || 0;
            animClip.loop = !!subAnimation.loop;
            var duration = 0;
            for (var i = 0, len = subAnimation.timelines.length; i < len; i++) {
                var timelineData = subAnimation.timelines[i];
                var timeline = this.parseTimeline(timelineData, subAnimation.duration);
                if (timeline) {
                    animClip.timelines.push(timeline);
                    if (timeline.totalTime > duration) {
                        duration = timeline.totalTime;
                    }
                }
            }
            if (!animClip.totalTime || animClip.totalTime <= 0) {
                animClip.totalTime = duration;
            }
            this.addAnimationClip(animClip);
            return animClip;
        }
    };
    Animation.prototype.parseTimeline = function (data, duration) {
        if (duration === void 0) { duration = -1; }
        var timeline;
        switch (data.type) {
            case "x" /* X */:
            case "y" /* Y */:
            case "scaleX" /* SCALE_X */:
            case "scaleY" /* SCALE_Y */:
            case "rotation" /* ROTATION */:
            case "skewX" /* SKEW_X */:
            case "skewY" /* SKEW_Y */:
            case "alpha" /* ALPHA */:
            case "progress" /* PROGRESS */:
            case "alpha" /* ALPHA */:
            case "volume" /* VOLUME */:
            case "filterBlur" /* FITERBLUR */:
                timeline = new _Timeline__WEBPACK_IMPORTED_MODULE_1__["Timeline"]();
                this.parseFrames(timeline, data.frames, _NumberFrame__WEBPACK_IMPORTED_MODULE_2__["NumberFrame"]);
                break;
            case "visible" /* VISIBLE */:
            case "enabled" /* ENABLED */:
                timeline = new _Timeline__WEBPACK_IMPORTED_MODULE_1__["Timeline"]();
                this.parseFrames(timeline, data.frames, _BooleanFrame__WEBPACK_IMPORTED_MODULE_3__["BooleanFrame"]);
                break;
            case "text" /* TEXT */:
            case "play" /* PLAY */:
                timeline = new _Timeline__WEBPACK_IMPORTED_MODULE_1__["Timeline"]();
                this.parseFrames(timeline, data.frames, _StringFrame__WEBPACK_IMPORTED_MODULE_4__["StringFrame"]);
                break;
            case "color" /* COLOR */:
                timeline = new _Timeline__WEBPACK_IMPORTED_MODULE_1__["Timeline"]();
                this.parseFrames(timeline, data.frames, _ColorFrame__WEBPACK_IMPORTED_MODULE_5__["ColorFrame"]);
                break;
            case "event" /* EVENT */:
                timeline = new _EventTimeline__WEBPACK_IMPORTED_MODULE_6__["EventTimeline"]();
                this.parseFrames(timeline, data.frames, _EventFrame__WEBPACK_IMPORTED_MODULE_7__["EventFrame"]);
                break;
            case "path" /* PATH */:
                if (data.path) {
                    timeline = new _PathTimeline__WEBPACK_IMPORTED_MODULE_8__["PathTimeline"](data.path);
                    this.parseFrames(timeline, data.frames, _NumberFrame__WEBPACK_IMPORTED_MODULE_2__["NumberFrame"]);
                }
                break;
            default:
                timeline = new _Timeline__WEBPACK_IMPORTED_MODULE_1__["Timeline"]();
                this.parseFrames(timeline, data.frames, _NumberFrame__WEBPACK_IMPORTED_MODULE_2__["NumberFrame"]);
                break;
        }
        if (timeline) {
            timeline.type = data.type;
            timeline.loop = !!data.loop;
            if (data.frames && data.frames.length) {
                timeline.totalTime = data.frames[data.frames.length - 1].frame;
            }
            else {
                timeline.totalTime = 0;
            }
        }
        return timeline;
    };
    Animation.prototype.parseFrames = function (timeline, data, frameClass) {
        for (var i = 0, len = data.length; i < len; i++) {
            var frameData = data[i];
            var frame = new frameClass();
            frame.time = frameData.frame;
            frame.curve = frameData.curve;
            frame.value = frameData.value;
            timeline.frames.push(frame);
        }
    };
    return Animation;
}());



/***/ }),

/***/ "./packages/player/src/core/animation/AnimationClip.ts":
/*!*************************************************************!*\
  !*** ./packages/player/src/core/animation/AnimationClip.ts ***!
  \*************************************************************/
/*! exports provided: AnimationClip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationClip", function() { return AnimationClip; });
/* harmony import */ var _EventTimeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventTimeline */ "./packages/player/src/core/animation/EventTimeline.ts");

var AnimationClip = /** @class */ (function () {
    function AnimationClip(name) {
        this.timelines = [];
        this.fps = 30;
        this.totalTime = 0;
        this.loop = false;
        this._curTime = 0;
        this._curFrame = 0;
        this.name = name;
    }
    Object.defineProperty(AnimationClip.prototype, "targetDisplay", {
        get: function () {
            return this.target;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnimationClip.prototype, "curTime", {
        set: function (v) {
            this._curTime = v;
            this._curFrame = this._curTime * this.fps / 1000;
            if (this.loop) {
                this._curFrame = this._curFrame % this.totalTime;
            }
            for (var i = 0, len = this.timelines.length; i < len; i++) {
                this.timelines[i].globalTime = this._curFrame;
            }
            this.applyTimeline();
        },
        enumerable: true,
        configurable: true
    });
    AnimationClip.prototype.skipNextEvent = function () {
        for (var i = 0, len = this.timelines.length; i < len; i++) {
            var timeline = this.timelines[i];
            if (timeline instanceof _EventTimeline__WEBPACK_IMPORTED_MODULE_0__["EventTimeline"]) {
                timeline.skipNextEmit();
            }
        }
    };
    AnimationClip.prototype.applyTimeline = function () {
        if (this.target == null) {
            return;
        }
        for (var i = 0, len = this.timelines.length; i < len; i++) {
            var timeline = this.timelines[i];
            var targetDisplay = this.targetDisplay;
            var curValue = timeline.curValue;
            switch (timeline.type) {
                case "x" /* X */:
                    targetDisplay.x = curValue;
                    break;
                case "y" /* Y */:
                    targetDisplay.y = curValue;
                    break;
                case "scaleX" /* SCALE_X */:
                    targetDisplay.scaleX = curValue;
                    break;
                case "scaleY" /* SCALE_Y */:
                    targetDisplay.scaleY = curValue;
                    break;
                case "rotation" /* ROTATION */:
                    targetDisplay.rotation = curValue;
                    break;
                case "visible" /* VISIBLE */:
                    targetDisplay.visible = curValue;
                    break;
                case "alpha" /* ALPHA */:
                    targetDisplay.alpha = curValue;
                    break;
                case "text" /* TEXT */:
                    targetDisplay.text = curValue;
                    break;
                case "enabled" /* ENABLED */:
                    targetDisplay.enabled = curValue;
                    break;
                case "filterBlur" /* FITERBLUR */:
                    targetDisplay.filterBlur = curValue;
                    break;
                case "event" /* EVENT */:
                    var events = curValue;
                    if (events) {
                        for (var j = 0, jlen = events.length; j < jlen; j++) {
                            var event_1 = events[j];
                            targetDisplay.emit(event_1.type, event_1.data);
                        }
                    }
                    break;
                case "path" /* PATH */:
                    var pos = timeline.curPos;
                    targetDisplay.x = pos[0];
                    targetDisplay.y = pos[1];
                    break;
                default:
                    if (timeline.type.indexOf('filter') === 0) {
                        this.applyFilter(targetDisplay, timeline.type, curValue);
                    }
                    else {
                        targetDisplay[timeline.type] = curValue;
                    }
                    break;
            }
        }
    };
    AnimationClip.prototype.applyFilter = function (display, filterKey, value) {
        var filterKeys = filterKey.split('.');
        var target = display;
        for (var i = 0, len = filterKeys.length; i < len - 1; i++) {
            var curkey = filterKeys[i];
            if (target && target[curkey]) {
                target = target[curkey];
            }
        }
        if (target) {
            target[filterKeys[filterKeys.length - 1]] = value;
        }
    };
    return AnimationClip;
}());



/***/ }),

/***/ "./packages/player/src/core/animation/BooleanFrame.ts":
/*!************************************************************!*\
  !*** ./packages/player/src/core/animation/BooleanFrame.ts ***!
  \************************************************************/
/*! exports provided: BooleanFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanFrame", function() { return BooleanFrame; });
/* harmony import */ var _Frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Frame */ "./packages/player/src/core/animation/Frame.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BooleanFrame = /** @class */ (function (_super) {
    __extends(BooleanFrame, _super);
    function BooleanFrame() {
        return _super.call(this) || this;
    }
    BooleanFrame.prototype.getValue = function (progress, value) {
        return this.value;
    };
    return BooleanFrame;
}(_Frame__WEBPACK_IMPORTED_MODULE_0__["Frame"]));



/***/ }),

/***/ "./packages/player/src/core/animation/ColorFrame.ts":
/*!**********************************************************!*\
  !*** ./packages/player/src/core/animation/ColorFrame.ts ***!
  \**********************************************************/
/*! exports provided: ColorFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorFrame", function() { return ColorFrame; });
/* harmony import */ var _Frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Frame */ "./packages/player/src/core/animation/Frame.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ColorFrame = /** @class */ (function (_super) {
    __extends(ColorFrame, _super);
    function ColorFrame() {
        return _super.call(this) || this;
    }
    ColorFrame.prototype.getValue = function (progress, value) {
        var rgbData = this.changeColor2RGB(this.value);
        var rgbValue = this.changeColor2RGB(value);
        var resultArr = [
            rgbData[0] + (rgbValue[0] - rgbValue[0]) * progress,
            rgbData[1] + (rgbValue[1] - rgbValue[1]) * progress,
            rgbData[2] + (rgbValue[2] - rgbValue[2]) * progress,
        ];
        return this.changeRGB2Color(resultArr);
    };
    ColorFrame.prototype.changeColor2RGB = function (color) {
        // tslint:disable-next-line: no-bitwise
        var r = (color >> 16) & 0xFF;
        // tslint:disable-next-line: no-bitwise
        var g = (color >> 8) & 0xFF;
        // tslint:disable-next-line: no-bitwise
        var b = (color >> 0) & 0xFF;
        return [r, g, b];
    };
    ColorFrame.prototype.changeRGB2Color = function (rgb) {
        return rgb[0] * 0x10000 + rgb[1] * 0x100 + rgb[2];
    };
    return ColorFrame;
}(_Frame__WEBPACK_IMPORTED_MODULE_0__["Frame"]));



/***/ }),

/***/ "./packages/player/src/core/animation/EventFrame.ts":
/*!**********************************************************!*\
  !*** ./packages/player/src/core/animation/EventFrame.ts ***!
  \**********************************************************/
/*! exports provided: EventFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventFrame", function() { return EventFrame; });
/* harmony import */ var _Frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Frame */ "./packages/player/src/core/animation/Frame.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var EventFrame = /** @class */ (function (_super) {
    __extends(EventFrame, _super);
    function EventFrame() {
        return _super.call(this) || this;
    }
    EventFrame.prototype.getValue = function (progress, value) {
        return this.value;
    };
    return EventFrame;
}(_Frame__WEBPACK_IMPORTED_MODULE_0__["Frame"]));



/***/ }),

/***/ "./packages/player/src/core/animation/EventTimeline.ts":
/*!*************************************************************!*\
  !*** ./packages/player/src/core/animation/EventTimeline.ts ***!
  \*************************************************************/
/*! exports provided: EventTimeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTimeline", function() { return EventTimeline; });
/* harmony import */ var _Timeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timeline */ "./packages/player/src/core/animation/Timeline.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var EventTimeline = /** @class */ (function (_super) {
    __extends(EventTimeline, _super);
    function EventTimeline() {
        var _this = _super.call(this) || this;
        _this.nextFrameIndex = 0;
        _this.skipEmit = false;
        _this._curValue = [];
        return _this;
    }
    EventTimeline.prototype.skipNextEmit = function () {
        //
        this.lastTime = 0;
        this.nextFrame = undefined;
    };
    EventTimeline.prototype.getProgress = function (cur, min, max, curve) {
        if (curve === void 0) { curve = null; }
        return cur;
    };
    EventTimeline.prototype.updateCurFrame = function () {
        if (this.frames.length === 0) {
            return;
        }
    };
    EventTimeline.prototype.updateCurValue = function () {
        this._curValue.length = 0;
        if (this.frames.length === 0) {
            return;
        }
        if (this.nextFrame === undefined) {
            this.nextFrame = this.frames[0];
            this.nextFrameIndex = 0;
        }
        if (this.curTime >= this.lastTime) {
            if (this.curTime > this.nextFrame.time) {
                this.findEvents(this.nextFrameIndex, false);
            }
        }
        else {
            this.findEvents(0, true);
        }
    };
    EventTimeline.prototype.findEvents = function (startIndex, turnBack) {
        if (turnBack === void 0) { turnBack = false; }
        if (turnBack) {
            for (var i = this.nextFrameIndex, len = this.frames.length; i < len; i++) {
                var frame = this.frames[i];
                this.addEvent(frame);
            }
        }
        for (var i = startIndex, len = this.frames.length; i < len; i++) {
            var frame = this.frames[i];
            if (frame.time < this.curTime && (turnBack || frame.time >= this.lastTime)) {
                this.addEvent(frame);
            }
            else if (frame.time > this.curTime) {
                this.nextFrame = frame;
                this.nextFrameIndex = i;
                break;
            }
            this.nextFrameIndex = Number.MAX_VALUE;
        }
    };
    EventTimeline.prototype.addEvent = function (frame) {
        if (frame.value) {
            for (var j = 0, jlen = frame.value.length; j < jlen; j++) {
                this._curValue.push(frame.value[j]);
            }
        }
    };
    return EventTimeline;
}(_Timeline__WEBPACK_IMPORTED_MODULE_0__["Timeline"]));



/***/ }),

/***/ "./packages/player/src/core/animation/Frame.ts":
/*!*****************************************************!*\
  !*** ./packages/player/src/core/animation/Frame.ts ***!
  \*****************************************************/
/*! exports provided: Frame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Frame", function() { return Frame; });
var Frame = /** @class */ (function () {
    function Frame() {
        this.time = -1;
        this.curve = [];
        this.value = null;
        //
    }
    Frame.prototype.getValue = function (progress, value) {
        return null;
    };
    return Frame;
}());



/***/ }),

/***/ "./packages/player/src/core/animation/NumberFrame.ts":
/*!***********************************************************!*\
  !*** ./packages/player/src/core/animation/NumberFrame.ts ***!
  \***********************************************************/
/*! exports provided: NumberFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberFrame", function() { return NumberFrame; });
/* harmony import */ var _Frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Frame */ "./packages/player/src/core/animation/Frame.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NumberFrame = /** @class */ (function (_super) {
    __extends(NumberFrame, _super);
    function NumberFrame() {
        return _super.call(this) || this;
    }
    NumberFrame.prototype.getValue = function (progress, value) {
        return this.value + (value - this.value) * progress;
    };
    return NumberFrame;
}(_Frame__WEBPACK_IMPORTED_MODULE_0__["Frame"]));



/***/ }),

/***/ "./packages/player/src/core/animation/PathTimeline.ts":
/*!************************************************************!*\
  !*** ./packages/player/src/core/animation/PathTimeline.ts ***!
  \************************************************************/
/*! exports provided: PathTimeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathTimeline", function() { return PathTimeline; });
/* harmony import */ var _Timeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Timeline */ "./packages/player/src/core/animation/Timeline.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PathTimeline = /** @class */ (function (_super) {
    __extends(PathTimeline, _super);
    function PathTimeline(path) {
        var _this = _super.call(this) || this;
        _this.length = 0;
        _this.path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        _this.path.setAttribute("d", path);
        _this.length = _this.path.getTotalLength();
        return _this;
    }
    Object.defineProperty(PathTimeline.prototype, "curPos", {
        get: function () {
            if (this.path) {
                var p = this.path.getPointAtLength(this._curValue * this.length);
                return [p.x, p.y];
            }
            return [0, 0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PathTimeline.prototype, "angle", {
        get: function () {
            var p0 = this.path.getPointAtLength(this._curValue * this.length - 1);
            var p1 = this.path.getPointAtLength(this._curValue * this.length + 1);
            return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
        },
        enumerable: true,
        configurable: true
    });
    return PathTimeline;
}(_Timeline__WEBPACK_IMPORTED_MODULE_0__["Timeline"]));



/***/ }),

/***/ "./packages/player/src/core/animation/StringFrame.ts":
/*!***********************************************************!*\
  !*** ./packages/player/src/core/animation/StringFrame.ts ***!
  \***********************************************************/
/*! exports provided: StringFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringFrame", function() { return StringFrame; });
/* harmony import */ var _Frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Frame */ "./packages/player/src/core/animation/Frame.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var StringFrame = /** @class */ (function (_super) {
    __extends(StringFrame, _super);
    function StringFrame() {
        return _super.call(this) || this;
    }
    StringFrame.prototype.getValue = function (progress, value) {
        return this.value;
    };
    return StringFrame;
}(_Frame__WEBPACK_IMPORTED_MODULE_0__["Frame"]));



/***/ }),

/***/ "./packages/player/src/core/animation/Timeline.ts":
/*!********************************************************!*\
  !*** ./packages/player/src/core/animation/Timeline.ts ***!
  \********************************************************/
/*! exports provided: Timeline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return Timeline; });
/* harmony import */ var _utils_VFUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/VFUtil */ "./packages/player/src/utils/VFUtil.ts");

var Timeline = /** @class */ (function () {
    function Timeline() {
        this.type = null;
        this.frames = [];
        this.curTime = 0;
        this.lastTime = 0;
        this.loop = false;
        this.totalTime = 0;
        this._defaultValue = null;
        this._globalTime = 0;
        this._lastGlobalTime = 0;
        this._lastFrame = null;
        this._curFrame = null;
        this._nextFrame = null;
        this._times = -1;
        this._curValue = null;
        //
    }
    Object.defineProperty(Timeline.prototype, "defaultValue", {
        set: function (value) {
            this._defaultValue = value;
            this._curValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Timeline.prototype, "curValue", {
        get: function () {
            return this._curValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Timeline.prototype, "globalTime", {
        set: function (v) {
            this._globalTime = v;
            this.tick();
            this._lastGlobalTime = v;
        },
        enumerable: true,
        configurable: true
    });
    Timeline.prototype.getProgress = function (cur, min, max, curve) {
        if (curve === void 0) { curve = null; }
        var lineProgress = 0;
        var curveProgress = 0;
        if (max === min) {
            lineProgress = 0;
        }
        else {
            lineProgress = (cur - min) / (max - min);
        }
        curveProgress = lineProgress;
        if (curve && curve.length) {
            if (curve.length === 1) {
                var curveType = curve[0];
                curveProgress = Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_0__["getCurveProgress"])(curveType, lineProgress);
            }
            // todo bezier
        }
        return curveProgress;
    };
    Timeline.prototype.tick = function () {
        this.curTime = this._globalTime;
        if (this.loop) {
            this._times = Math.floor(this.curTime / this.totalTime);
            this.curTime = this.curTime - this.totalTime * this._times;
        }
        this.updateCurFrame();
        this.updateCurValue();
        this.lastTime = this.curTime;
    };
    Timeline.prototype.updateCurFrame = function () {
        if (this.frames.length === 0) {
            return;
        }
        this._lastFrame = this._curFrame;
        var i = 0;
        var len = 0;
        for (i = 0, len = this.frames.length; i < len; i++) {
            if (this.frames[i].time > this.curTime) {
                if (i === 0) {
                    this._curFrame = null;
                    this._nextFrame = this.frames[i];
                }
                else {
                    this._curFrame = this.frames[i - 1];
                    this._nextFrame = this.frames[i];
                }
                return;
            }
        }
        this._curFrame = this.frames[this.frames.length - 1];
        this._nextFrame = this._curFrame;
    };
    Timeline.prototype.updateCurValue = function () {
        if (this._curFrame && this._nextFrame) {
            var p = this.getProgress(this.curTime, this._curFrame.time, this._nextFrame.time, this._curFrame.curve);
            this._curValue = this._curFrame.getValue(p, this._nextFrame.value);
        }
    };
    return Timeline;
}());



/***/ }),

/***/ "./packages/player/src/core/model/IVFData.ts":
/*!***************************************************!*\
  !*** ./packages/player/src/core/model/IVFData.ts ***!
  \***************************************************/
/*! exports provided: ExpressItemType, SystemValueType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpressItemType", function() { return ExpressItemType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemValueType", function() { return SystemValueType; });
/// actionList ////////////////////////////////
var ExpressItemType;
(function (ExpressItemType) {
    ExpressItemType[ExpressItemType["CONST"] = 0] = "CONST";
    ExpressItemType[ExpressItemType["VARIABLE"] = 1] = "VARIABLE";
    ExpressItemType[ExpressItemType["RANDOM"] = 2] = "RANDOM";
    ExpressItemType[ExpressItemType["STSTEN"] = 3] = "STSTEN";
    ExpressItemType[ExpressItemType["PROPERTY"] = 4] = "PROPERTY";
    ExpressItemType[ExpressItemType["OPERATION"] = 5] = "OPERATION";
    ExpressItemType[ExpressItemType["ARRAY_LEN"] = 6] = "ARRAY_LEN";
    ExpressItemType[ExpressItemType["ARRAY_VALUE"] = 7] = "ARRAY_VALUE";
    ExpressItemType[ExpressItemType["OBJECT_VALUE"] = 8] = "OBJECT_VALUE";
    ExpressItemType[ExpressItemType["PARAM_VALUE"] = 9] = "PARAM_VALUE";
    ExpressItemType[ExpressItemType["ARRAY_FUNCTION"] = 10] = "ARRAY_FUNCTION";
    ExpressItemType[ExpressItemType["COMPONENT"] = 11] = "COMPONENT";
})(ExpressItemType || (ExpressItemType = {}));
var SystemValueType;
(function (SystemValueType) {
    SystemValueType[SystemValueType["TIME"] = 0] = "TIME";
    SystemValueType[SystemValueType["YEAR"] = 1] = "YEAR";
    SystemValueType[SystemValueType["MONTH"] = 2] = "MONTH";
    SystemValueType[SystemValueType["DAY"] = 3] = "DAY";
    SystemValueType[SystemValueType["DATE"] = 4] = "DATE";
})(SystemValueType || (SystemValueType = {}));


/***/ }),

/***/ "./packages/player/src/core/transition/Tranistion.ts":
/*!***********************************************************!*\
  !*** ./packages/player/src/core/transition/Tranistion.ts ***!
  \***********************************************************/
/*! exports provided: Transition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return Transition; });
/* harmony import */ var _filters_CrossFadeFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters/CrossFadeFilter */ "./packages/player/src/core/transition/filters/CrossFadeFilter.ts");
/* harmony import */ var _filters_CircleFadeFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters/CircleFadeFilter */ "./packages/player/src/core/transition/filters/CircleFadeFilter.ts");
/* harmony import */ var _filters_CrossZoomFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters/CrossZoomFilter */ "./packages/player/src/core/transition/filters/CrossZoomFilter.ts");
/* harmony import */ var _filters_DoomScreenFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filters/DoomScreenFilter */ "./packages/player/src/core/transition/filters/DoomScreenFilter.ts");
/* harmony import */ var _filters_HeartWipeFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filters/HeartWipeFilter */ "./packages/player/src/core/transition/filters/HeartWipeFilter.ts");
/* harmony import */ var _filters_LinearBlurFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters/LinearBlurFilter */ "./packages/player/src/core/transition/filters/LinearBlurFilter.ts");
/* harmony import */ var _filters_PageCurlFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filters/PageCurlFilter */ "./packages/player/src/core/transition/filters/PageCurlFilter.ts");
/* harmony import */ var _filters_ToTearFilter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filters/ToTearFilter */ "./packages/player/src/core/transition/filters/ToTearFilter.ts");
/* harmony import */ var _filters_WindFilter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filters/WindFilter */ "./packages/player/src/core/transition/filters/WindFilter.ts");
/* harmony import */ var _filters_PageFlipLeftFilter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filters/PageFlipLeftFilter */ "./packages/player/src/core/transition/filters/PageFlipLeftFilter.ts");
/* harmony import */ var _filters_PageFlipRightFilter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filters/PageFlipRightFilter */ "./packages/player/src/core/transition/filters/PageFlipRightFilter.ts");
/* harmony import */ var _trans_FadeoutTran__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./trans/FadeoutTran */ "./packages/player/src/core/transition/trans/FadeoutTran.ts");












var Transition = /** @class */ (function () {
    function Transition(vfStage, prevTexture, data) {
        this.vfStage = vfStage;
        this.prevTexture = prevTexture;
        this.data = data;
    }
    Transition.prototype.run = function () {
        var transition = this.getTransition(this.data.type);
        if (transition) {
            var systemEvent_1 = this.vfStage.systemEvent;
            transition.setPreviousTexture(this.prevTexture);
            transition.progress = 0;
            transition.applyTranisition(this.vfStage.container);
            var tween = vf.gui.Tween.to(transition, { progress: 1 }, this.data.duration);
            tween.once(vf.gui.Tween.Event.complete, function () {
                transition.dispose();
                systemEvent_1.emit("status" /* STATUS */, {
                    code: "TransitionEnd" /* TransitionEnd */, level: "status" /* STATUS */, data: null,
                });
            });
            tween.start();
            systemEvent_1.emit("status" /* STATUS */, {
                code: "TransitionStart" /* TransitionStart */, level: "status" /* STATUS */, data: null,
            });
        }
    };
    Transition.prototype.getTransition = function (type) {
        var _a;
        if (this.vfStage && (this.vfStage.scaleX !== 1 || this.vfStage.scaleY !== 1 ||
            !((_a = this.vfStage.app) === null || _a === void 0 ? void 0 : _a.renderer.context).webGLVersion)) {
            return new _trans_FadeoutTran__WEBPACK_IMPORTED_MODULE_11__["FadeoutTran"]();
        }
        switch (type) {
            case "none" /* NONE */:
                return null;
            case "fadeOut" /* FADE_OUT */:
                return new _filters_CrossFadeFilter__WEBPACK_IMPORTED_MODULE_0__["CrossFadeFilter"]();
            case "circleWipe" /* CIRCLE_WIPE */:
                return new _filters_CircleFadeFilter__WEBPACK_IMPORTED_MODULE_1__["CircleFadeFilter"]();
            case "crossZoom" /* CROSS_ZOOM */:
                return new _filters_CrossZoomFilter__WEBPACK_IMPORTED_MODULE_2__["CrossZoomFilter"]();
            case "doomScreen" /* DOOM_SCREEN */:
                return new _filters_DoomScreenFilter__WEBPACK_IMPORTED_MODULE_3__["DoomScreenFilter"]();
            case "heartWipe" /* HEART_WIPE */:
                return new _filters_HeartWipeFilter__WEBPACK_IMPORTED_MODULE_4__["HeartWipeFilter"]();
            case "linearBlur" /* LINEAR_BLUR */:
                return new _filters_LinearBlurFilter__WEBPACK_IMPORTED_MODULE_5__["LinearBlurFilter"]();
            case "pageCurl" /* PAGE_CURL */:
                return new _filters_PageCurlFilter__WEBPACK_IMPORTED_MODULE_6__["PageCurlFilter"]();
            case "toTear" /* TO_TEAR */:
                return new _filters_ToTearFilter__WEBPACK_IMPORTED_MODULE_7__["ToTearFilter"]();
            case "wind" /* WIND */:
                return new _filters_WindFilter__WEBPACK_IMPORTED_MODULE_8__["WindFilter"]();
            case "pageFlipLeft" /* PAGE_FLIP_LEFT */:
                return new _filters_PageFlipLeftFilter__WEBPACK_IMPORTED_MODULE_9__["PageFlipLeftFilter"]();
            case "pageFlipRight" /* PAGE_FLIP_RIGHT */:
                return new _filters_PageFlipRightFilter__WEBPACK_IMPORTED_MODULE_10__["PageFlipRightFilter"]();
            default:
                return null;
        }
        return null;
    };
    return Transition;
}());



/***/ }),

/***/ "./packages/player/src/core/transition/filters/AbstractFilter.ts":
/*!***********************************************************************!*\
  !*** ./packages/player/src/core/transition/filters/AbstractFilter.ts ***!
  \***********************************************************************/
/*! exports provided: AbstractFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractFilter", function() { return AbstractFilter; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractFilter = /** @class */ (function (_super) {
    __extends(AbstractFilter, _super);
    function AbstractFilter(vertexSrc, fragmentSrc, uniforms) {
        return _super.call(this, vertexSrc || AbstractFilter.vertexSrc, fragmentSrc, uniforms || AbstractFilter.crossFadeUniforms) || this;
    }
    AbstractFilter.prototype.apply = function (filterManager, input, output) {
        var maskMatrix = new vf.Matrix();
        filterManager.calculateNormalizedScreenSpaceMatrix(maskMatrix);
        this.uniforms.filterMatrix = maskMatrix;
        this.uniforms.resolution = vf.settings.RESOLUTION;
        // super.apply(filterManager, input, output, false); // 这样写ipad下会报错
        filterManager.applyFilter(this, input, output, undefined || false);
    };
    AbstractFilter.prototype.setPreviousTexture = function (value) {
        this.uniforms.previousTexture = value;
    };
    Object.defineProperty(AbstractFilter.prototype, "progress", {
        get: function () {
            return this.uniforms.progress;
        },
        set: function (value) {
            value = Math.min(1, value);
            value = Math.max(0, value);
            this.uniforms.progress = value;
        },
        enumerable: true,
        configurable: true
    });
    AbstractFilter.prototype.applyTranisition = function (target) {
        this.target = target;
        this.target.filters = [this];
    };
    AbstractFilter.prototype.dispose = function () {
        if (this.target) {
            this.target.filters = [];
        }
    };
    AbstractFilter.vertexSrc = "\n            precision highp float;\n            \n            attribute vec2 aVertexPosition;\n            attribute vec2 aTextureCoord;\n            attribute vec4 aColor;\n            \n            uniform mat3 projectionMatrix;\n            uniform mat3 filterMatrix;\n            uniform vec4 inputSize;\n            uniform vec4 outputFrame;\n            uniform float resolution;\n            \n            varying vec2 vTextureCoord;\n            varying vec2 vFilterCoord;\n            \n            void main(void){\n                gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n                // filterMatrix.xy = ((vTextureCoord * inputSize.xy) + outputFrame.xy) / outputFrame.zw;\n                vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy / resolution;\n                // vFilterCoord = (((vTextureCoord * inputSize.xy) + outputFrame.xy) / outputFrame.zw) * aTextureCoord / resolution;\n                vTextureCoord = aTextureCoord ;\n            }\n        ";
    AbstractFilter.crossFadeUniforms = {
        filterMatrix: vf.Matrix.TEMP_MATRIX,
        resolution: vf.settings.RESOLUTION,
        previousTexture: null,
        progress: 0.0,
    };
    return AbstractFilter;
}(vf.Filter));



/***/ }),

/***/ "./packages/player/src/core/transition/filters/CircleFadeFilter.ts":
/*!*************************************************************************!*\
  !*** ./packages/player/src/core/transition/filters/CircleFadeFilter.ts ***!
  \*************************************************************************/
/*! exports provided: CircleFadeFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleFadeFilter", function() { return CircleFadeFilter; });
/* harmony import */ var _AbstractFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractFilter */ "./packages/player/src/core/transition/filters/AbstractFilter.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CircleFadeFilter = /** @class */ (function (_super) {
    __extends(CircleFadeFilter, _super);
    function CircleFadeFilter() {
        return _super.call(this, '', CircleFadeFilter.fragmentSrc) || this;
    }
    CircleFadeFilter.fragmentSrc = "\n            precision mediump float;\n            uniform sampler2D uSampler;\n            uniform sampler2D previousTexture;\n            uniform float progress;\n\n            uniform highp vec4 inputSize;\n            uniform highp vec4 outputFrame;\n\n            varying vec2 vFilterCoord;\n            varying vec2 vTextureCoord;\n\n            void main()\n            {\n                float m = outputFrame.z / 2000.0;\n                float t = inputSize.y / inputSize.x;\n                vec2 circle = vFilterCoord - 0.5;\n                circle.y = circle.y * t;\n                float d = length(circle);\n                float p2 = progress * progress;\n                if(d > p2) {\n                    gl_FragColor = texture2D(previousTexture, vFilterCoord);\n                } else {\n                    gl_FragColor = texture2D(uSampler, vTextureCoord);\n                }\n                gl_FragColor = vec4(m, 0.0, 0.0, 1.0);\n            }\n        ";
    return CircleFadeFilter;
}(_AbstractFilter__WEBPACK_IMPORTED_MODULE_0__["AbstractFilter"]));



/***/ }),

/***/ "./packages/player/src/core/transition/filters/CrossFadeFilter.ts":
/*!************************************************************************!*\
  !*** ./packages/player/src/core/transition/filters/CrossFadeFilter.ts ***!
  \************************************************************************/
/*! exports provided: CrossFadeFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossFadeFilter", function() { return CrossFadeFilter; });
/* harmony import */ var _AbstractFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractFilter */ "./packages/player/src/core/transition/filters/AbstractFilter.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CrossFadeFilter = /** @class */ (function (_super) {
    __extends(CrossFadeFilter, _super);
    function CrossFadeFilter() {
        return _super.call(this, '', CrossFadeFilter.fragmentSrc) || this;
    }
    CrossFadeFilter.fragmentSrc = "\n            precision mediump float;\n            uniform sampler2D uSampler;\n            uniform sampler2D previousTexture;\n            uniform float progress;\n            varying vec2 vFilterCoord;\n            varying vec2 vTextureCoord;\n            void main()\n            {\n                vec4 col = texture2D(previousTexture, vFilterCoord);\n                vec4 col2 = texture2D(uSampler, vTextureCoord);\n                gl_FragColor = vec4(mix(col, col2, progress));\n            }\n        ";
    return CrossFadeFilter;
}(_AbstractFilter__WEBPACK_IMPORTED_MODULE_0__["AbstractFilter"]));



/***/ }),

/***/ "./packages/player/src/core/transition/filters/CrossZoomFilter.ts":
/*!************************************************************************!*\
  !*** ./packages/player/src/core/transition/filters/CrossZoomFilter.ts ***!
  \************************************************************************/
/*! exports provided: CrossZoomFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrossZoomFilter", function() { return CrossZoomFilter; });
/* harmony import */ var _AbstractFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractFilter */ "./packages/player/src/core/transition/filters/AbstractFilter.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CrossZoomFilter = /** @class */ (function (_super) {
    __extends(CrossZoomFilter, _super);
    function CrossZoomFilter() {
        return _super.call(this, _AbstractFilter__WEBPACK_IMPORTED_MODULE_0__["AbstractFilter"].vertexSrc, CrossZoomFilter.fragmentSrc, CrossZoomFilter.linearBlurUniforms) || this;
    }
    CrossZoomFilter.linearBlurUniforms = {
        filterMatrix: vf.Matrix.TEMP_MATRIX,
        resolution: vf.settings.RESOLUTION,
        previousTexture: null,
        progress: 0.0,
        strength: 0.4,
    };
    CrossZoomFilter.fragmentSrc = "\n            #ifdef GL_ES\n            precision highp float;\n            #endif\n            uniform sampler2D uSampler;\n            uniform sampler2D previousTexture;\n            uniform float progress;\n            uniform float resolution;\n            uniform float strength;\n            \n            varying vec2 vTextureCoord;\n            varying vec2 vFilterCoord;\n            \n            const float PI = 3.141592653589793;\n            \n            float Linear_ease(in float begin, in float change, in float duration, in float time) {\n                return change * time / duration + begin;\n            }\n            \n            float Exponential_easeInOut(in float begin, in float change, in float duration, in float time) {\n                if (time == 0.0)\n                    return begin;\n                else if (time == duration)\n                    return begin + change;\n                time = time / (duration / 2.0);\n                if (time < 1.0)\n                    return change / 2.0 * pow(2.0, 10.0 * (time - 1.0)) + begin;\n                return change / 2.0 * (-pow(2.0, -10.0 * (time - 1.0)) + 2.0) + begin;\n            }\n            \n            float Sinusoidal_easeInOut(in float begin, in float change, in float duration, in float time) {\n                return -change / 2.0 * (cos(PI * time / duration) - 1.0) + begin;\n            }\n            \n            float random(in vec3 scale, in float seed) {\n                return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n            }\n            \n            vec3 crossFade(in vec2 uv1, in vec2 uv2, in float dissolve) {\n                return mix(texture2D(previousTexture, uv1).rgb, texture2D(uSampler, uv2).rgb, dissolve);\n            }\n            \n            void main() {\n            \n                vec2 center = vec2(Linear_ease(0.25, 0.5, 1.0, progress), 0.5);\n                float dissolve = Exponential_easeInOut(0.0, 1.0, 1.0, progress);\n            \n                float strength = Sinusoidal_easeInOut(0.0, strength, 0.5, progress);\n                \n                vec3 color = vec3(0.0);\n                float total = 0.0;\n                vec2 toCenter = center - vTextureCoord;\n        \n                float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n            \n                for (float t = 0.0; t <= 40.0; t++) {\n                    float percent = (t + offset) / 40.0;\n                    float weight = 4.0 * (percent - percent * percent);\n                    vec2 p = toCenter * percent * strength;\n                    color += crossFade(vFilterCoord + p, vTextureCoord + p, dissolve) * weight;\n                    total += weight;\n                }\n                gl_FragColor = vec4(color / total, 1.0);\n            }\n        ";
    return CrossZoomFilter;
}(_AbstractFilter__WEBPACK_IMPORTED_MODULE_0__["AbstractFilter"]));



/***/ }),

/***/ "./packages/player/src/core/transition/filters/DoomScreenFilter.ts":
/*!*************************************************************************!*\
  !*** ./packages/player/src/core/transition/filters/DoomScreenFilter.ts ***!
  \*************************************************************************/
/*! exports provided: DoomScreenFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoomScreenFilter", function() { return DoomScreenFilter; });
/* harmony import */ var _AbstractFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractFilter */ "./packages/player/src/core/transition/filters/AbstractFilter.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DoomScreenFilter = /** @class */ (function (_super) {
    __extends(DoomScreenFilter, _super);
    function DoomScreenFilter() {
        var _this = _super.call(this, _AbstractFilter__WEBPACK_IMPORTED_MODULE_0__["AbstractFilter"].vertexSrc, DoomScreenFilter.fragmentSrc, DoomScreenFilter.linearblurUniforms) || this;
        _this.padding = 0;
        return _this;
    }
    /**
     * @param {vf.FilterManager} filterManager
     * @param {vf.RenderTarget} input
     * @param {vf.RenderTarget} output
     * @override
     */
    DoomScreenFilter.prototype.apply = function (filterManager, input, output) {
        var maskMatrix = new vf.Matrix();
        // filterManager.calculateNormalizedScreenSpaceMatrix(maskMatrix);
        this.uniforms.filterMatrix = maskMatrix;
        this.uniforms.resolution = vf.settings.RESOLUTION;
        _super.prototype.apply.call(this, filterManager, input, output, vf.CLEAR_MODES.NO);
    };
    /**
     * 设置前置纹理
     * @param value
     */
    DoomScreenFilter.prototype.setPreviousTexture = function (value) {
        this.uniforms.previousTexture = value;
    };
    /**
     * 设置变化进度
     * @param {number} value
     */
    DoomScreenFilter.prototype.setProgress = function (value) {
        value = Math.min(1, value);
        value = Math.max(0, value);
        this.uniforms.progress = value;
    };
    Object.defineProperty(DoomScreenFilter.prototype, "progress", {
        get: function () {
            return this.uniforms.progress;
        },
        set: function (value) {
            value = Math.min(1, value);
            value = Math.max(0, value);
            this.uniforms.progress = value;
        },
        enumerable: true,
        configurable: true
    });
    DoomScreenFilter.prototype.applyTranisition = function (target) {
        this.target = target;
        this.target.filters = [this];
    };
    DoomScreenFilter.prototype.dispose = function () {
        if (this.target) {
            this.target.filters = [];
        }
    };
    DoomScreenFilter.linearblurUniforms = {
        resolution: vf.settings.RESOLUTION,
        previousTexture: null,
        progress: 0.0,
        barWidth: 10,
        amplitude: 2.0,
        noise: 0.1,
        frequency: 1.0,
    };
    DoomScreenFilter.fragmentSrc = "\n            #ifdef GL_ES\n            precision highp float;\n            #endif\n            \n            uniform sampler2D uSampler;\n            uniform sampler2D previousTexture;\n            uniform float progress;\n            uniform float resolution;\n            \n            uniform int barWidth;\n            uniform float amplitude;\n            uniform float noise;\n            uniform float frequency;\n            \n            varying vec2 vTextureCoord;\n            varying vec2 vFilterCoord;\n            \n            float rand(int num) {\n                return fract(mod(float(num) * 67123.313, 12.0) * sin(float(num) * 10.3) * cos(float(num)));\n            }\n            \n            float wave(int num) {\n                float fn = float(num) * frequency * 0.1  * float(barWidth);\n                return cos(fn * 0.5) * cos(fn * 0.13) * sin((fn+10.0) * 0.3) / 2.0 + 0.5;\n            }\n            \n            float pos(int num) {\n                return noise == 0.0 ? wave(num) : mix(wave(num), rand(num), noise);\n            }\n            \n            void main() {\n                int bar = int(vFilterCoord.x) / barWidth;\n                float scale = 1.0 + pos(bar) * amplitude;\n                float phase = progress * scale;\n                float posY = vFilterCoord.y / resolution;\n                vec2 p;\n                vec4 c;\n                if (phase + posY < 1.0) {\n                    p = vec2(vFilterCoord.x, vFilterCoord.y + mix(0.0, resolution, phase)) / resolution;\n                    c = texture2D(previousTexture, p);\n                } else {\n                    p = vTextureCoord.xy / resolution;\n                    c = texture2D(uSampler, p);\n                }\n                gl_FragColor = c;\n            }\n        ";
    return DoomScreenFilter;
}(vf.Filter));



/***/ }),

/***/ "./packages/player/src/core/transition/filters/HeartWipeFilter.ts":
/*!************************************************************************!*\
  !*** ./packages/player/src/core/transition/filters/HeartWipeFilter.ts ***!
  \************************************************************************/
/*! exports provided: HeartWipeFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeartWipeFilter", function() { return HeartWipeFilter; });
/* harmony import */ var _AbstractFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractFilter */ "./packages/player/src/core/transition/filters/AbstractFilter.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var HeartWipeFilter = /** @class */ (function (_super) {
    __extends(HeartWipeFilter, _super);
    function HeartWipeFilter() {
        return _super.call(this, _AbstractFilter__WEBPACK_IMPORTED_MODULE_0__["AbstractFilter"].vertexSrc, HeartWipeFilter.fragmentSrc, HeartWipeFilter.linearBlurUniforms) || this;
    }
    HeartWipeFilter.linearBlurUniforms = {
        filterMatrix: vf.Matrix.TEMP_MATRIX,
        resolution: vf.settings.RESOLUTION,
        previousTexture: null,
        progress: 0.0,
    };
    HeartWipeFilter.fragmentSrc = "\n            #ifdef GL_ES\n            precision highp float;\n            #endif\n            \n            uniform sampler2D uSampler;\n            uniform sampler2D previousTexture;\n            uniform float progress;\n            uniform float resolution;\n            \n            varying vec2 vTextureCoord;\n            varying vec2 vFilterCoord;\n            \n            bool inHeart (vec2 p, vec2 center, float size) {\n                if (size == 0.0) return false;\n                vec2 o = (p-center)/(1.6*size);\n                return pow(o.x*o.x+o.y*o.y-0.3, 3.0) < o.x*o.x*pow(o.y, 3.0);\n            }\n            \n            void main() {\n                vec2 p1 = vFilterCoord.xy / resolution;\n                vec2 p2 = vTextureCoord.xy / resolution;\n                float m = inHeart(p1, vec2(0.5, 0.4), progress) ? 1.0 : 0.0;\n                gl_FragColor = mix(texture2D(previousTexture, p1), texture2D(uSampler, p2), m);\n            }\n        ";
    return HeartWipeFilter;
}(_AbstractFilter__WEBPACK_IMPORTED_MODULE_0__["AbstractFilter"]));



/***/ }),

/***/ "./packages/player/src/core/transition/filters/LinearBlurFilter.ts":
/*!*************************************************************************!*\
  !*** ./packages/player/src/core/transition/filters/LinearBlurFilter.ts ***!
  \*************************************************************************/
/*! exports provided: LinearBlurFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinearBlurFilter", function() { return LinearBlurFilter; });
/* harmony import */ var _AbstractFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractFilter */ "./packages/player/src/core/transition/filters/AbstractFilter.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LinearBlurFilter = /** @class */ (function (_super) {
    __extends(LinearBlurFilter, _super);
    function LinearBlurFilter() {
        return _super.call(this, _AbstractFilter__WEBPACK_IMPORTED_MODULE_0__["AbstractFilter"].vertexSrc, LinearBlurFilter.fragmentSrc, LinearBlurFilter.linearBlurUniforms) || this;
    }
    LinearBlurFilter.linearBlurUniforms = {
        filterMatrix: vf.Matrix.TEMP_MATRIX,
        resolution: vf.settings.RESOLUTION,
        previousTexture: null,
        progress: 0.0,
        intensity: 0.1,
    };
    LinearBlurFilter.fragmentSrc = "\n            #ifdef GL_ES\n            precision highp float;\n            #endif\n            \n            uniform sampler2D uSampler;\n            uniform sampler2D previousTexture;\n            uniform float progress;\n            uniform float resolution;\n            uniform float intensity;\n            \n            varying vec2 vTextureCoord;\n            varying vec2 vFilterCoord;\n            \n            const int PASSES = 8;\n            \n            void main() {\n                vec2 p1 = vFilterCoord.xy;\n                vec2 p2 = vTextureCoord.xy;\n                vec4 c1 = vec4(0.0), c2 = vec4(0.0);\n                float disp = intensity*(0.5-distance(0.5, progress));\n                for (int xi=0; xi<PASSES; ++xi) {\n                        float x = float(xi) / float(PASSES) - 0.5;\n                    for (int yi=0; yi<PASSES; ++yi) {\n                        float y = float(yi) / float(PASSES) - 0.5;\n                        vec2 v = vec2(x,y);\n                        float d = disp;\n                        c1 += texture2D(previousTexture, p1 + d*v);\n                        c2 += texture2D(uSampler, p2 + d*v);\n                    }\n                }\n                c1 /= float(PASSES*PASSES);\n                c2 /= float(PASSES*PASSES);\n                gl_FragColor = mix(c1, c2, progress);\n            }\n        ";
    return LinearBlurFilter;
}(_AbstractFilter__WEBPACK_IMPORTED_MODULE_0__["AbstractFilter"]));



/***/ }),

/***/ "./packages/player/src/core/transition/filters/PageCurlFilter.ts":
/*!***********************************************************************!*\
  !*** ./packages/player/src/core/transition/filters/PageCurlFilter.ts ***!
  \***********************************************************************/
/*! exports provided: PageCurlFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCurlFilter", function() { return PageCurlFilter; });
/* harmony import */ var _AbstractFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractFilter */ "./packages/player/src/core/transition/filters/AbstractFilter.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PageCurlFilter = /** @class */ (function (_super) {
    __extends(PageCurlFilter, _super);
    function PageCurlFilter() {
        return _super.call(this, _AbstractFilter__WEBPACK_IMPORTED_MODULE_0__["AbstractFilter"].vertexSrc, PageCurlFilter.fragmentSrc, PageCurlFilter.linearBlurUniforms) || this;
    }
    PageCurlFilter.linearBlurUniforms = {
        filterMatrix: vf.Matrix.TEMP_MATRIX,
        resolution: vf.settings.RESOLUTION,
        previousTexture: null,
        progress: 0.0,
    };
    PageCurlFilter.fragmentSrc = "\n            #ifdef GL_ES\n            precision highp float;\n            #endif\n            \n            uniform sampler2D uSampler;\n            uniform sampler2D previousTexture;\n            uniform float progress;\n            uniform float resolution;\n            \n            varying vec2 vTextureCoord;\n            varying vec2 vFilterCoord;\n            \n            const float MIN_AMOUNT = -0.16;\n            const float MAX_AMOUNT = 1.3;\n            float amount = progress * (MAX_AMOUNT - MIN_AMOUNT) + MIN_AMOUNT;\n            \n            const float PI = 3.141592653589793;\n            \n            const float scale = 512.0;\n            const float sharpness = 3.0;\n            \n            float cylinderCenter = amount;\n            float cylinderAngle = 2.0 * PI * amount;\n            \n            const float cylinderRadius = 1.0 / PI / 2.0;\n            \n            vec3 hitPoint(float hitAngle, float yc, vec3 point, mat3 rrotation)\n            {\n                float hitPoint = hitAngle / (2.0 * PI);\n                point.y = hitPoint;\n                return rrotation * point;\n            }\n            \n            vec4 antiAlias(vec4 color1, vec4 color2, float distanc)\n            {\n                distanc *= scale;\n                if (distanc < 0.0) return color2;\n                if (distanc > 2.0) return color1;\n                float dd = pow(1.0 - distanc / 2.0, sharpness);\n                return ((color2 - color1) * dd) + color1;\n            }\n            \n            float distanceToEdge(vec3 point)\n            {\n                float dx = abs(point.x > 0.5 ? 1.0 - point.x : point.x);\n                float dy = abs(point.y > 0.5 ? 1.0 - point.y : point.y);\n                if (point.x < 0.0) dx = -point.x;\n                if (point.x > 1.0) dx = point.x - 1.0;\n                if (point.y < 0.0) dy = -point.y;\n                if (point.y > 1.0) dy = point.y - 1.0;\n                if ((point.x < 0.0 || point.x > 1.0) && (point.y < 0.0 || point.y > 1.0)) {\n                    return sqrt(dx * dx + dy * dy);\n                }\n                return min(dx, dy);\n            }\n            \n            vec4 seeThrough(float yc, vec2 p, mat3 rotation, mat3 rrotation)\n            {\n                float hitAngle = PI - (acos(yc / cylinderRadius) - cylinderAngle);\n                vec3 point = hitPoint(hitAngle, yc, rotation * vec3(p, 1.0), rrotation);\n                if (yc <= 0.0 && (point.x < 0.0 || point.y < 0.0 || point.x > 1.0 || point.y > 1.0))\n                {\n                    return texture2D(uSampler, vTextureCoord);\n                }\n            \n                if (yc > 0.0) return texture2D(previousTexture, p);\n            \n                vec4 color = texture2D(previousTexture, point.xy);\n                vec4 tcolor = vec4(0.0);\n            \n                return antiAlias(color, tcolor, distanceToEdge(point));\n            }\n            \n            vec4 seeThroughWithShadow(float yc, vec2 p, vec3 point, mat3 rotation, mat3 rrotation)\n            {\n                float shadow = distanceToEdge(point) * 30.0;\n                shadow = (1.0 - shadow) / 3.0;\n            \n                if (shadow < 0.0) shadow = 0.0; else shadow *= amount;\n            \n                vec4 shadowColor = seeThrough(yc, p, rotation, rrotation);\n                shadowColor.r -= shadow;\n                shadowColor.g -= shadow;\n                shadowColor.b -= shadow;\n            \n                return shadowColor;\n            }\n            \n            vec4 backside(float yc, vec3 point)\n            {\n                vec4 color = texture2D(previousTexture, point.xy);\n                float gray = (color.r + color.b + color.g) / 15.0;\n                gray += (8.0 / 10.0) * (pow(1.0 - abs(yc / cylinderRadius), 2.0 / 10.0) / 2.0 + (5.0 / 10.0));\n                color.rgb = vec3(gray);\n                return color;\n            }\n            \n            vec4 behindSurface(float yc, vec3 point, mat3 rrotation)\n            {\n                float shado = (1.0 - ((-cylinderRadius - yc) / amount * 7.0)) / 6.0;\n                shado *= 1.0 - abs(point.x - 0.5);\n            \n                yc = (-cylinderRadius - cylinderRadius - yc);\n            \n                float hitAngle = (acos(yc / cylinderRadius) + cylinderAngle) - PI;\n                point = hitPoint(hitAngle, yc, point, rrotation);\n            \n                if (yc < 0.0 && point.x >= 0.0 && point.y >= 0.0 && \n                    point.x <= 1.0 && point.y <= 1.0 && (hitAngle < PI || amount > 0.5))\n                {\n                    shado = 1.0 - (sqrt(pow(point.x - 0.5, 2.0) + pow(point.y - 0.5, 2.0)) / (71.0 / 100.0));\n                    shado *= pow(-yc / cylinderRadius, 3.0);\n                    shado *= 0.5;\n                }\n                else\n                {\n                    shado = 0.0;\n                }\n                return vec4(texture2D(uSampler, vTextureCoord).rgb - shado, 1.0);\n            }\n            \n            void main()\n            {\n                const float angle = 30.0 * PI / 180.0;\n                float c = cos(-angle);\n                float s = sin(-angle);\n            \n                mat3 rotation = mat3( c, s, 0, -s, c, 0, 0.12, 0.258, 1);\n                c = cos(angle);\n                s = sin(angle);\n            \n                mat3 rrotation = mat3(\tc, s, 0, -s, c, 0, 0.15, -0.5, 1);\n            \n                vec3 point = rotation * vec3(vFilterCoord, 1.0);\n            \n                float yc = point.y - cylinderCenter;\n            \n                if (yc < -cylinderRadius)\n                {\n                    gl_FragColor = behindSurface(yc, point, rrotation);\n                    return;\n                }\n            \n                if (yc > cylinderRadius)\n                {\n                    gl_FragColor = texture2D(previousTexture, vFilterCoord);\n                    return;\n                }\n            \n                float hitAngle = (acos(yc / cylinderRadius) + cylinderAngle) - PI;\n            \n                float hitAngleMod = mod(hitAngle, 2.0 * PI);\n                if ((hitAngleMod > PI && amount < 0.5) || (hitAngleMod > PI/2.0 && amount < 0.0))\n                {\n                    gl_FragColor = seeThrough(yc, vFilterCoord, rotation, rrotation);\n                    return;\n                }\n            \n                point = hitPoint(hitAngle, yc, point, rrotation);\n            \n                if (point.x < 0.0 || point.y < 0.0 || point.x > 1.0 || point.y > 1.0)\n                {\n                    gl_FragColor = seeThroughWithShadow(yc, vFilterCoord, point, rotation, rrotation);\n                    return;\n                }\n            \n                vec4 color = backside(yc, point);\n            \n                vec4 otherColor;\n                if (yc < 0.0)\n                {\n                    float shado = 1.0 - (sqrt(pow(point.x - 0.5, 2.0) + pow(point.y - 0.5, 2.0)) / 0.71);\n                    shado *= pow(-yc / cylinderRadius, 3.0);\n                    shado *= 0.5;\n                    otherColor = vec4(0.0, 0.0, 0.0, shado);\n                }\n                else\n                {\n                    otherColor = texture2D(previousTexture, vFilterCoord);\n                }\n            \n                color = antiAlias(color, otherColor, cylinderRadius - abs(yc));\n            \n                vec4 cl = seeThroughWithShadow(yc, vFilterCoord, point, rotation, rrotation);\n                float dist = distanceToEdge(point);\n            \n                gl_FragColor = antiAlias(color, cl, dist);\n            }\n        ";
    return PageCurlFilter;
}(_AbstractFilter__WEBPACK_IMPORTED_MODULE_0__["AbstractFilter"]));



/***/ }),

/***/ "./packages/player/src/core/transition/filters/PageFlipLeftFilter.ts":
/*!***************************************************************************!*\
  !*** ./packages/player/src/core/transition/filters/PageFlipLeftFilter.ts ***!
  \***************************************************************************/
/*! exports provided: PageFlipLeftFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFlipLeftFilter", function() { return PageFlipLeftFilter; });
/* harmony import */ var _AbstractFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractFilter */ "./packages/player/src/core/transition/filters/AbstractFilter.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PageFlipLeftFilter = /** @class */ (function (_super) {
    __extends(PageFlipLeftFilter, _super);
    function PageFlipLeftFilter() {
        return _super.call(this, _AbstractFilter__WEBPACK_IMPORTED_MODULE_0__["AbstractFilter"].vertexSrc, PageFlipLeftFilter.fragmentSrc, PageFlipLeftFilter.uniforms) || this;
    }
    PageFlipLeftFilter.uniforms = {
        filterMatrix: vf.Matrix.TEMP_MATRIX,
        resolution: vf.settings.RESOLUTION,
        previousTexture: null,
        progress: 0.0,
    };
    PageFlipLeftFilter.fragmentSrc = "\n            #ifdef GL_ES\n            precision highp float;\n            #endif\n            \n            uniform sampler2D uSampler;\n            uniform sampler2D previousTexture;\n            uniform float progress;\n            uniform float resolution;\n            \n            varying vec2 vTextureCoord;\n            varying vec2 vFilterCoord;\n            \n            const float PI = 3.141592653589793;\n            const float MIN_ANGLE = PI / 4.0;\n            const float MAX_ANGLE = PI / 2.0;\n            const float MIN_X = 0.5;\n            const float MAX_X = 0.95;\n            const float sharpness = 3.0;\n            const float scale = 512.0;\n            // float easeProgress = ( pow((progress - 1.0), 3.0) + 1.0 );\n            // float easeProgress = (progress == 1.0) ? 1.0 : -pow(2.0, -10.0 * progress) + 1.0;\n            float p = progress > 0.99 ? 0.99 : progress;\n            float easeProgress =  sqrt(1.0 - pow((p - 1.0), 2.0));\n            float curX = (1.0 - easeProgress) * (MAX_X - MIN_X) + MIN_X;\n            float angle = (easeProgress) * (MAX_ANGLE - MIN_ANGLE) + MIN_ANGLE;\n                     \n            float distanceToLine(vec2 point)\n            {\n                vec2 p0 = vec2(1.0-curX, 1.0);\n                vec2 p1 = vec2(0.0, -(1.0 - curX) * tan(angle) + 1.0);\n                float a = p1.y - p0.y;\n                float b = p0.x - p1.x;\n                float c = p1.x * p0.y - p0.x * p1.y;\n                return abs(a * point.x + b * point.y + c) / sqrt(a * a + b * b);\n            }\n\n            vec4 antiAlias(vec4 color1, vec4 color2, float distanc)\n            {\n                distanc *= scale;\n                if (distanc < 0.0) return color2;\n                if (distanc > 2.0) return color1;\n                float dd = pow(1.0 - distanc / 2.0, sharpness);\n                return ((color2 - color1) * dd) + color1;\n            }\n\n            vec2 getMirro(vec2 point ) \n            {\n                vec2 p0 = vec2(1.0-curX, 1.0);\n                vec2 p1 = vec2(0.0, -(1.0 - curX) * tan(angle) + 1.0);\n                float a = p1.y - p0.y;\n                float b = p0.x - p1.x;\n                float c = p1.x * p0.y - p0.x * p1.y;\n                float k = -2.0 * (a * point.x + b * point.y + c) / (a * a + b * b);\n                vec2 p2 = vec2(point.x + k * a, point.y + k * b);\n                return p2;\n            }\n\n            vec4 curPageBack(vec2 point)\n            {\n                vec2 mirror = getMirro(point);\n                vec4 color = texture2D(uSampler, vec2(1.0 - mirror.x, mirror.y));\n                return color;\n            }\n\n            vec4 curPage(vec2 point)\n            {\n                vec4 color = texture2D(previousTexture, point.xy);\n                return color;\n            }\n            vec4 nextPage(vec2 point)\n            {\n                vec4 color = texture2D(uSampler, point);\n                float d = distanceToLine(point);\n                vec4 shadow = vec4(1.0, 0.0, 0.0, d);\n                if(d < 0.02) {\n                    float c = (0.1 - (0.02 - d)) * (10.0 + progress * 1.5);\n                    return vec4(color.r * c, color.g * c, color.b * c, 1.0);\n                };\n                return color;\n            }\n            bool isNextPage(vec2 point) \n            {\n                vec2 p0 = vec2(1.0-curX, 1.0);\n                vec2 p1 = vec2(0.0, -(1.0 - curX) * tan(angle) + 1.0);\n                vec2 p2 = vec2(point.x - p0.x, point.y - p0.y);\n                vec2 p3 = vec2(point.x - p1.x, point.y - p1.y);\n                return p2.x * p3.y - p3.x * p2.y < 0.0;\n            }\n            bool isCurPageBack(vec2 point)\n            {\n                vec2 p0 = vec2(1.0-curX, 1.0);\n                vec2 p1 = vec2(0.0, -(1.0 - curX) * tan(angle) + 1.0);\n                float a = p1.y - p0.y;\n                float b = p0.x - p1.x;\n                float c = p1.x * p0.y - p0.x * p1.y;\n                float k = -2.0 * (a * point.x + b * point.y + c) / (a * a + b * b);\n                vec2 p2 = vec2(point.x + k * a, point.y + k * b);\n                return p2.x > 0.0 && p2.x < 1.0 && p2.y > 0.0 && p2.y < 1.0;\n            }\n            \n            void main()\n            {\n            \n                vec4 color = vec4(1.0, 0.0, 0.0, 1.0);\n                if (isNextPage(vTextureCoord)) {\n                    color = nextPage(vTextureCoord);\n                } else if (isCurPageBack(vTextureCoord)) {\n                    color = curPageBack(vTextureCoord);\n                } else {\n                    color = curPage(vTextureCoord);\n                }\n                gl_FragColor = color;\n            }\n        ";
    return PageFlipLeftFilter;
}(_AbstractFilter__WEBPACK_IMPORTED_MODULE_0__["AbstractFilter"]));



/***/ }),

/***/ "./packages/player/src/core/transition/filters/PageFlipRightFilter.ts":
/*!****************************************************************************!*\
  !*** ./packages/player/src/core/transition/filters/PageFlipRightFilter.ts ***!
  \****************************************************************************/
/*! exports provided: PageFlipRightFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFlipRightFilter", function() { return PageFlipRightFilter; });
/* harmony import */ var _AbstractFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractFilter */ "./packages/player/src/core/transition/filters/AbstractFilter.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PageFlipRightFilter = /** @class */ (function (_super) {
    __extends(PageFlipRightFilter, _super);
    function PageFlipRightFilter() {
        return _super.call(this, _AbstractFilter__WEBPACK_IMPORTED_MODULE_0__["AbstractFilter"].vertexSrc, PageFlipRightFilter.fragmentSrc, PageFlipRightFilter.uniforms) || this;
    }
    PageFlipRightFilter.uniforms = {
        filterMatrix: vf.Matrix.TEMP_MATRIX,
        resolution: vf.settings.RESOLUTION,
        previousTexture: null,
        progress: 0.0,
    };
    PageFlipRightFilter.fragmentSrc = "\n            #ifdef GL_ES\n            precision highp float;\n            #endif\n            \n            uniform sampler2D uSampler;\n            uniform sampler2D previousTexture;\n            uniform float progress;\n            uniform float resolution;\n            \n            varying vec2 vTextureCoord;\n            varying vec2 vFilterCoord;\n            \n            const float PI = 3.141592653589793;\n            const float MIN_ANGLE = PI / 4.0;\n            const float MAX_ANGLE = PI / 2.0;\n            const float MIN_X = 0.5;\n            const float MAX_X = 0.95;\n            const float sharpness = 3.0;\n            const float scale = 512.0;\n\n            // float easeProgress = ( pow((progress - 1.0), 3.0) + 1.0 );\n            // float easeProgress = (progress == 1.0) ? 1.0 : -pow(2.0, -10.0 * progress) + 1.0;\n            float p = progress > 0.99 ? 0.99 : progress;\n            float easeProgress =  sqrt(1.0 - pow((p - 1.0), 2.0));\n            float curX = (1.0 - easeProgress) * (MAX_X - MIN_X) + MIN_X;\n            float angle = (easeProgress) * (MAX_ANGLE - MIN_ANGLE) + MIN_ANGLE;\n                     \n            float distanceToLine(vec2 point)\n            {\n                vec2 p0 = vec2(curX, 1.0);\n                vec2 p1 = vec2(1.0, -(1.0 - curX) * tan(angle) + 1.0);\n                float a = p1.y - p0.y;\n                float b = p0.x - p1.x;\n                float c = p1.x * p0.y - p0.x * p1.y;\n                return abs(a * point.x + b * point.y + c) / sqrt(a * a + b * b);\n            }\n\n            vec4 antiAlias(vec4 color1, vec4 color2, float distanc)\n            {\n                distanc *= scale;\n                if (distanc < 0.0) return color2;\n                if (distanc > 2.0) return color1;\n                float dd = pow(1.0 - distanc / 2.0, sharpness);\n                return ((color2 - color1) * dd) + color1;\n            }\n\n            vec2 getMirro(vec2 point ) \n            {\n                vec2 p0 = vec2(curX, 1.0);\n                vec2 p1 = vec2(1.0, -(1.0 - curX) * tan(angle) + 1.0);\n                float a = p1.y - p0.y;\n                float b = p0.x - p1.x;\n                float c = p1.x * p0.y - p0.x * p1.y;\n                float k = -2.0 * (a * point.x + b * point.y + c) / (a * a + b * b);\n                vec2 p2 = vec2(point.x + k * a, point.y + k * b);\n                return p2;\n            }\n\n            vec4 curPageBack(vec2 point)\n            {\n                vec2 mirror = getMirro(point);\n                vec4 color = texture2D(uSampler, vec2(1.0 - mirror.x, mirror.y));\n                return color;\n            }\n\n            vec4 curPage(vec2 point)\n            {\n                vec4 color = texture2D(previousTexture, point);\n                float d = distanceToLine(point);\n                vec4 shadow = vec4(1.0, 0.0, 0.0, 1.0);\n                // return shadow;\n                // if(d < 0.2) {\n                //     float c = (0.1 - (0.02 - d)) * (10.0 + progress * 1.5);\n                //     return vec4(color.r * c, color.g * c, color.b * c, 1.0);\n                // };\n                return color;\n            }\n            vec4 nextPage(vec2 point)\n            {\n                vec4 color = texture2D(uSampler, point);\n                float d = distanceToLine(point);\n                vec4 shadow = vec4(1.0, 0.0, 0.0, d);\n                if(d < 0.02) {\n                    float c = (0.1 - (0.02 - d)) * (10.0 + progress * 1.5);\n                    return vec4(color.r * c, color.g * c, color.b * c, 1.0);\n                };\n                return color;\n            }\n            bool isNextPage(vec2 point) \n            {\n                vec2 p0 = vec2(curX, 1.0);\n                vec2 p1 = vec2(1.0, -(1.0 - curX) * tan(angle) + 1.0);\n                vec2 p2 = vec2(point.x - p0.x, point.y - p0.y);\n                vec2 p3 = vec2(point.x - p1.x, point.y - p1.y);\n                return p2.x * p3.y - p3.x * p2.y > 0.0;\n            }\n            bool isCurPageBack(vec2 point)\n            {\n                vec2 p0 = vec2(curX, 1.0);\n                vec2 p1 = vec2(1.0, -(1.0 - curX) * tan(angle) + 1.0);\n                float a = p1.y - p0.y;\n                float b = p0.x - p1.x;\n                float c = p1.x * p0.y - p0.x * p1.y;\n                float k = -2.0 * (a * point.x + b * point.y + c) / (a * a + b * b);\n                vec2 p2 = vec2(point.x + k * a, point.y + k * b);\n                return p2.x > 0.0 && p2.x < 1.0 && p2.y > 0.0 && p2.y < 1.0;\n            }\n            \n            \n            void main()\n            {\n            \n                vec4 color = vec4(1.0, 0.0, 0.0, 1.0);\n                if (isNextPage(vTextureCoord)) {\n                    color = nextPage(vTextureCoord);\n                } else if (isCurPageBack(vTextureCoord)) {\n                    color = curPageBack(vTextureCoord);\n                } else {\n                    color = curPage(vTextureCoord);\n                }\n                gl_FragColor = color;\n            }\n        ";
    return PageFlipRightFilter;
}(_AbstractFilter__WEBPACK_IMPORTED_MODULE_0__["AbstractFilter"]));



/***/ }),

/***/ "./packages/player/src/core/transition/filters/ToTearFilter.ts":
/*!*********************************************************************!*\
  !*** ./packages/player/src/core/transition/filters/ToTearFilter.ts ***!
  \*********************************************************************/
/*! exports provided: ToTearFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToTearFilter", function() { return ToTearFilter; });
/* harmony import */ var _AbstractFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractFilter */ "./packages/player/src/core/transition/filters/AbstractFilter.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ToTearFilter = /** @class */ (function (_super) {
    __extends(ToTearFilter, _super);
    function ToTearFilter() {
        var _this = _super.call(this, '', ToTearFilter.fragmentSrc) || this;
        _this.padding = 0;
        return _this;
    }
    ToTearFilter.fragmentSrc = "\n            precision highp float;\n            varying vec2 vTextureCoord;\n            varying vec2 vFilterCoord;\n            uniform sampler2D uSampler;\n            uniform sampler2D previousTexture;\n            uniform float progress;\n            \n            void main() {\n                vec4 displacement1 = texture2D( previousTexture, vTextureCoord);\n                vec4 displacement2 = texture2D( uSampler, vFilterCoord);\n                vec4 displacement = mix(displacement1, displacement2, vec4(progress));\n                vec2 mixTexture = mix(displacement.xy, vTextureCoord.xy, vec2(progress));\n                vec2 testPos1 = mixTexture + (1.0 - progress) * displacement.xy * 0.5;\n                vec2 testPos = mix(testPos1, vec2(1.0), vec2(1.0 - progress));\n                vec2 distUv = vec2(testPos.x, vTextureCoord.y);\n                vec4 color = texture2D(uSampler, distUv);\n                vec4 color1 = texture2D(previousTexture, distUv);\n                gl_FragColor = vec4(mix(color, vec4(vec3(color1), 0.0), 0.18));\n            }\n        ";
    return ToTearFilter;
}(_AbstractFilter__WEBPACK_IMPORTED_MODULE_0__["AbstractFilter"]));



/***/ }),

/***/ "./packages/player/src/core/transition/filters/WindFilter.ts":
/*!*******************************************************************!*\
  !*** ./packages/player/src/core/transition/filters/WindFilter.ts ***!
  \*******************************************************************/
/*! exports provided: WindFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindFilter", function() { return WindFilter; });
/* harmony import */ var _AbstractFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractFilter */ "./packages/player/src/core/transition/filters/AbstractFilter.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var WindFilter = /** @class */ (function (_super) {
    __extends(WindFilter, _super);
    function WindFilter() {
        return _super.call(this, _AbstractFilter__WEBPACK_IMPORTED_MODULE_0__["AbstractFilter"].vertexSrc, WindFilter.fragmentSrc, WindFilter.linearBlurUniforms) || this;
    }
    WindFilter.linearBlurUniforms = {
        filterMatrix: vf.Matrix.TEMP_MATRIX,
        resolution: vf.settings.RESOLUTION,
        previousTexture: null,
        progress: 0.0,
        size: 0.2,
    };
    WindFilter.fragmentSrc = "\n            #ifdef GL_ES\n            precision highp float;\n            #endif\n            \n            uniform sampler2D uSampler;\n            uniform sampler2D previousTexture;\n            uniform float progress;\n            uniform float resolution;\n            uniform float size;\n            \n            varying vec2 vTextureCoord;\n            varying vec2 vFilterCoord;\n            \n            float rand (vec2 co) {\n                return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n            }\n            \n            void main() {\n                float r = rand(vec2(0, vTextureCoord.y));\n                float m = smoothstep(0.0, -size, vTextureCoord.x*(1.0-size) + size*r - (progress * (1.0 + size)));\n                gl_FragColor = mix(texture2D(previousTexture, vFilterCoord), texture2D(uSampler, vTextureCoord), m);\n            }\n        ";
    return WindFilter;
}(_AbstractFilter__WEBPACK_IMPORTED_MODULE_0__["AbstractFilter"]));



/***/ }),

/***/ "./packages/player/src/core/transition/trans/FadeoutTran.ts":
/*!******************************************************************!*\
  !*** ./packages/player/src/core/transition/trans/FadeoutTran.ts ***!
  \******************************************************************/
/*! exports provided: FadeoutTran */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FadeoutTran", function() { return FadeoutTran; });
var FadeoutTran = /** @class */ (function () {
    function FadeoutTran() {
        this._progress = 0;
    }
    Object.defineProperty(FadeoutTran.prototype, "progress", {
        get: function () {
            return this._progress;
        },
        set: function (v) {
            this._progress = v;
            if (this.prevSprite) {
                this.prevSprite.alpha = (1 - this._progress);
            }
        },
        enumerable: true,
        configurable: true
    });
    FadeoutTran.prototype.setPreviousTexture = function (value) {
        this.prevTexture = value;
        if (this.prevTexture) {
            this.prevSprite = vf.Sprite.from(this.prevTexture);
        }
    };
    FadeoutTran.prototype.applyTranisition = function (target) {
        this.target = target;
        if (this.target && this.target.parent && this.prevSprite) {
            this.prevSprite.x = this.target.x;
            this.prevSprite.y = this.target.y;
            this.target.parent.addChild(this.prevSprite);
        }
    };
    FadeoutTran.prototype.dispose = function () {
        var _a;
        if (this.prevSprite && this.prevSprite.parent) {
            this.prevSprite.parent.removeChild(this.prevSprite);
            (_a = this.prevTexture) === null || _a === void 0 ? void 0 : _a.destroy();
            this.prevTexture = undefined;
            this.prevSprite = undefined;
        }
    };
    return FadeoutTran;
}());



/***/ }),

/***/ "./packages/player/src/display/SceneDataUtils.ts":
/*!*******************************************************!*\
  !*** ./packages/player/src/display/SceneDataUtils.ts ***!
  \*******************************************************/
/*! exports provided: getSceneData, getSceneDataByIndex, getNextSceneData, getPrevSceneData, getSceneJS, getSceneAssets, assetsRepair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSceneData", function() { return getSceneData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSceneDataByIndex", function() { return getSceneDataByIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextSceneData", function() { return getNextSceneData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrevSceneData", function() { return getPrevSceneData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSceneJS", function() { return getSceneJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSceneAssets", function() { return getSceneAssets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assetsRepair", function() { return assetsRepair; });
/**
 * 获取场景数据
 * @param data 需要处理的完整json数据
 * @param id 不传id,获取第一个场景数据
 */
function getSceneData(data, id) {
    var _a;
    var scenes = data.scenes;
    if (scenes) {
        if ((id === undefined || id === '') && scenes[0]) {
            return scenes[0];
        }
        id = (_a = id) === null || _a === void 0 ? void 0 : _a.toString();
        for (var i = 0, len = scenes.length; i < len; i++) {
            if (scenes[i].id.toString() === id) {
                return scenes[i];
            }
        }
    }
    return undefined;
}
/**
 * 根据索引获取场景数据
 * @param data 需要处理的完整json数据
 * @param index 索引号
 */
function getSceneDataByIndex(data, index) {
    var scenes = data.scenes;
    if (scenes && scenes[index]) {
        return scenes[index];
    }
    return undefined;
}
/**
 * 获取下一个场景数据
 * @param curId
 */
function getNextSceneData(data, curId) {
    if (data.scenes && curId) {
        for (var i = 0, len = data.scenes.length; i < len; i++) {
            if (data.scenes[i].id === curId) {
                if (i < len - 1) {
                    return data.scenes[i + 1];
                }
            }
        }
    }
    return undefined;
}
/**
 * 获取上一个场景数据
 * @param curId
 */
function getPrevSceneData(data, curId) {
    if (data.scenes && curId) {
        for (var i = 0, len = data.scenes.length; i < len; i++) {
            if (data.scenes[i].id === curId) {
                if (i > 0) {
                    return data.scenes[i - 1];
                }
            }
        }
    }
    return undefined;
}
/**
 * 获取当前场景需要的js库
 * @param data json完整数据
 * @param cdns cdn路径
 */
function getSceneJS(data) {
    var assets = [];
    for (var key in data.assets) {
        var item = data.assets[key];
        if (item.type === "js" /* JS */) {
            if (item.name === undefined) {
                throw new Error("loader " + item.url + " failed, missing name field");
            }
            assets.push(item);
        }
    }
    return assets;
}
/**
 * 获取当前场景的资源加载项
 * @param data json完整数据
 * @param sceneData 场景数据
 */
function getSceneAssets(data, sceneData) {
    var assets = [];
    // 场景是否单独配置加载策略
    if (data.loadMode === "all" /* ALL */ || sceneData.assets === undefined) {
        for (var key in data.assets) {
            if (data.assets[key].type !== "js" /* JS */) {
                assets.push(data.assets[key]);
            }
        }
    }
    else {
        var item_1;
        sceneData.assets.forEach(function (value) {
            item_1 = data.assets[value];
            if (item_1 && item_1.type !== "js" /* JS */) {
                assets.push(item_1);
            }
        });
    }
    return assets;
}
/**
 * 修复资源数据,补充ID
 * @param data
 */
function assetsRepair(data) {
    var item;
    for (var key in data.assets) {
        item = data.assets[key];
        if (item.id === undefined) {
            item.id = key;
        }
    }
    return data;
}


/***/ }),

/***/ "./packages/player/src/display/VFComponent.ts":
/*!****************************************************!*\
  !*** ./packages/player/src/display/VFComponent.ts ***!
  \****************************************************/
/*! exports provided: VFComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VFComponent", function() { return VFComponent; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var VFComponent = /** @class */ (function (_super) {
    __extends(VFComponent, _super);
    function VFComponent() {
        var _this = _super.call(this) || this;
        _this.hashCode = ++VFComponent.maxHashCode;
        _this.libId = '0';
        _this.id = '0';
        _this.childrenMap = {};
        _this.pauseData = undefined;
        _this.interactabled = false;
        return _this;
    }
    Object.defineProperty(VFComponent.prototype, "vfStage", {
        get: function () {
            return this._vfStage;
        },
        set: function (stage) {
            this._vfStage = stage;
            for (var id in this.childrenMap) {
                if (this.childrenMap[id]) {
                    var child = this.childrenMap[id];
                    if (child instanceof VFComponent) {
                        child.vfStage = stage;
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    VFComponent.prototype.pause = function () {
        for (var id in this.childrenMap) {
            if (this.childrenMap[id]) {
                var child = this.childrenMap[id];
                if (child instanceof VFComponent) {
                    child.pause();
                }
            }
        }
        if (this.animation) {
            this.pauseData = this.animation.getPauseData();
            this.animation.stop();
        }
        if (this.actionList) {
            this.actionList.pause();
        }
    };
    VFComponent.prototype.resume = function () {
        for (var id in this.childrenMap) {
            if (this.childrenMap[id]) {
                var child = this.childrenMap[id];
                if (child instanceof VFComponent) {
                    child.resume();
                }
            }
        }
        if (this.animation) {
            if (this.pauseData) {
                this.animation.gotoPlay(this.pauseData.animation, this.pauseData.frame, this.pauseData.times);
                this.pauseData = undefined;
            }
        }
        if (this.actionList) {
            this.actionList.resume();
        }
    };
    VFComponent.prototype.playDefaultAnimation = function () {
        if (this.animation) {
            this.animation.playDefaultAnimation();
        }
    };
    VFComponent.prototype.gotoPlay = function (name, frame, times) {
        if (times === void 0) { times = 1; }
        if (this.animation) {
            this.animation.gotoPlay(name, frame, times);
        }
    };
    VFComponent.prototype.gotoStop = function (name, frame) {
        if (this.animation) {
            this.animation.gotoStop(name, frame);
        }
    };
    VFComponent.prototype.play = function (name, times) {
        if (times === void 0) { times = 1; }
        if (this.animation) {
            this.animation.play(name, times);
        }
    };
    VFComponent.prototype.stop = function () {
        if (this.animation) {
            this.animation.stop();
        }
    };
    VFComponent.prototype.getChildById = function (id) {
        return this.childrenMap[id];
    };
    VFComponent.prototype.getVariable = function (id) {
        if (this._vfStage) {
            var vm = this._vfStage.variableManager;
            var variable = vm.getVariable(this.hashCode.toString(), id);
            return variable;
        }
        return undefined;
    };
    VFComponent.prototype.getVariableValue = function (id) {
        var variable = this.getVariable(id);
        if (variable) {
            return variable.value;
        }
        return undefined;
    };
    VFComponent.prototype.setVariableValue = function (id, value) {
        var variable = this.getVariable(id);
        if (variable) {
            variable.value = value;
        }
    };
    VFComponent.prototype.addChildAt = function (item, index) {
        // tslint:disable-next-line: no-string-literal
        var cid = item['id'];
        if (this.childrenMap[cid.toString()]) {
            // throw new Error('duplicate id; ' + cid);
        }
        else {
            this.childrenMap[cid.toString()] = item;
        }
        if (item instanceof VFComponent) {
            item.vfStage = this.vfStage;
        }
        var child = _super.prototype.addChildAt.call(this, item, index);
        if (item instanceof VFComponent) {
            item.playDefaultAnimation();
        }
        return child;
    };
    VFComponent.prototype.removeChild = function (UIObject) {
        // this.vfStage = undefined;
        // tslint:disable-next-line: no-string-literal
        var cid = UIObject['id'];
        // delete this.childrenMap[cid.toString()];
        return _super.prototype.removeChild.call(this, UIObject);
    };
    VFComponent.prototype.runAction = function () {
        for (var id in this.childrenMap) {
            if (this.childrenMap[id]) {
                var child = this.childrenMap[id];
                if (child instanceof VFComponent) {
                    child.runAction();
                }
            }
        }
        if (this.actionList) {
            this.actionList.run();
        }
        this.on("Remove" /* Remove */, this.onRemoved, this);
    };
    VFComponent.prototype.emitAddToChildBefore = function () {
        for (var id in this.childrenMap) {
            if (this.childrenMap[id]) {
                var child = this.childrenMap[id];
                if (child instanceof VFComponent) {
                    child.emitAddToChildBefore();
                }
            }
        }
        this.emit("Add" /* Add */, this);
    };
    VFComponent.prototype.emitAddToChild = function () {
        for (var id in this.childrenMap) {
            if (this.childrenMap[id]) {
                var child = this.childrenMap[id];
                if (child instanceof VFComponent) {
                    child.emitAddToChild();
                }
            }
        }
        this.emit("Added" /* Added */, this);
    };
    VFComponent.prototype.emitRemoveToChild = function () {
        for (var id in this.childrenMap) {
            if (this.childrenMap[id]) {
                var child = this.childrenMap[id];
                if (child instanceof VFComponent) {
                    child.emitRemoveToChild();
                }
            }
        }
        this.emit("Removed" /* Removed */, this);
    };
    VFComponent.prototype.emitRemoveToChildBefore = function () {
        for (var id in this.childrenMap) {
            if (this.childrenMap[id]) {
                var child = this.childrenMap[id];
                if (child instanceof VFComponent) {
                    child.emitRemoveToChildBefore();
                }
            }
        }
        this.emit("Remove" /* Remove */, this);
    };
    VFComponent.prototype.dispose = function () {
        this._vfStage = undefined;
        this.interactabled = false;
        if (this.animation) {
            this.animation.stop();
        }
        for (var id in this.childrenMap) {
            if (this.childrenMap[id]) {
                var child = this.childrenMap[id];
                if (child instanceof VFComponent) {
                    child.dispose();
                }
            }
        }
        this.releaseAll();
    };
    VFComponent.prototype.onRemoved = function () {
        if (this.actionList) {
            this.actionList.stop();
        }
        this.off("Remove" /* Remove */);
    };
    VFComponent.maxHashCode = 10000;
    return VFComponent;
}(vf.gui.ScrollingContainer));



/***/ }),

/***/ "./packages/player/src/display/VFScene.ts":
/*!************************************************!*\
  !*** ./packages/player/src/display/VFScene.ts ***!
  \************************************************/
/*! exports provided: VFScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VFScene", function() { return VFScene; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var VFScene = /** @class */ (function (_super) {
    __extends(VFScene, _super);
    function VFScene(vfStage) {
        var _this = _super.call(this) || this;
        _this.id = '-1';
        _this.component = null;
        _this.vfStage = vfStage;
        return _this;
    }
    VFScene.prototype.pause = function () {
        if (this.component) {
            this.component.pause();
        }
    };
    VFScene.prototype.resume = function () {
        if (this.component) {
            this.component.resume();
        }
    };
    VFScene.prototype.addComponent = function (vfComponent) {
        this.component = vfComponent;
        this.component.vfStage = this.vfStage;
        this.component.runAction();
        this.component.emitAddToChildBefore();
        var child = this.addChild(vfComponent);
        this.component.emitAddToChild();
        this.component.playDefaultAnimation();
    };
    VFScene.prototype.removeComponent = function () {
        if (this.component) {
            this.component.emitRemoveToChildBefore();
            var child = this.removeChild(this.component);
            this.component.emitRemoveToChild();
            this.component.stop();
            this.component.vfStage = undefined;
        }
    };
    VFScene.prototype.dispose = function () {
        if (this.component) {
            this.removeComponent();
            this.component.dispose();
        }
        this.component = null;
    };
    return VFScene;
}(vf.gui.Container));



/***/ }),

/***/ "./packages/player/src/display/VFStage.ts":
/*!************************************************!*\
  !*** ./packages/player/src/display/VFStage.ts ***!
  \************************************************/
/*! exports provided: VFStage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VFStage", function() { return VFStage; });
/* harmony import */ var _core_VariableManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/VariableManager */ "./packages/player/src/core/VariableManager.ts");
/* harmony import */ var _sound_SoundManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sound/SoundManager */ "./packages/player/src/sound/SoundManager.ts");
/* harmony import */ var _core_RES__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/RES */ "./packages/player/src/core/RES.ts");
/* harmony import */ var _utils_VFUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/VFUtil */ "./packages/player/src/utils/VFUtil.ts");
/* harmony import */ var _plugs_PlugIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugs/PlugIndex */ "./packages/player/src/display/plugs/PlugIndex.ts");
/* harmony import */ var _SceneDataUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SceneDataUtils */ "./packages/player/src/display/SceneDataUtils.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var STAGE_STATUS;
(function (STAGE_STATUS) {
    STAGE_STATUS[STAGE_STATUS["NONE"] = 0] = "NONE";
    STAGE_STATUS[STAGE_STATUS["LOADING"] = 1] = "LOADING";
    STAGE_STATUS[STAGE_STATUS["READY"] = 2] = "READY";
    STAGE_STATUS[STAGE_STATUS["PLAYING"] = 3] = "PLAYING";
    STAGE_STATUS[STAGE_STATUS["PAUSED"] = 4] = "PAUSED";
    STAGE_STATUS[STAGE_STATUS["STOP"] = 5] = "STOP";
})(STAGE_STATUS || (STAGE_STATUS = {}));
// eslint-disable-next-line no-undef
var VFStage = /** @class */ (function (_super) {
    __extends(VFStage, _super);
    function VFStage(data, config, player) {
        var _this = _super.call(this, config.width, config.height, player.app) || this;
        _this.plugs = new Map(); // 插件列表
        /**
         * 延迟一帧显示，避免坐标0，0
         */
        _this._delayedDisplayId = -1;
        _this.status = STAGE_STATUS.NONE;
        _this.data = Object(_SceneDataUtils__WEBPACK_IMPORTED_MODULE_5__["assetsRepair"])(data);
        _this.config = config;
        _this.player = player;
        _this.variableManager = new _core_VariableManager__WEBPACK_IMPORTED_MODULE_0__["VariableManager"]();
        _this.soundManager = new _sound_SoundManager__WEBPACK_IMPORTED_MODULE_1__["SoundManager"](_this);
        new _plugs_PlugIndex__WEBPACK_IMPORTED_MODULE_4__["PlugIndex"]();
        var res = _this.res = new _core_RES__WEBPACK_IMPORTED_MODULE_2__["RES"](_this);
        res.on("LoadComplete" /* LoadComplete */, _this.loadAssetCompleted, _this);
        res.on("LoadProgress" /* LoadProgress */, _this.loadProgress, _this);
        return _this;
    }
    VFStage.prototype.getSystemEvent = function () {
        return this.config.systemEvent;
    };
    Object.defineProperty(VFStage.prototype, "systemEvent", {
        /**
         * 获取系统总线
         */
        get: function () {
            return this.config.systemEvent;
        },
        enumerable: true,
        configurable: true
    });
    /** 获取当前的场景 */
    VFStage.prototype.getCurScene = function () {
        return this.curScene;
    };
    /**
     * 即使没有引用也不要删除这个接口，GUI在调用
     * @param msg
     */
    VFStage.prototype.sendToPlayer = function (msg) {
        if (msg.message === undefined) {
            msg.message = '';
        }
        if (msg.target && msg.target.libId) {
            msg.message += ", id = " + msg.target.id + " , libId = " + msg.target.libId;
        }
        this.player.runtimeLog(msg);
    };
    VFStage.prototype.start = function () {
        // 初始化加载界面
        this.status = STAGE_STATUS.LOADING;
        var data = this.data;
        var sceneData = Object(_SceneDataUtils__WEBPACK_IMPORTED_MODULE_5__["getSceneData"])(data, this.curSceneId);
        if (sceneData === undefined) {
            throw new Error("scene does not exist!");
        }
        this.systemEvent.emit("status" /* STATUS */, {
            code: "SceneLoad" /* SceneLoad */, level: "status" /* STATUS */, data: [this.curSceneId],
        });
        this.curSceneId = sceneData.id; // 首次加载curSceneId = null.
        this.res.loadData(Object(_SceneDataUtils__WEBPACK_IMPORTED_MODULE_5__["getSceneAssets"])(data, sceneData), Object(_SceneDataUtils__WEBPACK_IMPORTED_MODULE_5__["getSceneJS"])(data));
    };
    VFStage.prototype.pause = function () {
        if (this.curScene) {
            this.status = STAGE_STATUS.PAUSED;
            this.curScene.pause();
            this.soundManager.pause();
        }
    };
    VFStage.prototype.resume = function () {
        if (this.curScene) {
            this.curScene.resume();
            this.soundManager.resume();
            this.status = STAGE_STATUS.PLAYING;
        }
    };
    VFStage.prototype.reset = function () {
        if (this.status === STAGE_STATUS.NONE ||
            this.status === STAGE_STATUS.LOADING) {
            return;
        }
        if (this.curScene) {
            this.curScene.dispose();
            this.curScene = undefined;
        }
        this.variableManager.clear();
        this.res.initGlobalVariable();
        this.soundManager.clear();
        this.start();
    };
    VFStage.prototype.dispose = function () {
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
            this.res = null;
        }
        this.plugs.forEach(function (value) {
            value.release();
        });
    };
    VFStage.prototype.switchToSceneId = function (sceneId, transition) {
        this.curSceneId = sceneId;
        this.curSceneTransition = transition;
        this.start();
    };
    VFStage.prototype.switchToSceneIndex = function (index, transition) {
        var sceneData = Object(_SceneDataUtils__WEBPACK_IMPORTED_MODULE_5__["getSceneDataByIndex"])(this.data, parseInt(index, 0));
        if (sceneData) {
            this.switchToSceneId(sceneData.id, transition);
        }
    };
    VFStage.prototype.switchToNextScene = function (transition) {
        var sceneData = Object(_SceneDataUtils__WEBPACK_IMPORTED_MODULE_5__["getNextSceneData"])(this.data, this.curSceneId);
        if (sceneData) {
            this.switchToSceneId(sceneData.id, transition);
        }
    };
    VFStage.prototype.switchToPrevScene = function (transition) {
        var sceneData = Object(_SceneDataUtils__WEBPACK_IMPORTED_MODULE_5__["getPrevSceneData"])(this.data, this.curSceneId);
        if (sceneData) {
            this.switchToSceneId(sceneData.id, transition);
        }
    };
    VFStage.prototype.switchToScene = function (scene, transition) {
        if (scene && this.app) {
            var transitionData = transition;
            var prevTexture = void 0;
            if (this.curScene) {
                if (this.curScene.transition || transitionData) {
                    if (transitionData === undefined) {
                        transitionData = this.curScene.transition;
                    }
                    prevTexture = Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_3__["renderTexture"])(this.app, this.container, this.container.width, this.container.height);
                }
                this.removeChild(this.curScene);
                this.curScene.dispose();
            }
            this.curScene = scene;
            this.curScene.width = this.width;
            this.curScene.height = this.height;
            this.addChild(scene);
            if (transitionData && prevTexture) {
                Object(_utils_VFUtil__WEBPACK_IMPORTED_MODULE_3__["applyTransition"])(this, prevTexture, transitionData);
            }
            else {
                this.emit("TransitionStart" /* TransitionStart */);
                this.emit("TransitionEnd" /* TransitionEnd */);
            }
            this.status = STAGE_STATUS.PLAYING;
        }
    };
    VFStage.prototype.loadAssetCompleted = function () {
        var _this = this;
        this.systemEvent.emit("status" /* STATUS */, {
            code: "LoadComplete" /* LoadComplete */, level: "status" /* STATUS */, data: [this.curSceneId],
        });
        // 加载完毕
        this.status = STAGE_STATUS.READY;
        if (this.curSceneId !== undefined) {
            var scene = this.res.createScene(this.curSceneId, this);
            if (scene) {
                this.switchToScene(scene, this.curSceneTransition);
            }
            this.visible = false;
            clearTimeout(this._delayedDisplayId);
            this._delayedDisplayId = setTimeout(function () {
                _this.visible = true;
                if (_this.syncManager) {
                    _this.syncManager.init();
                }
                _this.createPlugs();
                _this.systemEvent.emit("status" /* STATUS */, {
                    code: "ScenComplete" /* ScenComplete */, level: "status" /* STATUS */, data: null,
                });
            }, 60);
        }
    };
    VFStage.prototype.loadProgress = function (e) {
        this.systemEvent.emit("status" /* STATUS */, {
            code: "LoadProgress" /* LoadProgress */, level: "status" /* STATUS */, data: e,
        });
    };
    VFStage.prototype.createPlugs = function () {
        var plugsData = this.config.plugs;
        for (var _i = 0, plugsData_1 = plugsData; _i < plugsData_1.length; _i++) {
            var value = plugsData_1[_i];
            var PlugsClass = (_plugs_PlugIndex__WEBPACK_IMPORTED_MODULE_4__[value.id]);
            if (PlugsClass) {
                var plug = new PlugsClass(value.id, this);
                plug.load(value);
            }
        }
    };
    return VFStage;
}(vf.gui.Stage));



/***/ }),

/***/ "./packages/player/src/display/plugs/BoardDrawPlug.ts":
/*!************************************************************!*\
  !*** ./packages/player/src/display/plugs/BoardDrawPlug.ts ***!
  \************************************************************/
/*! exports provided: BoardDrawPlug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardDrawPlug", function() { return BoardDrawPlug; });
/* harmony import */ var _Plug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plug */ "./packages/player/src/display/plugs/Plug.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * 画板插件
 * @author yangxiao
 */
var BoardDrawPlug = /** @class */ (function (_super) {
    __extends(BoardDrawPlug, _super);
    function BoardDrawPlug(className, parent) {
        return _super.call(this, className, parent) || this;
    }
    BoardDrawPlug.prototype.onLoad = function (data) {
        var parent = this.parent;
        this.followLine = new vf.gui.FollowLine(parent);
        var followLine = this.followLine;
        followLine.role = data.role === 1 ?
            "T" /* teacher */ :
            "S" /* student */;
        followLine.width = parent.width;
        followLine.height = parent.height;
        parent.addChild(followLine);
        followLine.on(vf.gui.Interaction.ComponentEvent.COMPLETE, this.onComplete, this);
        parent.config.systemEvent.on("message" /* MESSAGE */, this.onReceipt, this);
        return this;
    };
    BoardDrawPlug.prototype.onRelease = function () {
        var _a, _b, _c;
        this.parent.config.systemEvent.off("message" /* MESSAGE */, this.onReceipt, this);
        (_a = this.followLine) === null || _a === void 0 ? void 0 : _a.off(vf.gui.Interaction.ComponentEvent.COMPLETE, this.onComplete, this);
        (_b = this.followLine) === null || _b === void 0 ? void 0 : _b.offAll();
        (_c = this.followLine) === null || _c === void 0 ? void 0 : _c.release();
    };
    BoardDrawPlug.prototype.onComplete = function (display, data) {
        this.parent.config.systemEvent.emit("message" /* MESSAGE */, {
            type: 'sendSignal',
            code: 'sendSignal',
            level: "command" /* COMMAND */,
            data: { name: 'boardDraw', val: data },
        });
    };
    BoardDrawPlug.prototype.onReceipt = function (msg) {
        if (msg.data && msg.code === 'sendSignal' && this.followLine) {
            var followLine = this.followLine;
            if (msg.data.name === 'boardDraw') {
                followLine.setData(msg.data.val);
            }
            else if (msg.data.name === 'boardRestore') { // 重置
                followLine.reset();
            }
            else if (msg.data.name === 'boardErase') { // 橡皮檫
                followLine.isErasing = msg.data.val;
            }
            else if (msg.data.name === 'boardLineColor') { // 线段颜色
                followLine.lineColor = msg.data.val;
            }
        }
    };
    return BoardDrawPlug;
}(_Plug__WEBPACK_IMPORTED_MODULE_0__["Plug"]));



/***/ }),

/***/ "./packages/player/src/display/plugs/DigitalLibraryPlug.ts":
/*!*****************************************************************!*\
  !*** ./packages/player/src/display/plugs/DigitalLibraryPlug.ts ***!
  \*****************************************************************/
/*! exports provided: DigitalLibraryPlug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DigitalLibraryPlug", function() { return DigitalLibraryPlug; });
/* harmony import */ var _Plug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plug */ "./packages/player/src/display/plugs/Plug.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * 数字图书馆
 * @author yangxiao
 */
var DigitalLibraryPlug = /** @class */ (function (_super) {
    __extends(DigitalLibraryPlug, _super);
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    function DigitalLibraryPlug(className, parent) {
        return _super.call(this, className, parent) || this;
    }
    DigitalLibraryPlug.prototype.onLoad = function () {
        var _a;
        var parent = this.parent;
        // eslint-disable-next-line no-undef
        var interaction = ((_a = parent.app) === null || _a === void 0 ? void 0 : _a.renderer).plugins.interaction;
        interaction.autoPreventDefault = false;
    };
    DigitalLibraryPlug.prototype.onRelease = function () {
        //
    };
    return DigitalLibraryPlug;
}(_Plug__WEBPACK_IMPORTED_MODULE_0__["Plug"]));



/***/ }),

/***/ "./packages/player/src/display/plugs/Plug.ts":
/*!***************************************************!*\
  !*** ./packages/player/src/display/plugs/Plug.ts ***!
  \***************************************************/
/*! exports provided: Plug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plug", function() { return Plug; });
/**
 * 基于接口的抽象实现
 * @author yangxiao
 */
var Plug = /** @class */ (function () {
    function Plug(className, parent) {
        this.id = className;
        this.parent = parent;
        this.status = "init" /* INIT */;
    }
    Plug.prototype.load = function (data) {
        if (this.status !== "init" /* INIT */) {
            return;
        }
        this.onLoad(data);
        this.status = "ready" /* READY */;
        this.parent.plugs.set(this.id, this);
        return this;
    };
    Plug.prototype.release = function () {
        if (this.status === "init" /* INIT */) {
            return;
        }
        this.onRelease();
        this.parent.plugs.delete(this.id);
        this.parent = null;
        this.status = "init" /* INIT */;
    };
    /**
     * 子类实现
     */
    Plug.prototype.onLoad = function (data) {
        //
    };
    /**
     * 子类实现
     */
    Plug.prototype.onRelease = function () {
        //
    };
    return Plug;
}());



/***/ }),

/***/ "./packages/player/src/display/plugs/PlugIndex.ts":
/*!********************************************************!*\
  !*** ./packages/player/src/display/plugs/PlugIndex.ts ***!
  \********************************************************/
/*! exports provided: BoardDrawPlug, SliderEditorPlug, DigitalLibraryPlug, PlugIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlugIndex", function() { return PlugIndex; });
/* harmony import */ var _BoardDrawPlug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoardDrawPlug */ "./packages/player/src/display/plugs/BoardDrawPlug.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoardDrawPlug", function() { return _BoardDrawPlug__WEBPACK_IMPORTED_MODULE_0__["BoardDrawPlug"]; });

/* harmony import */ var _SliderEditorPlug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SliderEditorPlug */ "./packages/player/src/display/plugs/SliderEditorPlug.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SliderEditorPlug", function() { return _SliderEditorPlug__WEBPACK_IMPORTED_MODULE_1__["SliderEditorPlug"]; });

/* harmony import */ var _DigitalLibraryPlug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DigitalLibraryPlug */ "./packages/player/src/display/plugs/DigitalLibraryPlug.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DigitalLibraryPlug", function() { return _DigitalLibraryPlug__WEBPACK_IMPORTED_MODULE_2__["DigitalLibraryPlug"]; });




var PlugIndex = /** @class */ (function () {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    function PlugIndex() {
        //
    }
    return PlugIndex;
}());



/***/ }),

/***/ "./packages/player/src/display/plugs/SliderEditorPlug.ts":
/*!***************************************************************!*\
  !*** ./packages/player/src/display/plugs/SliderEditorPlug.ts ***!
  \***************************************************************/
/*! exports provided: SliderEditorPlug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderEditorPlug", function() { return SliderEditorPlug; });
/* harmony import */ var _Plug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Plug */ "./packages/player/src/display/plugs/Plug.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * 基于互动课件slider业务的特殊插件，用于解决穿透，鼠标事件等问题
 * @author yangxiao
 */
var SliderEditorPlug = /** @class */ (function (_super) {
    __extends(SliderEditorPlug, _super);
    function SliderEditorPlug(className, parent) {
        var _this = _super.call(this, className, parent) || this;
        parent.originalEventPreventDefault = true;
        parent.syncInteractiveFlag = true; //开启同步
        var element = document.getElementById('drawCanvas');
        // eslint-disable-next-line no-eq-null
        if (element == null) {
            var canvasContainer = document.getElementsByClassName('canvas-container')[0];
            if (canvasContainer && canvasContainer.children[1]) {
                element = canvasContainer.children[1];
            }
        }
        // eslint-disable-next-line no-eq-null
        if (element == null) {
            // 无法找到画线，可能是回放模式
            _this.parent.systemEvent.emitError('E0002', ['drawCanvas|canvas-container'], "warning" /* WARNING */);
            return _this;
        }
        _this.dom = element;
        return _this;
    }
    SliderEditorPlug.prototype.onLoad = function (data) {
        var _a, _b;
        if (this.dom === undefined) {
            return;
        }
        var element = this.dom;
        var parent = this.parent;
        // tslint:disable-next-line: max-line-length
        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        // eslint-disable-next-line no-undef
        var interaction = ((_a = parent.app) === null || _a === void 0 ? void 0 : _a.renderer).plugins.interaction;
        this.observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.type === 'attributes') {
                    var node = mutation.target;
                    var currentCursorMode = interaction.currentCursorMode;
                    if (node.dataset.cursor !== node.style.cursor) {
                        if (currentCursorMode === 'pointer') {
                            node.style.cursor = 'pointer';
                            node.dataset.cursor = node.style.cursor;
                            return;
                        }
                        node.dataset.cursor = node.style.cursor;
                    }
                }
            });
        });
        this.observer.observe(element, {
            attributes: true,
            attributeFilter: ['style'],
        });
        var defaultCursor = element.style.cursor;
        interaction.setTargetElement(element, (_b = parent.app) === null || _b === void 0 ? void 0 : _b.renderer.resolution);
        var cursorStyles = interaction.cursorStyles;
        cursorStyles.default = defaultCursor;
        element.style.display = 'none';
        setTimeout(function () {
            // BUG 边检检查
            if (element) {
                element.style.display = '';
            }
        }, 60);
        return;
    };
    SliderEditorPlug.prototype.onRelease = function () {
        var _a;
        (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
        this.dom = null;
    };
    return SliderEditorPlug;
}(_Plug__WEBPACK_IMPORTED_MODULE_0__["Plug"]));



/***/ }),

/***/ "./packages/player/src/error/ErrorDisplay.ts":
/*!***************************************************!*\
  !*** ./packages/player/src/error/ErrorDisplay.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 显示错误信息
 * TODO:
 *  1、仅处理影响运行/使用的Error。
 *  2、支持国际化显示Error信息。
 *  3、可配置不使用内置Error，外部可根据API抛出的异常自定义显示Error信息。
 */
var ErrorDisplay = /** @class */ (function () {
    function ErrorDisplay(config, useCustomErrorPanel) {
        this._config = config;
        this._showCode = '';
        if (useCustomErrorPanel) {
            this._errPanel = document.createElement('div');
            this._errPanel.style.background = 'rgba(0,0,0,0.8)';
            this._errPanel.style.position = 'absolute';
            this._errPanel.style.width = '100%';
            this._errPanel.style.height = '100%';
            this._errPanel.style.zIndex = '8088';
            this._errPanel.style.display = 'none';
            var _span = document.createElement('span');
            _span.style.display = 'table-cell';
            _span.style.verticalAlign = 'middle';
            _span.style.textAlign = 'center';
            _span.style.color = '#eee';
            this._errPanel.appendChild(_span);
            this._config.container.appendChild(this._errPanel);
            this._config.i18n.addListener("state" /* STATE */, this.onChange, this);
        }
    }
    ErrorDisplay.prototype.setMessage = function (code, data) {
        // mark: need check code is supported
        if (code && this._errPanel) {
            this._showCode = code;
            this._errPanel.style.display = 'table';
            var _span = this._errPanel.children[0];
            if (_span.hasChildNodes()) {
                _span.removeChild(_span.childNodes[0]);
            }
            var _text = document.createTextNode(this.getText(code, data));
            _span.appendChild(_text);
        }
    };
    ErrorDisplay.prototype.getText = function (code, data) {
        return this._config.i18n.t(code, data) + " #" + code;
    };
    ErrorDisplay.prototype.close = function () {
        this._showCode = '';
        if (this._errPanel) {
            this._errPanel.style.display = 'none';
        }
    };
    ErrorDisplay.prototype.onChange = function (evt) {
        if (this._showCode && evt.code === 'I18N.Property.Changed') {
            this.setMessage(this._showCode);
        }
    };
    return ErrorDisplay;
}());
/* harmony default export */ __webpack_exports__["default"] = (ErrorDisplay);


/***/ }),

/***/ "./packages/player/src/event/StateEvent.ts":
/*!*************************************************!*\
  !*** ./packages/player/src/event/StateEvent.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var StateEvent = /** @class */ (function (_super) {
    __extends(StateEvent, _super);
    function StateEvent() {
        var _this = _super.call(this) || this;
        _this._observers = [];
        return _this;
    }
    StateEvent.prototype.emit = function (type, event) {
        if (type === undefined) {
            throw new Error("emitEvent ==> " + type + " is undefined");
        }
        if (event.code === undefined) {
            throw new Error("emitEvent ==> " + type + " args.code is undefined");
        }
        if (event.level === undefined) {
            throw new Error("emitEvent ==> " + type + " args.level is undefined");
        }
        var result = _super.prototype.emit.call(this, type, event);
        return result;
    };
    /**
     * 扩展的发送，事件名与数据
     * @param event 事件名 event = code
     * @param _data
     * @param _target
     */
    StateEvent.prototype.emitExt = function (event, _data, _target) {
        this.emit(event, { code: event, level: "command" /* COMMAND */, data: _data, target: _target });
    };
    /**
     * 抛出错误信息
     * @param errorCode 错误码，指定packages.i18n中的文件
     * @param data 需要解析的变量
     */
    StateEvent.prototype.emitError = function (errorCode, data, level, target) {
        if (level === void 0) { level = "error" /* ERROR */; }
        this.error({ code: errorCode, level: level, data: data, message: errorCode, target: target, });
    };
    StateEvent.prototype.error = function (msg) {
        this.emit("status" /* STATUS */, msg);
    };
    return StateEvent;
}(vf.utils.EventEmitter));
/* harmony default export */ __webpack_exports__["default"] = (StateEvent);


/***/ }),

/***/ "./packages/player/src/index.ts":
/*!**************************************!*\
  !*** ./packages/player/src/index.ts ***!
  \**************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./packages/player/src/Player.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return _Player__WEBPACK_IMPORTED_MODULE_0__["Player"]; });




/***/ }),

/***/ "./packages/player/src/sound/SoundManager.ts":
/*!***************************************************!*\
  !*** ./packages/player/src/sound/SoundManager.ts ***!
  \***************************************************/
/*! exports provided: SoundManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundManager", function() { return SoundManager; });
var SoundManager = /** @class */ (function () {
    function SoundManager(vfStage) {
        this.trackIdMap = [];
        this.assetIdMap = new Map();
        this.stage = vfStage;
        // vfStage.config.vfvars.useNativeAudio // 如果使用了native播放，不要加载和设置PIXI.sound， 在互动课件中会有问题，教室中使用audioContext会出错。
    }
    SoundManager.prototype.getAudio = function (trackId) {
        var ae = vf.AudioEngine.Ins();
        if (trackId === undefined) {
            return undefined;
        }
        return ae.map.get(this.stage.config.uuid.toString() + trackId);
    };
    SoundManager.prototype.clear = function () {
        this.pause();
        var trackMap = this.trackIdMap;
        var audio;
        while (trackMap.length > 0) {
            audio = this.getAudio(trackMap.shift());
            if (audio) {
                audio.dispose();
            }
        }
    };
    SoundManager.prototype.pause = function () {
        var _this = this;
        var audio;
        this.trackIdMap.forEach(function (trackId) {
            audio = _this.getAudio(trackId);
            if (audio) {
                audio.pause();
            }
        });
    };
    SoundManager.prototype.resume = function () {
        var _this = this;
        var audio;
        this.trackIdMap.forEach(function (trackId) {
            audio = _this.getAudio(trackId);
            if (audio) {
                audio.play();
            }
        });
    };
    SoundManager.prototype.pauseSound = function (data) {
        if (data === void 0) { data = {}; }
        var asset = this.stage.res.data.assets[data.assetId.toString()];
        if (asset === undefined || asset.url === undefined || asset.url === "") {
            console.warn("playback failed,missing assetId!", data);
            return;
        }
        //如果处于恢复状态，不播放声音
        if (this.stage.syncManager && this.stage.syncManager.resumeStatusFlag) {
            return;
        }
        if (this.nativeEmit(asset.url, "pauseAudio", data)) {
            return;
        }
        if (this.weixinEmit()) {
            return;
        }
        var audio = this.getAudio(data.trackId);
        if (audio) {
            audio.pause();
        }
    };
    SoundManager.prototype.resumeSound = function (data) {
        var asset = this.stage.res.data.assets[data.assetId.toString()];
        if (asset === undefined || asset.url === undefined || asset.url === "") {
            console.warn("playback failed,missing assetId!", data);
            return;
        }
        //如果处于恢复状态，不播放声音
        if (this.stage.syncManager && this.stage.syncManager.resumeStatusFlag) {
            return;
        }
        if (this.nativeEmit(asset.url, "resumeAudio", data)) {
            return;
        }
        if (this.weixinEmit()) {
            return;
        }
        var audio = this.getAudio(data.trackId);
        if (audio && audio.paused) {
            audio.play();
        }
    };
    // tslint:disable-next-line: max-line-length
    SoundManager.prototype.playSound = function (data) {
        var asset = this.stage.res.data.assets[data.assetId.toString()];
        if (asset === undefined || asset.url === undefined || asset.url === "") {
            console.warn("playback failed,missing assetId!", data);
            return;
        }
        //如果处于恢复状态，不播放声音
        if (this.stage.syncManager && this.stage.syncManager.resumeStatusFlag) {
            return;
        }
        if (this.nativeEmit(asset.url, "playAudio", data)) {
            return;
        }
        if (this.weixinEmit()) {
            return;
        }
        var audio = this.getAudio(data.trackId);
        //by ziye+ 允许同一个trackId播放不同的声音
        if (audio) {
            if (this.assetIdMap.get(data.trackId) === asset.url) {
                audio.play(0, 0);
                return;
            }
            else {
                audio.dispose();
                vf.AudioEngine.Ins().map.delete(this.stage.config.uuid.toString() + data.trackId);
            }
        }
        // eslint-disable-next-line max-len
        audio = vf.AudioEngine.Ins().createAudio(this.stage.config.uuid.toString() + data.trackId, asset.url, {
            autoplay: false,
        });
        audio.play(data.time, data.offset, data.length);
        this.trackIdMap.push(data.trackId);
        this.assetIdMap.set(data.trackId, asset.url);
    };
    SoundManager.prototype.isWeixin = function () {
        var ua = window.navigator.userAgent.toLowerCase();
        return /micromessenger/.test(ua);
    };
    SoundManager.prototype.weixinEmit = function () {
        return false;
        // eslint-disable-next-line no-unreachable
        if (this.isWeixin()) {
            // document.addEventListener('WeixinJSBridgeReady', () => {audio.play(); }, false);
            // if (( window as any).WeixinJSBridge &&
            //     typeof ( window as any).WeixinJSBridge === 'object' &&
            //     typeof ( window as any).WeixinJSBridge.invoke === 'function') {
            //     ( window as any).WeixinJSBridge.invoke('getNetworkType', {}, () => {audio.pause(); });
            // }
        }
    };
    SoundManager.prototype.nativeEmit = function (url, typeTag, data) {
        if (data === void 0) { data = {}; }
        var useNative = this.stage.config.vfvars.useNativeAudio;
        if (useNative) {
            // 先放这里，后期soundManager完成后，合并
            this.stage.systemEvent.emit("message" /* MESSAGE */, {
                code: "native" /* NATIVE */,
                type: "native" /* NATIVE */,
                level: "command" /* COMMAND */,
                data: {
                    type: typeTag,
                    id: data.trackId || 0,
                    src: url,
                    mode: data.mode || "sound",
                    signalling: data.signalling || false,
                },
            });
            return true;
        }
        return false;
    };
    return SoundManager;
}());



/***/ }),

/***/ "./packages/player/src/utils/CalculatePlayerSize.ts":
/*!**********************************************************!*\
  !*** ./packages/player/src/utils/CalculatePlayerSize.ts ***!
  \**********************************************************/
/*! exports provided: getBoundingClientRect, calculateUpdatePlayerSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBoundingClientRect", function() { return getBoundingClientRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateUpdatePlayerSize", function() { return calculateUpdatePlayerSize; });
/**
 * @private
 * 计算舞台显示尺寸
 * @param scaleMode 当前的缩放模式
 * @param screenWidth 播放器视口宽度
 * @param screenHeight 播放器视口高度
 * @param contentWidth 初始化内容宽度
 * @param contentHeight 初始化内容高度
 */
function calculateStageSize(scaleMode, screenWidth, screenHeight, contentWidth, contentHeight) {
    var displayWidth = screenWidth;
    var displayHeight = screenHeight;
    var stageWidth = contentWidth;
    var stageHeight = contentHeight;
    var scaleX = (screenWidth / stageWidth) || 0;
    var scaleY = (screenHeight / stageHeight) || 0;
    switch (scaleMode) {
        case 'showAll':
            if (scaleX > scaleY) {
                displayWidth = Math.round(stageWidth * scaleY);
            }
            else {
                displayHeight = Math.round(stageHeight * scaleX);
            }
            break;
        case 'cover':
            if (scaleX > scaleY) {
                displayHeight = Math.round(stageHeight * scaleX);
            }
            else {
                displayWidth = Math.round(stageWidth * scaleY);
            }
            break;
        case 'contain':
            if (scaleX > scaleY) {
                stageWidth = Math.round(screenWidth / scaleY);
            }
            else {
                stageHeight = Math.round(screenHeight / scaleX);
            }
            break;
        default:
            stageWidth = screenWidth;
            stageHeight = screenHeight;
            break;
    }
    // 宽高不是2的整数倍会导致图片绘制出现问题
    if (stageWidth % 2 !== 0) {
        stageWidth += 1;
    }
    if (stageHeight % 2 !== 0) {
        stageHeight += 1;
    }
    if (displayWidth % 2 !== 0) {
        displayWidth += 1;
    }
    if (displayHeight % 2 !== 0) {
        displayHeight += 1;
    }
    return {
        stageWidth: stageWidth,
        stageHeight: stageHeight,
        displayWidth: displayWidth,
        displayHeight: displayHeight,
    };
}
function getBoundingClientRect(dom) {
    if (dom === null) {
        throw new Error("Error No find canvas parent dom");
    }
    var rect = {};
    rect.width = dom.offsetWidth;
    rect.height = dom.offsetHeight;
    return rect;
}
/**
 * @private
 *
 * 更新播放器视口尺寸
 *
 * noScale 不对内容进行任何缩放，保持原始的1:1比例。如果播放器窗口比内容小，则可能进行一些裁切。
 *
 * showAll 非溢出居中，显示全部内容。水平或垂直“两侧”可能会不够宽而留有黑边。
 *
 * contain 非溢出，显示全部内容，水平或垂直“一侧”方向有黑边。
 *
 * cover 溢出居中，某些部分也许无法显示在播放器视口。
 */
// eslint-disable-next-line max-len
function calculateUpdatePlayerSize(player, canvas, stage, scaleMode, canvasScaleFactor, isWebGl) {
    if (canvasScaleFactor === void 0) { canvasScaleFactor = 1; }
    if (isWebGl === void 0) { isWebGl = true; }
    var top = 0;
    var clientRect = getBoundingClientRect(player);
    var screenWidth = clientRect.width;
    var screenHeight = clientRect.height;
    var stageSize = calculateStageSize(scaleMode, screenWidth, screenHeight, stage.width || canvas.width, stage.height || canvas.height);
    var stageWidth = stageSize.stageWidth;
    var stageHeight = stageSize.stageHeight;
    var displayWidth = stageSize.displayWidth;
    var displayHeight = stageSize.displayHeight;
    if (canvas.style.transformOrigin) {
        canvas.style.transformOrigin = '0% 0% 0px';
    }
    else {
        canvas.style.webkitTransformOrigin = '0% 0% 0px';
    }
    if (canvas.width !== stageWidth) {
        canvas.width = stageWidth;
    }
    if (canvas.height !== stageHeight) {
        canvas.height = stageHeight;
    }
    var rotation = 0;
    canvas.style.top = top + ((screenHeight - displayHeight) / 2) + "px";
    canvas.style.left = (screenWidth - displayWidth) / 2 + "px";
    var scalex = displayWidth / stageWidth;
    var scaley = displayHeight / stageHeight;
    var canvasScaleX = scalex * canvasScaleFactor;
    var canvasScaleY = scaley * canvasScaleFactor;
    if (!isWebGl) {
        canvasScaleX = Math.ceil(canvasScaleX);
        canvasScaleY = Math.ceil(canvasScaleY);
    }
    var m = new vf.Matrix();
    m.identity();
    m.scale(scalex / canvasScaleX, scaley / canvasScaleY);
    m.rotate(rotation * Math.PI / 180);
    canvas.style.position = 'absolute';
    if (canvas.style.transform) {
        canvas.style.transform = "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + m.tx + "," + m.ty + ")";
    }
    else {
        canvas.style.webkitTransform = "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + m.tx + "," + m.ty + ")";
    }
    canvas.width = stageWidth * canvasScaleX;
    canvas.height = stageHeight * canvasScaleY;
    // canvas.style.border = '5px solid red';
    stage.container.hitArea = new vf.Rectangle(0, 0, stageWidth, stageHeight);
    stage.scaleX = canvasScaleX / canvasScaleFactor;
    stage.scaleY = canvasScaleY / canvasScaleFactor;
    return { width: canvas.width, height: canvas.height, scaleX: canvasScaleX, scaleY: canvasScaleY };
}


/***/ }),

/***/ "./packages/player/src/utils/ImportScript.ts":
/*!***************************************************!*\
  !*** ./packages/player/src/utils/ImportScript.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return importScript; });
/* harmony import */ var _getUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getUrl */ "./packages/player/src/utils/getUrl.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

/**
 * 加载script js 或js模块
 * 1. 支持普通的全局js加载，常规script标签方式引入
 * 2. 支持通过 “tsc xxx.ts -m umd” 编译生成的文件动态加载
 *
 * @param url url地址
 * @param moduleName 模块名，可加载umd模块，访问形式为gui.moduleName
 *
 * @example
 * let Cls = await importScript('http://127.0.0.1:5501/dist/test2.js',"Test");
 * let text = new Cls(); //或 let text = new vf.gui.Test();
 *
 */
function importScript(url, cdns, moduleName, loadCompleteCallBack) {
    return __awaiter(this, void 0, void 0, function () {
        var gui, errorUrls;
        return __generator(this, function (_a) {
            gui = vf.gui;
            if (moduleName && gui[moduleName]) {
                return [2 /*return*/, gui[moduleName]];
            }
            errorUrls = [];
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var errorLoadCount = 0;
                    var loadScript = function (index) {
                        var s = document.createElement('script');
                        s.async = false;
                        s.src = index === 0 ? url : Object(_getUrl__WEBPACK_IMPORTED_MODULE_0__["getUrl"])(url, '', cdns, index - 1);
                        s.addEventListener('load', loadComplete, false);
                        s.addEventListener('error', loadError, false);
                        document.body.appendChild(s);
                    };
                    var loadComplete = function (e) {
                        removeEvent(this);
                        if (loadCompleteCallBack) {
                            loadCompleteCallBack();
                        }
                        if (moduleName) {
                            if (gui.module && gui.module.hasOwnProperty(moduleName)) {
                                gui[moduleName] = gui.module[moduleName];
                                gui.module = null;
                                return resolve(gui[moduleName]);
                            }
                            // eslint-disable-next-line no-console
                            console.log("[VF LOG]error gui module (" + moduleName + ") load failed");
                            return resolve(false);
                        }
                        resolve(true);
                    };
                    var loadError = function (e) {
                        removeEvent(this);
                        if (errorLoadCount > 3) {
                            reject({ code: '404', level: "error" /* ERROR */, data: [errorUrls.join('\n')] });
                        }
                        else {
                            if (errorUrls.indexOf(this.src) === -1) {
                                errorUrls.push(this.src);
                            }
                            loadScript(1);
                            errorLoadCount++;
                        }
                    };
                    var removeEvent = function (thisObj) {
                        thisObj.parentNode.removeChild(thisObj);
                        thisObj.removeEventListener('load', loadComplete, false);
                        thisObj.removeEventListener('error', loadError, false);
                    };
                    loadScript(0);
                })];
        });
    });
}


/***/ }),

/***/ "./packages/player/src/utils/Trace.ts":
/*!********************************************!*\
  !*** ./packages/player/src/utils/Trace.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trace; });
function trace() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var title = '[VF LOG]';
    switch (args.length) {
        // tslint:disable-next-line: no-console
        case 1: return console.log(title, args[0]);
        // tslint:disable-next-line: no-console
        case 2: return console.log(title, args[0], args[1]);
        // tslint:disable-next-line: no-console
        case 3: return console.log(title, args[0], args[1], args[2]);
        // tslint:disable-next-line: no-console
        case 4: return console.log(title, args[0], args[1], args[2], args[3]);
        // tslint:disable-next-line: no-console
        case 5: return console.log(title, args[0], args[1], args[2], args[3], args[4]);
        // tslint:disable-next-line: no-console
        case 6: return console.log(title, args[0], args[1], args[2], args[3], args[4], args[5]);
    }
}
//
// export default class Trace {
//     public static NAME		    :string = 'Trace';
//     public static VERSION		:string = '1.0.0';
//
//     // public static ignoreStatus		:boolean = true;
//     // public static secure			:boolean = false;
//     // public static secureDomain		:string  = '*';
//     // public static allowLog			:boolean = true;
//     // public static allowAdvancedTrace:boolean = true;
//     //
//     // public static DEFAULT_COLOR	:number	= 6710886;
//     // public static RED			:number = 0xE40D0D;
//     // public static ORANGE		:number = 0xFF6600;
//     // public static GREEN			:number = 0x4FE10F;
//     // public static BLUE			:number = 0x118EE6;
//     // public static PINK			:number = 0xE40DE4;
//     // public static YELLOW		:number = 0xE9E610;
//     // public static LIGHT_BLUE	:number = 0x15E0DE;
//     // public static START_TIME    :number = Date.now();
//
//     public static logAdvancedTrace  :boolean = false;
//
//     /**
//      * 可以通过属性设置功能开关：
//      *
//      * - 输出堆栈调用跟踪日志（Trace.logAdvancedTrace = true;）
//      *
//      * 使用示例：
//      * trace("year={}, month={}, day={}", 2014, 9, 5); // [VF LOG] year=2014 month=9 day=5
//      * trace(Object); // [VF LOG] {"a":"aa", "b":"bb", ...}
//      * trace(Array); // [VF LOG] [0, 1, 2, ...]
//      * trace("test message", 0xFF6600, "LOGO"); // [LOGO LOG] test message
//      * trace("test1", "test2", 0xFF6600, "test3", "CORE"); // [CORE LOG] test1 test2 test3
//      */
//     public static log(any: any, ...args: any[]): void {
//         let _msg: string = '';
//         let _color: number = Trace.DEFAULT_COLOR;
//         let _logo: string = 'VF';
//
//         if(typeof any === 'object') {
//             try {
//                 _msg = JSON.stringify(any);
//                if(_msg === '{}') {
//                    _msg = JSON.stringify((<any>Object).fromEntries(any.entries()));
//                }
//             }
//             catch (err) {
//                  return console.log(err);
//             }
//         }
//         else {
//             _msg = String(any);
//         }
//
//         if(args.length) {
//             let placeholder: string = '{}';
//             let pIndex: number = 0;
//             let arg: string = '';
//             let i: number = 0;
//
//             while ((pIndex = _msg.indexOf(placeholder, pIndex)) != -1)
//             {
//                 arg = String(args.shift());
//                 _msg = _msg.substring(0, pIndex) + arg + _msg.substring(pIndex + 2);
//                 pIndex += arg.length;
//             }
//
//             while (i<args.length)
//             {
//                 let _type: string = typeof args[i];
//                 if (_type === "number" && args[i].toString(16).length == 6)
//                 {
//                     _color = args[i];
//                     i++;
//                     continue;
//                 }
//
//                 if (_type === "string" && args[i].length<=5)
//                 {
//                     var re: RegExp = /^[A-Z]+[A-Z0-9]*$/;
//                     if (re.test(args[i]))
//                     {
//                         _logo = args[i];
//                         i++;
//                         continue;
//                     }
//                 }
//                 _msg += " " + String(args[i]);
//                 i++;
//             }
//
//         }
//
//         if(_logo || Trace.logAdvancedTrace) {
//             _msg = `[${(_logo ? (_logo + ' LOG') : '')}${Trace.logAdvancedTrace?Trace.wrapMessage():''}] ` + _msg;
//         }
//         /* mark：颜色看需求再加...
//         let style = [
//             'background: linear-gradient(#D33106, #571402)'
//             , 'border: 1px solid #3E0E02'
//             , 'color: white'
//             , 'display: block'
//             , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
//             , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
//             , 'line-height: 40px'
//             , 'text-align: center'
//             , 'font-weight: bold'
//         ].join(';');
//         // console.log('%c test message!', style); */
//         Trace.logAdvancedTrace?console.trace(_msg):console.log(_msg);
//     }
//
//     private static wrapMessage(allowAdvancedTrace: boolean = true): string {
//         let date: Date = new Date();
//         let time: string = String('00' + date.getHours()).substr(-2) + ':' +
//             String('00' + date.getMinutes()).substr(-2) + ':' +
//             String('00' + date.getSeconds()).substr(-2) + '.' +
//             String('000' + date.getUTCMilliseconds()).substr(-3);
//         let str: string = '->' + getTimer(Trace.START_TIME) + ' ' + time;
//
//         // ...
//
//         return str;
//     }
// }
//(<any>window).trace = trace;


/***/ }),

/***/ "./packages/player/src/utils/VFUtil.ts":
/*!*********************************************!*\
  !*** ./packages/player/src/utils/VFUtil.ts ***!
  \*********************************************/
/*! exports provided: getComponentOrChild, getTargetComponent, getCurveProgress, applyTransition, renderTexture, getCanvasColor, webglDebug, isObject, isNumber, isString, isBoolean, isArray, stringFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComponentOrChild", function() { return getComponentOrChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTargetComponent", function() { return getTargetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurveProgress", function() { return getCurveProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyTransition", function() { return applyTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTexture", function() { return renderTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCanvasColor", function() { return getCanvasColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webglDebug", function() { return webglDebug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringFormat", function() { return stringFormat; });
/* harmony import */ var _core_model_IVFData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/model/IVFData */ "./packages/player/src/core/model/IVFData.ts");
/* harmony import */ var _display_VFComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/VFComponent */ "./packages/player/src/display/VFComponent.ts");
/* harmony import */ var _core_transition_Tranistion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/transition/Tranistion */ "./packages/player/src/core/transition/Tranistion.ts");
/* eslint-disable no-mixed-operators */


// import { ITransition } from '../core/transition/ITransition';
// import { CrossFadeFilter } from '../core/transition/filters/CrossFadeFilter';
// import { CircleFadeFilter } from '../core/transition/filters/CircleFadeFilter';
// import { CrossZoomFilter } from '../core/transition/filters/CrossZoomFilter';
// import { DoomScreenFilter } from '../core/transition/filters/DoomScreenFilter';
// import { HeartWipeFilter } from '../core/transition/filters/HeartWipeFilter';
// import { LinearBlurFilter } from '../core/transition/filters/LinearBlurFilter';
// import { PageCurlFilter } from '../core/transition/filters/PageCurlFilter';
// import { WindFilter } from '../core/transition/filters/WindFilter';
// import { ToTearFilter } from '../core/transition/filters/ToTearFilter';
// import { PageFlipLeftFilter } from '../core/transition/filters/PageFlipLeftFilter';
// import { PageFlipRightFilter } from '../core/transition/filters/PageFlipRightFilter';

/**
 * 获取从父级开始的对象
 */
function getParentByTargetComponent(component, targets) {
    var com = component;
    while (targets.length > 0) {
        var childId = targets.shift();
        if (com && com instanceof _display_VFComponent__WEBPACK_IMPORTED_MODULE_1__["VFComponent"] && childId) {
            com = com.getChildById(childId);
        }
        else {
            return undefined;
        }
    }
    return com;
}
/**
 * 获取从舞台顶级开始的对象，请标注targets的数组首位为-1
 * @param component
 * @param targets
 */
function getRootByTargetComponent(component, targets) {
    targets.shift(); // type
    if (!component.vfStage) {
        return undefined;
    }
    var curScene = component.vfStage.getCurScene();
    var curCom;
    var rootComID = targets.shift();
    if (!curScene) {
        return undefined;
    }
    for (var i = 0, len = curScene.uiChildren.length; i < len; i++) {
        curCom = curScene.uiChildren[i];
        if (curCom instanceof _display_VFComponent__WEBPACK_IMPORTED_MODULE_1__["VFComponent"] && curCom.id === rootComID) {
            break;
        }
    }
    if (curCom === undefined) {
        return undefined;
    }
    return getParentByTargetComponent(curCom, targets);
}
// eslint-disable-next-line max-len
function getComponentOrChild(component, targetData) {
    if (!targetData) {
        return component;
    }
    else if (targetData.length <= 0) {
        return component;
    }
    var targets = targetData.concat();
    if (targets[0] === '-1') {
        // 从顶级开始
        return getRootByTargetComponent(component, targets);
    }
    // 从父级开始
    return getParentByTargetComponent(component, targets);
}
function getTargetComponent(component, targetData) {
    // 支持从变量，属性，数组，参数中获取 组件
    if (component && Array.isArray(targetData) && targetData.length > 1) {
        if (targetData[0] === _core_model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].VARIABLE
            || targetData[0] === _core_model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].PROPERTY
            || targetData[0] === _core_model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].ARRAY_VALUE
            || targetData[0] === _core_model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].PARAM_VALUE
            || targetData[0] === _core_model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].OBJECT_VALUE
            || targetData[0] === _core_model_IVFData__WEBPACK_IMPORTED_MODULE_0__["ExpressItemType"].COMPONENT) {
            var vfStage = component.vfStage;
            if (vfStage && vfStage.variableManager) {
                var variableManager = vfStage.variableManager;
                var comp = variableManager.getExpressItemValue(component, targetData);
                if (comp && comp instanceof vf.gui.DisplayObject) {
                    return comp;
                }
            }
        }
    }
    return getComponentOrChild(component, targetData);
}
function getCurveProgress(type, pos) {
    var s = 0;
    switch (type) {
        case 0 /* None */:
            return 0;
        case 1 /* Linear */:
            return pos;
        case 2 /* EaseOutQuad */:
            return -(Math.pow((pos - 1), 2) - 1);
        case 3 /* EaseInQuad */:
            return Math.pow(pos, 2);
        case 4 /* EaseInOutQuad */:
            if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 2);
            }
            return -0.5 * ((pos -= 2) * pos - 2);
        case 5 /* EaseInCubic */:
            return Math.pow(pos, 3);
        case 6 /* EaseOutCubic */:
            return (Math.pow((pos - 1), 3) + 1);
        case 7 /* EaseInOutCubic */:
            if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 3);
            }
            return 0.5 * (Math.pow((pos - 2), 3) + 2);
        case 8 /* EaseInQuart */:
            return Math.pow(pos, 3);
        case 9 /* EaseOutQuart */:
            return -(Math.pow((pos - 1), 4) - 1);
        case 10 /* EaseInOutQuart */:
            if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 4);
            }
            return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
        case 11 /* EaseInQuint */:
            return Math.pow(pos, 5);
        case 12 /* EaseOutQuint */:
            return (Math.pow((pos - 1), 5) + 1);
        case 13 /* EaseInOutQuint */:
            if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 5);
            }
            return 0.5 * (Math.pow((pos - 2), 5) + 2);
        case 14 /* EaseInSine */:
            return -Math.cos(pos * (Math.PI / 2)) + 1;
        case 15 /* EaseOutSine */:
            return Math.sin(pos * (Math.PI / 2));
        case 16 /* EaseInOutSine */:
            return (-0.5 * (Math.cos(Math.PI * pos) - 1));
        case 17 /* EaseInExpo */:
            return (pos === 0) ? 0 : Math.pow(2, 10 * (pos - 1));
        case 18 /* EaseOutExpo */:
            return (pos === 1) ? 1 : -Math.pow(2, -10 * pos) + 1;
        case 19 /* EaseInOutExpo */:
            if (pos === 0) {
                return 0;
            }
            if (pos === 1) {
                return 1;
            }
            if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(2, 10 * (pos - 1));
            }
            return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
        case 20 /* EaseInCirc */:
            return -(Math.sqrt(1 - (pos * pos)) - 1);
        case 21 /* EaseOutCirc */:
            return Math.sqrt(1 - Math.pow((pos - 1), 2));
        case 22 /* EaseInOutCirc */:
            if ((pos /= 0.5) < 1) {
                return -0.5 * (Math.sqrt(1 - pos * pos) - 1);
            }
            return 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);
        case 23 /* EaseOutBounce */:
            if ((pos) < (1 / 2.75)) {
                return (7.5625 * pos * pos);
            }
            else if (pos < (2 / 2.75)) {
                return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
            }
            else if (pos < (2.5 / 2.75)) {
                return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
            }
            return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
        case 24 /* EaseInBack */:
            s = 1.70158;
            return (pos) * pos * ((s + 1) * pos - s);
        case 25 /* EaseOutBack */:
            s = 1.70158;
            return (pos = pos - 1) * pos * ((s + 1) * pos + s) + 1;
        case 26 /* EaseInOutBack */:
            s = 1.70158;
            if ((pos /= 0.5) < 1) {
                return 0.5 * (pos * pos * (((s *= (1.525)) + 1) * pos - s));
            }
            return 0.5 * ((pos -= 2) * pos * (((s *= (1.525)) + 1) * pos + s) + 2);
        case 27 /* Elastic */:
        case 28 /* EaseOutElastic */:
            return -1 * Math.pow(4, -8 * pos) * Math.sin((pos * 6 - 1) * (2 * Math.PI) / 2) + 1;
        case 29 /* EaseOutElasticTmp */:
            return -1 * Math.pow(6, -6 * pos) * Math.sin((pos * 6 - 1) * (2 * Math.PI) / 2) + 1;
        case 30 /* SwingFromTo */:
            s = 1.70158;
            return ((pos /= 0.5) < 1) ? 0.5 * (pos * pos * (((s *= (1.525)) + 1) * pos - s))
                : 0.5 * ((pos -= 2) * pos * (((s *= (1.525)) + 1) * pos + s) + 2);
        case 31 /* SwingFrom */:
            s = 1.70158;
            return pos * pos * ((s + 1) * pos - s);
        case 32 /* SwingTo */:
            s = 1.70158;
            return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
        case 33 /* Bounce */:
            if (pos < (1 / 2.75)) {
                return (7.5625 * pos * pos);
            }
            else if (pos < (2 / 2.75)) {
                return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
            }
            else if (pos < (2.5 / 2.75)) {
                return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
            }
            return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
        case 34 /* BouncePast */:
            if (pos < (1 / 2.75)) {
                return (7.5625 * pos * pos);
            }
            else if (pos < (2 / 2.75)) {
                return 2 - (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
            }
            else if (pos < (2.5 / 2.75)) {
                return 2 - (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
            }
            return 2 - (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
        case 35 /* EaseFromTo */:
            if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 4);
            }
            return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
        case 36 /* EaseFrom */:
            return Math.pow(pos, 4);
        case 37 /* EaseTo */:
            return Math.pow(pos, 0.25);
        case 38 /* Sinusoidal */:
            return (-Math.cos(pos * Math.PI) / 2) + 0.5;
        case 39 /* Reverse */:
            return 1 - pos;
        case 40 /* Wobble */:
            return (-Math.cos(pos * Math.PI * (9 * pos)) / 2) + 0.5;
        case 41 /* Spring */:
            return 1 - (Math.cos(pos * 4.5 * Math.PI) * Math.exp(-pos * 6));
        default:
            return pos;
    }
}
function applyTransition(vfStage, prevTexture, data) {
    var transition = new _core_transition_Tranistion__WEBPACK_IMPORTED_MODULE_2__["Transition"](vfStage, prevTexture, data);
    transition.run();
}
function renderTexture(app, container, width, height) {
    var w = width || app.view.width;
    var h = height || app.view.height;
    var texture = vf.RenderTexture.create({
        width: w,
        height: h,
        scaleMode: vf.SCALE_MODES.LINEAR,
    });
    app.renderer.render(container, texture);
    return texture;
}
function getCanvasColor(app, container, x, y) {
    // const canvas = app.view;
    // console.log('canvas', canvas)
    // const ctx = canvas.getContext('2d');
    // console.log('2d', ctx)
    // const c = ctx.getImageData(x, y, 1, 1).data;
    // return c;
    var texture = vf.RenderTexture.create({
        width: 1,
        height: 1,
        scaleMode: vf.SCALE_MODES.LINEAR,
    });
    app.renderer.render(container, texture);
    var pixels = app.renderer.extract.pixels(texture);
    return pixels;
}
function webglDebug(app, container) {
    var c = getCanvasColor(app, container, 0, 0);
    // eslint-disable-next-line no-console
    console.log(' canvas 0,0, color:', 'r:', c[0] / 255, 'g:', c[1], 'b:', c[2], c);
}
function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}
function isNumber(obj) {
    return typeof obj === 'number' && !isNaN(obj);
}
function isString(obj) {
    return typeof obj === 'string';
}
function isBoolean(obj) {
    return typeof obj === 'boolean';
}
function isArray(obj) {
    return Array.isArray(obj);
}
/**
 *	 按指定格式替换字符串
* @param str 原字符串 var str:string="a{0}c{1}e";
* @param rest 替换参数 stringFormat(str,"b","d")
* @return
*
*/
function stringFormat(str) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    if (str === null || str === undefined)
        return '';
    if (rest === undefined)
        return str;
    var len = rest.length;
    var args;
    if (len === 1 && Array.isArray(rest[0])) {
        args = rest[0];
        len = args.length;
    }
    else {
        args = rest;
    }
    for (var i = 0; i < len; i++) {
        str = str.replace(new RegExp("\\${" + i + "\\}", 'g'), args[i]);
    }
    return str;
}


/***/ }),

/***/ "./packages/player/src/utils/base64toBlob.ts":
/*!***************************************************!*\
  !*** ./packages/player/src/utils/base64toBlob.ts ***!
  \***************************************************/
/*! exports provided: dataURLtoBlob, getObjectURL, compatible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataURLtoBlob", function() { return dataURLtoBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectURL", function() { return getObjectURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compatible", function() { return compatible; });
function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(',');
    var mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
}
function getObjectURL(base64) {
    var data = URL.createObjectURL(dataURLtoBlob(base64));
    return data;
}
function compatible(base64) {
    if (vf.utils.getSystemInfo().os.name === 'iOS') {
        var osVersion = parseFloat(vf.utils.getSystemInfo().os.version);
        if (osVersion < 9) {
            return getObjectURL(base64);
        }
    }
    return base64;
}


/***/ }),

/***/ "./packages/player/src/utils/getFileExtension.ts":
/*!*******************************************************!*\
  !*** ./packages/player/src/utils/getFileExtension.ts ***!
  \*******************************************************/
/*! exports provided: getFileExtension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileExtension", function() { return getFileExtension; });
/**
 * 获取加载文件的扩展名
 */
function getFileExtension(url) {
    var isDataUrl = url.indexOf('data:') === 0;
    var ext = '';
    if (isDataUrl) {
        var slashIndex = url.indexOf('/');
        ext = url.substring(slashIndex + 1, url.indexOf(';', slashIndex));
    }
    else {
        var queryStart = url.indexOf('?');
        var hashStart = url.indexOf('#');
        var index = Math.min(queryStart > -1 ? queryStart : url.length, hashStart > -1 ? hashStart : url.length);
        url = url.substring(0, index);
        ext = url.substring(url.lastIndexOf('.') + 1);
    }
    return ext.toLowerCase();
}


/***/ }),

/***/ "./packages/player/src/utils/getUrl.ts":
/*!*********************************************!*\
  !*** ./packages/player/src/utils/getUrl.ts ***!
  \*********************************************/
/*! exports provided: getCdnUrl, getUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCdnUrl", function() { return getCdnUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrl", function() { return getUrl; });
/* harmony import */ var _getFileExtension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFileExtension */ "./packages/player/src/utils/getFileExtension.ts");
/* harmony import */ var _assets_Assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/Assets */ "./packages/assets/Assets.ts");


function getCdnUrl(url, cdns, index) {
    if (index === void 0) { index = 0; }
    if (url.indexOf('data:') === 0) {
        return url;
    }
    var type = Object(_assets_Assets__WEBPACK_IMPORTED_MODULE_1__["getAssetType"])(Object(_getFileExtension__WEBPACK_IMPORTED_MODULE_0__["getFileExtension"])(url));
    var cdn;
    switch (type) {
        case 4 /* Image */:
            cdn = cdns.image;
            break;
        case 5 /* Audio */:
        case 6 /* Video */:
            cdn = cdns.media;
            break;
        default:
            cdn = cdns.default;
    }
    cdn = cdn[Math.max(index, cdn.length - 1) % cdn.length];
    if (url.indexOf('http') !== -1 || url.indexOf('//') === 0) {
        cdn += url.substr(url.indexOf('/', url.indexOf('.')));
    }
    else {
        cdn += url;
    }
    return cdn;
}
function getUrl(url, baseUrl, cdns, index) {
    if (baseUrl === void 0) { baseUrl = ''; }
    if (index === void 0) { index = 0; }
    if (baseUrl) {
        if (url.indexOf('http') === -1 && url.indexOf('//') === -1) {
            url = baseUrl + url;
        }
    }
    else if (cdns) {
        url = getCdnUrl(url, cdns, index);
    }
    else {
        // 根据index.json的路径选择host，同时判断是否本地数据
    }
    return url;
}


/***/ }),

/***/ "./packages/player/src/utils/readFileSync.ts":
/*!***************************************************!*\
  !*** ./packages/player/src/utils/readFileSync.ts ***!
  \***************************************************/
/*! exports provided: readFileSyncExt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readFileSyncExt", function() { return readFileSyncExt; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * 读取文件
 * @param url 文件路径
 * @param cdns  CDN路径 ，如果设置CDN，最终的地址为 cdn + url
 * @param options 选项
 * @param listener 可选监听
 * @example
 * const data = await readFileSyncExt('assets/xxx.mp3', []).catch(value=>{console.log(value)});
 */
// eslint-disable-next-line max-len
function readFileSyncExt(url, cdns, options, listener) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var err, _i, cdns_1, value, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(cdns.length === 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, vf.utils.readFileSync(url, options, listener)];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    _i = 0, cdns_1 = cdns;
                    _a.label = 3;
                case 3:
                    if (!(_i < cdns_1.length)) return [3 /*break*/, 6];
                    value = cdns_1[_i];
                    return [4 /*yield*/, vf.utils.readFileSync((value || '') + url, options, listener).catch(function (error) {
                            err = error;
                        })];
                case 4:
                    data = _a.sent();
                    if (data) {
                        return [2 /*return*/, data];
                    }
                    _a.label = 5;
                case 5:
                    _i++;
                    return [3 /*break*/, 3];
                case 6: return [2 /*return*/, new Promise(function (resolve, reject) { reject(err); })];
            }
        });
    });
}


/***/ })

/******/ });
});
//# sourceMappingURL=player.js.map