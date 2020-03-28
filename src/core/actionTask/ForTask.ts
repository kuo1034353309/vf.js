import { BaseTask, TaskEvent } from './core/BaseTask';
import { VFComponent } from '../../display/VFComponent';
import { IActionFor, VariableType } from '../model/IVFData';
import { ContainerTask } from './core/ContainerTask';
import { VariableManager } from '../VariableManager';
import { injectParamsToQueueTask } from './core/ActionListUtils';

export class ForTask extends ContainerTask {
    
    public component: VFComponent;
    public data: IActionFor;
    private _totalTimes: number = 0;
    private _curTimes: number = 0;
    private _paramId: string = '';
    private _paramIds: string[] = [];
    constructor(compontent: VFComponent, data: IActionFor) {
        super();
        this.component = compontent;
        this.data = data;
    }

    public run() {
        super.run();
        this._totalTimes = this.getforin();
        this._curTimes = -1;
        if (this.loopTask) {
            this.loopTask.on(TaskEvent.EVENT_COMPLETE, this.onLoopComplete, this);
            this.loopTask.on(TaskEvent.EVENT_FAIL, this.onLoopComplete, this);
        }
        this.addParams();
        this.runFor();
    }

    public break() {
        this._isRunning = false;
        if (this.loopTask) {
            this.loopTask.stop();
        }
        this.complete();
    }
    public complete(): void {
        this.removeParams();
        super.complete();
    }

    public injectParams(paramIds: string[]): void {
        if (paramIds && paramIds.length) {
            this._paramIds = paramIds;
        }
    }

    private runFor(): void {
        if (this._totalTimes > 0 && this._curTimes < this._totalTimes - 1) {
            if (this.loopTask) {
                this._curTimes++;
                if (this.component && this.component.vfStage) {
                    const variableManager = this.component.vfStage.variableManager;
                    const paramI = variableManager.getGlobalVariable(this._paramId);
                    if (paramI) {
                        paramI.value = this._curTimes;
                    }
                }
                this.loopTask.run();
            } else {
                this.complete();
            }
        } else {
            this.complete();
        }
    }
    private getforin(): number {
        if (this.component.vfStage) {
            const variableManager = this.component.vfStage.variableManager;
            const forin = variableManager.getExpressItemValue(this.component, this.data.forin);
            if (Array.isArray(forin)) {
                return forin.length;
            } else {
                return parseInt(forin, 10);
            }
        }
        return 0;
    }
    private onLoopComplete() {
        this.runFor();
    }
    private addParams(): void {
        if (this.component && this.component.vfStage) {
            const variableManager = this.component.vfStage.variableManager;
            const paramValues: any[] = [];
            const runId = variableManager.getFunctionId();
            const paramId = runId + '_for';
            this._paramId = paramId;
            if (!variableManager.variableMap[VariableManager.GLOBAL_ID]) {
                variableManager.variableMap[VariableManager.GLOBAL_ID] = {};
            }
            variableManager.variableMap[VariableManager.GLOBAL_ID][paramId] = {
                id: paramId,
                type: VariableType.OBJECT,
                value: 0,
            };
            ///
            if (this.loopTask) {
                const paramIds: string[] = this._paramIds.concat([this._paramId]);
                injectParamsToQueueTask(this.loopTask, paramIds);
            }
        }
    }
    private removeParams(): void {
        if (this.component && this.component.vfStage) {
            const variableManager = this.component.vfStage.variableManager;
            const paramId = this._paramId;
            delete variableManager.variableMap[VariableManager.GLOBAL_ID][paramId];
        }
    }
}
