import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { entryHref, getDish, getIngredient, getPublishedRegions, getRegion } from "@/lib/data";
import { EntryHeader } from "@/components/EntryHeader";
import { CrossLinkFooter } from "@/components/CrossLinkFooter";
import { CrossDomainBlock } from "@/components/CrossDomainLinks";
import { NeighborhoodCloud } from "@/components/NeighborhoodCloud";
import { RegionMap } from "@/components/RegionMap";
import { JsonLd, articleJsonLd } from "@/lib/seo/structured-data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getPublishedRegions().map((r) => ({ slug: r.slug }));
}
export const dynamicParams = false;
export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const r = getRegion(slug);
  if (!r) return {};
  return {
    title: r.name,
    description: r.one_line_placement,
    alternates: { canonical: `/regions/${r.slug}` },
  };
}

export default async function RegionPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const r = getRegion(slug);
  if (!r) notFound();

  const dishes = r.signature_dishes.map((s) => getDish(s)).filter(Boolean);
  const ingredients = r.signature_ingredients.map((s) => getIngredient(s)).filter(Boolean);

  return (
    <article>
      <JsonLd data={articleJsonLd(r, r.narrative)} />
      <header className="entry-header">
        <div className="entry-header__text">
          <p className="entry-header__kind">Region</p>
          <h1 className="entry-header__title">{r.name}</h1>
          <p className="entry-header__placement">
            <em>{r.one_line_placement}</em>
          </p>
        </div>
        <div className="entry-header__illustration">
          <RegionMap
            filename={r.map_filename}
            alt={`Map of ${r.name}`}
            center={r.lat_long}
            zoom={10}
          />
        </div>
      </header>

      <section className="recipe">
        {dishes.length > 0 && (
          <>
            <h3 style={{ marginTop: 0 }}>Signature dishes</h3>
            <ul>
              {dishes.map((d) => (
                <li key={d!.slug}>
                  <Link href={entryHref({ type: "dish", slug: d!.slug })}>{d!.name}</Link>
                </li>
              ))}
            </ul>
          </>
        )}
        {ingredients.length > 0 && (
          <>
            <h3>Signature ingredients</h3>
            <ul>
              {ingredients.map((i) => (
                <li key={i!.slug}>
                  <Link href={entryHref({ type: "ingredient", slug: i!.slug })}>{i!.name}</Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

      <hr className="threshold" aria-hidden />

      <section className="prose">
        <p>{r.narrative}</p>
      </section>

      <NeighborhoodCloud refs={r.related_entries} title="Neighbourhood" />
      <CrossDomainBlock links={r.cross_domain} />
      <CrossLinkFooter refs={r.related_entries} />
    </article>
  );
}
