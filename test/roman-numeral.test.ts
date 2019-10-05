import { getIntfromNumeral } from "../src";

describe("Roman numerals", () => {
  it("solves simple numerals", () => {
    expect(getIntfromNumeral("IX")).toEqual(9);
    expect(getIntfromNumeral("VI")).toEqual(6);
    expect(getIntfromNumeral("III")).toEqual(3);
  });

  it("solves complex numerals", () => {
    expect(getIntfromNumeral("LXII")).toEqual(62);
    expect(getIntfromNumeral("MMXIX")).toEqual(2019);
    expect(getIntfromNumeral("MCMXCI")).toEqual(1991);
  });

  it("throws errors", () => {
    expect(() => getIntfromNumeral("Nope")).toThrow();
    expect(() => getIntfromNumeral("MC Hammer")).toThrow();
    expect(() => getIntfromNumeral("Clarissa")).toThrow();
    expect(() => getIntfromNumeral("XL")).not.toThrow();
  });
});
