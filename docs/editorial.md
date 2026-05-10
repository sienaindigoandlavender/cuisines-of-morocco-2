# Editorial guardrails — Cuisines of Morocco

This document is the voice contract for every entry on the site. If you are
adding or editing content, read it first. The principles below are also
enforced (where they can be) by the content validator in `scripts/validate-content.ts`.

## The five rules

1. **Memory-led.** Every entry begins with a recipe or a definition, then
   passes the threshold and turns to memory. The memory layer is where the
   dish lives — who makes it, when, for whom, and what it means.

2. **Recipe-first structure.** Utility above the fold; rabbit-hole below.
   A reader who wants to cook should be cooking inside thirty seconds. A
   reader who wants to wander should be able to wander for an hour.

3. **Ugly-delicious frame.** The food is not styled. The voice is not
   polished into anonymity. We write plainly about plain food and ornate
   food in the same register.

4. **V1 is wiki-structured.** The site opens as a wiki: every entry is
   text-led, every page carries a weighted tag cloud, the graph itself is
   the primary visual. Botanical illustrations and photographs come later,
   woven into entries one by one once the corpus is solid. For now
   `BotanicalIllustration` and `RegionMap` exist as components but are
   only rendered when explicitly turned on (the region pages use Mapbox
   when `NEXT_PUBLIC_MAPBOX_TOKEN` is set in env).

5. **Paraphrase, don't quote. Link generously.** We do not lift recipes or
   prose verbatim from other writers. We absorb, paraphrase, attribute when
   it matters, and link out to the broader ecosystem (Slow Morocco, About
   The Amazigh, Derb.so, Zfriti) wherever a connection exists.

## Entry structure

Every entry has the same shape, regardless of type:

```
[Title]
[One-line placement] — italicized, single line

[Utility content — recipe / definition / method / lists]

— threshold (horizontal rule with ✻) —

[Memory layer prose]
[Lineage / placement prose]
[Regional variations, where relevant]

[Cross-domain links — Tamazight dictionary, Derb, Zfriti, Slow Morocco]
[See also — minimum 3 cross-links, ideally 5+, across multiple entry types]
```

## What gets validated automatically

`npm run validate:content` (also runs in `prebuild`) checks:

- Every published entry has a non-empty `one_line_placement`
- Every published entry has at least 3 cross-links in `related_entries`
- Every cross-link points to an entry that actually exists in the data
- Slugs are present

It does **not** check voice. That is on the editor.

## Publishing flow

- New entries land with `published: false`. Only `published: true` entries
  render at build time.
- Once an entry has its one-line placement, at least three cross-links, and
  either a recipe or a narrative, flip the flag.

## Names

Every entry that has Tamazight or Darija names should carry them in the
header. Tamazight names are linked through to `aboutheamazigh.com` via the
`<AmazighDictionaryLink>` component (set `cross_domain.amazighDictionarySlug`
on the entry).

## Cross-domain link rules

- `amazighDictionarySlug` — set whenever a Tamazight name exists
- `derbSlug` — set on Marrakech-specific entries when a ground-level
  recommendation exists
- `zfritiSku` / `zfriti_skus` — set when a Zfriti product corresponds
- `slowMoroccoSlug` — set when an editorial piece on Slow Morocco corresponds

All four are optional. The link block renders nothing if all are empty.

## What is out of scope (for now)

- Cart / commerce
- Membership tiers
- Comments, ratings, user accounts
- Newsletter signups
- KDP book pipeline
