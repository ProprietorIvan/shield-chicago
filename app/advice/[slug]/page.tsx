import { SERVICE_PHOTO, ServicePageFrame } from "@/components/service-page-frame";
import { articleBySlug, ARTICLES } from "@/lib/advice";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articleBySlug(slug);
  if (!article) return { title: "Guide" };
  return { title: article.title, description: article.dek };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articleBySlug(slug);
  if (!article) notFound();

  const words = article.title.split(" ");
  const heroLead = words.slice(0, Math.ceil(words.length / 2)).join(" ");
  const heroAccent = words.slice(Math.ceil(words.length / 2)).join(" ");

  return (
    <ServicePageFrame
      breadcrumbs={[
        { label: "Guides", url: "/advice" },
        { label: article.title, url: `/advice/${article.slug}` },
      ]}
      pill="Shield Guides"
      heroLead={heroLead}
      heroAccent={heroAccent || "Guide"}
      lede={article.dek}
      cta="Get Emergency Service"
      image={SERVICE_PHOTO.drying}
      imageAlt={article.title}
      landingPage={`advice-${article.slug}`}
    >
      <section className="py-20 bg-white">
        <article className="max-w-3xl mx-auto px-4">
          <div className="space-y-5 text-lg leading-8 text-ink-soft">
            {article.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <Link href="/advice" className="text-link mt-10 inline-flex">
            All guides →
          </Link>
        </article>
      </section>
    </ServicePageFrame>
  );
}
