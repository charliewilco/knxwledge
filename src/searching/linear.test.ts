import { describe, expect, test } from "bun:test";
import { linearSearch } from "./linear";

describe("linearSearch", () => {
	const arr = [5, 3, 8, 2, 1];

	test("returns the index of the target element if found", () => {
		const target = 8;
		const expectedIndex = 2;
		const index = linearSearch(arr, target);
		expect(index).toBe(expectedIndex);
	});

	test("returns -1 if the target element is not found", () => {
		const target = 4;
		const expectedIndex = -1;
		const index = linearSearch(arr, target);
		expect(index).toBe(expectedIndex);
	});

	test("works with strings as well", () => {
		const strArr = ["apple", "banana", "orange", "pear"];
		const target = "orange";
		const expectedIndex = 2;
		const index = linearSearch(strArr, target);
		expect(index).toBe(expectedIndex);
	});
});
