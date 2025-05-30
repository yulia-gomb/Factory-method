import { Comparator } from '@/comparators/Comparator';
import { Shape } from '@/entities/Shape';

export class SortByIdComparator<T extends Shape> implements Comparator<T> {
    compare(a: T, b: T): number {
        return a.id.localeCompare(b.id);
    }
}
