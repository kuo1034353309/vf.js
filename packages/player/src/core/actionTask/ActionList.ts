import { VFComponent } from '../../display/VFComponent';
import { IAction, ActionType, ComponentEvent, IActionSetProperty, IActionExpress,
    IActionIFPart, IActionFunction, IActionAddEventListener, IActionPlayAnimation,
    IActionJump, IActionArraySplice, IActionArrayConcat, IActionEmitEvent,
    IActionSound, IActionDefineVariable, IVariableData, IActionGoto, IActionCallFunction, IActionFor, IActionEnterFrame } from '../model/IVFData';
import { BaseTask } from './core/BaseTask';
import { AddListenerTask } from './AddListenerTask';
import { SetPropertyTask } from './SetPropertyTask';
import { ExpressTask } from './ExpressTask';
import { IfTask } from './IfTask';
import { QueueTask } from './core/QueueTask';
import { DefineFunctionTask } from './DefineFunctionTask';
import { FunctionTask } from './FunctionTask';
import { CallFunctionTask } from './CallFunctionTask';
import { PrintTask } from './PrintTask';
import { SoundTask } from './SoundTask';
import { PlayAnimationTask } from './PlayAnimationTask';
import { JumpToNextSceneTask } from './JumpToNextSceneTask';
import { JumpToPrevSceneTask } from './JumpToPrevSceneTask';
import { JumpToSceneTask } from './JumpToSceneTask';
import { ArrayPopTask } from './ArrayPopTask';
import { ArrayPushTask } from './ArrayPushTask';
import { ArraySpliceTask } from './ArraySpliceTask';
import { ArrayRandomTask } from './ArrayRandomTask';
import { ArrayInitTask } from './ArrayInitTask';
import { ArrayConcatTask } from './ArrayConcatTask';
import { ArrayShiftTask } from './ArrayShiftTask';
import { ArrayUnshiftTask } from './ArrayUnshiftTask';
import { AddListenerCallTask } from './AddListenerCallTask';
import { EmitEventTask } from './EmitEventTask';
import { DefineVariableTask } from './DefineVariableTask';
import { CallProtoFunctionTask } from './CallProtoFunctionTask';
import { RemoveListenerTask } from './RemoveListenerTask';
import { ForTask } from './ForTask';
import { BreakTask } from './BreakTask';
import { WaitTask } from './WaitTask';
import { SetTimeoutTask } from './SetTimeoutTask';
import { ContainerTask } from './core/ContainerTask';
import { SetIntervalTask } from './SetIntervalTask';
import { EnterFrameTask } from './EnterFrameTask';
import { EnterFrameCallTask } from './EnterFrameCallTask';

export class ActionList {
    public component: VFComponent;
    public data: IAction[] | string;

    private _actionList: BaseTask[] = [];

    constructor(component: VFComponent, data: IAction[] | string) {
        this.component = component;
        this.data = data;
        this.parseData();
    }

    public run(): void {
        if (this._actionList && this._actionList.length) {
            for (let i = 0, len: number = this._actionList.length; i < len; i++) {
                const task = this._actionList[i];

                task.run();
            }
        }
    }

    public stop(): void {
        if (this._actionList && this._actionList.length) {
            for (let i = 0, len: number = this._actionList.length; i < len; i++) {
                const task = this._actionList[i];

                task.stop();
            }
        }
    }

    public pause(): void {
        if (this._actionList && this._actionList.length) {
            for (let i = 0, len: number = this._actionList.length; i < len; i++) {
                const task = this._actionList[i];

                task.pause();
            }
        }
    }

    public resume(): void {
        if (this._actionList && this._actionList.length) {
            for (let i = 0, len: number = this._actionList.length; i < len; i++) {
                const task = this._actionList[i];

                task.resume();
            }
        }
    }

    private parseData(): void {
        if (this.data) {
            if (Array.isArray(this.data)) {
                this.parseAST(this.data);
            }
        }
    }

    private addGlobalVariable(action: IActionDefineVariable): void {
        if (this.component && this.component.vfStage) {
            const variableManager = this.component.vfStage.variableManager;

            variableManager.addVariableDataToGlobal(action.varId, action.variableType, action.value);
        }
    }
    private parseAST(actions: IAction[]): void {
        if (actions) {
            for (let i = 0, len: number = actions.length; i < len; i++) {
                const task = this.parseAction(actions[i]);

                if (task) {
                    this._actionList.push(task);
                }
            }
        }
    }
    private parseAction(data: IAction): BaseTask | undefined {
        let task: BaseTask | undefined;

        switch (data.type) {
            case ActionType.Add:
                task = this.parseAddToStageBefore(data);
                break;
            case ActionType.Added:
                task = this.parseAddToStage(data);
                break;
            case ActionType.SetProperty:
                task = this.parseSetProperty(data as any);
                break;
            case ActionType.Click:
                task = this.parseClick(data);
                break;
            case ActionType.Express:
                task = this.parseExpress(data as any);
                break;
            case ActionType.IfGroup:
                task = this.parseIf(data);
                break;
            case ActionType.DefineFunction:
                task = this.parseDefineFunction(data as any);
                break;
            case ActionType.CallFunction:
                task = this.parseCallFunction(data as any);
                break;
            case ActionType.Print:
                task = this.parsePrint(data as any);
                break;
            case ActionType.AddEventListener:
                task = this.parseAddEventListener(data as any);
                break;
            case ActionType.RemoveEventListener:
                task = this.parseRemoveEventListener(data as any);
                break;
            case ActionType.EmitEvent:
                task = this.parseEmitEvent(data as IActionEmitEvent);
                break;
            case ActionType.PlaySound:
            case ActionType.PauseSound:
            case ActionType.ResumeSound:
                task = this.parseSound(data as IActionSound);
                break;
            case ActionType.PlayAnimation:
                task = this.parsePlayAnimation(data as any);
                break;
            case ActionType.JumpToNextScene:
                task = this.parseJumpToNextScene(data);
                break;
            case ActionType.JumpToPrevScene:
                task = this.parseJumpToPrevScene(data);
                break;
            case ActionType.JumpToScene:
                task = this.parseJumpToScene(data);
                break;
            case ActionType.ArrayInit:
                task = new ArrayInitTask(this.component, data);
                break;
            case ActionType.ArrayPop:
                task = new ArrayPopTask(this.component, data);
                break;
            case ActionType.ArrayPush:
                task = new ArrayPushTask(this.component, data);
                break;
            case ActionType.ArraySplice:
                task = new ArraySpliceTask(this.component, data as IActionArraySplice);
                break;
            case ActionType.ArrayRandom:
                task = new ArrayRandomTask(this.component, data);
                break;
            case ActionType.ArrayConcat:
                task = new ArrayConcatTask(this.component, data as IActionArrayConcat);
                break;
            case ActionType.ArrayShift:
                task = new ArrayShiftTask(this.component, data);
                break;
            case ActionType.ArrayUnshift:
                task = new ArrayUnshiftTask(this.component, data);
                break;
            case ActionType.AddEventListenerCall:
                task = this.parseAddEventListenerCall(data as IActionAddEventListener);
                break;
            case ActionType.DefineVariable:
                task = new DefineVariableTask(this.component, data as IActionDefineVariable);
                break;
            case ActionType.CallProtoFunction:
                task = new CallProtoFunctionTask(this.component, data as IActionCallFunction);
                break;
            case ActionType.GotoPlay:
                const gotoData0 = data as IActionGoto;
                const gotoPlayData: IActionCallFunction = {
                    type: ActionType.CallProtoFunction,
                    target: gotoData0.target,
                    name: 'gotoPlay',
                };

                gotoPlayData.params = [];
                if (Array.isArray(gotoData0.name)) {
                    gotoPlayData.params.push(gotoData0.name);
                }
                else {
                    gotoPlayData.params.push([0, gotoData0.name]);
                }
                if (Array.isArray(gotoData0.frame)) {
                    gotoPlayData.params.push(gotoData0.frame);
                }
                else {
                    gotoPlayData.params.push([0, gotoData0.frame]);
                }
                if (Array.isArray(gotoData0.times)) {
                    gotoPlayData.params.push(gotoData0.times);
                }
                else {
                    gotoPlayData.params.push([0, gotoData0.times]);
                }
                task = new CallProtoFunctionTask(this.component, gotoPlayData);
                break;
            case ActionType.GotoStop:
                const gotoData1 = data as IActionGoto;
                const gotoStopData: IActionCallFunction = {
                    type: ActionType.CallProtoFunction,
                    target: gotoData1.target,
                    name: 'gotoStop',
                };

                gotoStopData.params = [];
                if (Array.isArray(gotoData1.name)) {
                    gotoStopData.params.push(gotoData1.name);
                }
                else {
                    gotoStopData.params.push([0, gotoData1.name]);
                }
                if (Array.isArray(gotoData1.frame)) {
                    gotoStopData.params.push(gotoData1.frame);
                }
                else {
                    gotoStopData.params.push([0, gotoData1.frame]);
                }
                task = new CallProtoFunctionTask(this.component, gotoStopData);
                break;
            case ActionType.For:
                task = this.parseFor(data as IActionFor);
                break;
            case ActionType.Break:
                task = new BreakTask();
                break;
            case ActionType.Wait:
                task = new WaitTask(this.component, data);
                break;
            case ActionType.SetTimeout:
                task = this.parseSetTimeout(data);
                break;
            case ActionType.SetInterval:
                task = this.parseSetInterval(data);
                break;
            case ActionType.EnterFrame:
                task = this.parseEnterFrame(data);
                break;
            case ActionType.EnterFrameCall:
                task = this.parseEnterFrameCall(data);
                break;
            default:
                break;
        }

        return task;
    }

    private parseSubTask(task: ContainerTask, data: IAction): void {
        if (data.execute) {
            for (let i = 0, len: number = data.execute.length; i < len; i++) {
                const taskData = data.execute[i];
                const subTask = this.parseAction(taskData);

                if (subTask) {
                    task.addSubTask(subTask);
                }
            }
        }
    }

    private parseAddToStageBefore(data: IAction): AddListenerTask {
        const addAction: IActionAddEventListener = {
            type: ActionType.AddEventListener,
            event: ComponentEvent.Add,
            target: [],
        };
        const task: AddListenerTask = new AddListenerTask(this.component, addAction);

        this.parseSubTask(task, data);

        return task;
    }
    private parseAddToStage(data: IAction): AddListenerTask {
        const addedAction: IActionAddEventListener = {
            type: ActionType.AddEventListener,
            event: ComponentEvent.Added,
            target: [],
        };
        const task: AddListenerTask = new AddListenerTask(this.component, addedAction);

        this.parseSubTask(task, data);

        return task;
    }

    private parseSetProperty(data: IActionSetProperty): SetPropertyTask {
        const task: SetPropertyTask = new SetPropertyTask(this.component, data);

        return task;
    }

    private parseClick(data: IAction): AddListenerTask | undefined {
        const addlistenerAction: IActionAddEventListener = {
            event: ComponentEvent.Click,
            type: ActionType.AddEventListener,
            target: data.target,
        };
        const task: AddListenerTask = new AddListenerTask(this.component, addlistenerAction);

        this.parseSubTask(task, data);

        return task;
    }

    private parseExpress(data: IActionExpress): ExpressTask {
        const task: ExpressTask = new ExpressTask(this.component, data);

        return task;
    }

    private parseIf(data: IAction): IfTask {
        const task: IfTask = new IfTask(this.component);

        if (data.execute) {
            for (let i = 0, len: number = data.execute.length; i < len; i++) {
                const ifPart = data.execute[i];

                if (ifPart.type === ActionType.If
                    || ifPart.type === ActionType.ElseIf
                    || ifPart.type === ActionType.Else) {
                    const condition = (ifPart as IActionIFPart).condition;
                    const conditionQue = new QueueTask();

                    if (ifPart.execute) {
                        for (let j = 0, jlen: number = ifPart.execute.length; j < jlen; j++) {
                            const subTask = this.parseAction(ifPart.execute[j]);

                            if (subTask) {
                                conditionQue.addTask(subTask);
                            }
                        }
                    }
                    task.addCondition(condition, conditionQue);
                }
            }
        }

        return task;
    }

    private parseDefineFunction(data: IActionFunction): DefineFunctionTask {
        const funTask: FunctionTask = new FunctionTask(this.component, data.name);

        this.parseSubTask(funTask, data);
        const task: DefineFunctionTask = new DefineFunctionTask(this.component, data.name, data, funTask);

        return task;
    }

    private parseCallFunction(data: IActionFunction): CallFunctionTask | undefined {
        const task: CallFunctionTask = new CallFunctionTask(this.component, data.name, data);

        return task;
    }

    private parsePrint(data: IAction): PrintTask {
        const task: PrintTask = new PrintTask(this.component, data);

        return task;
    }

    private parseAddEventListener(data: IActionAddEventListener): AddListenerTask | undefined {
        const task: AddListenerTask = new AddListenerTask(this.component, data);

        this.parseSubTask(task, data);

        return task;
    }

    private parseRemoveEventListener(data: IActionAddEventListener): RemoveListenerTask | undefined {
        const task: RemoveListenerTask = new RemoveListenerTask(this.component, data);

        return task;
    }

    private parseEmitEvent(data: IActionEmitEvent): EmitEventTask | undefined {
        const task: EmitEventTask = new EmitEventTask(this.component, data);

        return task;
    }
    private parseAddEventListenerCall(data: IActionAddEventListener): AddListenerCallTask | undefined {
        if (data.funName) {
            const task: AddListenerCallTask
                = new AddListenerCallTask(this.component, data);

            return task;
        }
    }
    private parseSound(data: IActionSound): SoundTask {
        const task = new SoundTask(this.component, data);

        return task;
    }
    private parsePlayAnimation(data: IActionPlayAnimation): PlayAnimationTask | undefined {
        const task: PlayAnimationTask = new PlayAnimationTask(this.component, data);

        return task;
    }
    private parseJumpToNextScene(data: IActionJump): JumpToNextSceneTask {
        const task: JumpToNextSceneTask = new JumpToNextSceneTask(this.component, data.transition);

        return task;
    }
    private parseJumpToPrevScene(data: IActionJump): JumpToPrevSceneTask {
        const task: JumpToPrevSceneTask = new JumpToPrevSceneTask(this.component, data.transition);

        return task;
    }
    private parseJumpToScene(data: IActionJump): JumpToSceneTask {
        const task: JumpToSceneTask = new JumpToSceneTask(this.component, data.value, data.transition);

        return task;
    }

    private parseFor(data: IActionFor): ForTask {
        const task = new ForTask(this.component, data);

        this.parseSubTask(task, data);

        return task;
    }
    private parseSetTimeout(data: IAction): SetTimeoutTask {
        const task: SetTimeoutTask = new SetTimeoutTask(this.component, data);

        this.parseSubTask(task, data);

        return task;
    }

    private parseSetInterval(data: IAction): SetIntervalTask {
        const task: SetIntervalTask = new SetIntervalTask(this.component, data);

        this.parseSubTask(task, data);

        return task;
    }
    private parseEnterFrame(data: IAction): EnterFrameTask {
        const task: EnterFrameTask = new EnterFrameTask(this.component, data);

        this.parseSubTask(task, data);

        return task;
    }
    private parseEnterFrameCall(data: IActionEnterFrame): EnterFrameCallTask {
        const task: EnterFrameCallTask = new EnterFrameCallTask(this.component, data);
        return task;
    }
}

