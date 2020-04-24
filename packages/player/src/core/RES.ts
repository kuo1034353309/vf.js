/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {
    IVFDataV1, IAsset, IAssetFail, IScene, ComponentType, ICustomComponent, IDisplayComponent,
    AssetType, SceneEvent, IAction, ActionType, IActionDefineVariable, AllAction,
} from './model/IVFData';
import { VFStage } from '../display/VFStage';
import { VFScene } from '../display/VFScene';
import { VariableManager } from './VariableManager';
import { VFComponent } from '../display/VFComponent';
import { ActionList } from './actionTask/ActionList';
import { Animation } from './animation/Animation';
import { EventLevel } from '../event/EventLevel';
import { getAssetType } from '../../../assets/Assets';
import { AssetsType } from '../../../assets/IAssets';
import importScript from '../utils/ImportScript';
import IEvent from '../event/IEvent';
import { getUrl } from '../utils/getUrl';

export class RES extends vf.utils.EventEmitter {
    public pixiResources: { [id: string]: vf.LoaderResource } = {};

    public data: IVFDataV1 = null as any;
    public vfActions: IAction[] = [];
    private stage: VFStage;

    private _resources: IAsset[] = [];
    private _sceneMap: { [id: string]: VFScene } = {};
    private _loadNum = 0;
    private _loader?: vf.Loader;
    private _assetFails = new Map<string, IAssetFail>();

    constructor(stage: VFStage) {
        super();
        vf.gui.Utils.setSourcePath(this.getImageAsset.bind(this) as any);
        vf.gui.Utils.setDisplayObjectPath(this.getDisplayObject.bind(this) as any);
        this.stage = stage;
    }

    public destroy(): void {
        if (this.pixiResources) {
            for (const id in this.pixiResources) {
                if (this.pixiResources[id]) {
                    const resource = this.pixiResources[id];

                    if (resource.texture) {
                        resource.texture.destroy(true);
                        delete this.pixiResources[id];
                    }
                    else if ((resource as any).sound) {
                        if ((resource as any).sound.media) {
                            (resource as any).sound.destroy();
                        }
                        delete this.pixiResources[id];
                    }
                }
            }
        }
        vf.utils.destroyTextureCache();
        vf.utils.clearTextureCache();
        if (this._loader) {
            this._loader.destroy();
        }
        this.stage = undefined as any;
        this._sceneMap = {};
    }
    public addResource(asset: IAsset): void {
        this._resources.push(asset);
    }

    public async loadData(data: IVFDataV1): Promise<void> {
        this.data = data;
        if (this.data && this.data.assets) {
            await this.loadAllScript(); // 先加载脚本 loadAllAsset 非同步，后续单独提取assets同步加载，此处js并不算入进度
            await this.loadAllAsset();
        }
        else {
            this.emit(SceneEvent.LoadComplete, null);
        }
    }

    public createFirstScene(vfStage: VFStage): VFScene | null {
        this.initGlobalVariable();
        if (this.data.scenes && this.data.scenes.length > 0) {
            return this.createScene(this.data.scenes[0].id, vfStage);
        }

        return null;
    }

    public createNextScene(curId: string, vfStage: VFStage): VFScene | null {
        const nextSceneData = this.getNextSceneData(curId);

        if (nextSceneData) {
            return this.createScene(nextSceneData.id, vfStage);
        }

        return null;
    }

    public createPrevScene(curId: string, vfStage: VFStage): VFScene | null {
        const nextSceneData = this.getPrevSceneData(curId);

        if (nextSceneData) {
            return this.createScene(nextSceneData.id, vfStage);
        }

        return null;
    }

    public createScene(id: string, vfStage: VFStage): VFScene | null {
        const sceneData = this.getSceneData(id);

        if (sceneData) {
            let vfScene: VFScene = this._sceneMap[id];

            if (vfScene == null) {
                vfScene = new VFScene(vfStage);
                vfScene.transition = sceneData.transition;
            }
            vfScene.id = id;
            this._sceneMap[id] = vfScene;
            if (sceneData.libId) {
                const scene: VFComponent = this.createComponent(sceneData.libId, sceneData.id) as any;

                if (scene) {
                    scene.width = vfStage.width;
                    scene.height = vfStage.height;
                    vfScene.addComponent(scene);
                }
            }

            return vfScene;
        }

        return null;
    }

    public getImageAsset(index: number | string): vf.Texture | string | undefined {
        // base64
        if (index.toString().substr(0, 4) === 'data') {
            return index.toString();
        }

        const resource = this.getAsset(index);

        if (resource) {
            const assetData = this.data.assets[index];

            switch (assetData.type) {
                case AssetType.IMAGE:
                    return resource.texture as vf.Texture;
                case AssetType.SHEET:
                    return resource.spritesheet;
                default:
                    return resource;
            }
        }

        return undefined;
    }

    public getDisplayObject(id: string, target?: vf.gui.DisplayObject): any | undefined {
        if (id == undefined) {
            return undefined;
        }
        // 单独写组件ID为创建一个组件复制到显示对象，如果是从场景ID - ID - ID为查找
        if (id.toString().substr(0, 4) === 'this' && target && target.parent instanceof VFComponent) {
            const childIds = id.split('#');

            childIds.shift();
            let child = target.parent as VFComponent;

            while (childIds.length > 0 && child) {
                const id = childIds.shift() as string;

                child = child.getChildById(id) as VFComponent;
            }
            if (child) {
                return child;
            }
            this.stage.systemEvent.emitError('E0006', [id], EventLevel.WARNING);

            return undefined;
        }

        return this.creategui(id);
    }

    public getAsset(index: number | string): any {
        const assetData = this.data.assets[index];

        if (assetData === undefined || assetData.id == null) {
            this.stage.systemEvent.emitError('E0003', [index], EventLevel.WARNING);

            return undefined;
        }

        return this.pixiResources[assetData.id.toString()];
    }

    public getSoundAsset(index: number): vf.sound.Sound | undefined {
        const assetData = this.getAsset(index);

        if (assetData) {
            return assetData.sound as vf.sound.Sound;
        }

        return undefined;
    }

    private async loadAllScript(): Promise<void> {
        const assets = this.data.assets;
        const cdns = this.stage.config.cdns;
        let assetsItem: IAsset;

        for (const id in assets) {
            assetsItem = assets[id];
            if (assetsItem && assetsItem.type === AssetType.JS && assetsItem.name) {
                const cls = await importScript(assetsItem.url, cdns, assetsItem.name).catch((e: IEvent) => {
                    this.stage.systemEvent.error(e);
                });

                if (cls) {
                    if (cls.isFilter) {
                        vf.gui.Filter.list.set(assetsItem.name, cls); // 添加到滤镜列表
                    }
                }
            }
        }
    }

    private async loadAllAsset(): Promise<void> {
        const assets = this.data.assets;
        let assetsItem: IAsset;

        for (const id in assets) {
            if (assets[id]) {
                assetsItem = assets[id];
                if (assetsItem === undefined || assetsItem.type === undefined || assetsItem.url === undefined) {
                    this.stage.systemEvent.emitError('E0001', [id]);
                    continue;
                }
                if (assetsItem.url === '') {
                    this.stage.systemEvent.emitError('E0003', [id], EventLevel.WARNING);
                    continue;
                }
                if (assetsItem.type === AssetType.AUDIO && this.stage.config.vfvars.useNativeAudio) {
                    this.stage.systemEvent.emitError('S0004', [id], EventLevel.WARNING);
                    continue;
                }
                if (assetsItem.type === AssetType.JS) {
                    continue;
                }
                assetsItem.id = id;
                this.addResource(assets[id]);
            }
        }
        this.loadResources();
    }

    private initGlobalVariable(): void {
        if (this.data.global) {
            this.stage.variableManager.addVariableConfig(VariableManager.GLOBAL_ID, this.data.global);
            this.stage.variableManager.addVariableToGlobal(this.data.global);
        }
        if (this.vfActions) {
            for (let i = 0, len: number = this.vfActions.length; i < len; i++) {
                const action = this.vfActions[i];

                if (action && action.type === ActionType.DefineVariable) {
                    const defAction: IActionDefineVariable = action as IActionDefineVariable;

                    this.stage.variableManager.addVariableDataToGlobal(defAction.varId,
                        defAction.variableType,
                        defAction.value);
                }
            }
        }
    }
    private getSceneData(id: string): IScene | null {
        if (this.data.scenes) {
            for (let i = 0, len: number = this.data.scenes.length; i < len; i++) {
                if (this.data.scenes[i].id === id) {
                    return this.data.scenes[i];
                }
            }
        }

        return null;
    }
    private getNextSceneData(curId: string): IScene | null {
        if (this.data.scenes) {
            for (let i = 0, len: number = this.data.scenes.length; i < len; i++) {
                if (this.data.scenes[i].id === curId) {
                    if (i < len - 1) {
                        return this.data.scenes[i + 1];
                    }
                }
            }
        }

        return null;
    }
    private getPrevSceneData(curId: string): IScene | null {
        if (this.data.scenes) {
            for (let i = 0, len: number = this.data.scenes.length; i < len; i++) {
                if (this.data.scenes[i].id === curId) {
                    if (i > 0) {
                        return this.data.scenes[i - 1];
                    }
                }
            }
        }

        return null;
    }

    private createComponent(libId: string, id: string): vf.gui.DisplayObject | null {
        const componentData = this.data.components[libId] as ICustomComponent;
        let component: vf.gui.DisplayObject | null = null;

        if (componentData) {
            switch (componentData.type) {
                case ComponentType.CUSTOM:
                    component = this.createCustomComponent(libId, id);
                    if (componentData.interactabled !== undefined) {
                        component.interactabled = componentData.interactabled; // 性能优化，有部分业务，并不需要自定义组件有事件功能，可提前禁用
                    }
                    break;
                default:
                    component = this.creategui(libId);
                    break;
            }
        }

        return component;
    }

    private creategui(id: string): vf.gui.DisplayObject | null {
        const componentData = this.data.components[id] as ICustomComponent;

        if (!componentData) {
            return null;
        }
        const type: any = componentData.type;
        // tslint:disable-next-line: new-parens
        let ui: any;

        try {
            const cls = vf.gui.Utils.getGuiClass(type);

            ui = new cls();
        }
        catch (e) {
            this.stage.systemEvent.emitError('E0004', [id]);
            throw new Error(`guiNamespace['${type}'] === undefined`);
        }
        if (ui) {
            for (const key in componentData) {
                if (key in componentData) {
                    switch (key) {
                        case 'id':
                            // tslint:disable-next-line: no-string-literal
                            ui.libId = componentData[key];
                            break;
                        case 'name':
                            // tslint:disable-next-line: no-string-literal
                            ui.libName = componentData[key];
                            break;
                        case 'type':
                        case 'children':
                        case 'animations':
                        case 'actions':
                        case 'libs':
                            break;
                        default:
                            ui[key] = (componentData as any)[key];
                            break;
                    }
                }
            }
        }

        return ui;
    }
    private createCustomComponent(libId: string, id: string): vf.gui.Container {
        const componentData = this.data.components[libId];
        const customData = componentData as ICustomComponent;
        const vfComponent: VFComponent = new VFComponent();

        vfComponent.name = customData.name;
        vfComponent.libId = libId;
        vfComponent.id = id;

        if (customData.props) {
            this.stage.variableManager.addVariableConfig(libId.toString(), customData.props);
            this.stage.variableManager.addVariableToComponent(vfComponent);
        }

        if (customData.children) {
            for (let i = 0, len: number = customData.children.length; i < len; i++) {
                const childData: any = customData.children[i];

                if ('libId' in childData) {
                    const childComponentData = this.data.components[childData.libId] as ICustomComponent;
                    const child = this.createComponent(childData.libId, childData.id);

                    if (child) {
                        switch (childComponentData.type) {
                            default:
                                this.applyDisplayComponentProperty(child, childData);
                                break;
                        }
                        vfComponent.addChild(child);
                    }
                }
            }
        }
        if (customData.actionList && customData.actionList !== '') {
            const actionList = new ActionList(vfComponent, customData.actionList);

            vfComponent.actionList = actionList;
        }
        else if (libId !== undefined) {
            const actions = this.getVfsByComponentId(libId.toString());

            if (actions) {
                const actionList = new ActionList(vfComponent, actions);

                vfComponent.actionList = actionList;
            }
        }
        if (customData.animations) {
            const animation = new Animation(vfComponent, customData.animations, this.data.fps);

            vfComponent.animation = animation;
        }

        return vfComponent;
    }

    private applyDisplayComponentProperty(display: vf.gui.DisplayObject, data: IDisplayComponent): void {
        for (const key in data) {
            if (key in data) {
                switch (key) {
                    // case 'id':
                    // case 'name':
                    case 'libId':
                    case 'type':
                    case 'children':
                    case 'animations':
                    case 'actions':
                        break;
                    default:
                        if (key.indexOf('filter') === 0) {
                            this.applyFilter(display, key, (data as any)[key]);
                        }
                        else {
                            (display as any)[key] = (data as any)[key];
                        }
                        break;
                }
            }
        }
    }

    private applyFilter(display: vf.gui.DisplayObject, filterKey: string, value: any): void {
        const filterKeys = filterKey.split('.');
        let target = display as any;

        for (let i = 0, len: number = filterKeys.length; i < len - 1; i++) {
            const curkey = filterKeys[i];

            if (target && target[curkey]) {
                target = target[curkey];
            }
        }
        if (target) {
            target[filterKeys[filterKeys.length - 1]] = value;
        }
    }

    private loadResources(): void {
        if (this._loader === undefined) {
            this._loader = new vf.Loader();
        }
        const loader = this._loader;
        const urls: any = {};

        this._loadNum = 0;

        for (let i = 0, len: number = this._resources.length; i < len; i++) {
            const res = this._resources[i];
            const id = res.id === undefined ? 'undefined' : res.id.toString();

            if (urls[res.url]) {
                urls[res.url].push(res.id);
                continue;
            }
            loader.add(id, getUrl(res.url, this.data.baseUrl));
            urls[res.url] = [id];
        }
        let progressId = 0;
        let completeId = 0;
        let errorId = 0;

        progressId = loader.onProgress.add(() => {
            this._loadNum++;
            this.emit(SceneEvent.LoadProgress, [this._loadNum / (this._resources.length), this._resources.length]);
        });
        completeId = loader.onComplete.add((loader2: vf.Loader, resources: any) => {
            this.pixiResources = resources;
            if (!this.loadFailResources()) {
                for (const key in urls) {
                    const id = urls[key].shift();

                    while (urls[key].length > 0) {
                        this.pixiResources[urls[key].shift()] = resources[id];
                    }
                }
                loader.onComplete.detach(progressId);
                loader.onComplete.detach(completeId);
                loader.onComplete.detach(errorId);
                this.emit(SceneEvent.LoadComplete, null);
            }
        });
        errorId = loader.onError.add((error: Error, loader2: vf.Loader, loaderResource: vf.LoaderResource)=>{
            const assetFail = this._assetFails.get(loaderResource.name);

            if (assetFail) {
                if (assetFail.count >= 4) {
                    this._assetFails.delete(loaderResource.name);
                    this.stage.systemEvent.emitError('404', [loaderResource.url]);
                }
                assetFail.count++;
            }
            else {
                this._assetFails.set(loaderResource.name, { id: loaderResource.name,
                    url: loaderResource.url,
                    extension: loaderResource.extension, count: 1 });
            }
        });
        loader.load();
    }

    /** */
    private loadFailResources(): boolean {
        if (this._loader === undefined) {
            return false;
        }

        if (this._assetFails.size <= 0) {
            return false;
        }
        const loader = this._loader;
        const cdns = this.stage.config.cdns;

        this._assetFails.forEach((res) => {
            const type = getAssetType(res.extension);
            let cdn: any[];

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
            let url = cdn[(res.count - 1) % cdn.length];

            if (res.url.indexOf('http') !== -1 || res.url.indexOf('//') === 0) {
                url += res.url.substr(res.url.indexOf('/', res.url.indexOf('.')));
            }
            else {
                url += res.url;
            }
            delete loader.resources[res.id];
            loader.add(res.id, url);
        });

        return true;
    }

    private getVfsByComponentId(libId: string): AllAction[] | undefined {
        if (this.vfActions) {
            for (let i = 0, len: number = this.vfActions.length; i < len; i++) {
                const action = this.vfActions[i];

                if (action && action.type === ActionType.ActionList && action.value === libId) {
                    return action.execute;
                }
            }
        }

        return undefined;
    }
}

