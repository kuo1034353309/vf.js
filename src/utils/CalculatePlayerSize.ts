import { ScaleMode } from '../core/model/IVFData';
import { VFStage } from '../display/VFStage';

/**
 * @private
 * 
 * 更新播放器视口尺寸
 * 
 * noScale 不对内容进行任何缩放，保持原始的1:1比例。如果播放器窗口比内容小，则可能进行一些裁切。
 * 
 * showAll 非溢出居中，显示全部内容。水平或垂直“两侧”可能会不够宽而留有黑边。
 * 
 * contain 非溢出，显示全部内容，水平或垂直“一侧”方向有黑边。
 * 
 * cover 溢出居中，某些部分也许无法显示在播放器视口。
 */
// tslint:disable-next-line: max-line-length
export default function calculateUpdatePlayerSize(canvas: HTMLCanvasElement, stage: VFStage, scaleMode: ScaleMode, appParentDivName = '', canvasScaleFactor = 1, isWebGl = true) {
    const top = 0;

    let parentWidth = window.innerWidth;
    let parentHeight = window.innerHeight;

    if (canvas.parentNode != null) {
        parentWidth = (canvas.parentNode as HTMLElement).offsetWidth;
        parentHeight = (canvas.parentNode as HTMLElement).offsetHeight;
    }

    if (appParentDivName !== '') {
        if (document.getElementById(appParentDivName) == null) {
            throw new Error(`Error No find appParentDivName(${appParentDivName})`);
        }
        parentWidth = (document.getElementById(appParentDivName) as HTMLElement).offsetWidth;
        parentHeight = (document.getElementById(appParentDivName) as HTMLElement).offsetHeight;
    }

    const boundingClientWidth = parentWidth;
    const boundingClientHeight = parentHeight;

    const screenWidth = boundingClientWidth;
    const screenHeight = boundingClientHeight;

    const stageSize = calculateStageSize(scaleMode, screenWidth, screenHeight, canvas.width, canvas.height);

    const stageWidth = stageSize.stageWidth;
    const stageHeight = stageSize.stageHeight;
    const displayWidth = stageSize.displayWidth;
    const displayHeight = stageSize.displayHeight;

    canvas.style.transformOrigin = '0% 0% 0px';

    if (canvas.width !== stageWidth) {
        canvas.width = stageWidth;
    }
    if (canvas.height !== stageHeight) {
        canvas.height = stageHeight;
    }

    const rotation = 0;
    canvas.style.top = top + (boundingClientHeight - displayHeight) / 2 + 'px';
    canvas.style.left = (boundingClientWidth - displayWidth) / 2 + 'px';

    const scalex = displayWidth / stageWidth;
    const scaley = displayHeight / stageHeight;

    let canvasScaleX = scalex * canvasScaleFactor;
    let canvasScaleY = scaley * canvasScaleFactor;

    if (!isWebGl) {
        canvasScaleX = Math.ceil(canvasScaleX);
        canvasScaleY = Math.ceil(canvasScaleY);
    }

    const m = new PIXI.Matrix();
    m.identity();
    m.scale(scalex / canvasScaleX, scaley / canvasScaleY);
    m.rotate(rotation * Math.PI / 180);

    canvas.style.position = 'absolute';
    canvas.style.transform = `matrix(${m.a},${m.b},${m.c},${m.d},${m.tx},${m.ty})`;
    canvas.width = stageWidth * canvasScaleX;
    canvas.height = stageHeight * canvasScaleY;

    stage.scaleX = canvasScaleX;
    stage.scaleY = canvasScaleY;

    return { width: canvas.width, height: canvas.height, scaleX: canvasScaleX, scaleY: canvasScaleY };
}

/**
 * @private
 * 计算舞台显示尺寸
 * @param scaleMode 当前的缩放模式
 * @param screenWidth 播放器视口宽度
 * @param screenHeight 播放器视口高度
 * @param contentWidth 初始化内容宽度
 * @param contentHeight 初始化内容高度
 */
function calculateStageSize(
    scaleMode: ScaleMode,
    screenWidth: number,
    screenHeight: number,
    contentWidth: number,
    contentHeight: number) {

    let displayWidth = screenWidth;
    let displayHeight = screenHeight;
    let stageWidth = contentWidth;
    let stageHeight = contentHeight;
    const scaleX = (screenWidth / stageWidth) || 0;
    const scaleY = (screenHeight / stageHeight) || 0;

    switch (scaleMode) {
        case 'showAll':
            if (scaleX > scaleY) {
                displayWidth = Math.round(stageWidth * scaleY);
            } else {
                displayHeight = Math.round(stageHeight * scaleX);
            }
            break;
        case 'cover':
            if (scaleX > scaleY) {
                displayHeight = Math.round(stageHeight * scaleX);
            } else {
                displayWidth = Math.round(stageWidth * scaleY);
            }
            break;
        case 'contain':
            if (scaleX > scaleY) {
                stageWidth = Math.round(screenWidth / scaleY);
            } else {
                stageHeight = Math.round(screenHeight / scaleX);
            }
            break;
        default:
            stageWidth = screenWidth;
            stageHeight = screenHeight;
            break;
    }
    // 宽高不是2的整数倍会导致图片绘制出现问题
    if (stageWidth % 2 !== 0) {
        stageWidth += 1;
    }
    if (stageHeight % 2 !== 0) {
        stageHeight += 1;
    }
    if (displayWidth % 2 !== 0) {
        displayWidth += 1;
    }
    if (displayHeight % 2 !== 0) {
        displayHeight += 1;
    }
    return {
        stageWidth,
        stageHeight,
        displayWidth,
        displayHeight,
    };
}
