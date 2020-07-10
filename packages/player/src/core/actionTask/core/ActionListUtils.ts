import { QueueTask } from './QueueTask';
import { BaseTask } from './BaseTask';
import { ExpressTask } from '../ExpressTask';
import { IfTask } from '../IfTask';
import { SetPropertyTask } from '../SetPropertyTask';
import { PlayAnimationTask } from '../PlayAnimationTask';
import { SoundTask } from '../SoundTask';
import { CallFunctionTask } from '../CallFunctionTask';
import { PrintTask } from '../PrintTask';
import { ExpressType, ExpressItem, ExpressItemType } from '../../model/IVFData';
import { ForTask } from '../ForTask';
import { CallProtoFunctionTask } from '../CallProtoFunctionTask';
import { AddListenerTask } from '../AddListenerTask';
import { AddListenerCallTask } from '../AddListenerCallTask';
import { RemoveListenerTask } from '../RemoveListenerTask';
import { EmitEventTask } from '../EmitEventTask';

export function injectParamsToQueueTask(queue: QueueTask, paramIds: string[]): void {
    const tasks = queue.tasks;
    if (tasks) {
        for (let i: number = 0, len: number = tasks.length; i < len; i++) {
            injectParamsToTask(tasks[i], paramIds);
        }
    }
}
function injectParamsToTask(task: BaseTask, paramIds: string[]): void {
    if (task instanceof ExpressTask) {
        const express = (task).data.express;
        modifyParamValue(express, paramIds);
    } else if (task instanceof IfTask) {
        const conditions = task.conditions;
        for (let j: number = 0, jlen: number = conditions.length; j < jlen; j++) {
            const exp = conditions[j];
            modifyParamValue(exp, paramIds);
        }
        if (task.conditionsRun) {
            const conditionRun = task.conditionsRun;
            for (let i: number = 0, len: number = conditionRun.length; i < len; i++) {
                const oneRun = conditionRun[i];
                injectParamsToQueueTask(oneRun, paramIds);
            }
        }
        if (task.elseRun) {
            injectParamsToQueueTask(task.elseRun, paramIds);
        }
    } else if (task instanceof SetPropertyTask) {
        if (task.data.value && Array.isArray(task.data.value)) {
            modiyExpressItemParamValue(task.data.value, paramIds);
        }
    } else if (task instanceof PlayAnimationTask) {
        if (task.data.name && Array.isArray(task.data.name)) {
            modiyExpressItemParamValue(task.data.name as any, paramIds);
        }
        if (task.data && task.data.target) {
            modiyExpressItemParamValue(task.data.target, paramIds);
        }
    } else if (task instanceof SoundTask) {
        if (task.data.assetId && Array.isArray(task.data.assetId)) {
            modiyExpressItemParamValue(task.data.assetId, paramIds);
        }
    } else if (task instanceof CallFunctionTask) {
        if (task.data && task.data.params) {
            modifyParamValue(task.data.params, paramIds);
        }
        if (task.data && task.data.target) {
            modiyExpressItemParamValue(task.data.target, paramIds);
        }
    } else if (task instanceof PrintTask) {
        if (task.data && task.data.value) {
            modiyExpressItemParamValue(task.data.value, paramIds);
        }
    } else if (task instanceof ForTask) {
        task.injectParams(paramIds);
    } else if (task instanceof AddListenerTask ||
        task instanceof AddListenerCallTask ||
        task instanceof RemoveListenerTask ||
        task instanceof EmitEventTask ||
        task instanceof CallProtoFunctionTask) {

        if (task.data && task.data.target) {
            modiyExpressItemParamValue(task.data.target, paramIds);
        }
    }
}
function modifyParamValue(express: ExpressType, paramIds: any[]): void {
    if (!express || !Array.isArray(express)) {
        return;
    }
    for (let j: number = 0, jlen: number = express.length; j < jlen; j++) {
        const expressItem = express[j];
        modiyExpressItemParamValue(expressItem, paramIds);
    }
}
function modiyExpressItemParamValue(expressItem: ExpressItem, paramIds: any[]): void {
    if (expressItem[0] === ExpressItemType.PARAM_VALUE) {
        const paramIndex = expressItem[1];
        if (paramIds.length > paramIndex) {
            expressItem[2] = paramIds[paramIndex];
        }
    } else if (expressItem[0] === ExpressItemType.ARRAY_VALUE) {
        // expressItem 0:type, 1:componentId, 2: variableId, 3: index, 4?: property
        if (Array.isArray(expressItem[3])) {
            modiyExpressItemParamValue(expressItem[3], paramIds);
        }
    } else if (expressItem[0] === ExpressItemType.ARRAY_FUNCTION) {
        if(expressItem[3] == 'push' || 
           expressItem[3] == 'unshift' ||
           expressItem[3] == 'concat' ) {
            if (Array.isArray(expressItem[4])) {
                modiyExpressItemParamValue(expressItem[4], paramIds);
            }
        } else if(expressItem[3] == 'splice') {
            if (Array.isArray(expressItem[4])) {
                modiyExpressItemParamValue(expressItem[4], paramIds);
            }
            if (Array.isArray(expressItem[5])) {
                modiyExpressItemParamValue(expressItem[5], paramIds);
            }
        }
    } 
}
