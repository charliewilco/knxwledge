import { describe, expect, test } from "@jest/globals";
import { HeapSort } from "./heap-sort.ts";

interface Person {
	name: string;
	age: number;
}

describe("HeapSort", () => {
	test("should sort an empty array", () => {
		const arr: number[] = [];
		const expected: number[] = [];
		expect(HeapSort.sort(arr)).toEqual(expected);
	});

	test("should sort an array of numbers in ascending order", () => {
		const arr = [5, 1, 4, 2, 8];
		const expected = [1, 2, 4, 5, 8];
		expect(HeapSort.sort(arr)).toEqual(expected);
	});

	test("should sort an array of strings in ascending order", () => {
		const arr = ["apple", "dog", "cat", "banana"];
		const expected = ["apple", "banana", "cat", "dog"];
		expect(HeapSort.sort(arr)).toEqual(expected);
	});

	test("should sort an array of objects by a custom property in ascending order", () => {
		const arr: Person[] = [
			{ name: "Alice", age: 25 },
			{ name: "Bob", age: 20 },
			{ name: "Charlie", age: 30 },
		];
		const expected: Person[] = [
			{ name: "Bob", age: 20 },
			{ name: "Alice", age: 25 },
			{ name: "Charlie", age: 30 },
		];
		const compare = (a: Person, b: Person) => a.age - b.age;
		expect(HeapSort.sort(arr, compare)).toEqual(expected);
	});

	test("should sort an array of numbers in descending order", () => {
		const arr = [5, 1, 4, 2, 8];
		const expected = [8, 5, 4, 2, 1];
		const compare = (a: number, b: number) => (a > b ? -1 : a < b ? 1 : 0);
		expect(HeapSort.sort(arr, compare)).toEqual(expected);
	});

	test("should sort an array of strings in descending order", () => {
		const arr = ["apple", "dog", "cat", "banana"];
		const expected = ["dog", "cat", "banana", "apple"];
		const compare = (a: string, b: string) => b.localeCompare(a);
		expect(HeapSort.sort(arr, compare)).toEqual(expected);
	});
});
