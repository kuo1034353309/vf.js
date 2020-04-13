import { CurveType, TransitionType, ITransitionData, SceneEvent, ExpressItemType } from '../core/model/IVFData';
import { VFComponent } from '../display/VFComponent';
import { VFStage } from '../display/VFStage';
import { ITransition } from '../core/transition/ITransition';
import { CrossFadeFilter } from '../core/transition/filters/CrossFadeFilter';
import { CircleFadeFilter } from '../core/transition/filters/CircleFadeFilter';
import { CrossZoomFilter } from '../core/transition/filters/CrossZoomFilter';
import { DoomScreenFilter } from '../core/transition/filters/DoomScreenFilter';
import { HeartWipeFilter } from '../core/transition/filters/HeartWipeFilter';
import { LinearBlurFilter } from '../core/transition/filters/LinearBlurFilter';
import { PageCurlFilter } from '../core/transition/filters/PageCurlFilter';
import { WindFilter } from '../core/transition/filters/WindFilter';
import { ToTearFilter } from '../core/transition/filters/ToTearFilter';
import { PageFlipLeftFilter } from '../core/transition/filters/PageFlipLeftFilter';
import { PageFlipRightFilter } from '../core/transition/filters/PageFlipRightFilter';
import { Transition } from '../core/transition/Tranistion';

/**
 * 获取从父级开始的对象
 */
function getParentByTargetComponent(component: VFComponent, targets: string[]) {
    let com: vf.gui.DisplayObject = component as any;
    while (targets.length > 0) {
        const childId = targets.shift();
        if (com && com instanceof VFComponent && childId) {
            com = (com as VFComponent).getChildById(childId) as any;
        } else {
            return undefined;
        }
    }
    return com;
}

/**
 * 获取从舞台顶级开始的对象，请标注targets的数组首位为-1
 * @param component 
 * @param targets 
 */
function getRootByTargetComponent(component: VFComponent, targets: string[]) {
    targets.shift(); // type
    if (!component.vfStage) {
        return;
    }
    const curScene = component.vfStage.getCurScene();
    let curCom: VFComponent | undefined;
    const rootComID = targets.shift();
    if (!curScene) {
        return;
    }
    for (let i = 0, len = curScene.uiChildren.length; i < len; i++) {
        curCom = curScene.uiChildren[i] as any;
        if (curCom instanceof VFComponent && curCom.id === rootComID) {
            break;
        }
    }
    if (curCom === undefined) {
        return undefined;
    }
    return getParentByTargetComponent(curCom, targets);
}


export function getTargetComponent(component: VFComponent,
                                   targetData: any[] | undefined): vf.gui.DisplayObject | undefined {
    // 支持从变量，属性，数组，参数中获取 组件
    if (component && Array.isArray(targetData) && targetData.length > 1) {
        if (targetData[0] === ExpressItemType.VARIABLE || 
            targetData[0] === ExpressItemType.PROPERTY ||
            targetData[0] === ExpressItemType.ARRAY_VALUE ||
            targetData[0] === ExpressItemType.PARAM_VALUE ||
            targetData[0] === ExpressItemType.OBJECT_VALUE ||
            targetData[0] === ExpressItemType.COMPONENT) {
            const vfStage = component.vfStage;
            if (vfStage && vfStage.variableManager) {
                const variableManager = vfStage.variableManager;
                const comp = variableManager.getExpressItemValue(component, targetData);
                if (comp && comp instanceof vf.gui.DisplayObject) {
                    return comp;
                }
            }
        }
    }
    return getComponentOrChild(component, targetData);
}

export function getComponentOrChild(component: VFComponent,
                                    targetData: string[] | undefined): vf.gui.DisplayObject | undefined {
    if (!targetData) {
        return component as any;
    } else if (targetData.length <= 0) {
        return component as any;
    } else {
        const targets = targetData.concat();
        if (targets[0] === '-1') {// 从顶级开始
            return getRootByTargetComponent(component, targets);
        } else {// 从父级开始
            return getParentByTargetComponent(component, targets);
        }
    }
}

export function getCurveProgress(type: CurveType, pos: number): number {
    let s: number = 0;
    switch (type) {
        case CurveType.None:
            return 0;
        case CurveType.Linear:
            return pos;
        case CurveType.EaseOutQuad:
            return -(Math.pow((pos - 1), 2) - 1);
        case CurveType.EaseInQuad:
            return Math.pow(pos, 2);
        case CurveType.EaseInOutQuad:
            // tslint:disable-next-line: no-conditional-assignment
            if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 2);
            }
            return -0.5 * ((pos -= 2) * pos - 2);
        case CurveType.EaseInCubic:
            return Math.pow(pos, 3);
        case CurveType.EaseOutCubic:
            return (Math.pow((pos - 1), 3) + 1);
        case CurveType.EaseInOutCubic:
            // tslint:disable-next-line: no-conditional-assignment
            if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 3);
            }
            return 0.5 * (Math.pow((pos - 2), 3) + 2);
        case CurveType.EaseInQuart:
            return Math.pow(pos, 3);
        case CurveType.EaseOutQuart:
            return -(Math.pow((pos - 1), 4) - 1);
        case CurveType.EaseInOutQuart:
            // tslint:disable-next-line: no-conditional-assignment
            if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 4);
            }
            return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
        case CurveType.EaseInQuint:
            return Math.pow(pos, 5);
        case CurveType.EaseOutQuint:
            return (Math.pow((pos - 1), 5) + 1);
        case CurveType.EaseInOutQuint:
            // tslint:disable-next-line: no-conditional-assignment
            if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 5);
            }
            return 0.5 * (Math.pow((pos - 2), 5) + 2);
        case CurveType.EaseInSine:
            return -Math.cos(pos * (Math.PI / 2)) + 1;
        case CurveType.EaseOutSine:
            return Math.sin(pos * (Math.PI / 2));
        case CurveType.EaseInOutSine:
            return (-.5 * (Math.cos(Math.PI * pos) - 1));
        case CurveType.EaseInExpo:
            return (pos === 0) ? 0 : Math.pow(2, 10 * (pos - 1));
        case CurveType.EaseOutExpo:
            return (pos === 1) ? 1 : -Math.pow(2, -10 * pos) + 1;
        case CurveType.EaseInOutExpo:
            if (pos === 0) {
                return 0;
            }
            if (pos === 1) {
                return 1;
            }
            // tslint:disable-next-line: no-conditional-assignment
            if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(2, 10 * (pos - 1));
            }
            return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
        case CurveType.EaseInCirc:
            return -(Math.sqrt(1 - (pos * pos)) - 1);
        case CurveType.EaseOutCirc:
            return Math.sqrt(1 - Math.pow((pos - 1), 2));
        case CurveType.EaseInOutCirc:
            // tslint:disable-next-line: no-conditional-assignment
            if ((pos /= 0.5) < 1) {
                return -0.5 * (Math.sqrt(1 - pos * pos) - 1);
            }
            return 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);
        case CurveType.EaseOutBounce:
            if ((pos) < (1 / 2.75)) {
                return (7.5625 * pos * pos);
            } else if (pos < (2 / 2.75)) {
                return (7.5625 * (pos -= (1.5 / 2.75)) * pos + .75);
            } else if (pos < (2.5 / 2.75)) {
                return (7.5625 * (pos -= (2.25 / 2.75)) * pos + .9375);
            } else {
                return (7.5625 * (pos -= (2.625 / 2.75)) * pos + .984375);
            }
        case CurveType.EaseInBack:
            s = 1.70158;
            return (pos) * pos * ((s + 1) * pos - s);
        case CurveType.EaseOutBack:
            s = 1.70158;
            return (pos = pos - 1) * pos * ((s + 1) * pos + s) + 1;
        case CurveType.EaseInOutBack:
            s = 1.70158;
            // tslint:disable-next-line: no-conditional-assignment
            if ((pos /= 0.5) < 1) {
                return 0.5 * (pos * pos * (((s *= (1.525)) + 1) * pos - s));
            }
            return 0.5 * ((pos -= 2) * pos * (((s *= (1.525)) + 1) * pos + s) + 2);
        case CurveType.Elastic:
        case CurveType.EaseOutElastic:
            return -1 * Math.pow(4, -8 * pos) * Math.sin((pos * 6 - 1) * (2 * Math.PI) / 2) + 1;
        case CurveType.EaseOutElasticTmp:
            return -1 * Math.pow(6, -6 * pos) * Math.sin((pos * 6 - 1) * (2 * Math.PI) / 2) + 1;
        case CurveType.SwingFromTo:
            s = 1.70158;
            // tslint:disable-next-line: no-conditional-assignment
            return ((pos /= 0.5) < 1) ? 0.5 * (pos * pos * (((s *= (1.525)) + 1) * pos - s)) :
                0.5 * ((pos -= 2) * pos * (((s *= (1.525)) + 1) * pos + s) + 2);
        case CurveType.SwingFrom:
            s = 1.70158;
            return pos * pos * ((s + 1) * pos - s);
        case CurveType.SwingTo:
            s = 1.70158;
            return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
        case CurveType.Bounce:
            if (pos < (1 / 2.75)) {
                return (7.5625 * pos * pos);
            } else if (pos < (2 / 2.75)) {
                return (7.5625 * (pos -= (1.5 / 2.75)) * pos + .75);
            } else if (pos < (2.5 / 2.75)) {
                return (7.5625 * (pos -= (2.25 / 2.75)) * pos + .9375);
            } else {
                return (7.5625 * (pos -= (2.625 / 2.75)) * pos + .984375);
            }
        case CurveType.BouncePast:
            if (pos < (1 / 2.75)) {
                return (7.5625 * pos * pos);
            } else if (pos < (2 / 2.75)) {
                return 2 - (7.5625 * (pos -= (1.5 / 2.75)) * pos + .75);
            } else if (pos < (2.5 / 2.75)) {
                return 2 - (7.5625 * (pos -= (2.25 / 2.75)) * pos + .9375);
            } else {
                return 2 - (7.5625 * (pos -= (2.625 / 2.75)) * pos + .984375);
            }
        case CurveType.EaseFromTo:
            // tslint:disable-next-line: no-conditional-assignment
            if ((pos /= 0.5) < 1) {
                return 0.5 * Math.pow(pos, 4);
            }
            return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
        case CurveType.EaseFrom:
            return Math.pow(pos, 4);
        case CurveType.EaseTo:
            return Math.pow(pos, 0.25);
        case CurveType.Sinusoidal:
            return (-Math.cos(pos * Math.PI) / 2) + 0.5;
        case CurveType.Reverse:
            return 1 - pos;
        case CurveType.Wobble:
            return (-Math.cos(pos * Math.PI * (9 * pos)) / 2) + 0.5;
        case CurveType.Spring:
            return 1 - (Math.cos(pos * 4.5 * Math.PI) * Math.exp(-pos * 6));
        default:
            return pos;
    }
}

export function applyTransition(vfStage: VFStage, prevTexture: vf.RenderTexture, data: ITransitionData): void {
    const transition = new Transition(vfStage, prevTexture, data);
    transition.run();
}

export function renderTexture(app: vf.Application,
    container: vf.Container,
    width: number,
    height: number): vf.RenderTexture {

    const w: number = width || app.view.width;
    const h: number = height || app.view.height;

    const texture = vf.RenderTexture.create({
        width: w,
        height: h,
        scaleMode: vf.SCALE_MODES.LINEAR,
    });
    app.renderer.render(container, texture);
    return texture;
}
export function getCanvasColor(app: vf.Application, container: vf.Container,
    x: number, y: number): Uint8Array {
    // const canvas = app.view;
    // console.log('canvas', canvas)
    // const ctx = canvas.getContext('2d');
    // console.log('2d', ctx)
    // const c = ctx.getImageData(x, y, 1, 1).data;
    // return c;
    const texture = vf.RenderTexture.create({
        width: 1,
        height: 1,
        scaleMode: vf.SCALE_MODES.LINEAR,
    });
    app.renderer.render(container, texture);
    const pixels = app.renderer.extract.pixels(texture);
    return pixels;

}
export function webglDebug(app: vf.Application, container: vf.Container): void {
    const c = getCanvasColor(app, container, 0, 0);
    // tslint:disable-next-line: no-console
    console.log(' canvas 0,0, color:', 'r:', c[0] / 255, 'g:', c[1], 'b:', c[2], c);
}

export function isObject(obj: any): boolean {
    return Object.prototype.toString.call(obj) === '[object Object]';
}
export function isNumber(obj: any): boolean {
    return typeof obj === 'number' && !isNaN(obj);
}
export function isString(obj: any): boolean {
    return typeof obj === 'string';
}
export function isBoolean(obj: any): boolean {
    return typeof obj === 'boolean';
}
export function isArray(obj: any): boolean {
    return Array.isArray(obj);
}
/**
 *	 按指定格式替换字符串
* @param str 原字符串 var str:string="a{0}c{1}e";
* @param rest 替换参数 stringFormat(str,"b","d")
* @return 
* 
*/
export function stringFormat(str: string, ...rest:any[]): string {
    if (str == null) return '';
    if(rest === undefined) return str;
    
    var len: number = rest.length;
    var args: string[];
    if (len == 1 && Array.isArray(rest[0])) {
        args = rest[0];
        len = args.length;
    }
    else {
        args = rest;
    }

    for (var i = 0; i < len; i++) {
        str = str.replace(new RegExp("\\${" + i + "\\}", "g"), args[i]);
    }

    return str;
}
