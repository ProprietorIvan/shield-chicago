"use client";

import { FIRM } from "@/lib/firm";
import { PLACES } from "@/lib/territory";
import { FormEvent, useState } from "react";

export function DispatchForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const phone = String(data.get("phone") ?? "").trim();
    const address = String(data.get("address") ?? "").trim();
    if (phone.length < 7 || address.length < 6) {
      setError("Need a callback number and a street address we can actually find.");
      return;
    }
    setError("");
    setSent(true);
  }

  if (sent) {
    return (
      <p className="border border-copper bg-bone-deep p-6 text-sm leading-7">
        Stored in this browser only. Nothing emailed yet. Call {FIRM.phoneDisplay} if water is still
        moving — do not wait on a form.
      </p>
    );
  }

  return (
    <form className="grid gap-4" onSubmit={onSubmit} noValidate>
      <label className="text-sm">
        Name
        <input name="name" className="mt-1 w-full border border-void/20 bg-white px-3 py-2" />
      </label>
      <label className="text-sm">
        Callback number
        <input name="phone" type="tel" required className="mt-1 w-full border border-void/20 bg-white px-3 py-2" />
      </label>
      <label className="text-sm">
        Email
        <input name="email" type="email" className="mt-1 w-full border border-void/20 bg-white px-3 py-2" />
      </label>
      <label className="text-sm">
        Neighborhood
        <select name="place" className="mt-1 w-full border border-void/20 bg-white px-3 py-2" defaultValue={PLACES[0].name}>
          {PLACES.map((place) => (
            <option key={place.slug}>{place.name}</option>
          ))}
        </select>
      </label>
      <label className="text-sm">
        Street address
        <input name="address" required className="mt-1 w-full border border-void/20 bg-white px-3 py-2" />
      </label>
      <label className="text-sm">
        What happened
        <textarea name="story" rows={5} className="mt-1 w-full border border-void/20 bg-white px-3 py-2" />
      </label>
      {error ? <p className="text-sm text-copper-dark">{error}</p> : null}
      <button type="submit" className="justify-self-start rounded-full bg-void px-5 py-3 text-sm font-semibold text-bone">
        Send to dispatch
      </button>
    </form>
  );
}
