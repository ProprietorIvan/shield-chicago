import { SERVICE_PHOTO, ServicePageFrame } from "@/components/service-page-frame";
import { FIRM } from "@/lib/firm";
import { AlertTriangle, BadgeCheck, CheckCircle2, Clock, MapPin, Shield, Wrench } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Shield Chicago is a Chicago water damage restoration company — extraction, drying, and rebuilds for this city’s buildings.",
};

const features = [
  {
    icon: AlertTriangle,
    title: "Rapid Emergency Response",
    description:
      "When disaster strikes, every minute counts. Our team arrives within 60 minutes, fully equipped to begin water extraction immediately.",
  },
  {
    icon: Wrench,
    title: "Latest Restoration Technology",
    description:
      "Cutting-edge equipment means faster water removal, more efficient drying, and better protection for your property.",
  },
  {
    icon: Shield,
    title: "Expert Team",
    description: "Every team member is experienced in water damage restoration. Your property is in safe hands.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Process",
    description:
      "From initial assessment to final restoration, you receive clear documentation and real-time updates.",
  },
];

const why = [
  "60-minute response across Chicago",
  "24/7 live answer — 365 days",
  "Moisture maps and photos your carrier expects",
  `Shop at ${FIRM.address}`,
];

export default function FirmPage() {
  return (
    <ServicePageFrame
      breadcrumbs={[{ label: "About", url: "/firm" }]}
      pill="Shield Water Damage Restoration and Repairs"
      heroLead="Your Emergency Is"
      heroAccent="Our Priority"
      lede="Under the Shield brand, we serve Chicago with the same standard: fast response, modern equipment, and results you can trust. A trade name of Felicita Group LLC."
      cta={`Emergency: ${FIRM.phoneDisplay}`}
      image={SERVICE_PHOTO.loft}
      imageAlt="Emergency water damage response in Chicago"
      landingPage="firm"
    >
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-ink">Why Trust Us With Your Emergency?</h2>
            <p className="text-lg text-ink-soft">Fast response, modern equipment, and a readable file.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="page-card p-6">
                  <div className="text-accent mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-ink-soft">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-ink">How Shield responds</h2>
            <p className="text-lg text-ink-soft">Four steps from the first call to a dry building.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Call 24/7 — we answer live and dispatch the nearest crew",
              "Assessment and written estimate with moisture readings",
              "Extract and dry until the meters agree",
              "Rebuild and document so insurance has a complete file",
            ].map((step, index) => (
              <div
                key={step}
                className="relative bg-white p-6 rounded-[var(--radius)] hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-6xl font-bold text-accent/10 absolute -top-4 right-4">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2 relative z-10">Step 0{index + 1}</h3>
                <p className="text-ink-soft relative z-10">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-ink">A Chicago contractor</h2>
              <p className="text-lg text-ink-soft mb-6 leading-relaxed">
                {FIRM.legal} extracts, dries, and rebuilds for this city’s buildings — not a
                referral desk. Domain: flood-911.com.
              </p>
              <ul className="space-y-4">
                {why.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    {item.startsWith("Shop") ? (
                      <MapPin className="w-5 h-5 text-accent" />
                    ) : item.startsWith("60") ? (
                      <Clock className="w-5 h-5 text-accent" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    )}
                    <span className="text-ink-soft font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px]">
              <Image
                src={SERVICE_PHOTO.drying}
                alt="Structural drying equipment after a Chicago water loss"
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
