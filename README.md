# Knxwledge

![example workflow](https://github.com/charliewilco/knxwledge/actions/workflows/build.yml/badge.svg)

Workspace to write, test, and understand basic CS concepts like data structures and algorithms in TypeScript.

Most exercises are driven by tests. Start with the `*.test.ts` files and follow the imports to the implementations.

## Setup

Clone the project:

```sh
git clone https://github.com/charliewilco/knxwledge.git
```

### Prerequisites

This project uses Bun as the TypeScript runtime and package manager. Install Bun.


```sh
curl -fsSL https://bun.sh/install | bash
```

---

Install the dependencies:

```sh
bun install
```

Primarily this project uses native build commands and test runner from [Bun](https://bun.sh). Additionally, it uses [Biome](https://biomejs.dev/) for linting and formatting.

Run development script

```sh
bun run build
```

Or run the tests

```sh
bun run test
```

## Exercises

This repo is organized by topic. Each bullet points to a folder with test-driven exercises.

- Data structures: `src/ds` (linked list, stack/queue, trees, BST, reverse polish notation)
- Searching: `src/searching` (linear search, binary search)
- Sorting: `src/sorting` (bubble, selection, insertion, merge, quick, heap, radix, Fisher–Yates)
- Problems: `src/problems` (anagrams, intervals, longest sequence, max path sum, move zeroes, roman numerals, store change, repeated string, character counter)
- JavaScript exercises: `src/javascript` (memoize, flat, lodash-like utilities, event emitter)
- Workbooks: `src/workbooks` (book-driven practice, e.g. Laakmann–McDowell, Bhargava)

If you want a quick tour, open any test file under those folders and read top-to-bottom.

## Adding an exercise

If you add new exercises, the pattern is:

1) Create a `*.test.ts` file in the topic folder.
2) Implement the function/class next to it.
3) Run `bun run test` and iterate.

## Why this exists

I started this repo as a set of small, focused exercises while learning to program. It is meant to be practical, messy in a good way, and easy to revisit.
