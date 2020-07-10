import { AnimationClip } from './AnimationClip';
import { VFComponent } from '../../display/VFComponent';
import { IAnimation, ITimeline, TimelineType, IFrame, ISubAnimation, AnimationEvent, AnimationStatus } from '../model/IVFData';
import { Timeline } from './Timeline';
import { NumberFrame } from './NumberFrame';
import { BooleanFrame } from './BooleanFrame';
import { StringFrame } from './StringFrame';
import { ColorFrame } from './ColorFrame';
import { Frame } from './Frame';
import { EventTimeline } from './EventTimeline';
import { EventFrame } from './EventFrame';
import { PathTimeline } from './PathTimeline';

export class Animation {

        private animationMap: {[name: string]: AnimationClip[]} = {};
        private animationConfig: {[name: string]: {loop?: boolean, totalTime: number, autoPlay?: boolean}} = {};

        private status: number = AnimationStatus.STOP;
        private curAnimationClips: AnimationClip[] = [];

        /**
         * realFPS 为 true时，真实的fps和设置的fps不一致时，动画的刷新率取最低的那个。
         * 默认是false， 真实的fps和设置的fps不一致时，动画的刷新率取真实的fps
         */
        private realFPS: boolean = false;
        private curTime: number = 0;
        private lastTime: number = 0;
        private curPlayTime: number = 0;
        private startTime: number = 0;
        private passedTime: number = 0;
        private component: VFComponent;
        private data: IAnimation[];
        private minDeltaT: number = 33;
        private deltaT: number = 0;
        private fps: number = 30;
        private curAnimatinName: string = '';
        private curAnimatinDuration: number = 0;
        private curAnimatinDurationTime: number = 0;
        private curAnimationTimes: number = 0;
        private curAnimationTotalTime: number = 0;
        private _curPlayTimes: number = 0;
        private _animationTemplate: {[id: string]: ISubAnimation};

        constructor(component: VFComponent, data: IAnimation[], fps: number = 30, realFPS: boolean = true, 
                    animationTemplate: {[id: string]: ISubAnimation} = {}) {
            this.component = component;
            this.data = data;
            this.realFPS = realFPS;
            if (fps > 0) {
                this.fps = fps;
            }
            this.minDeltaT = Math.ceil(1000 / this.fps);
            this.deltaT = 0;
            this._animationTemplate = animationTemplate;
            this.parseData();
        }

        public addAnimationClip(clip: AnimationClip): void {
            const name = clip.name;
            let animations = this.animationMap[name];
            if (animations == null) {
                animations = [];
                this.animationMap[name] = animations;
            }
            animations.push(clip);
        }

        public getPauseData(): {animation: string, frame: number, times: number} | undefined {
            if (this.status === AnimationStatus.PLAYING) {
                return {
                    animation: this.curAnimatinName,
                    frame: Math.round(this.curPlayTime * this.fps / 1000),
                    times: this.curAnimationTimes <= 0 ? 
                                this.curAnimationTimes : 
                                (this.curAnimationTimes - this._curPlayTimes),
                };
            }
            return undefined;
        }
        public playDefaultAnimation(): void {
            if (this.status === AnimationStatus.PLAYING) {
                return;
            }
            for ( const name in this.animationConfig) {
                if (this.animationConfig[name]) {
                    const config = this.animationConfig[name];
                    if (config.autoPlay) {
                        this.play(name, config.loop ? -1 : 1);
                        break;
                    }
                }
            }
        }

        public gotoPlay(name: string, frameIndex: number, times: number = 1): void  {
            if (this.status === AnimationStatus.PLAYING) {
                this.stop();
            }
            const config = this.animationConfig[name];
            if (config) {
                this.curAnimatinDuration = config.totalTime;
            } else {
                // tslint:disable-next-line: no-console
                console.warn('can not find animation:', name);
                return;
            }
            this.curAnimatinName = name;
            this.curAnimationClips = this.animationMap[name];
            this.curAnimationTimes = times;
            this.curAnimationTotalTime = Math.round(this.curAnimatinDuration * 
                                                    this.curAnimationTimes * (1000 / this.fps));
            this.curAnimatinDurationTime = Math.round(this.curAnimatinDuration * 1000 / this.fps);
            this.curPlayTime = frameIndex * (1000 / this.fps);
            this.deltaT = 0;
            this.setCurTime(this.curPlayTime);
            this.status = AnimationStatus.PLAYING;
            this.startTime = new Date().getTime();
            this.curTime = this.startTime;
            this.lastTime = this.startTime;
            this.startTime -= this.curPlayTime;
            this._curPlayTimes = 0;
            vf.gui.TickerShared.add(this.tick, this);
        }
        public gotoStop(name: string, frameIndex: number): void {
            if (this.status === AnimationStatus.PLAYING) {
                this.stop();
            }
            const config = this.animationConfig[name];
            if (config) {
                this.curAnimatinDuration = config.totalTime;
            } else {
                // tslint:disable-next-line: no-console
                console.warn('can not find animation:', name);
                return;
            }

            this.curAnimationClips = this.animationMap[name];
            this.curAnimationTimes = 1;
            this.curAnimationTotalTime = Math.round(this.curAnimatinDuration * 
                                                    this.curAnimationTimes * (1000 / this.fps));
            this.curAnimatinDurationTime = Math.round(this.curAnimatinDuration * 1000 / this.fps);
            this.curPlayTime = frameIndex * (1000 / this.fps);
            this.deltaT = 0;
            this.setCurTime(this.curPlayTime);
            this.status = AnimationStatus.STOP;
            this.startTime = new Date().getTime();
            this.curTime = this.startTime;
            this.lastTime = this.startTime;
            this.startTime -= this.curPlayTime;
            this._curPlayTimes = 0;
            this.tick();
        }

        public play(name: string, times = 1): void {
            this.gotoPlay(name, 0, times);
        }

        public stop(): void {
            vf.gui.TickerShared.remove(this.tick, this);
            this.status = AnimationStatus.STOP;
            this.skipNextEvent();
        }

        protected set curPlayTimes(v: number) {
            if (v !== this._curPlayTimes) {
                this._curPlayTimes = v;
                if (this.component) {
                    this.component.emit(AnimationEvent.AnimationLoopComplete, v);
                    if (this.curAnimationTimes > 0 && this._curPlayTimes >= this.curAnimationTimes) {
                        this.component.emit(AnimationEvent.AnimationComplete);
                    }
                }
            }
        }
        protected tick(): void {
            const curTime = new Date().getTime();
            this.curTime = curTime;
            const dt = this.curTime - this.lastTime;
            this.curPlayTime += dt;
            if (this.realFPS) {
                this.deltaT += dt;
                if (this.deltaT < this.minDeltaT) {
                    this.lastTime = this.curTime;
                    this.passedTime = this.curTime - this.startTime;

                    if (this.curAnimationTimes > 0 && 
                        this.passedTime > this.curAnimationTotalTime) {
                        this.stop();
                    }
                    this.curPlayTimes = Math.floor(this.passedTime / this.curAnimatinDurationTime);
                    return;
                }
                while (this.deltaT > this.minDeltaT) {
                    this.deltaT -= this.minDeltaT;
                }
            }
            if (this.curPlayTime > this.curAnimatinDurationTime) {
                if (this.curAnimationTimes < 0 || // 循环播放
                    this.curAnimationTimes > 1 && this._curPlayTimes < this.curAnimationTimes - 1) { // 非最后一次播放
                    this.curPlayTime = this.curPlayTime % this.curAnimatinDurationTime;
                }
            }
            this.setCurTime(this.curPlayTime);

            this.lastTime = this.curTime;
            this.passedTime = this.curTime - this.startTime;

            if (this.curAnimationTimes > 0 && 
                this.passedTime > this.curAnimationTotalTime) {
                this.setCurTime(this.curAnimationTotalTime);
                this.stop();
            }
            this.curPlayTimes = Math.floor(this.passedTime / this.curAnimatinDurationTime);
            
        }

        protected setCurTime(curTime: number): void { 
            if (this.curAnimationClips) {
                for (let i: number = 0, len: number = this.curAnimationClips.length; i < len; i++) {
                    const clip = this.curAnimationClips[i];
                    clip.curTime = curTime;
                }
            }
        }

        protected skipNextEvent(): void {
            if (this.curAnimationClips) {
                for (let i: number = 0, len: number = this.curAnimationClips.length; i < len; i++) {
                    const clip = this.curAnimationClips[i];
                    clip.skipNextEvent();
                }
            }
        }
        //  parse
        private parseData(): void {
            if (this.component && this.data) {
                for (let i: number = 0, len: number = this.data.length; i < len; i++) {
                    this.parseAnimation(this.data[i]);
                }
            }
        }

        private parseAnimation(anim: IAnimation): void {
            const name = anim.name;
            const totalTime = anim.duration || 0;
            const loop = anim.loop;
            const autoPlay = anim.autoPlay;

            const config = {
                loop,
                totalTime,
                autoPlay,
            };
            this.animationConfig[name] = config;
            let duration: number = 0;
            for (const key in anim.children) {
                const subAnim = anim.children[key];
                if (subAnim) {
                    let subAnimation: ISubAnimation;
                    if(typeof subAnim === 'string') {
                        subAnimation = this._animationTemplate[subAnim]
                    } else {
                        subAnimation = subAnim;
                    }
                    if(subAnimation) {
                        const ac = this.parseAnimationClip( key, name, subAnimation);
                        if (ac && ac.totalTime > duration) {
                            duration = ac.totalTime;
                        }
                    }
                }
            }

            if (!anim.duration || anim.duration <= 0) {
                anim.duration = duration;
                config.totalTime = duration;
            }
        }

        private parseAnimationClip(componentId: string, animName: string, 
                                   subAnimation: ISubAnimation): AnimationClip | undefined {
            const childId = componentId;
            let component: vf.gui.DisplayObject;
            if (childId === TimelineType.EVENT) {
                component = this.component;
            } else {
                component = this.component.getChildById(childId);
            }
            if (component) {
                const animClip = new AnimationClip(animName);
                animClip.name = animName;
                animClip.fps = this.fps;
                animClip.target = component;
                animClip.totalTime = subAnimation.duration || 0;
                animClip.loop = !!subAnimation.loop;
                let duration: number = 0;
                for (let i: number = 0, len: number = subAnimation.timelines.length; i < len; i++) {
                    const timelineData = subAnimation.timelines[i];
                    const timeline = this.parseTimeline(timelineData, subAnimation.duration);
                    if (timeline) {
                        animClip.timelines.push(timeline);
                        if (timeline.totalTime > duration) {
                            duration = timeline.totalTime;
                        }
                    }
                }
                
                if (!animClip.totalTime || animClip.totalTime <= 0) {
                    animClip.totalTime = duration;
                }
                this.addAnimationClip(animClip);
                return animClip;
            }
        }

        private parseTimeline(data: ITimeline, duration: number = -1): Timeline<any> | undefined {
            let timeline: Timeline<any> | undefined;

            switch (data.type) {
                case TimelineType.X:
                case TimelineType.Y:
                case TimelineType.SCALE_X:
                case TimelineType.SCALE_Y:
                case TimelineType.ROTATION:
                case TimelineType.SKEW_X:
                case TimelineType.SKEW_Y:
                case TimelineType.ALPHA:
                case TimelineType.PROGRESS:
                case TimelineType.ALPHA:
                case TimelineType.VOLUME:
                case TimelineType.FITERBLUR:   
                    timeline = new Timeline<number>();
                    this.parseFrames(timeline, data.frames, NumberFrame);
                    break;
                case TimelineType.VISIBLE:
                case TimelineType.ENABLED:
                    timeline = new Timeline<boolean>();
                    this.parseFrames(timeline, data.frames, BooleanFrame);
                    break;
                case TimelineType.TEXT:
                case TimelineType.PLAY:
                    timeline = new Timeline<string>();
                    this.parseFrames(timeline, data.frames, StringFrame);
                    break;
                case TimelineType.COLOR:
                    timeline = new Timeline<number>();
                    this.parseFrames(timeline, data.frames, ColorFrame);
                    break;
                case TimelineType.EVENT:
                    timeline = new EventTimeline();
                    this.parseFrames(timeline, data.frames, EventFrame);
                    break;
                case TimelineType.PATH:
                    if(data.path) {
                        timeline = new PathTimeline(data.path);
                        this.parseFrames(timeline, data.frames, NumberFrame);
                    }
                    break;
                default:
                    timeline = new Timeline<number>();
                    this.parseFrames(timeline, data.frames, NumberFrame);
                    break;
            }
            if (timeline) {
                timeline.type = data.type;
                timeline.loop = !!data.loop;
                if (data.frames && data.frames.length) {
                    timeline.totalTime = data.frames[data.frames.length - 1].frame;
                } else {
                    timeline.totalTime = 0;
                }
                
            }
            return timeline;
        }
        private parseFrames(timeline: Timeline<any>, data: IFrame[], frameClass: new () => Frame<any>): void {
            for (let i: number = 0, len: number = data.length; i < len; i++) {
                const frameData = data[i];
                const frame = new frameClass();
                frame.time = frameData.frame;
                frame.curve = frameData.curve;
                frame.value = frameData.value;
                timeline.frames.push(frame);
            }
        }
    }

