import IEvent from '../event/IEvent';

export interface Options {
    timeout?: number;
    responseType?: '' | 'arraybuffer' | 'blob' | 'json' | 'text';
    method?: 'GET' | 'POST';
    errorCount?: number;
}

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
export async function readFileSyncExt<K extends keyof XMLHttpRequestEventTargetEventMap>(url: string, cdns: string[], options: Options = {}, listener?: Array<[ K, (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any]>): Promise < any > {
    if (cdns.length === 0) {
        return await vf.utils.readFileSync(url, options, listener);
    }

    let err: any;

    for (const value of cdns) {
        // eslint-disable-next-line no-loop-func
        const data = await vf.utils.readFileSync((value || '') + url, options, listener).catch((error: IEvent) => {
            err = error;
        });

        if (data) {
            return data;
        }
    }

    return new Promise((resolve, reject) => { reject(err); });
}
