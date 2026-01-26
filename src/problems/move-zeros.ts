/* 
Move Zeros To End
Given a static-sized array of integers arr, move all zeroes in the array to the end of the array. You should preserve the relative order of items in the array.

We should implement a solution that is more efficient than a naive brute force.

Examples:

input:  `arr = [1, 10, 0, 2, 8, 3, 0, 0, 6, 4, 0, 5, 7, 0]`
output: `[1, 10, 2, 8, 3, 6, 4, 5, 7, 0, 0, 0, 0, 0]`
Constraints:

[time limit] 5000ms
[input] array.integer arr
0 ≤ arr.length ≤ 20
[output] array.integer
*/

/**
 * Moves zeroes to the end by building a new array (non-mutating).
 */
export function moveZerosBrute(arr: number[]): number[] {
	const not = [];
	let zeroCount = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== 0) {
			not.push(arr[i]);
		} else {
			zeroCount++;
		}
	}

	return not.concat(Array(zeroCount).fill(0));
}

/**
 * In-place move of zeroes to the end while preserving relative order.
 */
export function moveZerosLessBad(arr: number[]) {
	let index = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== 0) {
			arr[index++] = arr[i];
		}
	}

	for (let i = index; i < arr.length; i++) {
		arr[i] = 0;
	}

	return arr;
}
