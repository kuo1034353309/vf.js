import { ContainerTask } from './core/ContainerTask';
import { TaskEvent } from './core/BaseTask';
import { VFComponent } from '../../display/VFComponent';
import { EventType } from '../../event/EventType';
import IEvent from '../../event/IEvent';
import { IActionAddEventListener } from '../model/IVFData';
import { getTargetComponent } from '../../utils/VFUtil';

export class AddListenerTask extends ContainerTask {
        public data: IActionAddEventListener;
        public eventName: string;
        public component: VFComponent;
        protected _component: vf.gui.DisplayObject | undefined;
        protected _loopComplete: boolean;
        protected system: boolean;
        protected global: boolean;

        constructor(component: VFComponent, data: IActionAddEventListener) {
            super();
            this.component = component;
            this._loopComplete = false;
            this.data = data;
            this.eventName = data.event;
            this.system = data.system === true;
            this.global = data.global === true;
        }
    
        public run() {
            super.run();
            
            this._loopComplete = true;
            if (this.component) {
                if (this.loopTask) {
                    this.loopTask.on(TaskEvent.EVENT_COMPLETE, this.onLoopComplete, this);
                }

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
                this.onTriger();
            }
        }
    
        protected onTriger() {
            if (this._isPaused) {
                return;
            }
            if (this.loopTask && this._loopComplete) {
                this._loopComplete = false;
                this.loopTask.run();
            }
        }    
    }

