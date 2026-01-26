# Observable

Goal
- Implement a minimal observable with map and subscribe.

Files
- Implementation: `src/javascript/observable.ts`

Complexity
- map/subscribe: O(1) per subscription; emission depends on source

Edge cases
- Errors propagate to observer.error

Example
- new Observable(obs => { obs.next(1); obs.complete(); })

Notes
- See the tests for expected behavior and additional scenarios.
