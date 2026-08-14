"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { FIRM } from "@/lib/firm";

export function SiteNav() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);

  const navLinks = isHomepage
    ? [
        { text: "Services", url: "/work" },
        { text: "Guides", url: "/advice" },
        { text: "FAQ", url: "/questions" },
        { text: "Contact", url: "/dispatch" },
      ]
    : [
        { text: "Home", url: "/" },
        { text: "Services", url: "/work" },
        { text: "Guides", url: "/advice" },
        { text: "FAQ", url: "/questions" },
        { text: "Contact", url: "/dispatch" },
      ];

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setIsMenuOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`site-header${isHomepage ? "" : " site-header-solid"}${
        isMenuOpen ? " is-menu-open" : ""
      }`}
    >
      <div className="site-header-desktop">
        <div className="site-header-cluster">
          <nav aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className={pathname === link.url ? "active" : undefined}
              >
                {link.text}
              </Link>
            ))}
          </nav>
          <div className="site-header-contacts">
            <a className="header-contact" href={FIRM.phoneTel}>
              <Phone className="header-contact-icon" aria-hidden="true" />
              {FIRM.phoneDisplay}
            </a>
            <a className="header-contact" href={`mailto:${FIRM.email}`}>
              <Mail className="header-contact-icon" aria-hidden="true" />
              {FIRM.email}
            </a>
          </div>
        </div>
      </div>

      <div className="site-header-mobile">
        <div className="site-header-mobile-bar">
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className={`nav-burger ${isMenuOpen ? "is-open" : ""} ${
              isHomepage ? "nav-burger-home" : "nav-burger-solid"
            }`}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <span className="nav-burger-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
        <button
          type="button"
          className={`nav-mobile-backdrop ${isMenuOpen ? "is-open" : ""}`}
          aria-label="Close menu"
          tabIndex={isMenuOpen ? 0 : -1}
          onClick={() => setIsMenuOpen(false)}
        />
        <div className={`nav-mobile-panel ${isMenuOpen ? "is-open" : ""}`} aria-hidden={!isMenuOpen}>
          <div className="nav-mobile-panel-inner">
            <div className="nav-mobile-contacts">
              <a href={FIRM.phoneTel} className="nav-mobile-item nav-mobile-contact">
                <span className="nav-mobile-contact-icon">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                </span>
                {FIRM.phoneDisplay}
              </a>
              <a href={`mailto:${FIRM.email}`} className="nav-mobile-item nav-mobile-contact">
                <span className="nav-mobile-contact-icon">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </span>
                {FIRM.email}
              </a>
            </div>
            <nav className="nav-mobile-links" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.url}
                  href={link.url}
                  className="nav-mobile-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
