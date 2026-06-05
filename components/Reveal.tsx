"use client";

import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Optional stagger delay in seconds. */
  delay?: number;
  /** Render as a different element where semantics matter. */
  as?: "div" | "section" | "li" | "article";
};

/**
 * Subtle fade-up on scroll. The mounted guard is essential: on the server and
 * during hydration `mounted` is false, so `initial={{}}` leaves content fully
 * visible and matches the server markup (no hydration mismatch, no invisible
 * sections). Once mounted on the client we opt into the fade-up animation.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Intentional mounted guard for hydration-safe fade-up (see above).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={!mounted ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </MotionTag>
  );
}
