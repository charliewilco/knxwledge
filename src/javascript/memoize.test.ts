import { describe, expect, jest, test } from "@jest/globals";
import { memoize } from "./memoize.ts";

const add = jest.fn((n: number): number => n + 10);

const memoizedAdd = memoize(add);

describe("Memozie", () => {
	test("calls from cache", () => {
		expect(memoizedAdd(3)).toBe(13);
		expect(memoizedAdd(3)).toBe(13);
		expect(add).toHaveBeenCalledTimes(1);
	});

	test("returns a function", () => {
		expect(typeof memoizedAdd).toBe("function");
	});
});
