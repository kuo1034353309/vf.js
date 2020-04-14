import { VFStage } from '../VFStage';
import {Plug } from './Plug';
import { EventLevel } from '../../event/EventLevel';
import { EventType } from '../../event/EventType';

/** 
 * 画板插件 
 * @author yangxiao 
 */
export class BoardDrawPlug extends Plug {

    private followLine?: vf.gui.FollowLine;

    constructor(className: string, parent: VFStage) {
        super(className, parent);
    }

    public onLoad(data: any) {
        const { parent } = this;
        this.followLine = new vf.gui.FollowLine(parent as any);
        const followLine = this.followLine;
        followLine.role =  data.role === 1 ? 
        vf.gui.Enum.FollowLineEnum.Role.teacher : 
        vf.gui.Enum.FollowLineEnum.Role.student;
        followLine.width = parent.width;
        followLine.height = parent.height;
        parent.addChild(followLine);

        followLine.on(vf.gui.Interaction.ComponentEvent.COMPLETE, this.onComplete, this);

        parent.config.systemEvent.on(EventType.MESSAGE, this.onReceipt, this);
        return  this;
    }

    public onRelease() {
        this.parent.config.systemEvent.off(EventType.MESSAGE, this.onReceipt, this);
        this.followLine?.off(vf.gui.Interaction.ComponentEvent.COMPLETE, this.onComplete, this);
        this.followLine?.offAll();
        this.followLine?.release(); 
    }

    private onComplete(display: vf.gui.FollowLine, data: string) {
        this.parent.config.systemEvent.emit(EventType.MESSAGE, 
            { 
                type: 'sendSignal', 
                code: 'sendSignal', 
                level : EventLevel.COMMAND , 
                data: {name: 'boardDraw', val: data},
            });
    }

    private onReceipt(msg: {type: string, code: string, data: {name: string, val: any}}) {
        if (msg.data && msg.code === 'sendSignal' &&  this.followLine) {
            const followLine = this.followLine;
            if (msg.data.name === 'boardDraw') {
                followLine.setData(msg.data.val);
            } else if (msg.data.name === 'boardRestore') { // 重置
                followLine.reset();
            } else if (msg.data.name === 'boardErase') { // 橡皮檫
                followLine.isErasing = msg.data.val;
            } else if (msg.data.name === 'boardLineColor') { // 线段颜色
                followLine.lineColor = msg.data.val;
            }
            
        }
    }


}
