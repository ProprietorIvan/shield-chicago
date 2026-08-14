import { SERVICE_PHOTO, ServicePageFrame } from "@/components/service-page-frame";
import { QUESTIONS } from "@/lib/questions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Straight answers about Shield Chicago response time, sewage backups, insurance files, and mold.",
};

export default function QuestionsPage() {
  return (
    <ServicePageFrame
      breadcrumbs={[{ label: "FAQ", url: "/questions" }]}
      pill="Shield Knowledge"
      heroLead="Water Damage"
      heroAccent="Restoration FAQ"
      lede="Direct answers Chicago homeowners, building managers, and businesses ask most — emergency response, insurance, cost, drying, and where we work."
      cta="Get Emergency Service"
      image={SERVICE_PHOTO.extraction}
      imageAlt="Chicago water damage restoration crew"
      landingPage="questions"
      showFaq={false}
    >
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-ink">Professional Restoration Services</h2>
            <p className="text-lg text-ink-soft">What we tell people on the first call.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {QUESTIONS.map((faq) => (
              <div
                key={faq.q}
                className="bg-[#f5f5f5] p-8 rounded-[var(--radius)] hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-ink">{faq.q}</h3>
                <p className="text-ink-soft leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServicePageFrame>
  );
}
