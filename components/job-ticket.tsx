"use client";

import { FormSuccess } from "@/components/form-success";
import { FIRM } from "@/lib/firm";
import Link from "next/link";
import { FormEvent, useState } from "react";

const compactField =
  "w-full px-3 py-2.5 rounded-[var(--radius)] border border-[var(--line)] focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent";
const serviceField =
  "w-full px-4 py-3 rounded-[var(--radius)] border border-[var(--line)] focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent";

export function JobTicket({
  landingPage,
  submitLabel,
  variant = "emergency",
}: {
  landingPage: string;
  submitLabel?: string;
  variant?: "emergency" | "service";
}) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [customerType, setCustomerType] = useState<"homeowner" | "business" | null>(null);
  const fieldClass = variant === "service" ? serviceField : compactField;
  const label = submitLabel ?? (variant === "service" ? "Submit Emergency Request" : "Get Emergency Help Now");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      address: String(data.get("address") ?? ""),
      projectDetails: String(data.get("story") ?? ""),
      landingPage,
      customerType,
    };
    if (payload.phone.trim().length < 7 || payload.address.trim().length < 6) {
      setError("Need a callback number and a street we can find.");
      return;
    }
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/ticket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        setError("Could not send. Call the dispatch line.");
        setBusy(false);
        return;
      }
      setSent(true);
    } catch {
      setError("Could not send. Call the dispatch line.");
    }
    setBusy(false);
  }

  if (sent) {
    return <FormSuccess onReset={() => setSent(false)} />;
  }

  return (
    <form className={variant === "service" ? "space-y-6" : "space-y-4"} onSubmit={onSubmit} noValidate>
      {variant === "service" ? (
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button
            type="button"
            onClick={() => setCustomerType("homeowner")}
            className={`p-4 rounded-[var(--radius)] border-2 transition-all duration-300 ${
              customerType === "homeowner"
                ? "border-[var(--accent)] bg-[var(--accent)]/5"
                : "border-[var(--line)] hover:border-[var(--accent)]"
            }`}
          >
            <h3
              className={`text-lg font-semibold mb-1 ${
                customerType === "homeowner" ? "text-accent" : "text-ink"
              }`}
            >
              Homeowner
            </h3>
            <p className="text-sm text-ink-soft">Residential property</p>
          </button>
          <button
            type="button"
            onClick={() => setCustomerType("business")}
            className={`p-4 rounded-[var(--radius)] border-2 transition-all duration-300 ${
              customerType === "business"
                ? "border-[var(--accent)] bg-[var(--accent)]/5"
                : "border-[var(--line)] hover:border-[var(--accent)]"
            }`}
          >
            <h3
              className={`text-lg font-semibold mb-1 ${
                customerType === "business" ? "text-accent" : "text-ink"
              }`}
            >
              Business
            </h3>
            <p className="text-sm text-ink-soft">Commercial property</p>
          </button>
        </div>
      ) : null}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block text-sm font-medium text-ink">
          Name *
          <input name="name" className={`${fieldClass} mt-1`} />
        </label>
        <label className="block text-sm font-medium text-ink">
          Phone *
          <input name="phone" type="tel" required className={`${fieldClass} mt-1`} />
        </label>
      </div>
      <label className="block text-sm font-medium text-ink">
        Email
        <input name="email" type="email" className={`${fieldClass} mt-1`} />
      </label>
      <label className="block text-sm font-medium text-ink">
        Address *
        <input name="address" required className={`${fieldClass} mt-1`} />
      </label>
      <label className="block text-sm font-medium text-ink">
        What happened? *
        <textarea
          name="story"
          rows={3}
          placeholder="e.g. Burst pipe, basement flooded, roof leak..."
          className={`${fieldClass} mt-1`}
        />
      </label>
      {error ? <p className="text-sm text-accent">{error}</p> : null}
      <button type="submit" disabled={busy} className="button button-primary w-full text-base">
        {busy ? "Sending…" : label}
      </button>
      <p className="text-xs text-ink-soft text-center">
        By submitting, you agree to our{" "}
        <Link href="/terms" className="text-accent text-accent-hover hover:underline">
          terms
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="text-accent text-accent-hover hover:underline">
          privacy policy
        </Link>
        . If water is still moving, call {FIRM.phoneDisplay}.
      </p>
    </form>
  );
}
