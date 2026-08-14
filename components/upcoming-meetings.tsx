import { MEETINGS } from "@/lib/mock/meetings";

export function UpcomingMeetings() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs font-semibold tracking-[0.2em] text-flag uppercase">On the calendar</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-navy">Upcoming gatherings</h2>
        <p className="mt-3 text-sm text-muted">
          Dates and venues are placeholders for scheduling. Confirm them before publishing.
        </p>
        <div className="mt-8 grid gap-4">
          {MEETINGS.map((meeting) => (
            <article key={meeting.id} className="grid gap-2 border border-navy/10 p-5 md:grid-cols-[220px_1fr]">
              <p className="text-sm font-semibold text-navy">{meeting.dateLabel}</p>
              <div>
                <h3 className="font-display text-lg font-semibold text-navy">{meeting.title}</h3>
                <p className="mt-1 text-sm text-muted">
                  {meeting.place} · {meeting.address}
                </p>
                <p className="mt-2 text-sm leading-6 text-ink">{meeting.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
