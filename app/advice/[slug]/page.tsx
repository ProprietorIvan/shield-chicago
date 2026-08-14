import { articleBySlug, ARTICLES } from "@/lib/advice";
import type { Metadata } from "next";
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
  if (!article) return { title: "Advice" };
  return { title: article.title, description: article.dek };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articleBySlug(slug);
  if (!article) notFound();

  return (
    <article className="mx-auto max-w-2xl px-4 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">Advice</p>
      <h1 className="mt-3 font-display text-4xl">{article.title}</h1>
      <p className="mt-4 text-lg text-quiet">{article.dek}</p>
      <div className="mt-8 space-y-5 text-base leading-8">
        {article.body.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
