import { tradeBySlug, TRADES } from "@/lib/trades";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FIRM } from "@/lib/firm";

export function generateStaticParams() {
  return TRADES.map((trade) => ({ slug: trade.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const trade = tradeBySlug(slug);
  if (!trade) return { title: "Trade" };
  return { title: trade.name, description: trade.blurb };
}

export default async function TradePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const trade = tradeBySlug(slug);
  if (!trade) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
        {trade.numeral} · The work
      </p>
      <h1 className="mt-3 font-display text-4xl">{trade.name}</h1>
      <p className="mt-5 text-lg leading-8 text-void">{trade.promise}</p>
      <ol className="mt-10 space-y-4">
        {trade.steps.map((step, index) => (
          <li key={step} className="flex gap-4">
            <span className="text-copper">0{index + 1}</span>
            <span className="leading-7">{step}</span>
          </li>
        ))}
      </ol>
      <div className="mt-12 flex flex-wrap gap-3">
        <a href={FIRM.phoneTel} className="rounded-full bg-copper px-5 py-3 text-sm font-semibold text-bone">
          Call {FIRM.phoneDisplay}
        </a>
        <Link href="/dispatch" className="rounded-full border border-void/20 px-5 py-3 text-sm font-semibold">
          Dispatch a crew
        </Link>
      </div>
    </article>
  );
}
