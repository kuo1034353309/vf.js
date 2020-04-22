import { BaseTask } from './core/BaseTask';
import { VFComponent } from '../../display/VFComponent';
import { IActionPlayAnimation } from '../model/IVFData';
import { getTargetComponent } from '../../utils/VFUtil';

export class PlayAnimationTask extends BaseTask {
        
        public component: VFComponent;
        public data: IActionPlayAnimation;
        protected _component: VFComponent | undefined;

        constructor(compontent: VFComponent, data: IActionPlayAnimation) {
            super();
            this.component = compontent;
            this.data = data;
            
        }   
       
        public run(): void {
            super.run();
            this._component = getTargetComponent(this.component, this.data.target) as VFComponent;
            const name = this.getValue();
            const times = this.getTimes();
            if (this._component && this._component.vfStage) {
                this._component.play(name, times);
            }
            
            this.complete();
        }

        private getValue(): any {
            if (Array.isArray(this.data.name)) {
                if (this._component && this.component.vfStage) {
                    const variableManager = this.component.vfStage.variableManager;
                    return variableManager.getExpressItemValue(this._component, this.data.name);
                }
                
            } 
            return this.data.name;
        }
        private getTimes(): any {
            if (Array.isArray(this.data.times)) {
                if (this._component && this.component.vfStage) {
                    const variableManager = this.component.vfStage.variableManager;
                    return variableManager.getExpressItemValue(this._component, this.data.times);
                }
                
            } 
            return this.data.times;
        }
    }

