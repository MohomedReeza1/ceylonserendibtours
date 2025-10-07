import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { leadSchema } from "@/lib/validation";
import { sendLeadEmails } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = leadSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: parsed.error.flatten() },
        { status: 400 }
      );
    }
    const d = parsed.data;

    const lead = await prisma.lead.create({
      data: {
        ...d,
        // convert date string to Date or null
        startDate: d.startDate ? new Date(d.startDate) : null,
      },
    });

    // emails are optional (no-op if not configured)
    await sendLeadEmails(lead);

    return NextResponse.json({ ok: true, id: lead.id });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
