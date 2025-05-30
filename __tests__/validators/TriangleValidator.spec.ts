import { Point } from "../../src/entities/Point";
import { Triangle } from "../../src/entities/Triangle";
import { PointValidator } from "../../src/validators/PointValidator";
import { GeometryCalculator } from "../../src/utils/Calculator/GeometryCalculator";
import { TriangleValidator } from "../../src/validators/TriangleValidator";


jest.mock('../../src/validators/PointValidator');
jest.mock('../../src/utils/Calculator/GeometryCalculator');

describe('TriangleValidator', () => {
    it('should return true for valid triangle', () => {
        const pointA = new Point(0, 0, 0);
        const pointB = new Point(3, 0, 0);
        const pointC = new Point(0, 4, 0);
        const triangle = new Triangle('triangle-1', pointA, pointB, pointC);

        (PointValidator.isValid as jest.Mock).mockReturnValue(true);
        (PointValidator.isDifferent as jest.Mock).mockReturnValue(true);
        (GeometryCalculator.areCollinear as jest.Mock).mockReturnValue(false);

        const validator = new TriangleValidator();

        const result = validator.validate(triangle);

        expect(result).toBe(true);
    });

    it('should return false if any point is invalid', () => {
        const pointA = new Point(0, 0, 0);
        const pointB = new Point(3, 0, 0);
        const pointC = new Point(Infinity, 0, 0);
        const triangle = new Triangle('triangle-2', pointA, pointB, pointC);

        (PointValidator.isValid as jest.Mock).mockImplementation(point => point !== pointC);
        (PointValidator.isDifferent as jest.Mock).mockReturnValue(true);
        (GeometryCalculator.areCollinear as jest.Mock).mockReturnValue(false);

        const validator = new TriangleValidator();

        const result = validator.validate(triangle);

        expect(result).toBe(false);
    });

    it('should return false if any two points are identical', () => {
        const pointA = new Point(0, 0, 0);
        const pointB = new Point(0, 0, 0);
        const pointC = new Point(0, 4, 0);
        const triangle = new Triangle('triangle-3', pointA, pointB, pointC);

        (PointValidator.isValid as jest.Mock).mockReturnValue(true);
        (PointValidator.isDifferent as jest.Mock).mockImplementation((a, b) => a !== pointA || b !== pointB);
        (GeometryCalculator.areCollinear as jest.Mock).mockReturnValue(false);

        const validator = new TriangleValidator();

        const result = validator.validate(triangle);

        expect(result).toBe(false);
    });

    it('should return false if points are collinear', () => {
        const pointA = new Point(0, 0, 0);
        const pointB = new Point(1, 1, 0);
        const pointC = new Point(2, 2, 0);
        const triangle = new Triangle('triangle-4', pointA, pointB, pointC);

        (PointValidator.isValid as jest.Mock).mockReturnValue(true);
        (PointValidator.isDifferent as jest.Mock).mockReturnValue(true);
        (GeometryCalculator.areCollinear as jest.Mock).mockReturnValue(true);

        const validator = new TriangleValidator();

        const result = validator.validate(triangle);

        expect(result).toBe(false);
    });
});
