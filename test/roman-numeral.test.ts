import { getIntfromNumeral } from "../src";

describe("Roman numerals", () => {
	test("solves simple numerals", () => {
		expect(getIntfromNumeral("IX")).toEqual(9);
		expect(getIntfromNumeral("VI")).toEqual(6);
		expect(getIntfromNumeral("III")).toEqual(3);
	});

	test("solves complex numerals", () => {
		expect(getIntfromNumeral("LXII")).toEqual(62);
		expect(getIntfromNumeral("MMXIX")).toEqual(2019);
		expect(getIntfromNumeral("MCMXCI")).toEqual(1991);
	});

	test("throws errors", () => {
		expect(() => getIntfromNumeral("Nope")).toThrow();
		expect(() => getIntfromNumeral("MC Hammer")).toThrow();
		expect(() => getIntfromNumeral("Clarissa")).toThrow();
		expect(() => getIntfromNumeral("XL")).not.toThrow();
	});
});
