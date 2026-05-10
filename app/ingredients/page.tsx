import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedIngredients } from "@/lib/data";

export const metadata: Metadata = {
  title: "Ingredients",
  description: "An index of ingredients in Moroccan cooking.",
  alternates: { canonical: "/ingredients" },
};

export default function IngredientsIndex() {
  const items = getPublishedIngredients();
  return (
    <>
      <header className="hero">
        <p className="hero__eyebrow">Index</p>
        <h1>Ingredients</h1>
        <p>Where things come from, what they do, where they go.</p>
      </header>
      <ul className="index-grid" style={{ listStyle: "none", padding: 0 }}>
        {items.map((d) => (
          <li key={d.slug}>
            <Link href={`/ingredients/${d.slug}`} className="index-card">
              <h3>{d.name}</h3>
              <p>
                <em>{d.one_line_placement}</em>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
