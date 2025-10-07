"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ContactPage() {
  const sp = useSearchParams();
  const tourSlug = sp.get("tour") || "";
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setOk(false);
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    const res = await fetch("/api/lead", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setOk(true);
      form.reset();
    } else {
      const j = await res.json().catch(() => ({}));
      setError(j?.error ? "Please check your inputs." : "Something went wrong.");
    }
    setLoading(false);
  }

  return (
    <div className="py-8 max-w-xl">
      <h1 className="text-2xl font-semibold mb-4">Request a custom quote</h1>

      {ok && (
        <div className="mb-4 rounded bg-emerald-50 text-emerald-700 p-3">
          Thanks! We’ll reply shortly.
        </div>
      )}
      {error && (
        <div className="mb-4 rounded bg-red-50 text-red-700 p-3">
          {error}
        </div>
      )}

      <form onSubmit={submit} className="space-y-3">
        <input className="border p-2 w-full" name="tourSlug" defaultValue={tourSlug} placeholder="Tour (optional)" />
        <input className="border p-2 w-full" name="name" placeholder="Full name" required />
        <input className="border p-2 w-full" type="email" name="email" placeholder="Email" required />

        <div className="grid grid-cols-2 gap-3">
          <input className="border p-2 w-full" name="phone" placeholder="Phone/WhatsApp" />
          <input className="border p-2 w-full" name="nationality" placeholder="Nationality" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <input className="border p-2 w-full" name="paxAdults" type="number" min={1} defaultValue={2} placeholder="Adults" />
          <input className="border p-2 w-full" name="paxChildren" type="number" min={0} defaultValue={0} placeholder="Children" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <input className="border p-2 w-full" name="startDate" type="date" />
          <input className="border p-2 w-full" name="nights" type="number" min={1} placeholder="Nights" />
        </div>

        <input className="border p-2 w-full" name="budgetBand" placeholder="Budget / Mid / Luxury" />
        <textarea className="border p-2 w-full" name="message" rows={4} placeholder="Tell us your interests (wildlife, beaches, culture)…" />

        <button disabled={loading} className="px-4 py-2 bg-emerald-600 text-white rounded">
          {loading ? "Sending…" : "Send"}
        </button>
      </form>
    </div>
  );
}
