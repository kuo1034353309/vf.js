/**
 * 对外接口
 * TODO:
 *  1、负责验证外部消息通讯/接口调用的合法性。
 *  2、负责拦截/中转外部容器与引擎的消息通讯。
 */
import { EventEmitter } from 'eventemitter3';
export default class API extends EventEmitter  {
    constructor(){
        super();
    }

    public play(src?: any) {
        return new Promise((resolve, reject) => {

            // 成功播放起来：
            // resolve()

            // 失败告诉外部原因
            // reject(new Error())
        })
    }
}