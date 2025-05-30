import { Point } from '../../src/entities/Point';
import { Shape } from "../../src/entities/Shape";
import { Cone } from "../../src/entities/Cone";


describe('Cone', () => {
    it('should create a Cone with the correct ID, base center, apex, and base radius', () => {
        const id = 'cone-1';
        const baseCenter = new Point(0, 0, 0);
        const apex = new Point(0, 5, 0);
        const baseRadius = 3;

        const cone = new Cone(id, baseCenter, apex, baseRadius);

        expect(cone.id).toBe('cone-1');
        expect(cone.baseCenter).toEqual(baseCenter);
        expect(cone.apex).toEqual(apex);
        expect(cone.baseRadius).toBe(3);
        expect(cone).toBeInstanceOf(Cone);
        expect(cone).toBeInstanceOf(Shape);
    });

});
