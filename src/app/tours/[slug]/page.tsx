import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const tour = await prisma.tour.findUnique({ where: { slug } });
  if (!tour) return {};
  return { title: tour.title, description: tour.subtitle ?? undefined };
}

export default async function TourDetailPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;

  const tour = await prisma.tour.findUnique({
    where: { slug },
    include: { itinerary: { orderBy: { day: "asc" } } },
  });

  if (!tour) return notFound();

  return (
    <article className="py-8">
      <h1 className="text-3xl font-semibold">{tour.title}</h1>
      {tour.subtitle ? <p className="text-gray-600">{tour.subtitle}</p> : null}
      <div className="mt-2 text-sm text-gray-500">
        {tour.durationDays} days · {tour.themes.join(", ")}
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <section className="md:col-span-2">
          <h2 className="font-semibold mb-2">Highlights</h2>
          <ul className="list-disc ml-5 text-gray-700">
            {tour.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>

          <h2 className="font-semibold mt-6 mb-2">Day-by-day</h2>
          <ol className="space-y-3">
            {tour.itinerary.map((d) => (
              <li key={d.id} className="border rounded p-3">
                <div className="font-medium">
                  Day {d.day} — {d.title}
                </div>
                <div className="text-gray-700 text-sm mt-1">{d.content}</div>
              </li>
            ))}
          </ol>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div>
              <h3 className="font-semibold mb-2">Inclusions</h3>
              <ul className="list-disc ml-5 text-sm text-gray-700">
                {tour.inclusions.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Exclusions</h3>
              <ul className="list-disc ml-5 text-sm text-gray-700">
                {tour.exclusions.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <aside className="border rounded p-4 h-fit">
          {tour.priceFromUsd ? (
            <div className="text-2xl font-semibold">From ${tour.priceFromUsd} pp</div>
          ) : null}
          <div className="text-sm text-gray-500">Private · Customizable</div>
          <Link
            href={`/contact?tour=${tour.slug}`}
            className="mt-3 inline-block px-4 py-2 bg-emerald-600 text-white rounded"
          >
            Get a custom quote
          </Link>
          <a
            className="block mt-2 text-emerald-700 underline"
            href={`https://wa.me/94XXXXXXXXX?text=${encodeURIComponent(
              "Hi! I'm interested in: " + tour.title
            )}`}
            target="_blank"
          >
            Chat on WhatsApp
          </a>
        </aside>
      </div>
    </article>
  );
}
