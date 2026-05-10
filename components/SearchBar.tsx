import Link from "next/link";
import { allEntries, entryHref, entryLabel } from "@/lib/data";

export function SearchBar() {
  return (
    <form className="search" role="search" action="/search" method="get">
      <label htmlFor="search-q" className="visually-hidden">
        Search the wiki
      </label>
      <input
        id="search-q"
        name="q"
        type="search"
        placeholder="Search dishes, ingredients, regions, lineages, techniques…"
        autoComplete="off"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export function SearchResults({ q }: { q: string }) {
  const needle = q.trim().toLowerCase();
  if (!needle) {
    return <p className="search__empty">Type a word above — Meskouta, Berkane, smen…</p>;
  }
  const hits = allEntries().filter((e) => {
    const haystack = [
      e.name,
      e.name_darija,
      e.name_tamazight,
      e.name_arabic,
      "one_line_placement" in e ? e.one_line_placement : "",
      "definition" in e ? e.definition : "",
      "narrative" in e ? e.narrative : "",
      "memory_layer" in e ? e.memory_layer : "",
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return haystack.includes(needle);
  });
  if (hits.length === 0) {
    return <p className="search__empty">Nothing yet — the wiki is young.</p>;
  }
  return (
    <ul className="search__results">
      {hits.map((e) => (
        <li key={`${e.type}-${e.slug}`}>
          <Link href={entryHref(e)}>
            <span className="search__kind">{entryLabel(e.type)}</span>
            <span className="search__name">{e.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
