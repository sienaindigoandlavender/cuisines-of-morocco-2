import { dishes } from "./dishes";
import { ingredients } from "./ingredients";
import { regions } from "./regions";
import { lineages } from "./lineages";
import { techniques } from "./techniques";
import { glossaryTerms } from "./glossary";
import { produce } from "./produce";
import type {
  AnyEntry,
  Dish,
  EntryType,
  GlossaryCategory,
  GlossaryTerm,
  Ingredient,
  Lineage,
  Produce,
  ProduceKind,
  Region,
  RelatedEntry,
  Technique,
} from "@/lib/schemas/types";

export { dishes, ingredients, regions, lineages, techniques, glossaryTerms, produce };

export function getPublishedDishes(): Dish[] {
  return dishes.filter((d) => d.published);
}
export function getPublishedIngredients(): Ingredient[] {
  return ingredients.filter((i) => i.published);
}
export function getPublishedRegions(): Region[] {
  return regions.filter((r) => r.published);
}
export function getPublishedLineages(): Lineage[] {
  return lineages.filter((l) => l.published);
}
export function getPublishedTechniques(): Technique[] {
  return techniques.filter((t) => t.published);
}

export function getDish(slug: string): Dish | undefined {
  return getPublishedDishes().find((d) => d.slug === slug);
}
export function getIngredient(slug: string): Ingredient | undefined {
  return getPublishedIngredients().find((i) => i.slug === slug);
}
export function getRegion(slug: string): Region | undefined {
  return getPublishedRegions().find((r) => r.slug === slug);
}
export function getLineage(slug: string): Lineage | undefined {
  return getPublishedLineages().find((l) => l.slug === slug);
}
export function getTechnique(slug: string): Technique | undefined {
  return getPublishedTechniques().find((t) => t.slug === slug);
}

export function getEntry(type: EntryType, slug: string): AnyEntry | undefined {
  switch (type) {
    case "dish":
      return getDish(slug);
    case "ingredient":
      return getIngredient(slug);
    case "region":
      return getRegion(slug);
    case "lineage":
      return getLineage(slug);
    case "technique":
      return getTechnique(slug);
  }
}

export function allEntries(): AnyEntry[] {
  return [
    ...getPublishedDishes(),
    ...getPublishedIngredients(),
    ...getPublishedRegions(),
    ...getPublishedLineages(),
    ...getPublishedTechniques(),
  ];
}

const TYPE_TO_PATH: Record<EntryType, string> = {
  dish: "/dishes",
  ingredient: "/ingredients",
  region: "/regions",
  lineage: "/lineages",
  technique: "/techniques",
};

export function entryHref(ref: RelatedEntry | { type: EntryType; slug: string }): string {
  return `${TYPE_TO_PATH[ref.type]}/${ref.slug}`;
}

export function entryLabel(type: EntryType): string {
  return {
    dish: "Dish",
    ingredient: "Ingredient",
    region: "Region",
    lineage: "Lineage",
    technique: "Technique",
  }[type];
}

export function resolveRelated(refs: RelatedEntry[]): { ref: RelatedEntry; entry: AnyEntry | undefined }[] {
  return refs.map((ref) => ({ ref, entry: getEntry(ref.type, ref.slug) }));
}

/**
 * Weight each entry by how many other entries point at it. Used to size
 * items in the tag cloud — the more-linked the entry, the larger it
 * appears.
 */
export function computeInboundWeights(): Map<string, number> {
  const counts = new Map<string, number>();
  const key = (type: EntryType, slug: string) => `${type}:${slug}`;
  for (const e of allEntries()) {
    for (const r of e.related_entries) {
      const k = key(r.type, r.slug);
      counts.set(k, (counts.get(k) ?? 0) + 1);
    }
  }
  // Add region/ingredient/dish array references too.
  for (const r of regions) {
    if (!r.published) continue;
    for (const s of r.signature_dishes) counts.set(key("dish", s), (counts.get(key("dish", s)) ?? 0) + 1);
    for (const s of r.signature_ingredients)
      counts.set(key("ingredient", s), (counts.get(key("ingredient", s)) ?? 0) + 1);
  }
  for (const l of lineages) {
    if (!l.published) continue;
    for (const s of l.dishes_carrying_it) counts.set(key("dish", s), (counts.get(key("dish", s)) ?? 0) + 1);
    for (const s of l.regions_associated) counts.set(key("region", s), (counts.get(key("region", s)) ?? 0) + 1);
  }
  for (const t of techniques) {
    if (!t.published) continue;
    for (const s of t.dishes_using_it) counts.set(key("dish", s), (counts.get(key("dish", s)) ?? 0) + 1);
  }
  for (const i of ingredients) {
    if (!i.published) continue;
    for (const s of i.used_in) counts.set(key("dish", s), (counts.get(key("dish", s)) ?? 0) + 1);
  }
  return counts;
}

export function weightOf(weights: Map<string, number>, entry: { type: EntryType; slug: string }): number {
  return weights.get(`${entry.type}:${entry.slug}`) ?? 0;
}

/**
 * Categories that an entry can carry (only dishes/ingredients/techniques have
 * categories). Returns the full set, deduped.
 */
type CategorisableEntry = (Dish | Ingredient | Technique) & { categories?: GlossaryCategory[] };

export function entriesByCategory(category: GlossaryCategory): AnyEntry[] {
  const out: CategorisableEntry[] = [];
  for (const d of getPublishedDishes()) if (d.categories?.includes(category)) out.push(d);
  for (const i of getPublishedIngredients()) if (i.categories?.includes(category)) out.push(i);
  for (const t of getPublishedTechniques()) if (t.categories?.includes(category)) out.push(t);
  return out as AnyEntry[];
}

export function glossaryTermsByCategory(category: GlossaryCategory): GlossaryTerm[] {
  return glossaryTerms.filter((g) => g.categories.includes(category));
}

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((g) => g.slug === slug);
}

export function getProduce(slug: string): Produce | undefined {
  return produce.find((p) => p.slug === slug);
}

export function produceByKind(kind: ProduceKind): Produce[] {
  return produce.filter((p) => p.kind === kind);
}

export const PRODUCE_KIND_LABELS: Record<ProduceKind, string> = {
  meat: "Meat",
  seafood: "Seafood",
  fruit: "Fruit",
  vegetable: "Vegetable",
  grain: "Grain",
  spice: "Spice",
  "tree-fruit": "Tree fruit",
  dairy: "Dairy",
  fat: "Fat / oil",
  preserve: "Preserve",
};

export const CATEGORY_LABELS: Record<GlossaryCategory, string> = {
  // Flavors
  sweet: "Sweet",
  savory: "Savory",
  sour: "Sour",
  bitter: "Bitter",
  umami: "Umami",
  salty: "Salty",
  // Forms
  pastry: "Pastries",
  bread: "Breads",
  soup: "Soups",
  stew: "Stews",
  salad: "Salads",
  drink: "Drinks",
  snack: "Snacks",
  condiment: "Condiments",
  preserve: "Preserves",
  "spice-blend": "Spice blends",
  fat: "Fats & oils",
  // Occasions
  everyday: "Everyday",
  ramadan: "Ramadan",
  celebration: "Celebration",
  breakfast: "Breakfast",
  "tea-time": "Tea time",
  friday: "Friday",
  postpartum: "Postpartum",
  winter: "Winter",
};

export const FLAVOR_CATEGORIES: GlossaryCategory[] = ["sweet", "savory", "sour", "bitter", "umami", "salty"];
export const FORM_CATEGORIES: GlossaryCategory[] = [
  "pastry",
  "bread",
  "soup",
  "stew",
  "salad",
  "drink",
  "snack",
  "condiment",
  "preserve",
  "spice-blend",
  "fat",
];
export const OCCASION_CATEGORIES: GlossaryCategory[] = [
  "everyday",
  "ramadan",
  "celebration",
  "breakfast",
  "tea-time",
  "friday",
  "postpartum",
  "winter",
];
