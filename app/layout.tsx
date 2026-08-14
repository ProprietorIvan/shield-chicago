import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
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
  return (
    <html lang="en" className={outfit.className}>
      <body>
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
