import { Shape } from "../../src/entities/Shape";
import { ShapeFactory } from "../../src/factories/ShapeFactory";


class MockShape extends Shape {
    constructor(id: string) {
        super(id);
    }
}

class MockShapeFactory extends ShapeFactory {
    createFromString(id: string, data: string): Shape | null {
        if (data === 'valid') {
            return new MockShape(id);
        }
        return null;
    }
}

describe('ShapeFactory', () => {
    it('should create a Shape when valid data is provided', () => {
        const factory = new MockShapeFactory();
        const shape = factory.createFromString('shape-1', 'valid');

        expect(shape).toBeInstanceOf(MockShape);
        expect(shape?.id).toBe('shape-1');
        expect(shape).toBeInstanceOf(Shape);
    });

    it('should return null when invalid data is provided', () => {
        const factory = new MockShapeFactory();
        const shape = factory.createFromString('shape-2', 'invalid');

        expect(shape).toBeNull();
    });
});
