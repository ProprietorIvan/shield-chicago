import { SERVICE_PHOTO, ServicePageFrame } from "@/components/service-page-frame";
import { PLACES } from "@/lib/territory";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coverage",
  description: "Shield Chicago Center Dispatch on Carroll Avenue, plus Loop, Lincoln Park, Wicker Park, and Hyde Park crews.",
};

export default function CoverageIndex() {
  return (
    <ServicePageFrame
      breadcrumbs={[{ label: "Coverage", url: "/coverage" }]}
      pill="Service areas · Chicago"
      heroLead="Where the truck"
      heroAccent="already knows the block"
      lede="One Center Dispatch on Carroll Avenue, plus four neighborhood crews — Loop, Lincoln Park, Wicker Park, and Hyde Park. Pick the page for your side of the city."
      cta="Call Now - Available 24/7"
      image={SERVICE_PHOTO.loft}
      imageAlt="Emergency water extraction in a Chicago building"
      landingPage="coverage"
    >
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-ink">Center Dispatch and four service locations</h2>
            <p className="text-lg text-ink-soft">
              Trucks leave Carroll Avenue. These pages cover the building types we already know on each side of the city.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {PLACES.map((place) => (
              <Link
                key={place.slug}
                href={`/coverage/${place.slug}`}
                className="page-card p-6 flex flex-col hover:border-[var(--accent)] transition-all"
              >
                <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">
                  Shield · {place.area}
                </p>
                <h2 className="text-lg font-bold text-ink mb-2">{place.name}</h2>
                <p className="text-sm text-ink-soft leading-relaxed flex-1">{place.pitch}</p>
                <span className="text-link mt-4">Open lander →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ServicePageFrame>
  );
}
