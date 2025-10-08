import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <p className="mt-2 text-gray-600">
          The page you’re looking for doesn’t exist. Try our tours or go back home.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/" className="px-4 py-2 rounded bg-emerald-600 text-white">Go home</Link>
          <Link href="/tours" className="px-4 py-2 rounded border">Browse tours</Link>
        </div>
      </div>
    </section>
  );
}
