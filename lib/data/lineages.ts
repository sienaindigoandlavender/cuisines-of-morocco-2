import type { Lineage } from "@/lib/schemas/types";

export const lineages: Lineage[] = [
  {
    type: "lineage",
    slug: "andalusi-cuisine",
    name: "Andalusi cuisine",
    name_arabic: "المطبخ الأندلسي",
    one_line_placement: "The kitchen that crossed the Strait after 1492.",
    narrative:
      "When the Catholic Reconquista drove the last Muslims and Jews out of Granada, the cooking of Al-Andalus came with them — into Fez, Tetouan, Salé, and Rabat. Almond pastry, orange-blossom water, layered savoury-sweet meat dishes, the whole ornate vocabulary of Moroccan formal cuisine descends from this transplant.",
    dishes_carrying_it: ["meskouta", "rfissa", "harira", "sellou", "couscous-tfaya"],
    regions_associated: ["fez", "tetouan"],
    published: true,
    illustration_filename: "andalusi-cuisine.svg",
    related_entries: [
      { type: "region", slug: "fez" },
      { type: "region", slug: "tetouan" },
      { type: "ingredient", slug: "almond" },
      { type: "ingredient", slug: "orange" },
      { type: "dish", slug: "rfissa" },
    ],
  },
  {
    type: "lineage",
    slug: "amazigh-kitchen",
    name: "Amazigh kitchen",
    name_tamazight: "Imensi n Imazighen",
    one_line_placement: "The older layer — the cooking of the land before the cities.",
    narrative:
      "The Amazigh kitchen is the foundation underneath everything else: couscous itself, the techniques of preservation (smen, khlii), the bread-and-oil meal, argan in the south, barley in the Atlas. It survives most plainly in mountain and rural cooking, and it is the part of Moroccan food that pre-dates every successive arrival.",
    dishes_carrying_it: ["bissara", "baghrir", "couscous-tfaya", "khlii"],
    regions_associated: ["essaouira", "marrakech"],
    published: true,
    illustration_filename: "amazigh-kitchen.svg",
    related_entries: [
      { type: "ingredient", slug: "argan" },
      { type: "ingredient", slug: "smen" },
      { type: "dish", slug: "couscous-tfaya" },
      { type: "dish", slug: "baghrir" },
      { type: "region", slug: "essaouira" },
    ],
    cross_domain: { amazighDictionarySlug: "imensi" },
  },
];
