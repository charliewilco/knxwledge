/**
 * Linear search. Returns the index of the target or -1 if not found.
 */
export function linearSearch<T>(arr: T[], target: T): number {
	const n = arr.length;
	for (let i = 0; i < n; i++) {
		if (arr[i] === target) {
			return i; // Return the index of the element if found
		}
	}
	return -1; // Return -1 if the element is not found
}
