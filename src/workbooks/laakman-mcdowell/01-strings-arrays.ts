// 1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

export function isUnique(str: string): boolean {
	const charsMap: Record<string, number> = {};

	let result = true;
	for (let s of str) {
		if (charsMap[s]) {
			result = false;
			break;
		}
		charsMap[s] = 1;
	}

	return result;
}

export function isUniqueQuadratic(str: string): boolean {
	const prevCharacters: string[] = [];
	let result = true;

	for (let index = 0; index < str.length; index++) {
		const character = str[index];

		if (prevCharacters.length > 0) {
			const found = prevCharacters.includes(character);
			if (found) {
				result = false;
				break;
			} else {
				prevCharacters.push(character);
			}
		} else {
			prevCharacters.push(character);
		}
	}

	return result;
}

// 1.2 Check Permutation: Given two strings, write a method to decide if one is a permuation of the other.

export function isPermutation(str: string, otherStr: string): boolean {
	if (str.length !== otherStr.length) {
		return false;
	}

	// let result = true;

	const first = str.split("").sort();
	const second = otherStr.split("").sort();

	for (let index = 0; index < str.length; index++) {
		if (first[index] !== second[index]) {
			return false;
		}
	}

	return true;
}

// 1.3 Urlify: Write a method ro replace all the spaces in a string with '%20'.
// You may assume that the string has sufficient space at the end to hold the additional characters
// amd that you are given the "true" length of the string.

export function urlify(url: string): string {
	const separator = "%20";
	const groups = url.trim().split(" ");

	return groups.reduce<string>((acc, value, currentIndex, _) => {
		const isEnd = currentIndex + 1 === _.length;

		acc += isEnd ? value : value.concat(separator);
		return acc;
	}, "");
}

// 1.4 Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
// The palidrome does not need to be limited to just dictionary words, you can ignore casing an non-letter characters

export function containsPermutationPalindromes(base: string): boolean {
	function isOdd(num: number) {
		if (num === 0) return false;

		return (num & -num) === 1;
	}

	const newBase = base.toLowerCase().split("");
	let containsOnlyOneSingleOddCharacterCount = 0;

	const allOccurences: Record<string, number> = {};

	for (let index = 0; index < newBase.length; index++) {
		const element = newBase[index];

		if (element !== " ") {
			if (allOccurences[element]) {
				++allOccurences[element];
			} else {
				allOccurences[element] = 1;
			}
		}
	}

	for (const prop in allOccurences) {
		const count = allOccurences[prop];

		isOdd(count) && containsOnlyOneSingleOddCharacterCount++;

		if (containsOnlyOneSingleOddCharacterCount > 1) {
			return false;
		}
	}

	return true;
}

// 1.5 One Away
// NOT DONE
export function oneAway(predicate: string, deviation: string): boolean {
	const n = predicate === deviation;
	return n || true;
}
