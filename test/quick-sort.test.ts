import * as Quick from "../src";

describe("Quick sort", () => {
	test("sorts numbers", () => {
		const arr = Quick.quickSort([11, 8, 14, 3, 6, 2, 7], 0, 6);
		expect(arr[0]).toBe(2);
		expect(arr[arr.length - 1]).toBe(14);
	});

	xtest("calls swap", () => {
		const arr = Quick.quickSort([11, 8, 14, 3, 6, 2, 7], 0, 6);
		const spy = jest.spyOn(Quick, "swap");

		expect(spy).toHaveBeenCalled();
	});
});
