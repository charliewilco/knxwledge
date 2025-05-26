import { describe, expect, test } from "@jest/globals";
import { LinkedList, type ListNode } from "./linked-list.ts";

let linkedList = new LinkedList<number>(1);

linkedList.addToTail(2);
linkedList.addToTail(3);

describe("Linked List", () => {
	test("has index", () => {
		const n = linkedList.getByIndex(1) as ListNode<number>;

		expect(n.payload).toEqual(2);
	});

	test("has size", () => {
		const size = linkedList.size();

		expect(size).toEqual(3);
	});
});
