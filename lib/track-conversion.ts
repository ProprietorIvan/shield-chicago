import { track } from "@vercel/analytics";
import { GOOGLE_ADS_CONTACT_SEND_TO } from "@/lib/ads";
import { FIRM } from "@/lib/firm";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function getAttribution(): string {
  if (typeof window === "undefined") return "organic";
  const params = new URLSearchParams(window.location.search);
  const parts = [
    params.get("utm_source") || "",
    params.get("utm_campaign") || "",
    params.get("utm_medium") || "",
    params.get("gclid") ? "gclid" : "",
    params.get("fbclid") ? "fbclid" : "",
  ].filter(Boolean);
  return parts.join("|") || "organic";
}

function pagePath(location?: string) {
  return location || (typeof window !== "undefined" ? window.location.pathname : "/");
}

export function trackPhoneClick(location?: string) {
  track("phone_click", {
    location: `${pagePath(location)}|${FIRM.phoneE164}`,
    attribution: getAttribution(),
  });
}

export function trackEmailClick(location?: string) {
  track("email_click", {
    location: `${pagePath(location)}|${FIRM.email}`,
    attribution: getAttribution(),
  });
}

export function trackFormSubmit(landingPage: string) {
  track("form_submit", {
    location: `${pagePath()}|${landingPage}`,
    attribution: getAttribution(),
  });
}

/** Google Ads Contact conversion. Optional callback waits for the hit (phone / tel:). */
export function trackGoogleAdsConversion(sendTo: string | undefined, callback?: () => void) {
  const finish = () => {
    callback?.();
  };

  if (typeof window === "undefined" || !sendTo || typeof window.gtag !== "function") {
    finish();
    return;
  }

  let done = false;
  const once = () => {
    if (done) return;
    done = true;
    finish();
  };

  window.gtag("event", "conversion", {
    send_to: sendTo,
    event_callback: once,
  });

  if (callback) {
    window.setTimeout(once, 1500);
  }
}

export function trackContactConversion(callback?: () => void) {
  trackGoogleAdsConversion(GOOGLE_ADS_CONTACT_SEND_TO, callback);
}
