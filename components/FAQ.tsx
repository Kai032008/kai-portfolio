"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const FAQS = [
  {
    q: "How much does a website cost?",
    a: "Every project is different, so I'll give you a clear quote after we chat about what you need. No hidden fees, ever.",
  },
  {
    q: "How long does it take?",
    a: "Most landing pages take 1–2 weeks, and full sites 2–4 weeks, depending on scope and how fast we get content sorted.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Absolutely — small local businesses are exactly who I love working with.",
  },
  {
    q: "Will my site work on mobile?",
    a: "Yes. Every site I build is mobile-first, so it looks and works great on phones, tablets, and desktops.",
  },
  {
    q: "What do I need to get started?",
    a: "Just an idea of what you want. I'll guide you through the rest, step by step.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Intentional mounted guard so the accordion height animation is hydration-safe.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <section className="section bg-bg">
      <div className="container-kai max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Questions, Answered." center />

        <div className="mt-10 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-bg-2"
                >
                  <span className="text-base font-medium text-ink">
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 text-xl text-accent transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: mounted && isOpen ? "auto" : 0,
                    opacity: mounted && isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-ink-dim">
                    {faq.a}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
