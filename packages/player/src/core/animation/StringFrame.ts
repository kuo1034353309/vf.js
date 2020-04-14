import { Frame } from './Frame';

export class StringFrame extends Frame<string> {

        constructor() {
            super();
        }

        public getValue(progress: number, value: string): string {
            return this.value;
        }
    }

