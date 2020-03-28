import { BaseTask, TaskEvent } from './core/BaseTask';
import { VFComponent } from '../../display/VFComponent';
import { IAction, IActionInterval } from '../model/IVFData';
import { isNumber } from '../../utils/VFUtil';
import { ContainerTask } from './core/ContainerTask';

export class SetIntervalTask extends ContainerTask {
        
        public component: VFComponent;
        public data: IActionInterval;
        private timeoutHandler?: gui.Scheduler;
        private lastTimes: number = 0;
        private loopTaskComplete: boolean = true;
        private intervalComplete: boolean = true;
        private _timeout: number = 0;
        private _times: number = 1;
        constructor(component: VFComponent, data: IActionInterval) {
            super();
            this.component = component;
            this.data = data;
        }   

        private get timeout(): number {
            let time: number = 0;
            if (Array.isArray(this.data.value)) {
                if (this.component && this.component.vfStage) {
                    const variableManager = this.component.vfStage.variableManager;
                    time = variableManager.getExpressItemValue(this.component, this.data.value);
                }
            } else {
                time = this.data.value;
            }
            if (!isNumber(time)) {
                time = 1;
            }
            return time;
        }

        private get times(): number {
            let times: number = 0;
            if (Array.isArray(this.data.times)) {
                if (this.component && this.component.vfStage) {
                    const variableManager = this.component.vfStage.variableManager;
                    times = variableManager.getExpressItemValue(this.component, this.data.times);
                }
                
            } else {
                if (this.data.times === undefined) {
                    times = 0;
                } else {
                    times = this.data.times;
                }
                
            }
            if (!isNumber(times)) {
                times = 0;
            }
            return times;
        }

        public run(): void {
            super.run();
            this._timeout = this.timeout;
            this._times = this.times;
            this.lastTimes = this._times;
            if (this.loopTask) {
                this.loopTask.addListener(TaskEvent.EVENT_COMPLETE, this.onLoopComplete, this);
            }
            
            this.runOnce(this._timeout, this._times);
        }

        public complete(): void {
            
            super.complete();
            if (this.timeoutHandler) {
                this.timeoutHandler.stop();
                this.timeoutHandler = undefined;
            }
            if (this.loopTask) {
                this.loopTask.removeListener(TaskEvent.EVENT_COMPLETE, this.onLoopComplete, this);
            }
        }

        public stop(): void {
            super.stop();
            this.complete();
        }

        public resume(): void {
            if (this._isPaused) {
                if (this.loopTaskComplete && this.intervalComplete) {
                    this.checkComplete(this._timeout, this._times);
                }
            }
            super.resume();
        }
        private onLoopComplete(): void {
            this.loopTaskComplete = true;
            if (this.intervalComplete) {
                this.checkComplete(this._timeout, this._times);
            }
        }

        private runOnce(timeout: number, times: number): void {  
            this.intervalComplete = false;
            if (this.timeoutHandler === undefined) {
                this.timeoutHandler = gui.Scheduler.setTimeout(timeout, () => {
                    this.intervalComplete = true;
                    if (this.timeoutHandler) {
                        this.timeoutHandler.stop();
                    }
    
                    if (this.loopTaskComplete && this.intervalComplete) {
                        this.checkComplete(timeout, times);
                    }
                });
            } else {
                this.timeoutHandler.restart();
            }
            
            
        }

        private checkComplete(timeout: number, times: number): void {
            if (this._isPaused || this._isCompleted) {
                return;
            }
            let isComplete: boolean = false;
            if (times > 0) {
                if (this.lastTimes > 0) {
                    isComplete =  false;
                } else {
                    isComplete =  true;
                }
            } else {
                isComplete =  false;
            }

            if (isComplete) {
                this.complete();
            } else {
                this.lastTimes--;
                if (this.loopTask) {
                    this.loopTaskComplete = false;
                    this.runOnce(timeout, times);
                    this.loopTask.run();
                    
                } else {
                    this.complete();
                }
            }
        }
    }

