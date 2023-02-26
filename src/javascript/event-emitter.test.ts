import { EventEmitter, fnEmitter, fnEmitterMap } from "./event-emitter";

const mock = jest.fn();

describe("Event Emitter", () => {
	test("emits result when fired", () => {
		const m = new EventEmitter({});
		let val = 0;

		m.subscribe("mock event", (n: number) => (val = n));
		m.emit("mock event", 18);

		expect(val).toBe(18);
	});

	test("contains event names", () => {
		const m = new EventEmitter({});

		m.subscribe("mock event", mock);
		m.subscribe("other mock event", mock);
		const events = Object.keys(m.events);

		expect(events).toContain("mock event");
		expect(events).toContain("other mock event");
	});

	test("fires call back when emitted", () => {
		const m = new EventEmitter({});
		let val = 0;

		m.subscribe("mock event", (n: number) => mock(n));
		m.emit("mock event", 18);

		expect(mock).toHaveBeenCalled();
	});

	test("unsubscribes from event", () => {
		const m = new EventEmitter();

		let val = 0;

		const e = m.subscribe("mock event", (n: number) => (val = n));
		m.subscribe("other mock event", mock);
		m.emit("mock event", 10);
		expect(val).toBe(10);

		e.release();

		m.emit("mock event", 18);
		expect(val).not.toBe(18);
		expect(m.events["mock event"]).toHaveLength(0);
	});

	xtest("fires event", () => {});
});

describe("Event Emitter Function", () => {
	test("emits result when fired", () => {
		const m = fnEmitter();
		let val = 0;

		m.subscribe("mock event", (n: number) => (val = n));
		m.emit("mock event", 18);

		expect(val).toBe(18);
	});

	test("contains event names", () => {
		const m = fnEmitter();

		m.subscribe("mock event", mock);
		m.subscribe("other mock event", mock);
		const events = Object.keys(m.events);

		expect(events).toContain("mock event");
		expect(events).toContain("other mock event");
	});

	test("fires call back when emitted", () => {
		const m = fnEmitter();
		let val = 0;

		m.subscribe("mock event", (n: number) => mock(n));
		m.emit("mock event", 18);

		expect(mock).toHaveBeenCalled();
	});

	test("unsubscribes from event", () => {
		const m = fnEmitter();

		let val = 0;

		const e = m.subscribe("mock event", (n: number) => (val = n));
		m.subscribe("other mock event", mock);
		m.emit("mock event", 10);
		expect(val).toBe(10);

		e.release();

		m.emit("mock event", 18);
		expect(val).not.toBe(18);
		expect(m.events["mock event"]).toHaveLength(0);
	});

	xit("fires event", () => {});
});

describe("Event Emitter  with a Map", () => {
	test("emits result when fired", () => {
		const m = fnEmitterMap();
		let val = 0;

		m.subscribe("count", (n: number) => (val = n));
		m.emit("count", 18);

		expect(val).toBe(18);
	});

	test("contains event names", () => {
		const m = fnEmitterMap();

		m.subscribe("mock event", mock);
		m.subscribe("other mock event", () => jest.fn());

		const events = m.getEventNames();

		expect(events).toContain("mock event");
		expect(events).toContain("other mock event");
	});

	test("fires call back when emitted", () => {
		const m = fnEmitterMap();
		let val = 0;

		m.subscribe("mock event", (n: number) => mock(n));
		m.emit("mock event", 18);

		expect(mock).toHaveBeenCalled();
	});

	test("unsubscribes from event", () => {
		const m = fnEmitterMap();

		let val = 0;

		const e = m.subscribe("mock event", (n: number) => (val = n));
		m.subscribe("other mock event", mock);
		m.emit("mock event", 10);
		expect(val).toBe(10);

		e.release();

		m.emit("mock event", 18);
		expect(val).not.toBe(18);
		expect(m.getEventNames()).not.toContain("mock event");
	});

	xtest("fires event", () => {});
});
