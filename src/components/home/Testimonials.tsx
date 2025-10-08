"use client";

import { motion } from "framer-motion";

const items = [
  { name: "Anna, Germany", text: "Perfect itinerary and wonderful driver-guide. We loved Kandy and the train to Ella!" },
  { name: "Ravi, India",   text: "Super smooth planning. Wildlife safari and Mirissa were highlights." },
  { name: "Maya, UK",      text: "Responsive team, great hotels. Felt looked after the whole trip." },
];

export default function Testimonials() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">What travelers say</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border p-5 bg-white/5"
            >
              <div className="text-gray-700 dark:text-gray-300">{it.text}</div>
              <div className="mt-3 text-sm text-gray-500">— {it.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
