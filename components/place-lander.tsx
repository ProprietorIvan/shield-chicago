import { SERVICE_PHOTO, ServicePageFrame } from "@/components/service-page-frame";
import type { Place } from "@/lib/territory";
import {
  Building,
  CheckCircle2,
  Clock,
  Droplets,
  Home,
  Shield,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Clock,
    title: "60-Minute Response",
    description: "Fast emergency response across this neighborhood and surrounding Chicago",
  },
  {
    icon: Shield,
    title: "Experienced Team",
    description: "Trusted water damage restoration experts",
  },
  {
    icon: Droplets,
    title: "Advanced Equipment",
    description: "Professional-grade water extraction & drying",
  },
  {
    icon: Home,
    title: "Local Building Stock",
    description: "Greystones, two-flats, lofts, and high-rises — we already know the block",
  },
];

const process = [
  "Call and we dispatch the nearest Chicago crew",
  "Extract standing water and set containment",
  "Dry and meter until the structure reads dry",
  "Rebuild, document, and hand you the file",
];

export function PlaceLander({ place }: { place: Place }) {
  return (
    <ServicePageFrame
      breadcrumbs={[
        { label: "Coverage", url: "/coverage" },
        { label: place.name, url: `/coverage/${place.slug}` },
      ]}
      pill={
        place.hub === "dispatch"
          ? "Center Dispatch · 1200 W Carroll Ave"
          : `24/7 Emergency · ${place.name}`
      }
      heroLead={place.name}
      heroAccent={place.hub === "dispatch" ? "Carroll Avenue Shop" : "Water Damage Restoration"}
      lede={place.pitch}
      cta="Call Now - Available 24/7"
      image={SERVICE_PHOTO.extraction}
      imageAlt={`Water damage restoration in ${place.name}`}
      landingPage={`coverage-${place.slug}`}
      ctaTitle={`Expert Water Damage Restoration in ${place.name}`}
      ctaCopy="Professional restoration with guaranteed results"
    >
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-ink">Professional Restoration Services</h2>
            <p className="text-lg text-ink-soft">
              Fast extraction, controlled drying, and rebuilds
              {place.hub === "dispatch"
                ? " from the Carroll Avenue shop across Chicago"
                : ` in ${place.name} and ${place.nearby.join(", ")}`}
              .
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
              <h2 className="text-4xl font-bold mb-6 text-ink">
                {place.area}&apos;s trusted water damage experts
              </h2>
              <p className="text-lg text-ink-soft mb-6 leading-relaxed">{place.pitch}</p>
              <ul className="space-y-4">
                {place.hazards.map((item) => (
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
                alt={`Structural drying in ${place.name}`}
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
            <p className="text-lg text-ink-soft">
              {place.hub === "dispatch"
                ? "Water damage solutions for homes and businesses dispatched from Carroll Avenue"
                : `Water damage solutions for homes and businesses in ${place.name}`}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-[var(--radius)] hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                <Home className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold text-ink">Residential</h3>
              </div>
              <ul className="space-y-3">
                {place.hazards.map((item) => (
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
                <h3 className="text-2xl font-bold text-ink">Commercial</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Retail & storefronts",
                  "Office & professional spaces",
                  "Restaurants & hospitality",
                  "Mixed-use buildings",
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
