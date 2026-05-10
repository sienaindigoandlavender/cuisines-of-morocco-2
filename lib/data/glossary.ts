import type { GlossaryTerm } from "@/lib/schemas/types";

/**
 * Vocabulary entries — short definitions of culinary terms that don't (yet)
 * carry a full dish/ingredient/region page. They appear in /glossary alongside
 * categorised dishes, ingredients, and techniques.
 */
export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "tajine",
    term: "Tajine",
    term_darija: "Tajine",
    term_tamazight: "Tajin",
    term_arabic: "طاجين",
    definition:
      "Both the conical-lidded earthenware vessel and the slow-cooked stew that emerges from it. The lid traps steam, drips it back down, and lets a small amount of liquid stretch over hours.",
    categories: ["stew", "savory"],
    related_entries: [
      { type: "dish", slug: "tangia" },
      { type: "lineage", slug: "amazigh-kitchen" },
    ],
  },
  {
    slug: "amlou",
    term: "Amlou",
    term_tamazight: "Amlu",
    definition:
      "A paste of toasted almonds, argan oil, and honey. Spread on bread for breakfast in the Souss; sometimes called 'Berber Nutella'.",
    categories: ["sweet", "breakfast", "condiment"],
    related_entries: [
      { type: "ingredient", slug: "argan" },
      { type: "ingredient", slug: "almond" },
      { type: "region", slug: "essaouira" },
      { type: "lineage", slug: "amazigh-kitchen" },
    ],
  },
  {
    slug: "mhammar",
    term: "M'hammar",
    term_arabic: "محمر",
    definition:
      "A style of tagine — meat or chicken braised down in butter, saffron, paprika, and ginger until the sauce reduces to a glossy red coat. Often finished with preserved lemon and olives.",
    categories: ["savory", "umami", "stew"],
    related_entries: [
      { type: "ingredient", slug: "saffron" },
      { type: "ingredient", slug: "preserved-lemon" },
    ],
  },
  {
    slug: "mqalli",
    term: "M'qalli",
    term_arabic: "مقلي",
    definition:
      "The yellow tagine — saffron, ginger, olive oil, no paprika. Usually chicken with preserved lemon and green olives. The bright sister to m'hammar's red.",
    categories: ["savory", "stew"],
    related_entries: [
      { type: "ingredient", slug: "saffron" },
      { type: "ingredient", slug: "preserved-lemon" },
    ],
  },
  {
    slug: "msemen",
    term: "M'semen",
    term_darija: "M'semen",
    term_arabic: "مسمن",
    definition:
      "A square, layered, pan-fried flatbread, folded out of an oily semolina dough. Sold by the stack at street stalls and eaten for breakfast with honey and butter.",
    categories: ["bread", "breakfast", "everyday"],
  },
  {
    slug: "harcha",
    term: "Harcha",
    term_arabic: "حرشة",
    definition:
      "A semolina griddle cake with a sandy crumb, cooked on a flat pan and split open while warm to take honey or jam. The texture is somewhere between cornbread and shortbread.",
    categories: ["bread", "breakfast", "tea-time"],
  },
  {
    slug: "khoubz",
    term: "Khoubz",
    term_darija: "Khoubz",
    term_arabic: "خبز",
    definition:
      "Everyday bread — round, flat, slightly thicker at the rim. Baked in the neighbourhood farran (communal oven) or at home. The utensil and the staple.",
    categories: ["bread", "everyday"],
  },
  {
    slug: "bastilla",
    term: "Bastilla",
    term_darija: "B'stilla",
    term_arabic: "بسطيلة",
    definition:
      "The ceremonial pie — pigeon (or chicken) layered with eggs, almonds, cinnamon, and sugar between sheets of warqa, baked, and dusted with icing sugar. Sweet and savoury at once.",
    categories: ["sweet", "savory", "pastry", "celebration"],
    related_entries: [
      { type: "technique", slug: "warqa" },
      { type: "ingredient", slug: "almond" },
      { type: "region", slug: "fez" },
      { type: "lineage", slug: "andalusi-cuisine" },
    ],
  },
  {
    slug: "briouat",
    term: "Briouat",
    term_arabic: "بريوات",
    definition:
      "A small folded warqa parcel — triangular or cigar-shaped — fried until crisp. Savoury fillings (meat, cheese, seafood) for a meal; sweet ones (almond paste, honey) for tea.",
    categories: ["sweet", "savory", "pastry", "snack"],
    related_entries: [
      { type: "technique", slug: "warqa" },
      { type: "ingredient", slug: "almond" },
    ],
  },
  {
    slug: "chebakia",
    term: "Chebakia",
    term_arabic: "الشباكية",
    definition:
      "A flower-shaped, sesame-studded pastry, deep-fried then drenched in honey and orange-blossom syrup. The Ramadan companion to harira — every household makes a year's supply in the days before.",
    categories: ["sweet", "pastry", "ramadan"],
    related_entries: [
      { type: "dish", slug: "harira" },
    ],
  },
  {
    slug: "ghoriba",
    term: "Ghoriba",
    term_arabic: "غريبة",
    definition:
      "A class of crumbly Moroccan cookie — almond, semolina, sesame, or coconut. Crackled tops, soft middles, served at weddings and on Eid.",
    categories: ["sweet", "pastry", "tea-time", "celebration"],
    related_entries: [
      { type: "ingredient", slug: "almond" },
    ],
  },
  {
    slug: "kaab-el-ghazal",
    term: "Kaab el Ghazal",
    term_arabic: "كعب الغزال",
    definition:
      "Literally 'gazelle's ankles' — a horn-shaped pastry filled with almond paste scented with orange-blossom water. The most formal of the Fassi tea-table sweets.",
    categories: ["sweet", "pastry", "tea-time", "celebration"],
    related_entries: [
      { type: "ingredient", slug: "almond" },
      { type: "region", slug: "fez" },
      { type: "lineage", slug: "andalusi-cuisine" },
    ],
  },
  {
    slug: "atay",
    term: "Atay",
    term_darija: "Atay",
    term_tamazight: "Atay",
    term_arabic: "أتاي",
    definition:
      "Mint tea — green tea (gunpowder), fresh spearmint, plenty of sugar — poured high to froth in the glass. The unbroken thread of Moroccan hospitality from morning through midnight.",
    categories: ["sweet", "drink", "tea-time", "everyday"],
  },
  {
    slug: "mechoui",
    term: "Mechoui",
    term_arabic: "مشوي",
    definition:
      "A whole lamb (or shoulder) slow-roasted in a clay-lined pit, salted simply, served with cumin and salt for dipping. The set-piece of the celebratory feast.",
    categories: ["savory", "umami", "celebration"],
    related_entries: [
      { type: "region", slug: "marrakech" },
    ],
  },
  {
    slug: "marqa",
    term: "Marqa",
    term_arabic: "مرقة",
    definition:
      "The base sauce of a tagine — onion, oil, water, spices, slow-cooked into a glossy reduction. The thing the meat sits in, the thing the bread mops up.",
    categories: ["savory", "stew"],
  },
  {
    slug: "tfaya",
    term: "Tfaya",
    term_arabic: "التفاية",
    definition:
      "The sweet topping of caramelised onion, raisins, cinnamon, and honey that crowns a couscous or a chicken tagine — the Andalusi gesture inside the savoury course.",
    categories: ["sweet", "savory", "condiment"],
    related_entries: [
      { type: "dish", slug: "couscous-tfaya" },
      { type: "lineage", slug: "andalusi-cuisine" },
    ],
  },
  {
    slug: "souk",
    term: "Souk",
    term_darija: "Souk",
    term_arabic: "سوق",
    definition:
      "The market — daily, weekly, or seasonal. Where the spice merchant builds his ras el hanout, where the fishmonger lays out the morning's catch, where a recipe begins.",
    categories: ["everyday"],
  },
  {
    slug: "hammam",
    term: "Hammam",
    term_arabic: "حمام",
    definition:
      "The neighbourhood steam bath. Its furnace, banked with embers all day, doubles as the slow-roast oven for tangia — the bachelor's pot buried beside the fire.",
    categories: ["everyday"],
    related_entries: [
      { type: "dish", slug: "tangia" },
    ],
  },
  {
    slug: "farran",
    term: "Farran",
    term_arabic: "فرن",
    definition:
      "The communal wood-fired oven. Households shape their bread at home, mark each loaf, and send it to the farran on a tray; it comes back baked and unmistakable.",
    categories: ["bread", "everyday"],
  },
  {
    slug: "tagra",
    term: "Tagra",
    term_arabic: "طاجرة",
    definition:
      "A wide, shallow earthenware dish, used for slow-baked fish or vegetable preparations — particularly in the north and on the Atlantic coast.",
    categories: ["savory"],
  },
  {
    slug: "gsaa",
    term: "Gsaa",
    term_arabic: "قصعة",
    definition:
      "The wide, low wooden bowl used for kneading bread, working couscous, and serving the latter at table. The vessel that defines the gesture.",
    categories: ["bread", "everyday"],
  },
];
