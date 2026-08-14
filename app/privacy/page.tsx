import type { Metadata } from "next";
import Link from "next/link";
import { SERVICE_PHOTO, ServicePageFrame } from "@/components/service-page-frame";

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Shield Water Damage Restoration and Repairs (Felicita Group LLC): how we collect, use, and protect your information when you use flood-911.com and our Chicago water damage services.',
};


export default function PrivacyPage() {
  return (
    <ServicePageFrame
      breadcrumbs={[{ label: "Privacy Policy", url: "/privacy" }]}
      pill="Shield Water Damage Restoration and Repairs · Felicita Group LLC"
      heroLead="Privacy"
      heroAccent="Policy"
      lede="How we collect, use, and protect your information when you use flood-911.com and our Chicago water damage services."
      cta="Get Emergency Service"
      image={SERVICE_PHOTO.drying}
      imageAlt="Chicago water damage restoration work"
      landingPage="privacy"
    >
      <section className="py-20 bg-white">
        <div
          id="privacy-content"
          className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16"
        >
          <div className="mb-12 text-sm text-[var(--ink-soft)] font-light">
            Last Updated: August 14, 2026
          </div>

          <div className="mb-16 p-6 border-l-2 border-[var(--ink)] bg-[var(--paper)]">
            <div className="text-xs text-[var(--ink-soft)] uppercase tracking-wider mb-2 font-medium">
              Summary
            </div>
            <p className="text-base text-[var(--ink)] font-light leading-relaxed">
              This policy describes how Felicita Group LLC handles personal information when
              you visit flood-911.com or use Shield Water Damage Restoration and Repairs services.
              For contractual terms, see our{" "}
              <Link href="/terms" className="text-black underline underline-offset-2 hover:no-underline">
                Terms &amp; Conditions
              </Link>
              .
            </p>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          <nav className="mb-16">
            <h2 className="text-xs text-[var(--ink-soft)] uppercase tracking-widest mb-6 font-medium">
              Table of Contents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-2 text-sm">
              <a href="#intro" className="text-gray-600 hover:text-black font-light transition-colors">
                1. Introduction
              </a>
              <a href="#collect" className="text-gray-600 hover:text-black font-light transition-colors">
                2. Information We Collect
              </a>
              <a href="#how-collect" className="text-gray-600 hover:text-black font-light transition-colors">
                3. How We Collect Information
              </a>
              <a href="#use" className="text-gray-600 hover:text-black font-light transition-colors">
                4. How We Use Your Information
              </a>
              <a href="#disclosure" className="text-gray-600 hover:text-black font-light transition-colors">
                5. Disclosure of Your Information
              </a>
              <a href="#security" className="text-gray-600 hover:text-black font-light transition-colors">
                6. Data Security
              </a>
              <a href="#changes" className="text-gray-600 hover:text-black font-light transition-colors">
                7. Changes to This Policy
              </a>
              <a href="#contact" className="text-gray-600 hover:text-black font-light transition-colors">
                8. Contact Information
              </a>
            </div>
          </nav>

          <div className="border-t border-gray-200 my-16"></div>

          <div id="intro" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-light text-black tracking-tight mb-6">
              1. Introduction
            </h2>
            <div className="space-y-6 text-lg text-[var(--ink)] font-light leading-relaxed">
              <p>
                Felicita Group LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is
                committed to protecting it through our compliance with this policy. This Privacy
                Policy describes the types of information we collect from you or that you may
                provide when you visit our website (the &quot;Site&quot;) and our practices for
                collecting, using, maintaining, protecting, and disclosing that information.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          <div id="collect" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-light text-black tracking-tight mb-6">
              2. Information We Collect
            </h2>
            <div className="space-y-6 text-lg text-[var(--ink)] font-light leading-relaxed">
              <p>We collect several types of information from and about users of our Site, including:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong className="text-black font-medium">Personal Information:</strong> Name,
                  postal address, email address, telephone number, and other identifiers that permit
                  us to contact you.
                </li>
                <li>
                  <strong className="text-black font-medium">Service Information:</strong> Details
                  about your property and the services you are interested in.
                </li>
                <li>
                  <strong className="text-black font-medium">Usage Information:</strong> Information
                  about your internet connection, the equipment you use to access our Site, and usage
                  details.
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          <div id="how-collect" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-light text-black tracking-tight mb-6">
              3. How We Collect Information
            </h2>
            <div className="space-y-6 text-lg text-[var(--ink)] font-light leading-relaxed">
              <p>We collect information:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  Directly from you when you provide it to us through forms or contact requests.
                </li>
                <li>
                  Automatically as you navigate through the site, using cookies and other tracking
                  technologies.
                </li>
                <li>From third parties, for example, our business partners.</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          <div id="use" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-light text-black tracking-tight mb-6">
              4. How We Use Your Information
            </h2>
            <div className="space-y-6 text-lg text-[var(--ink)] font-light leading-relaxed">
              <p>We use information that we collect about you or that you provide to us:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>To present our Site and its contents to you.</li>
                <li>
                  To provide you with information, products, or services that you request from us.
                </li>
                <li>To fulfill any other purpose for which you provide it.</li>
                <li>To carry out our obligations and enforce our rights.</li>
                <li>
                  To notify you about changes to our Site or any products or services we offer.
                </li>
                <li>In any other way we may describe when you provide the information.</li>
                <li>For any other purpose with your consent.</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          <div id="disclosure" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-light text-black tracking-tight mb-6">
              5. Disclosure of Your Information
            </h2>
            <div className="space-y-6 text-lg text-[var(--ink)] font-light leading-relaxed">
              <p>
                We may disclose aggregated information about our users, and information that does
                not identify any individual, without restriction. We may disclose personal
                information that we collect or you provide:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>To our subsidiaries and affiliates.</li>
                <li>
                  To contractors, service providers, and other third parties we use to support our
                  business.
                </li>
                <li>To fulfill the purpose for which you provide it.</li>
                <li>For any other purpose disclosed by us when you provide the information.</li>
                <li>With your consent.</li>
                <li>To comply with any court order, law, or legal process.</li>
                <li>To enforce or apply our terms of use and other agreements.</li>
                <li>
                  If we believe disclosure is necessary to protect the rights, property, or safety
                  of our company, our customers, or others.
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          <div id="security" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-light text-black tracking-tight mb-6">
              6. Data Security
            </h2>
            <div className="space-y-6 text-lg text-[var(--ink)] font-light leading-relaxed">
              <p>
                We have implemented measures designed to secure your personal information from
                accidental loss and from unauthorized access, use, alteration, and disclosure.
                However, we cannot guarantee that unauthorized third parties will never be able to
                defeat those measures or use your personal information for improper purposes.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          <div id="changes" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl font-light text-black tracking-tight mb-6">
              7. Changes to Our Privacy Policy
            </h2>
            <div className="space-y-6 text-lg text-[var(--ink)] font-light leading-relaxed">
              <p>
                We may update our privacy policy from time to time. If we make material changes to
                how we treat our users&apos; personal information, we will post the new privacy policy
                on this page and notify you through a notice on the Site home page.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          <div id="contact" className="mb-24 scroll-mt-24">
            <h2 className="text-2xl font-light text-black tracking-tight mb-6">
              8. Contact Information
            </h2>
            <div className="space-y-6 text-lg text-[var(--ink)] font-light leading-relaxed">
              <p>To ask questions or comment about this privacy policy and our privacy practices:</p>
              <div className="border-l-2 border-[var(--ink)] pl-6 py-2">
                <div className="text-xs text-[var(--ink-soft)] uppercase tracking-wider mb-1">
                  Shield Water Damage Restoration and Repairs · Felicita Group LLC
                </div>
                <div className="font-medium text-black">dispatch@flood-911.com</div>
                <div className="text-gray-600 font-light text-sm mt-1">
                  (464) 768-0164 · Chicago, IL
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 my-16"></div>

          <div className="text-center">
            <Link
              href="/"
              className="text-xs text-[var(--ink-soft)] hover:text-black font-light transition-colors no-print"
            >
              ← Back to flood-911.com
            </Link>
            <div className="mt-8 text-xs text-[var(--ink-soft)] font-light">
              Shield Water Damage Restoration and Repairs · Felicita Group LLC
            </div>
          </div>
        </div>
      </section>
    </ServicePageFrame>
  );
}
