import { ARTICLES } from "@/lib/advice";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advice",
  description: "Chicago-specific notes on basement backups, two-flat bursts, and what to do before the restoration truck arrives.",
};

export default function AdviceIndex() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">Advice</p>
      <h1 className="mt-3 font-display text-4xl">Written for this city’s water, not a generic flood pamphlet</h1>
      <ul className="mt-10 space-y-6">
        {ARTICLES.map((article) => (
          <li key={article.slug} className="border-t border-void/10 pt-6">
            <Link href={`/advice/${article.slug}`} className="hover:text-copper">
              <h2 className="font-display text-2xl">{article.title}</h2>
              <p className="mt-2 text-sm leading-6 text-quiet">{article.dek}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
