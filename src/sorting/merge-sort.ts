/**
 * Merge Sort is a divide-and-conquer sorting algorithm that works by dividing the input array into
 * two halves, sorting each half recursively using the same algorithm, and then merging the sorted
 * halves back together. It has a time complexity of O(n log n) for n elements, and a space complexity
 * of O(n).
 *
 * Merge Sort is stable, meaning that it maintains the relative order of equal elements, and it is
 * efficient for large inputs or arrays that are partially sorted or have a large number of inversions.
 * However, it requires additional space for the merge step and may be less efficient than other sorting
 * algorithms for small inputs or arrays that can be sorted in-place.
 */
export class MergeSort {
	/**
	 * Sorts the input array in ascending order using the Merge Sort algorithm.
	 *
	 * @param {T[]} arr - The input array to be sorted
	 * @param {(a: T, b: T) => number} [compare] - The custom comparison function to use
	 * @returns {T[]} - The sorted array in ascending order
	 */
	static sort<T>(
		arr: T[],
		compare: (a: T, b: T) => number = (a, b) => (a < b ? -1 : a > b ? 1 : 0),
	): T[] {
		if (arr.length <= 1) {
			return arr;
		}

		const middle = Math.floor(arr.length / 2);
		const left = arr.slice(0, middle);
		const right = arr.slice(middle);

		return MergeSort.merge(
			MergeSort.sort(left, compare),
			MergeSort.sort(right, compare),
			compare,
		);
	}

	/**
	 * Merges two sorted arrays into a single sorted array in ascending order.
	 *
	 * @param {T[]} left - The first sorted array
	 * @param {T[]} right - The second sorted array
	 * @param {(a: T, b: T) => number} compare - The custom comparison function to use
	 * @returns {T[]} - The merged sorted array in ascending order
	 */
	static merge<T>(left: T[], right: T[], compare: (a: T, b: T) => number): T[] {
		let result = [];

		while (left.length > 0 && right.length > 0) {
			if (compare(left[0], right[0]) <= 0) {
				result.push(left.shift()!);
			} else {
				result.push(right.shift()!);
			}
		}

		return result.concat(left, right);
	}
}
