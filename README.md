# Portfolio

Personal portfolio site with a terminal-inspired interface - experience, projects,
skills and contact details, built as a single scrolling page.

**Stack:** React 19 · TypeScript · Vite · Tailwind CSS v4

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:5173.

## Scripts

- `npm run dev` - dev server with hot module replacement
- `npm run build` - typecheck, then build to `dist/`
- `npm run preview` - serve the production build locally
- `npm run lint` - ESLint
- `npm run format` - Prettier

## Structure

```
src/
├── components/   one component per page section
├── models/       shared TypeScript interfaces for section content
├── assets/       images
└── App.tsx       composes the sections in page order
```

## In progress

- Mobile layout
- Deployment
