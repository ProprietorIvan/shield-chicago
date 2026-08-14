"use client";

import { TRADES } from "@/lib/trades";
import { ArrowRight, Check, Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function ServicesIndex() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TRADES.map((trade, index) => (
          <div key={trade.slug} className="page-card group relative overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src={trade.image}
                alt={trade.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-ink group-hover:text-accent transition-colors">
                {trade.name}
              </h3>
              <p className="text-ink-soft mb-4">{trade.blurb}</p>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expanded === index ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <ul className="space-y-2 mb-4">
                  {trade.steps.map((step) => (
                    <li key={step} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <span className="text-ink-soft">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setExpanded(expanded === index ? null : index)}
                  className="text-accent hover:text-[var(--accent-dark)] transition-colors flex items-center gap-1"
                >
                  {expanded === index ? (
                    <>
                      <Minus className="w-4 h-4" />
                      <span>Less Info</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>More Info</span>
                    </>
                  )}
                </button>
                <Link
                  href={`/work/${trade.slug}`}
                  className="inline-flex items-center gap-1 text-accent hover:text-[var(--accent-dark)] transition-colors"
                >
                  Book Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
