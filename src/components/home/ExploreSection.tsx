
import Image from "next/image";
import Link from "next/link";

const items = [
  { title: "Culture & Heritage", href: "/tours?theme=Culture", img: "/images/explore-culture.jpg" },
  { title: "Hills & Tea Country", href: "/tours?theme=Hills",   img: "/images/explore-hills.jpg" },
  { title: "Wildlife Safaris",   href: "/tours?theme=Wildlife", img: "/images/explore-wildlife.jpg" },
  { title: "Beaches & Coast",    href: "/tours?theme=Beach",    img: "/images/explore-beach.jpg" },
];

export default function ExploreSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Explore Sri Lanka</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 md:gap-6 mt-6">
          {items.map((it) => (
            <Link key={it.title} href={it.href} className="group relative rounded-2xl overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image src={it.img} alt={it.title} fill className="object-cover transition group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-3 left-3 text-white font-medium drop-shadow">{it.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
