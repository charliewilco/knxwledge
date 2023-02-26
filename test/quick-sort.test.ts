import { QuickSort } from "../src/sorting/quick-sort";

describe("Quick sort", () => {
	test("sorts numbers", () => {
		let sorter = new QuickSort([11, 8, 14, 3, 6, 2, 7]);
		let arr = sorter.sort();
		expect(arr[0]).toBe(2);
		expect(arr[arr.length - 1]).toBe(14);
	});

	test("has correct input", () => {
		let sorter = new QuickSort([11, 8, 14, 3, 6, 2, 7]);
		let arr = sorter.sort();

		expect(arr).toEqual([2, 3, 6, 7, 8, 11, 14]);
	});
});
