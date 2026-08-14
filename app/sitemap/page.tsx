import { Breadcrumbs } from "@/components/breadcrumbs";
import { ARTICLES } from "@/lib/advice";
import { FIRM } from "@/lib/firm";
import { PLACES } from "@/lib/territory";
import { TRADES } from "@/lib/trades";
import {
  BookOpen,
  FileText,
  Hammer,
  HelpCircle,
  Home,
  Info,
  MapPin,
  Phone,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap",
  description:
    "Full sitemap of Shield Chicago — main pages, neighborhood coverage, restoration services, guides, and FAQ.",
  alternates: { canonical: "/sitemap" },
  openGraph: {
    title: "Sitemap | Shield Chicago",
    description: "Full sitemap — pages, Chicago locations, services, guides, and FAQ.",
    url: "/sitemap",
  },
};

const mainPages = [
  { name: "Home", url: "/", icon: Home },
  { name: "About Us", url: "/firm", icon: Info },
  { name: "Contact", url: "/dispatch", icon: Phone },
  {
    name: "Emergency flood repair",
    url: "/emergency",
    icon: Hammer,
    description: "24/7 Chicago water extraction and restoration",
  },
  {
    name: "Coverage",
    url: "/coverage",
    icon: MapPin,
    description: "Center Dispatch plus Loop, North Side, Northwest, and South Side crews",
  },
];

const servicePages = [
  {
    name: "Services overview",
    url: "/work",
    description:
      "Water damage restoration — extraction, drying, rebuild, and waterproofing.",
  },
  {
    name: "Emergency flood repair",
    url: "/emergency",
    description: "24/7 Chicago water damage response",
  },
  ...TRADES.map((trade) => ({
    name: trade.name,
    url: `/work/${trade.slug}`,
    description: trade.blurb,
  })),
];

const legalPages = [
  { name: "Privacy Policy", url: "/privacy" },
  { name: "Terms of Service", url: "/terms" },
  { name: "Sitemap", url: "/sitemap" },
];

export default function SitemapPage() {
  const pageUrl = `${FIRM.siteUrl}/sitemap`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Sitemap | Shield Chicago",
        description:
          "Full sitemap of Shield Chicago — pages, Chicago locations, services, guides, and FAQ.",
        isPartOf: { "@id": `${FIRM.siteUrl}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: FIRM.siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Sitemap",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <div className="page-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[{ label: "Sitemap", url: "/sitemap" }]} />

      <section className="pt-12 pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-ink">Sitemap</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-ink mb-6 flex items-center">
                <Home className="w-6 h-6 mr-2 text-accent" />
                Main Pages
              </h2>
              <ul className="space-y-6">
                {mainPages.map((page) => {
                  const Icon = page.icon;
                  return (
                    <li key={page.url} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <Link
                        href={page.url}
                        className="flex items-center text-lg font-medium text-ink hover:text-accent transition-colors duration-300 mb-1"
                      >
                        <Icon className="w-5 h-5 mr-2" />
                        {page.name}
                      </Link>
                      {"description" in page && page.description ? (
                        <p className="text-ink-soft text-sm ml-7">{page.description}</p>
                      ) : null}
                    </li>
                  );
                })}
              </ul>

              <h2 className="text-2xl font-semibold text-ink mt-12 mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-accent" />
                Service Locations
              </h2>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/coverage"
                    className="block text-lg font-medium text-ink hover:text-accent transition-colors duration-300"
                  >
                    All Chicago coverage
                  </Link>
                  <p className="text-ink-soft text-sm">Five hubs from Carroll Avenue across the city</p>
                </li>
                {PLACES.map((place) => (
                  <li key={place.slug}>
                    <Link
                      href={`/coverage/${place.slug}`}
                      className="block text-lg font-medium text-ink hover:text-accent transition-colors duration-300"
                    >
                      {place.name}
                    </Link>
                    <p className="text-ink-soft text-sm">
                      {place.hub === "dispatch" ? FIRM.address : place.area}
                      {place.nearby.length ? ` · Serves ${place.nearby.join(", ")}` : ""}
                    </p>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-semibold text-ink mt-12 mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-accent" />
                Legal Pages
              </h2>
              <ul className="space-y-4">
                {legalPages.map((page) => (
                  <li key={page.url}>
                    <Link
                      href={page.url}
                      className="flex items-center text-lg text-ink-soft hover:text-accent transition-colors duration-300"
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-ink mb-6 flex items-center">
                <Hammer className="w-6 h-6 mr-2 text-accent" />
                Our Services
              </h2>
              <ul className="space-y-6">
                {servicePages.map((page) => (
                  <li key={page.url} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <Link
                      href={page.url}
                      className="block text-lg font-medium text-ink hover:text-accent transition-colors duration-300 mb-1"
                    >
                      {page.name}
                    </Link>
                    <p className="text-ink-soft text-sm">{page.description}</p>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-semibold text-ink mt-12 mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-2 text-accent" />
                Guides &amp; FAQ
              </h2>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/advice"
                    className="flex items-center text-lg font-medium text-ink hover:text-accent transition-colors duration-300"
                  >
                    <BookOpen className="w-5 h-5 mr-2" /> All restoration guides
                  </Link>
                </li>
                {ARTICLES.map((article) => (
                  <li key={article.slug}>
                    <Link
                      href={`/advice/${article.slug}`}
                      className="block text-base text-ink-soft hover:text-accent transition-colors duration-300"
                    >
                      {article.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/questions"
                    className="flex items-center text-lg font-medium text-ink hover:text-accent transition-colors duration-300"
                  >
                    <HelpCircle className="w-5 h-5 mr-2" /> Frequently asked questions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-semibold text-ink mb-6">Emergency Contact</h2>
            <p className="text-ink-soft mb-4">For emergency service, call our 24/7 hotline:</p>
            <a href={FIRM.phoneTel} className="button button-primary">
              <Phone className="w-5 h-5 mr-2" />
              {FIRM.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
