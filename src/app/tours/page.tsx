import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const metadata = { title: "Sri Lanka Tour Packages" };

export default async function ToursPage() {
  const tours = await prisma.tour.findMany({ orderBy: { durationDays: "asc" } });

  return (
    <div className="py-8">
      <h1 className="text-2xl font-semibold mb-4">Sri Lanka tour packages</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {tours.map((t) => (
          <Link
            key={t.id}
            href={`/tours/${t.slug}`}
            className="border rounded hover:shadow transition"
          >
            <div className="aspect-[16/9] bg-gray-100" />
            <div className="p-4">
              <div className="font-medium">{t.title}</div>
              <div className="text-sm text-gray-500">
                {t.durationDays} days · {t.themes.join(", ")}
              </div>
              {t.priceFromUsd ? (
                <div className="mt-1 text-emerald-700">From ${t.priceFromUsd} pp</div>
              ) : null}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
