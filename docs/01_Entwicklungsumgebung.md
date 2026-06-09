# Southside Media — Entwicklungsumgebung & Toolset

> Ziel: Eine professionelle, schlanke Umgebung, mit der du Kunden-Websites
> (Starter / Business / Premium) effizient, DSGVO-konform und BFSG-tauglich bauen kannst.
> Stand: Juni 2026. Preise sind Richtwerte, vor Kauf prüfen.

---

## 0. Grundsatz-Entscheidung: Auf welcher Basis baust du?

Eure Pakete decken zwei Welten ab — dein Stack sollte beide können:

| Paket | Sinnvolle Technik | Warum |
|-------|-------------------|-------|
| **Starter** (Onepager / bis 5 Seiten) | WordPress + Page-Builder **oder** statische Site (Astro/Next + Tailwind) | Schnell, günstig, wartungsarm |
| **Business** (bis 10 Seiten, „selbst pflegbar", CMS) | **WordPress** (Bricks/Elementor + ACF) | Kunde kann selbst pflegen — steht so im Angebot |
| **Premium** (Shop / Web-App / mehrsprachig / CRM) | WordPress+WooCommerce **oder** Next.js + Headless-CMS | Skalierbarkeit, Integrationen |

**Empfehlung für den Start:** WordPress als Hauptsystem (Kunden kennen es, „selbst pflegbar"
ist erfüllt, riesiges Ökosystem) + optional moderner Stack (Next.js/Astro) für hochwertige
Onepager und Premium-Projekte.

---

## 1. Hardware & Betriebssystem
- [ ] Leistungsfähiger Laptop/PC (16 GB RAM+, SSD) — du hast bereits Linux
- [ ] Zweiter Monitor (Design links, Code/Browser rechts) — größter Produktivitäts-Boost
- [ ] Externes Backup (NAS oder Cloud) für Kundenprojekte & Quellcode

## 2. Code-Editor & lokale Entwicklung
- [ ] **VS Code** oder **Cursor** (KI-Editor) — Hauptwerkzeug
- [ ] **Git** + GitHub (habt ihr ✔) — jedes Kundenprojekt = eigenes Repo (privat!)
- [ ] **Lokale WordPress-Umgebung**: **LocalWP** (by Flywheel, am einfachsten) oder **DDEV** (Docker-basiert, professioneller)
- [ ] **Node.js** (LTS, v24) + **pnpm** — für moderne Stacks & Build-Tools
- [ ] **Docker** — saubere, reproduzierbare Umgebungen pro Projekt

## 3. Frontend-Stack (moderne Sites)
- [ ] **Next.js** (App Router) oder **Astro** (ideal für schnelle Marketing-Sites)
- [ ] **Tailwind CSS** + **shadcn/ui** — schnelles, hochwertiges UI
- [ ] **TypeScript** — weniger Bugs, professioneller

## 4. WordPress-Stack (Haupt-Geschäft)
- [ ] **WordPress** (Core)
- [ ] **Page-Builder**: **Bricks Builder** (modern, sauberer Code, ~Lifetime-Lizenz) ODER **Elementor Pro** (verbreiteter)
- [ ] **ACF Pro** (Advanced Custom Fields) — strukturierte Inhalte
- [ ] **Rank Math** oder **Yoast** — On-Page-SEO (steht im Business-Paket)
- [ ] **WP Rocket** — Performance/Caching (steht im Business-Paket)
- [ ] **UpdraftPlus** / **WP Migrate** — Backups & Umzüge
- [ ] **Sicherheits-Plugin** (Wordfence / Solid Security) — für Care-Pakete
- [ ] Eigenes **Starter-Theme / Boilerplate** — spart bei jedem Projekt Tage

## 5. Design & Branding (für „Logo- & Branding-Paket")
- [ ] **Figma** — UI/Wireframes/Mockups (kostenlos für Einzelnutzer)
- [ ] **Canva Pro** — schnelle Grafiken, Social, Mockups
- [ ] **Affinity Suite** (Designer/Photo, Einmalkauf) oder Adobe CC
- [ ] **Bildquellen**: Unsplash, Pexels (gratis), iStock/Adobe Stock (Premium-Kunden)
- [ ] **Icons**: Lucide, Heroicons, Phosphor

## 6. SEO, Performance & Testing
- [ ] **Google Search Console** + **Google Analytics 4** (oder DSGVO-freundlich: Plausible/Matomo)
- [ ] **Google PageSpeed Insights** / **Lighthouse** — Performance-Nachweis
- [ ] **Screaming Frog** (SEO-Crawler, gratis bis 500 URLs)
- [ ] **Ubersuggest / Ahrefs / SE Ranking** — Keyword-Recherche (für „On-Page-SEO inkl. Keywords")
- [ ] **BrowserStack** — Cross-Browser-/Geräte-Tests

## 7. Barrierefreiheit (BFSG — Pflicht ab 2025, steht im Business-Paket!)
- [ ] **WAVE** (wave.webaim.org) — Accessibility-Check im Browser
- [ ] **axe DevTools** (Browser-Extension)
- [ ] **Lighthouse Accessibility-Audit**
> ⚠️ Das **BFSG** (Barrierefreiheitsstärkungsgesetz) gilt seit 28.06.2025 für viele
> Unternehmen. Euer „BFSG-Barrierefreiheit-Check" ist ein echtes Verkaufsargument — beherrsche es.

## 8. Rechtssicherheit (für „Rechtssichere Pflichtseiten")
- [ ] **eRecht24** (Partner-Account) — Impressum-/Datenschutz-/Cookie-Generatoren, abmahnsicher
- [ ] **Cookie-Consent-Tool**: Borlabs Cookie (DE, WordPress) oder Usercentrics / CookieYes
- [ ] AV-Verträge-Vorlage (Auftragsverarbeitung) für Hosting & Tools

## 9. Projekt- & Geschäftsorganisation (du + dein Freund)
- [ ] **Notion** oder **Asana/Trello** — Projekte, Kunden-Pipeline, Aufgaben
- [ ] **Passwort-Manager**: Bitwarden (gratis/günstig) oder 1Password — Kundenzugänge **niemals** im Klartext
- [ ] **Buchhaltung/Rechnungen (DE)**: lexoffice oder sevDesk — wichtig für GbR/Gewerbe
- [ ] **E-Mail + Domain** für euch: eigene Profi-Adresse (kontakt@southside-media.de ✔)
- [ ] **Vertrags-/Angebotsvorlagen**: Festpreis-Angebot, Wartungsvertrag (Care), AGB

## 10. KI-Unterstützung (Effizienz-Hebel)
- [ ] **Claude / ChatGPT** — Texte, Code, Briefings
- [ ] **Claude Code / Cursor** — Entwicklung beschleunigen
- [ ] Bild-/Logo-KI für Entwürfe (Midjourney etc.)

---

## Minimal-Setup zum Sofort-Loslegen (kostenarm)
VS Code · Git/GitHub · LocalWP · WordPress + Bricks/Elementor + ACF · Figma ·
Rank Math · WP Rocket · Bitwarden · Notion · eRecht24 · GA4/Plausible · WAVE

> Diese ~12 Tools reichen, um die ersten Starter- und Business-Projekte sauber zu liefern.
> Alles andere kaufst du dazu, wenn das erste Projekt es bezahlt.
