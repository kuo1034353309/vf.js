import { EventLevel } from "../event/EventLevel";
import { getUrl } from "./getUrl";
import { CDN } from "../core/model/IVFData";

function checkModule() {
    if(window.require === undefined){
        window.require = function(){};
    }
    if(window.exports === undefined){
        window.exports = {};
    }
    if(window.module === undefined){
        window.module = {};
    }
    if(window.module.exports === undefined){
        window.module.exports = {};
    }
}

/**
 * 加载script js 或js模块
 * 1. 支持普通的全局js加载，常规script标签方式引入
 * 2. 支持通过 “tsc xxx.ts -m umd” 编译生成的文件动态加载 
 * 
 * @param url url地址
 * @param moduleName 模块名，可加载umd模块，访问形式为gui.moduleName
 * 
 * @example 
 * let Cls = await importScript('http://127.0.0.1:5501/dist/test2.js',"Test");
 * let text = new Cls(); //或 let text = new gui.Test();
 * 
 */
export default async function importScript(url: string, cdns?: CDN, moduleName?: string, loadCompleteCallBack?: Function): Promise<boolean | any> {


    checkModule();

    const _namespace = gui as any;
    if (moduleName && _namespace[moduleName]) {
        return _namespace[moduleName];
    }

    let errorUrls: any[] = [];

    return new Promise((resolve, reject) => {

        let errorLoadCount = 0;
        const exports = window.module.exports;

        const loadScript = function (index: number) {
            let s = document.createElement('script');
            s.async = false;
            s.src = index === 0 ? url : getUrl(url, '', cdns, index - 1);
            s.addEventListener('load', loadComplete, false);
            s.addEventListener('error', loadError, false);
            document.body.appendChild(s);
        }

        const loadComplete = function (this: HTMLScriptElement, e: Event) {
            removeEvent(this);
            if (loadCompleteCallBack) {
                loadCompleteCallBack();
            }
            if(moduleName){
                if(exports.hasOwnProperty(moduleName)){
                    _namespace[moduleName] = exports[moduleName];
                    return resolve(_namespace[moduleName]);
                }
                return resolve(false);
            }
            resolve(true);
        }
        const loadError = function (this: HTMLScriptElement, e: Event) {
            removeEvent(this);
            if (errorLoadCount > 3) {
                reject({ code: '404', level: EventLevel.ERROR, data: [errorUrls.join('\n')] });
            } else {
                if (errorUrls.indexOf(this.src) === -1) {
                    errorUrls.push(this.src);
                }
                loadScript(1);
                errorLoadCount++;
            }
        }
        const removeEvent = function (thisObj: any) {
            thisObj.parentNode.removeChild(thisObj);
            thisObj.removeEventListener('load', loadComplete, false);
            thisObj.removeEventListener('error', loadError, false);
        }

        loadScript(0);
    });
}
