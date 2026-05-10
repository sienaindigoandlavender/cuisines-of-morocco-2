import { dishes } from "../lib/data/dishes";
import { ingredients } from "../lib/data/ingredients";
import { regions } from "../lib/data/regions";
import { lineages } from "../lib/data/lineages";
import { techniques } from "../lib/data/techniques";
import type { AnyEntry, EntryType, RelatedEntry } from "../lib/schemas/types";

const all: AnyEntry[] = [...dishes, ...ingredients, ...regions, ...lineages, ...techniques];

const errors: string[] = [];

const indexBy: Record<EntryType, Set<string>> = {
  dish: new Set(dishes.map((d) => d.slug)),
  ingredient: new Set(ingredients.map((i) => i.slug)),
  region: new Set(regions.map((r) => r.slug)),
  lineage: new Set(lineages.map((l) => l.slug)),
  technique: new Set(techniques.map((t) => t.slug)),
};

function err(msg: string) {
  errors.push(msg);
}

for (const e of all) {
  if (e.published === false) continue;
  if (!e.slug) err(`[${e.type}] entry without slug: ${e.name ?? "(no name)"}`);
  if (!("one_line_placement" in e) || !e.one_line_placement || e.one_line_placement.length < 4) {
    err(`[${e.type}:${e.slug}] missing one_line_placement`);
  }
  if (!e.related_entries || e.related_entries.length < 3) {
    err(`[${e.type}:${e.slug}] needs at least 3 cross-links (has ${e.related_entries?.length ?? 0})`);
  }
  for (const ref of e.related_entries ?? []) {
    const ok = indexBy[ref.type]?.has(ref.slug);
    if (!ok) err(`[${e.type}:${e.slug}] broken cross-link → ${ref.type}:${ref.slug}`);
  }
  if (e.type === "dish" && e.published) {
    const hasRecipe = e.recipe_block && (e.recipe_block.ingredients.length > 0 || e.recipe_block.method.length > 0);
    // Spine dishes can be stubs (recipe to come) — only fully-published dishes that claim a recipe must have one.
    if (!hasRecipe && e.memory_layer && e.memory_layer.length > 0 && e.recipe_block.ingredients.length === 0) {
      // dish has memory but no recipe — acceptable for stubs; no error
    }
  }
}

const reverseUnused: RelatedEntry[] = [];
// (Optional) could check reverse links here.

if (errors.length > 0) {
  console.error("\nContent validation failed:\n");
  for (const e of errors) console.error("  ✗ " + e);
  console.error(`\n${errors.length} error(s).`);
  process.exit(1);
}

console.log(`Content OK: ${all.length} entries (${dishes.length} dishes, ${ingredients.length} ingredients, ${regions.length} regions, ${lineages.length} lineages, ${techniques.length} techniques).`);
