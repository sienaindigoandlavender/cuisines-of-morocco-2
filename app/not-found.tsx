import Link from "next/link";

export default function NotFound() {
  return (
    <section style={{ padding: "4rem 0", maxWidth: "var(--measure)" }}>
      <p style={{ fontFamily: "var(--sans)", color: "var(--ink-soft)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
        404
      </p>
      <h1 style={{ fontFamily: "var(--display)", fontSize: "2.4rem", margin: "0.5rem 0 1rem" }}>Not here yet.</h1>
      <p>The wiki is young. Try the <Link href="/">homepage</Link> or one of the indexes in the header.</p>
    </section>
  );
}
