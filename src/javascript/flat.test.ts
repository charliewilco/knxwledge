import { describe, expect, test } from "bun:test";
import { flatIterative, flatRecursive } from "./flat";

describe("Flatten array", () => {
	test("Iterative", () => {
		const base = [1, 2, [3, 4, 5, [6, 7, [8, 9, 10]]]];

		expect(flatIterative(base)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	});

	test("recursively with depth", () => {
		const base = [1, 2, [3, 4, 5, [6, 7, [8, 9, 10]]]];

		expect(flatRecursive(base, 3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
		expect(flatRecursive(base, 2)).toEqual([1, 2, 3, 4, 5, 6, 7, [8, 9, 10]]);
		expect(flatRecursive(base, 1)).toEqual([1, 2, 3, 4, 5, [6, 7, [8, 9, 10]]]);
	});
});
