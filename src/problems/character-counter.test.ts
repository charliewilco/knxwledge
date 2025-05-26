import { describe, expect, test } from "@jest/globals";
import { countCharacterFrequency } from "./character-counter.ts";

describe("Character Frequency", () => {
	test("Simple use cases", () => {
		const simple = countCharacterFrequency("Charles Peters!");

		expect(simple.e).toEqual(3);
		expect(simple.r).toEqual(2);
		expect(simple.c).toEqual(1);
		expect(simple[" "]).toBeUndefined();
		expect(simple["!"]).toBeUndefined();
	});

	test("excludes numbers", () => {
		const longer = countCharacterFrequency("Charles Peters, the star child, born 1991");

		expect(longer["1"]).toBeUndefined();
		expect(longer["9"]).toBeUndefined();
	});

	test("ignores casing", () => {
		const casing = countCharacterFrequency(
			"Charles Peters Reads Books! But not by battlestar galatica fans",
		);
		expect(casing.r).toEqual(4);
		expect(casing.b).toEqual(4);
	});
});
