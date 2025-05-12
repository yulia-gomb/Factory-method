import type { Shape } from "@/entities/Shape.ts";
import type { ShapeFactory } from "@/factories/ShapeFactory.ts";


export abstract class BaseFileReader<T extends Shape> {
    protected constructor(
        protected readonly factory: ShapeFactory,
    ) {}

    async read(filePath: string): Promise<T[]> {
        try {
            const response = await fetch(filePath);
            if (!response.ok) throw new Error(`Failed to load file: ${filePath}`);

            const text = await response.text();
            return this.processLines(text);
        } catch (error) {
            console.error(`Error reading file ${filePath}:`, error);
            return [];
        }
    }

    private processLines(fileContent: string): T[] {
        return fileContent
            .split('\n')
            .map((line, index) => this.processLine(line.trim(), index + 1))
            .filter((shape): shape is T => shape !== null);
    }

    protected abstract processLine(line: string, lineNumber: number): Shape | null;
}
