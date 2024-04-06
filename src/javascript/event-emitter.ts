type EmitterEventsType = Record<string, Function[]>;

// Test case, unsubscribe and subscribe in response to emit()
/**
 * An Event Emitter is a design pattern in JavaScript that allows objects to publish events and
 * subscribe to them. It is often used in Node.js applications to implement an event-driven
 * architecture, where the code responds to events by executing callback functions.
 *
 * An Event Emitter is an object that exposes an `on` method to subscribe to events, and an
 * `emit` method to publish events. The `on` method takes an event name and a callback function
 * as input, and registers the callback function to be executed when the event is emitted. The
 * `emit` method takes an event name and optional arguments, and executes all the registered
 * callback functions for the event with the provided arguments.
 *
 * The `EventEmitter` class in Node.js is a built-in implementation of the Event Emitter pattern.
 * It provides additional methods such as `once`, `removeListener`, and `removeAllListeners`,
 * and supports multiple event listeners for the same event. The EventEmitter can be used to
 * implement custom events in Node.js applications, such as HTTP request and response events,
 * database query events, and server status events.
 * @param events - an object containing the events to initialize the emitter with
 */
export class EventEmitter {
	public events: EmitterEventsType;
	constructor(events?: EmitterEventsType) {
		this.events = events || {};
	}

	/**
	 * subscribe
	 */
	public subscribe(name: string, cb: Function) {
		// biome-ignore lint/suspicious/noAssignInExpressions: You're not the boss of me.
		(this.events[name] || (this.events[name] = [])).push(cb);

		return {
			release: () => this.events[name]?.splice(this.events[name].indexOf(cb) >>> 0, 1),
		};
	}

	public emit(name: string, ...args: unknown[]): void {
		for (const fn of this.events[name] || []) {
			fn(...args);
		}
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

	const emit = (name: string, data: unknown) => {
		events.forEach((value, key) => {
			if (value === name) {
				key(data);
			}
		});
	};

	const getValues = (): string[] => {
		const values: string[] = [];
		for (let [, value] of events.entries()) {
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

export function fnEmitter(e?: EmitterEventsType) {
	let events: EmitterEventsType = e || {};

	return {
		events,
		subscribe: (name: string, cb: Function) => {
			// biome-ignore lint/suspicious/noAssignInExpressions: Shhhhh, it's okay
			(events[name] || (events[name] = [])).push(cb);

			return {
				release: () => {
					events[name]?.splice(events[name].indexOf(cb) >>> 0, 1);
				},
			};
		},
		emit: (name: string, ...args: unknown[]) => {
			for (const fn of events[name] || []) {
				fn(...args);
			}
		},
	};
}
