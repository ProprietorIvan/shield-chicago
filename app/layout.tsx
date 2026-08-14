import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { Colophon } from "@/components/colophon";
import { Masthead } from "@/components/masthead";
import { FIRM } from "@/lib/firm";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(FIRM.siteUrl),
  title: {
    default: FIRM.legal,
    template: `%s · ${FIRM.name}`,
  },
  description: FIRM.description,
  openGraph: {
    title: FIRM.legal,
    description: FIRM.tagline,
    images: [{ url: "/og.png", alt: `${FIRM.name} water damage restoration` }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-bone text-void">
        <Masthead />
        <main className="flex-1">{children}</main>
        <Colophon />
      </body>
    </html>
  );
}
