import { BaseTask } from './core/BaseTask';
import { VFComponent } from '../../display/VFComponent';
import { IActionPlayAnimation, IActionCallFunction } from '../model/IVFData';
import { getTargetComponent } from '../../utils/VFUtil';

export class CallProtoFunctionTask extends BaseTask {
        
        public component: VFComponent;
        public data: IActionCallFunction;

        constructor(compontent: VFComponent, data: IActionCallFunction) {
            super();
            this.component = compontent;
            this.data = data;
            
        }   
       
        public get target(): any {
            return getTargetComponent(this.component, this.data.target);
        }
        public run(): void {
            super.run();
            if (this.component.vfStage) {
                const variableManager = this.component.vfStage.variableManager;
                const runTarget = this.target;
                let  funName = this.data.name;
                if (Array.isArray(funName)) {
                    funName = variableManager.getExpressItemValue(this.component, funName);
                }
                const funParam = [];
                if (this.data.params) {
                    for (let i: number = 0, len: number = this.data.params.length; i < len; i++) {
                        const param = variableManager.getExpressItemValue(this.component, this.data.params[i]);
                        funParam.push(param);
                    }
                }
                if (runTarget && funName && runTarget[funName as string]) {
                    // tslint:disable-next-line: ban-types
                    (runTarget[funName as string] as Function).apply(runTarget, funParam);
                }
                
            }
            
            this.complete();
        }
    }

