import { BaseTask } from './core/BaseTask';
import { VFComponent } from '../../display/VFComponent';
import { ITransitionData } from '../model/IVFData';

export class JumpToSceneTask extends BaseTask {
        
        public component: VFComponent;
        public sceneId: string;
        public transition?: ITransitionData;

        constructor(compontent: VFComponent, sceneId: string, transition?: ITransitionData) {
            super();
            this.component = compontent;
            this.sceneId = sceneId;
            this.transition = transition;
        }   

        public run(): void {
            super.run();
            const vfStage = this.component.vfStage;
            if (vfStage) {
                vfStage.switchToSceneId(this.sceneId, this.transition);
                this.complete();
            } else {
                this.complete();
            }
            
        }
    }

