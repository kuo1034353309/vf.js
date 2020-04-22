import { BaseTask, TaskEvent } from './core/BaseTask';
import { VFComponent } from '../../display/VFComponent';
import { IAction, IActionCallFunction, VariableType } from '../model/IVFData';
import { FunctionTask } from './FunctionTask';
import { VariableManager } from '../VariableManager';
import { getTargetComponent } from '../../utils/VFUtil';

export class CallFunctionTask extends BaseTask {

        public component: VFComponent;
        public funName: string;
        public data: IActionCallFunction;
        protected _component: VFComponent | undefined;
        protected runId: number = -1;
        protected fun?: FunctionTask;
        protected paramIds: string[] = [];
        constructor(compontent: VFComponent, funName: string, data: IActionCallFunction) {
            super();
            this.component = compontent;
            this.funName = funName;
            this.data = data;
        }

        public run(): void {
            super.run();
            this._component = getTargetComponent(this.component, this.data.target) as VFComponent;
            if (this._component && this._component.vfStage) {
                const variableManager = this._component.vfStage.variableManager;
                let funId = this.funName;
                this.runId = variableManager.getFunctionId();
                funId = this._component.hashCode + this.funName;
                // 注入参数
                this.paramIds.length = 0;
                if (this.data.params) {
                    const paramValues: any[] = [];
                    for ( let i: number = 0, len: number = this.data.params.length; i < len; i++) {
                        const param = this.data.params[i];
                        let paramValue = param;
                        if (Array.isArray(param)) {
                            const paramVar = variableManager.getExpressItemValue(this.component, param);
                            paramValue = paramVar;
                        }
                        paramValues.push(paramValue);
                    }
                    for (let i: number = 0, len: number = paramValues.length; i < len; i++) {
                        const paramId = funId + this.runId + 'param_' + i;
                        this.paramIds.push(paramId);
                        if (!variableManager.variableMap[VariableManager.GLOBAL_ID]) {
                            variableManager.variableMap[VariableManager.GLOBAL_ID] = {};
                        }
                        variableManager.variableMap[VariableManager.GLOBAL_ID][paramId] = {
                            id: paramId,
                            type: VariableType.OBJECT,
                            value: paramValues[i],
                        };
                    }
                }
                this.fun = variableManager.getFunctionTask(funId);
                if (this.fun) {
                    // 替换表达式中的参数
                    if (this.paramIds.length) {
                        this.fun.injectParams(this.paramIds);
                    }
                    this.fun.on(TaskEvent.FUNCTION_RUN_COMPLETE, this.onRunComplete, this);
                    this.fun.runWithId(this.runId);
                } else {
                    this.complete();
                }
            } else {
                this.complete();
            }
        }

        public stop(): void {
            super.stop();
            if (this.fun) {
                this.fun.stopWithId(this.runId);
            }
            this.complete();
        }

        public break() {
            super.break();
            if (this.fun) {
                this.fun.breakWithId(this.runId);
            }
            this.complete();
        }

        public complete(): void {
            this.runId = 0;
            if (this.fun) {
                this.fun.off(TaskEvent.FUNCTION_RUN_COMPLETE,  this.onRunComplete, this);
            }
            // 删除参数
            if (this.paramIds.length) {
                if (this.component && this.component.vfStage) {
                    const variableManager = this.component.vfStage.variableManager;
                    for (let i: number = 0, len: number = this.paramIds.length; i < len; i++) {
                        const paramId = this.paramIds[i];
                        delete variableManager.variableMap[VariableManager.GLOBAL_ID][paramId];
                    }
                }
            }
            super.complete();
        }

        private onRunComplete(data: any): void {
            if (data === this.runId) {
                this.complete();
            }
        }
    }

