import { ITransition } from '../ITransition';

export class FadeoutTran implements ITransition {

    private prevTexture?: vf.RenderTexture;
    private target?: vf.DisplayObject;
    private prevSprite?: vf.Sprite;
    private _progress: number = 0;

    public set progress(v: number) {
        this._progress = v;
        if (this.prevSprite) {
            this.prevSprite.alpha = (1 - this._progress);
        }
    }
    public get progress(): number {
        return this._progress;
    }
    public setPreviousTexture(value: any): void {
        this.prevTexture = value;
        if (this.prevTexture) {
            this.prevSprite = vf.Sprite.from(this.prevTexture);
        }
    }
    public applyTranisition(target: vf.DisplayObject): void {
        this.target = target;
        if (this.target && this.target.parent && this.prevSprite) {
            this.prevSprite.x = this.target.x;
            this.prevSprite.y = this.target.y;
            this.target.parent.addChild(this.prevSprite);
        }
    }
    public dispose(): void {
        if (this.prevSprite && this.prevSprite.parent) {
            this.prevSprite.parent.removeChild(this.prevSprite);
            this.prevTexture?.destroy();
            this.prevTexture = undefined;
            this.prevSprite = undefined;
        }
    }


}
