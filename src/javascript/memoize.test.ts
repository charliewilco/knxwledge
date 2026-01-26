import { describe, expect, mock, test } from "bun:test";
import { memoize } from "./memoize.ts";

const add = mock((n: number): number => n + 10);

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
