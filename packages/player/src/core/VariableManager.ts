import { IVariableData, ExpressItem, ExpressType, ExpressItemType, 
         SystemValueType, VariableType, VariableDataValue } from './model/IVFData';
import { FunctionTask } from './actionTask/FunctionTask';
import { VFComponent } from '../display/VFComponent';
import { getTargetComponent, isObject, isArray, isNumber, isBoolean, isString } from '../utils/VFUtil';
import { EventLevel } from '../event/EventLevel';

export class VariableManager {

        public static GLOBAL_ID: string = 'global';

        public static OPERATE_PRIORITY = {
            '*' : 100,
            '/' : 100,
            '%' : 98,
            '+' : 97,
            '-' : 97,
            '>=' : 95,
            '<=' : 94,
            '>' : 93,
            '<' : 92,
            '==' : 91,
            '===' : 91,
            '!=' : 90,
            '!==' : 90,
            '!' : 89,
            '&&' : 88,
            '||' : 87,
            '=' : 86,
        };

        public variableConfig: {[id: string]: {[vid: string]: IVariableData}} = {};
        public variableMap: {[id: string]: {[vid: string]: IVariableData}} = {};

        private runFunctionId: number = 0;
        private functionMap: {[name: string]: FunctionTask} = {};

        constructor() {
            //
        }


        /**
         * Fisher-Yates shuffle
         * @param arr 
         */
        public shuffle(arr: any[]): void {
            for (let i = arr.length - 1; i >= 0; i--) {
                const randomIndex = Math.floor(Math.random() * (i + 1));
                const itemAtIndex = arr[randomIndex];
                arr[randomIndex] = arr[i];
                arr[i] = itemAtIndex;
            }
        }
        public clear(): void {
            this.variableMap = {};
            this.functionMap = {};
        }
        public getFunctionId(): number {
            return ++this.runFunctionId;
        }
        
        public getFunctionTask(name: string): FunctionTask {
            return this.functionMap[name];
        }

        public setFunctionTask(name: string, task: FunctionTask): void {
            this.functionMap[name] = task;
        }

        public addVariableConfig(id: string, variableData: {[id: string]: IVariableData}): void {
            if (!this.variableConfig[id]) {
                const normalConfig = this.normalizeVariableConfig(variableData);
                this.variableConfig[id] = normalConfig;
            }
        }

        public normalizeVariableConfig(variableData: {[id: string]: VariableDataValue}): {[id: string]: IVariableData} {
            for (const id in variableData) {
                if (variableData.hasOwnProperty(id)) {
                    const v = variableData[id];
                    const varV = this.createIVariableData(id, v);
                    variableData[id] = varV;
                }
            }
            return variableData;
        }

        public addVariableToGlobal(variableData: {[id: string]: IVariableData}): void {
            const globalId: string = VariableManager.GLOBAL_ID;
            this.variableMap[globalId] = this.deepCopy(variableData);

            if (this.variableConfig[globalId]) {
                const variables = this.variableConfig[globalId];
                this.variableMap[globalId] = this.deepCopy(variables);
            } else {
                this.addVariableConfig(globalId, variableData);
                if (this.variableConfig[globalId]) {
                    const variables = this.variableConfig[globalId];
                    this.variableMap[globalId] = this.deepCopy(variables);
                } 
            }
        }

        public addVariableToComponent(component: VFComponent): void {
            const libId = component.libId;
            if (libId) {
                if (this.variableConfig[libId.toString()]) {
                    const variables = this.variableConfig[libId.toString()];
                    this.variableMap[component.id.toString()] = this.deepCopy(variables);
                }
            }
        }
        
        public addVariableDataToComponent(component: VFComponent, varId: string, type: VariableType, data: any): void {
            const libId = component.libId;
            const compId = component.id;
            this.addVariable(libId, compId, varId, type, data);
        }
        public addVariableDataToGlobal(varId: string, type: VariableType, data: any): void {
            this.addVariable(VariableManager.GLOBAL_ID, VariableManager.GLOBAL_ID, varId, type, data);
        }
            
        public addVariable(libId: string, targetId: string, varId: string, type: VariableType, data: any): void {
            const variableData: IVariableData = {
                id: varId,
                type,
                value: data,
            };
            const variable2: IVariableData = {
                id: varId,
                type,
                value: data,
            };

            let globalVarConfig = this.variableConfig[libId];
            if (!globalVarConfig) {
                globalVarConfig = {};
                this.variableConfig[libId] = globalVarConfig;
            }
            globalVarConfig[varId] = variableData;
            
            let globalVarMap = this.variableMap[targetId];
            if (!globalVarMap) {
                globalVarMap = {};
                this.variableMap[targetId] = globalVarMap;
            }
            globalVarMap[varId] = variable2;
        }

        public getGlobalVariable(id: string): IVariableData | undefined {
            return this.getVariable(VariableManager.GLOBAL_ID, id);
        }
        public getVariable(hasCode: string, id: string): IVariableData | undefined {
            const varData: {[id: string]: IVariableData} = this.variableMap[hasCode];
            if (varData && varData[id]) {
                return varData[id];
            }
        }
        public getVariableByData(component: VFComponent, expressItem: ExpressItem): IVariableData | undefined {
            if (expressItem[0] === ExpressItemType.PARAM_VALUE) {
                return this.getVariable(VariableManager.GLOBAL_ID, expressItem[2]);
            }
            const varComponent: VFComponent  = getTargetComponent(component, expressItem[1]) as VFComponent;
            const hashCode = varComponent ? varComponent.id.toString() : VariableManager.GLOBAL_ID;
            const varItem = this.getVariable(hashCode, expressItem[2]);
            return varItem;
        }

        public caculateExpress(component: VFComponent, express: ExpressType): any {
            const stackOut: ExpressType = [];
            const stackOperate: ExpressType = [];
            for (let i: number = 0, len: number = express.length; i < len; i++) {
                const expressItem = express[i];
                switch (expressItem[0]) {
                    case ExpressItemType.CONST:
                    case ExpressItemType.VARIABLE:
                    case ExpressItemType.STSTEN:
                    case ExpressItemType.RANDOM:
                    case ExpressItemType.PROPERTY:
                    case ExpressItemType.ARRAY_LEN:
                    case ExpressItemType.ARRAY_VALUE:
                    case ExpressItemType.OBJECT_VALUE:
                    case ExpressItemType.PARAM_VALUE:
                    case ExpressItemType.ARRAY_FUNCTION:
                    case ExpressItemType.COMPONENT:
                        stackOut.push(expressItem);
                        break;
                    case ExpressItemType.OPERATION:
                        switch (expressItem[1]) {
                            case '(':
                                stackOperate.push(expressItem);
                                break;
                            case ')':
                                let v = stackOperate.pop();
                                while ( v && v[1] !== '(') {
                                    stackOut.push(v);
                                    v = stackOperate.pop();
                                }
                                break;
                            default:
                                const operateStr = expressItem[1];
                                const curPriority = (VariableManager.OPERATE_PRIORITY as any)[operateStr];
                                if (!curPriority) {
                                    // can not support this operation:
                                    this.emitError(component, 'E1001', [operateStr], EventLevel.WARNING);
                                    return 0;
                                } else {
                                    if (stackOperate.length > 0) {
                                        let topOperate = stackOperate[stackOperate.length - 1];
                                        let topOperatePriority = 
                                            (VariableManager.OPERATE_PRIORITY as any)[topOperate[1]];
                                        if (curPriority > topOperatePriority) {
                                            stackOperate.push(expressItem);
                                        } else {
                                            while (curPriority <= topOperatePriority) {
                                                stackOut.push(topOperate);
                                                stackOperate.pop();
                                                if (stackOperate.length > 0) {
                                                    topOperate = stackOperate[stackOperate.length - 1];
                                                    topOperatePriority = 
                                                        (VariableManager.OPERATE_PRIORITY as any)[topOperate[1]];
                                                } else {
                                                    break;
                                                }
                                            }
                                            stackOperate.push(expressItem);
                                        }
                                    } else {
                                        stackOperate.push(expressItem);
                                    }
                                }
                                break;
                        }
                        break;
                    default:
                        break;
                }
            }
            if (stackOperate.length > 0) {
                while (stackOperate.length > 0) {
                    const operateStr = stackOperate.pop();
                    if (operateStr) {
                        stackOut.push(operateStr);
                    }
                }
            }
            const value = this.caculateExpressValue(component, stackOut);
            return value;
        }
        public getExpressItemValue(component: VFComponent, expressItem: ExpressItem): any {
            let result: any;
            switch (expressItem[0]) {
                case ExpressItemType.CONST:
                    result = (expressItem[1]);
                    break;
                case ExpressItemType.VARIABLE:

                    const varItem = this.getVariableByData(component, expressItem);
                    if (varItem) {
                        result = (varItem.value);
                    } else {
                        this.emitError(component, 'E1002', [expressItem.join(',')], EventLevel.WARNING);
                        // can not find variable:
                    }
                    
                    break;
                case ExpressItemType.STSTEN:
                    const curDate = new Date();
                    let systemValue = 0;
                    switch (expressItem[1]) {
                        case SystemValueType.TIME:
                            systemValue = curDate.getTime();
                            break;
                        case SystemValueType.YEAR:
                            systemValue = curDate.getFullYear();
                            break;
                        case SystemValueType.MONTH:
                            systemValue = curDate.getMonth();
                            break;
                        case SystemValueType.DAY:
                            systemValue = curDate.getDay();
                            break;
                        case SystemValueType.DATE:
                            systemValue = curDate.getDate();
                            break;
                        default:
                            break;
                    }
                    result = (systemValue);
                    break;
                case ExpressItemType.RANDOM:
                    let randomValue = 0;
                    if (expressItem.length >= 3) {
                        const min = expressItem[1];
                        const max = expressItem[2];
                        randomValue = Math.round(Math.random() * (max - min)) + min;
                    } else {
                        randomValue = Math.random();
                    }
                    result = (randomValue);
                    break;
                case ExpressItemType.COMPONENT:
                    const targetArr0 = expressItem[1];
                    const targetComponent0 = getTargetComponent(component, targetArr0);
                    result = targetComponent0;
                    break;
                case ExpressItemType.PROPERTY:
                    const targetArr = expressItem[1];
                    const targetComponent = getTargetComponent(component, targetArr);
                    let componentProperty: any = targetComponent;
                    if (componentProperty && expressItem.length >= 3) {
                        for (let i: number = 2, len: number = expressItem.length; i < len; i++) {
                            const key = expressItem[i];
                            if (componentProperty && key !== undefined) {
                                componentProperty = componentProperty[key];
                            }
                        }
                        result = componentProperty;
                    } else {
                        result = undefined;
                    }
                    break;
                case ExpressItemType.ARRAY_LEN:
                    const arrItem = this.getVariableByData(component, expressItem);
                    if (arrItem) {
                        result = (arrItem.value.length);
                    } else {
                        this.emitError(component, 'E1002', [expressItem.join(',')], EventLevel.WARNING);
                        // can not find variable:
                    }
                    break;
                case ExpressItemType.ARRAY_VALUE:
                    // expressItem 0:type, 1:componentId, 2: variableId, 3: index, 4?: property
                    const arrItem1 = this.getVariableByData(component, expressItem);
                    if (arrItem1) {
                        const arr = arrItem1.value;
                        let index: number = expressItem[3];
                        if (Array.isArray(index)) {
                            const indexVar = this.getExpressItemValue(component, index);
                            if (isNumber(indexVar) ) {
                                index = indexVar;
                            } else {
                                // can not find array index by variable:
                                this.emitError(component, 'E1003', [index], EventLevel.WARNING);
                                index = 0;
                            }
                        }
                        result = arr[index];
                        if (expressItem.length >= 5 && result) {
                            result = result[expressItem[4]]; 
                        } 
                    } else {
                        this.emitError(component, 'E1002', [expressItem.join(',')], EventLevel.WARNING);
                        // can not find variable:
                        
                    }
                    break;
                case ExpressItemType.ARRAY_FUNCTION:
                    const arrItem2 = this.getVariableByData(component, expressItem);
                    if (arrItem2) {
                        if (Array.isArray(arrItem2.value)) {
                            const targetArray: any[] = arrItem2.value;
                            switch (expressItem[3]) {
                                case 'pop': // [10, [], 'arr', 'pop']
                                    result = targetArray.pop();
                                    break;
                                case 'push': // [10, [], 'arr', 'push', [0, 4]]
                                    if (expressItem.length > 4) {
                                        const pushTarget = this.getExpressItemValue(component, expressItem[4]);
                                        result = targetArray.push(pushTarget);
                                    }
                                    break;
                                case 'shift': // [10, [], 'arr', 'shift']
                                    result = targetArray.shift();
                                    break;
                                case 'unshift': // [10, [], 'arr', 'unshift', [0, 4]]
                                    if (expressItem.length > 4) {
                                        const unshiftTarget = this.getExpressItemValue(component, expressItem[4]);
                                        result = targetArray.unshift(unshiftTarget);
                                    }
                                    break;
                                case 'concat': // [10, [], 'arr', 'concat', [0, [1,2]]]
                                    if (expressItem.length > 3) {
                                        if (expressItem.length > 4) {
                                            const concatTarget = this.getExpressItemValue(component, expressItem[4]);
                                            result = targetArray.concat(concatTarget);
                                        } else {
                                            result = targetArray.concat();
                                        }
                                    }
                                    break;
                                case 'splice': // [10, [], 'arr', 'splice', [0, 1], [0,1] => $arr.splice(1,1);
                                    if (expressItem.length === 5) {
                                        const startValue = this.getExpressItemValue(component, expressItem[4]);
                                        result = targetArray.splice(startValue);
                                    } else if (expressItem.length === 6) {
                                        const startValue = this.getExpressItemValue(component, expressItem[4]);
                                        const deleteCount = this.getExpressItemValue(component, expressItem[5]);
                                        result = targetArray.splice(startValue, deleteCount);
                                    } else if (expressItem.length > 6) {
                                        const startValue = this.getExpressItemValue(component, expressItem[4]);
                                        const deleteCount = this.getExpressItemValue(component, expressItem[5]);
                                        const addValue = this.getExpressItemValue(component, expressItem[6]);
                                        result = targetArray.splice(startValue, deleteCount, addValue);
                                    }
                                    break;
                                default:
                                    // array has not function: 
                                    this.emitError(component, 'E1004', [expressItem[3]], EventLevel.WARNING);
                                    break;
                            }
                        } else {
                            // variable is not array: 
                            this.emitError(component, 'E1005', [expressItem.join(',')], EventLevel.WARNING);
                        }
                    } else {
                        this.emitError(component, 'E1002', [expressItem.join(',')], EventLevel.WARNING);
                        // can not find variable:
                    }
                    break;
                case ExpressItemType.OBJECT_VALUE:
                case ExpressItemType.PARAM_VALUE:
                    // expressItem 0:type, 1:componentId, 2: variableId, 3: property, 4?: property
                    const objItem = this.getVariableByData(component, expressItem);
                    if (objItem) {
                        let obj = objItem.value;
                        for (let i: number = 3, len: number = expressItem.length; i < len; i++) {
                            const key = expressItem[i];
                            if (obj && key !== undefined) {
                                obj = obj[key];
                            }
                        }
                        result = obj;
                    }
                    break;
                default:
                    break;
            }
            return result;
        }

        private caculateExpressValue(component: VFComponent, stackExpress: ExpressType): any {
            const stackOut: ExpressType = [];
            if (stackExpress.length === 1) {
                return this.getExpressItemValue(component, stackExpress[0]);
            }
            for (let i: number = 0, len: number = stackExpress.length; i < len; i++) {
                const expres = stackExpress[i];
                switch (expres[0]) {
                    case ExpressItemType.OPERATION:
                        let expItem0: ExpressItem | undefined;
                        let expItem1: ExpressItem | undefined;
                        if (expres[1] === '!') {
                            expItem0 = stackOut.pop();
                        } else {
                            expItem1 = stackOut.pop();
                            expItem0 = stackOut.pop();
                        }
                        const resultItem = this.caculateOneExpress(component, expres[1], expItem0, expItem1);
                        stackOut.push(resultItem);
                        break;
                    default:
                        stackOut.push(expres);
                        break;
                }
            }
            if (stackOut.length === 1) {
                return stackOut[0][1];
            } else {
                // caculateExpressValue error'
                this.emitError(component, 'E1006', undefined, EventLevel.WARNING);
                return 0;
            }
        }

        private caculateOneExpress(component: VFComponent, operateStr: string, 
                                   expItem0?: ExpressItem, expItem1?: ExpressItem): ExpressItem {
            const resultItem: ExpressItem = [ExpressItemType.CONST, 0];
            let result0: any;
            let result1: any;
            let result: any;
            if (expItem0) {
                result0 = this.getExpressItemValue(component, expItem0);
            }
            if (expItem1) {
                result1 = this.getExpressItemValue(component, expItem1);
            }
            switch (operateStr) {
                case '*' :
                    result = result0 * result1;
                    break;
                case '/' :
                    result = result0 / result1;
                    break;
                case '%' :
                    result = result0 % result1;
                    break;
                case '+' :
                    result = result0 + result1;
                    break;
                case '-' :
                    result = result0 - result1;
                    break;
                case '>=' :
                    result = result0 >= result1;
                    break;
                case '<=' :
                    result = result0 <= result1;
                    break;
                case '>' :
                    result = result0 > result1;
                    break;
                case '<' :
                    result = result0 < result1;
                    break;
                case '==' :
                    // tslint:disable-next-line: triple-equals
                    result = result0 == result1;
                    break;
                case '===' :
                    result = result0 === result1;
                    break;
                case '!=' :
                    // tslint:disable-next-line: triple-equals
                    result = result0 != result1;
                case '!==' :
                    result = result0 !== result1;
                    break;
                case '!' :
                    result = !result0;
                    break;
                case '&&' :
                    result = result0 && result1;
                    break;
                case '||' :
                    result = result0 || result1;
                    break;
                case '=' :
                    result = result1;
                    if (expItem0) {
                        switch (expItem0[0]) {
                            case ExpressItemType.VARIABLE:
                                const varItem = this.getVariableByData(component, expItem0);
                                if (varItem) {
                                    varItem.value = result;
                                } else {
                                    this.emitError(component, 'E1002', [expItem0.join(',')], EventLevel.WARNING);
                                    // can not find variable:
                                }
                                break;
                            case ExpressItemType.PROPERTY:
                                const targetArr = expItem0[1];
                                const targetProperty = expItem0[2];
                                const targetComponent = getTargetComponent(component, targetArr);
                                if (targetComponent) {
                                    if (expItem0.length >= 3) {
                                        let targetProp: any = targetComponent;
                                        let prop: any = targetProperty;
                                        for (let i: number = 2, len: number = expItem0.length; i < len; i++) {
                                            prop = expItem0[i];
                                            if (i === len - 1) {
                                                break;
                                            } else {
                                                if (targetProp) {
                                                    targetProp = targetProp[prop];
                                                } else {
                                                    // can not find property: 
                                                    this.emitError(component, 'E1007', [expItem0.join(',')], 
                                                                    EventLevel.WARNING);
                                                }
                                            }
                                        }
                                        if (targetProp && prop) {
                                            targetProp[prop] = result;
                                        } else {
                                            // can not find property: 
                                            this.emitError(component, 'E1007', [expItem0.join(',')], 
                                                            EventLevel.WARNING);
                                        }
                                    } 
                                }
                                break;
                            case ExpressItemType.ARRAY_LEN:
                                const arrItem = this.getVariableByData(component, expItem0);
                                if (arrItem) {
                                    arrItem.value.length = result;
                                } else {
                                    this.emitError(component, 'E1002', [expItem0.join(',')], EventLevel.WARNING);
                                    // can not find variable:
                                }
                                break;
                            case ExpressItemType.ARRAY_VALUE:
                                // expItem0 0:type, 1:componentId, 2: variableId, 3: index, 4?: property
                                const arrItem1 = this.getVariableByData(component, expItem0);
                                if (arrItem1) {
                                    const arr = arrItem1.value;
                                    let index: number = expItem0[3] || 0;
                                    if (Array.isArray(index)) {
                                        const indexVar = this.getExpressItemValue(component, index);
                                        if (isNumber(indexVar) ) {
                                            index = indexVar;
                                        } else {
                                            // can not find array index by variable:
                                            this.emitError(component, 'E1003', [index], 
                                                            EventLevel.WARNING);
                                            index = 0;
                                        }
                                    }
                                    if (expItem0.length >= 5) {
                                        let obj = arr[index];
                                        let key;
                                        for (let i: number = 4, len: number = expItem0.length; i < len; i++) {
                                            key = expItem0[i];
                                            if (i < len - 1 && obj[key]) {
                                                obj = obj[key];
                                            }
                                        }
                                        if (obj && key !== undefined) {
                                            obj[key] = result;
                                        }
                                    } else {
                                        arr[index] = result;
                                    }
                                } else {
                                    this.emitError(component, 'E1002', [expItem0.join(',')], EventLevel.WARNING);
                                    // can not find variable:
                                }
                                break;
                            case ExpressItemType.OBJECT_VALUE:
                            case ExpressItemType.PARAM_VALUE:
                                // expressItem 0:type, 1:componentId, 2: variableId, 3: property, 4?: property
                                const objItem = this.getVariableByData(component, expItem0);
                                if (objItem) {
                                    let obj = objItem.value;
                                    let key;
                                    for (let i: number = 3, len: number = expItem0.length; i < len; i++) {
                                        key = expItem0[i];
                                        if (i < len - 1 && obj[key]) {
                                            obj = obj[key];
                                        }
                                    }
                                    if (obj && key !== undefined) {
                                        obj[key] = result;
                                    } else {
                                        // 基本类型
                                        objItem.value = result;
                                    }
                                }
                                break;
                            case ExpressItemType.CONST:
                                // the left value can NOT be const:
                                this.emitError(component, 'E1008', [expItem0.join(',')], EventLevel.WARNING);
                                break;
                            default:
                                break;
                        }
                    }
                    break;
                default:
                    // can not support this operation:
                    this.emitError(component, 'E1001', [operateStr], EventLevel.WARNING);
                    break;
            }
            resultItem[1] = result;
            return resultItem;
        }

        private deepCopy(variableData: {[id: string]: IVariableData}): {[id: string]: IVariableData} {
                const str = JSON.stringify(variableData);
                const newVariableData = JSON.parse(str) as {[id: string]: IVariableData};
                return newVariableData;
        }

        private isIVariableData(v: any): boolean {
            if (isObject(v)  &&  
               v.hasOwnProperty('type') && 
               v.hasOwnProperty('value') &&
               ( v.type === VariableType.ARRAY ||
                 v.type === VariableType.BOOLEAN ||
                 v.type === VariableType.NUMBER ||
                 v.type === VariableType.OBJECT ||
                 v.type === VariableType.STRING)
               ) {
                return true;
            }
            return false;
        }
        private createIVariableData(id: string, v: any): IVariableData {
            if (!this.isIVariableData(v)) {
                const varData: IVariableData = {
                    id,
                    type: VariableType.OBJECT,
                    value: v,
                };
                if (isBoolean(v)) {
                    varData.type = VariableType.BOOLEAN;
                } else if ( isString(v)) {
                    varData.type = VariableType.STRING;
                } else if ( isNumber(v)) {
                    varData.type = VariableType.STRING;
                } else if ( isArray(v)) {
                    varData.type = VariableType.ARRAY;
                } else {
                    varData.type = VariableType.OBJECT;
                }
                return varData;
            } else {
                return v;
            }
        }
        private emitError(component: VFComponent, code: string, params?: any[], level: EventLevel = EventLevel.ERROR) {
            if (component && component.vfStage) {
                const vfStage = component.vfStage;
                vfStage.systemEvent.emitError(code, params, level);
            } else {
                throw new Error( code + ': ' + params?.join(' '));
            }

        }
        
    }

