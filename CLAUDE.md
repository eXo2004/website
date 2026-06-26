# Projekt-MD – Website

> Projektspezifische Anweisungen. Haben Vorrang vor der Root-CLAUDE.md.
> Zustand und Kontext stehen in `MEMORY.md` (dieses Ordners).

---

## Projektziel

Persönliche Website mit drei öffentlichen Bereichen:
- **Startseite** — Bio, Highlights, Einstieg
- **Projekte / Portfolio** — abgeschlossene und aktive Arbeiten
- **Blog** — Artikel und Gedanken

Später geplant: privater Dashboard-Bereich (mit Login).

---

## Tech-Stack

- Framework: **Next.js** (App Router, TypeScript)
- Styling: **Tailwind CSS**
- Blog-Inhalte: **MDX** (Markdown-Dateien in `/content/blog/`)
- Hosting: **Vercel** (Free Tier, via GitHub)
- Kein Backend, keine Datenbank — alles dateibasiert

---

## Projektpfad

Der Next.js-Code liegt in:
`C:\Users\Nikolas\AI\Projekte\Website\app\`

---

## Anweisungen

- Komponenten klein und lesbar halten — Nikolas hat grundlegende Web-Kenntnisse
- Neue Seiten immer unter `app/` anlegen (App Router-Konvention)
- Blog-Posts als `.mdx`-Dateien in `content/blog/` ablegen
- Projekte als Daten-Array in `lib/projects.ts` pflegen
- Beim Deployment: `npm run build` muss fehlerfrei durchlaufen
