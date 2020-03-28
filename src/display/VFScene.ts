import { VFStage } from './VFStage';
import { ITransitionData } from '../core/model/IVFData';
import { VFComponent } from './VFComponent';

export class VFScene extends gui.Container {

        public vfStage: VFStage;
        public id: string = '-1';
        public transition: ITransitionData | undefined;
        
        private component: VFComponent = null as any;

        constructor(vfStage: VFStage) {
            super();
            this.vfStage = vfStage;
        }

        public pause(): void {
            if (this.component) {
                this.component.pause();
            }
        }

        public resume(): void {
            if (this.component) {
                this.component.resume();
            }
        }

        public addComponent(vfComponent: VFComponent): void {
            this.component = vfComponent;
            this.component.vfStage = this.vfStage;
            this.component.runAction();
            this.component.emitAddToChildBefore();
            const child = this.addChild(vfComponent);
            this.component.emitAddToChild();
            this.component.playDefaultAnimation();
        }

        public removeComponent(): void {
            if (this.component) {
                this.component.emitRemoveToChildBefore();
                const child = this.removeChild(this.component);
                this.component.emitRemoveToChild();
                this.component.stop();
                this.component.vfStage = undefined;
            }
        }
        public dispose(): void {
            if (this.component) {
                this.removeComponent();
                this.component.dispose();
            }
            this.component = null as any;
        }
    }

