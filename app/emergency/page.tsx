import { SERVICE_PHOTO, ServicePageFrame } from "@/components/service-page-frame";
import { FIRM } from "@/lib/firm";
import {
  Building,
  CheckCircle2,
  Clock,
  Droplets,
  Home,
  Shield,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Emergency water damage",
  description:
    "24/7 Chicago water extraction and restoration. Call Shield Chicago at (464) 768-0164 — flood-911.com.",
};

const features = [
  {
    icon: Clock,
    title: "60-Minute Response",
    description: "Fast emergency response across Chicago neighborhoods",
  },
  {
    icon: Shield,
    title: "Experienced Team",
    description: "Trusted water damage restoration experts",
  },
  {
    icon: Droplets,
    title: "Advanced Equipment",
    description: "Professional-grade water extraction",
  },
  {
    icon: Home,
    title: "Every Building Type",
    description: "Bungalows, two-flats, greystones, and Loop floors",
  },
];

const process = [
  "Call — we answer live, no voicemail",
  "Extract standing water and set containment",
  "Dry and meter until the structure reads dry",
  "Rebuild and document the file for insurance",
];

const why = [
  "60-minute response across Chicago",
  "Commercial pumps and extractors — not shop-vacs",
  "Moisture maps your carrier expects",
  "Same crew family from extraction through paint",
];

export default function EmergencyLander() {
  return (
    <ServicePageFrame
      breadcrumbs={[{ label: "Emergency flood repair", url: "/emergency" }]}
      pill="Available Now - 60 Minute Response"
      heroLead="Emergency"
      heroAccent="Water Extraction"
      lede="Chicago water damage? Commercial pumps and extractors, not shop-vacs. We keep moving until the floor is a damp film, not a pool."
      cta="Call Now - Available 24/7"
      image={SERVICE_PHOTO.extraction}
      imageAlt="Emergency water extraction on a Chicago property"
      landingPage="emergency"
    >
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-ink">Professional Restoration Services</h2>
            <p className="text-lg text-ink-soft">
              When your property faces flood damage, you need a crew that extracts, dries, and rebuilds.
            </p>
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
            <h2 className="text-4xl font-bold mb-4 text-ink">How this job runs</h2>
            <p className="text-lg text-ink-soft">Our process from first extraction through finish</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
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
              <h2 className="text-4xl font-bold mb-6 text-ink">Why Chicago calls Shield first</h2>
              <p className="text-lg text-ink-soft mb-6 leading-relaxed">
                Dispatched from {FIRM.address}. One team across the city — same equipment, same
                process, same commitment.
              </p>
              <ul className="space-y-4">
                {why.map((item) => (
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
                alt="Structural drying after Chicago water damage"
                fill
                className="object-cover rounded-[var(--radius)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-ink">Our Services</h2>
            <p className="text-lg text-ink-soft">Specialized flood repair for every property type</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-[var(--radius)] hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <Home className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold text-ink">Residential Properties</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Bungalows and greystones",
                  "Garden units and two-flats",
                  "Courtyard buildings and three-flats",
                  "High-rise condominium units",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="text-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-[var(--radius)] hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <Building className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold text-ink">Commercial Properties</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Retail spaces and storefronts",
                  "Office floors and professional spaces",
                  "Restaurants and hospitality venues",
                  "Industrial facilities and warehouses",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="text-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ServicePageFrame>
  );
}
