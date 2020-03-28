import { Timeline } from './Timeline';
import { IEventData } from '../model/IVFData';
import { EventFrame } from './EventFrame';

export class EventTimeline extends Timeline<IEventData[]> {
    
    private nextFrame?: EventFrame;
    private nextFrameIndex: number = 0;
    private skipEmit: boolean = false;
    constructor() {
        super();
        this._curValue = [];
    }

    public skipNextEmit(): void {
        //
        this.lastTime = 0;
        this.nextFrame = undefined;
    }

    protected getProgress(cur: number, min: number, max: number, curve: number[] | null = null): number {
        return cur;
    }

    protected updateCurFrame(): void {
        if (this.frames.length === 0) {
            return;
        }
    }
    protected updateCurValue(): void {
        this._curValue.length = 0;
        if (this.frames.length === 0) {
            return;
        }
        if (this.nextFrame === undefined) {
            this.nextFrame = this.frames[0];
            this.nextFrameIndex = 0;
        }
        
        if (this.curTime >= this.lastTime) {
            if (this.curTime > this.nextFrame.time) {
                this.findEvents(this.nextFrameIndex, false);
            }
        } else {
            this.findEvents(0, true);
        }
    }

    private findEvents(startIndex: number, turnBack: boolean = false): void {
        if (turnBack) {
            for (let i = this.nextFrameIndex, len: number = this.frames.length; i < len; i++) {
                const frame = this.frames[i];
                this.addEvent(frame);
            }
        }
        for (let i = startIndex, len: number = this.frames.length; i < len; i++) {
            const frame = this.frames[i];
            if (frame.time < this.curTime && (turnBack || frame.time >= this.lastTime) ) {
                this.addEvent(frame);
            } else if (frame.time > this.curTime) {
                this.nextFrame = frame;
                this.nextFrameIndex = i;
                break;
            }
            this.nextFrameIndex = Number.MAX_VALUE;
        }
    }
    private addEvent(frame: EventFrame): void {
        if (frame.value) {
            for (let j: number = 0, jlen: number = frame.value.length; j < jlen; j++) {
                this._curValue.push(frame.value[j]);
            }
        }
    }
}
