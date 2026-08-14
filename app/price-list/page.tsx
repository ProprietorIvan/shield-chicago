import { SERVICE_PHOTO, ServicePageFrame } from "@/components/service-page-frame";
import { PRICE_META, RATE_SECTIONS } from "@/lib/price-list";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mitigation & Contracting Price List",
  description:
    "Chicago mitigation and premium contracting rates for emergency water damage, drying, rebuild, flooring, drywall, kitchen & bath, and waterproofing.",
  robots: { index: false, follow: false },
};

export default function PriceListPage() {
  return (
    <ServicePageFrame
      breadcrumbs={[{ label: "Price List", url: "/price-list" }]}
      pill={PRICE_META.legalEntity}
      heroLead="Chicago Mitigation"
      heroAccent="& Contracting Rates"
      lede="Indicative rates for emergency mitigation and premium rebuild — flooring, drywall, kitchen & bath, and waterproofing across Chicago."
      cta={`Call ${PRICE_META.phone}`}
      image={SERVICE_PHOTO.dehu}
      imageAlt="Commercial drying equipment used on Chicago water losses"
      landingPage="price-list"
    >
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-ink">Our Services — priced</h2>
            <p className="text-lg text-ink-soft">
              {PRICE_META.effectiveNote} Service area: {PRICE_META.serviceArea}.
            </p>
            <p className="mt-4">
              <Link href="/terms" className="text-link">
                View Terms →
              </Link>
            </p>
          </div>
          <div className="space-y-10">
            {RATE_SECTIONS.map((section) => (
              <section
                key={section.title}
                className="bg-[#f5f5f5] rounded-[var(--radius)] border border-[var(--line)] overflow-hidden"
              >
                <div className="p-6 md:p-8 border-b border-[var(--line)] bg-white">
                  <div className="text-sm uppercase tracking-[0.25em] text-accent mb-3">
                    {section.category ?? "Rates"}
                  </div>
                  <h3 className="text-3xl font-bold text-ink">{section.title}</h3>
                  {section.subtitle ? (
                    <p className="mt-2 text-ink-soft">{section.subtitle}</p>
                  ) : null}
                </div>
                <div className="divide-y divide-stone-200">
                  {section.items.map((item) => (
                    <div key={`${section.title}-${item.label}`} className="p-5 md:p-6 bg-white">
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="font-medium text-ink leading-snug">{item.label}</h4>
                        <div className="text-right text-accent font-semibold whitespace-nowrap">
                          {item.value}
                        </div>
                      </div>
                      {item.description ? (
                        <p className="mt-2 text-sm text-ink-soft leading-relaxed">{item.description}</p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </ServicePageFrame>
  );
}
