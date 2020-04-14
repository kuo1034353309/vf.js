/**
 * 国际化
 * - TODO:
 * 1、根据配置/默认载入对应语言数据并初始化
 * 2、外部统一通过i18n实例接口 通过 key 取信息, 支持批量取
 * 3、支持语言切换
 * @author 8088
 */
import BaseInfo from './BaseInfo';
import { readFileSyncExt } from '../utils/readFileSync';
import IEvent from '../event/IEvent';
import { VFStateCode } from './model/IVFData';
import { stringFormat } from '../utils/VFUtil';
export default class I18N extends BaseInfo {
    private readonly lang: string = '';

    private _data: any;

    private _readyState: VFStateCode = VFStateCode.INIT;

    constructor(language: string) {
        super();
        this.lang = language.toLocaleLowerCase();
        if (this.lang.indexOf('en') !== -1) {
            this.lang = 'en-us';
        }
        else {
            this.lang = 'zh-cn';
        }
    }

    public get readyState(): VFStateCode {
        return this._readyState;
    }
    public set readyState(value) {
        this._readyState = value;
    }

    public get info(): object {
        return ['zh-CN', 'en-US'];
    }

    public t(key: string, param?: string[]): string {
        const data = this._data;

        if (data && data[key]) {
            return stringFormat(data[key].message.toString(), param);
        }

        return `This message code[${key}] is not defined. \n JSON = ${JSON.stringify(param)}`;
    }

    public async load(cdns: string[], onError: (err: any) => void): Promise<boolean> {
        if (this.lang && this._readyState !== VFStateCode.READY) {
            let url = '';

            if (process.env.NODE_ENV === 'production') {
                url = `vf/engine/i18n/${this.lang}.json?v=2`;
            }
            else {
                url = `packages/i18n/${this.lang}.json`;
            }
            this._data = await readFileSyncExt(url, cdns, { responseType: 'json' }).catch((value: IEvent) => {
                onError(value);
            });
            if (this._data) {
                this._readyState = VFStateCode.READY;

                return true;
            }
        }

        return false;
    }
}
