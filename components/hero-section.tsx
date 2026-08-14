import Link from "next/link";
import { ShieldMark } from "@/components/shield-mark";
import { SITE_TAGLINE } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy text-paper">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-navy-deep to-transparent" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-24">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-sky uppercase">
            Urban flood monitoring · Chicago
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">
            {SITE_TAGLINE}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-sky-soft md:text-lg">
            Combined sewers, lakefront surge, Calumet marsh edges, and viaducts that close in a
            twenty-minute cell. Shield Chicago is a public-facing sketch of a street-level sensor
            network built for those hazards — not for a river gauge in someone else’s city.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/dashboard"
              className="rounded-sm bg-sky px-5 py-3 text-sm font-semibold text-navy hover:bg-sky-soft"
            >
              Open the data dashboard
            </Link>
            <Link
              href="/get-involved"
              className="rounded-sm border border-sky/40 px-5 py-3 text-sm font-semibold text-paper hover:bg-white/5"
            >
              Suggest a sensor location
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <ShieldMark className="h-56 w-48 md:h-72 md:w-60" />
        </div>
      </div>
    </section>
  );
}
