/**
 * The `BubbleSort` class provides methods for sorting arrays using the bubble sort algorithm,
 * one of the simplest and most intuitive sorting algorithms.
 *
 * The bubble sort algorithm works by repeatedly swapping adjacent elements in the array that are out of order
 * until the entire array is sorted. Although it has a time complexity of O(n^2), bubble sort is easy to understand
 * and implement, and works well for small datasets.
 */
export class BubbleSort {
	/**
	 * Sorts an array in ascending order using the bubble sort algorithm.
	 * @param array An array of items to be sorted.
	 * @param compareFn An optional comparer function for custom sorting logic.
	 * @returns A sorted array of items.
	 */
	static sort<T>(array: T[], compareFn?: (a: T, b: T) => number): T[] {
		// biome-ignore lint/style/noParameterAssign: This is a valid operation since we're creating a new array
		array = array.slice();

		for (let i = 0; i < array.length; i++) {
			for (let j = 0; j < array.length - 1; j++) {
				if (
					compareFn
						? compareFn(array[j], array[j + 1]) > 0
						: array[j] > array[j + 1]
				) {
					let swap = array[j];
					array[j] = array[j + 1];
					array[j + 1] = swap;
				}
			}
		}

		return array;
	}

	/**
	 * Sorts an array in ascending order using the optimized bubble sort algorithm.
	 * @param array An array of items to be sorted.
	 * @param compareFn An optional comparer function for custom sorting logic.
	 * @returns A sorted array of items.
	 */
	static optimizedSort<T>(array: T[], compareFn?: (a: T, b: T) => number): T[] {
		// biome-ignore lint/style/noParameterAssign: This is a valid operation since we're creating a new array
		array = array.slice();

		for (let i = 0; i < array.length; i++) {
			let isDone: boolean = true;
			for (let j = 0; j < array.length - 1; j++) {
				if (
					compareFn
						? compareFn(array[j], array[j + 1]) > 0
						: array[j] > array[j + 1]
				) {
					isDone = false;
					let swap = array[j];
					array[j] = array[j + 1];
					array[j + 1] = swap;
				}
			}
			if (isDone) {
				break;
			}
		}

		return array;
	}
}
