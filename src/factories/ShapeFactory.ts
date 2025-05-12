import { Shape } from '@/entities/Shape';


export abstract class ShapeFactory {
    abstract createFromString(id: string, data: string): Shape | null;
}
