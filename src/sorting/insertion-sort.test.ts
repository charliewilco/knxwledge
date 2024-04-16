import { describe, expect, test } from "bun:test";
import { InsertionSort } from "./insertion-sort";

describe("Insertion Sort", () => {
	test("should return an empty array when given an empty array", () => {
		const arr: number[] = [];
		const expected: number[] = [];
		expect(InsertionSort.sort(arr)).toEqual(expected);
	});

	test("should return the same array when given an array with one element", () => {
		const arr = [42];
		const expected = [42];
		expect(InsertionSort.sort(arr)).toEqual(expected);
	});

	test("should sort an array of integers in ascending order", () => {
		const arr = [5, 1, 4, 2, 8];
		const expected = [1, 2, 4, 5, 8];
		expect(InsertionSort.sort(arr)).toEqual(expected);
	});

	test("should sort an array of strings in ascending order", () => {
		const arr = ["z", "y", "x", "w", "v"];
		const expected = ["v", "w", "x", "y", "z"];
		expect(InsertionSort.sort(arr)).toEqual(expected);
	});

	test("should sort an array of objects in ascending order based on a numeric property", () => {
		const arr = [
			{ id: 3, name: "C" },
			{ id: 1, name: "A" },
			{ id: 4, name: "D" },
			{ id: 2, name: "B" },
		];
		const expected = [
			{ id: 1, name: "A" },
			{ id: 2, name: "B" },
			{ id: 3, name: "C" },
			{ id: 4, name: "D" },
		];
		expect(InsertionSort.sort(arr, (a, b) => a.id - b.id)).toEqual(expected);
	});

	test("should sort an array of objects in descending order based on a string property", () => {
		const arr = [
			{ id: 3, name: "C" },
			{ id: 1, name: "A" },
			{ id: 4, name: "D" },
			{ id: 2, name: "B" },
		];
		const expected = [
			{ id: 4, name: "D" },
			{ id: 3, name: "C" },
			{ id: 2, name: "B" },
			{ id: 1, name: "A" },
		];
		expect(InsertionSort.sort(arr, (a, b) => b.name.localeCompare(a.name))).toEqual(expected);
	});

	test("should sort an array of numbers in descending order using a custom comparison function", () => {
		const arr = [5, 1, 4, 2, 8];
		const expected = [8, 5, 4, 2, 1];
		expect(InsertionSort.sort(arr, (a, b) => b - a)).toEqual(expected);
	});

	test("should handle an array with duplicate values", () => {
		const arr = [3, 1, 2, 1, 4, 3];
		const expected = [1, 1, 2, 3, 3, 4];
		expect(InsertionSort.sort(arr)).toEqual(expected);
	});

	test("should handle an array with negative values", () => {
		const arr = [5, -1, 4, -2, 8];
		const expected = [-2, -1, 4, 5, 8];
		expect(InsertionSort.sort(arr)).toEqual(expected);
	});

	test("should handle an array with all negative values", () => {
		const arr = [-5, -1, -4, -2, -8];
		const expected = [-8, -5, -4, -2, -1];
		expect(InsertionSort.sort(arr)).toEqual(expected);
	});
});
