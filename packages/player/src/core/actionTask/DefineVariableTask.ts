import { BaseTask } from './core/BaseTask';
import { VFComponent } from '../../display/VFComponent';
import { IActionDefineVariable} from '../model/IVFData';
import { getTargetComponent } from '../../utils/VFUtil';

export class DefineVariableTask extends BaseTask {
        
        public component: VFComponent;
        public data: IActionDefineVariable;

        constructor(compontent: VFComponent, data: IActionDefineVariable) {
            super();
            this.component = compontent;
            this.data = data;
        }   

        public run(): void {
            super.run();
            if (this.component && this.component.vfStage) {
                const variableManager = this.component.vfStage.variableManager;
                const targetComponent: VFComponent = getTargetComponent(this.component, 
                                                                        this.data.target) as VFComponent;
                if (targetComponent) {
                    variableManager.addVariableDataToComponent(targetComponent, 
                                                               this.data.varId, 
                                                               this.data.variableType,
                                                               this.data.value);
                } else {
                    variableManager.addVariableDataToGlobal( 
                                                            this.data.varId, 
                                                            this.data.variableType,
                                                            this.data.value);
                }
            }
            

            this.complete();
        }
    }

