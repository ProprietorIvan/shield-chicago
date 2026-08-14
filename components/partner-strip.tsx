import { PARTNER_GROUPS } from "@/lib/mock/people";

export function PartnerStrip() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs font-semibold tracking-[0.2em] text-flag uppercase">Who would sit at the table</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-navy">Intended collaborators</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          These lists are placeholders. Shield Chicago does not claim official partnerships with the
          City of Chicago, MWRD, or any university until those agreements exist.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {PARTNER_GROUPS.map((group) => (
            <div key={group.heading}>
              <h3 className="font-display text-lg font-semibold text-navy">{group.heading}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {group.names.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
