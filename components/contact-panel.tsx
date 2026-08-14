"use client";

import { FormEvent, useState } from "react";

const INTERESTS = [
  "Hosting a station",
  "Using the data",
  "Neighborhood meeting",
  "Press or partnership",
  "Something else",
];

export function ContactPanel() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    if (!email.includes("@") || message.trim().length < 12) {
      setError("Enter a valid email and a message of at least a sentence.");
      return;
    }
    setError("");
    setSent(true);
  }

  return (
    <section className="bg-navy text-paper" id="contact">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-sky uppercase">Get in touch</p>
          <h2 className="mt-3 font-display text-3xl font-semibold">Write the project</h2>
          <p className="mt-4 text-sm leading-7 text-sky-soft">
            This form stays on your browser. It does not email a server yet. Use it to test the
            flow, then wire a handler before launch.
          </p>
        </div>
        {sent ? (
          <p className="self-center border border-sky/40 bg-white/5 p-6 text-sm leading-7">
            Message captured locally. No email was sent. Copy your note and send it once a live
            inbox is connected.
          </p>
        ) : (
          <form className="grid gap-4" onSubmit={onSubmit} noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm">
                First name
                <input
                  name="firstName"
                  className="mt-1 w-full rounded-sm border border-white/20 bg-navy-deep px-3 py-2 text-paper"
                  autoComplete="given-name"
                />
              </label>
              <label className="text-sm">
                Last name
                <input
                  name="lastName"
                  className="mt-1 w-full rounded-sm border border-white/20 bg-navy-deep px-3 py-2 text-paper"
                  autoComplete="family-name"
                />
              </label>
            </div>
            <label className="text-sm">
              Email
              <input
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-sm border border-white/20 bg-navy-deep px-3 py-2 text-paper"
                autoComplete="email"
              />
            </label>
            <label className="text-sm">
              Interested in
              <select
                name="interest"
                className="mt-1 w-full rounded-sm border border-white/20 bg-navy-deep px-3 py-2 text-paper"
                defaultValue={INTERESTS[0]}
              >
                {INTERESTS.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label className="text-sm">
              Message
              <textarea
                name="message"
                rows={5}
                required
                className="mt-1 w-full rounded-sm border border-white/20 bg-navy-deep px-3 py-2 text-paper"
              />
            </label>
            {error ? <p className="text-sm text-gold">{error}</p> : null}
            <button
              type="submit"
              className="justify-self-start rounded-sm bg-sky px-5 py-3 text-sm font-semibold text-navy hover:bg-sky-soft"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
