import { Point } from "../../src/entities/Point";
import { Triangle } from "../../src/entities/Triangle";
import { DistanceFromOriginSpecification } from "../../src/specifications/DistanceFromOriginSpecification";
import { Cone } from "../../src/entities/Cone";


describe('DistanceFromOriginSpecification', () => {
    it('should return true for a triangle within the distance range', () => {
        const triangle = new Triangle(
            'triangle-1',
            new Point(3, 4, 0),
            new Point(0, 0, 0),
            new Point(5, 6, 0)
        );

        const specification = new DistanceFromOriginSpecification<Triangle>(0, 10);
        const result = specification.isSatisfiedBy(triangle);

        expect(result).toBe(true);
    });

    it('should return false for a triangle outside the distance range', () => {
        const triangle = new Triangle(
            'triangle-1',
            new Point(50, 50, 0),
            new Point(0, 0, 0),
            new Point(5, 6, 0)
        );

        const specification = new DistanceFromOriginSpecification<Triangle>(0, 10);
        const result = specification.isSatisfiedBy(triangle);

        expect(result).toBe(false);
    });

    it('should return true for a cone within the distance range', () => {
        const cone = new Cone(
            'cone-1',
            new Point(3, 4, 0),
            new Point(0, 0, 5),
            3
        );

        const specification = new DistanceFromOriginSpecification<Cone>(0, 10);
        const result = specification.isSatisfiedBy(cone);

        expect(result).toBe(true);
    });

    it('should return false for a cone outside the distance range', () => {
        const cone = new Cone(
            'cone-1',
            new Point(20, 20, 0),
            new Point(0, 0, 5),
            3
        );

        const specification = new DistanceFromOriginSpecification<Cone>(0, 10);
        const result = specification.isSatisfiedBy(cone);

        expect(result).toBe(false);
    });
});
