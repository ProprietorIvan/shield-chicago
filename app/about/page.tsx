import { OriginsTimeline } from "@/components/origins-timeline";
import { PageHero } from "@/components/page-hero";
import { PartnerStrip } from "@/components/partner-strip";
import { PrinciplesGrid } from "@/components/principles-grid";
import { TeamGrid } from "@/components/team-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mission, principles, and origin story for Shield Chicago, a street-level flood monitoring project for Chicago neighborhoods.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A flood network grown from Chicago’s actual wet spots"
        lede="Shield Chicago exists to measure the water that closes a viaduct, climbs a basement stair, or sheets across Lake Shore Drive — and to put those readings in front of the people who live with that water."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-3xl font-semibold text-navy">Mission</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-ink">
          Build street-level flood sensors that work in Chicago’s combined-sewer neighborhoods,
          lakefront underpasses, and Calumet marsh edges. Use them to measure ponding as it happens.
          Publish the depths, the method, and the gaps so residents, block clubs, agencies, and
          researchers are looking at the same clock.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
          This is not an official City of Chicago program. It is a civic sketch with a working
          interface, modeled stations, and a replacement list for every placeholder name on the
          site.
        </p>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-display text-3xl font-semibold text-navy">Principles</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            These six rules connect the hardware, the siting walks, and the public dashboard.
          </p>
          <div className="mt-8">
            <PrinciplesGrid />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-3xl font-semibold text-navy">How this started</h2>
        <p className="mt-3 mb-8 max-w-2xl text-sm text-muted">
          Timeline is a working narrative for the demonstration site. Edit the years before treating
          it as institutional history.
        </p>
        <OriginsTimeline />
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-display text-3xl font-semibold text-navy">Team</h2>
          <div className="mt-8">
            <TeamGrid />
          </div>
        </div>
      </section>
      <PartnerStrip />
    </>
  );
}
