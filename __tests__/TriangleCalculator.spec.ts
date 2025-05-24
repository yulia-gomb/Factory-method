import { TriangleCalculator } from "../src/utils/Calculator/TriangleCalculator";
import { Point } from "../src/entities/Point";
import { Triangle } from "../src/entities/Triangle";


describe('TriangleCalculator', () => {
    it('should calculate the correct area of a triangle', () => {
        const calculator = new TriangleCalculator();
        const triangle = new Triangle(
            'triangle-1',
            new Point(0, 0, 0),
            new Point(3, 0, 0),
            new Point(0, 4, 0)
        );

        const area = calculator.calculateArea(triangle);

        expect(area).toBe(6);
        expect(area).toBeGreaterThan(0);
    });

    it('should calculate the correct perimeter of a triangle', () => {
        const calculator = new TriangleCalculator();
        const triangle = new Triangle(
            'triangle-2',
            new Point(0, 0, 0),
            new Point(3, 0, 0),
            new Point(0, 4, 0)
        );

        const perimeter = calculator.calculatePerimeter(triangle);

        expect(perimeter).toBeCloseTo(12, 2);
        expect(perimeter).toBeGreaterThan(0);
    });

});
