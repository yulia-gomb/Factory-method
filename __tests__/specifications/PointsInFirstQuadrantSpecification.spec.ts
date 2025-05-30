import {Point} from "../../src/entities/Point";
import {Triangle} from "../../src/entities/Triangle";
import {PointsInFirstQuadrantSpecification} from "../../src/specifications/PointsInFirstQuadrantSpecification";


describe('PointsInFirstQuadrantSpecification', () => {
    it('should return true if all points are in the first quadrant', () => {
        const triangle = new Triangle(
            'triangle-1',
            new Point(1, 2, 0),
            new Point(3, 4, 0),
            new Point(5, 6, 0)
        );

        const specification = new PointsInFirstQuadrantSpecification<Triangle>();

        const result = specification.isSatisfiedBy(triangle);

        expect(result).toBe(true);
    });

    it('should return false if any point is not in the first quadrant', () => {
        const triangle = new Triangle(
            'triangle-1',
            new Point(-1, 2, 0),
            new Point(3, 4, 0),
            new Point(5, 6, 0)
        );

        const specification = new PointsInFirstQuadrantSpecification<Triangle>();

        const result = specification.isSatisfiedBy(triangle);

        expect(result).toBe(false);
    });

    it('should return false if points are on negative axes', () => {
        const triangle = new Triangle(
            'triangle-1',
            new Point(1, -2, 0),
            new Point(-3, 4, -1),
            new Point(5, 6, 0)
        );

        const specification = new PointsInFirstQuadrantSpecification<Triangle>();

        const result = specification.isSatisfiedBy(triangle);

        expect(result).toBe(false);
    });

    it('should return true for points on positive axes', () => {
        const triangle = new Triangle(
            'triangle-1',
            new Point(1, 1, 1),
            new Point(2, 2, 2),
            new Point(3, 3, 3)
        );

        const specification = new PointsInFirstQuadrantSpecification<Triangle>();

        const result = specification.isSatisfiedBy(triangle);

        expect(result).toBe(true);
    });
});
