import { TagCloud } from "./TagCloud";
import { computeInboundWeights, getEntry } from "@/lib/data";
import type { AnyEntry, RelatedEntry } from "@/lib/schemas/types";

export function NeighborhoodCloud({ refs, title }: { refs: RelatedEntry[]; title?: string }) {
  const entries: AnyEntry[] = refs
    .map((r) => getEntry(r.type, r.slug))
    .filter((e): e is AnyEntry => Boolean(e));
  if (entries.length === 0) return null;
  return <TagCloud items={entries} weights={computeInboundWeights()} title={title ?? "Neighbourhood"} showKind />;
}
