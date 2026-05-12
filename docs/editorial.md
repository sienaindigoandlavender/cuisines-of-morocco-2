# Editorial guardrails — Cuisines of Morocco

This document is the voice contract for every entry on the site. If you are
adding or editing content, read it first. The voice section above the line is
the source of truth for how to write. The operational section below it is the
source of truth for how the build runs.

---

## Voice anchors

Two named references. Each does one job. Do not blend them.

### 1. Bourdain — the register (how to write the prose)

Bourdain's authority comes from reporting, not from reverence. He never writes "rich tradition." He writes the price of the bowl, the name of the cook, what's in the back, who's lying. Anti-pretension is reflex, not pose. Punchlines land on the beat, never with a setup.

**Import from Bourdain:**
- Cook's-eye view. Insider, not tourist.
- Specific facts: real names, real prices, real times of day, real brands.
- Anti-pretension. Skewer food-wank wherever it appears.
- Funny on the beat. Dry. Observational. Never quippy.

**Do NOT import from Bourdain:**
- First person. We have an institutional voice — no "I," no biography, no "the cook handed me a glass."
- Late-Bourdain melancholy. The smoking-on-a-balcony-in-Hanoi mode. Mood-piece register kills the wiki.
- Memoir digressions. The entry is about the food, not about the writer's relationship to it.

**The rule: Bourdain's eye, not Bourdain's grammar.**

### 2. Eliza Acton — the structure (how to organise the entry)

Acton invented the modern recipe in 1845: title, ingredient list with quantities, numbered method. Before her, recipes were paragraph soup. She made cooking legible to people who weren't already cooks. That's a wiki principle.

**Import from Acton:**
- Utility on top. The reader gets what they came for in the first screen.
- Legibility as editorial care. No decorative fog around practical information.
- Quantities, times, temperatures, places — concrete and findable.

**The threshold (already in the templates):**
- Above the `<hr className="threshold">`: utility. Recipe, definition, method, where to find it, what it costs.
- Below the threshold: memory, lineage, regional variation, story.

Do not blur the line. Practical-above, cultural-below. The reader scanning for a recipe never has to wade through history to reach a quantity.

### 3. Annabel Abbs — skip

*The Language of Food* (the novel about Acton) is sensual historical fiction — "a feast for the senses." That's the lifestyle-magazine register the brand explicitly avoids. Use Acton (the historical figure, the structural innovator). Do not use Abbs (the novelist, the prose mode).

---

## The replacement moves (writing without "I")

Bourdain's insider authority depends on first person. The wiki can't use first person. Three moves preserve the *effect* without the grammar.

**Move 1 — Witness implied by detail.**
- Bourdain: "I watched him fold the warqa, paper-thin, on a heated dome."
- Cuisines of Morocco: "The warqa folds on a heated dome, paper-thin, the cook's hands moving faster than the eye."
- If the level of detail proves you were there, you don't have to say so.

**Move 2 — Proximity nouns, not pronouns.**
- Bourdain: "The guy next to me at the counter said —"
- Cuisines of Morocco: "The cook will tell you —" / "The butcher says —" / "The woman at the next stall —"
- You're quoting the room without claiming a seat in it.

**Move 3 — Second person, sparingly, for instruction.**
- "Get there before one, or don't bother."
- "Order it the night before. They sell out by ten."
- This is the reader's implied "I." Use it for practical guidance only — not for storytelling.

---

## Trap list (what NOT to do)

- "Discover" / "explore" / "embark" / "journey." Banned.
- Colon-suffix AI-speak: "Tangia: Marrakech's hidden gem." Banned.
- "Rich tradition," "centuries-old," "ancient secrets," "hidden gems." Banned.
- "Visitors to Marrakech will find..." — third-person travel-magazine omniscient. Banned.
- Romantic-melancholy mode. Slow zoom on a sunset. Banned.
- Lessons / morals / wisdom delivered to the reader. The voice guide is gossip, not sermon.
- Backstory-before-utility. The reader who landed on `/dishes/tangia` wants tangia, not a paragraph on the Almohads first.

---

## Worked example — Tangia entry, full structure

This is the canonical pattern. The live page at `/dishes/tangia` is built from this prose; subsequent entries pattern-match against the live page, not the doc.

**Slug:** `tangia`
**Type:** dish

**Title:** Tangia
**Subtitle:** The lazy man's tagine (Marrakech)

### Above the threshold (utility)

> Tangia is the lazy man's tagine. That's what the cooks call it, not what we're calling it.
>
> A narrow-necked clay urn, sealed with paper, dropped into the ash under the hammam furnace for six or seven hours while no one tends it. That's the entire point. The hammam attendant gets a few dirhams; the meat falls off the bone.
>
> **What's in it:** beef or lamb shank, preserved lemon, garlic, cumin, smen, saffron, ras el hanout. Some cooks add a splash of water; the purists don't. The meat releases enough.
>
> **Where to eat it in Marrakech:** Mechoui Alley (Souk Ablouh, just off Jemaa el-Fna) around lunch. Ready-made tangias come out from one o'clock. Get there before one or don't bother — they sell what they sell. Around 80–120 MAD a portion in 2026, served with bread, cumin, salt.
>
> **How to order it:** point. Ask for *nuss* (half) if you're eating alone. They'll split one urn between two if you ask.

### Below the threshold (memory, lineage)

> The dish is bachelor food. The story goes that working men in old Marrakech — porters, bath-house attendants, men without kitchens — would assemble a tangia in the morning, hand it to the *farnatchi* (the hammam stoker), and collect it cooked at the end of the day. The fee was nominal. The labour was none.
>
> Tangia is not tagine. The tagine is a vessel and a cooking style — the conical lid, the slow simmer on the stove. The tangia is a vessel and an *abandonment* — sealed, buried in ash, ignored for hours. The tagine is a wife's dish. The tangia is a single man's. The vocabulary is local, and it has not aged out.
>
> Fez does not eat tangia. Casablanca does not. This is a Marrakech dish, made possible by the city's old hammam economy — every neighbourhood with a furnace, every furnace with hours of waste heat. Restaurants outside Marrakech that serve "tangia" are usually serving a slow-braised shank in a tangia-shaped pot. The ash matters. Without it, it is a stew.

### Footer (cross-links, related entries, see-also)

- Ingredient links: preserved lemon, smen, ras el hanout, saffron
- Technique links: preserving lemons (hammam-furnace cooking, sealing with paper — candidate technique pages)
- Region link: Marrakech
- Cross-domain: SlowMoroccoLink (the Mechoui Alley journey), DerbLink (the souk it's in)

---

## Per-field rules

- **Title:** the name. Arabic transliteration if relevant. No descriptors.
- **Subtitle:** half-open door. Withholds, doesn't explain. Carries SEO keyword if natural.
- **Excerpt (meta description):** 110–155 characters. Concrete, specific, declarative. No "discover."
- **Opening line above the threshold:** scene-first or fact-first. Never "Tangia is a traditional Moroccan dish..." Always something the reader didn't already know.
- **Below-threshold opener:** a small story, an observation, a contradiction. Not a history paragraph.
- **Closing line of an entry:** quiet. No flourish. No "and so the tangia lives on." End on a fact.

---

## A few more editorial principles

- **Ugly-delicious frame.** Plain food and ornate food sit in the same register. No styling. No polishing into anonymity.
- **Paraphrase, don't quote.** No verbatim lifts from other writers — recipes or prose. Absorb, attribute when it matters, link out to the broader ecosystem (Slow Morocco, About The Amazigh, Derb.so, Zfriti).

---

## When in doubt

Ask: would a Marrakech cook read this and nod, or wince?

If wince, rewrite.

---

## Operational rules

The sections below govern how the build runs. They are not about how to write.

### V1 scope

The site opens as a text-led wiki: every entry text-first, weighted tag clouds on each page, the graph itself as the primary visual. Botanical illustrations and photographs come later, woven in entry by entry once the corpus is solid. The `BotanicalIllustration` and `RegionMap` components exist but render only when explicitly turned on (region pages use Mapbox when `NEXT_PUBLIC_MAPBOX_TOKEN` is set in env).

### Entry structure (schematic)

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

### What gets validated automatically

`npm run validate:content` (also runs in `prebuild`) checks:

- Every published entry has a non-empty `one_line_placement`
- Every published entry has at least 3 cross-links in `related_entries`
- Every cross-link points to an entry that actually exists in the data
- Slugs are present

It does **not** check voice. That is on the editor.

### Publishing flow

- New entries land with `published: false`. Only `published: true` entries
  render at build time.
- Once an entry has its one-line placement, at least three cross-links, and
  either a recipe or a narrative, flip the flag.

### Names

Every entry that has Tamazight or Darija names should carry them in the
header. Tamazight names are linked through to `aboutheamazigh.com` via the
`<AmazighDictionaryLink>` component (set `cross_domain.amazighDictionarySlug`
on the entry).

### Cross-domain link rules

- `amazighDictionarySlug` — set whenever a Tamazight name exists
- `derbSlug` — set on Marrakech-specific entries when a ground-level
  recommendation exists
- `zfritiSku` / `zfriti_skus` — set when a Zfriti product corresponds
- `slowMoroccoSlug` — set when an editorial piece on Slow Morocco corresponds

All four are optional. The link block renders nothing if all are empty.

### What is out of scope (for now)

- Cart / commerce
- Membership tiers
- Comments, ratings, user accounts
- Newsletter signups
- KDP book pipeline
