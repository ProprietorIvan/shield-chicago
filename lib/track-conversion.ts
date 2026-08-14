import { GOOGLE_ADS_CONTACT_SEND_TO } from "@/lib/ads";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
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
