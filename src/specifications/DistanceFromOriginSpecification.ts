import { Specification } from './Specification';
import { GeometryCalculator } from '@/utils/Calculator/GeometryCalculator';
import { HasPoints } from './HasPoints';
import { Point } from '@/entities/Point';

export class DistanceFromOriginSpecification<T extends HasPoints | { baseCenter: Point }> implements Specification<T> {
    constructor(private readonly min: number, private readonly max: number) {}

    isSatisfiedBy(item: T): boolean {
        let distance: number;

        if ('baseCenter' in item) {
            distance = GeometryCalculator.distance(item.baseCenter, new Point(0, 0, 0));
        } else {
            distance = GeometryCalculator.distance(item.pointA, new Point(0, 0, 0));
        }

        return distance >= this.min && distance <= this.max;
    }
}
