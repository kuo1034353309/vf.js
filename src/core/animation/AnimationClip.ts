import { Timeline } from './Timeline';
import { TimelineType, IEventData } from '../model/IVFData';
import { VFComponent } from '../../display/VFComponent';
import { EventTimeline } from './EventTimeline';

export class AnimationClip {

        private get targetDisplay(): gui.DisplayObject {
            return this.target as gui.DisplayObject;
        }

        public set curTime(v: number) {
            this._curTime = v;
            this._curFrame = this._curTime * this.fps / 1000;
            if (this.loop) {
                this._curFrame = this._curFrame % this.totalTime;
            }
            for (let i = 0, len = this.timelines.length; i < len; i++) {
                this.timelines[i].globalTime = this._curFrame;
            }
            this.applyTimeline();
        }

        public name: string;
        public timelines: Array<Timeline<any>> = [];
        public fps: number = 30;
        public target: any;
        public totalTime: number = 0;
        public loop: boolean = false;
        private _curTime: number = 0;
        private _curFrame: number = 0;
        constructor(name: string) {
            this.name = name;
        }

        public skipNextEvent(): void {
            for (let i = 0, len = this.timelines.length; i < len; i++) {
                const timeline = this.timelines[i];
                if (timeline instanceof EventTimeline) {
                    timeline.skipNextEmit();
                }
            }
        }
        private applyTimeline(): void {
            if (this.target == null) {
                return;
            }
            for (let i: number = 0, len: number = this.timelines.length; i < len; i++) {
                const timeline = this.timelines[i];
                const targetDisplay = this.targetDisplay;
                const curValue = timeline.curValue;
                switch (timeline.type) {
                    case TimelineType.X:
                        targetDisplay.x = curValue;
                        break;
                    case TimelineType.Y:
                        targetDisplay.y = curValue;
                        break;
                    case TimelineType.SCALE_X:
                        targetDisplay.scaleX = curValue;
                        break;
                    case TimelineType.SCALE_Y:
                        targetDisplay.scaleY = curValue;
                        break;
                    case TimelineType.ROTATION:
                        targetDisplay.rotation = curValue;
                        break; 
                    case TimelineType.VISIBLE:
                        targetDisplay.visible = curValue;
                        break;
                    case TimelineType.ALPHA:
                        targetDisplay.alpha = curValue;
                        break;
                    case TimelineType.TEXT:
                        (targetDisplay as gui.Label).text = curValue;
                        break;
                    case TimelineType.ENABLED:
                        targetDisplay.enabled = curValue;
                        break;
                    case TimelineType.FITERBLUR:
                        targetDisplay.filterBlur = curValue;
                        break;
                    case TimelineType.EVENT:
                        const events = curValue as IEventData[];
                        if (events) {
                            for (let j: number = 0, jlen: number = events.length; j < jlen; j++) {
                                const event = events[j];
                                (targetDisplay as VFComponent).emit(event.type, event.data);
                            }
                        }
                        break;
                    default:
                        if (timeline.type.indexOf('filter') === 0) {
                            this.applyFilter(targetDisplay, timeline.type, curValue);
                        } else {
                            (targetDisplay as any)[timeline.type] = curValue;
                        }
                        break;
                    
                }
            }
        }
        private applyFilter(display: gui.DisplayObject, filterKey: string, value: any): void {
            const filterKeys = filterKey.split('.');
            let target = display as any;
            for (let i: number = 0, len: number = filterKeys.length; i < len - 1 ; i++) {
                const curkey = filterKeys[i];
                if (target && target[curkey]) {
                    target = target[curkey];
                }
            }
            if (target) {
                target[filterKeys[filterKeys.length - 1]] = value;
            }
            
        }
    }

