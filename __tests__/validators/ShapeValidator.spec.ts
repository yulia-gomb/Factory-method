import { MockShape, MockShapeValidator } from "../../src/validators/MockShapeValidator";


describe('ShapeValidator', () => {
    it('should return true for valid shapes', () => {
        const validator = new MockShapeValidator();
        // @ts-ignore
        const validShape = new MockShape('valid-shape');

        const isValid = validator.validate(validShape);

        expect(isValid).toBe(true);
    });

    it('should return false for invalid shapes', () => {
        const validator = new MockShapeValidator();
        // @ts-ignore
        const invalidShape = new MockShape('invalid-shape');

        const isValid = validator.validate(invalidShape);

        expect(isValid).toBe(false);
    });
});
