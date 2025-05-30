import { Observer } from '@/observers/Observer';
import { TriangleCalculator } from '@/utils/Calculator/TriangleCalculator';
import { ConeCalculator } from '@/utils/Calculator/ConeCalculator';
import { Shape } from '@/entities/Shape';
import { Triangle } from '@/entities/Triangle';
import { Cone } from '@/entities/Cone';

type ComputedData = {
    area?: number;
    perimeter?: number;
    volume?: number;
};

export class Warehouse implements Observer {
    private static instance: Warehouse;

    private data: Map<string, ComputedData> = new Map();

    private constructor() {}

    static getInstance(): Warehouse {
        if (!Warehouse.instance) {
            Warehouse.instance = new Warehouse();
        }
        return Warehouse.instance;
    }

    update(shape: Shape): void {
        if (shape instanceof Triangle) {
            const calculator = new TriangleCalculator();
            const area = calculator.calculateArea(shape);
            const perimeter = calculator.calculatePerimeter(shape);
            this.data.set(shape.id, { area, perimeter });
        } else if (shape instanceof Cone) {
            const calculator = new ConeCalculator();
            const area = calculator.calculateArea(shape);
            const volume = calculator.calculateVolume(shape);
            this.data.set(shape.id, { area, volume });
        }
    }

    get(shapeId: string): ComputedData | null {
        return this.data.get(shapeId) || null;
    }

    remove(shapeId: string): void {
        this.data.delete(shapeId);
    }
}