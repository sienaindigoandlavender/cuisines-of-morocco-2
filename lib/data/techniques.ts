import type { Technique } from "@/lib/schemas/types";

export const techniques: Technique[] = [
  {
    type: "technique",
    slug: "warqa",
    name: "Warqa",
    name_darija: "Werqa",
    name_arabic: "ورقة",
    one_line_placement: "The paper-thin pastry sheet, slapped onto a hot dome.",
    definition:
      "Warqa is the leaf-thin pastry that wraps bastilla, briouats, and the sweet pastries of the formal kitchen. A wet dough is dabbed in overlapping circles onto a heated inverted pan; each pass leaves behind a translucent layer.",
    method_block: [
      "Make a slack, smooth dough from strong flour, water, salt, and a little oil. Rest it for an hour, covered, until very elastic.",
      "Heat a wide, flat inverted pan (a tobsil, or a smooth-bottomed wok) over a low flame.",
      "Take a handful of dough and, holding it loosely, dab it onto the hot surface in overlapping circles, building a thin, even sheet.",
      "Lift the finished sheet immediately — it should peel cleanly. Stack between cloths.",
    ],
    dishes_using_it: ["rfissa"],
    published: true,
    illustration_filename: "warqa.svg",
    related_entries: [
      { type: "dish", slug: "rfissa" },
      { type: "region", slug: "fez" },
      { type: "lineage", slug: "andalusi-cuisine" },
    ],
  },
  {
    type: "technique",
    slug: "charmoula",
    name: "Charmoula",
    name_darija: "Chermoula",
    name_arabic: "شرمولة",
    one_line_placement: "The herb-and-spice paste that meets the fish, and the meat, and the larder.",
    definition:
      "Charmoula is a wet marinade — coriander, parsley, garlic, cumin, paprika, lemon, olive oil — that anchors a vast range of Moroccan cooking. There is a fish charmoula (the most famous), a meat charmoula, a preservation charmoula for khlii.",
    method_block: [
      "Chop a generous bunch of coriander and a smaller bunch of parsley as fine as you can.",
      "Pound four cloves of garlic with a teaspoon of salt to a paste.",
      "Combine with two teaspoons cumin, two teaspoons sweet paprika, half a teaspoon hot paprika, juice of a lemon, and enough olive oil to make a loose paste.",
      "Let it sit thirty minutes before using — the flavours need to bind.",
    ],
    dishes_using_it: ["bissara", "khlii"],
    published: true,
    illustration_filename: "charmoula.svg",
    related_entries: [
      { type: "dish", slug: "bissara" },
      { type: "dish", slug: "khlii" },
      { type: "ingredient", slug: "preserved-lemon" },
      { type: "region", slug: "essaouira" },
    ],
  },
  {
    type: "technique",
    slug: "preserving-lemons",
    name: "Preserving lemons",
    name_darija: "Hamd Mrakad",
    name_arabic: "تحميض الليمون",
    one_line_placement: "Salt and time, and the lemon becomes something else.",
    definition:
      "The Moroccan preserved lemon is a kitchen staple: lemons quartered, packed with salt, sealed in a jar, left for at least four weeks. The rind softens; the flesh dissolves into paste; the result is salt-bright, faintly bitter, and tastes of nothing else.",
    method_block: [
      "Choose small, thin-skinned lemons (doqq lemons if you can find them). Scrub them clean.",
      "Quarter each lemon down through the top, leaving them joined at the base.",
      "Pack the inside of each lemon generously with coarse sea salt and push them into a clean jar.",
      "Press down to release juice; top up with extra lemon juice until the lemons are fully submerged.",
      "Seal and leave somewhere cool for at least four weeks. They keep, refrigerated, for a year.",
    ],
    dishes_using_it: ["tangia", "harira"],
    published: true,
    illustration_filename: "preserving-lemons.svg",
    related_entries: [
      { type: "ingredient", slug: "preserved-lemon" },
      { type: "dish", slug: "tangia" },
      { type: "region", slug: "marrakech" },
    ],
  },
];
