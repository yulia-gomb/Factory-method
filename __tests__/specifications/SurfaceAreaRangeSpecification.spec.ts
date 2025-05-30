import { Point } from "../../src/entities/Point";
import { Triangle } from "../../src/entities/Triangle";
import { TriangleCalculator } from "../../src/utils/Calculator/TriangleCalculator";
import { SurfaceAreaRangeSpecification } from "../../src/specifications/SurfaceAreaRangeSpecification";
import { Cone } from "../../src/entities/Cone";
import { ConeCalculator } from "../../src/utils/Calculator/ConeCalculator";


jest.mock('@/utils/Calculator/TriangleCalculator');
jest.mock('@/utils/Calculator/ConeCalculator');

describe('SurfaceAreaRangeSpecification', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return true for a Triangle within the surface area range', () => {
        const triangle = new Triangle(
            'triangle-1',
            new Point(0, 0, 0),
            new Point(3, 0, 0),
            new Point(0, 4, 0)
        );

        (TriangleCalculator.prototype.calculateArea as jest.Mock).mockReturnValue(6);

        const specification = new SurfaceAreaRangeSpecification<Triangle>(5, 10);
        const result = specification.isSatisfiedBy(triangle);

        expect(result).toBe(true);
        expect(TriangleCalculator.prototype.calculateArea).toHaveBeenCalledWith(triangle);
    });

    it('should return false for a Triangle outside the surface area range', () => {
        const triangle = new Triangle(
            'triangle-1',
            new Point(0, 0, 0),
            new Point(3, 0, 0),
            new Point(0, 4, 0)
        );

        (TriangleCalculator.prototype.calculateArea as jest.Mock).mockReturnValue(12);

        const specification = new SurfaceAreaRangeSpecification<Triangle>(5, 10);
        const result = specification.isSatisfiedBy(triangle);

        expect(result).toBe(false);
        expect(TriangleCalculator.prototype.calculateArea).toHaveBeenCalledWith(triangle);
    });

    it('should return true for a Cone within the surface area range', () => {
        const cone = new Cone(
            'cone-1',
            new Point(0, 0, 0),
            new Point(0, 0, 5),
            3
        );

        (ConeCalculator.prototype.calculateArea as jest.Mock).mockReturnValue(75.4);

        const specification = new SurfaceAreaRangeSpecification<Cone>(50, 100);
        const result = specification.isSatisfiedBy(cone);

        expect(result).toBe(true);
        expect(ConeCalculator.prototype.calculateArea).toHaveBeenCalledWith(cone);
    });

    it('should return false for a Cone outside the surface area range', () => {
        const cone = new Cone(
            'cone-1',
            new Point(0, 0, 0),
            new Point(0, 0, 5),
            3
        );

        (ConeCalculator.prototype.calculateArea as jest.Mock).mockReturnValue(110);

        const specification = new SurfaceAreaRangeSpecification<Cone>(50, 100);
        const result = specification.isSatisfiedBy(cone);

        expect(result).toBe(false);
        expect(ConeCalculator.prototype.calculateArea).toHaveBeenCalledWith(cone);
    });

    it('should return false for an unknown shape', () => {
        const unknownShape = { id: 'unknown-shape' };

        const specification = new SurfaceAreaRangeSpecification<any>(50, 100);
        const result = specification.isSatisfiedBy(unknownShape);

        expect(result).toBe(false);
    });
});
