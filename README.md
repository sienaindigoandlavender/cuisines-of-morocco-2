# Cuisines of Morocco

The repo behind [cuisinesofmorocco.com](https://cuisinesofmorocco.com) — a
memory-led, recipe-first culinary wiki of Moroccan food.

Part of the Slow Morocco / Dancing with Lions ecosystem. Standalone domain,
deeply cross-linkable, illustration-only (no food photography, ever).

## Stack

- **Next.js 15** (App Router, TypeScript, fully static-generated)
- **React 19**
- **Vercel** for deployment and preview deployments on PRs
- **Hard-coded TypeScript data** (no Supabase, no Google Sheets) — every
  entry lives in `lib/data/*.ts` and is committed to git
- ISR (`revalidate: 3600`) so future content sources can swap in without
  changing page templates

## Entry types

Five content collections, each with its own schema in `lib/schemas/types.ts`:

| Type        | Folder              | Examples                              |
| ----------- | ------------------- | ------------------------------------- |
| Dish        | `lib/data/dishes`   | Meskouta, Tangia, Rfissa              |
| Ingredient  | `lib/data/ingredients` | Smen, Ras el Hanout, Argan         |
| Region      | `lib/data/regions`  | Berkane, Fez, Marrakech               |
| Lineage     | `lib/data/lineages` | Andalusi cuisine, Amazigh kitchen     |
| Technique   | `lib/data/techniques` | Warqa, Charmoula, Preserving lemons |

Each entry renders through the matching page template under
`app/<type>s/[slug]/page.tsx` and is indexed at `app/<type>s/page.tsx`.

## The threshold

Every entry has the same structural inversion:

1. **Above the fold:** utility — recipe, definition, method, lists.
2. **A horizontal rule** (`<hr className="threshold">`) — the visual break.
3. **Below the fold:** memory, lineage, regional variations.
4. **Foot of page:** cross-domain links + a generous "see also" footer.

This is enforced by the page templates and by `scripts/validate-content.ts`
(which requires at least 3 cross-links per published entry).

## Cross-domain linking

Four components in `components/CrossDomainLinks.tsx`:

- `<AmazighDictionaryLink>` → aboutheamazigh.com
- `<DerbLink>` → derb.so
- `<ZfritiLink>` → zfriti.com
- `<SlowMoroccoLink>` → slowmorocco.com

All are wired through the `cross_domain` field on each entry. Empty fields
render nothing.

## Illustration

- `<BotanicalIllustration filename="…" />` — SVG drawings in
  `public/illustrations/`
- `<RegionMap center={…} filename="…" />` — interactive Mapbox map when
  `NEXT_PUBLIC_MAPBOX_TOKEN` is set in the environment; otherwise the
  hand-drawn SVG placeholder in `public/maps/`. The token is wired through
  Vercel project env vars and is not committed to the repo. See
  `.env.example`.

Both fall back to a placeholder SVG so the site renders cleanly while
illustrations are commissioned. **No food photography. Ever.**

## SEO

- `schema.org/Recipe` on every dish page (`lib/seo/structured-data.tsx`)
- `schema.org/Article` on regions and lineages
- `app/sitemap.ts` enumerates every static + dynamic route
- `app/robots.ts` allows all
- Per-page canonical URLs and OpenGraph via `generateMetadata`

Validate the recipe schema with Google's
[Rich Results Test](https://search.google.com/test/rich-results) on
`/dishes/meskouta`.

## Local development

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

```bash
npm run validate:content   # check every entry has placement + cross-links
npm run build              # static-export (prebuild runs validation)
npm run lint
```

## Deployment

Set up on Vercel; preview deployments fire on every PR. Production deploys
from `main`. Custom domain `cuisinesofmorocco.com` to be wired at the DNS
layer.

## Editorial

The voice and structure rules live in [`docs/editorial.md`](docs/editorial.md).
Read it before adding content.

## Out of scope (for now)

Commerce, memberships, comments, newsletter, the KDP book pipeline. See the
strategy doc.

## Repository structure

```
app/                       # App Router pages + layout
  dishes/                  # /dishes index + [slug]
  ingredients/
  regions/
  lineages/
  techniques/
  search/
  layout.tsx
  page.tsx                 # Homepage
  sitemap.ts
  robots.ts
  globals.css
components/                # Shared UI (Nexus-aligned)
  BotanicalIllustration.tsx
  RegionMap.tsx
  CrossDomainLinks.tsx
  CrossLinkFooter.tsx
  EntryHeader.tsx
  NameStack.tsx
  SearchBar.tsx
lib/
  schemas/                 # Entry type definitions
  data/                    # Hard-coded entries — one file per type
  seo/                     # Cross-domain config + JSON-LD helpers
public/
  illustrations/           # Botanical SVGs
  maps/                    # Hand-drawn map SVGs
docs/editorial.md          # Voice + structure contract
scripts/validate-content.ts
```
