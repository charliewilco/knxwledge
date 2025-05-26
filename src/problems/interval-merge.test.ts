import { describe, expect, test } from "@jest/globals";
import { merge } from "./interval-merge.ts";

describe("mergeIntervals", () => {
	test("merges overlapping intervals", () => {
		expect(
			merge([
				[1, 3],
				[2, 6],
				[8, 10],
				[15, 18],
			]),
		).toEqual([
			[1, 6],
			[8, 10],
			[15, 18],
		]);
	});

	test("returns input if no overlaps exist", () => {
		expect(
			merge([
				[1, 2],
				[3, 4],
				[5, 6],
			]),
		).toEqual([
			[1, 2],
			[3, 4],
			[5, 6],
		]);
	});

	test("handles complex overlaps", () => {
		expect(
			merge([
				[1, 4],
				[4, 5],
				[2, 3],
			]),
		).toEqual([[1, 5]]);
	});

	test("handles single interval", () => {
		expect(merge([[1, 3]])).toEqual([[1, 3]]);
	});

	test("handles empty input", () => {
		expect(merge([])).toEqual([]);
	});
});
