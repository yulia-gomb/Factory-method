import { BaseFileReader } from './BaseFileReader';
import { Triangle } from '@/entities/Triangle';
import { TriangleFactory } from '@/factories/TriangleFactory';
import { Shape } from "@/entities/Shape.ts";

export class TriangleFileReader extends BaseFileReader<Triangle> {
    constructor() {
        super(new TriangleFactory());
    }

    protected processLine(line: string, lineNumber: number): Shape | null {
        if (!line) return null;

        const id = `triangle-${lineNumber}`;
        return this.factory.createFromString(id, line);
    }
}
