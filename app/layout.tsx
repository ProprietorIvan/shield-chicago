import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { GoogleAdsTag } from "@/components/google-ads-tag";
import { GoogleAdsTracker } from "@/components/google-ads-tracker";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { FIRM } from "@/lib/firm";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(FIRM.siteUrl),
  title: {
    default: "Shield Water Damage Restoration and Repairs | 24/7 Emergency | Chicago",
    template: `%s · Shield Chicago`,
  },
  description: FIRM.description,
  openGraph: {
    title: "Shield Water Damage Restoration and Repairs | 24/7 | Chicago",
    description: FIRM.tagline,
    images: [{ url: "/photos/homepage/shield-emergency-water-damage-extraction.jpg" }],
    locale: "en_US",
    type: "website",
    siteName: "Shield Water Damage Restoration and Repairs",
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#8d0d0c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${FIRM.siteUrl}/#org`,
        name: "Shield Water Damage Restoration and Repairs",
        legalName: "Felicita Group LLC",
        alternateName: "Shield Chicago",
        url: FIRM.siteUrl,
        telephone: FIRM.phoneE164,
        email: FIRM.email,
        image: `${FIRM.siteUrl}/shield-water-damage-restoration-and-repairs-logo.png`,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1200 W Carroll Ave",
          addressLocality: "Chicago",
          addressRegion: "IL",
          postalCode: "60607",
          addressCountry: "US",
        },
        areaServed: {
          "@type": "City",
          name: "Chicago",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${FIRM.siteUrl}/#website`,
        url: FIRM.siteUrl,
        name: "Shield Water Damage Restoration and Repairs",
        publisher: { "@id": `${FIRM.siteUrl}/#org` },
      },
    ],
  };

  return (
    <html lang="en" className={outfit.className}>
      <body>
        <GoogleAdsTag />
        <GoogleAdsTracker />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
