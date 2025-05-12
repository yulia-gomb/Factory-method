import { Point } from '@/entities/Point.ts';

export class GeometryCalculator {

    static distance(a: Point, b: Point): number {
        return Math.sqrt(
            (a.x - b.x) ** 2 +
            (a.y - b.y) ** 2 +
            (a.z - b.z) ** 2
        );
    }

    static areCollinear(a: Point, b: Point, c: Point): boolean {
        const area =
            (b.x - a.x) * (c.y - a.y) -
            (b.y - a.y) * (c.x - a.x);
        return Math.abs(area) < 1e-6;
    }

}
