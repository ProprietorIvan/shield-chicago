/** Server-side only. Forwards lead to Timber webhook. */
export async function forwardToTimber(payload: {
  name: string;
  email: string;
  phone: string;
  address?: string;
  message?: string;
  projectDetails?: string;
  serviceType?: string;
  formPage: string;
  leadSource: string;
}) {
  try {
    const body = {
      name: payload.name,
      firstName: (payload.name || "").split(" ")[0] || "",
      lastName: (payload.name || "").split(" ").slice(1).join(" ") || "",
      email: payload.email,
      phone: payload.phone,
      address: payload.address || "",
      message: payload.message || payload.projectDetails || "",
      projectDetails: payload.message || payload.projectDetails || "",
      serviceType: payload.serviceType || "Water Damage Restoration",
      formSource: "flood-911.com",
      formPage: payload.formPage,
      leadSource: payload.leadSource,
    };
    const res = await fetch(
      "https://gettimber.ai/api/webhooks/inbound/wh_k3x8gzpd9?companyId=CM0001",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      },
    );
    const data = await res.json().catch(() => ({}));
    if (data.success) console.log("Lead sent to Timber:", data.leadId);
    else console.warn("Timber:", data.error || res.status);
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    console.warn("Timber forward failed (non-blocking):", message);
  }
}

export function formPageFromLanding(landingPage?: string) {
  if (!landingPage || landingPage === "dispatch" || landingPage === "contact") {
    return "/dispatch";
  }
  if (landingPage.startsWith("coverage-")) {
    return `/coverage/${landingPage.slice("coverage-".length)}`;
  }
  if (landingPage.startsWith("advice-")) {
    return `/advice/${landingPage.slice("advice-".length)}`;
  }
  const trades = ["pump-out", "dry-out", "floors", "walls", "wet-rooms", "keep-dry", "mold"];
  if (trades.includes(landingPage)) {
    return `/work/${landingPage}`;
  }
  return `/${landingPage}`;
}
