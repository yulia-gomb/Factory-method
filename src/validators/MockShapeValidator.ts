import { Shape } from "@/entities/Shape.ts";
import { ShapeValidator } from "@/validators/ShapeValidator.ts";


class MockShape extends Shape {}

class MockShapeValidator extends ShapeValidator<MockShape> {
    validate(shape: MockShape): boolean {
        return shape.id === 'valid-shape';
    }
}

export { MockShape, MockShapeValidator };
