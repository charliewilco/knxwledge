# Anagram Detector

Goal
- Find words that have an anagram match in a list.

Files
- Implementation: `src/problems/anagram-detector.ts`
- Tests: `src/problems/anagram-detector.test.ts`

Complexity
- O(n * k log k) where k is word length (sorting per word)

Edge cases
- Case-insensitive compare via uppercasing

Example
- ["listen", "silent", "foo"] -> ["listen", "silent"].

Notes
- See the tests for expected behavior and additional scenarios.
