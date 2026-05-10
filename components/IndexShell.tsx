import Link from "next/link";
import { TagCloud } from "./TagCloud";
import { computeInboundWeights } from "@/lib/data";
import type { AnyEntry } from "@/lib/schemas/types";

type Props = {
  title: string;
  blurb: string;
  items: AnyEntry[];
  basePath: string;
  before?: React.ReactNode;
};

export function IndexShell({ title, blurb, items, basePath, before }: Props) {
  const weights = computeInboundWeights();
  return (
    <>
      <header className="hero">
        <p className="hero__eyebrow">Index</p>
        <h1>{title}</h1>
        <p>{blurb}</p>
      </header>
      {before}
      <TagCloud items={items} weights={weights} title={`${title} — weighted`} />
      <ul className="index-grid" style={{ listStyle: "none", padding: 0 }}>
        {items.map((d) => (
          <li key={d.slug}>
            <Link href={`${basePath}/${d.slug}`} className="index-card">
              <h3>{d.name}</h3>
              <p>
                <em>{"one_line_placement" in d ? d.one_line_placement : ""}</em>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
