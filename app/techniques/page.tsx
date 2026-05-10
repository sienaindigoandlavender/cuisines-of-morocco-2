import type { Metadata } from "next";
import { getPublishedTechniques } from "@/lib/data";
import { IndexShell } from "@/components/IndexShell";

export const metadata: Metadata = {
  title: "Techniques",
  description: "The methods that thread through the Moroccan kitchen.",
  alternates: { canonical: "/techniques" },
};

export default function TechniquesIndex() {
  return (
    <IndexShell
      title="Techniques"
      blurb="The methods, in plain language."
      items={getPublishedTechniques()}
      basePath="/techniques"
    />
  );
}
