# CLAUDE.md

This is a Next.js site documenting Moroccan cuisine, entry by entry — dishes, ingredients, regions, lineages, techniques, glossary. Content lives in `lib/data/*.ts`; entry pages render from those data files.

## Read this before writing any entry

**`docs/editorial.md`** is the voice contract. Every entry inherits it. The short version:

- **Bourdain register, not Bourdain grammar.** Cook's-eye reporting, specific facts (names, prices, times, brands), anti-pretension. No first person. No melancholy mood pieces. No memoir digressions.
- **Acton structure.** Utility above the threshold, memory below. The reader scanning for a recipe never has to wade through history to reach a quantity.
- **The wince test.** Would a Marrakech cook read this and nod, or wince? If wince, rewrite.

The full trap list, worked example, per-field rules, and operational sections all live in `docs/editorial.md`. Open that file first.

## Schema and validation

- Entry types live in `lib/schemas/types.ts`: `Dish`, `Ingredient`, `Region`, `Lineage`, `Technique`, `GlossaryTerm`.
- `scripts/validate-content.ts` runs on `prebuild`. Every published `Dish` / `Ingredient` / `Region` / `Lineage` / `Technique` needs a non-empty `one_line_placement` and at least three valid cross-links in `related_entries`. Glossary terms are exempt.
- New entries land with `published: false`. Flip to `true` once the entry has a one-liner, three cross-links, and either a recipe or a narrative.

## Cross-domain links

Four optional slugs on each entry: `amazighDictionarySlug`, `derbSlug`, `zfritiSku` / `zfriti_skus`, `slowMoroccoSlug`. Rules in `docs/editorial.md`.

## Branch convention

All content development happens on the branch the user names — never push to `main` without explicit instruction.
