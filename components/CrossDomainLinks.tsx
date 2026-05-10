import { EXTERNAL_DOMAINS } from "@/lib/seo/cross-domain";
import type { CrossDomainLinks as Links } from "@/lib/schemas/types";

type SlugProps = { slug: string; label?: string };

export function AmazighDictionaryLink({ slug, label }: SlugProps) {
  return (
    <a
      className="cdl cdl--amazigh"
      href={`${EXTERNAL_DOMAINS.amazighDictionary}/${slug}`}
      rel="external noopener"
      target="_blank"
    >
      {label ?? `Tamazight entry: ${slug}`} <span aria-hidden>↗</span>
    </a>
  );
}

export function DerbLink({ slug, label }: SlugProps) {
  return (
    <a className="cdl cdl--derb" href={`${EXTERNAL_DOMAINS.derb}/${slug}`} rel="external noopener" target="_blank">
      {label ?? `On Derb.so: ${slug}`} <span aria-hidden>↗</span>
    </a>
  );
}

export function ZfritiLink({ slug, label }: SlugProps) {
  return (
    <a className="cdl cdl--zfriti" href={`${EXTERNAL_DOMAINS.zfriti}/${slug}`} rel="external noopener" target="_blank">
      {label ?? `Zfriti SKU: ${slug}`} <span aria-hidden>↗</span>
    </a>
  );
}

export function SlowMoroccoLink({ slug, label }: SlugProps) {
  return (
    <a
      className="cdl cdl--slowmorocco"
      href={`${EXTERNAL_DOMAINS.slowMorocco}/${slug}`}
      rel="external noopener"
      target="_blank"
    >
      {label ?? `On Slow Morocco: ${slug}`} <span aria-hidden>↗</span>
    </a>
  );
}

export function CrossDomainBlock({ links, zfritiSkus }: { links?: Links; zfritiSkus?: string[] }) {
  const items: React.ReactNode[] = [];
  if (links?.amazighDictionarySlug) {
    items.push(<AmazighDictionaryLink key="ama" slug={links.amazighDictionarySlug} />);
  }
  if (links?.derbSlug) {
    items.push(<DerbLink key="derb" slug={links.derbSlug} />);
  }
  if (links?.slowMoroccoSlug) {
    items.push(<SlowMoroccoLink key="sm" slug={links.slowMoroccoSlug} />);
  }
  const skus = zfritiSkus ?? (links?.zfritiSku ? [links.zfritiSku] : []);
  skus.forEach((sku, i) => items.push(<ZfritiLink key={`z-${i}`} slug={sku} />));
  if (items.length === 0) return null;
  return (
    <aside className="cross-domain" aria-label="Connected across the ecosystem">
      <h3 className="cross-domain__title">Elsewhere in the ecosystem</h3>
      <ul className="cross-domain__list">
        {items.map((node, i) => (
          <li key={i}>{node}</li>
        ))}
      </ul>
    </aside>
  );
}
