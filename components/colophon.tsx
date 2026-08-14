import Link from "next/link";
import { Wordmark } from "@/components/wordmark";
import { FIRM } from "@/lib/firm";
import { PLACES } from "@/lib/territory";
import { TRADES } from "@/lib/trades";

export function Colophon() {
  return (
    <footer className="bg-void text-bone">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Wordmark inverted />
          <p className="mt-4 text-sm leading-6 text-bone/70">{FIRM.tagline}</p>
          <p className="mt-4 text-sm text-copper">{FIRM.phoneDisplay}</p>
          <p className="text-sm text-bone/70">{FIRM.email}</p>
          <p className="mt-2 text-sm text-bone/70">{FIRM.address}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">The work</p>
          <ul className="mt-3 space-y-2 text-sm">
            {TRADES.map((trade) => (
              <li key={trade.slug}>
                <Link href={`/work/${trade.slug}`} className="hover:text-copper">
                  {trade.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">Coverage</p>
          <ul className="mt-3 space-y-2 text-sm">
            {PLACES.slice(0, 8).map((place) => (
              <li key={place.slug}>
                <Link href={`/coverage/${place.slug}`} className="hover:text-copper">
                  {place.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">The firm</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/firm" className="hover:text-copper">
                Who we are
              </Link>
            </li>
            <li>
              <Link href="/rates" className="hover:text-copper">
                How we bill
              </Link>
            </li>
            <li>
              <Link href="/dispatch" className="hover:text-copper">
                Call a crew
              </Link>
            </li>
            <li>
              <Link href="/questions" className="hover:text-copper">
                Questions
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs text-bone/50">
        © {new Date().getFullYear()} {FIRM.legal}. Independent Chicago restoration company.
      </p>
    </footer>
  );
}
