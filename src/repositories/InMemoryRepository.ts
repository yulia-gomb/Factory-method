import { Repository } from '@/repositories/Repository';
import { Shape } from '@/entities/Shape';
import { Specification } from "@/specifications/Specification.ts";
import { Comparator } from "@/comparators/Comparator.ts";

export class InMemoryRepository<T extends Shape> implements Repository<T> {
    private shapes: T[] = [];

    add(shape: T): void {
        const existingShape = this.shapes.find(s => s.id === shape.id);

        if (existingShape) {
            throw new Error(`Shape with ID '${shape.id}' already exists.`);
        }

        this.shapes.push(shape);
    }

    remove(id: string): void {
        const index = this.shapes.findIndex(shape => shape.id === id);

        if (index === -1) {
            throw new Error(`Shape with ID '${id}' not found.`);
        }

        this.shapes.splice(index, 1);
    }

    findById(id: string): T | null {
        return this.shapes.find(shape => shape.id === id) || null;
    }

    findAll(): T[] {
        return [...this.shapes];
    }

    findBySpecification(specification: Specification<T>): T[] {
        return this.shapes.filter(shape => specification.isSatisfiedBy(shape));
    }

    sort(comparator: Comparator<T>): void {
        this.shapes.sort((a, b) => comparator.compare(a, b));
    }
}
