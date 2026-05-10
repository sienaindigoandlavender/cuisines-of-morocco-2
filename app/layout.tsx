import type { Metadata } from "next";
import Link from "next/link";
import { Source_Serif_4, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

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
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
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
              <Link href="/produce">Produce</Link>
              <Link href="/lineages">Lineages</Link>
              <Link href="/techniques">Techniques</Link>
              <Link href="/glossary">Glossary</Link>
              <Link href="/search">Search</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="site-footer__inner">
            <p className="site-footer__brand">Cuisines of Morocco</p>
            <p className="site-footer__tag">
              A memory-led, recipe-first culinary wiki of Moroccan food.
            </p>
          </div>
          <div className="site-footer__meta">
            <p>
              A <span className="site-footer__strong">Slow Morocco</span> Project
            </p>
            <p className="site-footer__sisters">
              <a href="https://slowmorocco.com" rel="external">Slow Morocco</a>
              <span aria-hidden>/</span>
              <a href="https://aboutheamazigh.com" rel="external">About The Amazigh</a>
              <span aria-hidden>/</span>
              <a href="https://derb.so" rel="external">Derb.so</a>
              <span aria-hidden>/</span>
              <a href="https://riaddisiena.com" rel="external">Riad di Siena</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
