"use client";

import { FormSuccess } from "@/components/form-success";
import { FIRM } from "@/lib/firm";
import { trackContactConversion, trackFormSubmit } from "@/lib/track-conversion";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";

const compactField =
  "w-full px-3 py-2.5 rounded-[var(--radius)] border border-[var(--line)] focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent";
const serviceField =
  "w-full px-4 py-3 rounded-[var(--radius)] border border-[var(--line)] focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent";

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  address: "",
  projectDetails: "",
  businessType: "",
  propertySize: "",
};

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
  const [formData, setFormData] = useState(emptyForm);
  const fieldClass = variant === "service" ? serviceField : compactField;
  const label = submitLabel ?? (variant === "service" ? "Submit Emergency Request" : "Get Emergency Help Now");

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const submissionData = {
      ...formData,
      customerType,
      facilityType: formData.businessType || undefined,
      projectSize: formData.propertySize || undefined,
      landingPage,
    };

    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        trackFormSubmit(landingPage);
        trackContactConversion();
        setSent(true);
        setFormData(emptyForm);
        setCustomerType(null);
        return;
      }

      const data = await response.json().catch(() => ({}));
      throw new Error(data?.error || "Failed to submit request");
    } catch (caught) {
      const message =
        caught instanceof Error
          ? caught.message
          : "There was an error submitting your request. Please try again.";
      console.error("Error submitting form:", caught);
      setError(message);
    } finally {
      setBusy(false);
    }
  }

  if (sent) {
    return <FormSuccess onReset={() => setSent(false)} />;
  }

  return (
    <form className={variant === "service" ? "space-y-6" : "space-y-4"} onSubmit={onSubmit}>
      {variant === "service" ? (
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button
            type="button"
            onClick={() => setCustomerType("homeowner")}
            aria-pressed={customerType === "homeowner"}
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
            aria-pressed={customerType === "business"}
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
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`${fieldClass} mt-1`}
          />
        </label>
        <label className="block text-sm font-medium text-ink">
          Phone *
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            className={`${fieldClass} mt-1`}
          />
        </label>
      </div>
      <label className="block text-sm font-medium text-ink">
        Email *
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={`${fieldClass} mt-1`}
        />
      </label>
      <label className="block text-sm font-medium text-ink">
        Address *
        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className={`${fieldClass} mt-1`}
        />
      </label>
      {variant === "service" && customerType === "business" ? (
        <div className="space-y-6">
          <label className="block text-sm font-medium text-ink">
            Business Type
            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className={`${fieldClass} mt-1`}
            >
              <option value="">Select business type</option>
              <option value="retail">Retail</option>
              <option value="office">Office</option>
              <option value="restaurant">Restaurant</option>
              <option value="warehouse">Warehouse</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label className="block text-sm font-medium text-ink">
            Property Size (sq ft) - Approximate
            <input
              name="propertySize"
              type="number"
              value={formData.propertySize}
              onChange={handleChange}
              className={`${fieldClass} mt-1`}
            />
          </label>
        </div>
      ) : null}
      <label className="block text-sm font-medium text-ink">
        What happened? *
        <textarea
          name="projectDetails"
          value={formData.projectDetails}
          onChange={handleChange}
          required
          rows={variant === "service" ? 4 : 3}
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
