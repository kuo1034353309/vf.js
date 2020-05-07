import { BaseTask } from './core/BaseTask';
import { VFComponent } from '../../display/VFComponent';
import { IActionSound, ActionType } from '../model/IVFData';

export class SoundTask extends BaseTask {
        public component: VFComponent;
        public readonly data: IActionSound;
        public readonly dataType: number;

        constructor(compontent: VFComponent, actionData: IActionSound) {
            super();
            this.component = compontent;
            if (typeof actionData.value[1] === 'string' || typeof actionData.value[1] === 'number') {
                // 兼容久版本
                actionData.assetId = actionData.value[1] as string;
                this.data = actionData;
                vf.utils.deprecation('5.2.1-v14', 'Please use the new sound API');
            }
            else {
                this.data = actionData.value[1];
            }

            const data = this.data;

            this.dataType = actionData.type;
            if (data.assetId === undefined) {
                console.log('execute sound failed, missing assetId');

                return;
            }
            if (data.trackId === undefined) {
                console.log('execute sound failed, missing trackId');

                return;
            }
            data.mode = actionData.mode || 'sound';
        }

        public run(): void {
            super.run();
            if (this.component.vfStage) {
                const soundManager = this.component.vfStage.soundManager;
                const variableManager = this.component.vfStage.variableManager;
                const data = this.data;
                let soundId: number | string | undefined;

                if (Array.isArray(data.assetId)) {
                    const soundIdVar = variableManager.getExpressItemValue(this.component, data.assetId);

                    if (soundIdVar && soundIdVar.value !== undefined) {
                        soundId = soundIdVar.value;
                    }
                    else {
                        soundId = soundIdVar;
                    }
                }
                else {
                    soundId = data.assetId;
                }
                data.assetId = soundId as number;
                switch (this.dataType) {
                    case ActionType.PlaySound:
                        soundManager.playSound(this.data);
                        break;
                    case ActionType.PauseSound:
                        soundManager.pauseSound(this.data);
                        break;
                    case ActionType.ResumeSound:
                        soundManager.resumeSound(this.data);
                        break;
                }
                this.complete();
            }
            else {
                this.complete();
            }
        }
}

