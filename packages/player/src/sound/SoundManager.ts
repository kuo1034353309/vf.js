/* eslint-disable no-unused-vars */
import { RES } from '../core/RES';
import { VFStage } from '../display/VFStage';
import { ISoundTrackMedia, SoundEvent, IActionPlaySound } from '../core/model/IVFData';
import { EventLevel } from '../event/EventLevel';
import { EventType } from '../event/EventType';

export class SoundManager {
    private res: RES;
    private vfStage: VFStage;
    private trackMap: { [id: string]: ISoundTrackMedia } = {};

    constructor(res: RES, vfStage: VFStage) {
        this.res = res;
        this.vfStage = vfStage;
        // vfStage.config.vfvars.useNativeAudio // 如果使用了native播放，不要加载和设置PIXI.sound， 在互动课件中会有问题，教室中使用audioContext会出错。
    }

    private getAudio(trackId: string): undefined | vf.IAudio {
        const ae = vf.AudioEngine.Ins();

        return ae.map.get(this.vfStage.config.uuid.toString() + trackId);
    }

    public clear(): void {
        this.pause();
        this.trackMap = {};
    }

    public pause(): void {
        const ae = vf.AudioEngine.Ins();

        for (const id in this.trackMap) {
            const audio = ae.map.get(id);

            if (audio) {
                audio.pause();
            }
        }
    }

    public resume(): void {
        const ae = vf.AudioEngine.Ins();

        for (const id in this.trackMap) {
            const audio = ae.map.get(id);

            if (audio) {
                audio.play();
            }
        }
    }

    public pauseSound(assetId: number, trackId: string, data: IActionPlaySound = {} as any): void {
        if (typeof assetId === 'string' && assetId === '') {
            return;
        }
        const asset = this.res.getAsset(assetId);

        if (asset === undefined) {
            return;
        }

        if (this.nativeEmit(assetId, 'pauseAudio', data)) {
            return;
        }

        if (this.weixinEmit()) {
            return;
        }

        const audio = this.res.getSoundAsset(assetId);

        if (!audio) { return; } // TODO: throw error

        const trackMedia = this.trackMap[trackId];

        if (trackMedia) {
            // tslint:disable-next-line: no-string-literal
            if (trackMedia.sound && trackMedia.sound.isPlaying) {
                trackMedia.sound.pause();
            }
        }
    }
    public resumeSound(data: IActionPlaySound): void {

        if (this.nativeEmit(data.assetId, 'resumeAudio', data)) {
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

    // tslint:disable-next-line: max-line-length
    public playSound(data: IActionPlaySound): void {
        const asset = this.res.getAsset(data.assetId);

        if (asset === undefined || asset.url === undefined || asset.url === '') {
            return;
        }

        if (this.nativeEmit(data.assetId, 'playAudio', data)) {
            return;
        }

        if (this.weixinEmit()) {
            return;
        }

        const audio = this.getAudio(data.trackId);

        if (audio) {
            audio.play();
        }
        else {
            // eslint-disable-next-line max-len
            vf.AudioEngine.Ins().createAudio(this.vfStage.config.uuid.toString() + data.trackId, asset.url).play(data.time, data.offset, data.length);
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

    private nativeEmit(assetId: number | string, typeTag: string, data: IActionPlaySound = {} as any): boolean {
        const useNative = this.vfStage.config.vfvars.useNativeAudio;

        if (useNative) { // 先放这里，后期soundManager完成后，合并
            const asset = this.res.getAsset(assetId);

            this.vfStage.systemEvent.emit(EventType.MESSAGE, {
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
