import { NameStack } from "./NameStack";
import { BotanicalIllustration } from "./BotanicalIllustration";
import type { AnyEntry } from "@/lib/schemas/types";

export function EntryHeader({ entry, placement }: { entry: AnyEntry; placement: string }) {
  return (
    <header className="entry-header">
      <div className="entry-header__text">
        <p className="entry-header__kind">{labelFor(entry.type)}</p>
        <h1 className="entry-header__title">{entry.name}</h1>
        <p className="entry-header__placement">
          <em>{placement}</em>
        </p>
        <NameStack entry={entry} />
      </div>
      <div className="entry-header__illustration">
        <BotanicalIllustration filename={entry.illustration_filename} alt={`Illustration of ${entry.name}`} priority />
      </div>
    </header>
  );
}

function labelFor(t: AnyEntry["type"]) {
  return { dish: "Dish", ingredient: "Ingredient", region: "Region", lineage: "Lineage", technique: "Technique" }[t];
}
