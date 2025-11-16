# Secret Santa Go - AI Agent Instructions

## Project Overview

This is a Progressive Web App (PWA) for organizing Secret Santa gift exchanges. The stack is **Preact + Vite + TailwindCSS v4 + TypeScript** with full PWA capabilities including offline support and auto-updates.

## Architecture & Key Technologies

### Preact Setup (React Alternative)

- This project uses **Preact**, not React, but with React compatibility aliases configured in `tsconfig.app.json`
- JSX configuration: `"jsxImportSource": "preact"` - always use this for new components
- Import from `preact` directly: `import { render } from 'preact'`
- For hooks/lifecycle: use standard preact imports (they're compatible with React patterns)

### PWA Configuration

The app is a full-featured PWA configured in `vite.config.ts`:

- **Auto-update strategy**: `registerType: "autoUpdate"` with hourly update checks (60min interval in `PWABadge.tsx`)
- **Service Worker**: Managed by `vite-plugin-pwa`, caches all static assets (`**/*.{js,css,html,svg,png,ico}`)
- **Manifest**: French language app "Secret Santa Go" with theme color `#ffffff`
- **PWA Assets**: Generated from `public/favicon.svg` using `@vite-pwa/assets-generator` with 2023 preset

### Styling: TailwindCSS v4

- **Important**: This is TailwindCSS v4, not v3 - uses the new Vite plugin architecture
- Configuration via `@tailwindcss/vite` plugin in `vite.config.ts`
- Global import in `src/index.css`: `@import "tailwindcss";`
- No separate `tailwind.config.js` file needed - v4 uses CSS-based config

## Project Structure

```
src/
  main.tsx          # Entry point - renders <App /> to #app
  app.tsx           # Root component - currently only contains <PWABadge />
  PWABadge.tsx      # PWA update notification toast with reload/close actions
  index.css         # Global styles with TailwindCSS v4 import
  app.css           # Currently empty - component-level styles
```

## Development Workflows

### Commands

- **Dev server**: `npm run dev` - starts Vite dev server (PWA disabled in dev mode)
- **Build**: `npm run build` - runs TypeScript compiler (`tsc -b`) then Vite build
- **Preview**: `npm run preview` - preview production build locally

### TypeScript Configuration

- Split config: `tsconfig.json` references `tsconfig.app.json` (src) and `tsconfig.node.json` (config files)
- **Strict mode enabled** with aggressive linting: `noUnusedLocals`, `noUnusedParameters`, `noUncheckedSideEffectImports`
- Bundler module resolution with `allowImportingTsExtensions: true`

## Key Patterns & Conventions

### PWA Update Pattern

The `PWABadge.tsx` component demonstrates the project's update strategy:

- Uses `useRegisterSW` hook from `virtual:pwa-register/preact` (Preact-specific import)
- Registers periodic sync on service worker activation (not on install)
- Two states: `offlineReady` (app cached) and `needRefresh` (new version available)
- Manual reload trigger via `updateServiceWorker(true)` when user clicks "Reload"

### Component Structure

- Use `.tsx` extension for all components
- Functional components with Preact hooks
- Export named functions: `export function ComponentName() { ... }`
- CSS modules via separate `.css` files (e.g., `PWABadge.css`)

### File Extensions

- Always use explicit `.tsx` extensions in imports (enabled by `allowImportingTsExtensions`)
- Example: `import { App } from './app.tsx'`

## Important Dependencies

- `preact` v10.27 - core framework
- `vite-plugin-pwa` v1.1 - PWA functionality
- `workbox-window` v7.3 - service worker client library
- `tailwindcss` v4.1 - styling (note: v4, not v3!)
- Sharp overrides for PWA asset generation (v0.33.5+)

## What's NOT Here Yet

- No routing library (single page app currently)
- No state management library
- No backend/API integration
- No test suite configured
- App functionality is minimal (only PWA badge implemented)

## When Adding Features

1. Create new components in `src/` with `.tsx` extension
2. Import and use in `app.tsx` (the root component)
3. Use Preact hooks (they work like React hooks)
4. Style with TailwindCSS v4 utility classes directly in JSX
5. Any new service worker patterns should follow the periodic sync approach in `PWABadge.tsx`
