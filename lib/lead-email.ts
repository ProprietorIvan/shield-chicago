function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

type LeadFields = {
  name: string;
  email: string;
  phone: string;
  address: string;
  projectDetails?: string;
  facilityType?: string;
  projectSize?: string;
  customerType?: string;
  landingPage?: string;
};

type ServiceCopy = {
  headerMessage: string;
  sectionTitle: string;
  sourceName: string;
  additionalContent: string;
};

const TRADE_COPY: Record<string, ServiceCopy> = {
  "pump-out": {
    headerMessage: "Someone needs emergency water extraction",
    sectionTitle: "Emergency Extraction Request",
    sourceName: "Standing-water pump-out page",
    additionalContent: `
      <h3>Extraction details</h3>
      <p>This customer asked for standing-water pump-out. They may need:</p>
      <ul>
        <li>Commercial extraction</li>
        <li>Containment</li>
        <li>Hand-off to structural drying</li>
      </ul>
    `,
  },
  "dry-out": {
    headerMessage: "Someone needs structural drying",
    sectionTitle: "Structural Drying Request",
    sourceName: "Structural dry-out page",
    additionalContent: `
      <h3>Structural drying details</h3>
      <p>This may be an emergency requiring immediate response. They may need:</p>
      <ul>
        <li>Water extraction</li>
        <li>Dehumidification</li>
        <li>Moisture monitoring</li>
      </ul>
    `,
  },
  floors: {
    headerMessage: "Someone needs floor restoration",
    sectionTitle: "Floor & Carpet Request",
    sourceName: "Floors landing page",
    additionalContent: `
      <h3>Flooring details</h3>
      <p>This customer asked for floor, carpet, or subfloor work after a water loss.</p>
    `,
  },
  walls: {
    headerMessage: "Someone needs drywall and paint",
    sectionTitle: "Walls & Paint Request",
    sourceName: "Walls landing page",
    additionalContent: `
      <h3>Drywall details</h3>
      <p>This customer asked for plaster, drywall, or paint after a water loss.</p>
    `,
  },
  "wet-rooms": {
    headerMessage: "Someone needs kitchen or bath restoration",
    sectionTitle: "Kitchen/Bath Request",
    sourceName: "Kitchens and baths page",
    additionalContent: `
      <h3>Wet-room details</h3>
      <p>This customer asked for kitchen or bathroom restoration after a water loss.</p>
    `,
  },
  "keep-dry": {
    headerMessage: "Someone needs waterproofing",
    sectionTitle: "Waterproofing Request",
    sourceName: "Keep-it-dry page",
    additionalContent: `
      <h3>Waterproofing details</h3>
      <p>This customer asked about keeping water out after a Chicago loss.</p>
    `,
  },
  mold: {
    headerMessage: "Someone needs mold remediation",
    sectionTitle: "Mold Remediation Request",
    sourceName: "Mold landing page",
    additionalContent: `
      <h3>Mold details</h3>
      <p>This may be urgent. Confirm the water is gone before close-up.</p>
    `,
  },
  emergency: {
    headerMessage: "Someone needs urgent flood repair",
    sectionTitle: "Emergency Water Damage Request",
    sourceName: "Emergency flood repair page",
    additionalContent: `
      <h3>Emergency details</h3>
      <p>Treat this as an immediate dispatch. They may need extraction, drying, and restoration.</p>
    `,
  },
  dispatch: {
    headerMessage: "Contact form submission",
    sectionTitle: "Contact Request",
    sourceName: "Contact / dispatch page",
    additionalContent: "",
  },
};

export function emailSubject(landingPage?: string) {
  switch (landingPage) {
    case "pump-out":
      return "Somebody is looking for emergency water extraction";
    case "dry-out":
      return "Somebody is looking for structural drying services";
    case "floors":
      return "Somebody is looking for a flooring quote";
    case "walls":
      return "Somebody is looking for a drywall quote";
    case "wet-rooms":
      return "Somebody is looking for a kitchen or bath restoration quote";
    case "keep-dry":
      return "Somebody is looking for waterproofing services";
    case "mold":
      return "Somebody is looking for mold remediation services";
    case "emergency":
      return "Somebody is looking for flood repair services";
    case "dispatch":
    case "contact":
      return "Contact form submission";
    default:
      if (landingPage?.startsWith("coverage-")) {
        return `Lead: Chicago coverage — ${landingPage.slice("coverage-".length)}`;
      }
      if (landingPage?.startsWith("advice-")) {
        return `Lead: Chicago guide — ${landingPage.slice("advice-".length)}`;
      }
      return landingPage ? `New Quote Request (${landingPage})` : "New Quote Request";
  }
}

function serviceCopy(landingPage?: string): ServiceCopy {
  if (landingPage && TRADE_COPY[landingPage]) {
    return TRADE_COPY[landingPage];
  }
  if (landingPage?.startsWith("coverage-")) {
    const place = landingPage.slice("coverage-".length).replace(/-/g, " ");
    return {
      headerMessage: `Someone needs help in ${place}`,
      sectionTitle: "Coverage Landing Request",
      sourceName: `Coverage page — ${place}`,
      additionalContent: "",
    };
  }
  return {
    headerMessage: "Someone wants to be our customer",
    sectionTitle: "Contact Information",
    sourceName: landingPage ? `Website — ${landingPage}` : "Website",
    additionalContent: "",
  };
}

export function generateLeadEmail(fields: LeadFields) {
  const name = escapeHtml(fields.name);
  const email = escapeHtml(fields.email);
  const phone = escapeHtml(fields.phone);
  const address = escapeHtml(fields.address);
  const projectDetails = escapeHtml(fields.projectDetails || "Not provided");
  const customerType = fields.customerType ? escapeHtml(fields.customerType) : "";
  const facilityType = fields.facilityType ? escapeHtml(fields.facilityType) : "";
  const projectSize = fields.projectSize ? escapeHtml(fields.projectSize) : "";
  const copy = serviceCopy(fields.landingPage);
  const year = new Date().getFullYear();

  return `
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Shield Chicago — New Lead</title>
        <style>
          body, table, td, div, p, a {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
            line-height: 1.5;
            text-align: center;
          }
          .email-wrapper { width: 100%; max-width: 680px; margin: 0 auto; background: #ffffff; }
          .header { padding: 48px 24px; border-bottom: 2px solid #fafafa; }
          .content { padding: 48px 32px; }
          .section {
            margin-bottom: 32px;
            padding: 40px;
            border-radius: 24px;
            box-shadow: 0 2px 40px rgba(0, 0, 0, 0.04);
          }
          .footer { padding: 32px; color: #000000; }
          h2 { font-size: 24px; font-weight: 600; margin-bottom: 32px; }
          .info-label {
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.03em;
            text-transform: uppercase;
            margin-bottom: 8px;
            opacity: 0.5;
          }
          .info-value {
            font-size: 17px;
            margin: 0 auto 32px;
            padding: 20px;
            border-radius: 16px;
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.03);
            max-width: 400px;
            border: 1px solid rgba(0, 0, 0, 0.03);
            word-break: break-word;
          }
          .quote-content {
            text-align: left;
            max-width: 500px;
            margin: 0 auto;
            padding: 32px;
            border-radius: 16px;
            border: 1px solid rgba(0, 0, 0, 0.03);
          }
          .quote-content h3 { margin: 0 0 16px; padding-bottom: 12px; border-bottom: 2px solid #8d0d0c; }
          .quote-content ul { padding-left: 18px; }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="header">
            <div style="font-size: 32px; font-weight: 500;">New Opportunity</div>
            <div style="font-size: 18px; margin-top: 12px; opacity: 0.8;">${copy.headerMessage}</div>
            <div style="font-size: 14px; margin-top: 8px; opacity: 0.6;">From: Chicago Office</div>
          </div>
          <div class="content">
            <div class="section">
              <h2>${copy.sectionTitle}</h2>
              <div class="info-label">Name</div>
              <div class="info-value">${name}</div>
              <div class="info-label">Email</div>
              <div class="info-value">${email}</div>
              <div class="info-label">Phone</div>
              <div class="info-value">${phone}</div>
              <div class="info-label">Address</div>
              <div class="info-value">${address}</div>
              ${
                customerType
                  ? `<div class="info-label">Customer Type</div><div class="info-value">${customerType}</div>`
                  : ""
              }
              <div class="info-label">Project Details</div>
              <div class="info-value">${projectDetails}</div>
              ${
                facilityType
                  ? `<div class="info-label">Facility Type</div><div class="info-value">${facilityType}</div>`
                  : ""
              }
              ${
                projectSize
                  ? `<div class="info-label">Project Size</div><div class="info-value">${projectSize}</div>`
                  : ""
              }
              <div class="info-label">Source</div>
              <div class="info-value">${escapeHtml(copy.sourceName)}</div>
            </div>
            ${
              copy.additionalContent
                ? `<div class="section"><h2>Service Information</h2><div class="quote-content">${copy.additionalContent}</div></div>`
                : ""
            }
          </div>
          <div class="footer">
            <div style="font-weight: 500;">© ${year} Shield Chicago Water Damage Restoration. All rights reserved.</div>
            <div style="margin-top: 8px; font-size: 12px; opacity: 0.6;">This email contains confidential information.</div>
          </div>
        </div>
      </body>
    </html>
  `;
}
