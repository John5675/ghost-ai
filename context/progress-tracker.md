# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Design system and UI primitives complete (feature spec `01-design-system.md`)

## Current Goal

- Begin the next feature unit (auth, projects, or canvas foundation).

## Completed

- `01-design-system.md`:
  - Configured shadcn/ui (radix base, `nova` preset — Lucide + Geist); wrote `components.json`.
  - Added UI primitives: Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea in `components/ui/` (unmodified).
  - Installed `lucide-react`; `radix-ui`, `class-variance-authority`, `clsx`, `tailwind-merge`, `tw-animate-css` pulled in.
  - `lib/utils.ts` provides the `cn()` Tailwind class merge helper.
  - Rewrote `app/globals.css`: dark-only theme. Defined the `context/ui-context.md` design tokens, mapped them to documented Tailwind utilities (`bg-base`, `text-copy-primary`, `border-surface-border`, `text-brand`, `bg-accent-dim`, etc.), and mapped shadcn's semantic tokens onto the dark palette so the generated components render dark without modification. Fixed the broken `--font-sans` self-reference (now wired to `--font-geist-sans`/`--font-geist-mono`).
  - Added `dark` class to `<html>` in `app/layout.tsx` so the components' `dark:` variants activate; updated placeholder metadata.
  - Verified: `tsc --noEmit` clean and `next build` succeeds (CSS compiles, all imports resolve). No default light styling.

## In Progress

- None.

## Next Up

- Add the next planned feature unit here.

## Open Questions

- Add unresolved product or implementation questions here.

## Architecture Decisions

- Add decisions that affect the system design or data model.

## Session Notes

- shadcn components reference their own semantic tokens (`bg-background`, `text-foreground`, etc.); these are mapped onto the dark palette in `globals.css`, so do not expect them to use the `bg-base`/`text-copy-*` utilities directly. Use the project utilities in app-level components.
- `globals.css` imports `shadcn/tailwind.css` (resolves via the `shadcn` package `exports`) for the animations and `data-*` custom variants the radix-nova components require — keep it.
- `next build` warns about multiple lockfiles (a stray `/Users/johnhuynh/package-lock.json` above the repo). Pre-existing/environmental, not from this work.
