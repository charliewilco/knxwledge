# Repository Guidelines

## Project Structure & Module Organization
- `src/` holds all TypeScript source code for algorithms, data structures, and exercises.
- Subdirectories are organized by topic: `src/ds/`, `src/sorting/`, `src/searching/`, `src/problems/`, `src/javascript/`, and `src/workbooks/`.
- Tests live next to implementations using the `*.test.ts` naming pattern (for example, `src/sorting/merge-sort.test.ts`).
- Entry points and topic re-exports live at the top of `src/` (for example, `src/index.ts`, `src/ds.ts`, `src/sorting.ts`).
- Build configuration is in `config/` (notably `config/tsdown.config.ts`).

## Build, Test, and Development Commands
- `bun install` installs dependencies.
- `bun run build` builds the project using `tsdown`.
- `bun run test` runs the Bun test suite for all `*.test.ts` files.
- `bun run coverage` runs tests with coverage output.
- `bun run lint` runs Biome linting over `./src` (and `./scripts` if present).
- `bun run format` formats `./src`, `./config`, and root JSON files via Biome.

## Coding Style & Naming Conventions
- Formatting and linting are enforced by Biome (`biome.json`).
- Indentation uses tabs, with a 100-character line width.
- Use descriptive, problem-oriented file names like `binary-search.ts` and `binary-search.test.ts`.
- Prefer explicit function exports (for example, `export function mergeSort(...)`).

## Testing Guidelines
- Tests use Bun’s built-in runner (`bun:test`).
- Keep tests co-located with implementation files and name them `*.test.ts`.
- Cover core behavior, edge cases, and input validation where applicable.

## Commit & Pull Request Guidelines
- Commit history follows Conventional Commits (for example, `chore: ...`, `refactor: ...`).
- Keep commits scoped and descriptive of the change.
- PRs should include a concise summary, testing notes (commands run), and link related issues when applicable.
- Include screenshots only when changes affect rendered output (rare for this repo).

## Tooling & Hooks
- Pre-commit checks run via Lefthook (`lefthook.toml`) to lint and format staged files.
- Run `bun run lint` and `bun run format` before opening a PR to match CI expectations.
