import { Triangle } from '../../src/entities/Triangle';
import { Point } from '../../src/entities/Point';
import { Shape } from "../../src/entities/Shape";

describe('Triangle', () => {
    it('should create a Triangle with the correct ID and points', () => {
        const id = 'triangle-1';
        const pointA = new Point(0, 0, 0);
        const pointB = new Point(3, 0, 0);
        const pointC = new Point(0, 4, 0);

        const triangle = new Triangle(id, pointA, pointB, pointC);

        expect(triangle.id).toBe('triangle-1');
        expect(triangle.pointA).toEqual(pointA);
        expect(triangle.pointB).toEqual(pointB);
        expect(triangle.pointC).toEqual(pointC);
        expect(triangle).toBeInstanceOf(Triangle);
        expect(triangle).toBeInstanceOf(Shape);
    });

});
