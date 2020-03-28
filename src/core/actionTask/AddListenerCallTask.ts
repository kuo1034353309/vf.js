/* eslint-disable no-mixed-spaces-and-tabs */
import { ContainerTask } from './core/ContainerTask';
import { TaskEvent } from './core/BaseTask';
import { CallFunctionTask } from './CallFunctionTask';
import { ActionType, IActionCallFunction, IActionAddEventListener } from '../model/IVFData';
import { VFComponent } from '../../display/VFComponent';
import { EventType } from '../../event/EventType';
import IEvent from '../../event/IEvent';
import { getTargetComponent } from '../../utils/VFUtil';


export class AddListenerCallTask extends ContainerTask {
    public data: IActionAddEventListener;
    public component: VFComponent;
    public eventName: string;
    public funName: string | undefined;
    protected _component: gui.DisplayObject | undefined;
    protected _loopComplete: boolean;
    protected system: boolean;
    protected global: boolean;
    protected runId: number = -1;
    protected callfun?: CallFunctionTask;
    protected callfunData?: IActionCallFunction;

    constructor(component: VFComponent, data: IActionAddEventListener) {
        super();
        this._loopComplete = false;
        this.data = data;
        this.component = component;
        this.eventName = data.event;
        this.system = data.system === true;
        this.global = data.global === true;
        this.funName = data.funName;
    }

    public run() {
        super.run();
        this._loopComplete = true;
        if (this.loopTask.tasks.length === 0 && this.component && this.funName) {
            this.callfunData = {
                type: ActionType.CallFunction,
                name: this.funName,
                params: [],
            };

            const callfunctionTask: CallFunctionTask = 
                new CallFunctionTask(this.component as any, this.funName, this.callfunData);
            this.callfun = callfunctionTask;
            this.loopTask.addTask(callfunctionTask);
        }
        if (this.loopTask) {
            this.loopTask.on(TaskEvent.EVENT_COMPLETE, this.onLoopComplete, this);
        }
        if (this.component) {
            if (this.system) {
                const vfStage = (this.component as VFComponent).vfStage;
                if (vfStage) {
                    vfStage.systemEvent.on(this.eventName, this.onTriger, this);
                }
            } else if (this.global) {
                const vfStage = (this.component as VFComponent).vfStage;
                if (vfStage) {
                    vfStage.on(this.eventName, this.onTriger, this);
                }
            } else {
                this._component = getTargetComponent(this.component, this.data.target);
                if (this._component) {
                    this._component.on(this.eventName, this.onTriger, this);
                }
            }
        }
        this.complete();
    }


    public stop() {
        this.complete();

        if (this._component) {
            if (this.system) {
                const vfStage = (this._component as VFComponent).vfStage;
                if (vfStage) {
                    vfStage.systemEvent.off(this.eventName, this.onTriger, this);
                }
            } else if (this.global) {
                const vfStage = (this._component as VFComponent).vfStage;
                if (vfStage) {
                    vfStage.off(this.eventName, this.onTriger, this);
                }
            } else {
                this._component.off(this.eventName, this.onTriger, this);
            }
        }
        if (this.loopTask) {
            this.loopTask.off(TaskEvent.EVENT_COMPLETE, this.onLoopComplete);
            this.loopTask.complete();
        }

        super.stop();
    }
    public break() {
        this.complete();
        super.break();
    }

    protected onLoopComplete() {
        this._loopComplete = true;
    }
    
    protected onSystemTriger(evt: IEvent) {
        if (evt.code === this.eventName) {
            this.onTriger(evt);
        }
    }

    protected onTriger(...params: any) {
        if (this._isPaused) {
            return;
        }
        if (params && params.length > 0 && this.callfunData) {
            this.callfunData.params = params;
        }
        if (this.loopTask && this._loopComplete) {
            this._loopComplete = false;
            this.loopTask.run();
        }
    }   
}

