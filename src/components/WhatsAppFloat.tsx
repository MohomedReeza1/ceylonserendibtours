"use client";
import TrackLink from "@/components/TrackLink";

export default function WhatsAppFloat() {
  const href =
    "https://wa.me/94768045415?text=" +
    encodeURIComponent("Hi! I'd like help planning a Sri Lanka trip.");

  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <TrackLink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        event="click_whatsapp"
        params={{ location: "floating_button" }}
        className="rounded-full px-4 py-3 shadow-lg bg-emerald-600 text-white font-medium"
      >
        WhatsApp
      </TrackLink>
    </div>
  );
}
