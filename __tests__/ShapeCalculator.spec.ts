import { MockShapeCalculator } from "./MockShapeCalculator";
import { Shape } from "../src/entities/Shape";


class MockShape extends Shape {
    constructor(id: string) {
        super(id);
    }
}

describe('ShapeCalculator', () => {
    it('should calculate the area of a given shape', () => {
        const calculator = new MockShapeCalculator();
        const shape = new MockShape('shape-1');

        const area = calculator.calculateArea(shape);

        expect(area).toBe(100);
        expect(area).toBeGreaterThan(0);
    });

    it('should calculate the perimeter of a given shape', () => {
        const calculator = new MockShapeCalculator();
        const shape = new MockShape('shape-2');

        const perimeter = calculator.calculatePerimeter(shape);

        expect(perimeter).toBe(40);
        expect(perimeter).toBeGreaterThan(0);
    });
});
