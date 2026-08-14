"use client";

import { FIRM } from "@/lib/firm";
import { trackContactConversion } from "@/lib/track-conversion";
import { Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export function DispatchCopyCards() {
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

  const cards = [
    {
      icon: Phone,
      title: "Phone",
      description: copiedPhone ? "Copied!" : FIRM.phoneDisplay,
      onClick: () => copy(FIRM.phoneDisplay, true),
    },
    {
      icon: Mail,
      title: "Email",
      description: copiedEmail ? "Copied!" : FIRM.email,
      onClick: () => copy(FIRM.email, false),
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "Open 24/7 — 365 days a year",
    },
    {
      icon: MapPin,
      title: "Service Area",
      description: "Chicago neighborhoods — see locations below",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {cards.map((item) => {
        const Icon = item.icon;
        const copied = item.description === "Copied!";
        return (
          <button
            type="button"
            key={item.title}
            onClick={item.onClick}
            disabled={!item.onClick}
            className={`page-card p-6 text-left ${item.onClick ? "cursor-pointer" : "cursor-default"}`}
          >
            <div className="text-accent mb-4">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            {copied ? (
              <p className="text-[#27AE60] flex items-center gap-2">
                Copied! <Check className="w-4 h-4" />
              </p>
            ) : (
              <p className={item.onClick ? "text-accent" : "text-ink-soft"}>{item.description}</p>
            )}
          </button>
        );
      })}
    </div>
  );
}
