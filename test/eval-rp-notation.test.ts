import { evalRPNotation } from "../src";

describe("Eval Reverse Polish Notation", () => {
  it("test case 1", () => {
    expect(evalRPNotation("5 3 + 2 *")).toEqual(16);
    expect(evalRPNotation("5 3 * 2 *")).toEqual(30);
    expect(evalRPNotation("8 4 / 2 *")).toEqual(4);
    expect(evalRPNotation("8 4 / 2 * 4 +")).toEqual(8);
  });

  it("test case 2", () => {
    expect(evalRPNotation("10 6 + 9 + 3 + -11 * 17 + 5 +")).toEqual(-286);
  });
});
