/**
 * Simple key/value store with a change notification per key.
 */
export class StoreData<T> {
	private data: Map<string, T> = new Map();
	private changeEvents: Map<string, StoreCallback<T>> = new Map();
	/**
	 * Adds or replaces a value and triggers any change listener for the key.
	 */
	add(key: string, value: T) {
		const prev = this.data.get(key);
		const cb = this.changeEvents.get(key);

		cb?.(prev, value, key);

		this.data.set(key, value);
	}

	/**
	 * Returns true if the key exists in the store.
	 */
	has(key: string) {
		return this.data.has(key);
	}

	/**
	 * Subscribes to "change:<key>" events.
	 */
	on(eventName: string, cb: StoreCallback<T>) {
		const [event, key] = eventName.split(":");
		if (event === "change") {
			this.changeEvents.set(key, cb);
		}
	}
}

type StoreCallback<T> = (prev: T, next: T, key: string) => void;
