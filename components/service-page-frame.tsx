import { Breadcrumbs } from "@/components/breadcrumbs";
import { CallChrome } from "@/components/call-chrome";
import { HomeFaq } from "@/components/home-faq";
import { JobTicket } from "@/components/job-ticket";
import { Testimonials } from "@/components/testimonials";
import { FIRM } from "@/lib/firm";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

export const SERVICE_PHOTO = {
  extraction: "/photos/homepage/shield-emergency-water-damage-extraction.jpg",
  drying: "/photos/homepage/structural-drying-air-movers-water-damage.jpg",
  floors: "/photos/homepage/floor-and-carpet-restoration-after-water-damage.jpg",
  walls: "/photos/homepage/drywall-and-paint-repair-after-water-damage.jpg",
  kitchen: "/photos/homepage/kitchen-water-damage-repair-nyc.jpg",
  mold: "/photos/homepage/mold-remediation-after-water-damage.jpg",
  loft: "/photos/homepage/emergency-water-extraction-nyc-loft.jpg",
  dehu: "/photos/homepage/commercial-dehumidifiers-water-damage-drying.jpg",
} as const;

export type Crumb = { label: string; url: string };

export function ServicePageFrame({
  breadcrumbs,
  pill,
  heroLead,
  heroAccent,
  lede,
  cta = "Get Emergency Service",
  image,
  imageAlt,
  children,
  landingPage,
  formTitle = "Get Professional Help Now",
  formSubtitle = "60-minute response • 100% satisfaction guaranteed",
  showForm = true,
  showFaq = true,
  ctaTitle = "Expert Water Damage Restoration Services",
  ctaCopy = "Professional restoration with guaranteed results",
}: {
  breadcrumbs: Crumb[];
  pill: string;
  heroLead: string;
  heroAccent: string;
  lede: string;
  cta?: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
  landingPage: string;
  formTitle?: string;
  formSubtitle?: string;
  showForm?: boolean;
  showFaq?: boolean;
  ctaTitle?: string;
  ctaCopy?: string;
}) {
  return (
    <div className="page-shell">
      <Breadcrumbs items={breadcrumbs} />

      <section className="page-hero">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row gap-12 items-center py-16">
            <div className="w-full md:w-1/2">
              <div className="page-pill mb-6">{pill}</div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-ink">
                {heroLead}
                <span className="block text-accent">{heroAccent}</span>
              </h1>
              <p className="text-xl text-ink-soft mb-8 leading-relaxed">{lede}</p>
              <a href={FIRM.phoneTel} className="button button-primary group text-lg">
                <Phone className="w-6 h-6" />
                <span>{cta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative h-[600px] w-full">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover rounded-[var(--radius)]"
                  priority
                />
                <div className="absolute inset-0 rounded-[var(--radius)] ring-1 ring-black/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {children}

      {showForm ? (
        <section className="py-20 bg-[#f5f5f5]" id="emergency-form">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ink">{formTitle}</h2>
              <p className="text-lg text-ink-soft">{formSubtitle}</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <JobTicket landingPage={landingPage} variant="service" />
            </div>
          </div>
        </section>
      ) : null}

      <Testimonials />
      {showFaq ? <HomeFaq /> : null}

      <section className="py-16 bg-[var(--accent)]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{ctaTitle}</h2>
          <p className="text-xl mb-8 text-white/80">{ctaCopy}</p>
          <a href={FIRM.phoneTel} className="button button-light-on-accent group text-xl">
            <Phone className="w-6 h-6" />
            <span>Call For Service Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      <CallChrome />
    </div>
  );
}
