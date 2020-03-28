import getTimer from './getTimer';
export default function trace(...args: any[]) {
    const title = '[VF LOG]';
    switch (args.length) {
        // tslint:disable-next-line: no-console
        case 1: return console.log(title, args[0]);
        // tslint:disable-next-line: no-console
        case 2: return console.log(title, args[0], args[1]);
        // tslint:disable-next-line: no-console
        case 3: return console.log(title, args[0], args[1], args[2]);
        // tslint:disable-next-line: no-console
        case 4: return console.log(title, args[0], args[1], args[2], args[3]);
        // tslint:disable-next-line: no-console
        case 5: return console.log(title, args[0], args[1], args[2], args[3], args[4]);
        // tslint:disable-next-line: no-console
        case 6: return console.log(title, args[0], args[1], args[2], args[3], args[4], args[5]);
    }
}
//
// export default class Trace {
//     public static NAME		    :string = 'Trace';
//     public static VERSION		:string = '1.0.0';
//
//     // public static ignoreStatus		:boolean = true;
//     // public static secure			:boolean = false;
//     // public static secureDomain		:string  = '*';
//     // public static allowLog			:boolean = true;
//     // public static allowAdvancedTrace:boolean = true;
//     //
//     // public static DEFAULT_COLOR	:number	= 6710886;
//     // public static RED			:number = 0xE40D0D;
//     // public static ORANGE		:number = 0xFF6600;
//     // public static GREEN			:number = 0x4FE10F;
//     // public static BLUE			:number = 0x118EE6;
//     // public static PINK			:number = 0xE40DE4;
//     // public static YELLOW		:number = 0xE9E610;
//     // public static LIGHT_BLUE	:number = 0x15E0DE;
//     // public static START_TIME    :number = Date.now();
//
//     public static logAdvancedTrace  :boolean = false;
//
//     /**
//      * 可以通过属性设置功能开关：
//      *
//      * - 输出堆栈调用跟踪日志（Trace.logAdvancedTrace = true;）
//      *
//      * 使用示例：
//      * trace("year={}, month={}, day={}", 2014, 9, 5); // [VF LOG] year=2014 month=9 day=5
//      * trace(Object); // [VF LOG] {"a":"aa", "b":"bb", ...}
//      * trace(Array); // [VF LOG] [0, 1, 2, ...]
//      * trace("test message", 0xFF6600, "LOGO"); // [LOGO LOG] test message
//      * trace("test1", "test2", 0xFF6600, "test3", "CORE"); // [CORE LOG] test1 test2 test3
//      */
//     public static log(any: any, ...args: any[]): void {
//         let _msg: string = '';
//         let _color: number = Trace.DEFAULT_COLOR;
//         let _logo: string = 'VF';
//
//         if(typeof any === 'object') {
//             try {
//                 _msg = JSON.stringify(any);
//                if(_msg === '{}') {
//                    _msg = JSON.stringify((<any>Object).fromEntries(any.entries()));
//                }
//             }
//             catch (err) {
//                  return console.log(err);
//             }
//         }
//         else {
//             _msg = String(any);
//         }
//
//         if(args.length) {
//             let placeholder: string = '{}';
//             let pIndex: number = 0;
//             let arg: string = '';
//             let i: number = 0;
//
//             while ((pIndex = _msg.indexOf(placeholder, pIndex)) != -1)
//             {
//                 arg = String(args.shift());
//                 _msg = _msg.substring(0, pIndex) + arg + _msg.substring(pIndex + 2);
//                 pIndex += arg.length;
//             }
//
//             while (i<args.length)
//             {
//                 let _type: string = typeof args[i];
//                 if (_type === "number" && args[i].toString(16).length == 6)
//                 {
//                     _color = args[i];
//                     i++;
//                     continue;
//                 }
//
//                 if (_type === "string" && args[i].length<=5)
//                 {
//                     var re: RegExp = /^[A-Z]+[A-Z0-9]*$/;
//                     if (re.test(args[i]))
//                     {
//                         _logo = args[i];
//                         i++;
//                         continue;
//                     }
//                 }
//                 _msg += " " + String(args[i]);
//                 i++;
//             }
//
//         }
//
//         if(_logo || Trace.logAdvancedTrace) {
//             _msg = `[${(_logo ? (_logo + ' LOG') : '')}${Trace.logAdvancedTrace?Trace.wrapMessage():''}] ` + _msg;
//         }
//         /* mark：颜色看需求再加...
//         let style = [
//             'background: linear-gradient(#D33106, #571402)'
//             , 'border: 1px solid #3E0E02'
//             , 'color: white'
//             , 'display: block'
//             , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
//             , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
//             , 'line-height: 40px'
//             , 'text-align: center'
//             , 'font-weight: bold'
//         ].join(';');
//         // console.log('%c test message!', style); */
//         Trace.logAdvancedTrace?console.trace(_msg):console.log(_msg);
//     }
//
//     private static wrapMessage(allowAdvancedTrace: boolean = true): string {
//         let date: Date = new Date();
//         let time: string = String('00' + date.getHours()).substr(-2) + ':' +
//             String('00' + date.getMinutes()).substr(-2) + ':' +
//             String('00' + date.getSeconds()).substr(-2) + '.' +
//             String('000' + date.getUTCMilliseconds()).substr(-3);
//         let str: string = '->' + getTimer(Trace.START_TIME) + ' ' + time;
//
//         // ...
//
//         return str;
//     }
// }
//(<any>window).trace = trace;