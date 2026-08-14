import { FIRM } from "@/lib/firm";
import { CheckCircle2, Phone } from "lucide-react";

export function FormSuccess({ onReset }: { onReset: () => void }) {
  return (
    <div className="text-center py-8 px-4">
      <div className="w-20 h-20 bg-emerald-100 rounded-[var(--radius)] flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-12 h-12 text-emerald-600" />
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-ink mb-3">Help Is On The Way</h3>
      <p className="text-lg text-ink-soft mb-4 max-w-md mx-auto leading-relaxed">
        We&apos;ve received your request and our team will contact you within minutes.
      </p>
      <p className="text-ink-soft mb-6">
        <strong>Can&apos;t wait?</strong> Call us directly:
      </p>
      <a href={FIRM.phoneTel} className="button button-primary mb-6">
        <Phone className="w-5 h-5" />
        {FIRM.phoneDisplay}
      </a>
      <button
        type="button"
        onClick={onReset}
        className="block mx-auto text-accent font-medium hover:underline text-sm"
      >
        Submit another request
      </button>
    </div>
  );
}
