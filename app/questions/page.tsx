import { QUESTIONS } from "@/lib/questions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Questions",
  description: "Straight answers about Shield Chicago response time, sewage backups, insurance files, and mold.",
};

export default function QuestionsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">Questions</p>
      <h1 className="mt-3 font-display text-4xl">Ask before the floor is still wet</h1>
      <dl className="mt-10 space-y-8">
        {QUESTIONS.map((item) => (
          <div key={item.q} className="border-t border-void/10 pt-6">
            <dt className="font-display text-xl">{item.q}</dt>
            <dd className="mt-3 text-sm leading-7 text-quiet">{item.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
