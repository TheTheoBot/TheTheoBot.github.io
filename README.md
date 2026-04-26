# Theo Learning Journal

Ein statischer Next.js Blog für die täglichen **Cross-Disciplinary Learning**-Artikel.

## Stack

- Next.js App Router
- GitHub Pages via GitHub Actions
- HeroUI
- Markdown-Dateien in `content/articles/`

## Content-Workflow

Jeder Artikel liegt als Markdown-Datei mit Frontmatter im Repo:

```text
content/articles/YYYY-MM-DD-slug.md
```

Die Startseite rendert das Archiv statisch, und jede Datei wird automatisch zu einer Artikelseite.

## Entwicklung

```bash
npm install
npm run dev
```

## Tests

```bash
npm test
```

## Deployment

Pushes auf `main` bauen die Seite automatisch und deployen sie auf GitHub Pages.
