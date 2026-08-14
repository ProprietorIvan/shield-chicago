"use client";

import { FIRM } from "@/lib/firm";
import { FormEvent, useState } from "react";

export function JobTicket({ landingPage }: { landingPage: string }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

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
    return (
      <p className="border border-copper bg-bone-deep p-6 text-sm leading-7">
        Ticket in. If water is still moving, call {FIRM.phoneDisplay} — do not wait on email.
      </p>
    );
  }

  return (
    <form className="grid gap-3" onSubmit={onSubmit} noValidate>
      <label className="text-sm">
        Name
        <input name="name" className="mt-1 w-full border border-void/20 bg-white px-3 py-2" />
      </label>
      <label className="text-sm">
        Phone
        <input name="phone" type="tel" required className="mt-1 w-full border border-void/20 bg-white px-3 py-2" />
      </label>
      <label className="text-sm">
        Email
        <input name="email" type="email" className="mt-1 w-full border border-void/20 bg-white px-3 py-2" />
      </label>
      <label className="text-sm">
        Address
        <input name="address" required className="mt-1 w-full border border-void/20 bg-white px-3 py-2" />
      </label>
      <label className="text-sm">
        What happened
        <textarea name="story" rows={4} className="mt-1 w-full border border-void/20 bg-white px-3 py-2" />
      </label>
      {error ? <p className="text-sm text-copper-dark">{error}</p> : null}
      <button
        type="submit"
        disabled={busy}
        className="justify-self-start rounded-full bg-void px-5 py-3 text-sm font-semibold text-bone disabled:opacity-60"
      >
        {busy ? "Sending…" : "Get a crew moving"}
      </button>
    </form>
  );
}
