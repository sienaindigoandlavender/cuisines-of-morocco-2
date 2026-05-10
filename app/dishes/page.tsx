import type { Metadata } from "next";
import { getPublishedDishes } from "@/lib/data";
import { IndexShell } from "@/components/IndexShell";

export const metadata: Metadata = {
  title: "Dishes",
  description: "An index of dishes in Moroccan cuisine — recipe-first, memory-led.",
  alternates: { canonical: "/dishes" },
};

export default function DishesIndex() {
  return (
    <IndexShell
      title="Dishes"
      blurb="Recipe-first entries. Memory below the threshold, cross-links at the foot."
      items={getPublishedDishes()}
      basePath="/dishes"
    />
  );
}
