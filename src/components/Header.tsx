import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold">Ceylon Serendib Tours</Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/tours">Tours</Link>
          <Link href="/about">About</Link>
          <Link href="/contact" className="rounded bg-emerald-600 text-white px-3 py-2">
            Request a quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
