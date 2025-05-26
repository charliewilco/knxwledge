import { describe, expect, test } from "@jest/globals";
import { anagramDetector } from "./anagram-detector.ts";

describe("Anagrams", () => {
	test("handles basic anagrams", () => {
		const result = anagramDetector(["cat", "stop", "hello", "post", "world", "act"]);
		expect(result).toContain("cat");
		expect(result).toContain("act");
	});

	test("handles more complex anagrams", () => {
		const result = anagramDetector(["STRNGI", "STRING", "dog", "god", "blueberry", "strawberry"]);

		expect(result).toEqual(["STRNGI", "STRING", "dog", "god"]);
	});

	test("handles different casing", () => {});
});
