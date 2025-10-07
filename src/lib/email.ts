export async function sendLeadEmails(lead: any) {
  // No email provider yet; safe to skip in MVP.
  // Later: integrate Resend/Nodemailer here.
  if (!process.env.RESEND_API_KEY) {
    console.log("[email] Skipping send; RESEND_API_KEY not set.", {
      toAdmin: "ops@ceylonserendibtours.com",
      toClient: lead.email,
    });
    return;
  }

  // Example (uncomment after `npm i resend` and setting the key):
  // const { Resend } = await import("resend");
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "Ceylon Serendib Tours <hello@ceylonserendibtours.com>",
  //   to: ["ops@ceylonserendibtours.com"],
  //   subject: `New lead: ${lead.name}`,
  //   html: `<h2>New Lead</h2><pre>${JSON.stringify(lead, null, 2)}</pre>`,
  // });
  // await resend.emails.send({
  //   from: "Ceylon Serendib Tours <hello@ceylonserendibtours.com>",
  //   to: [lead.email],
  //   subject: "We received your request",
  //   html: `Thanks ${lead.name}! We received your inquiry for ${lead.tourSlug ?? "a custom tour"}. We'll reply soon.`,
  // });
}
