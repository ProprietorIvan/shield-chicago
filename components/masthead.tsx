"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Wordmark } from "@/components/wordmark";
import { FIRM } from "@/lib/firm";

const LINKS = [
  { href: "/work", label: "The work" },
  { href: "/coverage", label: "Coverage" },
  { href: "/advice", label: "Advice" },
  { href: "/questions", label: "Questions" },
  { href: "/firm", label: "The firm" },
  { href: "/dispatch", label: "Dispatch" },
];

export function Masthead() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const home = path === "/";

  return (
    <header
      className={`sticky top-0 z-40 border-b ${
        home ? "border-white/10 bg-void/90 text-bone" : "border-void/10 bg-bone/95 text-void"
      } backdrop-blur`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" onClick={() => setOpen(false)}>
          <Wordmark inverted={home} />
        </Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm ${
                path === link.href || path.startsWith(`${link.href}/`)
                  ? "text-copper"
                  : home
                    ? "text-bone/80 hover:text-bone"
                    : "text-void/70 hover:text-void"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={FIRM.phoneTel}
            className="rounded-full bg-copper px-4 py-2 text-sm font-semibold text-bone hover:bg-copper-dark"
          >
            {FIRM.phoneDisplay}
          </a>
        </nav>
        <button
          type="button"
          className="lg:hidden"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-6 ${home ? "bg-bone" : "bg-void"}`} />
            <span className={`block h-0.5 w-6 ${home ? "bg-bone" : "bg-void"}`} />
          </span>
        </button>
      </div>
      {open ? (
        <nav className="border-t border-white/10 px-4 py-4 lg:hidden">
          <ul className="space-y-2">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)} className="block py-1">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={FIRM.phoneTel}>{FIRM.phoneDisplay}</a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
