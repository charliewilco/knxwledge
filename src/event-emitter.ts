interface Events {
	[key: string]: Function[];
}

// Test case, unsubscribe and subscribe in response to emit()
export class EventEmitter {
	public events: Events;
	constructor(events?: Events) {
		this.events = events || {};
	}

	/**
	 * subscribe
	 */
	public subscribe(name: string, cb: Function) {
		(this.events[name] || (this.events[name] = [])).push(cb);

		return {
			release: () =>
				this.events[name] &&
				this.events[name].splice(this.events[name].indexOf(cb) >>> 0, 1),
		};
	}

	public emit(name: string, ...args: any[]): void {
		(this.events[name] || []).forEach((fn) => fn(...args));
	}
}

export function fnEmitterMap() {
	const events = new Map<Function, string>();

	const subscribe = (name: string, fn: Function) => {
		events.set(fn, name);
		return {
			release: () => events.delete(fn),
		};
	};

	const emit = (name: string, data: any) => {
		events.forEach((value, key) => {
			if (value === name) {
				key(data);
			}
		});
	};

	const getValues = (): string[] => {
		const values: string[] = [];
		for (var [key, value] of events.entries()) {
			values.push(value);
		}
		return values;
	};

	return {
		getEventNames: getValues,
		subscribe,
		emit,
	};
}

export function fnEmitter(e?: Events) {
	let events: Events = e || {};

	return {
		events,
		subscribe: (name: string, cb: Function) => {
			(events[name] || (events[name] = [])).push(cb);

			return {
				release: () => {
					events[name] && events[name].splice(events[name].indexOf(cb) >>> 0, 1);
				},
			};
		},
		emit: (name: string, ...args: any[]) => {
			(events[name] || []).forEach((fn) => fn(...args));
		},
	};
}
