import { Shape } from './Shape';
import { Point } from './Point';


export class Triangle extends Shape {
    constructor(
        id: string,
        public readonly pointA: Point,
        public readonly pointB: Point,
        public readonly pointC: Point
    ) {
        super(id);
    }
}
