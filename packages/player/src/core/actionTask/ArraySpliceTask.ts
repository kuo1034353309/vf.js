import { BaseTask } from './core/BaseTask';
import { VFComponent } from '../../display/VFComponent';
import { IActionArraySplice } from '../model/IVFData';

export class ArraySpliceTask extends BaseTask {
        
        public component: VFComponent;
        public data: IActionArraySplice;

        constructor(compontent: VFComponent, data: IActionArraySplice) {
            super();
            this.component = compontent;
            this.data = data;
        }   

        public run(): void {
            super.run();
            if (this.component.vfStage && this.data.target) {
                const variableManager = this.component.vfStage.variableManager;
                const arrItem = variableManager.getVariableByData(this.component, this.data.target);
                if (arrItem) {
                    const value = this.data.value;
                    if (value !== undefined) {
                        arrItem.value.splice(this.data.start, this.data.deleteCount || 0, value);
                    } else {
                        arrItem.value.splice(this.data.start, this.data.deleteCount || 0);
                    }
                }
            }
            this.complete();
        }
    }

