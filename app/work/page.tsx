import { SERVICE_PHOTO, ServicePageFrame } from "@/components/service-page-frame";
import { ServicesIndex } from "@/components/services-index";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water damage restoration services",
  description:
    "Shield Chicago restoration trades: pump-out, structural dry-out, floors, walls, wet rooms, waterproofing, and mold after a water loss.",
};

export default function WorkIndex() {
  return (
    <ServicePageFrame
      breadcrumbs={[{ label: "Services", url: "/work" }]}
      pill="Chicago's 24/7 Emergency Flood Response"
      heroLead="Water Damage"
      heroAccent="Restoration Services"
      lede="Extraction, structural drying, floors, walls, kitchens, baths, waterproofing, and mold — one crew family from the first gallon to the last coat of paint."
      cta="Get Emergency Service"
      image={SERVICE_PHOTO.extraction}
      imageAlt="Emergency water extraction on a Chicago property"
      landingPage="work"
    >
      <section className="py-8 bg-[#f5f5f5]">
        <ServicesIndex />
      </section>
    </ServicePageFrame>
  );
}
