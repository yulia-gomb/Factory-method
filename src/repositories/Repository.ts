import { Shape } from '@/entities/Shape';

export interface Repository<T extends Shape> {
    add(shape: T): void;
    remove(id: string): void;
    findById(id: string): T | null;
    findAll(): T[];
}
