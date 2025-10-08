"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Car, Headset, Leaf } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Licensed & Insured", text: "SLTDA-registered operator with vetted partners." },
  { icon: Car,         title: "Private Drivers",    text: "Comfortable, air-conditioned vehicles & pro chauffeurs." },
  { icon: Headset,     title: "24/7 Support",       text: "WhatsApp assistance and on-trip care anytime." },
  { icon: Leaf,        title: "Responsible Travel", text: "Wildlife ethics & cultural respect in every itinerary." },
];

export default function WhyUsSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Why travel with us</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border p-4 md:p-5 bg-white/5 hover:bg-white/10"
            >
              <it.icon className="w-6 h-6 text-emerald-600" />
              <div className="mt-3 font-medium">{it.title}</div>
              <div className="text-sm text-gray-500 mt-1">{it.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
