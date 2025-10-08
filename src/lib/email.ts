import type { Lead } from "@prisma/client";

export async function sendLeadEmails(lead: Lead): Promise<void> {
  // Safe no-op if you haven't configured Resend yet.
  if (!process.env.RESEND_API_KEY) {
    console.log("[email] Skipping send; RESEND_API_KEY not set.", {
      toAdmin: "ops@ceylonserendibtours.com",
      toClient: lead.email,
    });
    return;
  }

  // Example implementation (uncomment when ready to actually send)
  // const { Resend } = await import("resend");
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // const FROM = "Ceylon Serendib Tours <hello@ceylonserendibtours.com>";
  // const adminHtml = `<h2>New Lead</h2><pre>${JSON.stringify(lead, null, 2)}</pre>`;
  // const clientHtml = `Thanks ${lead.name}! We received your inquiry for ${lead.tourSlug ?? "a custom tour"}. We’ll reply shortly.`;
  // await resend.emails.send({ from: FROM, to: ["ops@ceylonserendibtours.com"], subject: `New lead: ${lead.name}`, html: adminHtml });
  // await resend.emails.send({ from: FROM, to: [lead.email], subject: "We received your request", html: clientHtml });
}
