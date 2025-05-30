import { ObservableShape } from '@/observers/ObservableShape';
import { Point } from '@/entities/Point';

export class ObservableTriangle extends ObservableShape {
    [x: string]: any;
    constructor(
        id: string,
        public pointA: Point,
        public pointB: Point,
        public pointC: Point
    ) {
        super(id);
    }

    updatePoints(pointA: Point, pointB: Point, pointC: Point): void {
        this.pointA = pointA;
        this.pointB = pointB;
        this.pointC = pointC;

        this.notifyObservers();
    }
}
