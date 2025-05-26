import { describe, expect, test } from "@jest/globals";
import { SelectionSort } from "./selection-sort.ts";

describe("SelectionSort", () => {
	test("sorts an array of numbers in ascending order", () => {
		const arr = [5, 3, 8, 2, 1];
		const sortedArr = SelectionSort.sort(arr);
		expect(sortedArr).toEqual([1, 2, 3, 5, 8]);
	});

	test("sorts an array of strings in descending order using a custom compare function", () => {
		const arr = ["banana", "apple", "orange", "pear"];
		const compareFn = (a: string, b: string) => b.localeCompare(a);
		const sortedArr = SelectionSort.sort(arr, compareFn);
		expect(sortedArr).toEqual(["pear", "orange", "banana", "apple"]);
	});

	test("returns an empty array when sorting an empty array", () => {
		const arr: number[] = [];
		const sortedArr = SelectionSort.sort(arr);
		expect(sortedArr).toEqual([]);
	});

	test("returns the same array when sorting an array of length 1", () => {
		const arr = [1];
		const sortedArr = SelectionSort.sort(arr);
		expect(sortedArr).toEqual([1]);
	});
});
