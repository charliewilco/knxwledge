/**
 * Finds all words that have at least one anagram match in the input list.
 * Returns a de-duplicated list of the matching words.
 */
export function anagramDetector(input: string[]): string[] {
	const prev = new Map<number, string[]>();
	const result = new Set<string>();

	function createComparison(s: string): string {
		return s.split("").sort().join("").toUpperCase();
	}

	for (let i = 0; i < input.length; i++) {
		if (prev.has(input[i].length)) {
			const lengthMatches = prev.get(input[i].length);
			for (let word of lengthMatches) {
				const comparer = createComparison(word);
				const element = createComparison(input[i]);

				if (comparer === element) {
					result.add(word);
					result.add(input[i]);
				}
			}

			lengthMatches.push(input[i]);
		} else {
			prev.set(input[i].length, [input[i]]);
		}
	}

	return Array.from(result);
}
