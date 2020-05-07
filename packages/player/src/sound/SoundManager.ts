/* eslint-disable no-unused-vars */
import { RES } from '../core/RES';
import { VFStage } from '../display/VFStage';
import { IActionSound } from '../core/model/IVFData';
import { EventLevel } from '../event/EventLevel';
import { EventType } from '../event/EventType';

export class SoundManager {
    private res: RES;
    private stage: VFStage;
    private trackIdMap: string[] = [];

    constructor(res: RES, vfStage: VFStage) {
        this.res = res;
        this.stage = vfStage;
        // vfStage.config.vfvars.useNativeAudio // 如果使用了native播放，不要加载和设置PIXI.sound， 在互动课件中会有问题，教室中使用audioContext会出错。
    }

    private getAudio(trackId: string | undefined): undefined | vf.IAudio {
        const ae = vf.AudioEngine.Ins();

        if (trackId === undefined) {
            return undefined;
        }

        return ae.map.get(this.stage.config.uuid.toString() + trackId);
    }

    public clear(): void {
        this.pause();
        const trackMap = this.trackIdMap;
        let audio: vf.IAudio | undefined;

        while (trackMap.length > 0) {
            audio = this.getAudio(trackMap.shift());

            if (audio) {
                audio.dispose();
            }
        }
    }

    public pause(): void {
        let audio: vf.IAudio | undefined;

        this.trackIdMap.forEach((trackId) => {
            audio = this.getAudio(trackId);

            if (audio) {
                audio.pause();
            }
        });
    }

    public resume(): void {
        let audio: vf.IAudio | undefined;

        this.trackIdMap.forEach((trackId) => {
            audio = this.getAudio(trackId);

            if (audio) {
                audio.play();
            }
        });
    }

    public pauseSound(data: IActionSound = {} as any): void {
        if (this.nativeEmit(data.assetId as number, 'pauseAudio', data)) {
            return;
        }

        if (this.weixinEmit()) {
            return;
        }

        const audio = this.getAudio(data.trackId);

        if (audio) {
            audio.pause();
        }
    }

    public resumeSound(data: IActionSound): void {
        if (this.nativeEmit(data.assetId as number, 'resumeAudio', data)) {
            return;
        }

        if (this.weixinEmit()) {
            return;
        }

        const audio = this.getAudio(data.trackId);

        if (audio && audio.paused) {
            audio.play();
        }
    }

    // tslint:disable-next-line: max-line-length
    public playSound(data: IActionSound): void {
        const asset = this.res.getAsset(data.assetId as number);

        if (asset === undefined || asset.url === undefined || asset.url === '') {
            console.warn('playback failed,missing assetId!', data);

            return;
        }

        if (this.nativeEmit(data.assetId as number, 'playAudio', data)) {
            return;
        }

        if (this.weixinEmit()) {
            return;
        }

        let audio = this.getAudio(data.trackId);

        if (audio) {
            audio.play();
        }
        else {
            // eslint-disable-next-line max-len
            audio = vf.AudioEngine.Ins().createAudio(this.stage.config.uuid.toString() + data.trackId, asset.url, { autoplay: false } as any);
            audio.play(data.time, data.offset, data.length);
            this.trackIdMap.push(data.trackId);
        }
    }

    public isWeixin(): boolean {
        const ua = window.navigator.userAgent.toLowerCase();

        return (/micromessenger/).test(ua);
    }

    private weixinEmit(): boolean {
        return false;
        // eslint-disable-next-line no-unreachable
        if (this.isWeixin()) {
            // document.addEventListener('WeixinJSBridgeReady', () => {audio.play(); }, false);
            // if (( window as any).WeixinJSBridge &&
            //     typeof ( window as any).WeixinJSBridge === 'object' &&
            //     typeof ( window as any).WeixinJSBridge.invoke === 'function') {
            //     ( window as any).WeixinJSBridge.invoke('getNetworkType', {}, () => {audio.pause(); });
            // }
        }
    }

    private nativeEmit(assetId: number | string, typeTag: string, data: IActionSound = {} as any): boolean {
        const useNative = this.stage.config.vfvars.useNativeAudio;

        if (useNative) { // 先放这里，后期soundManager完成后，合并
            const asset = this.res.getAsset(assetId);

            this.stage.systemEvent.emit(EventType.MESSAGE, {
                code: EventLevel.NATIVE,
                type: EventLevel.NATIVE,
                level: EventLevel.COMMAND,
                data: {
                    type: typeTag,
                    id: data.trackId || 0,
                    src: asset.url,
                    mode: data.mode || 'sound',
                },
            });

            return true;
        }

        return false;
    }
}
