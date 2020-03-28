
    export class Frame<T> {

        public time: number = -1;
        public curve?: number[] = [];
        public value: T  = null as any;

        constructor() {
            //
        }

        public getValue(progress: number, value: T): T {
            return null as any;
        }
    }

