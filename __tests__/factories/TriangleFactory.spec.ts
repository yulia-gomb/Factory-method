import { TriangleFactory } from '../../src/factories/TriangleFactory';
import { Point } from "../../src/entities/Point";
import { Triangle } from "../../src/entities/Triangle";
import { FileDataValidator } from "../../src/validators/FileDataValidator";
import { TriangleValidator } from "../../src/validators/TriangleValidator";


jest.mock('../../src/validators/FileDataValidator');
jest.mock('../../src/validators/TriangleValidator');

describe('TriangleFactory', () => {
    it('should create a triangle for valid data and geometry', () => {
        const id = 'triangle-1';
        const data = '0 0 0 3 0 0 0 4 0';
        (FileDataValidator.isValidTriangleData as jest.Mock).mockReturnValue(true);
        (TriangleValidator.prototype.validate as jest.Mock).mockReturnValue(true);
        const factory = new TriangleFactory();

        const triangle = factory.createFromString(id, data);

        expect(triangle).toBeInstanceOf(Triangle);
        expect(triangle?.id).toBe(id);
        expect(triangle?.pointA).toEqual(new Point(0, 0, 0));
        expect(triangle?.pointB).toEqual(new Point(3, 0, 0));
        expect(triangle?.pointC).toEqual(new Point(0, 4, 0));
    });

    it('should return null for invalid data format', () => {
        const id = 'triangle-2';
        const data = 'invalid data';
        (FileDataValidator.isValidTriangleData as jest.Mock).mockReturnValue(false);
        const factory = new TriangleFactory();

        const triangle = factory.createFromString(id, data);

        expect(triangle).toBeNull();
    });

    it('should return null for invalid triangle geometry', () => {
        const id = 'triangle-3';
        const data = '0 0 0 1 1 1 2 2 2';
        (FileDataValidator.isValidTriangleData as jest.Mock).mockReturnValue(true);
        (TriangleValidator.prototype.validate as jest.Mock).mockReturnValue(false);
        const factory = new TriangleFactory();

        const triangle = factory.createFromString(id, data);

        expect(triangle).toBeNull();
    });
});
