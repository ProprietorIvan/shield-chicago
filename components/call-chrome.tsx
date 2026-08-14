import { FIRM } from "@/lib/firm";
import { Phone } from "lucide-react";

export function CallChrome({ label = "Emergency Response" }: { label?: string }) {
  return (
    <>
      <div className="page-cta-sticky md:hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6" />
            <div>
              <p className="page-cta-label">{label}</p>
              <p className="page-cta-phone">{FIRM.phoneDisplay}</p>
            </div>
          </div>
          <a href={FIRM.phoneTel} className="button button-light-on-accent">
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </div>
      <a href={FIRM.phoneTel} className="page-cta-float" aria-label="Call emergency line">
        <Phone className="w-7 h-7" />
      </a>
    </>
  );
}
