import { ChicagoFleetMap } from "@/components/chicago-fleet-map";
import { HeroStage } from "@/components/hero-stage";
import { HomeFaq } from "@/components/home-faq";
import { PhoneBanner } from "@/components/phone-banner";
import { ScrollRestoration } from "@/components/scroll-restoration";
import { ScrollReveal } from "@/components/scroll-reveal";
import { StepsSection } from "@/components/steps-section";
import { Testimonials } from "@/components/testimonials";
import { FIRM } from "@/lib/firm";
import { PLACES } from "@/lib/territory";
import { TRADES } from "@/lib/trades";
import { ArrowRight, Award, Clock, Mail, Phone, Shield } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Shield Water Damage Restoration and Repairs | 24/7 Emergency | Chicago" },
};

const HOME_TRADES = TRADES.slice(0, 6);

const why = [
  {
    icon: Clock,
    title: "60-Minute Emergency Response",
    copy: "We aim to arrive within 60 minutes across Chicago to stop damage, extract water, and start structural drying.",
  },
  {
    icon: Shield,
    title: "Attention to Detail",
    copy: "We focus on salvaging the property and belongings, cutting replacement costs and unnecessary invoices.",
  },
  {
    icon: Award,
    title: "Satisfaction Guarantee",
    copy: "The same standard on bungalows, two-flats, and Loop floors: fast response, careful work, clear communication.",
  },
];

export default function FrontPage() {
  return (
    <div className="min-h-screen bg-[var(--paper)]">
      <ScrollReveal />
      <HeroStage />
      <main className="home-main">
        <ScrollRestoration />
        <section className="assurance" aria-label="Service assurances" data-reveal>
          <p>60-minute response</p>
          <p>24/7 live answer</p>
          <p>4.9/5 rating</p>
        </section>

        <section className="section home-why" id="water-damage-services">
          <div className="section-heading home-center-heading" data-reveal>
            <p className="eyebrow">Why Shield</p>
            <h2>The standard we bring to every job.</h2>
            <p className="home-lede">
              From greystones in Lincoln Park to high-rises in the Loop, we bring the same
              standard: fast response, careful work, and clear communication — backed by
              experienced crews and professional equipment.
            </p>
          </div>
          <div className="home-why-grid" data-reveal-stagger>
            {why.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="home-why-card">
                  <div className="home-why-icon">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              );
            })}
          </div>
        </section>

        <PhoneBanner />

        <section className="services section" id="services">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Services</p>
            <h2>What we handle on every loss.</h2>
          </div>
          <div className="service-grid service-grid-six" data-reveal-stagger>
            {HOME_TRADES.map((trade) => (
              <Link
                key={trade.slug}
                className="service-tile service-tile-photo"
                href={`/work/${trade.slug}`}
              >
                <Image
                  src={trade.image}
                  alt={trade.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 420px"
                  quality={75}
                  className="object-cover"
                />
                <div className="service-tile-photo-copy">
                  <p>{trade.numeral}</p>
                  <h3>{trade.name}</h3>
                  <span>{trade.blurb}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <StepsSection />
        <Testimonials />
        <HomeFaq />

        <section className="home-cta" id="emergency-flood-response">
          <div className="home-cta-inner" data-reveal>
            <p className="eyebrow" style={{ color: "#fff" }}>
              24/7 emergency
            </p>
            <h2>Water emergency? Call Shield.</h2>
            <p>One team across Chicago — same equipment, same process, same commitment.</p>
            <p className="home-cta-phone">{FIRM.phoneDisplay}</p>
            <div className="home-cta-actions">
              <a className="button button-light-on-accent" href={FIRM.phoneTel}>
                <Phone className="w-4 h-4" />
                Call now
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link className="button button-outline-on-accent" href="/dispatch">
                <Mail className="w-4 h-4" />
                Request service
              </Link>
            </div>
          </div>
        </section>

        <section className="neighborhoods section" id="neighborhoods">
          <div className="neighborhoods-copy" data-reveal>
            <p className="eyebrow">Service areas</p>
            <h2>Here when Chicago needs us.</h2>
            <p className="home-lede" style={{ marginLeft: 0 }}>
              From the Carroll Avenue shop to Lincoln Park greystones and Hyde Park plaster, Shield
              serves homes, two-flats, and businesses with neighborhood crews and a single standard:
              fast extraction, controlled drying, and clear communication.
            </p>
            <ul className="neighborhood-list" data-reveal-stagger>
              {PLACES.map((place) => (
                <li key={place.slug}>
                  <Link href={`/coverage/${place.slug}`}>{place.name}</Link>
                </li>
              ))}
            </ul>
            <Link className="text-link neighborhood-link" href="/coverage">
              View offices &amp; service area <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="neighborhoods-map" data-reveal>
            <ChicagoFleetMap />
          </div>
        </section>
      </main>
    </div>
  );
}
