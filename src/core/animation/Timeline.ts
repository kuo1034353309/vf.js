import { TimelineType } from '../model/IVFData';
import { Frame } from './Frame';
import { getCurveProgress } from '../../utils/VFUtil';

export class Timeline<T> {

        public set defaultValue(value: T) {
            this._defaultValue = value;
            this._curValue = value;
        }
        public get curValue(): T {
            return this._curValue;
        }

        public set globalTime(v: number) {
            this._globalTime = v;
            this.tick();
            this._lastGlobalTime = v;
        }

        public type: TimelineType = null as any;
        public frames: Array<Frame<T>> = [];
        public curTime: number = 0;
        public lastTime: number = 0;
        public loop: boolean = false;
        public totalTime: number = 0;
        protected _defaultValue: T = null as any;
        protected _globalTime: number = 0;

        protected _lastGlobalTime: number = 0; 
        protected _lastFrame: Frame<T> | null = null as any;
        protected _curFrame: Frame<T> | null = null;
        protected _nextFrame: Frame<T> = null as any;
        protected _times: number = -1;

        protected _curValue: T = null as any;

        constructor() {
            //
        }

        protected getProgress(cur: number, min: number, max: number, curve: number[] | null = null): number {
            let lineProgress: number = 0;
            let curveProgress: number = 0;
            if (max === min) {
                lineProgress =  0;
            } else {
                lineProgress =  (cur - min) / (max - min);
            }
            curveProgress = lineProgress;
            if (curve && curve.length) {
                if (curve.length === 1) {
                    const curveType = curve[0];
                    curveProgress = getCurveProgress(curveType, lineProgress);
                }
                // todo bezier
            }
            return curveProgress;
        }

        protected tick(): void {
            this.curTime = this._globalTime;
            if (this.loop) {
                this._times = Math.floor(this.curTime / this.totalTime);
                this.curTime = this.curTime - this.totalTime * this._times;
            }
            this.updateCurFrame();
            this.updateCurValue();
            this.lastTime = this.curTime;
        }
        protected updateCurFrame(): void {
            if (this.frames.length === 0) {
                return;
            }
            this._lastFrame = this._curFrame;
            let i: number = 0;
            let len: number = 0;
            for (i = 0, len = this.frames.length; i < len; i++) {
                if (this.frames[i].time > this.curTime) {
                    if (i === 0) {
                        this._curFrame = null;
                        this._nextFrame = this.frames[i];
                    } else {
                        this._curFrame = this.frames[i - 1];
                        this._nextFrame = this.frames[i];
                    }
                    return;
                }
            }
            this._curFrame = this.frames[this.frames.length - 1];
            this._nextFrame = this._curFrame;
        }

        protected updateCurValue(): void {
            if (this._curFrame && this._nextFrame) {
                const p = this.getProgress(this.curTime, this._curFrame.time, 
                                           this._nextFrame.time, this._curFrame.curve);

                this._curValue = this._curFrame.getValue(p, this._nextFrame.value);
            }
        }
    }

