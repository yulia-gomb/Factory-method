import { Specification } from "@/specifications/Specification";
import { HasPoints } from "@/specifications/HasPoints.ts";

export class PointsInFirstQuadrantSpecification<T extends HasPoints> implements Specification<T> {
    isSatisfiedBy(item: T): boolean {
        const points = [item.pointA, item.pointB, item.pointC];
        return points.every(
            point => point.x > 0 && point.y > 0 && point.z >= 0
        );
    }
}
