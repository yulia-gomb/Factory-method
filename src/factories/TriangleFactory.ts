import { ShapeFactory } from './ShapeFactory';
import { Triangle } from '@/entities/Triangle';
import { Point } from '@/entities/Point';
import { FileDataValidator } from '@/validators/FileDataValidator';
import { TriangleValidator } from '@/validators/TriangleValidator';
import logger from '@/logger';

export class TriangleFactory extends ShapeFactory {
    createFromString(id: string, data: string): Triangle | null {

        if (!FileDataValidator.isValidTriangleData(data)) {
            logger.warn(`Invalid triangle data format: ${data}`);
            return null;
        }

        const parts = data.trim().split(/\s+/);
        const coords = parts.map(parseFloat);

        // Creating points
        const pointA = new Point(coords[0], coords[1], coords[2]);
        const pointB = new Point(coords[3], coords[4], coords[5]);
        const pointC = new Point(coords[6], coords[7], coords[8]);

        // Full validation
        const triangle = new Triangle(id, pointA, pointB, pointC);
        const validator = new TriangleValidator();

        if (!validator.validate(triangle)) {
            logger.warn(`Invalid triangle geometry for ID: ${id}`);
            return null;
        }

        logger.info(`Successfully created triangle: ${id}`);
        return triangle;
    }
}
