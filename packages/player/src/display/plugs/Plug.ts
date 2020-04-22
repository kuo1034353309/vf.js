import { IPlug } from './IPlug';
import { VFStage } from '../VFStage';
import { VFStateCode } from '../../core/model/IVFData';

/** 
 * 基于接口的抽象实现
 * @author yangxiao
 */
export class Plug implements IPlug {

    public id: string;
    public parent: VFStage;
    public status: VFStateCode;

    constructor(className: string, parent: VFStage) {
        this.id = className;
        this.parent = parent;
        this.status = VFStateCode.INIT;
    }

    public load(data: any) {
        if (this.status !== VFStateCode.INIT) {
            return;
        }
        this.onLoad(data);
        this.status = VFStateCode.READY;
        this.parent.plugs.set(this.id, this);
        return this;
    }

    public release() {
        if (this.status === VFStateCode.INIT) {
            return;
        }
        this.onRelease();
        this.parent.plugs.delete(this.id);
        this.parent = null as any;
        this.status = VFStateCode.INIT;
    }

    /**
     * 子类实现
     */
    protected onLoad(data: any) {
        //
    }
    
    /**
     * 子类实现
     */
    protected onRelease() {
        //
    }

}
