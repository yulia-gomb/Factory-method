import { Point } from '@/entities/Point';

export class DistanceCalculator {
    static euclidean(a: Point, b: Point): number {
        return Math.sqrt(
            (a.x - b.x) ** 2 +
            (a.y - b.y) ** 2 +
            (a.z - b.z) ** 2
        );
    }

}
