import { moveZerosBrute, moveZerosLessBad } from "../src/problems/move-zeros";

describe("Move Zeroes", () => {
	test("runs brute force", () => {
		const base = [1, 10, 0, 2, 8, 3, 0, 0, 6, 4, 0, 5, 7, 0];
		const result = [1, 10, 2, 8, 3, 6, 4, 5, 7, 0, 0, 0, 0, 0];
		expect(moveZerosBrute(base)).toEqual(result);
		expect(moveZerosBrute([0, 0, 0, 0, 0])).toEqual([0, 0, 0, 0, 0]);
	});

	test("runs less bad", () => {
		const base = [1, 10, 0, 2, 8, 3, 0, 0, 6, 4, 0, 5, 7, 0];
		const result = [1, 10, 2, 8, 3, 6, 4, 5, 7, 0, 0, 0, 0, 0];
		expect(moveZerosLessBad(base)).toEqual(result);
		expect(moveZerosLessBad([0, 0, 0, 0, 0])).toEqual([0, 0, 0, 0, 0]);
	});
});
