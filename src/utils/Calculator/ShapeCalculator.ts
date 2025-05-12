import { Shape } from '@/entities/Shape';


export abstract class ShapeCalculator {
    abstract calculateArea(shape: Shape): number;
    abstract calculatePerimeter(shape: Shape): number;
}