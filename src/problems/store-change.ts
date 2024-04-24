/**
 * Problem: Implement a StoreData class that add key/value pairs
 * and listen to value changes for keys
 */
export class StoreData<T> {
	private data: Map<string, T> = new Map();
	private changeEvents: Map<string, StoreCallback<T>> = new Map();
	add(key: string, value: T) {
		const prev = this.data.get(key);
		const cb = this.changeEvents.get(key);

		cb?.(prev, value, key);

		this.data.set(key, value);
	}

	has(key: string) {
		return this.data.has(key);
	}

	on(eventName: string, cb: StoreCallback<T>) {
		const [event, key] = eventName.split(":");
		if (event === "change") {
			this.changeEvents.set(key, cb);
		}
	}
}

type StoreCallback<T> = (prev: T, next: T, key: string) => void;
