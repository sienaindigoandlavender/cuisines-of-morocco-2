import type { Dish, Lineage, Region } from "@/lib/schemas/types";

const SITE = "https://cuisinesofmorocco.com";

export function recipeJsonLd(d: Dish) {
  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: d.name,
    description: d.one_line_placement,
    url: `${SITE}/dishes/${d.slug}`,
    image: d.illustration_filename ? [`${SITE}/illustrations/${d.illustration_filename}`] : undefined,
    recipeCuisine: "Moroccan",
    recipeYield: d.recipe_block.servings,
    totalTime: d.recipe_block.total_time,
    prepTime: d.recipe_block.prep_time,
    cookTime: d.recipe_block.cook_time,
    recipeIngredient: d.recipe_block.ingredients,
    recipeInstructions: d.recipe_block.method.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      text: step,
    })),
    inLanguage: "en",
    isAccessibleForFree: true,
    author: { "@type": "Organization", name: "Cuisines of Morocco" },
    publisher: { "@type": "Organization", name: "Cuisines of Morocco", url: SITE },
  };
}

export function articleJsonLd(entry: Region | Lineage, body: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.name,
    description: entry.one_line_placement,
    url: `${SITE}/${entry.type === "region" ? "regions" : "lineages"}/${entry.slug}`,
    articleBody: body,
    inLanguage: "en",
    author: { "@type": "Organization", name: "Cuisines of Morocco" },
    publisher: { "@type": "Organization", name: "Cuisines of Morocco", url: SITE },
  };
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
