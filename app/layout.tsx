import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cuisinesofmorocco.com"),
  title: {
    default: "Cuisines of Morocco",
    template: "%s — Cuisines of Morocco",
  },
  description:
    "A memory-led, recipe-first culinary wiki of Moroccan food — dishes, ingredients, regions, lineages, techniques.",
  openGraph: {
    type: "website",
    siteName: "Cuisines of Morocco",
    title: "Cuisines of Morocco",
    description:
      "A memory-led, recipe-first culinary wiki of Moroccan food — dishes, ingredients, regions, lineages, techniques.",
    url: "https://cuisinesofmorocco.com",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="site-header__inner">
            <Link href="/" className="site-header__brand">
              Cuisines of Morocco
            </Link>
            <nav className="site-header__nav" aria-label="Primary">
              <Link href="/dishes">Dishes</Link>
              <Link href="/ingredients">Ingredients</Link>
              <Link href="/regions">Regions</Link>
              <Link href="/lineages">Lineages</Link>
              <Link href="/techniques">Techniques</Link>
              <Link href="/search">Search</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <p>
            Part of the Slow Morocco ecosystem ·{" "}
            <a href="https://slowmorocco.com" rel="external">
              Slow Morocco
            </a>{" "}
            ·{" "}
            <a href="https://aboutheamazigh.com" rel="external">
              About The Amazigh
            </a>{" "}
            ·{" "}
            <a href="https://derb.so" rel="external">
              Derb.so
            </a>{" "}
            ·{" "}
            <a href="https://riaddisiena.com" rel="external">
              Riad di Siena
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
