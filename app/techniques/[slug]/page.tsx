import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { entryHref, getDish, getPublishedTechniques, getTechnique } from "@/lib/data";
import { EntryHeader } from "@/components/EntryHeader";
import { CrossLinkFooter } from "@/components/CrossLinkFooter";
import { CrossDomainBlock } from "@/components/CrossDomainLinks";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getPublishedTechniques().map((t) => ({ slug: t.slug }));
}
export const dynamicParams = false;
export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const t = getTechnique(slug);
  if (!t) return {};
  return {
    title: t.name,
    description: t.one_line_placement,
    alternates: { canonical: `/techniques/${t.slug}` },
  };
}

export default async function TechniquePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const t = getTechnique(slug);
  if (!t) notFound();

  const dishes = t.dishes_using_it.map((s) => getDish(s)).filter(Boolean);

  return (
    <article>
      <EntryHeader entry={t} placement={t.one_line_placement} />

      <section className="recipe">
        <h3 style={{ marginTop: 0 }}>Definition</h3>
        <p style={{ maxWidth: "var(--measure)" }}>{t.definition}</p>
        {t.method_block.length > 0 && (
          <>
            <h3>Method</h3>
            <ol>
              {t.method_block.map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ol>
          </>
        )}
        {dishes.length > 0 && (
          <>
            <h3>Dishes using it</h3>
            <ul>
              {dishes.map((d) => (
                <li key={d!.slug}>
                  <Link href={entryHref({ type: "dish", slug: d!.slug })}>{d!.name}</Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

      <hr className="threshold" aria-hidden />

      <CrossDomainBlock links={t.cross_domain} />
      <CrossLinkFooter refs={t.related_entries} />
    </article>
  );
}
