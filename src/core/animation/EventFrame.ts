import { Frame } from './Frame';
import { IEventData } from '../model/IVFData';

export class EventFrame extends Frame<IEventData[]> {

        constructor() {
            super();
        }

        public getValue(progress: number, value: IEventData[]): IEventData[] {
            return this.value;
        }
    }

