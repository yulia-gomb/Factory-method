import { Observer } from './Observer';
import { Shape } from '@/entities/Shape';


export abstract class ObservableShape extends Shape {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(): void {
        this.observers.forEach(observer => observer.update(this));
    }
}
