import { DistanceCalculator } from "@/utils/distanceCalculator.ts";


export class Point {
    constructor(
        public readonly x: number,
        public readonly y: number,
        public readonly z: number
    ) {}

    distanceTo(other: Point): number {
        return DistanceCalculator.euclidean(this, other);
    }
}
