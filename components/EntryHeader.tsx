import { NameStack } from "./NameStack";
import { BotanicalIllustration } from "./BotanicalIllustration";
import type { AnyEntry } from "@/lib/schemas/types";

type Props = {
  entry: AnyEntry;
  placement: string;
  /**
   * When true, render the botanical illustration in the header. Default
   * false — V1 is wiki-structured and text-led; illustrations and photos
   * get woven in later.
   */
  withIllustration?: boolean;
};

export function EntryHeader({ entry, placement, withIllustration = false }: Props) {
  return (
    <header className={withIllustration ? "entry-header" : "entry-header entry-header--text"}>
      <div className="entry-header__text">
        <p className="entry-header__kind">{labelFor(entry.type)}</p>
        <h1 className="entry-header__title">{entry.name}</h1>
        <p className="entry-header__placement">
          <em>{placement}</em>
        </p>
        <NameStack entry={entry} />
      </div>
      {withIllustration && (
        <div className="entry-header__illustration">
          <BotanicalIllustration filename={entry.illustration_filename} alt={`Illustration of ${entry.name}`} priority />
        </div>
      )}
    </header>
  );
}

function labelFor(t: AnyEntry["type"]) {
  return { dish: "Dish", ingredient: "Ingredient", region: "Region", lineage: "Lineage", technique: "Technique" }[t];
}
