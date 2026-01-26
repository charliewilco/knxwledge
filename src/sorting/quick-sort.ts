// TODO: Find something that doesn't mutate
/**
 * Swaps two items in-place.
 */
export function swap<T>(arr: T[], i: number, j: number) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

/**
 * Partitions the array around a pivot index.
 */
export function partition<T>(arr: T[], pivot: number, left: number, right: number): number {
	let pivotValue = arr[pivot];
	let partitionIndex = left;

	for (let i = left; i < right; i++) {
		if (arr[i] < pivotValue) {
			swap(arr, i, partitionIndex);
			partitionIndex++;
		}
	}
	swap(arr, right, partitionIndex);
	return partitionIndex;
}

/**
 * In-place quick sort using index boundaries.
 */
export function quickSort<T>(arr: T[], left: number, right: number): T[] {
	let _len: number = arr.length;
	let pivot: number;
	let partitionIndex: number;

	if (left < right) {
		pivot = right;
		partitionIndex = partition(arr, pivot, left, right);

		//sort left and right
		quickSort(arr, left, partitionIndex - 1);
		quickSort(arr, partitionIndex + 1, right);
	}
	return arr;
}

/**
 * Quick sort wrapper with optional comparison function.
 */
export class QuickSort<T> {
	private arr: T[];

	static sort<T>(arr: T[], compareFn?: (a: T, b: T) => number): T[] {
		const q = new QuickSort(arr);
		return q.sort(compareFn);
	}

	constructor(arr: T[]) {
		this.arr = arr;
	}

	public sort(compareFn?: (a: T, b: T) => number): T[] {
		this.quickSort(0, this.arr.length - 1, compareFn);
		return this.arr;
	}

	private quickSort(left: number, right: number, compareFn?: (a: T, b: T) => number): void {
		if (left < right) {
			const pivotIndex = this.partition(left, right, compareFn);
			this.quickSort(left, pivotIndex - 1, compareFn);
			this.quickSort(pivotIndex + 1, right, compareFn);
		}
	}

	private partition(left: number, right: number, compareFn?: (a: T, b: T) => number): number {
		const pivotIndex = Math.floor((left + right) / 2);
		const pivot = this.arr[pivotIndex];
		this.swap(pivotIndex, right);
		let i = left;

		for (let j = left; j < right; j++) {
			if (compareFn ? compareFn(this.arr[j], pivot) < 0 : this.arr[j] < pivot) {
				this.swap(i, j);
				i++;
			}
		}

		this.swap(i, right);
		return i;
	}

	private swap(i: number, j: number): void {
		const temp = this.arr[i];
		this.arr[i] = this.arr[j];
		this.arr[j] = temp;
	}
}
