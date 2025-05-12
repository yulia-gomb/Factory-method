export class FileDataValidator {
    private static readonly CONE_DATA_REGEX = /^[\d\s.-]+$/;
    private static readonly TRIANGLE_DATA_REGEX = /^[\d\s.-]+$/;

    //Проверка строки для конуса
    static isValidConeData(line: string): boolean {
        const parts = line.trim().split(/\s+/);
        return (
            parts.length === 7 &&
            this.CONE_DATA_REGEX.test(line) &&
            !parts.some(part => isNaN(parseFloat(part)))
        );
    }

    //Проверка строки для треугольника
    static isValidTriangleData(line: string): boolean {
        const parts = line.trim().split(/\s+/);
        return (
            parts.length === 9 &&
            this.TRIANGLE_DATA_REGEX.test(line) &&
            !parts.some(part => isNaN(parseFloat(part)))
        );
    }
}
