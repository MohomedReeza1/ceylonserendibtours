import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Booking terms for Ceylon Serendib Tours (inbound travel services in Sri Lanka).",
};

export default function TermsPage() {
  return (
    <section className="py-10 prose prose-neutral max-w-3xl">
      <h1>Terms &amp; Conditions</h1>
      <p><em>Last updated: {new Date().toLocaleDateString()}</em></p>

      <h2>1. Scope</h2>
      <p>
        These Terms apply to travel services provided by <strong>Ceylon Serendib Tours</strong>
        (“we”, “us”, “our”). By confirming a booking you agree to these Terms.
      </p>

      <h2>2. Quotes &amp; Inclusions</h2>
      <p>
        Written quotes specify inclusions/exclusions for each itinerary (e.g., accommodation tier,
        vehicle, guide services). Flights and travel insurance are excluded unless stated.
      </p>

      <h2>3. Payments</h2>
      <ul>
        <li>Deposit: <strong>[e.g., 25%]</strong> to confirm services.</li>
        <li>Balance: due <strong>[e.g., 21 days]</strong> before arrival.</li>
        <li>Accepted methods: bank transfer (USD/LKR) and approved card gateways.</li>
        <li>All bank fees are borne by the payer unless agreed otherwise.</li>
      </ul>

      <h2>4. Changes &amp; Cancellations (Client)</h2>
      <p>
        Change requests are subject to supplier availability and price differences. For cancellation
        fees, see <a href="/policies/cancellation">Cancellation Policy</a>.
      </p>

      <h2>5. Changes &amp; Cancellations (Operator)</h2>
      <p>
        If a service becomes unavailable, we may offer an equivalent or better alternative at no
        extra cost, or refund the affected portion if no suitable substitute exists.
      </p>

      <h2>6. Travel Documents &amp; Health</h2>
      <p>
        Clients are responsible for having a valid passport, visa/ETA, and any required health
        documents. We provide general guidance but requirements can change.
      </p>

      <h2>7. Safety &amp; Conduct</h2>
      <p>
        Travelers must follow local laws and safety instructions. Wildlife interactions follow
        SLTDA/park rules (no feeding, safe distances, speed limits at sea).
      </p>

      <h2>8. Liability</h2>
      <p>
        Our liability is limited to the value of services we directly provide. We are not liable for
        unforeseen events beyond our control (force majeure) or for third-party failures
        where we exercised reasonable care in selection.
      </p>

      <h2>9. Complaints</h2>
      <p>
        Please notify us immediately during your trip so we can resolve issues on the spot.
        Written feedback can be sent to <a href="mailto:ops@ceylonserendibtours.com">ops@ceylonserendibtours.com</a>.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These Terms are governed by the laws of Sri Lanka. Venue: courts of Sri Lanka.
      </p>
    </section>
  );
}
