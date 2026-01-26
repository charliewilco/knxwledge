/**
 * Merges overlapping intervals and returns a new list of non-overlapping intervals.
 */
export function merge(intervals: number[][]): number[][] {
	if (intervals.length <= 1) {
		return intervals;
	}

	// Sort intervals based on the starting time
	intervals.sort((a, b) => a[0] - b[0]);

	const merged: number[][] = [];
	let currentInterval = intervals[0];

	for (let i = 1; i < intervals.length; i++) {
		const [currentStart, currentEnd] = currentInterval;
		const [nextStart, nextEnd] = intervals[i];

		if (currentEnd >= nextStart) {
			// There is overlap, so we merge the intervals
			currentInterval = [currentStart, Math.max(currentEnd, nextEnd)];
		} else {
			// No overlap, push the current interval to result and move to the next
			merged.push(currentInterval);
			currentInterval = intervals[i];
		}
	}

	// Add the last interval
	merged.push(currentInterval);

	return merged;
}
