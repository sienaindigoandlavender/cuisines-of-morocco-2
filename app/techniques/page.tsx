import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedTechniques } from "@/lib/data";

export const metadata: Metadata = {
  title: "Techniques",
  description: "The methods that thread through the Moroccan kitchen.",
  alternates: { canonical: "/techniques" },
};

export default function TechniquesIndex() {
  const items = getPublishedTechniques();
  return (
    <>
      <header className="hero">
        <p className="hero__eyebrow">Index</p>
        <h1>Techniques</h1>
        <p>The methods, in plain language.</p>
      </header>
      <ul className="index-grid" style={{ listStyle: "none", padding: 0 }}>
        {items.map((d) => (
          <li key={d.slug}>
            <Link href={`/techniques/${d.slug}`} className="index-card">
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
