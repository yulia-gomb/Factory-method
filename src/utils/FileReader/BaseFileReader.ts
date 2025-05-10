export abstract class BaseFileReader<T> {
    protected abstract createShape(id: string, data: string): T | null;

    async read(filePath: string): Promise<T[]> {
        try {
            const response = await fetch(filePath);
            if (!response.ok) throw new Error(`Failed to load ${filePath}`);

            const text = await response.text();
            return text
                .split('\n')
                .map((line, index) => this.createShape(`shape-${index + 1}`, line.trim()))
                .filter((shape): shape is T => shape !== null);
        } catch (error) {
            console.error('FileReader error:', error);
            return [];
        }
    }
}