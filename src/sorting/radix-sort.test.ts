import { describe, expect, test } from "bun:test";
import { RadixSort } from "./radix-sort";

describe("RadixSort", () => {
	test("Sorts an array of integers in ascending order", () => {
		const arr = [170, 45, 75, 90, 802, 24, 2, 66];
		const sortedArr = RadixSort.sort(arr, (item: number) => item);
		expect(sortedArr).toEqual([2, 24, 45, 66, 75, 90, 170, 802]);
	});

	test("Sorts an array of objects in ascending order of a numeric property", () => {
		const arr = [{ id: 170 }, { id: 45 }, { id: 75 }, { id: 90 }, { id: 802 }, { id: 24 }, { id: 2 }, { id: 66 }];
		const sortedArr = RadixSort.sort(arr, (item) => item.id);
		expect(sortedArr).toEqual([
			{ id: 2 },
			{ id: 24 },
			{ id: 45 },
			{ id: 66 },
			{ id: 75 },
			{ id: 90 },
			{ id: 170 },
			{ id: 802 },
		]);
	});

	test.skip("Sorts an array of objects in descending order of a numeric property", () => {
		const arr = [{ id: 170 }, { id: 45 }, { id: 75 }, { id: 90 }, { id: 802 }, { id: 24 }, { id: 2 }, { id: 66 }];
		const sortedArr = RadixSort.sort(arr, (item) => -item.id);
		expect(sortedArr).toEqual([
			{ id: 802 },
			{ id: 170 },
			{ id: 90 },
			{ id: 75 },
			{ id: 66 },
			{ id: 45 },
			{ id: 24 },
			{ id: 2 },
		]);
	});
});
