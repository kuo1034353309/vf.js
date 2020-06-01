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
import BaseInfo from './BaseInfo';
import {CDN, ScaleMode} from './model/IVFData';
import {IVFOptions} from '../IVFEngine';
import I18N from './I18N';

export default class Config extends BaseInfo {

    private _container: HTMLElement;

    public readonly uuid: number;

    private _id: string;

    private _src?: string;

    private _play: boolean;

    private _loop: boolean;

    private _menu: boolean;

    private _scaleMode?: ScaleMode;

    private _align: string;

    private _wmode: string;

    private _bgcolor?: string;

    private _vfvars: any = {};
    
    private _plugs: any[] = [];

    private _frameRate: number;

    private _width: number;

    private _height: number;

    private _orientation: string;

    private _maxTouches: number;

    private _showFPS: boolean;

    private _showLog: boolean;

    private _logAdvancedTrace: boolean;

    private _conversionData: any;

    private _debug: boolean;

    private _language: string;

    private _i18n: I18N;

    public cdns: CDN;

    public realFPS: boolean = true;

    constructor(options: IVFOptions) {
        super();
        this._container = options.container;
        this.uuid = vf.utils.uid();
        this._id = options.id || this.createRandomId();
        this._src = options.src || undefined;
        this._play = options.play === undefined ? true : Boolean(options.play);
        this._loop = options.loop === undefined ? false : Boolean(options.loop);
        this._menu = options.menu === undefined ? true : Boolean(options.menu);
        this._scaleMode = options.scaleMode || undefined;
        this._align = options.align || 'tl';
        this._wmode = options.wmode || 'transparent';
        this._bgcolor = options.bgcolor;
        this._vfvars = options.vfvars || {};
        this._frameRate = options.frameRate || 30;
        this._width = options.width || 320;
        this._height = options.height || 240;
        this._orientation = options.orientation || 'auto';
        this._maxTouches = options.maxTouches || 2;
        this._showFPS = options.showFPS === undefined ? true : Boolean(options.showFPS);
        this._showLog = options.showLog === undefined ? true : Boolean(options.showLog);
        this._conversionData = options.conversionData;
        this._debug = options.debug || false; 
        this._plugs = options.plugs || this._plugs;
        this._logAdvancedTrace = options.logAdvancedTrace || false;
        this.cdns = Array.isArray(options.vfvars.cdns) ? {default:options.vfvars.cdns} : options.vfvars.cdns;
        if(this.cdns.image === undefined){
            this.cdns.image = this.cdns.default.concat();
        }
        if(this.cdns.media === undefined){
            this.cdns.media = this.cdns.default.concat();
        }
        if(this.cdns.wx === undefined){
            this.cdns.wx = this.cdns.default.concat();
        }
        this._language = options.language || vf.utils.getSystemInfo().language;
        this._i18n = new I18N(this._language);
        this.realFPS = options.realFPS === false ? false : true;
    }

    public get container(): HTMLElement {
        return this._container;
    }

    public set container(value: HTMLElement) {
        if (this._container === value) { return; }
        this._container = value;
        this.propertyChange('container');
    }

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        if (this._id === value) { return; }
        this._id = value;
        this.propertyChange('id');
    }

    public get src() {
        return this._src;
    }

    public set src(value) {
        if (this._src === value) { return; }
        this._src = value;
        this.propertyChange('src');
    }

    public get play(): boolean {
        return this._play;
    }

    public set play(value: boolean) {
        if (this._play === value) { return; }
        this._play = value;
        this.propertyChange('play');
    }

    public get loop(): boolean {
        return this._loop;
    }

    public set loop(value: boolean) {
        if (this._loop === value) { return; }
        this._loop = value;
        this.propertyChange('loop');
    }

    public get menu(): boolean {
        return this._menu;
    }

    public set menu(value: boolean) {
        if (this._menu === value) { return; }
        this._menu = value;
        this.propertyChange('menu');
    }

    public get scaleMode() {
        return this._scaleMode;
    }

    public set scaleMode(value) {
        if (this._scaleMode === value) { return; }
        this._scaleMode = value
        this.propertyChange('scaleMode');
    }

    public get align(): string {
        return this._align;
    }

    public set align(value: string) {
        if (this._align === value) { return; }
        this._align = value;
        this.propertyChange('align');
    }

    public get wmode(): string {
        return this._wmode;
    }

    public set wmode(value: string) {
        if (this._wmode === value) { return; }
        this._wmode = value;
        this.propertyChange('wmode');
    }

    public get bgcolor() {
        return this._bgcolor;
    }

    public set bgcolor(value) {
        if (this._bgcolor === value) { return; }
        this._bgcolor = value;
        this.propertyChange('bgcolor');
    }

    /**
     * useNativeAudio : boolean
     * cdns: string[]
     */
    public get vfvars() {
        return this._vfvars;
    }

    public set vfvars(value) {
        // if (_.isEmpty(value)) { return; }
        // if (_.isEqual(this._vfvars, value)) { return; }
        if(this._vfvars === value) { return; }
        this._vfvars = value;
        this.propertyChange('vfvars');
    }

    public get plugs() {
        return this._plugs;
    }
    public set plugs(value) {
        this._plugs = value;
    }

    public get frameRate(): number {
        return this._frameRate;
    }

    public set frameRate(value: number) {
        if (this._frameRate === value) { return; }
        this._frameRate = value;
        this.propertyChange('frameRate');
    }

    public get width(): number {
        return this._width;
    }

    public set width(value: number) {
        if (this._width === value) { return; }
        this._width = value;
        this.propertyChange('width');
    }

    public get height(): number {
        return this._height;
    }

    public set height(value: number) {
        if (this._height === value) { return; }
        this._height = value;
        this.propertyChange('height');
    }

    public get orientation(): string {
        return this._orientation;
    }

    public set orientation(value: string) {
        if (this._orientation === value) { return; }
        this._orientation = value;
        this.propertyChange('orientation');
    }

    public get maxTouches(): number {
        return this._maxTouches;
    }

    public set maxTouches(value: number) {
        if (this._maxTouches === value) { return; }
        this._maxTouches = value;
        this.propertyChange('maxTouches');
    }

    public get showFPS(): boolean {
        return this._showFPS;
    }

    public set showFPS(value: boolean) {
        if (this._showFPS === value) { return; }
        this._showFPS = value;
        this.propertyChange('showFPS');
    }

    public get showLog(): boolean {
        return this._showLog;
    }

    public set showLog(value: boolean) {
        if (this._showLog === value) { return; }
        this._showLog = value;
        this.propertyChange('showLog');
    }

    public set conversionData(value: string) {
        if (this._conversionData === value) { return; }
        this._conversionData = value;
        this.propertyChange('conversionData');
    }
    
    public get conversionData() {
        return this._conversionData;
    }

    public set debug(value: boolean) {
        if (this._debug === value) { return; }
        this._debug = value;
        this.propertyChange('debug');
    }

    public get debug() {
        return this._debug;
    }

    public set logAdvancedTrace(value: boolean) {
        if (this._logAdvancedTrace === value) { return; }
        this._logAdvancedTrace = value;
        this.propertyChange('logAdvancedTrace');
    }

    public get logAdvancedTrace() {
        return this._logAdvancedTrace;
    }

    public get language(): string {
        return this._language;
    }

    public set language(value: string) {
        if (this._language === value) { return; }
        this._language = value;
        this.propertyChange('language');
    }

    public get i18n(): I18N {
        return this._i18n;
    }

    public get info(): object {
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
    }
}
