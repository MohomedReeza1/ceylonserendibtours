import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Ceylon Serendib Tours collects, uses, and protects personal data in line with Sri Lanka PDPA principles.",
};

export default function PrivacyPage() {
  return (
    <section className="py-10 prose prose-neutral max-w-3xl">
      <h1>Privacy Policy</h1>
      <p><em>Last updated: {new Date().toLocaleDateString()}</em></p>

      <h2>Who we are</h2>
      <p>
        <strong>Ceylon Serendib Tours</strong> is a Sri Lanka–based inbound tour operator.
        Contact: <a href="mailto:privacy@ceylonserendibtours.com">privacy@ceylonserendibtours.com</a>
      </p>

      <h2>Data we collect</h2>
      <ul>
        <li>Contact details (name, email, phone, country)</li>
        <li>Trip preferences (dates, pax, interests, budget band)</li>
        <li>Optional: passport details <em>only if required</em> to secure bookings</li>
        <li>Technical: IP, user agent, referrer/UTM (for analytics and fraud prevention)</li>
      </ul>

      <h2>How we use data</h2>
      <ul>
        <li>To prepare quotes, confirm bookings, and deliver support</li>
        <li>To communicate updates about your trip</li>
        <li>To improve our website and services (aggregate analytics)</li>
      </ul>

      <h2>Legal basis &amp; consent</h2>
      <p>
        We process data with your consent and to perform a requested service (pre-contract steps and contract).
        You may withdraw consent at any time by contacting us.
      </p>

      <h2>Sharing</h2>
      <p>
        We share only what’s necessary with trusted suppliers (hotels, guides, transport operators).
        We do not sell personal data. International transfers may occur for cloud hosting and email—protected by
        standard safeguards.
      </p>

      <h2>Retention</h2>
      <p>
        Leads are retained for <strong>[e.g., 12 months]</strong>. Booking records follow statutory requirements.
        We minimize retention of passport/ID—deleted once not required for the service or legal compliance.
      </p>

      <h2>Security</h2>
      <p>
        We use industry-standard controls: access limits, HTTPS, and encryption in transit. No method is 100% secure
        but we continually improve safeguards.
      </p>

      <h2>Your rights</h2>
      <p>
        Subject to applicable law, you may request access, correction, deletion, or restriction of your personal data.
        Email: <a href="mailto:privacy@ceylonserendibtours.com">privacy@ceylonserendibtours.com</a>
      </p>

      <h2>Cookies &amp; analytics</h2>
      <p>
        We use cookies/analytics (e.g., GA4) to understand site usage. You can disable non-essential cookies in your browser.
      </p>

      <h2>Contact &amp; complaints</h2>
      <p>
        For questions or complaints, contact <a href="mailto:privacy@ceylonserendibtours.com">privacy@ceylonserendibtours.com</a>.
      </p>
    </section>
  );
}
