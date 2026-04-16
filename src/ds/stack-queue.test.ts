import { describe, expect, test } from "bun:test";
import { Queue } from "./stack-queue.ts";

describe("Stack", () => {});

describe("Queue", () => {
	test("peek returns the head without removing it", () => {
		const q = new Queue(4);

		expect(q.peek()).toBe(4);

		q.add(6);

		expect(q.peek()).toBe(4);
		expect(q.isEmpty()).toBeFalsy();
	});

	test("reports empty state for empty and initialized queues", () => {
		const q1 = new Queue();
		const q2 = new Queue(2);

		expect(q1.isEmpty()).toBeTruthy();
		expect(q2.isEmpty()).toBeFalsy();
	});

	test("removes items in FIFO order", () => {
		const q = new Queue(4);
		q.add(5);

		expect(q.remove()).toBe(4);
		expect(q.peek()).toBe(5);
		expect(q.remove()).toBe(5);
		expect(q.isEmpty()).toBeTruthy();
	});

	test("can enqueue into an empty queue after removing the last item", () => {
		const q = new Queue(1);

		expect(q.remove()).toBe(1);
		expect(q.isEmpty()).toBeTruthy();

		q.add(2);

		expect(q.peek()).toBe(2);
		expect(q.remove()).toBe(2);
		expect(q.isEmpty()).toBeTruthy();
	});

	test("throws when peeking or removing from an empty queue", () => {
		const q = new Queue<number>();

		expect(() => q.peek()).toThrow("Tooooooo much");
		expect(() => q.remove()).toThrow("Nothing to remove");
	});
});
