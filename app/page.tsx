import Link from "next/link";
import { getDish, getIngredient, getRegion } from "@/lib/data";
import { SearchBar } from "@/components/SearchBar";
import { entryHref } from "@/lib/data";

const FEATURED: Array<{ type: "dish" | "ingredient" | "region"; slug: string }> = [
  { type: "dish", slug: "meskouta" },
  { type: "ingredient", slug: "smen" },
  { type: "region", slug: "berkane" },
  { type: "dish", slug: "tangia" },
];

export default function Home() {
  const featured = FEATURED.map((r) => {
    const e = r.type === "dish" ? getDish(r.slug) : r.type === "ingredient" ? getIngredient(r.slug) : getRegion(r.slug);
    return e ? { ref: r, entry: e } : null;
  }).filter(Boolean) as Array<{ ref: (typeof FEATURED)[number]; entry: NonNullable<ReturnType<typeof getDish>> }>;

  return (
    <>
      <section className="hero">
        <p className="hero__eyebrow">A memory-led culinary wiki</p>
        <h1>Cuisines of Morocco</h1>
        <p>
          Recipes first, rabbit-holes second. Dishes, ingredients, regions, lineages, and the techniques that thread
          through them — paraphrased, cross-linked, and drawn rather than photographed.
        </p>
        <SearchBar />
      </section>

      <section className="section">
        <h2>Featured</h2>
        <div className="index-grid">
          {featured.map(({ ref, entry }) => (
            <Link key={`${ref.type}-${ref.slug}`} href={entryHref(ref)} className="index-card">
              <h3>{entry.name}</h3>
              <p>
                <em>{"one_line_placement" in entry ? entry.one_line_placement : ""}</em>
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Browse</h2>
        <ul className="browse-list">
          <li>
            <Link href="/dishes">Dishes</Link>
          </li>
          <li>
            <Link href="/ingredients">Ingredients</Link>
          </li>
          <li>
            <Link href="/regions">Regions</Link>
          </li>
          <li>
            <Link href="/lineages">Lineages</Link>
          </li>
          <li>
            <Link href="/techniques">Techniques</Link>
          </li>
        </ul>
      </section>

      <section className="ecosystem-foot">
        <p>
          Sister sites in the ecosystem:
          <a href="https://slowmorocco.com" rel="external">
            Slow Morocco
          </a>
          ·
          <a href="https://aboutheamazigh.com" rel="external">
            About The Amazigh
          </a>
          ·
          <a href="https://derb.so" rel="external">
            Derb.so
          </a>
          ·
          <a href="https://riaddisiena.com" rel="external">
            Riad di Siena
          </a>
        </p>
      </section>
    </>
  );
}
