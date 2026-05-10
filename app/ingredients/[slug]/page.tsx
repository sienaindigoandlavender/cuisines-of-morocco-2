import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { entryHref, getDish, getIngredient, getPublishedIngredients, getRegion } from "@/lib/data";
import { EntryHeader } from "@/components/EntryHeader";
import { CrossLinkFooter } from "@/components/CrossLinkFooter";
import { CrossDomainBlock } from "@/components/CrossDomainLinks";
import { NeighborhoodCloud } from "@/components/NeighborhoodCloud";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getPublishedIngredients().map((i) => ({ slug: i.slug }));
}
export const dynamicParams = false;
export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const i = getIngredient(slug);
  if (!i) return {};
  return {
    title: i.name,
    description: i.one_line_placement,
    alternates: { canonical: `/ingredients/${i.slug}` },
  };
}

export default async function IngredientPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const i = getIngredient(slug);
  if (!i) notFound();
  const usedIn = i.used_in.map((s) => getDish(s)).filter(Boolean);
  const origin = i.region_origin ? getRegion(i.region_origin) : undefined;

  return (
    <article>
      <EntryHeader entry={i} placement={i.one_line_placement} />

      <section className="recipe">
        <h3 style={{ marginTop: 0 }}>What it is</h3>
        <p style={{ maxWidth: "var(--measure)" }}>{i.definition}</p>
        {origin && (
          <p style={{ maxWidth: "var(--measure)" }}>
            <strong>Origin region:</strong>{" "}
            <Link href={entryHref({ type: "region", slug: origin.slug })}>{origin.name}</Link>
          </p>
        )}
        {i.grades && i.grades.length > 0 && (
          <>
            <h3>Grades</h3>
            <ul>
              {i.grades.map((g, idx) => (
                <li key={idx}>
                  <strong>{g.name}</strong>
                  {g.notes ? ` — ${g.notes}` : null}
                </li>
              ))}
            </ul>
          </>
        )}
        {usedIn.length > 0 && (
          <>
            <h3>Used in</h3>
            <ul>
              {usedIn.map((d) => (
                <li key={d!.slug}>
                  <Link href={entryHref({ type: "dish", slug: d!.slug })}>{d!.name}</Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

      <hr className="threshold" aria-hidden />

      <NeighborhoodCloud refs={i.related_entries} title="Neighbourhood" />
      <CrossDomainBlock links={i.cross_domain} />
      <CrossLinkFooter refs={i.related_entries} />
    </article>
  );
}
