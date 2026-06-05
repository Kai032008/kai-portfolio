"use client";

import { useState } from "react";
import { CATEGORIES, PROJECTS } from "@/lib/projects";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

const FILTERS = ["All", ...CATEGORIES] as const;
type Filter = (typeof FILTERS)[number];

export default function Work() {
  const [active, setActive] = useState<Filter>("All");

  const visible =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="work" className="section bg-bg">
      <div className="container-kai">
        <SectionHeading
          eyebrow="Selected Work"
          title="Recent Projects."
          subtitle="A selection of websites I've designed and built across different industries."
        />

        {/* Filter buttons */}
        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((filter) => {
            const isActive = filter === active;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-accent bg-accent text-white"
                    : "border-border bg-card text-ink-dim hover:border-ink/30 hover:text-ink"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {visible.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              delay={(i % 2) * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
