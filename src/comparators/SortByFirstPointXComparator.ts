import { Comparator } from '@/comparators/Comparator';
import { Triangle } from '@/entities/Triangle';

export class SortByFirstPointXComparator implements Comparator<Triangle> {
    compare(a: Triangle, b: Triangle): number {
        return a.pointA.x - b.pointA.x;
    }
}
