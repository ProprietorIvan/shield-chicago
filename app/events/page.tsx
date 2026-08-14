import { EventCard } from "@/components/event-card";
import { PageHero } from "@/components/page-hero";
import { FLOOD_EVENTS } from "@/lib/mock";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flood events",
  description:
    "Reconstructed maps and hydrographs for documented Chicago flood events, from West Side cloudbursts to lakefront surge.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Flood events"
        title="Five storms Chicago already knows, drawn on a demonstration network"
        lede="Each page reconstructs a documented event across 64 modeled stations. Use the time slider to watch depths rise and recede. The storms are historical. The inches are not a gauge archive."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-4 md:grid-cols-2">
          {FLOOD_EVENTS.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </section>
    </>
  );
}
