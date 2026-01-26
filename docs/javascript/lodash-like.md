# Lodash-like Path Helpers

Goal
- Implement simple get/has helpers for nested paths.

Files
- Implementation: `src/javascript/lodash-like.ts`
- Tests: `src/javascript/lodash-like.test.ts`

Complexity
- O(k) where k is path length

Edge cases
- Returns undefined when a path segment is missing

Example
- get({a:{b:1}}, "a.b") -> 1.

Notes
- See the tests for expected behavior and additional scenarios.
