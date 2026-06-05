"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Intentional mounted guard so SSR renders the hero visible (no hydration error).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Gentle fade-up on load. Mounted guard keeps content visible during SSR /
  // hydration so the hero never renders blank.
  const item = (delay: number) => ({
    initial: !mounted ? {} : { opacity: 0, y: 20 },
    animate: mounted ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  });

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      <div className="container-kai grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
        {/* Text — ~60% on desktop */}
        <div className="lg:col-span-3">
          <motion.h1
            {...item(0.05)}
            className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            I build websites that turn visitors into customers.
          </motion.h1>

          <motion.p
            {...item(0.15)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-dim"
          >
            Freelance web designer helping local businesses, creators, and
            personal brands launch clean, fast, conversion-focused websites —
            without the agency price tag.
          </motion.p>

          <motion.div
            {...item(0.25)}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-medium text-white transition-opacity hover:opacity-90"
            >
              Start a Project →
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-base font-medium text-ink transition-colors hover:bg-bg-2"
            >
              View My Work
            </a>
          </motion.div>
        </div>

        {/* Photo — ~40% on desktop */}
        <motion.div {...item(0.2)} className="lg:col-span-2">
          <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border border-border shadow-[0_20px_50px_-20px_rgba(26,26,26,0.25)]">
            <Image
              src="/kai.jpg"
              alt="Kai, freelance web designer"
              width={640}
              height={800}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
