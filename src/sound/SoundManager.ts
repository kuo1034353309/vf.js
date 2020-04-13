import { RES } from '../core/RES';
import { VFStage } from '../display/VFStage';
import { ISoundTrackMedia, SoundEvent, IActionPlaySound } from '../core/model/IVFData';
import EmptyAudio from '../assets/empty-audio.mp3';
import { EventLevel } from '../event/EventLevel';
import { EventType } from '../event/EventType';

export class SoundManager {

    private res: RES;
    private vfStage: VFStage;
    private trackMap: {[id: string]: ISoundTrackMedia} = {};
    
    constructor(res: RES, vfStage: VFStage) {
        this.res = res;
        this.vfStage = vfStage;
        if(vfStage.config.vfvars.useNativeAudio){
            return; // 如果使用了native播放，不要加载和设置PIXI.sound， 在互动课件中会有问题，教室中使用audioContext会出错。
        }
        // webAudio 在ipad下有时播放会有杂音， 该用Audio 模式
        vf.sound.useLegacy = true; 
        /*
        TODO:
            1、使用空音频文件探测容器环境是否支持音频自动播放，如果支持就不用管了。
            2、如不支持捕获一次全局页面点击，用于触发音频自动播放。
         */
    }
/*
    public async audioPlayplaySound(assetId: number) {
        const s = this.res.getSoundAsset(assetId);
        if (s) {
            const media = await s.play();
            media.volume = 0.5;
        }
    }
*/

    public clear(): void {
        this.pause();
        this.trackMap = {};
    }
    
    public pause(): void {
        for (const id in this.trackMap) {
            if (this.trackMap[id]) {
                const track = this.trackMap[id];
                if (track.sound && track.sound.isPlaying) {
                    track.sound.pause();
                }
            }
        }
    }
    
    public resume(): void {
        for (const id in this.trackMap) {
            if (this.trackMap[id]) {
                const track = this.trackMap[id];
                if (track.sound && track.sound.paused) {
                    track.sound.resume();
                }
            }
        }
    }


    public pauseSound(assetId: number, trackId: string , data: IActionPlaySound = {} as any) {
        if(typeof assetId === 'string' && assetId === ''){
            return;
        }    
        const asset = this.res.getAsset(assetId);
        if (asset === undefined || asset.url === undefined || asset.url === '') {
            return;
        }

        if (this.nativeEmit(assetId, 'pauseAudio', data)) {
            return;
        }

        if (this.weixinEmit(assetId, 'pauseAudio', data)) {
            return;
        }

        const audio = this.res.getSoundAsset(assetId);
        if (!audio) { return; } // TODO: throw error

        const trackMedia = this.trackMap[trackId];
        if (trackMedia) {

            // tslint:disable-next-line: no-string-literal
            if (trackMedia.sound && trackMedia.sound.isPlaying ) {
                trackMedia.sound.pause();
            }
        }
    }
    public resumeSound(assetId: number, trackId: string , data: IActionPlaySound = {} as any) {
         
        const asset = this.res.getAsset(assetId);
        if (asset === undefined || asset.url === undefined || asset.url === '') {
            return;
        }

        if (this.nativeEmit(assetId, 'resumeAudio', data)) {
            return;
        }

        if (this.weixinEmit(assetId, 'resumeAudio', data)) {
            return;
        }
        
        const audio = this.res.getSoundAsset(assetId);

        if (!audio) { return; } // TODO: throw error

        const trackMedia = this.trackMap[trackId];
        if (trackMedia) {
            // tslint:disable-next-line: no-string-literal
            if (trackMedia.sound && trackMedia.sound.paused ) {
                trackMedia.sound.resume(); 
                
            }
        }
            
    }

    // tslint:disable-next-line: max-line-length
    public async playSound(assetId: number, trackId: string , data: IActionPlaySound = {} as any) {

        const asset = this.res.getAsset(assetId);
        if (asset === undefined || asset.url === undefined || asset.url === '') {
            return;
        }
        
        if (this.nativeEmit(assetId, 'playAudio', data)) {
            return;
        }

        if (this.weixinEmit(assetId, 'playAudio', data)) {
            return;
        }

        const audio = this.res.getSoundAsset(assetId);

        if (!audio) { return; } // TODO: throw error

        const trackMedia = this.trackMap[trackId];
        if (trackMedia) {
            trackMedia.sound.stop();
            delete this.trackMap[trackId];
        }
        const soundTrackMedia = await this.createSoundTrackMedia(audio, trackId);
        this.trackMap[trackId] = soundTrackMedia;
        // const touchPlay = () => {
        //     audio.play();
        //     document.removeEventListener('touchstart', touchPlay, false);
        // };
        // if (audio.paused) {
        //     document.addEventListener('touchstart', touchPlay, false);
        // }
    }

    public async createSoundTrackMedia(audio: vf.sound.Sound, trackId: string): Promise<ISoundTrackMedia> {
        audio.autoPlay = false;
        const audioM = await audio.play();
        this.vfStage.systemEvent.emitExt(SoundEvent.SoundStart, trackId);
        audioM.once('end', () => {
            this.vfStage.systemEvent.emitExt(SoundEvent.SoundEnd, trackId);
        }, this);
        return {
            id: trackId,
            media: audioM,
            sound: audio,
        };
    }

    public isWeixin(): boolean {
        const ua = window.navigator.userAgent.toLowerCase();
        return /micromessenger/.test(ua);
    }

    private testAutoPlay() {
        return new Promise((resolve) => {
            const audio = document.createElement('audio');
            audio.src = EmptyAudio;
            document.body.appendChild(audio);
            let autoplay = true;
            audio.play().then(() => {
                autoplay = true;
                audio.remove();
                resolve(autoplay);
            }).catch((err) => {
                autoplay = false;
                audio.remove();
                resolve(autoplay);
            });
            /* mark: es2018才支持
            .finally(() => {
                audio.remove();
                resolve(autoplay);
            });*/

        });
    }

    private weixinEmit(assetId: number, typeTag: string, data: IActionPlaySound = {} as any) {
        return false;
        if (this.isWeixin()) {
            // document.addEventListener('WeixinJSBridgeReady', () => {audio.play(); }, false);
            // if (( window as any).WeixinJSBridge &&
            //     typeof ( window as any).WeixinJSBridge === 'object' &&
            //     typeof ( window as any).WeixinJSBridge.invoke === 'function') {
            //     ( window as any).WeixinJSBridge.invoke('getNetworkType', {}, () => {audio.pause(); });
            // }
        }
    }

    private nativeEmit(assetId: number, typeTag: string, data: IActionPlaySound = {} as any) {
        let useNative = this.vfStage.config.vfvars.useNativeAudio;
        if (data.useNative) {
            useNative = data.useNative;
        }

        if (useNative) { // 先放这里，后期soundManager完成后，合并
            const asset = this.res.getAsset(assetId);
            this.vfStage.systemEvent.emit(EventType.MESSAGE, {
                code : EventLevel.NATIVE,
                type : EventLevel.NATIVE,
                level: EventLevel.COMMAND,
                data : { 
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
