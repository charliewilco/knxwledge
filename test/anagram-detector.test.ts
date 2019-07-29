import anagramDetector from "../src/anagram-detector";

describe("Anagrams", () => {
  it("handles basic anagrams", () => {
    const result = anagramDetector(["cat", "stop", "hello", "post", "world", "act"]);
    expect(result).toContain("cat");
    expect(result).toContain("act");
  });

  it("handles more complex anagrams", () => {
    const result = anagramDetector([
      "STRNGI",
      "STRING",
      "dog",
      "god",
      "blueberry",
      "strawberry"
    ]);

    expect(result).toEqual(["STRNGI", "STRING", "dog", "god"]);
  });

  it("handles different casing", () => {});
});
