import { Point } from "../../src/entities/Point";
import { ObservableCone } from "../../src/observers/ObservableCone";
import { Warehouse } from "../../src/warehouse/Warehouse";

describe('ObservableCone', () => {
    let warehouse: Warehouse;

    beforeEach(() => {
        warehouse = Warehouse.getInstance();
        jest.clearAllMocks();
    });

    it('should notify Warehouse when cone properties are updated', () => {
        const cone = new ObservableCone(
            'cone-1',
            new Point(0, 0, 0),
            new Point(0, 0, 5),
            3
        );

        cone.addObserver(warehouse);
        jest.spyOn(warehouse, 'update');

        cone.updateBaseCenter(new Point(1, 1, 1));
        cone.updateApex(new Point(2, 2, 2));
        cone.updateRadius(5);

        expect(warehouse.update).toHaveBeenCalledTimes(3);
        expect(warehouse.update).toHaveBeenCalledWith(cone);
    });

    it('should not notify Warehouse if it is removed as an observer', () => {
        const cone = new ObservableCone(
            'cone-1',
            new Point(0, 0, 0),
            new Point(0, 0, 5),
            3
        );

        cone.addObserver(warehouse);
        cone.removeObserver(warehouse);
        jest.spyOn(warehouse, 'update');

        cone.updateBaseCenter(new Point(1, 1, 1));
        cone.updateApex(new Point(2, 2, 2));
        cone.updateRadius(5);

        expect(warehouse.update).not.toHaveBeenCalled();
    });

    it('should allow updating cone properties and maintain correct state', () => {
        const cone = new ObservableCone(
            'cone-1',
            new Point(0, 0, 0),
            new Point(0, 0, 5),
            3
        );

        cone.updateBaseCenter(new Point(1, 1, 1));
        cone.updateApex(new Point(2, 2, 2));
        cone.updateRadius(5);

        expect(cone.baseCenter).toEqual(new Point(1, 1, 1));
        expect(cone.apex).toEqual(new Point(2, 2, 2));
        expect(cone.baseRadius).toBe(5);
    });

    it('should notify multiple observers when cone properties are updated', () => {
        const cone = new ObservableCone(
            'cone-1',
            new Point(0, 0, 0),
            new Point(0, 0, 5),
            3
        );

        const mockObserver1 = {
            update: jest.fn(),
        };

        const mockObserver2 = {
            update: jest.fn(),
        };

        cone.addObserver(mockObserver1);
        cone.addObserver(mockObserver2);

        cone.updateBaseCenter(new Point(1, 1, 1));
        cone.updateApex(new Point(2, 2, 2));
        cone.updateRadius(5);

        expect(mockObserver1.update).toHaveBeenCalledTimes(3);
        expect(mockObserver1.update).toHaveBeenCalledWith(cone);
        expect(mockObserver2.update).toHaveBeenCalledTimes(3);
        expect(mockObserver2.update).toHaveBeenCalledWith(cone);
    });
});
