"use client";

import { FIRM } from "@/lib/firm";
import { trackContactConversion } from "@/lib/track-conversion";
import { Phone } from "lucide-react";
import { useState } from "react";

export function PhoneBanner() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copy = async (text: string, isPhone: boolean) => {
    try {
      await navigator.clipboard.writeText(text);
      if (isPhone) {
        trackContactConversion();
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 1500);
      } else {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 1500);
      }
    } catch {
      /* clipboard may be blocked */
    }
  };

  return (
    <div className="home-phone-banner">
      <p className="eyebrow" style={{ color: "#fff" }}>
        Emergency line
      </p>
      <h2>Shield · 24/7 water damage response</h2>
      <Phone className="home-phone-banner-icon" aria-hidden="true" />
      <button
        type="button"
        onClick={() => copy(FIRM.phoneDisplay, true)}
        className="home-phone-banner-number"
      >
        {copiedPhone ? "Copied!" : FIRM.phoneDisplay}
      </button>
      <p className="home-phone-banner-sub">
        60-minute response · Chicago neighborhoods from {FIRM.address}
      </p>
      <button
        type="button"
        onClick={() => copy(FIRM.email, false)}
        className={`button ${copiedEmail ? "button-copied" : "button-light-on-accent"}`}
      >
        {copiedEmail ? "Copied!" : "Email Us"}
      </button>
    </div>
  );
}
