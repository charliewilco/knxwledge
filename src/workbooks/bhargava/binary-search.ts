/**
 * ```py
 * def binarySearch(list, item):
    """
    simple binary search
    """
    low = 0
    high = len(list)-1
    while low <= high:
        mid = (low + high)
        guess = list[mid]
        if guess == item:
            return mid
        if guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return None


MY_LIST = [1, 3, 5, 7, 9]

print(binarySearch(MY_LIST, 3))

 * ```
 */

/**
 * Binary search from "Grokking Algorithms" examples.
 */
export const binarySearch = <T>(list: T[], target: T) => {
	let left: number = 0;
	let right: number = list.length - 1;

	while (left <= right) {
		const mid: number = Math.floor((left + right) / 2);

		if (list[mid] === target) return mid;
		if (target < list[mid]) right = mid - 1;
		else left = mid + 1;
	}

	return -1;
};
