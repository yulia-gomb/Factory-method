import { MockFileReader, MockShapeFactory } from "../src/utils/FileReader/MockFileReader";


describe('BaseFileReader', () => {
    it('should return shapes parsed from the file', async () => {
        const factory = new MockShapeFactory();
        const reader = MockFileReader.create(factory);
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                text: () => Promise.resolve('line1\nline2\nline3'),
            })
        ) as jest.Mock;

        const shapes = await reader.read('test-file.txt');

        expect(shapes).toHaveLength(3);
        expect(shapes[0]?.id).toBe('shape-1');
        expect(shapes[1]?.id).toBe('shape-2');
        expect(shapes[2]?.id).toBe('shape-3');
    });

    it('should skip invalid lines in the file', async () => {
        const factory = new MockShapeFactory();
        const reader = MockFileReader.create(factory);
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                text: () => Promise.resolve('valid\ninvalid\nvalid'),
            })
        ) as jest.Mock;

        const shapes = await reader.read('test-file.txt');

        expect(shapes).toHaveLength(2);
        expect(shapes[0]?.id).toBe('shape-1');
        expect(shapes[1]?.id).toBe('shape-3');
    });

    it('should return an empty array if the file cannot be fetched', async () => {
        const factory = new MockShapeFactory();
        const reader = MockFileReader.create(factory);
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: false,
            })
        ) as jest.Mock;

        const shapes = await reader.read('test-file.txt');

        expect(shapes).toEqual([]);
    });

    it('should return an empty array if an exception occurs', async () => {
        const factory = new MockShapeFactory();
        const reader = MockFileReader.create(factory);
        global.fetch = jest.fn(() => Promise.reject(new Error('Failed to fetch'))) as jest.Mock;

        const shapes = await reader.read('test-file.txt');

        expect(shapes).toEqual([]);
    });
});