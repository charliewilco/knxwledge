# Memoize

Goal
- Cache results of a function by its first argument.

Files
- Implementation: `src/javascript/memoize.ts`
- Tests: `src/javascript/memoize.test.ts`

Complexity
- Lookup O(1); compute cost depends on function

Edge cases
- Cache key uses only the first argument

Example
- memoize(f)(5) caches result for key 5.

Notes
- See the tests for expected behavior and additional scenarios.
