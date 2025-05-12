import { BaseFileReader } from './BaseFileReader';
import { Cone } from '@/entities/Cone';
import { ConeFactory } from '@/factories/ConeFactory';
import { Shape } from "@/entities/Shape.ts";

export class ConeFileReader extends BaseFileReader<Cone> {
    constructor() {
        super(new ConeFactory());
    }

    protected processLine(line: string, lineNumber: number): Shape | null {
        if (!line) return null;

        const id = `cone-${lineNumber}`;
        return this.factory.createFromString(id, line);
    }
}