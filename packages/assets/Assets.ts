import {AssetsType} from './IAssets'; 
// import * as IRES from './IRES';
// import readFileSync from '../../src/utils/readFileSync';

export function getAssetType(extensionName:string){
    switch(extensionName){
        case 'gif':
        case 'png':
        case 'bmp':
        case 'jpg':
        case 'jpeg':
        case 'tif':
        case 'tiff':
        case 'webp':
        case 'tga':
        case 'svg':
        case 'svg+xml':
            return AssetsType.Image;
        case 'mp3':
        case 'ogg':
        case 'wav':
            return AssetsType.Audio;
        case 'mp4':
        case 'webm':
        case 'mov':   
            return AssetsType.Video;
        case 'json':
            return AssetsType.Json;
        default:
            return AssetsType.Unknown;

    }
}
// export class RES{

//     private _defaultCdn:string[] = [];
//     private _tempAnchor: HTMLAnchorElement | null = null;
//     private _loadStrategyMap: Partial<Record<string, AbstractLoadStrategyCtor>> = {
//         // images
//         gif:        ImageLoadStrategy,
//         png:        ImageLoadStrategy,
//         bmp:        ImageLoadStrategy,
//         jpg:        ImageLoadStrategy,
//         jpeg:       ImageLoadStrategy,
//         tif:        ImageLoadStrategy,
//         tiff:       ImageLoadStrategy,
//         webp:       ImageLoadStrategy,
//         tga:        ImageLoadStrategy,
//         svg:        ImageLoadStrategy,
//         'svg+xml':  ImageLoadStrategy, // for SVG data urls

//         // audio
//         mp3:        AudioLoadStrategy,
//         ogg:        AudioLoadStrategy,
//         wav:        AudioLoadStrategy,

//         // videos
//         mp4:        VideoLoadStrategy,
//         webm:       VideoLoadStrategy,
//         mov:        VideoLoadStrategy,
//     }

//     public async getRes<K extends keyof XMLHttpRequestEventTargetEventMap>(url: string, options: Options = {}, listener?: Array<[ K , (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any]>): Promise < any > {
//         const cdns = this._defaultCdn;
//         for (const value of cdns) {
//             const data = await readFileSync( (value || '') + url, options, listener);
//             if (data) {
//                 return data;
//             }
//         }
//         return;
//     }
    

// }