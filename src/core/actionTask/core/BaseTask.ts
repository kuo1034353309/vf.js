export enum TaskEvent {
    EVENT_COMPLETE = 'EVENT_COMPLETE',
    EVENT_FAIL = 'EVENT_FAIL',
    EVENT_BREAK = 'EVENT_BREAK',
    FUNCTION_RUN_COMPLETE = 'FUNCTION_RUN_COMPLETE',
}
export class BaseTask extends vf.utils.EventEmitter {

    protected _isRunning: boolean = false;
    protected _isPaused: boolean = false;
    protected _isCompleted: boolean = false;
    protected _isFailed: boolean = false;
    protected _asynchronous: boolean = false;

    constructor() {
        super();
    }

    public run(): void {
        this._isRunning = true;
        this._isCompleted = false;
        this._isFailed = false;
    }

    public stop(): void {
        this._isRunning = false;
    }

    public pause(): void {
        this._isPaused = true;
    }

    public resume(): void {
        this._isPaused = false;
    }
    public break() {
        this._isRunning = false;
        this.emit(TaskEvent.EVENT_BREAK);
    }

    public complete(): void {
        this._isRunning = false;
        this._isCompleted = true;
        this.emit(TaskEvent.EVENT_COMPLETE);
    }

    public fail(type: string, data: any = null): void {
        this._isRunning = false;
        this._isFailed = true;
        this.emit(TaskEvent.EVENT_FAIL, data);
    }

    public get asynchronous(): boolean {
        return this._asynchronous;
    }

    public get isRunning(): boolean {
        return this._isRunning;
    }

    public get isCompleted(): boolean {
        return this._isCompleted;
    }
    public get isFailed(): boolean {
        return this._isFailed;
    }

    public get isPaused(): boolean {
        return this._isPaused;
    }
}

