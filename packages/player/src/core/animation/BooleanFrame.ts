import { Frame } from './Frame';

export class BooleanFrame extends Frame<boolean> {

        constructor() {
            super();
        }

        public getValue(progress: number, value: boolean): boolean {
            return this.value;
        }
    }

