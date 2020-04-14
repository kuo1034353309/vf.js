import { getFileExtension } from "./getFileExtension";
import { getAssetType } from "../../../assets/Assets";
import { CDN } from "../core/model/IVFData";
import { AssetsType } from "../../../assets/IAssets";

export function getUrl(url: string, baseUrl = '', cdns?: CDN, index = 0) {

    if (baseUrl !== '') {
        if (url.indexOf('http') === -1 && url.indexOf('//') === -1) {
            url = baseUrl + url;
        }
    }
    if (cdns) {
        url = getCdnUrl(url, cdns, index);
    }
    return url;
}

export function getCdnUrl(url: string, cdns: CDN, index = 0) {
    if (url.indexOf('data:') === 0) {
        return url;
    }
    const type = getAssetType(getFileExtension(url));
    let cdn: string[] | string;
    switch (type) {
        case AssetsType.Image:
            cdn = cdns.image;
            break;
        case AssetsType.Audio:
        case AssetsType.Video:
            cdn = cdns.media;
            break;
        default:
            cdn = cdns.default;
    }
    cdn = cdn[Math.max(index, cdn.length - 1) % cdn.length];
    if (url.indexOf('http') !== -1 || url.indexOf('//') === 0) {
        cdn += url.substr(url.indexOf('/', url.indexOf('.')));
    } else {
        cdn += url;
    }
    return cdn;
}
