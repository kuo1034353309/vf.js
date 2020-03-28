import { EventLevel } from './EventLevel';


export default interface IEvent {
    code: string;
    level: EventLevel;
    data: any;
    target?: any;
    message?: string;
    type?: string;
}
