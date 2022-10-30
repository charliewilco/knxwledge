import { betterBubbling as bubbleSort } from "../src";

describe("Bubble sort", () => {
	test("sorts", () => {
		const arr = bubbleSort([11, 8, 14, 3, 6, 2, 7]);
		expect(arr[0]).toBe(2);
		expect(arr[arr.length - 1]).toBe(14);
	});
});
