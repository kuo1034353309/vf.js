import { BaseTask } from './core/BaseTask';
import { VFComponent } from '../../display/VFComponent';
import { IActionAddEventListener } from '../model/IVFData';
import { getTargetComponent } from '../../utils/VFUtil';


export class RemoveListenerTask extends BaseTask {
        public data: IActionAddEventListener;
        public eventName: string;
        public component: VFComponent;
        protected _component: gui.DisplayObject | undefined;
        protected _loopComplete: boolean;
        protected system: boolean;
        protected global: boolean;

        constructor(component: VFComponent, data: IActionAddEventListener) {
            super();
            this._loopComplete = false;
            this.component = component;
            this.data = data;
            this.eventName = data.event;
            this.system = data.system === true;
            this.global = data.global === true;
        }
    
        public run() {
            super.run();
            if (this.component) {
                if (this.system) {
                    const vfStage = (this.component as VFComponent).vfStage;
                    if (vfStage) {
                        vfStage.systemEvent.off(this.eventName);
                    }
                } else if (this.global) {
                    const vfStage = (this.component as VFComponent).vfStage;
                    if (vfStage) {
                        vfStage.off(this.eventName);
                    }
                } else {
                    this._component = getTargetComponent(this.component, this.data.target);
                    if (this._component) {
                        this._component.off(this.eventName);
                    }
                }
            }
            this.complete();
        }   
    }

