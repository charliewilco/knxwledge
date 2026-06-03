# Repository Guidelines

## Project Structure & Module Organization
- `src/` holds all TypeScript source code for algorithms, data structures, and exercises.
- Subdirectories are organized by topic: `src/ds/`, `src/sorting/`, `src/searching/`, `src/problems/`, `src/javascript/`, and `src/workbooks/`.
- Tests live next to implementations using the `*.test.ts` naming pattern (for example, `src/sorting/merge-sort.test.ts`).
- Entry points and topic re-exports live at the top of `src/` (for example, `src/index.ts`, `src/ds.ts`, `src/sorting.ts`).
- Build configuration is in root-level config files, notably `tsdown.config.ts`,
  `tsconfig.json`, `biome.json`, and `lefthook.toml`.

## Build, Test, and Development Commands
- `npm install` installs dependencies.
- `npm run build` builds the project using `tsdown`.
- `npm run test` runs Node's built-in test runner for all `*.test.ts` files.
- `npm run coverage` runs tests with Node's coverage output.
- `npm run typecheck` runs TypeScript with `noEmit`.
- `npm run lint` runs Biome linting over `./src`.
- `npm run format` formats `./src`, `tsdown.config.ts`, and root JSON files via Biome.
- Use Node.js 24.11.0 or newer; the test scripts rely on Node's built-in
  TypeScript transform support.

## Coding Style & Naming Conventions
- Formatting and linting are enforced by Biome (`biome.json`).
- Indentation uses tabs, with a 100-character line width.
- Use descriptive, problem-oriented file names like `binary-search.ts` and `binary-search.test.ts`.
- Prefer explicit function exports (for example, `export function mergeSort(...)`).

## Testing Guidelines
- Tests use Node’s built-in runner through the repo-local `#test` helper.
- Keep tests co-located with implementation files and name them `*.test.ts`.
- Cover core behavior, edge cases, and input validation where applicable.

## Commit & Pull Request Guidelines
- Commit history follows Conventional Commits (for example, `chore: ...`, `refactor: ...`).
- Keep commits scoped and descriptive of the change.
- PRs should include a concise summary, testing notes (commands run), and link related issues when applicable.
- Include screenshots only when changes affect rendered output (rare for this repo).

## Tooling & Hooks
- Pre-commit checks run via Lefthook (`lefthook.toml`) and Biome.
- Run `npm run lint` and `npm run format` before opening a PR to match CI expectations.
