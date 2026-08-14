import { TESTIMONIALS } from "@/lib/mock/people";

export function TestimonialRail() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs font-semibold tracking-[0.2em] text-flag uppercase">From the blocks</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-navy">
          Why street-level numbers matter
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          Quotes below are labeled placeholders. Replace them with real residents and practitioners
          before any public launch. Do not attribute invented lines to city officials.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <blockquote key={item.name} className="border-l-4 border-sky bg-foam/60 p-6">
              <p className="text-sm leading-7 text-navy">“{item.quote}”</p>
              <footer className="mt-4 text-sm font-semibold text-navy">
                {item.name}
                <span className="block font-normal text-muted">{item.affiliation}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
