import ILogger from './ILogger';
import {IVFOptions} from '../IVFEngine';
import trace from '../utils/Trace';

export default class RuntimeLogger implements ILogger {
    constructor(options: IVFOptions) {
        // Trace.logAdvancedTrace = Boolean(options.logAdvancedTrace);
        // ...
    }

    /**
     * 接收外部模块传入的消息
     * @param evt
     */
    public onEvent(evt: any): void {
        trace(evt.message || evt.code);
    }

}