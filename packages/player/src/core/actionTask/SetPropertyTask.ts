import { BaseTask } from './core/BaseTask';
import { VFComponent } from '../../display/VFComponent';
import { IActionSetProperty } from '../model/IVFData';
import { getTargetComponent } from '../../utils/VFUtil';

export class SetPropertyTask extends BaseTask {
        
        public component: VFComponent;
        public data: IActionSetProperty;

        constructor(compontent: VFComponent, data: IActionSetProperty) {
            super();
            this.component = compontent;
            this.data = data;
        }   

        public run(): void {
            super.run();
            const component = getTargetComponent(this.component, this.data.target);
            if (component) {
                (component as any)[this.data.property] = this.getValue();
            }
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

