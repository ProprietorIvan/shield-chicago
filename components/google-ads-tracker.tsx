"use client";

import { trackContactConversion } from "@/lib/track-conversion";
import { useEffect } from "react";

/** Fires the Google Ads Contact conversion on every tel: click, then dials. */
export function GoogleAdsTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[href^='tel:']");
      if (!(link instanceof HTMLAnchorElement)) return;

      event.preventDefault();
      const href = link.href;
      trackContactConversion(() => {
        window.location.href = href;
      });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
