/**
 * 引擎对外的钩子以及初始化配置参数
 */

import { ITransitionData, ScaleMode } from './core/model/IVFData';
import IEvent from './event/IEvent';

/**
 * 外部钩子
 */
export interface APIHook {
    /**
     * 日志与错误时的回调
     * @param err
     */
    onError(evt: IEvent): void;
    /**
     * 初始化完成时回调
     * @param err
     */
    onInit(): void;
    /**
     * 准备工作完成时回调 （资源加载完成）
     */
    onReady(): void;
    /**
     * 场景加载
     */
    onSceneLoad(): void;
    /**
     * 场景加载完成时回调
     */
    onSceneCreate(): void;
    /**
     * 信令或其他消息回调
     */
    onMessage(msg: IEvent): void;
    /**
     * 卸载时触发
     */
    onDispose(): void;
}

/**
 * 外部函数
 */
export interface APICommand {
    /**
     * 播放（播放地址|播放数据|恢复播放）
     * @param src
     */
    play(src?: any): void;
    /**
     * 卸载
     * @param boolean
     */
    dispose(boolean?: boolean): void;
    /**
     * 暂停
     */
    pause(): void;
    /**
     * 恢复
     */
    resume(): void;
    /**
     * 重置
     */
    reset(): void;
    /**
     * 设置消息
     * @param msg
     */
    message(msg: IEvent): void;
    /**
     * 切换场景
     * @param transition
     */
    switchToNextScene(transition?: ITransitionData): void;
    /**
     * 切换场景
     * @param transition
     */
    switchToPrevScene(transition?: ITransitionData): void;
    /**
     * 切换场景
     * @param transition
     */
    switchToSceneId(sceneId: string, transition?: ITransitionData): void;
    /**
     * 切换场景
     * @param transition
     */
    switchToSceneIndex(index: number, transition?: ITransitionData): void;
}

export interface EngineAPI extends APIHook, APICommand {

}

export interface IVFOptions {
    container: HTMLElement;
    id?: string;
    src?: string;
    play?: boolean;
    loop?: boolean;
    menu?: boolean;
    quality?: string;
    scaleMode?: ScaleMode;
    align?: string;
    wmode?: string;
    bgcolor?: string;
    vfvars?: any;
    frameRate?: number;
    width?: number;
    height?: number;
    orientation?: string;
    maxTouches?: number;
    showFPS?: boolean;
    showLog?: boolean;
    debug?: boolean;
    logAdvancedTrace?: boolean;
    language?: string;
    realFPS?: boolean;
    /**
     * 动态数据
     */
    conversionData?: any;
    /**
     * 内置插件
     */
    plugs?: any[];
    /**
     * 外部库,由于
     */
    libs: string[];
    /**
     * loading动画位置
     */
    // eslint-disable-next-line max-len
    loadingPostion?: 'leftTop' | 'centerTop' | 'rightTop' | 'leftCenter' | 'center' | 'rightCenter' | 'leftBottom' | 'centerBottom' | 'rightBottom' | number[];
    /**
     * 分辨率 devicePixelRatio
     */
    resolution?: number;
    /**
     * 强制使用Canvas 渲染
     */
    forceCanvas: boolean;
    /**
     * 开启错误面板
     */
    useCustomErrorPanel?: boolean;
}
