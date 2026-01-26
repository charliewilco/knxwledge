# Event Emitter

Goal
- Implement a minimal event emitter and variants.

Files
- Implementation: `src/javascript/event-emitter.ts`
- Tests: `src/javascript/event-emitter.test.ts`

Complexity
- subscribe: O(1), emit: O(m) listeners

Edge cases
- Emitting with no listeners is a no-op

Example
- subscribe("ping", fn); emit("ping", 1) calls fn(1).

Notes
- See the tests for expected behavior and additional scenarios.
