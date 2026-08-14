import { DispatchForm } from "@/components/dispatch-form";
import { FIRM } from "@/lib/firm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dispatch",
  description: "Call Shield Chicago or send an address for emergency water damage restoration.",
};

export default function DispatchPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-2">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">Dispatch</p>
        <h1 className="mt-3 font-display text-4xl">If water is moving, call. If it already sat, still call.</h1>
        <p className="mt-4 text-sm leading-7 text-quiet">
          {FIRM.hours}. {FIRM.response}.
        </p>
        <a href={FIRM.phoneTel} className="mt-6 inline-block font-display text-3xl text-copper">
          {FIRM.phoneDisplay}
        </a>
        <p className="mt-2 text-sm">
          <a href={`mailto:${FIRM.email}`} className="underline">
            {FIRM.email}
          </a>
        </p>
        <p className="mt-6 text-xs text-quiet">{FIRM.phoneNote}</p>
      </div>
      <DispatchForm />
    </section>
  );
}
