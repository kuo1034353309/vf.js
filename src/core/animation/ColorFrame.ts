import { Frame } from './Frame';

export class ColorFrame extends Frame<number> {

        constructor() {
            super();
        }

        public getValue(progress: number, value: number): number {
            const rgbData = this.changeColor2RGB(this.value);
            const rgbValue = this.changeColor2RGB(value);
            const resultArr = [
                rgbData[0] + (rgbValue[0] - rgbValue[0]) * progress,
                rgbData[1] + (rgbValue[1] - rgbValue[1]) * progress,
                rgbData[2] + (rgbValue[2] - rgbValue[2]) * progress,
            ];
            return this.changeRGB2Color(resultArr);
        }

        protected changeColor2RGB(color: number): number[] {
            // tslint:disable-next-line: no-bitwise
            const r = (color >> 16) & 0xFF;
            // tslint:disable-next-line: no-bitwise
            const g = (color >> 8) & 0xFF;
            // tslint:disable-next-line: no-bitwise
            const b = (color >> 0) & 0xFF;
            return [r, g, b];
        }
        protected changeRGB2Color(rgb: number[]): number {
            return rgb[0] * 0x10000 + rgb[1] * 0x100 + rgb[2];
        } 
    }

