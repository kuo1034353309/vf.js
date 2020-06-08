import { BaseTask, TaskEvent } from './core/BaseTask';
import { VFComponent } from '../../display/VFComponent';
import { IAction } from '../model/IVFData';
import { isNumber } from '../../utils/VFUtil';
import { ContainerTask } from './core/ContainerTask';

export class EnterFrameTask extends ContainerTask {
        
        public component: VFComponent;
        public data: IAction;
        private loopTaskComplete: boolean = true;
        private tickHandler?: vf.gui.Scheduler;

        constructor(component: VFComponent, data: IAction) {
            super();
            this.component = component;
            this.data = data;
        }   

        public run(): void {
            super.run();

            if (this.component) {
                const vfStage = this.component.vfStage;
                if (vfStage && vfStage.app) {
                    if (this.loopTask) {
                        this.loopTask.addListener(TaskEvent.EVENT_COMPLETE, this.onLoopComplete, this);
                    }
                    
                    if(!this.tickHandler) {
                        this.tickHandler = vf.gui.Scheduler.setEnterFrame(this.tick.bind(this));
                    } else {
                        this.tickHandler.restart();
                    }
                    
                } else {
                    this.complete();
                }
            } else {
                this.complete();
            }
        }

        public complete(): void {
            super.complete();
            if (this.loopTask) {
                this.loopTask.removeListener(TaskEvent.EVENT_COMPLETE, this.onLoopComplete, this);
            }
            if(this.tickHandler) {
                this.tickHandler.stop();
            }
        }
        public stop(): void {
            super.stop();
            this.complete();
        }

        public pause(): void {
            super.pause();
            if(this.tickHandler) {
                this.tickHandler.pause();
            }
        }

        public resume(): void {
            if (this._isPaused) {
                if(this.tickHandler) {
                    this.tickHandler.resume();
                }
            }
            super.resume();
        }

        private onLoopComplete(): void {
            this.loopTaskComplete = true;
        }
        private tick(): void {
            if (this.loopTaskComplete) {
                if (this.loopTask) {
                    this.loopTask.run();
                }
            }
        }
    }

