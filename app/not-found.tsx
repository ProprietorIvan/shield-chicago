import { SERVICE_PHOTO, ServicePageFrame } from "@/components/service-page-frame";
import { FIRM } from "@/lib/firm";
import Link from "next/link";

export default function Missing() {
  return (
    <ServicePageFrame
      breadcrumbs={[{ label: "Not found", url: "/" }]}
      pill="404"
      heroLead="That page"
      heroAccent="is dry"
      lede="Nothing here. Back to the front — or call dispatch if water is still moving."
      cta={`Call ${FIRM.phoneDisplay}`}
      image={SERVICE_PHOTO.extraction}
      imageAlt="Shield Chicago water damage restoration"
      landingPage="not-found"
    >
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Link href="/" className="text-link">
            Shield Chicago home →
          </Link>
        </div>
      </section>
    </ServicePageFrame>
  );
}
