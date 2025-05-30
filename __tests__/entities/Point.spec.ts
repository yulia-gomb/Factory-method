import { Point } from '../../src/entities/Point';

describe('Point', () => {
    it('should create a point with correct coordinates', () => {
        const x = 1;
        const y = 2;
        const z = 3;

        const point = new Point(x, y, z);

        expect(point.x).toBe(1);
        expect(point.y).toBe(2);
        expect(point.z).toBe(3);
        expect(point).toBeInstanceOf(Point);
        expect(Object.keys(point)).toEqual(['x', 'y', 'z']);
    });

});
