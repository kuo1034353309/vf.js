import {EventEmitter} from 'eventemitter3';
import IEvent from './IEvent';
import IEventObserver from './IEventObserver';
import { EventLevel } from './EventLevel';
import { EventType } from './EventType';
import { VFStateCode } from '../core/model/IVFData';

export default class StateEvent extends EventEmitter {

    private _observers: IEventObserver[];

    public constructor() {
        super();
        this._observers = [];
    }

    public emit(type: string, event: IEvent): boolean {
        if (type === undefined) {
            throw new Error(`emitEvent ==> ${type} is undefined`);
        }
        if (event.code === undefined) {
            throw new Error(`emitEvent ==> ${type} args.code is undefined`);
        }
        if (event.level === undefined) {
            throw new Error(`emitEvent ==> ${type} args.level is undefined`);
        }
        const result = super.emit(type, event);
        return result;
    }

    /**
     * 扩展的发送，事件名与数据
     * @param event 事件名 event = code 
     * @param _data 
     * @param _target 
     */
    public emitExt(event: string,  _data: any, _target?: any) {
        this.emit(event, { code: event, level: EventLevel.COMMAND, data: _data, target: _target } );
    }

    /**
     * 抛出错误信息
     * @param errorCode 错误码，指定packages.i18n中的文件
     * @param data 需要解析的变量
     */
    public emitError(errorCode: string, data?: any[], level = EventLevel.ERROR , target?: any) {
        this.error({code: errorCode, level, data, message: errorCode, target,});
    }

    public error(msg:IEvent){
        this.emit(EventType.STATUS, msg);
    }
}
