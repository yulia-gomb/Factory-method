import { ShapeCalculator } from './ShapeCalculator';
import { Triangle } from '@/entities/Triangle';
import { GeometryCalculator } from './GeometryCalculator';

export class TriangleCalculator extends ShapeCalculator {
    calculateArea(triangle: Triangle): number {
        const [a, b, c] = this.getSides(triangle);
        const p = this.calculatePerimeter(triangle) / 2;
        return Math.sqrt(p * (p - a) * (p - b) * (p - c));
    }

    calculatePerimeter(triangle: Triangle): number {
        return this.getSides(triangle).reduce((sum, side) => sum + side, 0);
    }

    private getSides(triangle: Triangle): [number, number, number] {
        return [
            GeometryCalculator.distance(triangle.pointA, triangle.pointB),
            GeometryCalculator.distance(triangle.pointB, triangle.pointC),
            GeometryCalculator.distance(triangle.pointC, triangle.pointA)
        ];
    }
}