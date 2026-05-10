import type { Metadata } from "next";
import { CategoryTagCloud } from "@/components/CategoryTagCloud";
import {
  CATEGORY_LABELS,
  FLAVOR_CATEGORIES,
  FORM_CATEGORIES,
  OCCASION_CATEGORIES,
  glossaryTerms,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Glossary",
  description:
    "A categorised glossary of Moroccan cuisine — flavors, forms, occasions — with the dishes, ingredients, and techniques that fall under each, plus a vocabulary of culinary terms.",
  alternates: { canonical: "/glossary" },
};

export default function GlossaryPage() {
  const allCategories = [...FLAVOR_CATEGORIES, ...FORM_CATEGORIES, ...OCCASION_CATEGORIES];

  return (
    <>
      <header className="hero">
        <p className="hero__eyebrow">Glossary</p>
        <h1>The vocabulary, by category</h1>
        <p>
          Sweet, savory, sour, bitter, umami, salty — and the forms (pastries, breads, soups, stews) and the
          occasions (Ramadan, Friday, postpartum) that organise the Moroccan kitchen. Every dish, ingredient,
          and technique on the wiki appears under the categories it belongs to. Below the clouds, a flat list
          of vocabulary terms with definitions.
        </p>
      </header>

      <nav className="glossary-jump" aria-label="Jump to category">
        {allCategories.map((c) => (
          <a key={c} href={`#cat-${c}`} className="glossary-jump__link">
            {CATEGORY_LABELS[c]}
          </a>
        ))}
        <a href="#definitions" className="glossary-jump__link">
          Definitions
        </a>
      </nav>

      <CategoryTagCloud categories={FLAVOR_CATEGORIES} groupTitle="By flavor" />
      <CategoryTagCloud categories={FORM_CATEGORIES} groupTitle="By form" />
      <CategoryTagCloud categories={OCCASION_CATEGORIES} groupTitle="By occasion" />

      <section className="section" id="definitions">
        <h2>Definitions</h2>
        <p className="prose" style={{ marginBottom: "2rem" }}>
          Vocabulary you&rsquo;ll meet in the recipes and the entries — the words that don&rsquo;t (yet) have a
          page of their own.
        </p>
        <dl className="definitions">
          {glossaryTerms
            .slice()
            .sort((a, b) => a.term.localeCompare(b.term))
            .map((g) => (
              <div key={g.slug} className="definitions__row" id={`term-${g.slug}`}>
                <dt>
                  <span className="definitions__term">{g.term}</span>
                  {(g.term_arabic || g.term_darija || g.term_tamazight) && (
                    <span className="definitions__alt">
                      {g.term_arabic ? <span>{g.term_arabic}</span> : null}
                      {g.term_tamazight ? <span> · {g.term_tamazight}</span> : null}
                    </span>
                  )}
                </dt>
                <dd>
                  <p>{g.definition}</p>
                  <p className="definitions__cats">
                    {g.categories.map((c) => (
                      <span key={c} className="definitions__cat">
                        {CATEGORY_LABELS[c]}
                      </span>
                    ))}
                  </p>
                </dd>
              </div>
            ))}
        </dl>
      </section>
    </>
  );
}
