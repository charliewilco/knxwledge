import { repeatedString } from "./repeated-string";

describe("Repeated string", () => {
	test("large limits", () => {
		expect(repeatedString("a", 10000000000)).toEqual(10000000000);
		expect(repeatedString("aab", 882787)).toEqual(588525);
	});

	test("handles normal use cases", () => {
		expect(repeatedString("aba", 10)).toEqual(7);
		expect(repeatedString("a", 100)).toEqual(100);
	});

	test("handles when limit is shorter than predicate", () => {
		expect(repeatedString("ababa", 3)).toEqual(2);
	});
});
