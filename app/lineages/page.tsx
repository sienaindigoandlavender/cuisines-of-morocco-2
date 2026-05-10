import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedLineages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Lineages",
  description: "The traditions that fold into Moroccan cooking — Andalusi, Amazigh, Saharan, Jewish Moroccan.",
  alternates: { canonical: "/lineages" },
};

export default function LineagesIndex() {
  const items = getPublishedLineages();
  return (
    <>
      <header className="hero">
        <p className="hero__eyebrow">Index</p>
        <h1>Lineages</h1>
        <p>The traditions Moroccan food carries forward.</p>
      </header>
      <ul className="index-grid" style={{ listStyle: "none", padding: 0 }}>
        {items.map((d) => (
          <li key={d.slug}>
            <Link href={`/lineages/${d.slug}`} className="index-card">
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
