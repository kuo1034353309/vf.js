/**
 * 文件下载器
 *
 * FileLoader 类提供对大文件下载的低级访问，可在下载过程中暂停/恢复下载，并在网络闪断恢复后自动断点续载。
 * 有关下载进度的通知，通过 bytesLoaded 和 bytesTotal 属性以及已调度的事件可以获取。
 * FileLoader 类允许在完成下载前关闭，已下载文件的内容将作为原始二进制数据提供。
 *
 * @author 8088
 */
import { EventEmitter } from 'eventemitter3';
import LoaderEvent from '../event/LoaderEvent';
import {EventLevel} from '../event/EventLevel';
import LoaderDataFormat from './LoaderDataFormat';
import HttpRequest from './HttpRequest';
import ILoader from './ILoader';

export default class FileLoader extends EventEmitter  implements ILoader {
    private _state: number;
    private _loaded: number;
    private _total: number;
    private _data: any;
    private _dataFormat: string;
    private _timeout: number;
    private _xhr: any;
    private _loader: any;
    private _active_disconnect: boolean;
    private _request?: HttpRequest;

    constructor(request?: HttpRequest) {
        super();
        this._state = 0;
        this._loaded = 0;
        this._total = 0;
        this._data = null;
        this._dataFormat = LoaderDataFormat.BINARY;
        this._timeout = 0;
        this._xhr = null;
        this._loader = null;
        this._active_disconnect = false;
        this._request = request;
        this.initialize();
    }

    /**
     * bytesLoaded
     * 表示加载操作期间到目前为止加载的字节数。
     *
     * @returns {*|uint}
     */
    public get bytesLoaded(): number {
        return this._loaded;
    }

    public set bytesLoaded(value: number) {
        this._loaded = value;
    }

    /**
     * bytesTotal
     * 表示所下载数据中的字节总数。正在进行加载操作时该属性包含 0，完成操作时会填充该属性。另外，丢失的 Content-Length 标题将会导致 bytesTotal 不确定。
     *
     * @returns {*|uint}
     */
    public get bytesTotal(): number {
        return this._total;
    }

    public set bytesTotal(value: number) {
        this._total = value;
    }

    /**
     * data
     * 从加载操作接收的数据。在加载过程中填充该属性。该数据是一个包含原始二进制数据的 ArrayBuffer 对象。
     *
     * @returns {*|arraybuffer}
     */
    public get data(): any {
        return this._data;
    }

    public set data(value: any) {
        this._data = value;
    }

    /**
     * dataFormat
     * 控制是以原始二进制数据 (LoaderDataFormat.BINARY) 接收下载的数据。
     *
     * @returns {*|string}
     */
    public get dataFormat(): string {
        return this._dataFormat;
    }

    public set dataFormat(value: string) {
        if (value !== LoaderDataFormat.BINARY) {
            throw new TypeError(`文件下载仅支持二进制数据下载，如有其他需求请联系作者。`);
        }
    }

    /**
     * timeout
     * 请求超时,时间毫秒(默认0毫秒不计算请求超时) 超时后会抛出TimeoutError
     *
     * @returns {*|int}
     */
    public get timeout(): number {
        return this._timeout;
    }

    // noinspection JSAnnotator
    public set timeout(value: number) {
        // ignore..
        // this._timeout = value
    }

    /**
     * state
     * 只读，返回下载状态。0：连接尚未打开，1：连接已打开，2：请求头部和状态已可获取，3：下载中，4：下载完成。
     *
     * @returns {*|uint}
     */
    public get state(): number {
        return this._state;
    }

    /**
     * 关闭进行中的加载操作
     */
    public close(): void {
        this.abort();
        this.reset();
    }

    /**
     * 暂停下载，可恢复继续下载
     */
    public pause(): void {
        if (this.state !== 3) return;
        this._active_disconnect = true;
        this.abort();
    }

    /**
     * 继续下载
     */
    public resume(): void {
        if (this.state !== 3) return;
        this.slice();
    }

    /**
     * 从指定的 URL 发送和加载数据。
     */
    public load(request?: HttpRequest) {
        if (request) this._request = request;
        if (!this._request) throw Error('未定义HttpRequest请求对象.');
        try {
            // open load
            this._xhr.open(this._request.method, this._request.url, true);
            this._xhr.responseType = 'arraybuffer';
            if (this._request.requestHeaders && this._request.requestHeaders.length) {
                this._request.requestHeaders.map((item: any) => {
                    this._xhr.setRequestHeader(item.name, item.value);
                })
            }
            this._xhr.send(this._request.data)
        } catch (err) {
            throw new TypeError('所传递的请求 HttpRequest 对象或 HttpRequest.url 属性为 null。')
        }
    }

    // Internals
    //

    private initialize() {
        try {
            this._xhr = new XMLHttpRequest();
            this._xhr.addEventListener('loadstart', this.onStart.bind(this), false);
            this._xhr.addEventListener('abort', this.onClose.bind(this), false);
            this._xhr.addEventListener('readystatechange', this.onHTTPStatus.bind(this), false);
            this._xhr.addEventListener('error', this.onError.bind(this), false);
        } catch (err) {
            throw err;
        }
    }

    private reset() {
        this._state = 0;
        this._loaded = 0;
        this._total = 0;
        this._data = null;
        this._dataFormat = LoaderDataFormat.BINARY;
        this._timeout = 0;
        this._xhr = null;
        this._loader = null;
    }

    private abort() {
        this.rline();
        if (this._xhr) {
            this._xhr.abort();
            this._xhr.removeEventListener('loadstart', this.onStart.bind(this), false);
            this._xhr.removeEventListener('abort', this.onClose.bind(this), false);
            this._xhr.removeEventListener('readystatechange', this.onHTTPStatus.bind(this), false);
            this._xhr.removeEventListener('error', this.onError.bind(this), false);
        }

        if (this._loader) {
            this._loader.abort();
            this._loader.removeEventListener('load', this.onComplete.bind(this), false);
            this._loader.removeEventListener('progress', this.onProgress.bind(this), false);
            this._loader.removeEventListener('abort', this.onClose.bind(this), false);
            this._loader.removeEventListener('readystatechange', this.onHTTPStatus.bind(this), false);
        }
    }

    private onStart(evt: any) {
        this._state = 1;
        let _evt = {
            code: LoaderEvent.START,
            level: EventLevel.STATUS,
            target: this,
            message: `FileLoader start load "${this._request && this._request.url}".`
        }
        this.emit(LoaderEvent.START, _evt);
    }

    private onClose(evt: any) {
        if (this._active_disconnect) {
            this._active_disconnect = false;
            return
        }
        let _evt = {
            code: LoaderEvent.CLOSE,
            level: EventLevel.STATUS,
            target: this,
            loaded: this.bytesLoaded,
            total: this.bytesTotal,
            message: `FileLoader is closed has been loaded bytes: ${this.bytesLoaded} / ${this.bytesTotal}.`
        }
        this.emit(LoaderEvent.CLOSE, _evt);
    }

    private onError(evt: any) {
        let _code = 4000;
        let _desc = 'network error';
        let _err = {
            code: _code,
            level: EventLevel.ERROR,
            desc: _desc,
            target: this,
            message: `FileLoader load "${this._request && this._request.url}" failed: #${_code}`
        }
        this.emit(LoaderEvent.ERROR, _err);
    }

    private onLoadend(evt: any) {
        // ignore..
    }

    private onHTTPStatus(evt: any) {
        let xhr = evt.target;
        if (xhr.status === 0) return;
        switch (xhr.readyState) {
            case 2:
                if (this._state < 2) this._state = 2;
                if (xhr.status >= 400) {
                    this.rline();
                    let _code = xhr.status;
                    let _desc = xhr.status >= 500 ? 'server error' : 'request error';
                    let _err = {
                        code: _code,
                        level: EventLevel.ERROR,
                        desc: _desc,
                        target: this,
                        message: `FileLoader state:${this._state} load ${this._request && this._request.url} failed. #${_code}`
                    }
                    this.emit(LoaderEvent.ERROR, _err)
                } else {
                    if (this._state >= 3) return;
                    this.bytesTotal = this._xhr.getResponseHeader('Content-Length');
                    if (!this.bytesTotal) {
                        let _code = 4001;
                        let _desc = 'unable to get file size';
                        let _err = {
                            code: _code,
                            level: EventLevel.ERROR,
                            desc: _desc,
                            target: this,
                            message: `FileLoader load "${this._request && this._request.url}" failed: #${_code}`
                        }
                        this.emit(LoaderEvent.ERROR, _err);
                        return
                    }
                    this._active_disconnect = true;
                    this.abort();
                    this.slice();
                    this.aline();
                }
                break
        }
    }

    private aline() {
        if (this._state !== 3) return
        window.addEventListener('online', this.online.bind(this), false);
        window.addEventListener('offline', this.offline.bind(this), false);
    }

    private rline() {
        window.removeEventListener('online', this.online.bind(this), false);
        window.removeEventListener('offline', this.offline.bind(this), false);
    }

    private slice() {
        if (!this._request) return;
        this._state = 3
        try {
            this._loader = new XMLHttpRequest();
            this._loader.addEventListener('progress', this.onProgress.bind(this), false);
            this._loader.addEventListener('abort', this.onClose.bind(this), false);
            this._loader.addEventListener('load', this.onComplete.bind(this), false);
            this._loader.addEventListener('readystatechange', this.onHTTPStatus.bind(this), false);
            this._loader.open(this._request.method, this._request.url, true);
            this._loader.setRequestHeader('Content-Type', 'application/octet-stream');
            this._loader.setRequestHeader('Range', `bytes=${this.bytesLoaded}-${this.bytesLoaded + 204799}`);
            this._loader.responseType = 'arraybuffer';
            this._loader.send(null)
        } catch (err) {
            throw err
        }
    }

    private onProgress(evt: any) {
        if (this._loader.readyState < 2) return;
        if (this._loader.status >= 400) return;
        let _loaded: number = this.bytesLoaded + evt.loaded;
        let _progress: number = this.bytesTotal ? _loaded / this.bytesTotal : 0;
        let _evt = {
            code: LoaderEvent.PROGRESS,
            level: EventLevel.STATUS,
            target: this,
            loaded: _loaded,
            total: this.bytesTotal,
            progress: _progress,
            message: `FileLoader load progress ${parseInt((_progress * 100).toString())}%（${_loaded}/${this._total}）.`
        }
        this.emit(LoaderEvent.PROGRESS, _evt)
    }

    private onComplete(evt: any) {
        if (this._loader && this._loader.status < 400) {
            let response = this._loader.response;
            let ln = this.bytesLoaded + response.byteLength;
            const temp = new Int8Array(ln);
            if (this.data) temp.set(new Int8Array(this.data), 0);
            temp.set(new Int8Array(response), this.bytesLoaded);

            this.data = temp.buffer;
            this.bytesLoaded = temp.byteLength;

            if (this.bytesLoaded < this.bytesTotal) {
                this.slice();
            } else {
                this._state = 4;
                this.rline();
                let _evt = {
                    code: LoaderEvent.COMPLETE,
                    level: EventLevel.STATUS,
                    target: this,
                    data: this.data,
                    message: `FileLoader load "${this._request && this._request.url}" is completed.`
                }
                this.emit(LoaderEvent.COMPLETE, _evt);
            }
        }
    }

    private online() {
        if (this._state === 3) {
            this.slice();
            let _evt = {
                code: 'online',
                level: EventLevel.STATUS,
                desc: 'network recovery',
                target: this,
                message: `FileLoader loading "${this._request && this._request.url}" continue, network recovery~`
            };
            this.emit('networkState', _evt);
        }
    }

    private offline() {
        let _evt = {
            code: 'offline',
            level: EventLevel.WARNING,
            desc: 'network disconnection',
            target: this,
            message: `FileLoader loading "${this._request && this._request.url}" break, network disconnection!`
        };
        this.emit('networkState', _evt);
    }
}