import { Shape } from './Shape';
import { Point } from './Point';


export class Cone extends Shape {
    constructor(
        id: string,
        public readonly baseCenter: Point,
        public readonly apex: Point,
        public readonly baseRadius: number
    ) {
        super(id);
    }
}
