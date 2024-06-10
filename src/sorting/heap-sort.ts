/**
 * Heap Sort is a comparison-based sorting algorithm that works by dividing the input array into a
 * sorted region and an unsorted region, and iteratively removing the largest element from the unsorted
 * region and inserting it into the sorted region. It uses a binary heap data structure to efficiently
 * identify the largest element in the unsorted region, and has a time complexity of O(n log n) for n
 * elements, and a space complexity of O(1).
 *
 * Heap Sort is not stable, meaning that it may change the relative order of equal elements, and it
 * may be less efficient than other sorting algorithms for small inputs or partially sorted arrays.
 * However, it is efficient for large inputs and can be used to implement priority queues and heaps.
 */
export class HeapSort {
	/**
	 * Sorts the input array in ascending order using the Heap Sort algorithm.
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

		// Build a binary max-heap from the input array
		for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
			HeapSort.heapify(arr, i, arr.length, compare);
		}

		// Move the largest element (root) to the end of the array and heapify the remaining elements
		for (let i = arr.length - 1; i > 0; i--) {
			[arr[0], arr[i]] = [arr[i], arr[0]];
			HeapSort.heapify(arr, 0, i, compare);
		}

		return arr;
	}

	/**
	 * Maintains the max-heap property by swapping the element at the given index with its largest child
	 * recursively until the subtree rooted at the index is a max-heap. Assumes that the left and right
	 * subtrees are already max-heaps.
	 *
	 * @param {T[]} arr - The array to heapify
	 * @param {number} i - The index of the root of the subtree to heapify
	 * @param {number} n - The size of the heap (number of elements in the array)
	 * @param {(a: T, b: T) => number} compare - The custom comparison function to use
	 */
	static heapify<T>(arr: T[], i: number, n: number, compare: (a: T, b: T) => number): void {
		let largest = i;
		const left = 2 * i + 1;
		const right = 2 * i + 2;

		if (left < n && compare(arr[left], arr[largest]) > 0) {
			largest = left;
		}

		if (right < n && compare(arr[right], arr[largest]) > 0) {
			largest = right;
		}

		if (largest !== i) {
			[arr[i], arr[largest]] = [arr[largest], arr[i]];
			HeapSort.heapify(arr, largest, n, compare);
		}
	}
}
