import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminLeadsPage(
  props: { searchParams: Promise<{ token?: string }> }
) {

  const { token } = await props.searchParams;

  // simple token guard for MVP
  if (token !== process.env.ADMIN_TOKEN) {
    return (
      <div className="py-10">
        <h1 className="text-xl font-semibold mb-2">Unauthorized</h1>
        <p className="text-gray-600 text-sm">
          Append <code>?token=YOUR_ADMIN_TOKEN</code> to the URL.
        </p>
      </div>
    );
  }

  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="py-8">
      <h1 className="text-2xl font-semibold mb-4">Leads</h1>

      <div className="mb-3 flex items-center gap-3 text-sm">
        <span className="text-gray-600">Total: {leads.length} · Newest first</span>
        <a
          href={`/api/admin/leads?token=${encodeURIComponent(token ?? "")}&format=csv`}
          className="px-3 py-2 border rounded hover:bg-gray-50"
        >
          Download CSV
        </a>
      </div>

      <div className="border rounded overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="p-2">When</th>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Tour</th>
              <th className="p-2">Pax</th>
              <th className="p-2">Phone</th>
              <th className="p-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((l) => (
              <tr key={l.id} className="border-t align-top">
                <td className="p-2 whitespace-nowrap">
                  {new Date(l.createdAt).toLocaleString()}
                </td>
                <td className="p-2">{l.name}</td>
                <td className="p-2">{l.email}</td>
                <td className="p-2">{l.tourSlug ?? "—"}</td>
                <td className="p-2">
                  {l.paxAdults}+{l.paxChildren}
                </td>
                <td className="p-2">{l.phone ?? "—"}</td>
                <td className="p-2 max-w-[420px]">
                  <div className="truncate">{l.message ?? "—"}</div>
                </td>
              </tr>
            ))}
            {leads.length === 0 && (
              <tr>
                <td className="p-4 text-gray-500" colSpan={7}>
                  No leads yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
