/**
 * Selection Sort is a simple sorting algorithm that works by repeatedly finding the minimum
 * element in the unsorted part of the array and moving it to the beginning of the unsorted part.
 * It has a time complexity of O(n^2) and a space complexity of O(1).
 *
 * Selection Sort is often used for educational purposes and on small arrays due to its simplicity,
 * but it is generally not suitable for large arrays or performance-critical applications.
 *
 * The algorithm works by iterating through the array and finding the minimum element in the
 * unsorted part of the array. It then swaps the minimum element with the first element of the
 * unsorted part of the array. This process continues until the entire array is sorted.
 *
 * The compare function is an optional function that compares two elements of the array and returns
 * a negative number if the first element is less than the second element, a positive number if the
 * first element is greater than the second element, and zero if the elements are equal. If no
 * compare function is provided, the default comparison operator '<' is used to compare the elements.
 *
 * @param {T[]} arr - The array to be sorted
 * @param {(a: T, b: T) => number} [compareFn] - Optional compare function to compare elements
 * @returns {T[]} - The sorted array
 *
 * @example
 * const arr = [5, 3, 8, 2, 1];
 * const sortedArr = selectionSort(arr);
 * console.log(sortedArr); // Output: [1, 2, 3, 5, 8]
 */
export class SelectionSort<T> {
	constructor(
		private arr: T[],
		private compareFn?: (a: T, b: T) => number,
	) {}

	sort(): T[] {
		const n = this.arr.length;

		for (let i = 0; i < n - 1; i++) {
			let minIndex = i;

			for (let j = i + 1; j < n; j++) {
				if (this.compareFn ? this.compareFn(this.arr[j], this.arr[minIndex]) < 0 : this.arr[j] < this.arr[minIndex]) {
					minIndex = j;
				}
			}

			if (minIndex !== i) {
				[this.arr[i], this.arr[minIndex]] = [this.arr[minIndex], this.arr[i]];
			}
		}

		return this.arr;
	}
}
