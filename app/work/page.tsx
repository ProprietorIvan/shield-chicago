import { TRADES } from "@/lib/trades";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The work",
  description:
    "Shield Chicago restoration trades: pump-out, structural dry-out, floors, walls, wet rooms, and keep-it-dry work.",
};

export default function WorkIndex() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">The work</p>
      <h1 className="mt-3 font-display text-4xl">Six trades. One loss file.</h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-quiet">
        We do not hand you a different company for the dry-out and the drywall. Extraction through
        paint is the same crew family, the same moisture map, the same Chicago dispatch.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {TRADES.map((trade) => (
          <Link key={trade.slug} href={`/work/${trade.slug}`} className="border border-void/10 p-6 hover:border-copper">
            <p className="text-xs text-copper">{trade.numeral}</p>
            <h2 className="mt-2 font-display text-2xl">{trade.name}</h2>
            <p className="mt-3 text-sm leading-6 text-quiet">{trade.blurb}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
