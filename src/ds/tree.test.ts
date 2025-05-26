import { describe, expect, test } from "@jest/globals";
import { Tree } from "./tree";

const t = new Tree<number>(5);
t.insert(7);

describe("Tree", () => {
	test("can contain", () => {
		expect(t.contains(5)).toBeTruthy();
	});

	test("can insert", () => {
		expect(t.contains(7)).toBeTruthy();
		expect(t.left).toBeNull();
	});
});
