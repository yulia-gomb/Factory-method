import { FileDataValidator } from "../src/validators/FileDataValidator";


describe('FileDataValidator', () => {
    describe('isValidConeData', () => {
        it('should return true for valid cone data', () => {
            const validData = '0 0 0 3 3 3 5';
            const result = FileDataValidator.isValidConeData(validData);
            expect(result).toBe(true);
        });

        it('should return false for cone data with fewer than 7 parts', () => {
            const invalidData = '0 0 0 3 3 3';
            const result = FileDataValidator.isValidConeData(invalidData);
            expect(result).toBe(false);
        });

        it('should return false for cone data with non-numeric parts', () => {
            const invalidData = '0 0 0 3 3 X 5';
            const result = FileDataValidator.isValidConeData(invalidData);
            expect(result).toBe(false);
        });

        it('should return false for cone data that does not match the regex', () => {
            const invalidData = 'abc def ghi jkl mno pqr stu';
            const result = FileDataValidator.isValidConeData(invalidData);
            expect(result).toBe(false);
        });
    });

    describe('isValidTriangleData', () => {
        it('should return true for valid triangle data', () => {
            const validData = '0 0 0 3 0 0 0 4 0';
            const result = FileDataValidator.isValidTriangleData(validData);
            expect(result).toBe(true);
        });

        it('should return false for triangle data with fewer than 9 parts', () => {
            const invalidData = '0 0 0 3 0 0 0 4';
            const result = FileDataValidator.isValidTriangleData(invalidData);
            expect(result).toBe(false);
        });

        it('should return false for triangle data with non-numeric parts', () => {
            const invalidData = '0 0 0 3 0 0 0 4 X';
            const result = FileDataValidator.isValidTriangleData(invalidData);
            expect(result).toBe(false);
        });

        it('should return false for triangle data that does not match the regex', () => {
            const invalidData = 'hello world test data invalid format here';
            const result = FileDataValidator.isValidTriangleData(invalidData);
            expect(result).toBe(false);
        });
    });
});
