import { InMemoryRepository } from "../../src/repositories/InMemoryRepository";
import { Shape } from "../../src/entities/Shape";


class MockShape extends Shape {}

describe('InMemoryRepository - Add and Remove Methods', () => {
    let repository: InMemoryRepository<MockShape>;

    beforeEach(() => {
        repository = new InMemoryRepository<MockShape>();
    });

    describe('add', () => {
        it('should add a new shape to the repository', () => {
            const shape = new MockShape('shape-1');
            repository.add(shape);

            const result = repository.findAll();

            expect(result).toHaveLength(1);
            expect(result[0]).toBe(shape);
        });

        it('should throw an error when adding a shape with duplicate ID', () => {
            const shape1 = new MockShape('shape-1');
            const shape2 = new MockShape('shape-1');

            repository.add(shape1);

            expect(() => repository.add(shape2)).toThrowError(
                `Shape with ID 'shape-1' already exists.`
            );
        });
    });

    describe('remove', () => {
        it('should remove a shape from the repository by ID', () => {
            const shape1 = new MockShape('shape-1');
            const shape2 = new MockShape('shape-2');

            repository.add(shape1);
            repository.add(shape2);

            repository.remove('shape-1');

            const result = repository.findAll();

            expect(result).toHaveLength(1);
            expect(result[0]).toBe(shape2);
        });

        it('should throw an error when removing a shape that does not exist', () => {
            const shape = new MockShape('shape-1');
            repository.add(shape);

            expect(() => repository.remove('non-existent-id')).toThrowError(
                `Shape with ID 'non-existent-id' not found.`
            );
        });
    });
});
