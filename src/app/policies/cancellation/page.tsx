import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description: "Clear cancellation terms for bookings with Ceylon Serendib Tours.",
};

export default function CancellationPage() {
  return (
    <section className="py-10 prose prose-neutral max-w-3xl">
      <h1>Cancellation Policy</h1>
      <p><em>Last updated: {new Date().toLocaleDateString()}</em></p>

      <h2>Client Cancellations</h2>
      <ul>
        <li>≥ 30 days before arrival: deposit non-refundable; any balance refunded.</li>
        <li>29–15 days: 50% of total tour cost.</li>
        <li>14–8 days: 75% of total tour cost.</li>
        <li>≤ 7 days / no-show: 100% of total tour cost.</li>
      </ul>
      <p>
        Some suppliers (hotels, trains, safaris) may have stricter rules; the stricter rule applies.
      </p>

      <h2>Operator Cancellations</h2>
      <p>
        In rare cases (force majeure, safety), we may modify or cancel services. We’ll offer an
        equivalent alternative or refund the affected portion if no suitable substitute exists.
      </p>

      <h2>Amendments</h2>
      <p>
        Date or itinerary changes are treated case-by-case and may incur supplier fees or price differences.
      </p>

      <h2>Insurance</h2>
      <p>
        We strongly recommend comprehensive travel insurance covering cancellations, medical, and baggage.
      </p>
    </section>
  );
}
