import { describe, expect, test } from "@jest/globals";
import { binarySearch } from "./binary-search.ts";

const items = [0, 1, 4, 13, 17, 24, 31, 45, 62, 75, 81, 96];

describe("Binary search", () => {
	test("can find the index", () => {
		expect(binarySearch(items, 13)).toBe(3);
	});

	test("throws an error if there are no items", () => {
		function searchEmpty() {
			binarySearch([], 3);
		}

		expect(searchEmpty).toThrowError();
	});

	test("throws an error if there are no items", () => {
		function searchUnsorted() {
			binarySearch([3, 1, 4, 2], 3);
		}

		expect(searchUnsorted).toThrowError();
	});
});
