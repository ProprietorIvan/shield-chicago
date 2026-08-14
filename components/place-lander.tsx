import { JobTicket } from "@/components/job-ticket";
import { FIRM } from "@/lib/firm";
import type { Place } from "@/lib/territory";
import { MapPin } from "lucide-react";

export function PlaceLander({ place }: { place: Place }) {
  return (
    <div>
      <section className="bg-void px-4 py-16 text-bone">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              {place.area} · Dedicated lander
            </p>
            <h1 className="mt-3 font-display text-4xl md:text-5xl">
              {place.name} water damage restoration
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-bone/75">{place.pitch}</p>
            <p className="mt-6 flex items-start gap-2 text-sm text-bone/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-copper" aria-hidden />
              <span>
                Dispatched from {FIRM.address}
                <br />
                <a href={FIRM.addressMaps} className="text-copper underline" target="_blank" rel="noreferrer">
                  Map the shop
                </a>
              </span>
            </p>
            <a
              href={FIRM.phoneTel}
              className="mt-8 inline-block rounded-full bg-copper px-6 py-3 text-sm font-semibold text-bone"
            >
              Call {FIRM.phoneDisplay}
            </a>
          </div>
          <div className="bg-bone p-6 text-void">
            <p className="font-display text-xl">Get a crew to {place.name}</p>
            <p className="mt-1 mb-4 text-sm text-quiet">60-minute target inside the city.</p>
            <JobTicket landingPage={`coverage-${place.slug}`} />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-3xl">What fails on this block</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-3">
          {place.hazards.map((hazard) => (
            <li key={hazard} className="border border-void/10 p-4 text-sm">
              {hazard}
            </li>
          ))}
        </ul>
        <h2 className="mt-12 font-display text-2xl">Also driving</h2>
        <ul className="mt-4 flex flex-wrap gap-2 text-sm">
          {place.nearby.map((name) => (
            <li key={name} className="border border-void/10 px-3 py-1">
              {name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
