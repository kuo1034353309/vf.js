import { BaseTask, TaskEvent } from './core/BaseTask';
import { VFComponent } from '../../display/VFComponent';
import { IAction } from '../model/IVFData';
import { isNumber } from '../../utils/VFUtil';

export class WaitTask extends BaseTask {
        
    public component: VFComponent;
    public data: IAction;
    private timeoutHandler?: gui.Scheduler;

    constructor(component: VFComponent, data: IAction) {
        super();
        this.component = component;
        this.data = data;
    }   

    private get timeout(): number {
        let time: number = 0;
        if (Array.isArray(this.data.value)) {
            if (this.component && this.component.vfStage) {
                const variableManager = this.component.vfStage.variableManager;
                time = variableManager.getExpressItemValue(this.component, this.data.value);
            }
            
        } else {
            time = this.data.value;
        }
        if (!isNumber(time)) {
            time = 1;
        }
        return time;
    }

    public run(): void {
        super.run();
        const timeout = this.timeout;
        this.timeoutHandler = gui.Scheduler.setTimeout(timeout, () => {
            if (this.timeoutHandler) {
                this.timeoutHandler.stop();
                this.timeoutHandler = undefined;
            }
            
            this.complete();
        });
    }
}

