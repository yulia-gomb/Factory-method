import { Point } from "../src/entities/Point";
import { GeometryCalculator } from "../src/utils/Calculator/GeometryCalculator";


describe('GeometryCalculator', () => {
    it('should calculate the correct distance between two points', () => {
        const pointA = new Point(0, 0, 0);
        const pointB = new Point(3, 4, 0);

        const distance = GeometryCalculator.distance(pointA, pointB);

        expect(distance).toBe(5);
        expect(distance).toBeGreaterThan(0);
    });

    it('should correctly determine that three points are collinear', () => {
        const pointA = new Point(0, 0, 0);
        const pointB = new Point(1, 1, 0);
        const pointC = new Point(2, 2, 0);

        const result = GeometryCalculator.areCollinear(pointA, pointB, pointC);

        expect(result).toBe(true);
    });

    it('should correctly determine that three points are not collinear', () => {
        const pointA = new Point(0, 0, 0);
        const pointB = new Point(1, 2, 0);
        const pointC = new Point(2, 1, 0);

        const result = GeometryCalculator.areCollinear(pointA, pointB, pointC);

        expect(result).toBe(false);
    });
});
