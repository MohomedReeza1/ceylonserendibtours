"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="relative h-[68vh] md:h-[78vh] w-full overflow-hidden rounded-b-3xl">
        <Image
          src="/images/hero.jpg"
          alt="Sri Lanka hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/20" />
        <div className="absolute inset-0 flex items-end md:items-center">
          <div className="mx-auto max-w-6xl px-4 pb-10 md:pb-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white text-3xl md:text-5xl font-semibold leading-tight max-w-2xl"
            >
              Experience Sri Lanka, Your Way
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white/90 mt-3 md:mt-4 max-w-xl"
            >
              Private, customizable tours with licensed chauffeur-guides.
              Culture, wildlife, hills & beaches—designed around you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 flex gap-3"
            >
              <Link href="/tours" className="btn-primary">
                Explore Tours
              </Link>
              <Link href="/contact" className="btn-outline bg-white/90 hover:bg-white">
                Request a Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
