import { describe, expect, test } from "@jest/globals";
import { Queue } from "./stack-queue.ts";

describe("Stack", () => {});

describe.skip("Queue", () => {
	test("Peek returns head", () => {
		const q = new Queue(4);

		expect(q.peek()).toBe(4);

		q.add(6);

		expect(q.peek()).toBe(4);
		expect(q.isEmpty()).toBeFalsy();
	});

	test("isEmpty", () => {
		const q1 = new Queue();
		const q2 = new Queue(2);

		expect(q1.isEmpty()).toBeTruthy();
		expect(q2.isEmpty()).toBeFalsy();
	});

	test("removes", () => {
		const q = new Queue(4);
		q.add(5);
		q.remove();
		expect(q.peek()).toBe(5);
	});
});
