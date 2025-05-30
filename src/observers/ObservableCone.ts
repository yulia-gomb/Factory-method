import { ObservableShape } from '@/observers/ObservableShape';
import { Point } from '@/entities/Point';

export class ObservableCone extends ObservableShape {
    [x: string]: any;
    constructor(
        id: string,
        public baseCenter: Point,
        public apex: Point,
        public baseRadius: number
    ) {
        super(id);
    }

    updateBaseCenter(baseCenter: Point): void {
        this.baseCenter = baseCenter;
        this.notifyObservers();
    }

    updateApex(apex: Point): void {
        this.apex = apex;
        this.notifyObservers();
    }

    updateRadius(radius: number): void {
        this.baseRadius = radius;
        this.notifyObservers();
    }
}
