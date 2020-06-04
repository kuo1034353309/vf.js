import { IVFDataV1, IScene, IAsset, AssetType, LoadMode } from '../core/model/IVFData';

/**
 * 获取场景数据
 * @param data 需要处理的完整json数据
 * @param id 不传id,获取第一个场景数据
 */
export function getSceneData(data: IVFDataV1, id?: string): IScene | undefined {
    const scenes = data.scenes;

    if (scenes) {
        if ((id === undefined || id === '') && scenes[0]) {
            return scenes[0];
        }
        id = id?.toString();
        for (let i = 0, len = scenes.length; i < len; i++) {
            if (scenes[i].id.toString() === id) {
                return scenes[i];
            }
        }
    }

    return undefined;
}

/**
 * 根据索引获取场景数据
 * @param data 需要处理的完整json数据
 * @param index 索引号
 */
export function getSceneDataByIndex(data: IVFDataV1, index: number): IScene | undefined {
    const scenes = data.scenes;

    if (scenes && scenes[index]) {
        return scenes[index];
    }

    return undefined;
}

/**
 * 获取下一个场景数据
 * @param curId
 */
export function getNextSceneData(data: IVFDataV1, curId?: string): IScene | undefined {
    if (data.scenes && curId) {
        for (let i = 0, len = data.scenes.length; i < len; i++) {
            if (data.scenes[i].id === curId) {
                if (i < len - 1) {
                    return data.scenes[i + 1];
                }
            }
        }
    }

    return undefined;
}
/**
 * 获取上一个场景数据
 * @param curId
 */
export function getPrevSceneData(data: IVFDataV1, curId?: string): IScene | undefined {
    if (data.scenes && curId) {
        for (let i = 0, len = data.scenes.length; i < len; i++) {
            if (data.scenes[i].id === curId) {
                if (i > 0) {
                    return data.scenes[i - 1];
                }
            }
        }
    }

    return undefined;
}
/**
 * 获取当前场景需要的js库
 * @param data json完整数据
 * @param cdns cdn路径
 */
export function getSceneJS(data: IVFDataV1): IAsset[] {
    const assets: IAsset[] = [];

    for (const key in data.assets) {
        const item = data.assets[key];

        if (item.type === AssetType.JS) {
            if (item.name === undefined) {
                throw new Error(`loader ${item.url} failed, missing name field`);
            }
            assets.push(item);
        }
    }

    return assets;
}

/**
 * 获取当前场景的资源加载项
 * @param data json完整数据
 * @param sceneData 场景数据
 */
export function getSceneAssets(data: IVFDataV1, sceneData: IScene): IAsset[] {
    const assets: IAsset[] = [];

    // 场景是否单独配置加载策略
    if (data.loadMode === LoadMode.ALL || sceneData.assets === undefined) {
        for (const key in data.assets) {
            if (data.assets[key].type !== AssetType.JS) {
                assets.push(data.assets[key]);
            }
        }
    }
    else {
        let item: IAsset;

        sceneData.assets.forEach((value) => {
            item = data.assets[value];
            if (item && item.type !== AssetType.JS) {
                assets.push(item);
            }
        });
    }

    return assets;
}

/**
 * 修复资源数据,补充ID
 * @param data
 */
export function assetsRepair(data: IVFDataV1): IVFDataV1 {
    let item: IAsset;

    for (const key in data.assets) {
        item = data.assets[key];
        if (item.id === undefined) {
            item.id = key;
        }
    }

    return data;
}

