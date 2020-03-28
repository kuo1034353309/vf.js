import { Frame } from './Frame';

export class NumberFrame extends Frame<number> {

        constructor() {
            super();
        }

        public getValue(progress: number, value: number): number {
            return this.value + (value - this.value) * progress;
        }
    }
