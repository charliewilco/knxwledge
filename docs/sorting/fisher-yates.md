# Fisher-Yates Shuffle

Goal
- Shuffle an array uniformly at random.

Files
- Implementation: `src/sorting/fisher-yates.ts`
- Tests: `src/sorting/fisher-yates.test.ts`

Complexity
- O(n) time, O(n) space for cloned output

Edge cases
- Randomness is probabilistic; tests check thresholds

Example
- [1, 2, 3] -> [2, 1, 3] (one possible shuffle).

Notes
- See the tests for expected behavior and additional scenarios.
