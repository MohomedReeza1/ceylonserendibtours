import { prisma } from "@/lib/prisma";

export default async function Home() {
  const tours = await prisma.tour.findMany({
    take: 3,
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Latest Tours</h1>
      <ul className="space-y-3">
        {tours.map((t) => (
          <li key={t.id} className="p-4 border rounded">
            <div className="font-medium">{t.title}</div>
            <div className="text-sm text-gray-600">{t.subtitle}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
