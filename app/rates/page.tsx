import { FIRM } from "@/lib/firm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How we bill",
  description: "How Shield Chicago bills water losses: emergency time, equipment, and rebuild — quoted against the actual rooms, not a national menu.",
};

const LINES = [
  {
    name: "Emergency extraction",
    note: "Crew, pumps, and hours on the floor until standing water is gone. After-hours is a different rate than Tuesday at noon.",
  },
  {
    name: "Dry-out equipment",
    note: "Air movers and dehumidifiers billed per day they actually run, sized to the cubic footage we measured — not a package that oversells fans.",
  },
  {
    name: "Demo and haul",
    note: "Wet board, pad, and cabinets that cannot be saved. Line-itemed so you can see what left the building.",
  },
  {
    name: "Rebuild",
    note: "Drywall, paint, flooring, wet-room boxes. Quoted after the meters say we can close the walls.",
  },
];

export default function RatesPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">How we bill</p>
      <h1 className="mt-3 font-display text-4xl">No national menu pasted onto a Chicago loss</h1>
      <p className="mt-4 text-sm leading-7 text-quiet">
        Every building here is a different stack of plaster, oak, and sewer. We estimate after we
        see the water line. Call {FIRM.phoneDisplay} if you need a number tonight.
      </p>
      <ul className="mt-10 space-y-6">
        {LINES.map((line) => (
          <li key={line.name} className="border-t border-void/10 pt-5">
            <h2 className="font-display text-xl">{line.name}</h2>
            <p className="mt-2 text-sm leading-7 text-quiet">{line.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
