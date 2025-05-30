import { Comparator } from '@/comparators/Comparator';
import { Triangle } from '@/entities/Triangle';

export class SortByFirstPointYComparator implements Comparator<Triangle> {
    compare(a: Triangle, b: Triangle): number {
        return a.pointA.y - b.pointA.y;
    }
}
