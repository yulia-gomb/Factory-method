import { ConeCalculator } from "../../../src/utils/Calculator/ConeCalculator";
import { Cone } from "../../../src/entities/Cone";
import { Point } from "../../../src/entities/Point";


describe('ConeCalculator', () => {

    it('should calculate the correct perimeter of the base of a cone', () => {
        const calculator = new ConeCalculator();
        const cone = new Cone(
            'cone-2',
            new Point(0, 0, 0),
            new Point(0, 0, 5),
            3
        );

        const perimeter = calculator.calculatePerimeter(cone);

        expect(perimeter).toBeCloseTo(18.849, 2);
        expect(perimeter).toBeGreaterThan(0);
    });

    it('should calculate the correct volume of a cone', () => {
        const calculator = new ConeCalculator();
        const cone = new Cone(
            'cone-3',
            new Point(0, 0, 0),
            new Point(0, 0, 5),
            3
        );

        const volume = calculator.calculateVolume(cone);

        expect(volume).toBeCloseTo(47.123, 2);
        expect(volume).toBeGreaterThan(0);
    });

    it('should calculate the correct height of a cone', () => {
        const calculator = new ConeCalculator();
        const cone = new Cone(
            'cone-4',
            new Point(0, 0, 0),
            new Point(0, 0, 5),
            3
        );

        const height = (calculator as any).getHeight(cone);

        expect(height).toBe(5);
        expect(height).toBeGreaterThan(0);
    });
});
