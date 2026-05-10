import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedDishes } from "@/lib/data";

export const metadata: Metadata = {
  title: "Dishes",
  description: "An index of dishes in Moroccan cuisine — recipe-first, memory-led.",
  alternates: { canonical: "/dishes" },
};

export default function DishesIndex() {
  const dishes = getPublishedDishes();
  return (
    <>
      <header className="hero">
        <p className="hero__eyebrow">Index</p>
        <h1>Dishes</h1>
        <p>Recipe-first entries. Memory below the threshold, cross-links at the foot.</p>
      </header>
      <ul className="index-grid" style={{ listStyle: "none", padding: 0 }}>
        {dishes.map((d) => (
          <li key={d.slug}>
            <Link href={`/dishes/${d.slug}`} className="index-card">
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
