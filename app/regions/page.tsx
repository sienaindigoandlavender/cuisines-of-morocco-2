import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedRegions } from "@/lib/data";
import { RegionMap } from "@/components/RegionMap";

export const metadata: Metadata = {
  title: "Regions",
  description: "An index of regions across Morocco, each with its own kitchen.",
  alternates: { canonical: "/regions" },
};

export default function RegionsIndex() {
  const items = getPublishedRegions();
  return (
    <>
      <header className="hero">
        <p className="hero__eyebrow">Index</p>
        <h1>Regions</h1>
        <p>Every region a kitchen of its own. Hand-drawn maps, no Mapbox.</p>
      </header>
      <div style={{ margin: "2rem 0", display: "flex", justifyContent: "center" }}>
        <RegionMap
          filename="_morocco.svg"
          alt="Map of Morocco"
          center={{ lat: 31.7917, lng: -7.0926 }}
          zoom={5}
        />
      </div>
      <ul className="index-grid" style={{ listStyle: "none", padding: 0 }}>
        {items.map((d) => (
          <li key={d.slug}>
            <Link href={`/regions/${d.slug}`} className="index-card">
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
