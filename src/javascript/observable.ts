type ProjectionFn<T> = (val: T) => T;

interface IObserver<T> {
	next(value: T): void;
	complete(): void;

	error(err: Error): void;
}

type ObserverCallback<T> = (observer: IObserver<T>) => T;

export class Observable<T> {
	private _fn: ObserverCallback<T>;
	constructor(fn: ObserverCallback<T>) {
		this._fn = fn;
	}

	public subscribe(observer: IObserver<T>) {
		return this._fn(observer);
	}

	public map(projectionFn: ProjectionFn<T>) {
		return new Observable((observer) => {
			return this.subscribe({
				next(val: T) {
					observer.next(projectionFn(val));
				},
				complete() {
					observer.complete();
				},
				error(e) {
					observer.error(e);
				},
			});
		});
	}
}
