import { ContactPanel } from "@/components/contact-panel";
import { DemonstrationBanner } from "@/components/demonstration-banner";
import { EventCard } from "@/components/event-card";
import { HeroSection } from "@/components/hero-section";
import { MissionTrio } from "@/components/mission-trio";
import { NetworkPreviewMap } from "@/components/network-preview-map";
import { PartnerStrip } from "@/components/partner-strip";
import { StatsBand } from "@/components/stats-band";
import { TestimonialRail } from "@/components/testimonial-rail";
import { UpcomingMeetings } from "@/components/upcoming-meetings";
import { FLOOD_EVENTS, getNetworkSnapshot, uniqueNeighborhoods } from "@/lib/mock";
import { STATIONS } from "@/lib/mock/stations";
import { SITE_TAGLINE } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: `Shield Chicago · ${SITE_TAGLINE}` },
};

export default function HomePage() {
  const snapshots = getNetworkSnapshot();
  const wet = snapshots.filter((station) => station.status !== "dry").length;

  return (
    <>
      <HeroSection />
      <DemonstrationBanner />
      <StatsBand
        stations={STATIONS.length}
        neighborhoods={uniqueNeighborhoods().length}
        events={FLOOD_EVENTS.length}
      />
      <MissionTrio />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-flag uppercase">Right now (modeled)</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-navy">
                {wet} stations showing water on the pavement
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                Dots are colored by reconstructed depth at the demonstration clock. Open the
                dashboard to compare hydrographs, switch to a list, or filter by neighborhood.
              </p>
            </div>
            <Link
              href="/dashboard"
              className="rounded-sm bg-navy px-4 py-2 text-sm font-semibold text-paper hover:bg-navy-mid"
            >
              Full dashboard
            </Link>
          </div>
          <div className="mt-8">
            <NetworkPreviewMap snapshots={snapshots} />
          </div>
        </div>
      </section>
      <TestimonialRail />
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-flag uppercase">How Chicago floods</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy">Five reconstructed events</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
            These storms are real. The depths are not a historical sensor archive — they are a
            demonstration so the maps and hydrographs have something honest to show.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {FLOOD_EVENTS.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        </div>
      </section>
      <PartnerStrip />
      <UpcomingMeetings />
      <ContactPanel />
    </>
  );
}
