import { BaseTask, TaskEvent } from './core/BaseTask';
import { VFComponent } from '../../display/VFComponent';
import { ExpressType } from '../model/IVFData';
import { QueueTask } from './core/QueueTask';

export class IfTask extends BaseTask {
        
        public component: VFComponent;
        public conditions: ExpressType[] = [];
        public conditionsRun: QueueTask[] = [];
        public elseRun?: QueueTask;
        private curRun?: QueueTask;

        constructor(compontent: VFComponent) {
            super();
            this.component = compontent;
        }   

        public addCondition(condition: ExpressType, run: QueueTask): void {
            if (condition && condition.length) {
                this.conditions.push(condition);
                this.conditionsRun.push(run);
            } else {
                this.addElse(run);
            }
        }
        public addElse(run: QueueTask): void {
            this.elseRun = run;
        }

        public run(): void {
            super.run();
            this.curRun = this.findTask();
            if (this.curRun) {
                this.curRun.on(TaskEvent.EVENT_COMPLETE, this.onTaskComplete, this);
                this.curRun.on(TaskEvent.EVENT_BREAK, this.onTaskBreak, this);
                this.curRun.run();
            } else {
                this.complete();
            }
        }
        private findTask(): QueueTask | undefined {
            if (this.component.vfStage) {
                const variableManager = this.component.vfStage.variableManager;
                for (let i: number = 0, len: number = this.conditions.length; i < len; i++) {
                    const condition = this.conditions[i];
                    const result = variableManager.caculateExpress(this.component, condition);
                    if (result) {
                        return this.conditionsRun[i];
                    }
                }
                if (this.elseRun) {
                    return this.elseRun;
                }
            }
            
        }
        private onTaskComplete(data: any): void {
            if (this.curRun) {
                this.curRun.off(TaskEvent.EVENT_COMPLETE, this.onTaskComplete, this);
            }
            this.complete();
        }
        private onTaskBreak(data: any): void {
            this.break();
            this.complete();
        }
    }

