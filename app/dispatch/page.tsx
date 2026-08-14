import { DispatchCopyCards } from "@/components/dispatch-body";
import { SERVICE_PHOTO, ServicePageFrame } from "@/components/service-page-frame";
import { FIRM } from "@/lib/firm";
import { PLACES } from "@/lib/territory";
import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Call Shield Chicago at (464) 768-0164 or send an address for emergency water damage restoration.",
};

export default function DispatchPage() {
  return (
    <ServicePageFrame
      breadcrumbs={[{ label: "Contact", url: "/dispatch" }]}
      pill="Shield Water Damage Restoration and Repairs"
      heroLead="Contact"
      heroAccent="Shield Chicago"
      lede="Chicago — we’re here for your water damage emergency. Call, email, or send the address. Live dispatch every hour of the year."
      cta={`Call ${FIRM.phoneDisplay}`}
      image={SERVICE_PHOTO.extraction}
      imageAlt="Shield Chicago emergency water extraction"
      landingPage="dispatch"
      formTitle="Send Us a Message"
      formSubtitle="How can we help you today?"
    >
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-ink">Professional Restoration Services</h2>
            <p className="text-lg text-ink-soft">Felicita Group LLC · flood-911.com</p>
          </div>
          <DispatchCopyCards />
        </div>
      </section>

      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-ink">Our Services</h2>
            <p className="text-lg text-ink-soft">Neighborhood landers for the building types we already know.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PLACES.map((place) => (
              <Link
                key={place.slug}
                href={`/coverage/${place.slug}`}
                className="bg-white p-8 rounded-[var(--radius)] hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">
                  Shield · {place.area}
                </p>
                <h3 className="text-2xl font-bold mb-4 text-ink">{place.name}</h3>
                <ul className="space-y-3">
                  {place.hazards.map((hazard) => (
                    <li key={hazard} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="text-ink-soft">{hazard}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/coverage" className="text-link">
              All locations →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-ink">Dispatched from Carroll Avenue</h2>
              <p className="text-lg text-ink-soft mb-6 leading-relaxed">
                Shop: {FIRM.address}. We extract, dry, and rebuild — bungalows, two-flats, greystones,
                and Loop floors.
              </p>
              <ul className="space-y-4">
                {[
                  "Live answer, every hour of the year",
                  "60-minute response across Chicago",
                  "Insurance documentation with the moisture map",
                  "One crew family from pump-out through paint",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="text-ink-soft font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px]">
              <Image
                src={SERVICE_PHOTO.drying}
                alt="Drying equipment staged for a Chicago water loss"
                fill
                className="object-cover rounded-[var(--radius)]"
              />
            </div>
          </div>
        </div>
      </section>
    </ServicePageFrame>
  );
}
