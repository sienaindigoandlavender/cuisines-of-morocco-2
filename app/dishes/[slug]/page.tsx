import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDish, getPublishedDishes } from "@/lib/data";
import { EntryHeader } from "@/components/EntryHeader";
import { CrossLinkFooter } from "@/components/CrossLinkFooter";
import { CrossDomainBlock } from "@/components/CrossDomainLinks";
import { JsonLd, recipeJsonLd } from "@/lib/seo/structured-data";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getPublishedDishes().map((d) => ({ slug: d.slug }));
}

export const dynamicParams = false;
export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const d = getDish(slug);
  if (!d) return {};
  return {
    title: d.name,
    description: d.one_line_placement,
    alternates: { canonical: `/dishes/${d.slug}` },
    openGraph: {
      type: "article",
      title: d.name,
      description: d.one_line_placement,
      url: `/dishes/${d.slug}`,
    },
  };
}

export default async function DishPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const d = getDish(slug);
  if (!d) notFound();
  const r = d.recipe_block;
  const hasRecipe = r.ingredients.length > 0 || r.method.length > 0;

  return (
    <article>
      <JsonLd data={recipeJsonLd(d)} />
      <EntryHeader entry={d} placement={d.one_line_placement} />

      {hasRecipe ? (
        <section className="recipe">
          {(r.servings || r.total_time || r.prep_time || r.cook_time) && (
            <div className="recipe__meta">
              {r.servings && <span>Serves · {r.servings}</span>}
              {r.prep_time && <span>Prep · {r.prep_time}</span>}
              {r.cook_time && <span>Cook · {r.cook_time}</span>}
              {r.total_time && <span>Total · {r.total_time}</span>}
            </div>
          )}
          <div className="recipe__columns">
            <div>
              <h3>Ingredients</h3>
              <ul>
                {r.ingredients.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Method</h3>
              <ol>
                {r.method.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ol>
              {r.notes && r.notes.length > 0 && (
                <div className="recipe__notes">
                  {r.notes.map((n, idx) => (
                    <p key={idx}>{n}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      ) : (
        <section className="recipe">
          <p className="recipe__notes">Recipe to come.</p>
        </section>
      )}

      <hr className="threshold" aria-hidden />

      <section className="prose">
        {d.memory_layer && <p>{d.memory_layer}</p>}
        {d.lineage_layer && (
          <>
            <h2>Lineage</h2>
            <p>{d.lineage_layer}</p>
          </>
        )}
        {d.regional_variations && (
          <>
            <h2>Regional variations</h2>
            <p>{d.regional_variations}</p>
          </>
        )}
      </section>

      <CrossDomainBlock links={d.cross_domain} zfritiSkus={d.zfriti_skus} />
      <CrossLinkFooter refs={d.related_entries} />
    </article>
  );
}
