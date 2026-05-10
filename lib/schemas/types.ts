export type EntryType = "dish" | "ingredient" | "region" | "lineage" | "technique";

export type RelatedEntry = {
  type: EntryType;
  slug: string;
};

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
};

export type AnyEntry = Dish | Ingredient | Region | Lineage | Technique;
