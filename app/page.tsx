import Link from "next/link";
import {
  allEntries,
  computeInboundWeights,
  entryHref,
  getDish,
  getIngredient,
  getRegion,
  getPublishedDishes,
  getPublishedIngredients,
  getPublishedLineages,
  getPublishedRegions,
  getPublishedTechniques,
} from "@/lib/data";
import { SearchBar } from "@/components/SearchBar";
import { TagCloud } from "@/components/TagCloud";

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

  const weights = computeInboundWeights();
  const everything = allEntries();

  return (
    <>
      <section className="hero">
        <p className="hero__eyebrow">A memory-led culinary wiki</p>
        <h1>Cuisines of Morocco</h1>
        <p>
          A wiki, structured. Dishes, ingredients, regions, lineages, and the techniques that thread through them —
          recipe first, memory below, every entry cross-linked.
        </p>
        <SearchBar />
      </section>

      <TagCloud
        items={everything}
        weights={weights}
        title="The whole wiki, weighted by how often it links"
        showKind
      />

      <div className="cloud-legend" aria-hidden>
        <span className="tag tag--dish"><span className="tag__name">Dish</span></span>
        <span className="tag tag--ingredient"><span className="tag__name">Ingredient</span></span>
        <span className="tag tag--region"><span className="tag__name">Region</span></span>
        <span className="tag tag--lineage"><span className="tag__name">Lineage</span></span>
        <span className="tag tag--technique"><span className="tag__name">Technique</span></span>
      </div>

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
        <h2>By type</h2>
        <TagCloud items={getPublishedDishes()} weights={weights} title="Dishes" sort="alpha" minRem={0.95} maxRem={1.4} />
        <TagCloud items={getPublishedIngredients()} weights={weights} title="Ingredients" sort="alpha" minRem={0.95} maxRem={1.4} />
        <TagCloud items={getPublishedRegions()} weights={weights} title="Regions" sort="alpha" minRem={0.95} maxRem={1.4} />
        <TagCloud items={getPublishedLineages()} weights={weights} title="Lineages" sort="alpha" minRem={0.95} maxRem={1.4} />
        <TagCloud items={getPublishedTechniques()} weights={weights} title="Techniques" sort="alpha" minRem={0.95} maxRem={1.4} />
      </section>

      <section className="section">
        <h2>Browse</h2>
        <ul className="browse-list">
          <li><Link href="/dishes">Dishes</Link></li>
          <li><Link href="/ingredients">Ingredients</Link></li>
          <li><Link href="/regions">Regions</Link></li>
          <li><Link href="/produce">Produce</Link></li>
          <li><Link href="/lineages">Lineages</Link></li>
          <li><Link href="/techniques">Techniques</Link></li>
          <li><Link href="/glossary">Glossary</Link></li>
        </ul>
      </section>

      <section className="ecosystem-foot">
        <p>
          Sister sites in the ecosystem:
          <a href="https://slowmorocco.com" rel="external">Slow Morocco</a>
          ·
          <a href="https://aboutheamazigh.com" rel="external">About The Amazigh</a>
          ·
          <a href="https://derb.so" rel="external">Derb.so</a>
          ·
          <a href="https://riaddisiena.com" rel="external">Riad di Siena</a>
        </p>
      </section>
    </>
  );
}
