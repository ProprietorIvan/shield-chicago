import Link from "next/link";
import type { FloodEvent } from "@/lib/types";

export function EventCard({ event }: { event: FloodEvent }) {
  const start = new Date(event.start).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "America/Chicago",
  });

  return (
    <article className="flex flex-col border border-navy/10 bg-white p-6">
      <p className="text-xs font-semibold tracking-wide text-flag uppercase">{event.kind}</p>
      <h3 className="mt-2 font-display text-xl font-semibold text-navy">{event.title}</h3>
      <p className="mt-1 text-xs text-muted">{start}</p>
      <p className="mt-3 flex-1 text-sm leading-6 text-ink">{event.summary}</p>
      <Link
        href={`/events/${event.slug}`}
        className="mt-5 text-sm font-semibold text-navy underline decoration-sky underline-offset-4"
      >
        Open the event map
      </Link>
    </article>
  );
}
