import type { Metadata } from "next";
import { getPublishedLineages } from "@/lib/data";
import { IndexShell } from "@/components/IndexShell";

export const metadata: Metadata = {
  title: "Lineages",
  description: "The traditions that fold into Moroccan cooking — Andalusi, Amazigh, Saharan, Jewish Moroccan.",
  alternates: { canonical: "/lineages" },
};

export default function LineagesIndex() {
  return (
    <IndexShell
      title="Lineages"
      blurb="The traditions Moroccan food carries forward."
      items={getPublishedLineages()}
      basePath="/lineages"
    />
  );
}
