import { PLACES } from "@/lib/territory";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coverage",
  description: "Shield Chicago restoration coverage across central, north, west, and south neighborhoods.",
};

export default function CoverageIndex() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">Coverage</p>
      <h1 className="mt-3 font-display text-4xl">Where the truck already knows the block</h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-quiet">
        We work the city, not a single ZIP. These pages exist because a Gold Coast ice-maker line
        and an Austin floor drain are not the same job.
      </p>
      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {PLACES.map((place) => (
          <li key={place.slug}>
            <Link href={`/coverage/${place.slug}`} className="block border border-void/10 p-6 hover:border-copper">
              <p className="text-xs text-quiet">{place.area}</p>
              <h2 className="mt-1 font-display text-2xl">{place.name}</h2>
              <p className="mt-3 text-sm leading-6 text-quiet">{place.pitch}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
