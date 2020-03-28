import { BaseTask } from './core/BaseTask';
import trace from '../../utils/Trace';
import { IAction } from '../model/IVFData';
import { VFComponent } from '../../display/VFComponent';

export class PrintTask extends BaseTask {
        public data: IAction;
        private component: VFComponent;
        constructor(component: VFComponent, data: IAction) {
            super();
            this.component = component;
            this.data = data;
        }

        public run(): void {
            // mark: 运行日志统一移到日志模块处理
            if(this.component.vfStage?.config.debug) trace(this.getValue());
            this.complete();
        }

        private getValue(): any {
            if (Array.isArray(this.data.value)) {
                if (this.component.vfStage) {
                    const variableManager = this.component.vfStage.variableManager;
                    return variableManager.getExpressItemValue(this.component, this.data.value);
                }
                
            } 
            return this.data.value;
        }
    }

