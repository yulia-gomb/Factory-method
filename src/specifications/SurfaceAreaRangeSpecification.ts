import { Specification } from "@/specifications/Specification";
import { Triangle } from "@/entities/Triangle";
import { Cone } from "@/entities/Cone";
import { TriangleCalculator } from "@/utils/Calculator/TriangleCalculator";
import { ConeCalculator } from "@/utils/Calculator/ConeCalculator";

export class SurfaceAreaRangeSpecification<T extends Triangle | Cone> implements Specification<T> {
    constructor(private readonly min: number, private readonly max: number) {}

    isSatisfiedBy(item: T): boolean {
        if (item instanceof Triangle) {
            const calculator = new TriangleCalculator();
            const area = calculator.calculateArea(item);
            return area >= this.min && area <= this.max;
        }

        if (item instanceof Cone) {
            const calculator = new ConeCalculator();
            const area = calculator.calculateArea(item);
            return area >= this.min && area <= this.max;
        }

        return false;
    }
}