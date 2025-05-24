import { Shape } from "../../entities/Shape.ts";
import { ShapeFactory } from "../../factories/ShapeFactory.ts";
import { BaseFileReader } from "./BaseFileReader.ts";


class MockShape extends Shape {
    constructor(id: string) {
        super(id);
    }
}

export class MockShapeFactory extends ShapeFactory {
    createFromString(id: string, _data: string): Shape | null {
        return new MockShape(id);
    }
}

export class MockFileReader extends BaseFileReader<MockShape> {
    protected processLine(line: string, lineNumber: number): MockShape | null {
        if (line === 'invalid') return null;
        return this.factory.createFromString(`shape-${lineNumber}`, line) as MockShape;
    }

    static create(factory: ShapeFactory): MockFileReader {
        return new MockFileReader(factory);
    }
}
