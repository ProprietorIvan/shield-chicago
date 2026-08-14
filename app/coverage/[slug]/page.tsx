import { PlaceLander } from "@/components/place-lander";
import { placeBySlug, PLACES } from "@/lib/territory";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return PLACES.map((place) => ({ slug: place.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const place = placeBySlug(slug);
  if (!place) return { title: "Coverage" };
  return {
    title: place.hub === "dispatch" ? "Center Dispatch" : `${place.name} water damage`,
    description: place.pitch,
  };
}

export default async function PlacePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const place = placeBySlug(slug);
  if (!place) notFound();
  return <PlaceLander place={place} />;
}
