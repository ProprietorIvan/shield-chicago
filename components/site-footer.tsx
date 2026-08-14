import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { FIRM } from "@/lib/firm";
import { PLACES } from "@/lib/territory";
import { TRADES } from "@/lib/trades";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <Link href="/">
            <Image
              className="site-footer-logo"
              src="/shield-water-damage-restoration-and-repairs-logo.png"
              alt="Shield Water Damage Restoration and Repairs"
              width={180}
              height={56}
            />
          </Link>
          <p className="site-footer-blurb">
            24/7 flood and water damage restoration across Chicago — Center Dispatch on Carroll
            Avenue, plus Loop, North Side, Northwest, and South Side crews.
          </p>
          <a
            href="https://www.felicita.group"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer-felicita"
          >
            Felicita Group LLC <ExternalLink size={13} aria-hidden="true" />
          </a>
        </div>

        <div>
          <h3>Locations</h3>
          <ul className="site-footer-location-list">
            {PLACES.map((place) => (
              <li key={place.slug}>
                <Link href={`/coverage/${place.slug}`}>{place.name}</Link>
              </li>
            ))}
            <li className="site-footer-location-all">
              <Link href="/coverage">All locations</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Services</h3>
          <ul className="site-footer-list">
            <li>
              <Link href="/emergency">Emergency flood repair</Link>
            </li>
            {TRADES.map((trade) => (
              <li key={trade.slug}>
                <Link href={`/work/${trade.slug}`}>{trade.name}</Link>
              </li>
            ))}
            <li>
              <Link href="/advice">Guides</Link>
            </li>
            <li>
              <Link href="/questions">FAQ</Link>
            </li>
            <li>
              <Link href="/firm">About</Link>
            </li>
            <li>
              <Link href="/dispatch">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <div className="site-footer-contact">
            <p>
              <strong>24/7 emergency</strong> · 60-minute response
            </p>
            <a href={FIRM.phoneTel} className="site-footer-contact-row">
              <Phone size={15} aria-hidden="true" />
              {FIRM.phoneDisplay}
            </a>
            <a href={`mailto:${FIRM.email}`} className="site-footer-contact-row">
              <Mail size={15} aria-hidden="true" />
              {FIRM.email}
            </a>
            <a
              href={FIRM.addressMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer-contact-row"
            >
              <MapPin size={15} aria-hidden="true" />
              {FIRM.address}
            </a>
          </div>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p>
          © {new Date().getFullYear()} Shield Water Damage Restoration and Repairs · Felicita
          Group, LLC · flood-911.com
        </p>
        <div className="site-footer-legal">
          <Link href="/privacy">Privacy</Link>
          <Link href="/price-list">Price list</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
