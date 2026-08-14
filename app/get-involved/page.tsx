import { PageHero } from "@/components/page-hero";
import { SuggestSiteForm } from "@/components/suggest-site-form";
import { UpcomingMeetings } from "@/components/upcoming-meetings";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get involved",
  description:
    "Suggest a Shield Chicago flood sensor location and find Chicago flood-preparedness resources.",
};

const RESOURCES = [
  {
    title: "Call 311 for flooded streets and basements",
    body: "Report standing water, a closed viaduct, or a sewer backup through Chicago 311. A sensor network is not a substitute for a work order.",
    href: "https://311.chicago.gov/",
  },
  {
    title: "OEMC and weather alerts",
    body: "The Office of Emergency Management and Communications issues citywide notices. Watch those channels when a cell trains over the city or the lake piles onto the Drive.",
    href: "https://www.chicago.gov/city/en/depts/oem.html",
  },
  {
    title: "Flood insurance is not homeowners insurance",
    body: "Most standard policies skip sewer backup and overland flood. Ask a licensed agent about NFIP or excess coverage before the next April soak.",
    href: "https://www.floodsmart.gov/",
  },
  {
    title: "MWRD and the Deep Tunnel",
    body: "The Tunnel and Reservoir Plan stores combined sewage in storms. It is regional infrastructure, not a local inlet. Street sensors describe the last hundred feet the tunnel cannot see.",
    href: "https://mwrd.org/",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Point us at the block that actually floods"
        lede="The best siting notes come from people who already move cars off a viaduct or put towels at a basement door. Suggest a corner. Come to a placeholder meeting. Use the preparedness links when water is at the stair."
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-semibold text-navy">Suggest a sensor location</h2>
          <p className="mt-3 mb-6 text-sm leading-6 text-muted">
            Ward is optional. Intersection and a short “why” are not. This form does not leave the
            browser until a live inbox is connected.
          </p>
          <SuggestSiteForm />
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-navy">When water is already here</h2>
          <ul className="mt-6 space-y-5">
            {RESOURCES.map((item) => (
              <li key={item.title} className="border-l-4 border-sky pl-4">
                <a href={item.href} className="font-semibold text-navy hover:underline" target="_blank" rel="noreferrer">
                  {item.title}
                </a>
                <p className="mt-1 text-sm leading-6 text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <UpcomingMeetings />
    </>
  );
}
