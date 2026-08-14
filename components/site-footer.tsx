import Link from "next/link";
import { ShieldMark } from "@/components/shield-mark";
import { NAV_LINKS, SITE_NAME } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <ShieldMark className="h-8 w-7" />
            <p className="font-display text-lg font-semibold">{SITE_NAME}</p>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-6 text-sky-soft">
            A demonstration network for street-level flood monitoring in Chicago. Readings on this
            site are modeled for design and conversation, not live gauges.
          </p>
        </div>
        <div>
          <p className="font-display text-sm tracking-wide text-sky uppercase">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-sky">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-sm tracking-wide text-sky uppercase">Before launch</p>
          <p className="mt-3 text-sm leading-6 text-sky-soft">
            Replace placeholder names, quotes, and partner lists. Keep the demonstration-data
            banner until a real sensor feed is wired in.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-sky-soft">
        © {new Date().getFullYear()} {SITE_NAME}. Independent civic project. Not an official City of
        Chicago website.
      </div>
    </footer>
  );
}
