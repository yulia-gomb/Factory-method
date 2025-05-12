import { Shape } from '@/entities/Shape';

export abstract class ShapeValidator<T extends Shape> {
    abstract validate(shape: T): boolean;
}
