import { Timeline } from './Timeline';
import { IEventData } from '../model/IVFData';
import { EventFrame } from './EventFrame';

export class PathTimeline extends Timeline<number> {
    
    private path: SVGPathElement;
    private length: number = 0;
    constructor(path: string) {
        super();
        this.path = document.createElementNS('http://www.w3.org/2000/svg','path');
        this.path.setAttribute("d", path); 
        this.length = this.path.getTotalLength();
    }


    public get curPos(): [number, number] {
        if(this.path) {
            const p = this.path.getPointAtLength(this._curValue * this.length);
            return [p.x, p.y];
        }
        return [0,0]
    }

    public get angle(): number {
        let p0 = this.path.getPointAtLength(this._curValue * this.length - 1);
        let p1 = this.path.getPointAtLength(this._curValue * this.length + 1);
        return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
    }

}
