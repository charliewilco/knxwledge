import { describe, expect, test } from "bun:test";
import { BubbleSort } from "./bubble-sort.ts";

describe("BubbleSort", () => {
	describe("sort", () => {
		test("should sort an empty array", () => {
			const arr: number[] = [];
			const expected: number[] = [];
			expect(BubbleSort.sort(arr)).toEqual(expected);
		});

		test("should sort an array of numbers in ascending order", () => {
			const arr = [5, 1, 4, 2, 8];
			const expected = [1, 2, 4, 5, 8];
			expect(BubbleSort.sort(arr)).toEqual(expected);
		});

		test("should sort an array of strings in ascending order", () => {
			const arr = ["apple", "dog", "cat", "banana"];
			const expected = ["apple", "banana", "cat", "dog"];
			expect(BubbleSort.sort(arr)).toEqual(expected);
		});

		test("should sort an array of objects by a custom property in ascending order", () => {
			const arr = [
				{ name: "Alice", age: 25 },
				{ name: "Bob", age: 20 },
				{ name: "Charlie", age: 30 },
			];
			const expected = [
				{ name: "Bob", age: 20 },
				{ name: "Alice", age: 25 },
				{ name: "Charlie", age: 30 },
			];
			const compare = (a: { name: string; age: number }, b: { name: string; age: number }) =>
				a.age - b.age;
			expect(BubbleSort.sort(arr, compare)).toEqual(expected);
		});

		test("should sort an array of numbers in descending order", () => {
			const arr = [5, 1, 4, 2, 8];
			const expected = [8, 5, 4, 2, 1];
			const compare = (a: number, b: number) => (a > b ? -1 : a < b ? 1 : 0);
			expect(BubbleSort.sort(arr, compare)).toEqual(expected);
		});

		test("should sort an array of strings in descending order", () => {
			const arr = ["apple", "dog", "cat", "banana"];
			const expected = ["dog", "cat", "banana", "apple"];
			const compare = (a: string, b: string) => b.localeCompare(a);
			expect(BubbleSort.sort(arr, compare)).toEqual(expected);
		});

		test("should sort an already sorted array in ascending order", () => {
			const arr = [1, 2, 3, 4, 5];
			const expected = [1, 2, 3, 4, 5];
			expect(BubbleSort.sort(arr)).toEqual(expected);
		});

		test("should sort a reversed array in ascending order", () => {
			const arr = [5, 4, 3, 2, 1];
			const expected = [1, 2, 3, 4, 5];
			expect(BubbleSort.sort(arr)).toEqual(expected);
		});
	});
});
