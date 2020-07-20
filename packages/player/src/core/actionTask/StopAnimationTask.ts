import { BaseTask } from './core/BaseTask';
import { VFComponent } from '../../display/VFComponent';
import { IAction } from '../model/IVFData';
import { getTargetComponent } from '../../utils/VFUtil';

export class StopAnimationTask extends BaseTask {
        
        public component: VFComponent;
        public data: IAction;
        protected _component: VFComponent | undefined;

        constructor(compontent: VFComponent, data: IAction) {
            super();
            this.component = compontent;
            this.data = data;
            
        }   
       
        public run(): void {
            super.run();
            this._component = getTargetComponent(this.component, this.data.target) as VFComponent;
            if (this._component && this._component.vfStage) {
                this._component.stop();
            }
            this.complete();
        }
    }

