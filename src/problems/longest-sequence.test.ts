import { longestIncrSequence } from "./longest-sequence";

describe("Longest increasing sequence", () => {
	test("works, kinda", () => {
		const data = [3, 0, 2, 2, 5, -43, -1, 0, 11, 9, 10];
		expect(longestIncrSequence(data)).toEqual([-43, -1, 0, 11]);
		expect(longestIncrSequence([3, 4, 1, 2])).toEqual([3, 4]);
		expect(longestIncrSequence([1, 1])).toEqual([]);
		expect(longestIncrSequence([1])).toEqual([]);

		// @ts-ignore-start
		expect(longestIncrSequence("")).toEqual([]);
		// @ts-ignore-end
	});
});
