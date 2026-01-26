# Interval Merge

Goal
- Merge overlapping intervals into non-overlapping ranges.

Files
- Implementation: `src/problems/interval-merge.ts`
- Tests: `src/problems/interval-merge.test.ts`

Complexity
- O(n log n) time due to sort, O(n) space

Edge cases
- Empty input returns empty array

Example
- [[1,3],[2,6],[8,10]] -> [[1,6],[8,10]].

Notes
- See the tests for expected behavior and additional scenarios.
