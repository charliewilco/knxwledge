import * as assert from "assert";
import { longestIncrSequence } from "../src";

describe("Longest increasing sequence", () => {
  it("works, kinda", () => {
    const data = [3, 0, 2, 2, 5, -43, -1, 0, 11, 9, 10];
    assert.deepEqual(longestIncrSequence(data), [-43, -1, 0, 11]);
    assert.deepEqual(longestIncrSequence([3, 4, 1, 2]), [3, 4]);
    assert.deepEqual(longestIncrSequence([1, 1]), []);
    assert.deepEqual(longestIncrSequence([1]), []);
    // @ts-ignore-start
    assert.deepEqual(longestIncrSequence(""), []);
    // @ts-ignore-end
  });
});
