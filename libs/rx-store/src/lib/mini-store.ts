import { BehaviorSubject, Observable } from 'rxjs';

export class MiniStore<T> {
  private state: T;
  private subject$ = new BehaviorSubject(this.get());

  constructor(initialState: T) {
    this.set(initialState);
  }

  public set(newSate: T) {
    this.state = { ...newSate };
    this.subject$.next(this.get());
  }

  public select$(): Observable<T> {
    return this.subject$.asObservable();
  }

  private get(): T {
    return { ...this.state };
  }
}
