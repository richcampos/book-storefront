# Copilot Instructions for book-storefront

## Project Summary

This is a Spanish-language, single-page React storefront for the "5 reglas de oro de Campos" / M.E.T.A. book. It is built with React 18, TypeScript, Vite 5, and Tailwind CSS 3, and is configured for static deployment to GitHub Pages.

## Build and Local Development

- Install dependencies: `npm ci`
- Start the Vite development server: `npm run dev`
- Create the production build: `npm run build`
- Preview the production build locally: `npm run preview`
- The build runs `tsc -b` before `vite build`; use `npm run build` to catch both TypeScript and bundling issues.
- GitHub Actions uses Node.js 20 and runs `npm ci` followed by `npm run build` on pushes to `main`.

There is currently no test runner, test script, lint script, or lint configuration in `package.json`. Therefore, there is no single-test command to run.

## Architecture

- `src/main.tsx` mounts `<App />` in React `StrictMode` and imports the global Tailwind/CSS entry point.
- `src/App.tsx` owns top-level UI state: selected format, reader visibility, cart visibility, and cart items. It composes the page sections and passes callbacks into child components.
- `src/components/` contains section and overlay components. Components generally receive typed props and use local state only for component-specific interactions.
- `src/data/bookData.ts` is the central content and domain-data module. It defines shared interfaces and exports book metadata, format options, table-of-contents data, chapter excerpt pages, bonuses, reviews, and FAQs.
- Static public assets belong in `public/`; the page currently loads the cover at `public/book-cover.jpg` via the root-relative path `book-cover.jpg`.
- `vite.config.ts` sets `base: './'` for relative asset paths, which is required for the GitHub Pages deployment layout.
- `.github/workflows/deploy.yml` builds `dist/` and deploys it to GitHub Pages.

## Content and Composition Conventions

- Preserve the Spanish-language storefront copy and navigation labels unless the task explicitly changes locale or copy.
- Use the shared types and exports from `src/data/bookData.ts` for bookstore content. Do not duplicate format, chapter, author, or excerpt structures in components.
- `FormatId` is the canonical format identifier used in cart and format-selection state. `BookFormat` contains the display and pricing details.
- `App.tsx` is the composition point for the active page. Several sections and cart controls are deliberately present as source/commented JSX. When enabling a section, restore its import and render it from `App.tsx` rather than creating a parallel composition mechanism.
- Chapter excerpts use `CHAPTER_ONE_EXCERPT.pages`; reader pagination is based on `activePageIdx`, and theme/font preferences are local to `ChapterReaderModal`.

## Styling Conventions

- Use Tailwind utility classes in TSX and keep custom shared styles in `src/index.css` or theme extensions in `tailwind.config.js`.
- Reuse the custom palette names: `alabaster`, `obsidian`, `vermilion` (including `vermilion-hover` and `vermilion-light`), and `amber-gold`.
- Reuse the configured font families: `font-display`, `font-sans`, `font-serif`, and `font-reader`.
- Responsive layouts use the existing Tailwind breakpoint patterns, especially `sm`, `md`, and `lg`, with container widths `max-w-7xl`, `max-w-6xl`, or `max-w-5xl` depending on section scale.
- Tailwind scans `index.html` and `src/**/*.{js,ts,jsx,tsx}`; changes to generated class names must remain visible to that content globs.
- Icons come from `lucide-react`; add icons through its existing named imports.

## TypeScript and Component Patterns

- Strict TypeScript is enabled. Keep props explicitly typed and exported types should live beside their owning component or in `src/data/bookData.ts`.
- Components use named exports (for example `export const HeroSection`) and `App` is the page-level default export.
- Keep event handlers in `App.tsx` for state shared across sections. Pass only the required callbacks or state to child components.
- Keep interactive modal/drawer components rendered at the page root and control them with booleans; they return `null` when closed.
