import { describe, expect, jest, test } from "@jest/globals";
import { EventEmitter, createEventEmitter, createEventEmitterMap } from "./event-emitter.ts";

const _mock = jest.fn();

describe("Event Emitter", () => {
	test("emits result when fired", () => {
		const m = new EventEmitter({});
		let val = 0;

		// biome-ignore lint/suspicious/noAssignInExpressions: Expression as assign as a little treat
		m.subscribe("mock event", (n: number) => (val = n));
		m.emit("mock event", 18);

		expect(val).toBe(18);
	});

	test("contains event names", () => {
		const m = new EventEmitter({});

		m.subscribe("mock event", _mock);
		m.subscribe("other mock event", jest.fn);
		const events = Object.keys(m.events);

		expect(events).toContain("mock event");
		expect(events).toContain("other mock event");
	});

	test("fires call back when emitted", () => {
		const m = new EventEmitter({});
		let val = 0;

		m.subscribe("mock event", (n: number) => _mock(n));
		m.emit("mock event", 18);

		expect(_mock).toHaveBeenCalled();
	});

	test("unsubscribes from event", () => {
		const m = new EventEmitter();

		let val = 0;

		// biome-ignore lint/suspicious/noAssignInExpressions: Expression as assign as a little treat
		const e = m.subscribe("mock event", (n: number) => (val = n));
		m.subscribe("other mock event", _mock);
		m.emit("mock event", 10);
		expect(val).toBe(10);

		e.release();

		m.emit("mock event", 18);
		expect(val).not.toBe(18);
		expect(m.events["mock event"]).toHaveLength(0);
	});

	test.skip("fires event", () => {});
});

describe("Event Emitter Function", () => {
	test("emits result when fired", () => {
		const m = createEventEmitter();
		let val = 0;

		// biome-ignore lint/suspicious/noAssignInExpressions: Expression as assign as a little treat
		m.subscribe("mock event", (n: number) => (val = n));
		m.emit("mock event", 18);

		expect(val).toBe(18);
	});

	test("contains event names", () => {
		const m = createEventEmitter();

		m.subscribe("mock event", _mock);
		m.subscribe("other mock event", _mock);
		const events = Object.keys(m.events);

		expect(events).toContain("mock event");
		expect(events).toContain("other mock event");
	});

	test("fires call back when emitted", () => {
		const m = createEventEmitter();
		let val = 0;

		m.subscribe("mock event", (n: number) => _mock(n));
		m.emit("mock event", 18);

		expect(_mock).toHaveBeenCalled();
	});

	test("unsubscribes from event", () => {
		const m = createEventEmitter();

		let val = 0;

		// biome-ignore lint/suspicious/noAssignInExpressions: Expression as assign as a little treat
		const e = m.subscribe("mock event", (n: number) => (val = n));
		m.subscribe("other mock event", _mock);
		m.emit("mock event", 10);
		expect(val).toBe(10);

		e.release();

		m.emit("mock event", 18);
		expect(val).not.toBe(18);
		expect(m.events["mock event"]).toHaveLength(0);
	});

	test.skip("fires event", () => {});
});

describe("Event Emitter  with a Map", () => {
	test("emits result when fired", () => {
		const m = createEventEmitterMap();
		let val = 0;

		// biome-ignore lint/suspicious/noAssignInExpressions: Expression as assign as a little treat
		m.subscribe("count", (n: number) => (val = n));
		m.emit("count", 18);

		expect(val).toBe(18);
	});

	test("contains event names", () => {
		const m = createEventEmitterMap();

		m.subscribe("mock event", _mock);
		m.subscribe("other mock event", () => jest.fn());

		const events = m.getEventNames();

		expect(events).toContain("mock event");
		expect(events).toContain("other mock event");
	});

	test("fires call back when emitted", () => {
		const m = createEventEmitterMap();
		let val = 0;

		m.subscribe("mock event", (n: number) => _mock(n));
		m.emit("mock event", 18);

		expect(_mock).toHaveBeenCalled();
	});

	test("unsubscribes from event", () => {
		const m = createEventEmitterMap();

		let val = 0;

		// biome-ignore lint/suspicious/noAssignInExpressions: Expression as assign as a little treat
		const e = m.subscribe("mock event", (n: number) => (val = n));
		m.subscribe("other mock event", jest.fn);
		m.emit("mock event", 10);
		expect(val).toBe(10);

		e.release();

		m.emit("mock event", 18);
		expect(val).not.toBe(18);
		expect(m.getEventNames()).not.toContain("mock event");
	});

	test.skip("fires event", () => {});
});
