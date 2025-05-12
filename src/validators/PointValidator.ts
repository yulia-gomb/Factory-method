import { Point } from '@/entities/Point';

export class PointValidator {
    //Проверяет, что координаты - конечные числа
    static isValid(point: Point): boolean {
        return [point.x, point.y, point.z].every(coord =>
            Number.isFinite(coord)
        );
    }

    //Проверяет, что точка не совпадает с другой
    static isDifferent(a: Point, b: Point): boolean {
        return a.x !== b.x || a.y !== b.y || a.z !== b.z;
    }
}
