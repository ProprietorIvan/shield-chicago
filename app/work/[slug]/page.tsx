import { TradeLander } from "@/components/trade-lander";
import { tradeBySlug, TRADES } from "@/lib/trades";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

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
  return <TradeLander trade={trade} />;
}
