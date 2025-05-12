import { ShapeCalculator } from './ShapeCalculator';
import { Cone } from '@/entities/Cone';
import { GeometryCalculator } from './GeometryCalculator';

export class ConeCalculator extends ShapeCalculator {
    calculateArea(cone: Cone): number {
        const height = this.getHeight(cone);
        const slantHeight = Math.sqrt(height ** 2 + cone.baseRadius ** 2);
        return Math.PI * cone.baseRadius * (cone.baseRadius + slantHeight);
    }

    calculatePerimeter(cone: Cone): number {
        return 2 * Math.PI * cone.baseRadius;
    }

   calculateVolume(cone: Cone): number {
        return (Math.PI * cone.baseRadius ** 2 * this.getHeight(cone)) / 3;
    }

    private getHeight(cone: Cone): number {
        return GeometryCalculator.distance(cone.baseCenter, cone.apex);
    }
}
