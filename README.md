# Knxwledge

![example workflow](https://github.com/charliewilco/knxwledge/actions/workflows/build.yml/badge.svg)

Workspace to write, test and understand basic CS concepts like data structures and algorithms in TypeScript.

Check out the `*.test.ts` files for implementations.

## Setup

Clone the project:

```sh
git clone https://github.com/charliewilco/knxwledge.git
```

### Prerequisites

This project uses Node as it's TypeScript runtime and bun as it's package manager. Install Bun.


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
