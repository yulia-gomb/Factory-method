import { Point } from "../src/entities/Point";
import { PointValidator } from "../src/validators/PointValidator";


describe('PointValidator', () => {
    it('should validate points with finite coordinates', () => {
        const validPoint = new Point(1, 2, 3);
        const invalidPoint1 = new Point(Infinity, 2, 3);
        const invalidPoint2 = new Point(1, NaN, 3);
        const invalidPoint3 = new Point(1, 2, -Infinity);

        expect(PointValidator.isValid(validPoint)).toBe(true);
        expect(PointValidator.isValid(invalidPoint1)).toBe(false);
        expect(PointValidator.isValid(invalidPoint2)).toBe(false);
        expect(PointValidator.isValid(invalidPoint3)).toBe(false);
    });

    it('should determine if two points are different', () => {
        const pointA = new Point(0, 0, 0);
        const pointB = new Point(1, 0, 0);
        const pointC = new Point(0, 1, 0);
        const pointD = new Point(0, 0, 1);
        const pointE = new Point(0, 0, 0);

        expect(PointValidator.isDifferent(pointA, pointB)).toBe(true);
        expect(PointValidator.isDifferent(pointA, pointC)).toBe(true);
        expect(PointValidator.isDifferent(pointA, pointD)).toBe(true);
        expect(PointValidator.isDifferent(pointA, pointE)).toBe(false);
    });
});
