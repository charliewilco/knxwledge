import { describe, expect, test } from "bun:test";
import { partition, QuickSort, quickSort, swap } from "./quick-sort.ts";

describe("Quick sort", () => {
	test("swap exchanges two items in place", () => {
		const arr = [3, 1, 2];

		swap(arr, 0, 2);

		expect(arr).toEqual([2, 1, 3]);
	});

	test("partition moves smaller values before the pivot", () => {
		const arr = [4, 2, 5, 1, 3];

		const pivotIndex = partition(arr, arr.length - 1, 0, arr.length - 1);

		expect(arr[pivotIndex]).toBe(3);
		expect(arr.slice(0, pivotIndex).every((value) => value < 3)).toBe(true);
		expect(arr.slice(pivotIndex + 1).every((value) => value >= 3)).toBe(true);
	});

	test("top-level quickSort sorts in place using bounds", () => {
		const arr = [11, 8, 14, 3, 6, 2, 7];

		expect(quickSort(arr, 0, arr.length - 1)).toEqual([2, 3, 6, 7, 8, 11, 14]);
		expect(arr).toEqual([2, 3, 6, 7, 8, 11, 14]);
	});

	test("sorts numbers", () => {
		const arr = QuickSort.sort([11, 8, 14, 3, 6, 2, 7]);
		expect(arr[0]).toBe(2);
		expect(arr[arr.length - 1]).toBe(14);
	});

	test("has correct input", () => {
		const arr = QuickSort.sort([11, 8, 14, 3, 6, 2, 7]);

		expect(arr).toEqual([2, 3, 6, 7, 8, 11, 14]);
	});

	test("supports a custom compare function", () => {
		const arr = QuickSort.sort(
			[
				{ name: "B", score: 2 },
				{ name: "C", score: 3 },
				{ name: "A", score: 1 },
			],
			(a, b) => b.score - a.score,
		);

		expect(arr).toEqual([
			{ name: "C", score: 3 },
			{ name: "B", score: 2 },
			{ name: "A", score: 1 },
		]);
	});

	test("returns the input for empty and single-item arrays", () => {
		expect(QuickSort.sort([])).toEqual([]);
		expect(QuickSort.sort([42])).toEqual([42]);
	});
});
