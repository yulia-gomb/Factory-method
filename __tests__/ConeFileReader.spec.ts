import { ConeFileReader } from "../src/utils/FileReader/ConeFileReader";


describe('ConeFileReader', () => {

    it('should return an empty array for an empty file', async () => {
        const fileReader = new ConeFileReader();
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                text: () => Promise.resolve(''),
            })
        ) as jest.Mock;

        const cones = await fileReader.read('cones.txt');

        expect(cones).toEqual([]);
    });

    it('should return an empty array if the file cannot be fetched', async () => {
        const fileReader = new ConeFileReader();
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: false,
            })
        ) as jest.Mock;

        const cones = await fileReader.read('cones.txt');

        expect(cones).toEqual([]);
    });

    it('should return an empty array if an exception occurs during fetch', async () => {
        const fileReader = new ConeFileReader();
        global.fetch = jest.fn(() => Promise.reject(new Error('Failed to fetch'))) as jest.Mock;

        const cones = await fileReader.read('cones.txt');

        expect(cones).toEqual([]);
    });
});
