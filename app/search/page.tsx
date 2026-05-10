import type { Metadata } from "next";
import { SearchBar, SearchResults } from "@/components/SearchBar";

export const metadata: Metadata = { title: "Search" };

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string | string[] }>;
}) {
  const sp = await searchParams;
  const q = Array.isArray(sp.q) ? sp.q[0] : sp.q ?? "";
  return (
    <>
      <h1 style={{ fontFamily: "var(--display)", fontSize: "2.4rem", margin: "0 0 1rem" }}>Search</h1>
      <SearchBar />
      <SearchResults q={q} />
    </>
  );
}
