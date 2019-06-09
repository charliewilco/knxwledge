import search from "../src/binary-search";

const items = [0, 1, 4, 13, 17, 24, 31, 45, 62, 75, 81, 96];

describe("Binary search", () => {
  it("can find the index", () => {
    expect(search(items, 13)).toBe(3);
  });

  it("throws an error if there are no items", () => {
    function searchEmpty() {
      search([], 3);
    }

    expect(searchEmpty).toThrowError();
  });

  it("throws an error if there are no items", () => {
    function searchUnsorted() {
      search([3, 1, 4, 2], 3);
    }

    expect(searchUnsorted).toThrowError();
  });
});
