# Debounce and Throttle

Goal
- Implement debounce and throttle timing helpers.

Files
- Implementation: `src/javascript/debounce-throttle.ts`

Complexity
- O(1) per call (timer management)

Edge cases
- Immediate debounce fires on leading edge

Example
- debounce(fn, 200) delays rapid calls until idle.

Notes
- See the tests for expected behavior and additional scenarios.
