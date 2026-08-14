import { FIRM } from "@/lib/firm";
import { placeBySlug, PLACES } from "@/lib/territory";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return PLACES.map((place) => ({ slug: place.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const place = placeBySlug(slug);
  if (!place) return { title: "Coverage" };
  return {
    title: `${place.name} water damage`,
    description: place.pitch,
  };
}

export default async function PlacePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const place = placeBySlug(slug);
  if (!place) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
        {place.area} · Coverage
      </p>
      <h1 className="mt-3 font-display text-4xl">{place.name} water damage restoration</h1>
      <p className="mt-5 text-lg leading-8">{place.pitch}</p>
      <h2 className="mt-10 font-display text-2xl">What fails here</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6">
        {place.hazards.map((hazard) => (
          <li key={hazard}>{hazard}</li>
        ))}
      </ul>
      <div className="mt-12 flex flex-wrap gap-3">
        <a href={FIRM.phoneTel} className="rounded-full bg-copper px-5 py-3 text-sm font-semibold text-bone">
          Call {FIRM.phoneDisplay}
        </a>
        <Link href="/dispatch" className="rounded-full border border-void/20 px-5 py-3 text-sm font-semibold">
          Send this address
        </Link>
      </div>
    </article>
  );
}
