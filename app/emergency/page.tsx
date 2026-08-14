import { JobTicket } from "@/components/job-ticket";
import { FIRM } from "@/lib/firm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency water damage",
  description:
    "24/7 Chicago water extraction and restoration. Call Shield Chicago at (464) 768-0164 — flood-911.com.",
};

export default function EmergencyLander() {
  return (
    <section className="bg-void px-4 py-16 text-bone">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
            24/7 emergency · flood-911.com
          </p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl">
            Chicago water damage? <em className="text-copper">We’re on the way.</em>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-bone/75">
            Live answer. Extraction, dry-out, and rebuild from {FIRM.address}. Do not wait on a
            form if the water is still moving.
          </p>
          <a
            href={FIRM.phoneTel}
            className="mt-8 inline-block rounded-full bg-copper px-6 py-3 text-sm font-semibold text-bone"
          >
            {FIRM.phoneDisplay} — call now
          </a>
          <p className="mt-4 text-sm text-bone/60">{FIRM.response}</p>
        </div>
        <div className="bg-bone p-6 text-void">
          <p className="font-display text-xl">Get help in 60 minutes</p>
          <p className="mt-1 mb-4 text-sm text-quiet">We call back immediately.</p>
          <JobTicket landingPage="emergency" />
        </div>
      </div>
    </section>
  );
}
