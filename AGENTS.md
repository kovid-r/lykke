# AGENTS.md

## Cursor Cloud specific instructions

This is a static website for Lykke Group built with **Eleventy (11ty)** and **Tailwind CSS**. There is no backend, database, or external service dependency.

### Running the dev server

```
npm start
```

This runs both the Eleventy dev server and Tailwind CSS watcher in parallel via `npm-run-all`. The site is served at `http://localhost:8080` with live reload (BrowserSync UI at port 3001).

### Key caveats

- **Node.js 16 is required** (specified in `.nvmrc`). The project uses Eleventy v0.12.x and Tailwind CSS v2.x which are not compatible with newer Node versions.
- There are **no lint, test, or build scripts** defined in `package.json`. The only scripts are `start`, `watch:eleventy`, and `watch:tailwind`.
- The Tailwind CSS watcher uses `postcss` CLI with a config at `./styles/tailwind.config.js` (not the root). Tailwind runs in JIT mode.
- Built output goes to `_site/`. This directory is gitignored.
