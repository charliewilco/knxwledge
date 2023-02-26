import * as Merge from "./merge-sort";

describe("Merge sort", () => {
	test("sorts numbers recursively", () => {
		const arr = Merge.mergeSortRecursive([11, 8, 14, 3, 6, 2, 7]);
		expect(arr[0]).toBe(2);
		expect(arr[arr.length - 1]).toBe(14);
	});
});
