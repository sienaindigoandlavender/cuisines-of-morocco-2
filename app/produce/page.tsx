import type { Metadata } from "next";
import { PRODUCE_KIND_LABELS, produce } from "@/lib/data";
import type { ProduceKind } from "@/lib/schemas/types";
import ProduceBrowser from "./ProduceBrowser";

export const metadata: Metadata = {
  title: "Produce — where the food comes from",
  description:
    "A map of Moroccan produce — lamb from the Middle Atlas, sardines from Safi, argan from the Souss, saffron from Taliouine — and the regions each grows or is caught in.",
  alternates: { canonical: "/produce" },
};

const KIND_ORDER: ProduceKind[] = [
  "meat",
  "seafood",
  "fruit",
  "tree-fruit",
  "grain",
  "vegetable",
  "spice",
  "fat",
  "dairy",
  "preserve",
];

export default function ProducePage() {
  const groupedByKind = KIND_ORDER.map((kind) => ({
    kind,
    label: PRODUCE_KIND_LABELS[kind],
    items: produce.filter((p) => p.kind === kind),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      <header className="hero">
        <p className="hero__eyebrow">Produce</p>
        <h1>Where the food comes from</h1>
        <p>
          Lamb from the Middle Atlas, sardines from Safi, oranges from Berkane, argan from the Souss,
          saffron from Taliouine, dates from the Tafilalet. The map below pins each origin region;
          hover an item to focus its sources.
        </p>
      </header>

      <ProduceBrowser items={produce} groupedByKind={groupedByKind} />
    </>
  );
}
