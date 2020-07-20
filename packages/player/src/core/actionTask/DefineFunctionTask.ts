import { BaseTask } from './core/BaseTask';
import { VFComponent } from '../../display/VFComponent';
import { FunctionTask } from './FunctionTask';
import { IAction, IActionFunction } from '../model/IVFData';
import { getTargetComponent } from '../../utils/VFUtil';

export class DefineFunctionTask extends BaseTask {

        public funName: string;
        protected component: VFComponent;
        protected fun: FunctionTask;
        protected data: IAction;
        protected funId: string = '';

        constructor(compontent: VFComponent, funName: string, data: IActionFunction, fun: FunctionTask) {
            super();
            this.component = compontent;
            this.funName = funName;
            this.fun = fun;
            this.fun.formalParams = data.formalParams;
            this.data = data;
        }

        public run(): void {
            super.run();
            if (this.component.vfStage) {
                const variableManager = this.component.vfStage.variableManager;
                let funId = this.funName;
                const subComponent = getTargetComponent(this.component, this.data.target);
                if (subComponent) {
                    funId = (subComponent as VFComponent).hashCode + this.funName;
                }
                variableManager.setFunctionTask(funId, this.fun);
                this.complete();
            } else {
                this.complete();
            }
            
        }
        public stop(): void {
            super.stop();
        }
    }

