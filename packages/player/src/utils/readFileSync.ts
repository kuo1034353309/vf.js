import { EventLevel } from '../event/EventLevel';
import IEvent from '../event/IEvent';

export interface Options {
    timeout?: number;
    responseType?: '' | 'arraybuffer' | 'blob' | 'json' | 'text';
    method?: 'GET' | 'POST';
    errorCount?: number;
}

function parseJson(text: any, result: IEvent): IEvent {
    try {
        result.data = ((typeof text) === 'string') ? JSON.parse(text) : text;

        return result;
    }
    catch (e) {
        result.code = 'S0000';
        result.level = EventLevel.ERROR;
        result.data = e;

        return result;
    }
}

function geXHRtData(target: XMLHttpRequest): IEvent | undefined {
    const xhr = target;

    if (xhr.readyState === 4 && xhr.status >= 400) { return; }

    const msg: IEvent = {
        code: '0',
        level: EventLevel.COMMAND,
        message: undefined,
        data: null,
    };

    try {
        const response = xhr.response || xhr.responseText;

        switch (xhr.responseType) {
            case 'json':
                parseJson(response, msg);
                break;
            default:
                msg.data = response;
        }

        return msg;
    }
    catch (error) {
        msg.code = 'S0002';
        msg.level = EventLevel.ERROR;
        msg.data = `${xhr.responseURL} , ${error}`;

        return msg;
    }
}

// eslint-disable-next-line max-len
function removeEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(xhr: XMLHttpRequest, listener?: Array<[ K, (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any]>): void {
    if (listener) {
        listener.forEach((value) => {
            xhr.removeEventListener(value[0], value[1]);
        });
        listener.length = 0;
    }
    xhr.onload = null;
    xhr.onerror = null;
    xhr.onreadystatechange = null;
}

/**
 * 读取文件
 * @param url 文件路径
 * @param options 文件配置
 * @param listener 监听回调
 */
// eslint-disable-next-line max-len
export default function readFileSync<K extends keyof XMLHttpRequestEventTargetEventMap>(url: string, options: Options = {}, listener?: Array<[ K, (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any]>): Promise < any > {
    return new Promise<any>((resolve, reject) => {
        const errorCount = { cur: 0, max: options.errorCount || 1 };
        const xhr = new XMLHttpRequest();

        const method = options.method || 'GET';

        xhr.timeout = options.timeout || 0;
        xhr.responseType = options.responseType || 'text';

        if (listener) {
            listener.forEach((value) => {
                xhr.addEventListener(value[0], value[1]);
            });
        }

        xhr.onload = (evt: ProgressEvent) => {
            const msg = geXHRtData(evt.target as XMLHttpRequest);

            if (msg) {
                if (msg.level === EventLevel.ERROR) {
                    return reject(msg);
                }
                removeEventListener(xhr, listener);

                return resolve(msg.data);
            }
        };

        xhr.onreadystatechange = (evt: Event) => {
            const xhr = evt.currentTarget as XMLHttpRequest;

            if ((xhr.readyState === 2 || xhr.readyState === 4) && xhr.status >= 400) {
                if (errorCount.cur >= errorCount.max) {
                    removeEventListener(xhr, listener);

                    return reject({ code: 'S0001', level: EventLevel.ERROR, data: [xhr.responseURL || url, xhr.status] });
                }
                errorCount.cur++;
                xhr.abort();
                xhr.open(method, url, true);
                xhr.send();
            }
        };

        xhr.onerror = (evt: Event) => {
            const xhr = evt.currentTarget as XMLHttpRequest;

            if (errorCount.cur >= errorCount.max) {
                removeEventListener(xhr, listener);

                return reject({ code: 'S0001', level: EventLevel.ERROR, data: [xhr.responseURL || url, xhr.status] });
            }
            errorCount.cur++;
            xhr.abort();
            xhr.open(method, url, true);
            xhr.send();
        };

        xhr.open(method, url, true);
        xhr.send();
    });
}

/**
 * 赌球文件
 * @param url 文件路径
 * @param cdns  CDN路径 ，如果设置CDN，最终的地址为 cdn + url
 * @param options 选项
 * @param listener 可选监听
 * @example
 * const data = await readFileSyncExt('assets/xxx.mp3', []).catch(value=>{console.log(value)});
 */
// eslint-disable-next-line max-len
export async function readFileSyncExt<K extends keyof XMLHttpRequestEventTargetEventMap>(url: string, cdns: string[], options: Options = {}, listener?: Array<[ K, (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any]>): Promise < any > {
    if (cdns.length === 0) {
        return await readFileSync(url, options, listener);
    }

    let err: any;

    for (const value of cdns) {
        const data = await readFileSync((value || '') + url, options, listener).catch((error: IEvent) => { err = error; });

        if (data) {
            return data;
        }
    }

    return new Promise((resolve, reject) => { reject(err); });
}
