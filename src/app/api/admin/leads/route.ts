import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function toCsvValue(v: unknown) {
  if (v === null || v === undefined) return "";
  const s = typeof v === "string" ? v : v instanceof Date ? v.toISOString() : String(v);
  // escape quotes and wrap in quotes
  return `"${s.replace(/"/g, '""')}"`;
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token") || "";
  const format = (url.searchParams.get("format") || "json").toLowerCase();

  if (token !== process.env.ADMIN_TOKEN) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
  });

  if (format === "csv") {
    const header = [
      "createdAt","name","email","phone","nationality","tourSlug",
      "paxAdults","paxChildren","startDate","nights","budgetBand",
      "interests","message","source"
    ].join(",");

    const rows = leads.map(l => [
      toCsvValue(l.createdAt),
      toCsvValue(l.name),
      toCsvValue(l.email),
      toCsvValue(l.phone),
      toCsvValue(l.nationality),
      toCsvValue(l.tourSlug),
      toCsvValue(l.paxAdults),
      toCsvValue(l.paxChildren),
      toCsvValue(l.startDate),
      toCsvValue(l.nights),
      toCsvValue(l.budgetBand),
      toCsvValue((l.interests ?? []).join("; ")),
      toCsvValue(l.message),
      toCsvValue(l.source),
    ].join(","));

    const csv = [header, ...rows].join("\n");
    return new NextResponse(csv, {
      headers: {
        "content-type": "text/csv; charset=utf-8",
        "content-disposition": `attachment; filename="leads-${new Date().toISOString().slice(0,10)}.csv"`,
      },
    });
  }

  // default JSON
  return NextResponse.json(leads);
}
