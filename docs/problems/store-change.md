# Store Change

Goal
- Implement a key/value store with change notifications.

Files
- Implementation: `src/problems/store-change.ts`
- Tests: `src/problems/store-change.test.ts`

Complexity
- add/has/on: O(1) average

Edge cases
- Change callback receives previous value if present

Example
- add("x", 1) then add("x", 2) triggers change callback.

Notes
- See the tests for expected behavior and additional scenarios.
