import { Point } from "../../src/entities/Point";
import { Triangle } from "../../src/entities/Triangle";
import { Warehouse } from "../../src/warehouse/Warehouse";
import { TriangleCalculator } from "../../src/utils/Calculator/TriangleCalculator";
import { Cone } from "../../src/entities/Cone";
import { ConeCalculator } from "../../src/utils/Calculator/ConeCalculator";

jest.mock('@/utils/Calculator/TriangleCalculator');
jest.mock('@/utils/Calculator/ConeCalculator');

describe('Warehouse', () => {
    let warehouse: Warehouse;

    beforeEach(() => {
        warehouse = Warehouse.getInstance();
        jest.clearAllMocks();
    });

    it('should calculate and store area and perimeter for a Triangle', () => {
        const triangle = new Triangle(
            'triangle-1',
            new Point(0, 0, 0),
            new Point(3, 0, 0),
            new Point(0, 4, 0)
        );

        (TriangleCalculator.prototype.calculateArea as jest.Mock).mockReturnValue(6);
        (TriangleCalculator.prototype.calculatePerimeter as jest.Mock).mockReturnValue(12);

        warehouse.update(triangle);

        const result = warehouse.get('triangle-1');

        expect(result).not.toBeNull();
        expect(result?.area).toBe(6);
        expect(result?.perimeter).toBe(12);
        expect(TriangleCalculator.prototype.calculateArea).toHaveBeenCalledWith(triangle);
        expect(TriangleCalculator.prototype.calculatePerimeter).toHaveBeenCalledWith(triangle);
    });

    it('should calculate and store area and volume for a Cone', () => {
        const cone = new Cone(
            'cone-1',
            new Point(0, 0, 0),
            new Point(0, 0, 5),
            3
        );

        (ConeCalculator.prototype.calculateArea as jest.Mock).mockReturnValue(75.4);
        (ConeCalculator.prototype.calculateVolume as jest.Mock).mockReturnValue(47.1);

        warehouse.update(cone);

        const result = warehouse.get('cone-1');

        expect(result).not.toBeNull();
        expect(result?.area).toBeCloseTo(75.4, 2);
        expect(result?.volume).toBeCloseTo(47.1, 2);
        expect(ConeCalculator.prototype.calculateArea).toHaveBeenCalledWith(cone);
        expect(ConeCalculator.prototype.calculateVolume).toHaveBeenCalledWith(cone);
    });

    it('should remove shape data when calling remove', () => {
        const triangle = new Triangle(
            'triangle-1',
            new Point(0, 0, 0),
            new Point(3, 0, 0),
            new Point(0, 4, 0)
        );

        warehouse.update(triangle);
        warehouse.remove('triangle-1');

        const result = warehouse.get('triangle-1');

        expect(result).toBeNull();
    });

    it('should return null when getting data for a non-existent shape ID', () => {
        const result = warehouse.get('non-existent-id');

        expect(result).toBeNull();
    });

    it('should return the same instance every time when using getInstance', () => {
        const warehouse1 = Warehouse.getInstance();
        const warehouse2 = Warehouse.getInstance();

        expect(warehouse1).toBe(warehouse2);
    });
});
