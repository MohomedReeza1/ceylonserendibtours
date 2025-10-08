import Link from "next/link";
import Image from "next/image";

type TourCard = {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  durationDays: number;
  themes: string[];
  priceFromUsd: number | null;
  gallery: string[]; // expect first element as cover
};

export default function FeaturedTours({ tours }: { tours: TourCard[] }) {
  return (
    <section className="py-10 md:py-14 bg-neutral-50 dark:bg-neutral-900 rounded-3xl">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Featured tours</h2>
          <Link href="/tours" className="text-emerald-700 hover:underline">View all</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {tours.map((t) => (
            <Link
              key={t.id}
              href={`/tours/${t.slug}`}
              className="rounded-2xl overflow-hidden border hover:shadow-md transition bg-white dark:bg-neutral-950"
            >
              <div className="relative aspect-[16/10] bg-neutral-200">
                <Image
                  src={(t.gallery && t.gallery[0]) || "/images/hero.jpg"}
                  alt={t.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="font-medium">{t.title}</div>
                <div className="text-sm text-gray-500">{t.subtitle}</div>
                <div className="text-sm mt-2 text-gray-600">
                  {t.durationDays} days • {t.themes.join(", ")}
                </div>
                {t.priceFromUsd ? (
                  <div className="mt-2 text-emerald-700">From ${t.priceFromUsd} pp</div>
                ) : null}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
