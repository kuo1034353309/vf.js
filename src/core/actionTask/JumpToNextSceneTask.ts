import { BaseTask } from './core/BaseTask';
import { VFComponent } from '../../display/VFComponent';
import { ITransitionData } from '../model/IVFData';

export class JumpToNextSceneTask extends BaseTask {
        
        public component: VFComponent;
        public transition?: ITransitionData;

        constructor(compontent: VFComponent, transition?: ITransitionData) {
            super();
            this.component = compontent;
            this.transition = transition;
        }   

        public run(): void {
            super.run();
            const vfStage = this.component.vfStage;
            if (vfStage) {
                vfStage.switchToNextScene(this.transition);
                this.complete();
            } else {
                this.complete();
            }
        }
    }

