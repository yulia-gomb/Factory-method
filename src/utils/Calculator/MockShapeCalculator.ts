import { Shape } from "../../entities/Shape.ts";
import { ShapeCalculator } from "./ShapeCalculator.ts";

export class MockShapeCalculator extends ShapeCalculator {
    calculateArea(_shape: Shape): number {
        return 100;
    }

    calculatePerimeter(_shape: Shape): number {
        return 40;
    }
}
