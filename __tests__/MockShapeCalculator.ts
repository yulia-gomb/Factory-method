import { Shape } from "../src/entities/Shape";
import { ShapeCalculator } from "../src/utils/Calculator/ShapeCalculator";

export class MockShapeCalculator extends ShapeCalculator {
    calculateArea(_shape: Shape): number {
        return 100;
    }

    calculatePerimeter(_shape: Shape): number {
        return 40;
    }
}
