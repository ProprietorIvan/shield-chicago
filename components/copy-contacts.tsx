"use client";

import { FIRM } from "@/lib/firm";
import { trackContactConversion } from "@/lib/track-conversion";
import { Check, Mail, Phone } from "lucide-react";
import { useState } from "react";

export function CopyContacts() {
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
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
      <button
        type="button"
        onClick={() => copy(FIRM.phoneDisplay, true)}
        className={`${
          copiedPhone ? "bg-[#27AE60] scale-95" : "bg-[var(--accent-dark)] hover:bg-black"
        } px-8 py-3 rounded-[var(--radius)] transition-all duration-300 min-w-[240px]`}
      >
        {copiedPhone ? (
          <div className="flex items-center justify-center gap-2 text-white">
            <span>Copied!</span>
            <Check className="w-5 h-5" />
          </div>
        ) : (
          <div className="text-white font-bold flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            {FIRM.phoneDisplay}
          </div>
        )}
      </button>
      <button
        type="button"
        onClick={() => copy(FIRM.email, false)}
        className={`${
          copiedEmail ? "bg-[#27AE60] scale-95" : "bg-white hover:bg-[var(--paper)]"
        } px-8 py-3 rounded-[var(--radius)] transition-all duration-300 min-w-[240px]`}
      >
        {copiedEmail ? (
          <div className="flex items-center justify-center gap-2 text-white">
            <span>Copied!</span>
            <Check className="w-5 h-5" />
          </div>
        ) : (
          <div className="text-ink font-bold flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" />
            Email Us
          </div>
        )}
      </button>
    </div>
  );
}
