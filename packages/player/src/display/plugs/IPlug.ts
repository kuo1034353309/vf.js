import { VFStage } from '../VFStage';
import { VFStateCode } from '../../core/model/IVFData';

/**
 * 插件接口类
 * @author yangxiao
 */
export interface IPlug {
    /**
     * 组件ID
     */
    readonly id: string;
    /**
     * 调用方
     */
    parent: VFStage;
    /**
     * 状态
     */
    status: VFStateCode;

    //(className: string, parent: VFStage);
    /**
     * 组件加载，暂时可能用不到
     */
    load(data: any): void;
    /**
     * 释放，回收
     */
    release(): void;
    
}
