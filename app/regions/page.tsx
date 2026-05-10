import type { Metadata } from "next";
import { getPublishedRegions } from "@/lib/data";
import { IndexShell } from "@/components/IndexShell";
import { RegionMap } from "@/components/RegionMap";

export const metadata: Metadata = {
  title: "Regions",
  description: "An index of regions across Morocco, each with its own kitchen.",
  alternates: { canonical: "/regions" },
};

export default function RegionsIndex() {
  return (
    <IndexShell
      title="Regions"
      blurb="Every region a kitchen of its own."
      items={getPublishedRegions()}
      basePath="/regions"
      before={
        <div style={{ margin: "1.5rem 0", display: "flex", justifyContent: "center" }}>
          <RegionMap
            filename="_morocco.svg"
            alt="Map of Morocco"
            center={{ lat: 31.7917, lng: -7.0926 }}
            zoom={5}
          />
        </div>
      }
    />
  );
}
