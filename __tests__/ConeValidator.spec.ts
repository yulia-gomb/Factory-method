import {Point} from "../src/entities/Point";
import {Cone} from "../src/entities/Cone";
import {PointValidator} from "../src/validators/PointValidator";
import {GeometryCalculator} from "../src/utils/Calculator/GeometryCalculator";
import {ConeValidator} from "../src/validators/ConeValidator";


jest.mock('@/validators/PointValidator');
jest.mock('@/utils/Calculator/GeometryCalculator');

describe('ConeValidator', () => {
    it('should validate a valid cone', () => {
        const baseCenter = new Point(0, 0, 0);
        const apex = new Point(0, 0, 5);
        const cone = new Cone('cone-1', baseCenter, apex, 3);

        (PointValidator.isValid as jest.Mock).mockReturnValue(true);
        (GeometryCalculator.distance as jest.Mock).mockReturnValue(5);

        const validator = new ConeValidator();

        const result = validator.validate(cone);

        expect(result).toBe(true);
    });

    it('should return false if the base center is invalid', () => {
        const baseCenter = new Point(NaN, 0, 0);
        const apex = new Point(0, 0, 5);
        const cone = new Cone('cone-2', baseCenter, apex, 3);

        (PointValidator.isValid as jest.Mock).mockImplementation(point => point !== baseCenter);

        const validator = new ConeValidator();

        const result = validator.validate(cone);

        expect(result).toBe(false);
    });

    it('should return false if the apex is invalid', () => {
        const baseCenter = new Point(0, 0, 0);
        const apex = new Point(NaN, 5, 5);
        const cone = new Cone('cone-3', baseCenter, apex, 3);

        (PointValidator.isValid as jest.Mock).mockImplementation(point => point !== apex);

        const validator = new ConeValidator();

        const result = validator.validate(cone);

        expect(result).toBe(false);
    });

    it('should return false if the radius is invalid', () => {
        const baseCenter = new Point(0, 0, 0);
        const apex = new Point(0, 0, 5);
        const cone = new Cone('cone-4', baseCenter, apex, -3);

        const validator = new ConeValidator();

        const result = validator.validate(cone);

        expect(result).toBe(false);
    });

    it('should return false if the orientation is invalid', () => {
        const baseCenter = new Point(0, 0, 0);
        const apex = new Point(1, 1, 5);
        const cone = new Cone('cone-5', baseCenter, apex, 3);

        const validator = new ConeValidator();

        const result = validator.validate(cone);

        expect(result).toBe(false);
    });

    it('should return false if the height of the cone is zero or negative', () => {
        const baseCenter = new Point(0, 0, 0);
        const apex = new Point(0, 0, 0);
        const cone = new Cone('cone-6', baseCenter, apex, 3);

        (GeometryCalculator.distance as jest.Mock).mockReturnValue(0);

        const validator = new ConeValidator();

        const result = validator.validate(cone);

        expect(result).toBe(false);
    });
});
