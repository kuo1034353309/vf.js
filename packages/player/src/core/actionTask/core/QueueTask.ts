import { BaseTask, TaskEvent } from './BaseTask';

export class QueueTask extends BaseTask {

        private _tasks: BaseTask[] = [];
        private _currentTask: BaseTask = null as any;
        private _curTaskIndex: number = 0;

        constructor() {
            super();
        }
        
        public get tasks(): BaseTask[] {
            return this._tasks;
        }

        public run(): void {
            if (this.isRunning) {
                return;
            }
            this._curTaskIndex = 0;
            super.run();
            this._nextTask();
        }

        public stop(): void {
            super.stop();

            if (this._currentTask) {
                this.clearEvent(this._currentTask);
                this._currentTask.stop();
                this._currentTask = null as any;
            }
            this._curTaskIndex = Number.MAX_VALUE;
            this.off(TaskEvent.EVENT_COMPLETE);
            this.off(TaskEvent.EVENT_BREAK);
            this.off(TaskEvent.EVENT_FAIL);
            this.complete();
        }

        public pause(): void {
            super.pause();
            if (this._tasks) {
                for (let i: number = 0, len: number = this._tasks.length; i < len; i++) {
                    this._tasks[i].pause();
                }
            }
        }

        public resume(): void {
            super.resume();
            if (this._tasks) {
                for (let i: number = 0, len: number = this._tasks.length; i < len; i++) {
                    this._tasks[i].resume();
                }
            }
        }

        public break(): void {
            super.break();

            if (this._currentTask) {
                this.clearEvent(this._currentTask);
                this._currentTask.break();
                this._currentTask = null as any;
            }
            this._curTaskIndex = Number.MAX_VALUE;
            this.off(TaskEvent.EVENT_COMPLETE);
            this.off(TaskEvent.EVENT_BREAK);
            this.off(TaskEvent.EVENT_FAIL);
            this.complete();
        }

        public addTask(task: BaseTask): BaseTask {
            if (task) {
                if (task.asynchronous) {
                    this._asynchronous = true;
                }
                if (this._tasks.indexOf(task) < 0) {
                    this._tasks.push(task);
                } else {
                    throw new Error('duplicate task');
                }
            } else {
                throw new Error('ArgumentError');
            }
            return task;
        }
        private _nextTask(prevTask?: BaseTask): void {

            let task: BaseTask = null as any;
            if (this._curTaskIndex < this._tasks.length) {
                task = this._tasks[this._curTaskIndex];
            }
            if (task) {
                this._currentTask = task;
                this._currentTask.on(TaskEvent.EVENT_COMPLETE, this.onOneTaskComplete, this);
                this._currentTask.on(TaskEvent.EVENT_FAIL, this.onOneTaskFail, this);
                this._currentTask.on(TaskEvent.EVENT_BREAK, this.onOneTaskBreak, this);

                this._currentTask.run();
            } else {
                this.complete();
            }
        }

        private clearEvent(task: BaseTask): void {
            if (task) {
                task.off(TaskEvent.EVENT_COMPLETE, this.onOneTaskComplete, this);
                task.off(TaskEvent.EVENT_FAIL, this.onOneTaskFail, this);
                task.off(TaskEvent.EVENT_BREAK, this.onOneTaskBreak, this);
            }
        }

        private onOneTaskBreak(data: any): void {
            if (this._currentTask) {
                this.clearEvent(this._currentTask);
                this.emit(TaskEvent.EVENT_BREAK);
                this.complete();
            }
        }

        private onOneTaskFail(data: any): void {
            if (this._currentTask) {
                this.clearEvent(this._currentTask);
                this.fail(data.type, data.data);
            } else {
                // debug
                throw new Error('no task');
            }
        }

        private onOneTaskComplete(data: any): void {
            this.clearEvent(this._currentTask);
            this._curTaskIndex++;
            this._nextTask(this._currentTask);
        }
    }

