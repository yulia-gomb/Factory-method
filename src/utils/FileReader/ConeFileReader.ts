import { BaseFileReader } from './BaseFileReader';
import { Cone } from '@/entities/Cone';
import { ConeFactory } from '@/factories/ConeFactory';
import { FileDataValidator } from '@/validators/FileDataValidator';
import {Shape} from "@/entities/Shape.ts";

export class ConeFileReader extends BaseFileReader<Cone> {
    constructor() {
        super(new ConeFactory(), new FileDataValidator());
    }

    protected processLine(line: string, lineNumber: number): Shape | null {
        if (!line) return null;

        const id = `cone-${lineNumber}`;
        return this.factory.createFromString(id, line);
    }
}