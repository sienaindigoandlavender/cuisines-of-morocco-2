import type { Metadata } from "next";
import { getPublishedIngredients } from "@/lib/data";
import { IndexShell } from "@/components/IndexShell";

export const metadata: Metadata = {
  title: "Ingredients",
  description: "An index of ingredients in Moroccan cooking.",
  alternates: { canonical: "/ingredients" },
};

export default function IngredientsIndex() {
  return (
    <IndexShell
      title="Ingredients"
      blurb="Where things come from, what they do, where they go."
      items={getPublishedIngredients()}
      basePath="/ingredients"
    />
  );
}
