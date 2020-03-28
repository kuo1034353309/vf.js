import { EventEmitter } from 'eventemitter3';
export default class HttpRequest extends EventEmitter  {
    private _contentType: string;
    private _data: any;
    private _method: string;
    private _requestHeaders: Array<object>;
    private _url: string;

    public constructor(url: string) {
        super();
        this._contentType = 'application/x-www-form-urlencoded';
        this._data = null;
        this._method = 'GET';
        this._requestHeaders = [];
        this._url = url;
    }

    /**
     * data 属性中内容的 MIME 内容类型。
     * 发送 POST 请求时，contentType 和 data 属性的值必须正确对应。contentType 属性的值表示服务器如何解释 data 属性的值。
     * 设置范围参考：http://www.iana.org/assignments/media-types/media-types.xhtml
     *
     * @returns {*|string}
     */

    public get contentType(): string {
        return this._contentType
    }

    // noinspection JSAnnotator
    public set contentType(value: string) {
        this._contentType = value
    }

    /**
     * 一个对象，它包含将随 URL 请求一起传输的数据。
     * 根据contentType默认值，该对象默认是FormData对象，请参考：https://developer.mozilla.org/en-US/docs/Web/API/FormData
     *
     * @returns {*|null}
     */
    public get data(): any {
        return this._data
    }

    // noinspection JSAnnotator
    public set data(obj: any) {
        let temp = null
        if (this._method === 'POST' && obj) {
            temp = new FormData()
            for (let key in obj) {
                temp.append(key, obj[key])
            }
        }
        this._data = temp
    }

    /**
     * 控制 HTTP 式提交方法。
     *
     * @returns {*|string}
     */
    public get method(): string {
        return this._method
    }

    // noinspection JSAnnotator
    public set method(value: string) {
        this._method = value
    }

    /**
     * 要追加到 HTTP 请求的 HTTP 请求标头的数组。该数组由 { name:'token', value:'8088' } 对象组成。数组中的每一对象必须是包含一个名称字符串和一个值字符串的对象。
     *
     * @returns {*|Array}
     */
    public get requestHeaders(): Array<object> {
        return this._requestHeaders
    }

    // noinspection JSAnnotator
    public set requestHeaders(value: Array<object>) {
        this._requestHeaders = value
    }

    /**
     * 所请求的 URL。
     *
     * @returns {*|null}
     */
    public get url(): string {
        return this._url
    }

    // noinspection JSAnnotator
    public set url(value: string) {
        this._url = value
    }
}