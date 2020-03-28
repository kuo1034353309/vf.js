import { BaseTask } from './core/BaseTask';
import { VFComponent } from '../../display/VFComponent';
import { IActionExpress } from '../model/IVFData';

export class ExpressTask extends BaseTask {
        
        public component: VFComponent;
        public data: IActionExpress;

        constructor(compontent: VFComponent, data: IActionExpress) {
            super();
            this.component = compontent;
            this.data = data;
        }   

        public run(): void {
            super.run();
            if (this.component && this.component.vfStage) {
                const variableManager = this.component.vfStage.variableManager;
                variableManager.caculateExpress(this.component, this.data.express);
            }
            this.complete();
        }
    }

