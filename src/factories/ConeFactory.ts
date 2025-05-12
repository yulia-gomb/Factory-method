import { ShapeFactory } from './ShapeFactory';
import { Cone } from '@/entities/Cone';
import { Point } from '@/entities/Point';
import { ConeValidator } from '@/validators/ConeValidator';
import { FileDataValidator } from "@/validators/FileDataValidator.ts";
import logger from '@/logger';


export class ConeFactory extends ShapeFactory {
    createFromString(id: string, data: string): Cone | null {

        if (!FileDataValidator.isValidConeData(data)) {
            logger.warn(`Invalid cone data format: ${data}`);
            return null;
        }

        const parts = data.trim().split(/\s+/);
        const coords = parts.map(parseFloat);

        // Creating points
        const baseCenter = new Point(coords[0], coords[1], coords[2]);
        const apex = new Point(coords[3], coords[4], coords[5]);
        const radius = coords[6];

        // Full validation
        const cone = new Cone(id, baseCenter, apex, radius);
        const validator = new ConeValidator();

        if (!validator.validate(cone)) {
            logger.warn(`Invalid cone geometry: ${data}`);
            return null;
        }

        logger.info(`Successfully created cone: ${id}`);
        return cone;
    }
}
