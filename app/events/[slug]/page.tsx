import { DemonstrationBanner } from "@/components/demonstration-banner";
import { EventExplorer } from "@/components/event-explorer";
import { PageHero } from "@/components/page-hero";
import { FLOOD_EVENTS, getEventBySlug } from "@/lib/mock";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return FLOOD_EVENTS.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Flood event" };
  return { title: event.title, description: event.summary };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  return (
    <>
      <PageHero eyebrow={event.kind} title={event.title} lede={event.summary} />
      <DemonstrationBanner />
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="max-w-3xl space-y-4 text-sm leading-7 text-ink">
          {event.narrative.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted">{event.sourcesNote}</p>
        <div className="mt-10">
          <EventExplorer event={event} />
        </div>
      </section>
    </>
  );
}
