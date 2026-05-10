import Link from "next/link";
import {
  CATEGORY_LABELS,
  computeInboundWeights,
  entriesByCategory,
  entryHref,
  glossaryTermsByCategory,
  weightOf,
} from "@/lib/data";
import type { AnyEntry, EntryType, GlossaryCategory, GlossaryTerm } from "@/lib/schemas/types";

const TYPE_CLASS: Record<EntryType, string> = {
  dish: "tag--dish",
  ingredient: "tag--ingredient",
  region: "tag--region",
  lineage: "tag--lineage",
  technique: "tag--technique",
};

type RenderedTag = {
  key: string;
  href: string | null;
  className: string;
  kindLabel: string;
  name: string;
  weight: number;
  size: number;
  title: string;
};

function buildTags(category: GlossaryCategory, weights: Map<string, number>): RenderedTag[] {
  const entries: AnyEntry[] = entriesByCategory(category);
  const terms: GlossaryTerm[] = glossaryTermsByCategory(category);

  if (entries.length === 0 && terms.length === 0) return [];

  const entryRows = entries.map((e) => {
    const weight = weightOf(weights, e);
    return {
      key: `${e.type}:${e.slug}`,
      href: entryHref({ type: e.type, slug: e.slug }),
      className: `tag ${TYPE_CLASS[e.type]}`,
      kindLabel: e.type,
      name: e.name,
      weight,
    };
  });

  const termRows = terms.map((t) => ({
    key: `glossary:${t.slug}`,
    href: null as string | null,
    className: "tag tag--term",
    kindLabel: "term",
    name: t.term,
    weight: 0,
  }));

  const all = [...entryRows, ...termRows];
  const min = Math.min(...all.map((r) => r.weight));
  const max = Math.max(...all.map((r) => r.weight));
  const span = Math.max(1, max - min);

  const sized = all.map((r) => {
    const t = (r.weight - min) / span;
    const size = 0.95 + t * 0.85;
    return {
      ...r,
      size,
      title: r.weight > 0 ? `${r.name} — ${r.weight} link${r.weight === 1 ? "" : "s"}` : r.name,
    };
  });

  return sized.sort((a, b) =>
    b.weight - a.weight !== 0 ? b.weight - a.weight : a.name.localeCompare(b.name)
  );
}

type Props = {
  categories: GlossaryCategory[];
  groupTitle?: string;
};

export function CategoryTagCloud({ categories, groupTitle }: Props) {
  const weights = computeInboundWeights();
  const blocks = categories
    .map((c) => ({ category: c, tags: buildTags(c, weights) }))
    .filter((b) => b.tags.length > 0);

  if (blocks.length === 0) return null;

  return (
    <section className="category-cloud-group">
      {groupTitle && <h2 className="category-cloud-group__title">{groupTitle}</h2>}
      {blocks.map(({ category, tags }) => (
        <div key={category} className="category-cloud" id={`cat-${category}`}>
          <h3 className="category-cloud__title">{CATEGORY_LABELS[category]}</h3>
          <ul className="tag-cloud__list">
            {tags.map((tag) => (
              <li key={tag.key}>
                {tag.href ? (
                  <Link href={tag.href} className={tag.className} style={{ fontSize: `${tag.size.toFixed(2)}rem` }} title={tag.title}>
                    <span className="tag__kind">{tag.kindLabel}</span>
                    <span className="tag__name">{tag.name}</span>
                    {tag.weight > 0 && <span className="tag__weight" aria-hidden>·{tag.weight}</span>}
                  </Link>
                ) : (
                  <span className={tag.className} style={{ fontSize: `${tag.size.toFixed(2)}rem` }} title={tag.title}>
                    <span className="tag__kind">{tag.kindLabel}</span>
                    <span className="tag__name">{tag.name}</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
