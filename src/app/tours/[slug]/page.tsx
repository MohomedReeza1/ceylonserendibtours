import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import TrackLink from "@/components/TrackLink";

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


  const base = process.env.SITE_URL || "http://localhost:3000";
  const tourUrl = `${base}/tours/${tour.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.subtitle ?? undefined,
    url: tourUrl,
    image: (tour.gallery ?? []).map((p) => (p.startsWith("http") ? p : `${base}${p}`)),
    itinerary: {
      "@type": "ItemList",
      itemListElement: tour.itinerary.map((d, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `Day ${d.day} — ${d.title}`,
      })),
    },
    offers: tour.priceFromUsd
      ? { "@type": "Offer", priceCurrency: "USD", price: String(tour.priceFromUsd), url: tourUrl, availability: "https://schema.org/InStock" }
      : undefined,
    provider: {
      "@type": "TravelAgency",
      name: "Ceylon Serendib Tours",
      url: base,
      areaServed: "Sri Lanka",
    },
  };

  return (
    <>
      <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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

            <TrackLink
              href={`https://wa.me/94768045415?text=${encodeURIComponent("Hi! I'm interested in: " + tour.title)}`}
              className="block mt-2 text-emerald-700 underline"
              target="_blank"
              event="click_whatsapp"
              params={{ location: "tour_sidebar", tourSlug: tour.slug }}
            >
              Chat on WhatsApp
            </TrackLink>
          </aside>
        </div>
      </article>
    </>
  );
}
