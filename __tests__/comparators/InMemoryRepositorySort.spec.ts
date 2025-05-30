import { Point } from "../../src/entities/Point";
import { Triangle } from "../../src/entities/Triangle";
import { InMemoryRepository } from "../../src/repositories/InMemoryRepository";
import { SortByIdComparator } from "../../src/comparators/SortByIdComparator";
import { SortByFirstPointXComparator } from "../../src/comparators/SortByFirstPointXComparator";
import { SortByFirstPointYComparator } from "../../src/comparators/SortByFirstPointYComparator";


describe('InMemoryRepository - Sort Methods', () => {
    let repository: InMemoryRepository<Triangle>;

    beforeEach(() => {
        repository = new InMemoryRepository<Triangle>();
    });

    it('should sort triangles by ID', () => {
        const triangle1 = new Triangle('triangle-2', new Point(0, 0, 0), new Point(1, 1, 1), new Point(2, 2, 2));
        const triangle2 = new Triangle('triangle-1', new Point(0, 0, 0), new Point(1, 1, 1), new Point(2, 2, 2));
        repository.add(triangle1);
        repository.add(triangle2);

        repository.sort(new SortByIdComparator<Triangle>());

        const sortedShapes = repository.findAll();

        expect(sortedShapes[0].id).toBe('triangle-1');
        expect(sortedShapes[1].id).toBe('triangle-2');
    });

    it('should sort triangles by X coordinate of the first point', () => {
        const triangle1 = new Triangle('triangle-1', new Point(5, 0, 0), new Point(1, 1, 1), new Point(2, 2, 2));
        const triangle2 = new Triangle('triangle-2', new Point(3, 0, 0), new Point(1, 1, 1), new Point(2, 2, 2));
        repository.add(triangle1);
        repository.add(triangle2);

        repository.sort(new SortByFirstPointXComparator());

        const sortedShapes = repository.findAll();

        expect(sortedShapes[0].pointA.x).toBe(3);
        expect(sortedShapes[1].pointA.x).toBe(5);
    });

    it('should sort triangles by Y coordinate of the first point', () => {
        const triangle1 = new Triangle('triangle-1', new Point(0, 5, 0), new Point(1, 1, 1), new Point(2, 2, 2));
        const triangle2 = new Triangle('triangle-2', new Point(0, 3, 0), new Point(1, 1, 1), new Point(2, 2, 2));
        repository.add(triangle1);
        repository.add(triangle2);

        repository.sort(new SortByFirstPointYComparator());

        const sortedShapes = repository.findAll();

        expect(sortedShapes[0].pointA.y).toBe(3);
        expect(sortedShapes[1].pointA.y).toBe(5);
    });
});
