import { BaseTask } from './core/BaseTask';
import { VFComponent } from '../../display/VFComponent';
import { IActionPlaySound } from '../model/IVFData';

export class PauseSoundTask extends BaseTask {
        
        public component: VFComponent;
        public soundId: number | any[];
        public trackId: string = '-1';
        private data: IActionPlaySound;

        constructor(compontent: VFComponent, soundId: number | any[], trackId?: string, data ?: any) {
            super();
            this.component = compontent;
            this.soundId = soundId;
            this.data = data;
            if (trackId) {
                this.trackId = trackId;
            }
            
        }   

        public run(): void {
            super.run();
            if (this.component.vfStage) {
                const soundManager = this.component.vfStage.soundManager;
                const variableManager = this.component.vfStage.variableManager;
                let soundId: number = 0;
                if (Array.isArray(this.soundId)) {
                    const soundIdVar = variableManager.getExpressItemValue(this.component, this.soundId);
                    if (soundIdVar && soundIdVar.value) {
                        soundId = soundIdVar.value;
                    } else {
                        soundId = soundIdVar;
                    }
                } else {
                    soundId = this.soundId;
                }
                
                soundManager.pauseSound(soundId, this.trackId, this.data);
                this.complete();
            } else {
                this.complete();
            }
            
        }
    }

