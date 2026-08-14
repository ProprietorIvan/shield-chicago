import Link from "next/link";
import { FIRM } from "@/lib/firm";
import { PLACES } from "@/lib/territory";
import { TRADES } from "@/lib/trades";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: `${FIRM.legal} · 24/7 Chicago water damage` },
};

export default function FrontPage() {
  return (
    <>
      <section className="bg-void text-bone">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-[1.3fr_0.7fr] md:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
              Chicago water damage restoration
            </p>
            <h1 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
              The basement is a lake.
              <span className="italic text-copper"> We still come.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-bone/75">
              Combined sewers, burst stacks, dishwasher floods, and finished lower levels that
              should never have seen standing water. Shield Chicago extracts, dries, and puts the
              room back — this city, these buildings, this weather.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={FIRM.phoneTel}
                className="rounded-full bg-copper px-6 py-3 text-sm font-semibold text-bone hover:bg-copper-dark"
              >
                Call {FIRM.phoneDisplay}
              </a>
              <Link
                href="/dispatch"
                className="rounded-full border border-bone/25 px-6 py-3 text-sm font-semibold hover:bg-white/5"
              >
                Send the address
              </Link>
            </div>
            <p className="mt-4 text-xs text-bone/45">{FIRM.phoneNote}</p>
          </div>
          <aside className="self-end border border-white/10 p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-copper">{FIRM.hours}</p>
            <p className="mt-3 font-display text-2xl">{FIRM.response}</p>
            <p className="mt-3 text-sm leading-6 text-bone/70">
              West Side cloudburst, Loop riser, two-flat supply line — the first call is a person,
              not a form that emails at dawn.
            </p>
          </aside>
        </div>
      </section>

      <section className="border-y border-void/10 bg-bone-deep">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:grid-cols-3">
          <p className="text-sm">Live dispatch, all night</p>
          <p className="text-sm">Sewage and clean water</p>
          <p className="text-sm">Homes, two-flats, commercial floors</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">How a Chicago loss actually goes</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl md:text-4xl">
          Pump. Dry. Rebuild. Tell you the truth about the next storm.
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-4">
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
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">Trades</p>
              <h2 className="mt-3 font-display text-3xl">What the invoice is actually for</h2>
            </div>
            <Link href="/work" className="text-sm text-copper hover:underline">
              All of the work →
            </Link>
          </div>
          <div className="mt-10 grid gap-px bg-white/10 md:grid-cols-3">
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
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">Coverage</p>
        <h2 className="mt-3 font-display text-3xl">Neighborhoods we already drive</h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-quiet">
          Chicago is not one soil and not one sewer. Garden units in Logan Square fail differently
          than a Loop riser. Pick the page for your block.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PLACES.map((place) => (
            <li key={place.slug}>
              <Link
                href={`/coverage/${place.slug}`}
                className="block border border-void/10 px-4 py-3 hover:border-copper"
              >
                <span className="font-medium">{place.name}</span>
                <span className="ml-2 text-xs text-quiet">{place.area}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
