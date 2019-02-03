import { Tree } from "../src/tree";

const t = new Tree<number>(5);
t.insert(7);

describe("Tree", () => {
  it("can contain", () => {
    expect(t.contains(5)).toBeTruthy();
  });

  it("can insert", () => {
    expect(t.contains(7)).toBeTruthy();
    expect(t.left).toBeNull();
  });
});
