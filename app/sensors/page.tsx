import { PageHero } from "@/components/page-hero";
import { SensorDiagram } from "@/components/sensor-diagram";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sensors",
  description:
    "How Shield Chicago ultrasonic flood sensors estimate street depth, where they mount, and how a reading reaches the dashboard.",
};

export default function SensorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sensors"
        title="A rangefinder looking down at Chicago pavement"
        lede="Each node is an ultrasonic range finder on a signpost, viaduct wall, or underpass soffit. As water rises, the measured distance shrinks. Depth is the difference between a dry-weather baseline and the current ping."
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SensorDiagram />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <article>
            <h2 className="font-display text-2xl font-semibold text-navy">What the node measures</h2>
            <p className="mt-3 text-sm leading-7 text-ink">
              The sensor does not taste the water and does not know if a puddle is combined-sewer
              surcharge or lake spray. It knows distance. On a dry day that distance is the height
              of the mount above asphalt or concrete. When a cell sits over Austin, or a seiche
              piles onto South Shore Drive, the bounce comes back sooner. We store that change in
              inches because that is how Chicagoans describe a flooded basement and a closed
              viaduct.
            </p>
          </article>
          <article>
            <h2 className="font-display text-2xl font-semibold text-navy">Where it hangs</h2>
            <p className="mt-3 text-sm leading-7 text-ink">
              Signposts over the sidewalk are the default: legal, repeatable, and close to the
              gutter that actually ponds. Underpasses and viaducts get their own mounts because
              those are the first travel lanes to disappear. The demonstration network flags each
              station as signpost, underpass, or viaduct so a hydrograph is never read as if every
              site were a quiet residential curb.
            </p>
          </article>
          <article>
            <h2 className="font-display text-2xl font-semibold text-navy">How a ping becomes a map dot</h2>
            <p className="mt-3 text-sm leading-7 text-ink">
              In a live deployment, the node would sample about once a minute and send a packet over
              cellular or LoRaWAN to a collector. Servers would flag frozen sensors, snow-covered
              pavement, and empty-battery gaps, then draw the dashboard. On this site the same
              pipeline is simulated with a seeded generator so the interface can be used without a
              warehouse of hardware.
            </p>
          </article>
          <article>
            <h2 className="font-display text-2xl font-semibold text-navy">What the number is not</h2>
            <p className="mt-3 text-sm leading-7 text-ink">
              A street depth is not a basement depth. It is not a tunnel level at MWRD. It is not a
              flood-insurance map. It is a public, local, time-stamped observation of water in the
              right-of-way. Quality flags, dry-weather baselines, and the demonstration banner exist
              so nobody confuses a design mock with a warning siren.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
