import { Warehouse } from "../../src/warehouse/Warehouse";
import { Point } from "../../src/entities/Point";
import { ObservableTriangle } from "../../src/observers/ObservableTriangle";

describe('ObservableTriangle', () => {
    let warehouse: Warehouse;

    beforeEach(() => {
        warehouse = Warehouse.getInstance();
        jest.clearAllMocks();
    });

    it('should notify Warehouse when triangle points are updated', () => {
        const triangle = new ObservableTriangle(
            'triangle-1',
            new Point(0, 0, 0),
            new Point(3, 0, 0),
            new Point(0, 4, 0)
        );

        triangle.addObserver(warehouse);
        jest.spyOn(warehouse, 'update');

        triangle.updatePoints(
            new Point(1, 1, 1),
            new Point(2, 2, 2),
            new Point(3, 3, 3)
        );

        expect(warehouse.update).toHaveBeenCalledTimes(1);
        expect(warehouse.update).toHaveBeenCalledWith(triangle);
    });

    it('should not notify Warehouse if it is removed as an observer', () => {
        const triangle = new ObservableTriangle(
            'triangle-1',
            new Point(0, 0, 0),
            new Point(3, 0, 0),
            new Point(0, 4, 0)
        );

        triangle.addObserver(warehouse);
        triangle.removeObserver(warehouse);
        jest.spyOn(warehouse, 'update');

        triangle.updatePoints(
            new Point(1, 1, 1),
            new Point(2, 2, 2),
            new Point(3, 3, 3)
        );

        expect(warehouse.update).not.toHaveBeenCalled();
    });

    it('should allow updating triangle points and maintain correct state', () => {
        const triangle = new ObservableTriangle(
            'triangle-1',
            new Point(0, 0, 0),
            new Point(3, 0, 0),
            new Point(0, 4, 0)
        );

        triangle.updatePoints(
            new Point(1, 1, 1),
            new Point(2, 2, 2),
            new Point(3, 3, 3)
        );

        expect(triangle.pointA).toEqual(new Point(1, 1, 1));
        expect(triangle.pointB).toEqual(new Point(2, 2, 2));
        expect(triangle.pointC).toEqual(new Point(3, 3, 3));
    });

    it('should notify multiple observers when points are updated', () => {
        const triangle = new ObservableTriangle(
            'triangle-1',
            new Point(0, 0, 0),
            new Point(3, 0, 0),
            new Point(0, 4, 0)
        );

        const mockObserver1 = {
            update: jest.fn(),
        };

        const mockObserver2 = {
            update: jest.fn(),
        };

        triangle.addObserver(mockObserver1);
        triangle.addObserver(mockObserver2);

        triangle.updatePoints(
            new Point(1, 1, 1),
            new Point(2, 2, 2),
            new Point(3, 3, 3)
        );

        expect(mockObserver1.update).toHaveBeenCalledTimes(1);
        expect(mockObserver1.update).toHaveBeenCalledWith(triangle);
        expect(mockObserver2.update).toHaveBeenCalledTimes(1);
        expect(mockObserver2.update).toHaveBeenCalledWith(triangle);
    });
});
