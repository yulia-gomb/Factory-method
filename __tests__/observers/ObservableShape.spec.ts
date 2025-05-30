import { Observer } from "../../src/observers/Observer";
import { ObservableShape } from "../../src/observers/ObservableShape";

class MockShape extends ObservableShape {
    constructor(id: string) {
        // @ts-ignore
        super(id);
    }

    updateState(): void {
        this.notifyObservers();
    }
}

class MockObserver implements Observer {
    public isNotified = false;

    update(): void {
        this.isNotified = true;
    }
}

describe('ObservableShape', () => {
    it('should notify all observers when notifyObservers is called', () => {
        const observable = new MockShape('shape-1');
        const observer1 = new MockObserver();
        const observer2 = new MockObserver();

        observable.addObserver(observer1);
        observable.addObserver(observer2);

        observable.updateState();

        expect(observer1.isNotified).toBe(true);
        expect(observer2.isNotified).toBe(true);
    });

    it('should not notify removed observers', () => {
        const observable = new MockShape('shape-1');
        const observer = new MockObserver();

        observable.addObserver(observer);
        observable.removeObserver(observer);

        observable.updateState();

        expect(observer.isNotified).toBe(false);
    });

    it('should notify observers multiple times', () => {
        const observable = new MockShape('shape-1');
        const observer = new MockObserver();

        observable.addObserver(observer);

        observable.updateState();
        observable.updateState();

        expect(observer.isNotified).toBe(true);
    });

    it('should do nothing when removing a non-existent observer', () => {
        const observable = new MockShape('shape-1');
        const observer = new MockObserver();

        observable.removeObserver(observer);

        observable.updateState();

        expect(observer.isNotified).toBe(false);
    });

    it('should handle no observers gracefully', () => {
        const observable = new MockShape('shape-1');

        expect(() => observable.updateState()).not.toThrow();
    });
});
