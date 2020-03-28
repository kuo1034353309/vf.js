import {VFStage} from '../../display/VFStage';
import { ITransitionData, TransitionType, SceneEvent } from '../model/IVFData';
import { ITransition } from './ITransition';
import { CrossFadeFilter } from './filters/CrossFadeFilter';
import { CircleFadeFilter } from './filters/CircleFadeFilter';
import { CrossZoomFilter } from './filters/CrossZoomFilter';
import { DoomScreenFilter } from './filters/DoomScreenFilter';
import { HeartWipeFilter } from './filters/HeartWipeFilter';
import { LinearBlurFilter } from './filters/LinearBlurFilter';
import { PageCurlFilter } from './filters/PageCurlFilter';
import { ToTearFilter } from './filters/ToTearFilter';
import { WindFilter } from './filters/WindFilter';
import { PageFlipLeftFilter } from './filters/PageFlipLeftFilter';
import { PageFlipRightFilter } from './filters/PageFlipRightFilter';
import { FadeoutTran } from './trans/FadeoutTran';
import trace from '../../utils/Trace';
import { EventType } from '../../event/EventType';
import { EventLevel } from '../../event/EventLevel';

export class Transition {

    private vfStage: VFStage;
    private prevTexture: PIXI.RenderTexture;
    private data: ITransitionData;
    constructor(vfStage: VFStage, prevTexture: PIXI.RenderTexture, data: ITransitionData) {
        this.vfStage = vfStage;
        this.prevTexture = prevTexture;
        this.data = data;
    }

    public run(): void {
        const transition = this.getTransition(this.data.type);
        if (transition) {
            const systemEvent = this.vfStage.systemEvent;
            transition.setPreviousTexture(this.prevTexture);
            transition.progress = 0;
            transition.applyTranisition(this.vfStage.container);
            const tween = this.vfStage.tween;
            tween.setObject(transition);
            tween.once(gui.Tween.Event.complete, () => {
                transition.dispose();
                systemEvent.emit(EventType.STATUS, {
                    code: SceneEvent.TransitionEnd, level: EventLevel.STATUS, data: null,
                });
            });
            tween.to({progress: 1}, this.data.duration).start();
            systemEvent.emit(EventType.STATUS, {
                code: SceneEvent.TransitionStart, level: EventLevel.STATUS, data: null,
            });
        }
    }

    private getTransition(type: TransitionType): ITransition | null {
        if (this.vfStage && (
            this.vfStage.scaleX !== 1 || this.vfStage.scaleY !== 1 ||
            !this.vfStage.app?.renderer.context.webGLVersion)) {
            return new FadeoutTran();
        }
        switch (type) {
            case TransitionType.NONE:
                return null;
            case TransitionType.FADE_OUT:
                return new CrossFadeFilter();
            case TransitionType.CIRCLE_WIPE:
                return new CircleFadeFilter();
            case TransitionType.CROSS_ZOOM:
                return new CrossZoomFilter();
            case TransitionType.DOOM_SCREEN:
                return new DoomScreenFilter();
            case TransitionType.HEART_WIPE:
                return new HeartWipeFilter();
            case TransitionType.LINEAR_BLUR:
                return new LinearBlurFilter();
            case TransitionType.PAGE_CURL:
                return new PageCurlFilter();
            case TransitionType.TO_TEAR:
                return new ToTearFilter();
            case TransitionType.WIND:
                return new WindFilter();
            case TransitionType.PAGE_FLIP_LEFT:
                return new PageFlipLeftFilter();
            case TransitionType.PAGE_FLIP_RIGHT:
                return new PageFlipRightFilter();
            default:
                return null;
        }
        return null;
    }
}

