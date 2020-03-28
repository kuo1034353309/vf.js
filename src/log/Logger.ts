import ILogger from './ILogger';
import {IVFOptions} from '../IVFEngine';
import trace from '../utils/Trace';
/**
 * TODO:
 *  1、管理启动各子日志。
 *  2、接收外部消息并分发到各生存的日志发送器模块。
 */
export default class Logger implements ILogger {

    constructor(options: IVFOptions) {
       
    }

    /**
     * 接收外部模块传入的消息
     * @param evt
     */
    public onEvent(evt: any): void {
        trace(evt.message || evt.code);
    }

    public dispose(){
        
    }

}