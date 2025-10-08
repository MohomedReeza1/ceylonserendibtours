import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl bg-emerald-600 text-white p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold">Ready to plan your trip?</h3>
            <p className="text-white/90 mt-1">Get a personalized quote within 24 hours.</p>
          </div>
          <Link href="/contact" className="btn-primary bg-white text-brand-700 hover:bg-white/90">
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
