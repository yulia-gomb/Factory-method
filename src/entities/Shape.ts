export abstract class Shape {

    protected constructor(
        public readonly id: string
    ) {}

    abstract calculateArea(): number;
    abstract calculatePerimeter(): number;
    abstract validate(): boolean;
}
