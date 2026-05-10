export type EntryType = "dish" | "ingredient" | "region" | "lineage" | "technique";

export type RelatedEntry = {
  type: EntryType;
  slug: string;
};

/**
 * Glossary categories — flavors, forms, occasions. An entry can carry several.
 * Used to group dishes/ingredients/techniques into the /glossary tag clouds.
 */
export type FlavorCategory = "sweet" | "savory" | "sour" | "bitter" | "umami" | "salty";
export type FormCategory =
  | "pastry"
  | "bread"
  | "soup"
  | "stew"
  | "salad"
  | "drink"
  | "snack"
  | "condiment"
  | "preserve"
  | "spice-blend"
  | "fat";
export type OccasionCategory =
  | "everyday"
  | "ramadan"
  | "celebration"
  | "breakfast"
  | "tea-time"
  | "friday"
  | "postpartum"
  | "winter";

export type GlossaryCategory = FlavorCategory | FormCategory | OccasionCategory;

export type CrossDomainLinks = {
  amazighDictionarySlug?: string;
  derbSlug?: string;
  zfritiSku?: string;
  slowMoroccoSlug?: string;
};

type BaseEntry = {
  slug: string;
  name: string;
  name_darija?: string;
  name_tamazight?: string;
  name_arabic?: string;
  related_entries: RelatedEntry[];
  illustration_filename?: string;
  cross_domain?: CrossDomainLinks;
  published: boolean;
};

export type RecipeBlock = {
  servings?: string;
  total_time?: string;
  prep_time?: string;
  cook_time?: string;
  ingredients: string[];
  method: string[];
  notes?: string[];
};

export type Dish = BaseEntry & {
  type: "dish";
  one_line_placement: string;
  recipe_block: RecipeBlock;
  memory_layer?: string;
  lineage_layer?: string;
  regional_variations?: string;
  zfriti_skus?: string[];
  categories?: GlossaryCategory[];
};

export type IngredientGrade = {
  name: string;
  notes?: string;
};

export type Ingredient = BaseEntry & {
  type: "ingredient";
  one_line_placement: string;
  definition: string;
  region_origin?: string;
  grades?: IngredientGrade[];
  used_in: string[];
  categories?: GlossaryCategory[];
};

export type Region = BaseEntry & {
  type: "region";
  one_line_placement: string;
  lat_long?: { lat: number; lng: number };
  narrative: string;
  signature_dishes: string[];
  signature_ingredients: string[];
  map_filename?: string;
};

export type Lineage = BaseEntry & {
  type: "lineage";
  one_line_placement: string;
  narrative: string;
  dishes_carrying_it: string[];
  regions_associated: string[];
};

export type Technique = BaseEntry & {
  type: "technique";
  one_line_placement: string;
  definition: string;
  method_block: string[];
  dishes_using_it: string[];
  categories?: GlossaryCategory[];
};

export type AnyEntry = Dish | Ingredient | Region | Lineage | Technique;

/**
 * A glossary term — a vocabulary entry that doesn't (yet) have a full
 * dish/ingredient/region page. Pure definition, optionally cross-linked.
 */
export type GlossaryTerm = {
  slug: string;
  term: string;
  term_darija?: string;
  term_tamazight?: string;
  term_arabic?: string;
  /** A short definition. */
  definition: string;
  /** Categories this term belongs to. */
  categories: GlossaryCategory[];
  /** Optional cross-links into the wiki proper. */
  related_entries?: RelatedEntry[];
};

/**
 * Origin geography for a produce item — a single source area in Morocco.
 */
export type ProduceOrigin = {
  region_name: string;
  lat: number;
  lng: number;
  notes?: string;
};

export type ProduceKind =
  | "meat"
  | "seafood"
  | "fruit"
  | "vegetable"
  | "grain"
  | "spice"
  | "tree-fruit"
  | "dairy"
  | "fat"
  | "preserve";

/**
 * A produce / raw-material entry. Where a thing comes from in Morocco.
 * Optionally references an existing ingredient entry.
 */
export type Produce = {
  slug: string;
  name: string;
  kind: ProduceKind;
  blurb: string;
  origins: ProduceOrigin[];
  /** If this produce has a corresponding ingredient page in the wiki. */
  ingredient_slug?: string;
};
