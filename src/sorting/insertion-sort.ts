/**
 * Insertion Sort is a simple comparison-based sorting algorithm that builds the final sorted array
 * one element at a time by inserting each unsorted element in its correct position. It has a time
 * complexity of O(n^2) for n elements, and a space complexity of O(1).
 *
 * Insertion Sort is stable, meaning that it maintains the relative order of equal elements, and
 * it is efficient for small inputs or partially sorted arrays. However, it can be inefficient for
 * large inputs or arrays with a large number of inversions.
 */
export class InsertionSort {
	/**
	 * Sorts the input array in ascending order using the Insertion Sort algorithm.
	 *
	 * @param {T[]} arr - The input array to be sorted
	 * @param {(a: T, b: T) => number} compareFn - An optional comparison function that defines the sort order
	 * @returns {T[]} - The sorted array in ascending order
	 */
	static sort<T>(
		arr: T[],
		compareFn: (a: T, b: T) => number = (a, b) => (a < b ? -1 : a > b ? 1 : 0),
	): T[] {
		for (let i = 1; i < arr.length; i++) {
			const key = arr[i];
			let j = i - 1;
			while (j >= 0 && compareFn(arr[j], key) > 0) {
				arr[j + 1] = arr[j];
				j--;
			}
			arr[j + 1] = key;
		}
		return arr;
	}
}
