import { ChicagoFleetMap } from "@/components/chicago-fleet-map";
import { HeroStage } from "@/components/hero-stage";
import { ScrollReveal } from "@/components/scroll-reveal";
import { FIRM } from "@/lib/firm";
import { PLACES } from "@/lib/territory";
import { TRADES } from "@/lib/trades";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: `${FIRM.legal} · 24/7 Chicago water damage · flood-911.com` },
};

export default function FrontPage() {
  return (
    <>
      <ScrollReveal />
      <HeroStage />

      <section className="border-y border-void/10 bg-bone-deep" data-reveal>
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:grid-cols-3">
          <p className="text-sm">Live dispatch · {FIRM.phoneDisplay}</p>
          <p className="text-sm">{FIRM.address}</p>
          <p className="text-sm">flood-911.com</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div data-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
            How a Chicago loss actually goes
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl md:text-4xl">
            Pump. Dry. Rebuild. Tell you the truth about the next storm.
          </h2>
        </div>
        <ol className="mt-10 grid gap-6 md:grid-cols-4" data-reveal-stagger>
          {[
            ["Arrive", "Keys, source, category of water. Containment if it is sewage."],
            ["Pull the water", "Extractors on the floor, not a wet/dry from the garage."],
            ["Run the dry-out", "Meters daily until the wood and plaster agree."],
            ["Close it up", "Walls, floors, wet rooms — painted like the loss was never mapped on them."],
          ].map(([title, copy], i) => (
            <li key={title} className="border-t border-void/15 pt-4">
              <p className="text-xs text-copper">0{i + 1}</p>
              <h3 className="mt-2 font-display text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-quiet">{copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-void text-bone">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4" data-reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">Services</p>
              <h2 className="mt-3 font-display text-3xl">Dedicated landers for every trade</h2>
            </div>
            <Link href="/work" className="text-sm text-copper hover:underline">
              All of the work →
            </Link>
          </div>
          <div className="mt-10 grid gap-px bg-white/10 md:grid-cols-3" data-reveal-stagger>
            {TRADES.map((trade) => (
              <Link
                key={trade.slug}
                href={`/work/${trade.slug}`}
                className="bg-void p-6 hover:bg-void-soft"
              >
                <p className="text-xs text-copper">{trade.numeral}</p>
                <h3 className="mt-2 font-display text-2xl">{trade.name}</h3>
                <p className="mt-3 text-sm leading-6 text-bone/70">{trade.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">Coverage</p>
            <h2 className="mt-3 font-display text-3xl">Chicago on the board</h2>
            <p className="mt-3 text-sm leading-6 text-quiet">
              Same idea as the NYC territory map: hubs, routes, crews moving. This one is the city
              against the lake, dispatched from {FIRM.address}.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-2 text-sm">
              {PLACES.map((place) => (
                <li key={place.slug}>
                  <Link href={`/coverage/${place.slug}`} className="hover:text-copper">
                    {place.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal>
            <ChicagoFleetMap />
          </div>
        </div>
      </section>
    </>
  );
}
