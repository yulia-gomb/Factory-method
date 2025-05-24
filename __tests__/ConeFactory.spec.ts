import { ConeFactory } from '../src/factories/ConeFactory';
import { Cone } from "../src/entities/Cone";
import { Point } from "../src/entities/Point";
import { ConeValidator } from "../src/validators/ConeValidator";
import { FileDataValidator } from "../src/validators/FileDataValidator";


jest.mock('@/validators/FileDataValidator');
jest.mock('@/validators/ConeValidator');


describe('ConeFactory', () => {
    it('should create a cone for valid data and geometry', () => {
        const id = 'cone-1';
        const data = '0 0 0 3 3 3 5';
        (FileDataValidator.isValidConeData as jest.Mock).mockReturnValue(true);
        (ConeValidator.prototype.validate as jest.Mock).mockReturnValue(true);

        const factory = new ConeFactory();
        const cone = factory.createFromString(id, data);

        expect(cone).toBeInstanceOf(Cone);
        expect(cone?.id).toBe(id);
        expect(cone?.baseCenter).toEqual(new Point(0, 0, 0));
        expect(cone?.apex).toEqual(new Point(3, 3, 3));
        expect(cone?.baseRadius).toBe(5);
    });

    it('should return null for invalid data format', () => {
        const id = 'cone-2';
        const data = 'invalid data';
        (FileDataValidator.isValidConeData as jest.Mock).mockReturnValue(false);

        const factory = new ConeFactory();
        const cone = factory.createFromString(id, data);

        expect(cone).toBeNull();
    });

    it('should return null for invalid cone geometry', () => {
        const id = 'cone-3';
        const data = '0 0 0 3 3 3 5';
        (FileDataValidator.isValidConeData as jest.Mock).mockReturnValue(true);
        (ConeValidator.prototype.validate as jest.Mock).mockReturnValue(false);

        const factory = new ConeFactory();
        const cone = factory.createFromString(id, data);

        expect(cone).toBeNull();
    });
});
