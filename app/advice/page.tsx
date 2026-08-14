import { SERVICE_PHOTO, ServicePageFrame } from "@/components/service-page-frame";
import { ARTICLES } from "@/lib/advice";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Chicago-specific notes on basement backups, two-flat bursts, and what to do before the restoration truck arrives.",
};

export default function AdviceIndex() {
  return (
    <ServicePageFrame
      breadcrumbs={[{ label: "Guides", url: "/advice" }]}
      pill="Shield Guides"
      heroLead="Water Damage"
      heroAccent="Restoration Guides"
      lede="Plain, answer-first guides for Chicago homeowners, building managers, and businesses. Each one starts with the direct answer, then the steps that matter on this city’s sewers."
      cta="Get Emergency Service"
      image={SERVICE_PHOTO.drying}
      imageAlt="Structural drying after Chicago water damage"
      landingPage="advice"
    >
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-ink">Our Services — written down</h2>
            <p className="text-lg text-ink-soft">What to do before the truck, and what the claim file needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ARTICLES.map((article) => (
              <Link
                key={article.slug}
                href={`/advice/${article.slug}`}
                className="bg-white p-8 rounded-[var(--radius)] border border-[var(--line)] hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-3">Guide</p>
                <h3 className="text-2xl font-bold mb-4 text-ink">{article.title}</h3>
                <p className="text-ink-soft mb-4">{article.dek}</p>
                <span className="text-link">Read guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ServicePageFrame>
  );
}
