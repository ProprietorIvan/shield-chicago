import { TEAM } from "@/lib/mock/people";

export function TeamGrid() {
  return (
    <div>
      <p className="mb-6 text-sm text-muted">
        Names and roles are placeholders. Replace this grid before presenting Shield Chicago as a
        staffed organization.
      </p>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((person) => (
          <li key={person.name} className="border border-navy/10 bg-white p-5">
            <p className="font-display text-lg font-semibold text-navy">{person.name}</p>
            <p className="text-sm font-medium text-flag">{person.role}</p>
            <p className="mt-2 text-sm text-muted">{person.focus}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
