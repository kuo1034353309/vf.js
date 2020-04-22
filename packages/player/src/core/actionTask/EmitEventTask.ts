import { BaseTask } from './core/BaseTask';
import { VFComponent } from '../../display/VFComponent';
import { EventType } from '../../event/EventType';
import IEvent from '../../event/IEvent';
import { EventLevel } from '../../event/EventLevel';
import { IActionEmitEvent } from '../model/IVFData';
import { getTargetComponent } from '../../utils/VFUtil';

export class EmitEventTask extends BaseTask {
        public data: IActionEmitEvent;
        public eventName: string;
        public eventData: any;

        protected target: vf.utils.EventEmitter | undefined;
        protected component: VFComponent;
        protected system: boolean;
        protected global: boolean;


        constructor(component: VFComponent, data: IActionEmitEvent) {
            super();
            this.component = component;
            this.data = data;
            this.eventName = data.event;
            this.eventData = data.eventData;
            this.system = data.system === true;
            this.global = data.global === true;
        }
    
        public run() {
            super.run();
            const {component} = this;
            if (component) {
                const emitEventData = this.getEmitEventData();
                if (this.system) {
                    if (component.vfStage ){
                        const systemEvent = component.vfStage.systemEvent;
                        if (typeof emitEventData === 'object') {
                            (emitEventData as IEvent).type = this.eventName;
                            if (this.eventName !== EventType.MESSAGE) {
                                systemEvent.emit(this.eventName, emitEventData);
                            }
                            systemEvent.emit(EventType.MESSAGE, emitEventData); // 外部 
                        } else {
                            systemEvent.emitError('S0003', [this.eventName, 
                                                            JSON.stringify(emitEventData)], EventLevel.WARNING, this);
                        }
                    }
                } else if (this.global) {
                    if (component.vfStage) {
                        component.vfStage.emit(this.eventName, emitEventData);
                    }
                } else {
                    this.target = getTargetComponent(this.component, this.data.target);
                    if (this.target) {
                        this.target.emit(this.eventName, emitEventData);
                    }
                    
                }
            }
            this.complete();
        }

        public stop() {
            this.complete();
            super.stop();
        }
        public break() {
            this.complete();
            super.break();
        }
        private getEmitEventData(): any {
            if (Array.isArray(this.eventData)) {
                if (this.component) {
                    const vfStage = (this.component).vfStage;
                    if (vfStage) {
                        const data = vfStage.variableManager.getExpressItemValue(this.component, this.eventData);
                        return data;
                    }
                }
            }
            return this.eventData;
        }
    }

