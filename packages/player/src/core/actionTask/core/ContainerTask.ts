import { BaseTask, TaskEvent } from './BaseTask';
import { QueueTask } from './QueueTask';

export class ContainerTask extends BaseTask {

        protected loopTask: QueueTask;

        constructor() {
            super();
            this.loopTask = new QueueTask();
            this.loopTask.on(TaskEvent.EVENT_BREAK, this.onBreak, this);
        }
    
        public addSubTask(task: BaseTask) {
            if (this.loopTask) {
                this.loopTask.addTask(task);
                if (this.loopTask.asynchronous) {
                    this._asynchronous = true;
                }
            }
        }
    
        public stop() {
            super.stop();
            if (this.loopTask) {
                this.loopTask.off(TaskEvent.EVENT_BREAK);
                this.loopTask.stop();
            }
        }
    
        public break() {
            super.break();
            if (this.loopTask) {
                this.loopTask.off(TaskEvent.EVENT_BREAK);
                this.loopTask.break();
            }
        }

        public pause(): void {
            super.pause();
            if (this.loopTask) {
                this.loopTask.pause();
            }
        }

        public resume(): void {
            super.resume();
            if (this.loopTask) {
                this.loopTask.resume();
            }
        }

        protected onBreak(data: any) {
            this.break();
        }
    }

