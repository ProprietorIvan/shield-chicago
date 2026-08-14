import { JobTicket } from "@/components/job-ticket";
import { FIRM } from "@/lib/firm";
import type { Trade } from "@/lib/trades";
import { CheckCircle2 } from "lucide-react";

export function TradeLander({ trade }: { trade: Trade }) {
  return (
    <div>
      <section className="bg-void px-4 py-16 text-bone">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              {trade.numeral} · Shield Chicago
            </p>
            <h1 className="mt-3 font-display text-4xl md:text-5xl">{trade.name}</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-bone/75">{trade.promise}</p>
            <a
              href={FIRM.phoneTel}
              className="mt-8 inline-block rounded-full bg-copper px-6 py-3 text-sm font-semibold text-bone"
            >
              Call {FIRM.phoneDisplay}
            </a>
          </div>
          <div className="bg-bone p-6 text-void">
            <p className="font-display text-xl">Send the address</p>
            <p className="mt-1 mb-4 text-sm text-quiet">We call back. Water moving? Dial first.</p>
            <JobTicket landingPage={trade.slug} />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-3xl">How this job runs</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {trade.steps.map((step, index) => (
            <li key={step} className="flex gap-3 border border-void/10 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-copper" aria-hidden />
              <span>
                <span className="block text-xs text-copper">0{index + 1}</span>
                {step}
              </span>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm text-quiet">{trade.blurb}</p>
      </section>
    </div>
  );
}
