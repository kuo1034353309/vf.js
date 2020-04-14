/**
 * 信息、参数、配置对象基类
 *
 * @author 8088
 */
import StateEvent from '../event/StateEvent';
import {EventType} from '../event/EventType';
import {EventLevel} from '../event/EventLevel';

export default class BaseInfo{

    /** 系统与对外事件 */
    public readonly systemEvent = new StateEvent();

    constructor(){

    }

    /**
     * Add a listener for a given event.
     */
    public on(event: string, fn: any, context?: any): this {
    	this.systemEvent.on(event, fn, context);
    	return this;
    }
    public addListener(event: string, fn: Function, context?: any): this {
    	return this.on(event, fn, context);
    }

    /**
     * Remove the listeners of a given event.
     */
    public removeListener(event: string, fn?: Function, context?: any, once?: boolean): this{
    	return this.off(event, fn, context, once);
    }
    public off(event: string, fn?: any, context?: any, once?: boolean): this{
    	this.systemEvent.off(event, fn, context, once);
    	return this;
    }

    /**
     * 生成唯一标识ID
     *
     * @return 随机码
     */
    public createRandomId(): string {
    	// return String((new Date()).getTime()) + this.createRandomIdentifier(3);
    	var specialChars:Array<string> = new Array('8', '9', 'A', 'B');
    	return this.createRandomIdentifier(8, 15) + '-' + this.createRandomIdentifier(4, 15) + '-8' + this.createRandomIdentifier(3, 15) + '-' + specialChars[this.randomIntegerWithinRange(0, 3)] + this.createRandomIdentifier(3, 15) + '-' + this.createRandomIdentifier(12, 15);
    }

    /**
     * 生成会话ID
     *
     * @return 随机码
     */
    public getSessionId(): string
    {
    	let _sessionId: string;
    	let date:Date = new Date();
    	_sessionId = String(date.getTime()) + String(1000 + date.getMilliseconds()) + String(Math.floor(Math.random() * 9000) + 1000);
    	return _sessionId;
    }

    /**
     * 属性被更改后抛出changed事件
     *
     * @param	propertyName 对应已更改的属性名称
     */
    protected propertyChange(propertyName: string)
    {
    	this.systemEvent.emit(EventType.STATE, {
    		code: this.getClassName(this) + this.PROPERTY_CHANGE,
    		level: EventLevel.STATUS,
    		data: {name:propertyName, value:(<any> this)[propertyName]},
    		// message: 'mark:是否需要加详细的描述 打运行时日志 待定...'
    	});
    }

    /**
     * 属性设置
     * - 超出了对应支持的范围，上报此错误。
     *
     * @param	propertyName 属性名称
     * @param	setValue 想要更改的值
     */
    protected propertyError(propertyName: string, setValue?: any)
    {
    	this.systemEvent.emit(EventType.STATE, {
    		code: this.getClassName(this) + this.PROPERTY_SET_ERROR,
    		level: EventLevel.ERROR,
    		data: {name:propertyName, value:setValue}
    		// message: 'mark:是否需要加详细的描述 打运行时日志 待定...'
    	});
    }

    public get info(): object {
    	return {};
    }

    public output(ttl: string, obj: any) {
        console.groupCollapsed(ttl);
        for(const key in obj) {
            console.log('%c' + key + ':', 'color: violet;', obj[key]);
        }
        console.groupEnd();
    }


    // Internals..
    //

    private createRandomIdentifier(length: number, radix: number = 61): string {
    	let characters: Array<string> = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    	let id: Array<string> = [];
    	radix = (radix > 61) ? 61 : radix;
    	while (length--) {
    		id.push(characters[this.randomIntegerWithinRange(0, radix)]);
    	}
    	return id.join('');
    }

    private randomIntegerWithinRange(min: number, max: number): number {
    	return Math.floor(Math.random() * (1 + max - min) + min);
    }

    private getClassName(value: any) {
    	let regex = /function (.{1,})\(/;
    	let results = regex.exec((<any> value).constructor.toString());
    	return (results && results.length > 1) ? results[1] : '';
    }

    private PROPERTY_CHANGE: string = '.Property.Changed';
    private PROPERTY_SET_ERROR: string = '.Property.SetError';
}
