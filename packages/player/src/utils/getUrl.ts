import { getFileExtension } from './getFileExtension';
import { getAssetType } from '../../../assets/Assets';
import { CDN } from '../core/model/IVFData';
import { AssetsType } from '../../../assets/IAssets';

export function getCdnUrl(url: string, cdns: CDN, index = 0): string {
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
    }
    else {
        cdn += url;
    }

    return cdn;
}

export function getUrl(url: string, baseUrl = '', cdns?: CDN, index = 0): string {
    if (baseUrl) {
        if (url.indexOf('http') === -1 && url.indexOf('//') === -1) {
            url = baseUrl + url;
        }
    }
    else if (cdns) {
        url = getCdnUrl(url, cdns, index);
    }
    else {
        // 根据index.json的路径选择host，同时判断是否本地数据
    }

    return url;
}
