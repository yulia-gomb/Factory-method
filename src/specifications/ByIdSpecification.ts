import { Specification } from "@/specifications/Specification";
import { Shape } from "@/entities/Shape";

export class ByIdSpecification<T extends Shape> implements Specification<T> {
    constructor(private readonly id: string) {}

    isSatisfiedBy(item: T): boolean {
        return item.id === this.id;
    }
}
