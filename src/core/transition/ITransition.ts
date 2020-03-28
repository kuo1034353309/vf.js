
    export interface ITransition {
        progress: number;
        setPreviousTexture(value: any): void;
        applyTranisition(target: PIXI.DisplayObject): void;
        dispose(): void;
    }

