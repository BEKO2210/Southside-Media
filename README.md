# Southside Media — Agentur-Website

Offizielle Website der **Southside Media GbR** (Damian Eynius · Belkis Aslani).
Premium-Dark-Mode-Design mit Glassmorphismus, vollständig rechtssicher (DSGVO/DDG/BFSG-orientiert)
und so gebaut, dass **alle Texte zentral** gepflegt werden können.

## Tech-Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (Marken-Theme: Schwarz + Orange→Rot-Verlauf)
- **Framer Motion** (scroll-basierte Animationen)
- **Lucide** (Icons)
- **Static Export** (`output: "export"`) → läuft auf Vercel **und** jedem statischen Host

## Schnellstart

```bash
npm install        # Abhängigkeiten installieren
npm run dev        # Entwicklungsserver → http://localhost:3000
npm run build      # Statischer Export nach ./out
```

## ✏️ Texte ändern (ohne Code)

**Alle** Inhalte liegen zentral in einer einzigen Datei:

```
content/content.json
```

Dort sind Hero, Leistungen, Pakete, Preise, Care, FAQ, Kontakt, Footer sowie
**Impressum** und **Datenschutzerklärung** als reiner Text hinterlegt.
Felder in `[eckigen Klammern]` sind **Platzhalter** und müssen vor dem Live-Gang
ausgefüllt werden (Adresse, Telefon, USt-IdNr., eingesetzte Dienste …).

## Bilder / Medien

Liegen in `public/media/`. Das Hero-Visual (`hero.png`) wurde mit Higgsfield AI generiert.
Zum Austauschen einfach die Datei ersetzen (gleicher Dateiname) oder den Pfad in
`components/hero.tsx` anpassen.

## Projektstruktur

```
app/                # Seiten (Startseite, /impressum, /datenschutz) + Layout
components/          # UI-Komponenten (Navbar, Hero, Pricing, Cookie-Banner …)
content/            # → content.json (ALLE Texte)
lib/                # Hilfsfunktionen + Content-Loader
public/media/       # Bilder & generierte Visuals
docs/               # Interne Business-Dokumente (nicht Teil der Website)
```

## Deployment

Auto-Deploy über **Vercel** (mit diesem GitHub-Repo verbunden) — jeder Push auf `main`
geht live.

### Eigene Domain anbinden (`southside-media.de`)

1. In Vercel → Projekt → **Settings → Domains** → `southside-media.de` hinzufügen.
2. Beim Domain-Anbieter die von Vercel angezeigten DNS-Einträge (A / CNAME) setzen.
3. In `content/content.json` unter `meta.url` die finale Domain eintragen.

Es muss **kein** Code geändert werden — durch den statischen Export ist die Seite
auch auf jedem anderen Webspace lauffähig (Inhalt von `./out` hochladen).

## Rechtliches

Impressum und Datenschutzerklärung sind sorgfältig vorbereitete **Vorlagen** und
ersetzen keine Rechtsberatung. Vor dem Live-Gang bitte alle Platzhalter ausfüllen
und über einen Generator (z. B. eRecht24) oder anwaltlich prüfen lassen.

---

© 2026 Southside Media GbR
