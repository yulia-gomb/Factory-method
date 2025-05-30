import { Shape } from "../../src/entities/Shape";
import { ByIdSpecification } from "../../src/specifications/ByIdSpecification";


class MockShape extends Shape {}

describe('ByIdSpecification', () => {
    it('should return true for a shape with the specified ID', () => {
        const shape = new MockShape('shape-1');
        const spec = new ByIdSpecification<MockShape>('shape-1');

        const result = spec.isSatisfiedBy(shape);

        expect(result).toBe(true);
    });

    it('should return false for a shape with a different ID', () => {
        const shape = new MockShape('shape-2');
        const spec = new ByIdSpecification<MockShape>('shape-1');

        const result = spec.isSatisfiedBy(shape);

        expect(result).toBe(false);
    });

    it('should return false for an empty ID in the shape', () => {
        const shape = new MockShape('');
        const spec = new ByIdSpecification<MockShape>('shape-1');

        const result = spec.isSatisfiedBy(shape);

        expect(result).toBe(false);
    });

    it('should return true if both the ID in the shape and the specification are empty', () => {
        const shape = new MockShape('');
        const spec = new ByIdSpecification<MockShape>('');

        const result = spec.isSatisfiedBy(shape);

        expect(result).toBe(true);
    });
});
