/**
 * Problem Statement:
Given an array of intervals where intervals[i] = [start_i, end_i],
merge all overlapping intervals and return an array of
the non-overlapping intervals that cover all the intervals in the input.

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
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
