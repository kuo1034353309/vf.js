import { BaseTask, TaskEvent } from './core/BaseTask';

export class BreakTask extends BaseTask {
        

        constructor() {
            super();
        }   

        public run(): void {
            super.run();
            this.break();
            this.complete();
        }
    }

