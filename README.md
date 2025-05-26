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

This project uses Node as it's TypeScript runtime and pnpm as it's package manager. Install Node and pnpm.

Node via fnm
```
curl -o- https://fnm.vercel.app/install | bash
fnm install 22
```

pnpm:
```sh
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

---

Install the dependencies:

```sh
pnpm install
```

Primarily this project uses native build commands and test runner from [Jest](https://jestjs.io). Additionally, it uses [Biome](https://biomejs.dev/) for linting and formatting.

Run development script

```sh
pnpm build
```

Or run the tests

```sh
pnpm test
```
