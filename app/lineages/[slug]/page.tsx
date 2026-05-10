import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { entryHref, getDish, getLineage, getPublishedLineages, getRegion } from "@/lib/data";
import { EntryHeader } from "@/components/EntryHeader";
import { CrossLinkFooter } from "@/components/CrossLinkFooter";
import { CrossDomainBlock } from "@/components/CrossDomainLinks";
import { JsonLd, articleJsonLd } from "@/lib/seo/structured-data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getPublishedLineages().map((l) => ({ slug: l.slug }));
}
export const dynamicParams = false;
export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const l = getLineage(slug);
  if (!l) return {};
  return {
    title: l.name,
    description: l.one_line_placement,
    alternates: { canonical: `/lineages/${l.slug}` },
  };
}

export default async function LineagePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const l = getLineage(slug);
  if (!l) notFound();

  const dishes = l.dishes_carrying_it.map((s) => getDish(s)).filter(Boolean);
  const regions = l.regions_associated.map((s) => getRegion(s)).filter(Boolean);

  return (
    <article>
      <JsonLd data={articleJsonLd(l, l.narrative)} />
      <EntryHeader entry={l} placement={l.one_line_placement} />

      <section className="recipe">
        {dishes.length > 0 && (
          <>
            <h3 style={{ marginTop: 0 }}>Dishes carrying it</h3>
            <ul>
              {dishes.map((d) => (
                <li key={d!.slug}>
                  <Link href={entryHref({ type: "dish", slug: d!.slug })}>{d!.name}</Link>
                </li>
              ))}
            </ul>
          </>
        )}
        {regions.length > 0 && (
          <>
            <h3>Regions associated</h3>
            <ul>
              {regions.map((r) => (
                <li key={r!.slug}>
                  <Link href={entryHref({ type: "region", slug: r!.slug })}>{r!.name}</Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

      <hr className="threshold" aria-hidden />

      <section className="prose">
        <p>{l.narrative}</p>
      </section>

      <CrossDomainBlock links={l.cross_domain} />
      <CrossLinkFooter refs={l.related_entries} />
    </article>
  );
}
