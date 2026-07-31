# M&M Hairdesign — Next.js

Migration der statischen Website (`../mm-hairdesign`) auf Next.js 16 (App Router, TypeScript, Tailwind CSS 4, Framer Motion). Corporate Identity (Farben `#ae1548` / `#f51d65` / `#690d2b` / `#0d0d0d`, Fonts Montserrat + Roboto) wurde 1:1 übernommen, UX komplett modernisiert.

## Entwicklung

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Produktions-Build (Turbopack)
npx eslint src     # Lint
```

## ⚠️ Vor dem Livegang: Platzhalter ersetzen

Alle personenbezogenen Daten sind bewusst Platzhalter. **Eine Datei genügt:**

| Datei | Was ersetzen |
|---|---|
| `src/config/site-config.ts` | Alle `PLATZHALTER_*`-Werte (Telefon, WhatsApp, E-Mail, Straße, PLZ, USt-ID, Inhaber:innen, Aufsichtsbehörde) |
| `apphosting.yaml` | `NEXT_PUBLIC_GA_ID: "G-XXXXXXXXXX"` → echte GA4 Measurement ID |
| `.firebaserc` | `PLATZHALTER_FIREBASE_PROJECT_ID` → echte Firebase-Projekt-ID |
| `.env.local` | GA-ID nur für lokale Tests |

Alle Komponenten lesen ausschließlich aus `site-config.ts` — nichts ist hartkodiert.

## Google Analytics (GA4)

- ID kommt aus `NEXT_PUBLIC_GA_ID` (Build-Zeit-Variable) → `siteConfig.analytics.googleAnalyticsId`.
- **DSGVO-konform consent-gated**: Das gtag-Script wird erst geladen, nachdem der Besucher im Cookie-Banner (`vanilla-cookieconsent`) die Kategorie „Analyse" akzeptiert hat (`src/components/analytics/GoogleAnalytics.tsx` + `CookieManager.tsx`).
- Events: `trackEvent()` aus `src/lib/analytics.ts`. Bereits verdrahtet: `book_click` (Navbar/Hero/Floating/Contact/Mobile-Menü), `shop_click`, `job_apply_click`, `team_member_view`.
- Google Maps ist ebenfalls per 2-Klick-Lösung gated (`ConsentGatedMap.tsx`).

## Deployment — Firebase App Hosting

```bash
firebase apphosting:backends:create   # einmalig, Backend "mm-hairdesign"
git push                              # Deploy via verbundenem GitHub-Repo
```

Konfiguration: `firebase.json`, `apphosting.yaml` (Cloud-Run-Settings + env), `.firebaserc`.

## Offene Punkte

- **`/impressum` und `/datenschutz` fehlen noch** (bewusst übersprungen). Footer, Cookie-Banner und Map-Hinweis verlinken bereits darauf → vor Livegang anlegen. Quelltexte: `../mm-hairdesign/impressum.html` und `dataprivacy.html`; Datenschutz um einen Google-Analytics-Abschnitt (Einwilligung, Art. 6 Abs. 1 lit. a DSGVO) ergänzen.
- Google-Reviews sind statisch in `src/data/reviews.ts` gepflegt (wie zuvor in `reviews.json`).

## Struktur

```
src/
├── app/               # layout.tsx (Fonts, Metadata, JSON-LD, GA, Cookie-Banner), page.tsx
├── components/
│   ├── analytics/     # GoogleAnalytics (consent-gated), CookieManager
│   ├── icons/         # WhatsApp-, Instagram-, Facebook-SVGs
│   ├── layout/        # Navbar (Glass, scroll-aware), Footer, FloatingBookButton, LegalLayout
│   ├── sections/      # Hero, About, Services, Team(+Modal), Shop, Reviews, Inspirations, Jobs, Contact, Social, CancellationPolicy
│   └── ui/            # Reveal, Container, SectionHeading, MagneticButton, BeforeAfterSlider, ConsentGatedMap
├── config/            # site-config.ts (zentrale Daten + Platzhalter), cookie-config.ts
├── data/              # team.ts, services.ts, reviews.ts, before-after.ts, navigation.ts
├── lib/               # fonts.ts (next/font/local), analytics.ts (trackEvent)
└── assets/            # Bilder (next/image-optimiert), Fonts (Montserrat/Roboto TTF)
```
