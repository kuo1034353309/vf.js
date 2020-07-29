import { ContainerTask } from './core/ContainerTask';
import { TaskEvent, BaseTask } from './core/BaseTask';
import { ExpressTask } from './ExpressTask';
import { ExpressItemType, ExpressType, ExpressItem } from '../model/IVFData';
import { IfTask } from './IfTask';
import { QueueTask } from './core/QueueTask';
import { SetPropertyTask } from './SetPropertyTask';
import { PlayAnimationTask } from './PlayAnimationTask';
import { SoundTask } from './SoundTask';
import { CallFunctionTask } from './CallFunctionTask';
import { PrintTask } from './PrintTask';
import { injectParamsToQueueTask } from './core/ActionListUtils';


export class FunctionTask extends ContainerTask {
        public funName: string;
        public formalParams?: ExpressType[];
        
        protected _component: vf.gui.DisplayObject;
        protected _loopComplete: boolean;
        protected callTargets: number[] = [];

        constructor(compontent: vf.gui.DisplayObject, funName: string) {
            super();
            this._loopComplete = false;
            this._component = compontent;
            this.funName = funName;
        }
    
        public injectParams(paramIds: string[]): void {
            if (this.loopTask) {
                injectParamsToQueueTask(this.loopTask, paramIds);
            }
        }

        
        public runWithId(id: number): void {
            if (!this._isRunning) {
                this.callTargets.push(id);
                this.run();
            }
        }

        public stopWithId(id: number): void {
            const index = this.callTargets.indexOf(id);
            if (index >= 0) {
                if (index > 0) {
                    this.callTargets.splice(index, 1);
                } else {
                    this.callTargets.splice(index, 1);
                    if (this._isRunning) {
                        this.loopTask.stop();
                    }
                }
            }
        }

        public breakWithId(id: number): void {
            const index = this.callTargets.indexOf(id);
            if (index >= 0) {
                if (index > 0) {
                    this.callTargets.splice(index, 1);
                } else {
                    this.callTargets.splice(index, 1);
                    if (this._isRunning) {
                        this.loopTask.break();
                    }
                }
            }
        }
        public run() {
            super.run();
            this._loopComplete = true;
            if (this.loopTask) {
                this.loopTask.on(TaskEvent.EVENT_COMPLETE, this.onLoopComplete, this);
                this.loopTask.on(TaskEvent.EVENT_BREAK, this.onBreak, this);
            }
            if (this.callTargets.length > 0) {
                this.loopTask.run();
            } else {
                this.complete();
            }
        }

    
        public stop() {
            this.complete();
            super.stop();
        }
        public break() {
            this.complete();
            super.break();
        }
    
        public complete() {
            this.callTargets.length = 0;
            this.loopTask.off(TaskEvent.EVENT_COMPLETE, this.onLoopComplete, this);
            this.loopTask.off(TaskEvent.EVENT_BREAK, this.onBreak, this);
            super.complete();
        }
        protected onLoopComplete() {
            if (this.callTargets.length > 0) {
                const callId = this.callTargets[0];
                this.callTargets.shift();
                this._isRunning = false;
                this.emit(TaskEvent.FUNCTION_RUN_COMPLETE, callId);
            }
            if (this.callTargets.length > 0) {
                this.loopTask.run();
            } else {
                this.complete();
            }
        }
   
    }

