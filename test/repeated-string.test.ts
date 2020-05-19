import { repeatedString } from "../src";

describe("Repeated string", () => {
  it("large limits", () => {
    expect(repeatedString("a", 10000000000)).toEqual(10000000000);
    expect(repeatedString("aab", 882787)).toEqual(588525);
  });

  it("handles normal use cases", () => {
    expect(repeatedString("aba", 10)).toEqual(7);
    expect(repeatedString("a", 100)).toEqual(100);
  });

  it("handles when limit is shorter than predicate", () => {
    expect(repeatedString("ababa", 3)).toEqual(2);
  });
});
