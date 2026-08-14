import { FIRM } from "@/lib/firm";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The firm",
  description: "Shield Chicago is a Chicago water damage restoration company — extraction, drying, and rebuilds for this city’s buildings.",
};

export default function FirmPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">The firm</p>
      <h1 className="mt-3 font-display text-4xl">A restoration company that lives in this sewer system</h1>
      <div className="mt-8 space-y-5 text-base leading-8">
        <p>
          {FIRM.legal} is a water damage contractor for Chicago. We extract standing water, dry
          structure, and rebuild what the loss took — bungalows, two-flats, greystones, lofts, and
          commercial floors.
        </p>
        <p>
          This is not a relabeled coastal website. The copy, the neighborhoods, and the dispatch
          assume combined sewers, winter pipe bursts, and cloudbursts that sit still. If you wanted
          a New York page with the word Chicago swapped in, you are in the wrong place.
        </p>
        <p>
          We tell you when hardwood will come back and when a cabinet box is trash. We document for
          the carrier. We do not fog perfume over wet board and call it a protocol.
        </p>
        <p>
          {FIRM.hours}. {FIRM.response}. Write {FIRM.email} or call{" "}
          <a href={FIRM.phoneTel} className="text-copper">
            {FIRM.phoneDisplay}
          </a>
          .
        </p>
      </div>
      <Link href="/dispatch" className="mt-10 inline-block rounded-full bg-void px-5 py-3 text-sm font-semibold text-bone">
        Start a job
      </Link>
    </article>
  );
}
