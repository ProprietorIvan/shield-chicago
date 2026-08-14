"use client";

import { FormEvent, useState } from "react";
import { uniqueNeighborhoods } from "@/lib/mock/stations";

export function SuggestSiteForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const neighborhoods = uniqueNeighborhoods();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const intersection = String(data.get("intersection") ?? "").trim();
    const why = String(data.get("why") ?? "").trim();
    if (intersection.length < 4 || why.length < 20) {
      setError("Add a nearby intersection and a short explanation of why the block floods.");
      return;
    }
    setError("");
    setSent(true);
  }

  if (sent) {
    return (
      <p className="border border-sky bg-foam p-6 text-sm leading-7 text-navy">
        Suggestion stored in this browser session only. Nothing was emailed. Keep a copy of the
        intersection and the “why” until a live intake inbox exists.
      </p>
    );
  }

  return (
    <form className="grid gap-4" onSubmit={onSubmit} noValidate>
      <label className="text-sm text-navy">
        Neighborhood
        <select
          name="neighborhood"
          className="mt-1 w-full rounded-sm border border-navy/20 bg-white px-3 py-2"
          defaultValue={neighborhoods[0]}
        >
          {neighborhoods.map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>
      </label>
      <label className="text-sm text-navy">
        Ward (optional, 1–50)
        <input
          name="ward"
          type="number"
          min={1}
          max={50}
          className="mt-1 w-full rounded-sm border border-navy/20 bg-white px-3 py-2"
        />
      </label>
      <label className="text-sm text-navy">
        Nearest intersection
        <input
          name="intersection"
          required
          placeholder="Madison & Austin"
          className="mt-1 w-full rounded-sm border border-navy/20 bg-white px-3 py-2"
        />
      </label>
      <label className="text-sm text-navy">
        Why this block
        <textarea
          name="why"
          rows={5}
          required
          placeholder="Viaduct ponds, basement backups, lakefront overtopping…"
          className="mt-1 w-full rounded-sm border border-navy/20 bg-white px-3 py-2"
        />
      </label>
      <label className="text-sm text-navy">
        How we can reach you
        <input
          name="contact"
          type="email"
          placeholder="you@example.com"
          className="mt-1 w-full rounded-sm border border-navy/20 bg-white px-3 py-2"
        />
      </label>
      {error ? <p className="text-sm text-flag">{error}</p> : null}
      <button
        type="submit"
        className="justify-self-start rounded-sm bg-navy px-5 py-3 text-sm font-semibold text-paper hover:bg-navy-mid"
      >
        Submit a candidate site
      </button>
    </form>
  );
}
