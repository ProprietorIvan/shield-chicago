import { SERVICE_PHOTO, ServicePageFrame } from "@/components/service-page-frame";
import type { Trade } from "@/lib/trades";
import {
  CheckCircle2,
  Clock,
  Droplets,
  Fan,
  Gauge,
  Hammer,
  Layers,
  Paintbrush,
  Search,
  Shield,
  Sparkles,
  ThermometerSnowflake,
  Timer,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";

const FEATURES: Record<string, { icon: LucideIcon; title: string; description: string }[]> = {
  "pump-out": [
    { icon: Droplets, title: "Commercial Extraction", description: "Pumps and extractors until the floor is a damp film, not a pool" },
    { icon: Clock, title: "60-Minute Response", description: "Crews staged to reach Chicago neighborhoods fast" },
    { icon: Shield, title: "Containment", description: "The rest of the building stays clean while we pull the water" },
    { icon: Gauge, title: "Moisture Mapping", description: "Hand-off to dry-out with readings, not a guess" },
  ],
  "dry-out": [
    { icon: Fan, title: "Industrial Air Movers", description: "3x more powerful than standard equipment, placed for maximum moisture removal" },
    { icon: ThermometerSnowflake, title: "Advanced Dehumidifiers", description: "Removes up to 240 pints of water per day — faster than any residential system" },
    { icon: Gauge, title: "Precision Monitoring", description: "Moisture detection that finds hidden water pockets" },
    { icon: Timer, title: "24/7 Active Monitoring", description: "Real-time adjustments prevent secondary damage and mold growth" },
  ],
  floors: [
    { icon: Hammer, title: "Hardwood Restoration", description: "Cupping, crowning, and finish work on oak, maple, and more" },
    { icon: Sparkles, title: "Carpet & Pad", description: "Lift, dry, or replace — pad that will smell in August gets pulled" },
    { icon: Timer, title: "Fast Turnaround", description: "Subfloor dried or sistered so the room walks normally" },
    { icon: Shield, title: "Salvage First", description: "We do not tear out a floor that will mill back" },
  ],
  walls: [
    { icon: Wrench, title: "Expert Restoration", description: "Specialized in water damage repair and restoration" },
    { icon: Paintbrush, title: "Quality Materials", description: "Water-resistant and mold-resistant materials" },
    { icon: Clock, title: "Fast Response", description: "Quick assessment and rapid restoration process" },
    { icon: Shield, title: "Guaranteed Work", description: "Full warranty on restoration services" },
  ],
  "wet-rooms": [
    { icon: Hammer, title: "Cabinet Work", description: "Swollen boxes pulled, cavities dried, boxes reset" },
    { icon: Paintbrush, title: "Finishes", description: "Counters, fixtures, and trim put back in working order" },
    { icon: Clock, title: "Fast Response", description: "Supply-line and overflow losses contained quickly" },
    { icon: Shield, title: "Plumber Coordination", description: "If the break is still live, we work with your plumber" },
  ],
  "keep-dry": [
    { icon: Droplets, title: "Source Diagnosis", description: "Sewer, storm, or a plumbing break — named correctly" },
    { icon: Shield, title: "Interior Detailing", description: "Where it failed, not a coating sold as a system" },
    { icon: Clock, title: "Sequenced With Drying", description: "Waterproofing after the structure is actually dry" },
    { icon: Layers, title: "Membranes & Drains", description: "Valves and drainage that match the building" },
  ],
  mold: [
    { icon: Search, title: "Source First", description: "If the board is still wet, we do not paint over it" },
    { icon: Shield, title: "Clean Line Removal", description: "Colonized material cut out — not fogged and left" },
    { icon: Clock, title: "Part of the Water File", description: "Mold work is restoration, not a separate scare product" },
    { icon: Gauge, title: "Metered Close-Up", description: "Walls close only after the reading agrees" },
  ],
};

export function TradeLander({ trade }: { trade: Trade }) {
  const features = FEATURES[trade.slug] ?? FEATURES["pump-out"];

  return (
    <ServicePageFrame
      breadcrumbs={[
        { label: "Services", url: "/work" },
        { label: trade.name, url: `/work/${trade.slug}` },
      ]}
      pill={trade.pill}
      heroLead={trade.heroLead}
      heroAccent={trade.heroAccent}
      lede={trade.promise}
      cta={trade.cta}
      image={trade.image}
      imageAlt={trade.alt}
      landingPage={trade.slug}
    >
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-ink">Professional Restoration Services</h2>
            <p className="text-lg text-ink-soft">{trade.blurb}</p>
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

      {trade.offerings ? (
        <section className="py-20 bg-[#f5f5f5]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-ink">Our Services</h2>
              <p className="text-lg text-ink-soft">Complete water damage restoration solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {trade.offerings.map((type) => (
                <div
                  key={type.title}
                  className="bg-white p-8 rounded-[var(--radius)] hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-bold mb-4 text-ink">{type.title}</h3>
                  <ul className="space-y-3">
                    {type.points.map((point) => (
                      <li key={point} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                        <span className="text-ink-soft">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20 bg-[#f5f5f5]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-ink">How this job runs</h2>
              <p className="text-lg text-ink-soft">Our process from first extraction through finish</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {trade.steps.map((step, index) => (
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
      )}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-ink">{trade.whyTitle}</h2>
              <p className="text-lg text-ink-soft mb-6 leading-relaxed">{trade.promise}</p>
              <ul className="space-y-4">
                {trade.whyPoints.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="text-ink-soft font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px]">
              <Image
                src={trade.whyImage || SERVICE_PHOTO.drying}
                alt={trade.alt}
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
