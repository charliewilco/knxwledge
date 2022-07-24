/**
Lilah has a string, , of lowercase English letters that she repeated infinitely many times.

Given an integer, , find and print the number of letter a's in the first  letters of Lilah's infinite string.

For example, if the string  and , the substring we consider is , the first  characters of her infinite string. There are  occurrences of a in the substring.

Function Description

Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider
Input Format

The first line contains a single string, .
The second line contains an integer, .

Constraints

For  of the test cases, .
Output Format

Print a single integer denoting the number of letter a's in the first  letters of the infinite string created by repeating  infinitely many times.
*/

// how many whole times does string length go into the n, var wholeTimes
// what's the remainder, var remainder string ''
// how main times does string occur in original string * wholeTimes + occurences in the variable string
// what if the n, is lower than the string input
//

export function repeatedString(predicate: string, repeatedLimit: number) {
	const reducer = (acc: number, val: string): number => {
		const assertion = val === "a";

		if (assertion) {
			acc++;
		}
		return acc;
	};

	if (repeatedLimit < predicate.length) {
		const letters = predicate.substr(0, repeatedLimit).split("");

		return letters.reduce(reducer, 0);
	}

	const wholeTimes = Math.floor(repeatedLimit / predicate.length);
	const remainder = repeatedLimit % predicate.length;

	const letters = predicate.split("");
	const remainingLetters = predicate.substr(0, remainder).split("");

	const occurences = letters.reduce(reducer, 0);
	const remainingOcc = remainingLetters.reduce(reducer, 0);

	const value = occurences * wholeTimes + remainingOcc;

	return value;
}
