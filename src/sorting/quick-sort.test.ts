import { describe, expect, test } from "@jest/globals";
import { QuickSort } from "./quick-sort.ts";

describe("Quick sort", () => {
	test("sorts numbers", () => {
		let arr = QuickSort.sort([11, 8, 14, 3, 6, 2, 7]);
		expect(arr[0]).toBe(2);
		expect(arr[arr.length - 1]).toBe(14);
	});

	test("has correct input", () => {
		let arr = QuickSort.sort([11, 8, 14, 3, 6, 2, 7]);

		expect(arr).toEqual([2, 3, 6, 7, 8, 11, 14]);
	});
});
