import { ActionList } from '../core/actionTask/ActionList';
import { Animation } from '../core/animation/Animation';
import { VFStage } from './VFStage';
import { IVariableData, ComponentEvent } from '../core/model/IVFData';
import { DisplayObjectAbstract } from 'core/DisplayObjectAbstract';

export class VFComponent extends vf.gui.Container {

        public static maxHashCode: number = 10000;
        public hashCode: number = ++VFComponent.maxHashCode;
        public actionList: ActionList | undefined;
        public animation: Animation | undefined;
        public libId: string = '0';
        public id: string = '0';
        protected childrenMap: {[id: string]: DisplayObjectAbstract} = {};

        protected _vfStage: VFStage | undefined;
        protected pauseData?: {animation: string, frame: number, times: number} = undefined;
        constructor() {
            super();
            this.interactabled = true;
        }

        public set vfStage(stage: VFStage | undefined) {
            this._vfStage = stage; 
            for ( const id in this.childrenMap) {
                if (this.childrenMap[id]) {
                    const child = this.childrenMap[id];
                    if (child instanceof VFComponent) {
                        child.vfStage = stage;
                    }
                }
            }
        }

        public get vfStage(): VFStage | undefined {
            return this._vfStage;
        }

        public pause(): void {

            for ( const id in this.childrenMap) {
                if (this.childrenMap[id]) {
                    const child = this.childrenMap[id];
                    if (child instanceof VFComponent) {
                        child.pause();
                    }
                }
            }

            if (this.animation) {
                this.pauseData = this.animation.getPauseData();
                this.animation.stop();
            }
            if (this.actionList) {
                this.actionList.pause();
            }
        }

        public resume(): void {
            for ( const id in this.childrenMap) {
                if (this.childrenMap[id]) {
                    const child = this.childrenMap[id];
                    if (child instanceof VFComponent) {
                        child.resume();
                    }
                }
            }
            if (this.animation) {
                if (this.pauseData) {
                    this.animation.gotoPlay(this.pauseData.animation, this.pauseData.frame, this.pauseData.times);
                    this.pauseData = undefined;
                }
            }
            if (this.actionList) {
                this.actionList.resume();
            }
            
        }

        public playDefaultAnimation(): void {
            if (this.animation) {
                this.animation.playDefaultAnimation();
            }
        }
        public gotoPlay(name: string, frame: number, times: number = 1): void {
            if (this.animation) {
                this.animation.gotoPlay(name, frame, times);
            }
        }
        public gotoStop(name: string, frame: number): void {
            if (this.animation) {
                this.animation.gotoStop(name, frame);
            }
        }
        public play(name: string, times: number = 1): void {
            if (this.animation) {
                this.animation.play(name, times);
            }
        }

        public stop(): void {
            if (this.animation) {
                this.animation.stop();
            }
        }

        public getChildById(id: string): vf.gui.DisplayObject {
            return this.childrenMap[id] as vf.gui.DisplayObject;
        }

        public getVariable(id: string): IVariableData | undefined {
            if (this._vfStage) {
                const vm = this._vfStage.variableManager;
                const variable = vm.getVariable(this.hashCode.toString(), id);
                return variable;
            }
            return undefined;
        }

        public getVariableValue(id: string): IVariableData | undefined {
            const variable = this.getVariable(id);
            if (variable) {
                return variable.value;
            }
            return undefined;
        }

        public setVariableValue(id: string, value: any): void {
            const variable = this.getVariable(id);
            if (variable) {
                variable.value = value;
            }
        }

        public addChildAt<T extends DisplayObjectAbstract>(item: T, index: number): T {
            // tslint:disable-next-line: no-string-literal
            const cid = (item as any)['id'];
            if (this.childrenMap[cid.toString()]) {
                // throw new Error('duplicate id; ' + cid);
            } else {
                this.childrenMap[cid.toString()] = item;
            }
            if (item instanceof VFComponent) {
                item.vfStage = this.vfStage;
            }
            const child = super.addChildAt(item, index);
            if (item instanceof VFComponent) {
                item.playDefaultAnimation();
            }
            return child as any;
        }

        public removeChild<T extends DisplayObjectAbstract>(UIObject: T): T {
            // this.vfStage = undefined;
            // tslint:disable-next-line: no-string-literal
            const cid = (UIObject as any)['id'];
            // delete this.childrenMap[cid.toString()];
            return super.removeChild(UIObject);
        }

        public runAction(): void {
            for ( const id in this.childrenMap) {
                if (this.childrenMap[id]) {
                    const child = this.childrenMap[id];
                    if (child instanceof VFComponent) {
                        child.runAction();
                    }
                }
            }
            if (this.actionList) {
                this.actionList.run();
            }
            this.on(ComponentEvent.Remove, this.onRemoved, this);
        }

        public emitAddToChildBefore(): void {
            for ( const id in this.childrenMap) {
                if (this.childrenMap[id]) {
                    const child = this.childrenMap[id];
                    if (child instanceof VFComponent) {
                        child.emitAddToChildBefore();
                    }
                }
            }
            this.emit(ComponentEvent.Add, this);
        }

        public emitAddToChild(): void {
            for ( const id in this.childrenMap) {
                if (this.childrenMap[id]) {
                    const child = this.childrenMap[id];
                    if (child instanceof VFComponent) {
                        child.emitAddToChild();
                    }
                }
            }
            this.emit(ComponentEvent.Added, this);
        }

        public emitRemoveToChild(): void {
            for ( const id in this.childrenMap) {
                if (this.childrenMap[id]) {
                    const child = this.childrenMap[id];
                    if (child instanceof VFComponent) {
                        child.emitRemoveToChild();
                    }
                }
            }
            this.emit(ComponentEvent.Removed, this);
        }
        public emitRemoveToChildBefore(): void {
            for ( const id in this.childrenMap) {
                if (this.childrenMap[id]) {
                    const child = this.childrenMap[id];
                    if (child instanceof VFComponent) {
                        child.emitRemoveToChildBefore();
                    }
                }
            }
            this.emit(ComponentEvent.Remove, this);
        }

        public dispose(): void {
            this._vfStage = undefined;
            this.interactabled = false;
            if (this.animation) {
                this.animation.stop();
            }
            
            for ( const id in this.childrenMap) {
                if (this.childrenMap[id]) {
                    const child = this.childrenMap[id];
                    if (child instanceof VFComponent) {
                        child.dispose();
                    }
                }
            }

            this.releaseAll();
        }

        private onRemoved(): void {
            if (this.actionList) {
                this.actionList.stop();
            }
            this.off(ComponentEvent.Remove);
        }
        
    }

