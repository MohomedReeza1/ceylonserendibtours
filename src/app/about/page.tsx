import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "We’re a Sri Lanka–based inbound tour operator crafting private, customizable trips with licensed chauffeur-guides.",
};

export default function AboutPage() {
  return (
    <section className="py-10 prose prose-neutral max-w-3xl">
      <h1>About Ceylon Serendib Tours</h1>
      <p>
        We design private, customizable trips across Sri Lanka—curated routes, trusted drivers,
        and licensed guides. Whether you’re here for culture, wildlife, tea country, or the beach,
        we tailor each day to your pace and interests.
      </p>

      <h2>Why travel with us</h2>
      <ul>
        <li>Licensed chauffeur-guides and insured vehicles</li>
        <li>Personalized itineraries with flexible pacing</li>
        <li>24/7 on-trip support and clear pricing</li>
        <li>Responsible travel practices (wildlife & culture first)</li>
      </ul>

      <h2>Our credentials</h2>
      <p>
        SLTDA Registration: <strong>[Your SLTDA License No]</strong><br />
        Company: <strong>[Your Legal Name (Pvt) Ltd]</strong>
      </p>

      <h2>Contact</h2>
      <p>
        Email: <a href="mailto:hello@ceylonserendibtours.com">hello@ceylonserendibtours.com</a><br />
        Phone/WhatsApp: <strong>+94 [XX] [XXX XXXX]</strong><br />
        Address: <strong>[Street], [City], Sri Lanka</strong>
      </p>
    </section>
  );
}
