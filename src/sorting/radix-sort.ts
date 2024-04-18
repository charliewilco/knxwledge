/**
 * Radix Sort is a non-comparative sorting algorithm that sorts data with keys by grouping the keys
 * by individual digits that share the same significant position and value. It has a time complexity
 * of O(nk) for n elements and k digits per element, and a space complexity of O(n + k).
 *
 * Radix Sort is particularly suitable for sorting large integers or strings, and is often used in
 * applications such as phone book and word list sorting. However, it requires that the keys are
 * integers or strings of the same length, and may not be suitable for all data sets.
 *
 * The algorithm works by first finding the maximum number of digits d in the input elements, then
 * iterating through each digit position i from the least significant to the most significant. For
 * each digit position i, the elements are grouped into buckets according to the i-th digit. The
 * elements are then collected from the buckets in order, forming a new array. This process is
 * repeated for all digit positions until the elements are sorted.
 *
 * @template T - The type of elements in the input array
 */
export class RadixSort<T> {
	static sort<T>(arr: T[], getKey: (item: T) => number): T[] {
		const sorter = new RadixSort<T>();

		return sorter.sort(arr, getKey);
	}

	/**
	 * Sorts the input array using the Radix Sort algorithm and returns the sorted array
	 *
	 * @param {T[]} arr - The array of elements to be sorted
	 * @param {(item: T) => number} getKey - The function that returns the key for each element
	 * @returns {T[]} - The sorted array
	 *
	 * @example
	 * const arr = [{ id: 170 }, { id: 45 }, { id: 75 }, { id: 90 }, { id: 802 }, { id: 24 }, { id: 2 }, { id: 66 }];
	 * const sorter = new RadixSort();
	 * const sortedArr = sorter.sort(arr, (item) => item.id);
	 * console.log(sortedArr); // Output: [{ id: 2 }, { id: 24 }, { id: 45 }, { id: 66 }, { id: 75 }, { id: 90 }, { id: 170 }, { id: 802 }]
	 */
	sort(arr: T[], getKey: (item: T) => number): T[] {
		const maxDigitCount = this.getMaxDigitCount(arr, getKey);
		let sortedArr = arr;

		for (let digit = 0; digit < maxDigitCount; digit++) {
			const buckets = Array.from({ length: 10 }, () => []);

			for (let i = 0; i < sortedArr.length; i++) {
				const bucketIndex = this.getDigit(getKey(sortedArr[i]), digit);
				buckets[bucketIndex].push(sortedArr[i]);
			}

			sortedArr = buckets.flat();
		}

		return sortedArr;
	}

	/**
	 * Gets the maximum number of digits in the input array elements
	 *
	 * @param {T[]} arr - The input array of elements
	 * @param {(item: T) => number} getKey - The function that returns the key for each element
	 * @returns {number} - The maximum number of digits in the input elements
	 */
	getMaxDigitCount(arr: T[], getKey: (item: T) => number): number {
		let maxDigitCount = 0;

		for (let i = 0; i < arr.length; i++) {
			const digitCount = this.getDigitCount(getKey(arr[i]));
			if (digitCount > maxDigitCount) {
				maxDigitCount = digitCount;
			}
		}

		return maxDigitCount;
	}

	/**
	 * Gets the digit at the given position in a number
	 *
	 * @param {number} num - The input number
	 * @param {number} digitPos - The position of the digit to get (0-based)
	 * @returns {number} - The digit at the given position in the number
	 */
	getDigit(num: number, digitPos: number): number {
		const divisor = 10 ** digitPos;
		const quotient = Math.trunc(Math.abs(num) / divisor);
		const digit = quotient % 10;
		return num < 0 ? -digit : digit;
	}

	/**
	 * Gets the number of digits in a number
	 *
	 * @param {number} num - The input number
	 * @returns {number} - The number of digits in the number
	 */
	getDigitCount(num: number): number {
		if (num === 0) return 1;
		return Math.floor(Math.log10(Math.abs(num))) + 1;
	}
}
