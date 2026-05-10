import type { AnyEntry } from "@/lib/schemas/types";

export function NameStack({ entry }: { entry: AnyEntry }) {
  const names = [
    entry.name_darija && { lang: "ar-MA", label: "Darija", value: entry.name_darija },
    entry.name_tamazight && { lang: "zgh", label: "Tamazight", value: entry.name_tamazight },
    entry.name_arabic && { lang: "ar", label: "العربية", value: entry.name_arabic },
  ].filter(Boolean) as { lang: string; label: string; value: string }[];
  if (names.length === 0) return null;
  return (
    <dl className="name-stack">
      {names.map((n) => (
        <div key={n.lang} className="name-stack__row">
          <dt>{n.label}</dt>
          <dd lang={n.lang}>{n.value}</dd>
        </div>
      ))}
    </dl>
  );
}
