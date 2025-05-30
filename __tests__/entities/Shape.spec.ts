import { Shape } from '../../src/entities/Shape';

class MockShape extends Shape {}

describe('Shape', () => {
    it('should create a Shape with the correct ID', () => {
        const id = 'shape-1';

        const shape = new MockShape(id);

        expect(shape.id).toBe('shape-1');
        expect(shape).toBeInstanceOf(Shape);
        expect(Object.keys(shape)).toEqual(['id']);
    });

});
