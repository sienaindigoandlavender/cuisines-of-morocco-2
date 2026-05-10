import Link from "next/link";
import { entryHref, entryLabel, resolveRelated } from "@/lib/data";
import type { RelatedEntry } from "@/lib/schemas/types";

export function CrossLinkFooter({ refs }: { refs: RelatedEntry[] }) {
  const resolved = resolveRelated(refs).filter((r) => r.entry !== undefined);
  if (resolved.length === 0) return null;
  return (
    <nav className="see-also" aria-label="See also">
      <h2 className="see-also__title">See also</h2>
      <ul className="see-also__list">
        {resolved.map(({ ref, entry }) => (
          <li key={`${ref.type}-${ref.slug}`}>
            <Link href={entryHref(ref)}>
              <span className="see-also__kind">{entryLabel(ref.type)}</span>
              <span className="see-also__name">{entry?.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
