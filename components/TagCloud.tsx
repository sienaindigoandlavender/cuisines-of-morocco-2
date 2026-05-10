import Link from "next/link";
import { computeInboundWeights, entryHref, weightOf } from "@/lib/data";
import type { AnyEntry, EntryType } from "@/lib/schemas/types";

type Item = { type: EntryType; slug: string; name: string };

type Props = {
  items: AnyEntry[] | Item[];
  title?: string;
  /** Override the weight per item (defaults to inbound-link count). */
  weights?: Map<string, number>;
  /** Show the type chip next to each tag. */
  showKind?: boolean;
  /** Smallest and largest font sizes, in rem. */
  minRem?: number;
  maxRem?: number;
  /** Sort by weight descending (default), or alphabetical. */
  sort?: "weight" | "alpha";
};

const TYPE_CLASS: Record<EntryType, string> = {
  dish: "tag--dish",
  ingredient: "tag--ingredient",
  region: "tag--region",
  lineage: "tag--lineage",
  technique: "tag--technique",
};

export function TagCloud({
  items,
  title,
  weights,
  showKind = false,
  minRem = 0.85,
  maxRem = 2,
  sort = "weight",
}: Props) {
  if (items.length === 0) return null;
  const w = weights ?? computeInboundWeights();

  const scored = items.map((it) => ({
    type: it.type as EntryType,
    slug: it.slug,
    name: (it as Item).name,
    weight: weightOf(w, it),
  }));

  const min = Math.min(...scored.map((s) => s.weight));
  const max = Math.max(...scored.map((s) => s.weight));
  const span = Math.max(1, max - min);

  const sorted = [...scored].sort((a, b) => (sort === "alpha" ? a.name.localeCompare(b.name) : b.weight - a.weight));

  return (
    <section className="tag-cloud" aria-label={title ?? "Tag cloud"}>
      {title && <h2 className="tag-cloud__title">{title}</h2>}
      <ul className="tag-cloud__list">
        {sorted.map((s) => {
          const t = (s.weight - min) / span;
          const size = minRem + t * (maxRem - minRem);
          return (
            <li key={`${s.type}-${s.slug}`}>
              <Link
                href={entryHref({ type: s.type, slug: s.slug })}
                className={`tag ${TYPE_CLASS[s.type]}`}
                style={{ fontSize: `${size.toFixed(2)}rem` }}
                title={`${s.name} — ${s.weight} link${s.weight === 1 ? "" : "s"}`}
              >
                {showKind && <span className="tag__kind">{s.type}</span>}
                <span className="tag__name">{s.name}</span>
                {s.weight > 0 && <span className="tag__weight" aria-hidden>·{s.weight}</span>}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
