import { BaseTask } from './core/BaseTask';
import { VFComponent } from '../../display/VFComponent';
import { IActionArraySplice, IActionArrayConcat } from '../model/IVFData';

export class ArrayConcatTask extends BaseTask {
        
        public component: VFComponent;
        public data: IActionArrayConcat;

        constructor(compontent: VFComponent, data: IActionArrayConcat) {
            super();
            this.component = compontent;
            this.data = data;
        }   

        public run(): void {
            super.run();
            if (this.component.vfStage && this.data.target) {
                const variableManager = this.component.vfStage.variableManager;
                const arrItem = variableManager.getVariableByData(this.component, this.data.target);
                const concatItem = variableManager.getVariableByData(this.component, this.data.concatArr);
                if (arrItem && concatItem) {
                    if (this.data.value) {
                        arrItem.value = concatItem.value.concat(this.data.value);
                    } else {
                        arrItem.value = concatItem.value.concat();
                    }
                }
            }
            this.complete();
        }
    }

