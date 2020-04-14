
    export interface ITransition {
        progress: number;
        setPreviousTexture(value: any): void;
        applyTranisition(target: vf.DisplayObject): void;
        dispose(): void;
    }

