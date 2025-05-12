import { Triangle } from '@/entities/Triangle';
import { PointValidator } from './PointValidator';
import { ShapeValidator } from "@/validators/ShapeValidator.ts";
import { GeometryCalculator } from "@/utils/Calculator/GeometryCalculator.ts";


export class TriangleValidator extends ShapeValidator<Triangle> {

    validate(triangle: Triangle): boolean {
        return (
            this.allPointsValid(triangle) &&
            this.pointsAreDifferent(triangle) &&
            this.pointsNotCollinear(triangle)
        );
    }

    private allPointsValid(triangle: Triangle): boolean {
        return (
            PointValidator.isValid(triangle.pointA) &&
            PointValidator.isValid(triangle.pointB) &&
            PointValidator.isValid(triangle.pointC)
        );
    }

    private pointsAreDifferent(triangle: Triangle): boolean {
        return (
            PointValidator.isDifferent(triangle.pointA, triangle.pointB) &&
            PointValidator.isDifferent(triangle.pointB, triangle.pointC) &&
            PointValidator.isDifferent(triangle.pointC, triangle.pointA)
        );
    }

    private pointsNotCollinear(triangle: Triangle): boolean {
        return !GeometryCalculator.areCollinear(
            triangle.pointA,
            triangle.pointB,
            triangle.pointC
        );
    }
}
