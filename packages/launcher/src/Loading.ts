import LoadingAsset from '../../../assets/loading2.svg';

export type LoadingPosition = 'center' | 'leftTop' | 'rightTop' | 'leftBottom' | 'rightBottom' | number[];

export class Loading {
    constructor(div: HTMLElement) {
        this._parent = div;
        this._image = LoadingAsset;
    }

    private _parent: HTMLElement;
    private _loadingImg?: any;
    private _isShow = false;
    private _image?: any;

    /**
     * 设置位置，默认右下
     */
    public position: LoadingPosition = 'rightBottom';

    /** 设置显示位图 */
    public set image(value: any) {
        if (this._loadingImg) {
            this._loadingImg.src = value;
        }
        this._image = value;
    }
    public get image(): any {
        return this._image;
    }

    /**
     * 关于Loading界面布局的可以提出去
     */
    public show(): void {
        const _container = this._parent;

        if (this._isShow) {
            return;
        }
        if (!this._image) {
            return;
        }
        this._isShow = true;
        const img = this._loadingImg = new Image();

        img.name = 'vf-loading';
        img.id = Date.now().toString();
        img.style.position = 'absolute';
        img.src = this._image;

        const bound = this.getInnerBound(_container);
        const loadingPostion = this.position;

        img.onload = (): void => {
            // 临时 默认右下
            let left = (bound.w - img.width);
            let top = (bound.h - img.height);

            switch (loadingPostion) {
                case 'leftTop':
                    left = 0;
                    top = 0;
                    break;
                case 'rightTop':
                    left = (bound.w - img.width);
                    top = 0;
                    break;
                case 'leftBottom':
                    left = 0;
                    top = (bound.h - img.height);
                    break;
                case 'rightBottom':
                    left = (bound.w - img.width);
                    top = (bound.h - img.height);
                    break;
                default: // center
                    left = (bound.w - img.width) >> 1;
                    top = (bound.h - img.height) >> 1;
            }
            if (Array.isArray(loadingPostion)) {
                left = loadingPostion[0];
                top = loadingPostion[1];
            }
            img.style.left = `${left}px`;
            img.style.top = `${top}px`;
            _container.appendChild(img);
        };
    }

    /**
     * 关于Loading界面布局的可以提出去
     */
    public hide(): void {
        const loading = this._loadingImg;

        if (loading && loading.parentNode) {
            loading.onload = null;
            loading.parentNode.removeChild(loading);
            loading.remove();
            // this._loading = undefined;
        }
        this._isShow = false;
    }

    public dispose(): void{
        this._loadingImg = undefined as any;
        this._parent = undefined as any;
        this._image = undefined as any;
    }

    private getInnerBound(ele: HTMLElement): {w: number;h: number} {
        let parentElement = ele;
        let w = ele.clientWidth;
        let h = ele.clientHeight;

        for (let i = 0; i < 5; i++) {
            if (parentElement.clientWidth === 0 && parentElement.parentElement) {
                parentElement = parentElement.parentElement;
            }
            else {
                w = parentElement.clientWidth;
                h = parentElement.clientHeight;
                break;
            }
        }

        return { w, h };
    }
}
