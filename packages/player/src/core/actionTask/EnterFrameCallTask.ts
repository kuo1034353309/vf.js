import { BaseTask, TaskEvent } from './core/BaseTask';
import { VFComponent } from '../../display/VFComponent';
import { IAction, IActionCallFunction, ActionType, IActionEnterFrame } from '../model/IVFData';
import { isNumber } from '../../utils/VFUtil';
import { ContainerTask } from './core/ContainerTask';
import { CallFunctionTask } from './CallFunctionTask';

export class EnterFrameCallTask extends ContainerTask {
        
        public component: VFComponent;
        public data: IAction;
        private loopTaskComplete: boolean = true;
        protected callfun?: CallFunctionTask;
        protected callfunData?: IActionCallFunction;
        private curTime: number = 0;
        private lastTime: number = 0;
        private funName?: string;

        constructor(component: VFComponent, data: IActionEnterFrame) {
            super();
            this.component = component;
            this.data = data;
            this.funName = data.funName;

            if(this.funName) {
                this.callfunData = {
                    type: ActionType.CallFunction,
                    name: this.funName,
                    params: [],
                };
                const callfunctionTask: CallFunctionTask = 
                        new CallFunctionTask(this.component as any, this.funName, this.callfunData);
                this.callfun = callfunctionTask;
                this.loopTask.addTask(callfunctionTask);
            }
        }   

        public run(): void {
            super.run();

            if (this.component) {
                const vfStage = this.component.vfStage;
                if (vfStage && vfStage.app) {
                    if (this.loopTask) {
                        this.loopTask.addListener(TaskEvent.EVENT_COMPLETE, this.onLoopComplete, this);
                    }
                    this.curTime = new Date().getTime();
                    this.lastTime = this.curTime;
                    vfStage.app.ticker.add(this.tick, this);
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
            if (this.component) {
                const vfStage = this.component.vfStage;
                if (vfStage && vfStage.app) {
                    vfStage.app.ticker.remove(this.tick, this);
                }
            }
        }
        public stop(): void {
            super.stop();
            this.complete();
        }

        public pause(): void {
            super.pause();
            if (this.component) {
                const vfStage = this.component.vfStage;
                if (vfStage && vfStage.app) {
                    vfStage.app.ticker.remove(this.tick, this);
                }
            }
        }

        public resume(): void {
            if (this._isPaused) {
                if (this.component) {
                    const vfStage = this.component.vfStage;
                    if (vfStage && vfStage.app) {
                        vfStage.app.ticker.add(this.tick, this);
                    }
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
                    this.curTime = new Date().getTime();
                    const dt:any = this.curTime - this.lastTime;
                    if (this.callfunData) {
                        this.callfunData.params = [dt];
                    }
                    this.loopTaskComplete = false;
                    this.loopTask.run();

                    this.lastTime = this.curTime;
                }
            }
        }
    }

