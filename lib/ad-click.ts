export const AD_CLICK_COOKIE = "f911_click";

export type AdClick = {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  clickedAt?: string;
  landingPage?: string;
};

function readCookies(header: string | null): Record<string, string> {
  const cookies: Record<string, string> = {};
  for (const part of (header || "").split(";")) {
    const index = part.indexOf("=");
    if (index < 0) continue;
    const key = part.slice(0, index).trim();
    try {
      cookies[key] = decodeURIComponent(part.slice(index + 1).trim());
    } catch {
      cookies[key] = part.slice(index + 1).trim();
    }
  }
  return cookies;
}

function clean(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return /^[\w-]{10,200}$/.test(trimmed) ? trimmed : undefined;
}

/**
 * Server-side: the ad click that brought this visitor, from our own cookie or,
 * failing that, the conversion linker's `_gcl_aw` cookie (`GCL.<ts>.<gclid>`).
 */
export function readAdClick(request: Request): AdClick | null {
  const cookies = readCookies(request.headers.get("cookie"));

  const own = cookies[AD_CLICK_COOKIE];
  if (own) {
    try {
      const parsed = JSON.parse(own) as Record<string, unknown>;
      const click: AdClick = {
        gclid: clean(parsed.gclid),
        gbraid: clean(parsed.gbraid),
        wbraid: clean(parsed.wbraid),
        clickedAt:
          typeof parsed.ts === "number" ? new Date(parsed.ts).toISOString() : undefined,
        landingPage: typeof parsed.lp === "string" ? parsed.lp.slice(0, 120) : undefined,
      };
      if (click.gclid || click.gbraid || click.wbraid) return click;
    } catch {
      // Fall through to the conversion linker cookie.
    }
  }

  const linker = cookies._gcl_aw?.split(".");
  if (linker && linker.length >= 3) {
    const gclid = clean(linker.slice(2).join("."));
    const seconds = Number(linker[1]);
    if (gclid) {
      return {
        gclid,
        clickedAt: Number.isFinite(seconds) ? new Date(seconds * 1000).toISOString() : undefined,
      };
    }
  }

  return null;
}

/** One-line attribution note appended to internal lead emails. */
export function adClickFooter(adClick: AdClick | null): string {
  const label = adClick?.gclid
    ? `Google Ads click (gclid ${adClick.gclid.slice(0, 12)}…)`
    : adClick
      ? "Google Ads click (iOS/app)"
      : "No ad click recorded";
  const landed = adClick?.landingPage ? ` · landed on ${adClick.landingPage}` : "";
  return `<p style="font:12px Arial,sans-serif;color:#888;margin-top:16px">Attribution: ${label}${landed}</p>`;
}
