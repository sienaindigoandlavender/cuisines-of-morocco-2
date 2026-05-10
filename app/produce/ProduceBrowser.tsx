"use client";

import Link from "next/link";
import { useState } from "react";
import { ProduceMap, KIND_COLOR } from "@/components/ProduceMap";
import type { Produce, ProduceKind } from "@/lib/schemas/types";

type Props = {
  items: Produce[];
  groupedByKind: Array<{ kind: ProduceKind; label: string; items: Produce[] }>;
};

export default function ProduceBrowser({ items, groupedByKind }: Props) {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <>
      <div className="produce-map-wrap">
        <ProduceMap items={items} focusedSlug={focused} />
        <ul className="produce-legend" aria-label="Produce kinds">
          {Object.entries(KIND_COLOR).map(([kind, color]) => (
            <li key={kind}>
              <span className="produce-legend__swatch" style={{ background: color }} aria-hidden />
              <span className="produce-legend__label">{kind.replace("-", " ")}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="produce-groups">
        {groupedByKind.map(({ kind, label, items: kindItems }) => (
          <section key={kind} className="produce-group" id={`kind-${kind}`}>
            <h2 className="produce-group__title">
              <span
                className="produce-legend__swatch"
                style={{ background: KIND_COLOR[kind], display: "inline-block", marginRight: "0.5rem" }}
                aria-hidden
              />
              {label}
            </h2>
            <ul className="produce-list">
              {kindItems.map((p) => (
                <li
                  key={p.slug}
                  className={`produce-card ${focused === p.slug ? "produce-card--focused" : ""}`}
                  onMouseEnter={() => setFocused(p.slug)}
                  onMouseLeave={() => setFocused(null)}
                  onFocus={() => setFocused(p.slug)}
                  onBlur={() => setFocused(null)}
                >
                  <h3 className="produce-card__name">
                    {p.ingredient_slug ? (
                      <Link href={`/ingredients/${p.ingredient_slug}`}>{p.name}</Link>
                    ) : (
                      p.name
                    )}
                  </h3>
                  <p className="produce-card__blurb">{p.blurb}</p>
                  <ul className="produce-card__origins">
                    {p.origins.map((o) => (
                      <li key={`${p.slug}-${o.region_name}`}>
                        <span className="produce-card__region">{o.region_name}</span>
                        {o.notes ? <span className="produce-card__notes"> — {o.notes}</span> : null}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
