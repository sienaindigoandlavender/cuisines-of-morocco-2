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
      "Both the conical-lidded earthenware vessel and the stew that comes out of it. The lid traps steam, drips it back down, and stretches a small amount of liquid over hours.",
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
      "The yellow tagine — saffron, ginger, olive oil, no paprika. Usually chicken with preserved lemon and green olives.",
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
      "Everyday bread — round, flat, slightly thicker at the rim. Baked in the neighbourhood farran or at home. Used as a utensil as much as a food: a torn piece of khoubz is how you scoop a tagine.",
    categories: ["bread", "everyday"],
  },
  {
    slug: "bastilla",
    term: "Bastilla",
    term_darija: "B'stilla",
    term_arabic: "بسطيلة",
    definition:
      "The ceremonial pie — pigeon (or chicken) layered with eggs, almonds, cinnamon, and sugar between sheets of warqa, baked, and dusted with icing sugar. Sweet and savoury in the same bite.",
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
      "Mint tea — green tea (gunpowder), fresh spearmint, plenty of sugar — poured from a height to froth the glass. Refilled until you cover the glass with your hand to refuse.",
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
      "The sweet topping of caramelised onion, raisins, cinnamon, and honey that crowns a couscous or a chicken tagine — an Andalusi habit, sweetness inside the savoury course.",
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
      "The market — daily, weekly, or seasonal. Where the spice merchant builds his ras el hanout, where the fishmonger lays out the morning's catch.",
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
      "The wide, low wooden bowl used for kneading bread, working couscous, and serving the latter at table. Often carved from a single block of walnut or olive wood, and handed down.",
    categories: ["bread", "everyday"],
  },

  // — Dishes & preparations without their own page —

  {
    slug: "sfenj",
    term: "Sfenj",
    term_darija: "Sfenj",
    term_arabic: "سفنج",
    definition:
      "The doughnut without sugar. Yeasted, fried in deep oil, threaded onto a length of palm fibre and carried home swinging. Dipped in honey, or in strong tea.",
    categories: ["bread", "snack", "breakfast", "friday"],
  },
  {
    slug: "meloui",
    term: "Meloui",
    term_darija: "Meloui",
    term_arabic: "ملوي",
    definition:
      "A thinner version of msemen — a long ribbon of oiled dough wound into a flat spiral and pan-fried. Shatters when you bite it.",
    categories: ["bread", "breakfast"],
  },
  {
    slug: "zaalouk",
    term: "Zaalouk",
    term_arabic: "زعلوك",
    definition:
      "Charred aubergine and tomato, cooked down with garlic, cumin, and paprika until almost a paste. Eaten cold with bread.",
    categories: ["savory", "salad", "condiment"],
  },
  {
    slug: "taktouka",
    term: "Taktouka",
    term_arabic: "تكتوكة",
    definition:
      "Like zaalouk, but with green pepper instead of aubergine. Tomato, smoke from the grill, lemon at the end. Served cold, lifted with bread.",
    categories: ["savory", "salad", "condiment"],
  },
  {
    slug: "mrouzia",
    term: "Mrouzia",
    term_arabic: "مروزية",
    definition:
      "Lamb cooked down in honey, raisins, and ras el hanout until glossy and black. The Eid tagine — often made from the slaughter sheep's leftover meat.",
    categories: ["sweet", "savory", "stew", "celebration"],
    related_entries: [
      { type: "ingredient", slug: "ras-el-hanout" },
    ],
  },
  {
    slug: "seffa",
    term: "Seffa",
    term_arabic: "سفة",
    definition:
      "Steamed couscous or vermicelli mounted into a sweet pyramid, dusted with cinnamon and sugar, scattered with toasted almonds. The last savoury course or the first sweet, depending on the host.",
    categories: ["sweet", "celebration", "tea-time"],
    related_entries: [
      { type: "ingredient", slug: "almond" },
    ],
  },
  {
    slug: "mahjouba",
    term: "Mahjouba",
    term_darija: "Mahjouba",
    definition:
      "A folded semolina flatbread, stuffed with onion and tomato, griddled on the spot. Five dirhams from a man with a hot plate and a folding stool — bus-station food, train-station food.",
    categories: ["bread", "snack", "everyday"],
  },
  {
    slug: "batbout",
    term: "Batbout",
    term_arabic: "بطبوط",
    definition:
      "A small, puffed flatbread, pita-shaped, cooked on a dry pan. Splits open to take cheese, kefta, anything.",
    categories: ["bread", "everyday", "snack"],
  },
  {
    slug: "kefta",
    term: "Kefta",
    term_arabic: "كفتة",
    definition:
      "Spiced minced meat, lamb or beef. Skewered for the grill, rolled into balls for the tagine, cracked into eggs for the kefta tajine.",
    categories: ["savory", "umami", "everyday"],
  },
  {
    slug: "mhencha",
    term: "M'hencha",
    term_arabic: "المحنشة",
    definition:
      "The 'snake'. A long coil of warqa wrapped around almond paste, baked into a flat spiral, dusted with cinnamon and powdered sugar.",
    categories: ["sweet", "pastry", "tea-time", "celebration"],
    related_entries: [
      { type: "technique", slug: "warqa" },
      { type: "ingredient", slug: "almond" },
    ],
  },
  {
    slug: "krachel",
    term: "Krachel",
    term_arabic: "كراشل",
    definition:
      "Sesame-and-anise rolls, faintly sweet. Eaten with tea, or with a triangle of Vache qui Rit smashed into the middle. The triangle is wrong. Moroccan children disagree.",
    categories: ["sweet", "bread", "tea-time", "breakfast"],
  },
  {
    slug: "fakia",
    term: "Fakia",
    term_arabic: "فاكية",
    definition:
      "Literally 'fruit'. The bowl of dates, figs, almonds, and walnuts that opens an iftar before the harira.",
    categories: ["sweet", "snack", "ramadan"],
    related_entries: [
      { type: "dish", slug: "harira" },
      { type: "ingredient", slug: "almond" },
    ],
  },
  {
    slug: "trid",
    term: "Trid",
    term_arabic: "تريد",
    definition:
      "Torn sheets of paper-thin pastry layered with chicken, lentils, and broth. Said in Morocco to be the Prophet's favourite dish; the rural ancestor of rfissa.",
    categories: ["savory", "umami", "stew", "celebration"],
    related_entries: [
      { type: "dish", slug: "rfissa" },
      { type: "technique", slug: "warqa" },
    ],
  },
  {
    slug: "fekkas",
    term: "Fekkas",
    term_arabic: "فقاص",
    definition:
      "Twice-baked Moroccan biscuits — a loaf is baked, sliced, baked again. Studded with almonds, raisins, anise, or sesame. Keeps in a tin until next month.",
    categories: ["sweet", "pastry", "tea-time"],
    related_entries: [
      { type: "ingredient", slug: "almond" },
    ],
  },
  {
    slug: "znoud-el-sit",
    term: "Znoud el Sit",
    term_arabic: "زنود الست",
    definition:
      "'The lady's arms'. Cigars of warqa filled with milk-and-almond cream, fried, soaked in syrup. Levantine in origin, naturalised in the Fassi kitchen.",
    categories: ["sweet", "pastry", "celebration", "tea-time"],
    related_entries: [
      { type: "technique", slug: "warqa" },
      { type: "ingredient", slug: "almond" },
    ],
  },
  {
    slug: "tagine-bel-barkouk",
    term: "Tagine bel Barkouk",
    term_arabic: "طاجين بالبرقوق",
    definition:
      "Lamb with prunes, almonds, sesame, and cinnamon. The wedding tagine of Fez.",
    categories: ["sweet", "savory", "stew", "celebration"],
    related_entries: [
      { type: "ingredient", slug: "almond" },
      { type: "region", slug: "fez" },
      { type: "lineage", slug: "andalusi-cuisine" },
    ],
  },
  {
    slug: "sahlab",
    term: "Sahlab",
    term_arabic: "سحلب",
    definition:
      "The winter milk drink — orchid-root starch thickened with milk and sugar, cinnamon and crushed nut on top. Drunk on cold nights, particularly in the north.",
    categories: ["sweet", "drink", "winter"],
  },
  {
    slug: "halwa",
    term: "Halwa",
    term_arabic: "حلوى",
    definition:
      "The umbrella for all Moroccan sweets — biscuits, fried pastry, pulled sugar, almond confection. The plate in the centre of the tea tray.",
    categories: ["sweet", "tea-time", "celebration"],
  },
  {
    slug: "merguez",
    term: "Merguez",
    term_arabic: "مرقاز",
    definition:
      "Spiced lamb sausage — paprika, cumin, harissa. Coiled on the grill at the souk, slid into a sandwich, set beside the eggs at breakfast.",
    categories: ["savory", "umami", "snack"],
  },

  // — Kitchen objects & the furniture of hospitality —

  {
    slug: "berred",
    term: "Berred",
    term_darija: "Berred",
    term_arabic: "براد",
    definition:
      "The teapot. Silver, enamel, or — at the bottom of the price ladder — aluminium. The handle is long because the pour is long.",
    categories: ["tea-time", "everyday"],
  },
  {
    slug: "siniya",
    term: "Siniya",
    term_arabic: "صينية",
    definition:
      "The engraved brass tea tray. The teapot, the glasses, the sugar cone, the box of mint — all live on the siniya. When it comes out of the kitchen, work stops.",
    categories: ["tea-time", "everyday"],
  },
  {
    slug: "kanoun",
    term: "Kanoun",
    term_arabic: "كانون",
    definition:
      "The charcoal brazier. A clay or metal bowl holding embers — used for the kettle, the tagine, and the room itself on a winter morning.",
    categories: ["everyday", "winter"],
  },
  {
    slug: "kskas",
    term: "Kskas",
    term_darija: "Kskas",
    term_tamazight: "Kskas",
    term_arabic: "كسكاس",
    definition:
      "The couscoussier. A two-tier pot — a wide-bellied bottom for the broth and meat, a perforated top for the grain. The steam rises and the couscous swells.",
    categories: ["everyday", "friday"],
    related_entries: [
      { type: "dish", slug: "couscous-tfaya" },
    ],
  },
  {
    slug: "mehraz",
    term: "Mehraz",
    term_arabic: "مهراز",
    definition:
      "The brass mortar and pestle. Heavy and ringing. Where garlic is crushed and spice is bruised. The sound of it carrying through the medina is half the morning.",
    categories: ["everyday", "spice-blend"],
  },

  // — Ingredients without their own page (yet) —

  {
    slug: "ma-zhar",
    term: "Ma Zhar",
    term_darija: "Ma Zhar",
    term_arabic: "ماء الزهر",
    definition:
      "Orange-blossom water — the distillate of bitter-orange flowers from the Fes-Meknes plain. A drop in a glass of water at a wedding, a teaspoon in pastry, a sprinkle on the hands before tea.",
    categories: ["sweet", "condiment"],
    related_entries: [
      { type: "ingredient", slug: "orange" },
      { type: "lineage", slug: "andalusi-cuisine" },
    ],
  },
  {
    slug: "ma-ward",
    term: "Ma Ward",
    term_darija: "Ma Ward",
    term_arabic: "ماء الورد",
    definition:
      "Rose water — distilled from the damask roses of the Dades valley. Used like ma zhar, but more floral, less citric. The Kelaat M'Gouna rose festival in May times the year.",
    categories: ["sweet", "condiment"],
  },
  {
    slug: "zebda",
    term: "Zebda",
    term_arabic: "زبدة",
    definition:
      "Fresh, unsalted butter — what smen is before the salt and the years. Whisked into bread dough, melted over baghrir, mounded into a small bowl beside the breakfast bread.",
    categories: ["fat", "breakfast", "everyday"],
    related_entries: [
      { type: "ingredient", slug: "smen" },
      { type: "dish", slug: "baghrir" },
    ],
  },
  {
    slug: "shiba",
    term: "Shiba",
    term_arabic: "شيبة",
    definition:
      "Wormwood (Artemisia absinthium). Added to mint tea in winter — a thread of bitter green, said to clean the blood. The smell is medicinal; the second glass is the one you want.",
    categories: ["bitter", "drink", "tea-time", "winter"],
  },
  {
    slug: "olives-beldi",
    term: "Zitoun Beldi",
    term_darija: "Zitoun Beldi",
    term_arabic: "زيتون بلدي",
    definition:
      "Black, oil-cured, wrinkled. The country olive of the Moroccan table — bitter, salty, eaten with bread for breakfast or beside the harira. Beldi means 'of the country' — the opposite of roumi, which now means 'foreign' and originally meant 'Roman'.",
    categories: ["bitter", "salty", "preserve", "breakfast"],
    related_entries: [
      { type: "ingredient", slug: "olive-oil" },
    ],
  },

  // — Ritual meals and the calendar around them —

  {
    slug: "iftar",
    term: "Iftar",
    term_arabic: "إفطار",
    definition:
      "The sunset meal that breaks the Ramadan fast. The order is fixed: dates and milk first, then harira, then chebakia, then everything else. In Moroccan cities the midfa al iftar — the iftar cannon — still fires at sundown; ten minutes later the streets are empty and every household is at the table.",
    categories: ["ramadan", "celebration"],
    related_entries: [
      { type: "dish", slug: "harira" },
    ],
  },
  {
    slug: "shour",
    term: "S'hour",
    term_arabic: "سحور",
    definition:
      "The pre-dawn meal of Ramadan, eaten before the day's fast begins. Eggs, msemen, smen, dates, the night-before's leftovers — slow-burning food, for a fasting day.",
    categories: ["ramadan", "breakfast"],
    related_entries: [
      { type: "ingredient", slug: "smen" },
    ],
  },
  {
    slug: "sebaa",
    term: "Sebaa",
    term_arabic: "سبوع",
    definition:
      "The seventh-day naming feast for a newborn. Sellou and rfissa are made; an animal is slaughtered; the name is announced. Friends bring food to the mother for the seven days before.",
    categories: ["celebration", "postpartum"],
    related_entries: [
      { type: "dish", slug: "sellou" },
      { type: "dish", slug: "rfissa" },
    ],
  },
  {
    slug: "moussem",
    term: "Moussem",
    term_arabic: "موسم",
    definition:
      "A saint's-day festival. Music, horse riders firing rifles into the air, food cooked for thousands. The big moussems — Moulay Idriss, Imilchil, Sefrou — anchor the agricultural year.",
    categories: ["celebration"],
  },
  {
    slug: "diffa",
    term: "Diffa",
    term_arabic: "ضيافة",
    definition:
      "The formal feast. The order runs: bastilla, two or three tagines, couscous, fruit, sweets, tea. What weddings, name-days, and important guests demand.",
    categories: ["celebration"],
  },
  {
    slug: "maalem",
    term: "Maâlem",
    term_darija: "Maâlem",
    term_arabic: "معلم",
    definition:
      "Master craftsperson. In the kitchen, the maâlem is the cook who runs a wedding, a hammam tangia, a school canteen. Maâlma is the feminine. The title comes by reputation, not certificate.",
    categories: ["celebration", "everyday"],
    related_entries: [
      { type: "dish", slug: "tangia" },
    ],
  },
];
