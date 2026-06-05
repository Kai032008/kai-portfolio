"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({
  project,
  delay = 0,
}: {
  project: Project;
  delay?: number;
}) {
  const [mounted, setMounted] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    // Intentional mounted guard for hydration-safe fade-up + hover.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <motion.article
      initial={!mounted ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      whileHover={mounted ? { y: -4 } : undefined}
      className="group overflow-hidden rounded-xl border border-border bg-card shadow-[0_1px_2px_rgba(26,26,26,0.04)] transition-shadow duration-300 hover:shadow-[0_18px_40px_-20px_rgba(26,26,26,0.3)]"
    >
      {/* Screenshot — branded gradient as fallback if it fails to load */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[16/10] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, ${project.gradient.from}, ${project.gradient.to})`,
        }}
      >
        {imgError ? (
          // Fallback: project name on the brand gradient
          <div className="flex h-full w-full items-center justify-center p-6">
            <span
              className="text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl"
              style={{ textShadow: "0 2px 18px rgba(0,0,0,0.45)" }}
            >
              {project.name}
            </span>
          </div>
        ) : (
          <Image
            src={project.image}
            alt={`Screenshot of the ${project.name} website`}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            onError={() => setImgError(true)}
            className="object-cover object-top"
          />
        )}

        {project.concept && (
          <span className="absolute left-3 top-3 rounded-full bg-ink/85 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
            Concept
          </span>
        )}

        {/* Live Site indicator */}
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-black/30 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm transition-colors group-hover:bg-black/45">
          ↗ Live Site
        </span>
      </a>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
          <span className="shrink-0 rounded-full border border-border bg-bg-2 px-2.5 py-1 text-xs font-medium text-ink-dim">
            {project.category}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-ink-dim">
          {project.outcome}
        </p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center text-sm font-medium text-accent transition-opacity hover:opacity-70"
        >
          View Live Site →
        </a>
      </div>
    </motion.article>
  );
}
