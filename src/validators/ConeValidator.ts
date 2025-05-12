import { Cone } from '@/entities/Cone';
import { PointValidator } from './PointValidator';
import { ShapeValidator } from "@/validators/ShapeValidator.ts";
import { GeometryCalculator } from "@/utils/Calculator/GeometryCalculator.ts";

export class ConeValidator extends ShapeValidator<Cone> {

    validate(cone: Cone): boolean {
        return (
            PointValidator.isValid(cone.baseCenter) &&
            PointValidator.isValid(cone.apex) &&
            this.isValidRadius(cone.baseRadius) &&
            this.isValidOrientation(cone) &&
            this.hasPositiveHeight(cone)
        );
    }

    private isValidRadius(radius: number): boolean {
        return Number.isFinite(radius) && radius > 0;
    }

    private isValidOrientation(cone: Cone): boolean {
        return (
            cone.baseCenter.x === cone.apex.x ||
            cone.baseCenter.y === cone.apex.y ||
            cone.baseCenter.z === cone.apex.z
        );
    }

    private hasPositiveHeight(cone: Cone): boolean {
        return GeometryCalculator.distance(cone.baseCenter, cone.apex) > 1e-6;
    }
}
