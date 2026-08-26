# AGENTS.md

## Project Rules

- Check the current codebase before changing anything. Read the files and callers related to the requested change, then follow the existing React, Vite, Tailwind, Radix/Shadcn, hook, and localization patterns.
- Keep changes minimal. Reuse existing components, helpers, hooks, constants, and styling conventions before adding new code.
- Preserve unrelated user work. Do not revert, rename, or reformat files outside the task scope.
- Prefer deletion or small edits over new abstractions. Add a dependency only when the installed stack cannot reasonably solve the problem.

## Required Checks

- Run `npm run lint` after every code change before reporting completion.
- For behavior or UI changes, also run the smallest relevant verification that can catch bugs, usually `npm run build`.
- If a change affects interactive UI, responsive layout, theme, language, dialogs, drawers, links, or assets, inspect the affected flow after the edit and check likely breakpoints manually or with a browser when available.
- Before finishing, review the diff and explicitly look for possible bugs from the change: broken imports, stale file paths, missing translations, incorrect responsive behavior, theme regressions, dead code, console warnings, and changed public links.
- If a required check cannot be run or fails because of pre-existing issues, report that clearly with the command and the relevant failure.

## Implementation Notes

- Use `rg` / `rg --files` for repo inspection.
- Use the existing `@` alias for imports from `src` when that matches nearby code.
- Keep UI copy bilingual by updating both `src/i18n/locales/en.js` and `src/i18n/locales/id.js` when visible text changes.
- Keep portfolio data centralized in existing constants or data files; do not scatter project, social, or experience data through components.
- Do not leave generated build output or temporary files in the diff unless the user asked for them.
