/**
 * Counts letter frequency in a sentence (letters only, case-insensitive).
 */
export function countCharacterFrequency(sentence: string): Record<string, number> {
	const letter = /^[A-Za-z]*$/;

	let map: Record<string, number> = {};

	for (let char of sentence) {
		if (letter.test(char)) {
			const lower = char.toLowerCase();
			if (map[lower]) {
				map[lower]++;
			} else {
				map[lower] = 1;
			}
		}
	}

	return map;
}
