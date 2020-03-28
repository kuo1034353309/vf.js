/**
 * 承载VF的（运行）系统环境
 *
 * @author 8088
 */
import BaseInfo from "./BaseInfo";
export default class System extends BaseInfo {

    private _pageUrl: string = '';

    private _pageReferrer: string = '';

    private _language: string = '';

    private _resolution: string = '';

    private _ua: string = '';

    private _device: any = {};

    private _os: any = {};

    private _browser: any = {};

    private static instance: System;

    constructor(lock?: ConstructorLock) {
        super();
        if (lock !== ConstructorLock)
        {
            throw new SyntaxError("禁止实例化 System !");
        }
        this.initialize();
    }

    public static getInstance(): System
    {
        if (!System.instance) {
            System.instance = new System(ConstructorLock);
        }
        return System.instance;
    }

    /**
     * userAgent
     * @returns {string}
     */
    public get ua(): string{
        return this._ua;
    }

    /**
     * 设备
     * @returns {Object}
     */
    public get device(): object{
        return this._device;
    }

    /**
     * 系统
     * @returns {Object}
     */
    public get os(): object{
        return this._os;
    }

    /**
     * 浏览器
     * @returns {Object}
     */
    public get browser(): object{
        return this._browser;
    }

    /**
     * 承载VF的页面地址
     * @returns {string}
     */
    public get pageUrl(): string
    {
        return this._pageUrl;
    }

    public set pageUrl(value: string)
    {
        if (value && this._pageUrl != value)
        {
            this._pageUrl = decodeURIComponent(value);

            this.propertyChange('pageUrl');
        }
    }

    /**
     * 载入当前页面的URL
     * @returns {string}
     */
    public get pageReferrer(): string
    {
        return this._pageReferrer;
    }

    public set pageReferrer(value: string)
    {
        if (value && this._pageReferrer != value)
        {
            this._pageReferrer = decodeURIComponent(value);

            this.propertyChange('pageReferrer');
        }
    }

    /**
     * 获取屏幕分辨率
     * @returns {string}
     */
    public get resolution(): string
    {
        return this._resolution;
    }

    /**
     * 获取系统语言
     * @returns {string}
     */
    public get language(): string{
        return this._language;
    }

    public get info(): object {
        return {
            pageUrl: this.pageUrl,
            pageReferrer: this.pageReferrer,
            language: this.language,
            resolution: this.resolution,
            ua: this.ua,
            device: this.device,
            os: this.os,
            browser: this.browser,
        };
    }


    // Internals..
    //

    private initialize() {
        if(screen) {
            this._resolution = screen.width + 'x' + screen.height;
        }
        if(navigator) {
            this._ua = navigator.userAgent;
            this._language = navigator.language;
        }
        if(this._ua) {
            this.checkDevice();
            this.checkBrowser();
        }
        this.pageUrl = document.location.href;
        this.pageReferrer = document.referrer;

        this.output('System Environment：', this.info);
    }

    private checkDevice(){
        this._os.name = navigator.platform;
        if (this._ua.match('Unix')) this._os.name = 'Unix';
        if (this._ua.match('Linux')) this._os.name = 'Linux';
        let match;
        // Apple
        if (this._ua.match('iPhone( Simulator)?;') || this._ua.match('iPad;') || this._ua.match('iPod;') || this._ua.match(/iPhone\s*\d*s?[cp]?;/i)) {
            this._os.name = 'iOS';
            if (match = /OS (.*) like Mac OS X/.exec(this._ua)) {
                this._os.version = match[1].replace(/_/g, '.');
            }
            if (this._ua.match('iPhone Simulator;')) {
                this._device.name = 'iPhone';
                this._device.type = 'emulator';
            } else if (this._ua.match('iPod;')) {
                this._device.name = 'iPod Touch';
                this._device.type = 'media';
            } else if (this._ua.match('iPhone;') || this._ua.match(/iPhone\s*\d*s?[cp]?;/i)) {
                this._device.name = 'iPhone';
                this._device.type = 'mobile';
            } else {
                this._device.name = 'iPad';
                this._device.type = 'tablet';
            }
        }
        else if (this._ua.match('Mac OS X')) {
            this._os.name = 'Mac OS X';
            if (match = /Mac OS X (10[0-9\._]*)/.exec(this._ua)) {
                this._os.version = match[1].replace(/_/g, '.');
            }
            this._device.name = 'Apple Computer';
            this._device.type = 'pc';
        }
        // Microsoft
        if (this._ua.match('Windows')) {
            this._os.name = 'Windows';
            if (match = /Windows NT ([0-9]\.[0-9])/.exec(this._ua)) {
                this._os.version = match[1];
                switch (match[1]) {
                    case '6.2':
                        this._os.version = '8';
                        break;
                    case '6.1':
                        this._os.version = '7';
                        break;
                    case '6.0':
                        this._os.version = 'Vista';
                        break;
                    case '5.2':
                        this._os.version = 'Server 2003';
                        break;
                    case '5.1':
                        this._os.version = 'XP';
                        break;
                    case '5.0':
                        this._os.version = '2000';
                        break;
                    default:
                        this._os.version = 'NT ' + this._os.version;
                }
            }
            this._device.name = 'Windows Computer';
            this._device.type = 'pc';
            if (this._ua.match('WindowsMobile') || this._ua.match('Windows Phone')) {
                this._device.name = 'Windows Phone';
                this._device.type = 'mobile';
                this._os.name = 'Windows Mobile';
                this._os.version = 'x';
            }
            //...
        }
        // Google
        if (this._ua.match('Android')) {
            this._os.name = 'Android';
            if (match = /Android(?: )?(?:AllPhone_|CyanogenMod_)?(?:\/)?v?([0-9.]+)/.exec(this._ua.replace('-update', '.'))) {
                this._os.version = match[1];
            }
            this._device.name = 'Android Device';
            this._device.type = 'mobile';
            if (this._os.version >= 3) this._device.type = 'tablet';
            if (this._os.version >= 4 && this._ua.match('Mobile')) this._device.type = 'mobile';
            //...
        }
        // ..ignore others..
    }

    private checkBrowser(){
        let match;
        if (match = /WebKit\/([0-9.]*)/i.exec(this._ua)) {
            this._browser.name = 'Webkit';
            this._browser.version = match[1];
        }

        if (match = /Browser\/AppleWebKit([0-9.]*)/i.exec(this._ua)) {
            this._browser.name = 'Webkit';
            this._browser.version = match[1];
        }
        if (this._ua.match('Safari')) {
            this._browser.name = 'Safari';
            if (match = /Version\/([0-9\.]+)/.exec(this._ua)) {
                this._browser.version = match[1];
            }
        }
        if (this._ua.match('MSIE')) {
            this._browser.name = 'Internet Explorer';
            if (match = /MSIE ([0-9.]*)/.exec(this._ua)) {
                this._browser.version = match[1];
            }
        }
        if (this._ua.match('Edge')) {
            this._browser.name = 'Edge';
            this._browser.version = 'x';
        }
        if (this._ua.match(/Opera/i)) {
            this._browser.name = 'Opera';
            if (match = /Opera[\/| ]([0-9.]*)/.exec(this._ua)) {
                this._browser.version = match[1];
            }
        }
        if (this._ua.match('Firefox')) {
            this._browser.name = 'Firefox';
            if (match = /Firefox\/([0-9ab.]*)/.exec(this._ua)) {
                this._browser.version = match[1];
            }
        }
        if (match = /(?:Chrome|CrMo|CriOS)\/([0-9.]*)/.exec(this._ua)) {
            this._browser.name = 'Chrome';
            this._browser.version = match[1];
        }
        if (this._ua.match('Chromium')) {
            this._browser.name = 'Chromium';
            if (match = /Chromium\/([0-9.]*)/.exec(this._ua)) {
                this._browser.version = match[1];
            }
        }
        if (this._ua.match('UCWEB')) {
            this._browser.name = 'UC';
            if (match = /UCWEB([0-9]*[.][0-9]*)/.exec(this._ua)) {
                this._browser.version = match[1];
            }
        }
        if (match = /UCBrowser\/([0-9.]*)/.exec(this._ua)) {
            this._browser.name = 'UC';
            this._browser.version = match[1];
        }
        if (match = /(M?QQBrowser)\/([0-9.]*)/.exec(this._ua)) {
            this._browser.name = 'QQ';
            let version = match[2];
            if (version.match(/^[0-9][0-9]$/)) version = version[0] + '.' + version[1];
            this._browser.version = version;
            /*if (!this._os.name && match[1] === 'QQBrowser') {
                this._os.name = 'Windows';
            }*/
        }
        // ..ignore others..
    }
}
class ConstructorLock {};
