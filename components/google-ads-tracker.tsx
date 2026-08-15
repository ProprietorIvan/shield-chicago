"use client";

import { trackContactConversion, trackEmailClick, trackPhoneClick } from "@/lib/track-conversion";
import { useEffect } from "react";

/** Fires Contact conversion on tel: clicks, and Vercel events on tel:/mailto:. */
export function GoogleAdsTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const telLink = target.closest("a[href^='tel:']");
      if (telLink instanceof HTMLAnchorElement) {
        event.preventDefault();
        const href = telLink.href;
        trackPhoneClick();
        trackContactConversion(() => {
          window.location.href = href;
        });
        return;
      }

      const mailLink = target.closest("a[href^='mailto:']");
      if (mailLink instanceof HTMLAnchorElement) {
        trackEmailClick();
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
