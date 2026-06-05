export type ProjectCategory =
  | "Cafe & Bakehouse"
  | "Creator & Brand"
  | "Property & Professional";

export type Project = {
  name: string;
  category: ProjectCategory;
  url: string;
  outcome: string;
  /** Local screenshot in /public, shown as the card's visual. */
  image: string;
  /** Brand-colored gradient — fallback if the screenshot fails to load. */
  gradient: { from: string; to: string };
  /** Concept/sample builds — honestly tagged so nothing looks like paid client work. */
  concept?: boolean;
};

/**
 * Category order drives the filter buttons. Adding a new category (e.g. "Gym")
 * is a two-step change: add it to ProjectCategory above and to CATEGORIES below,
 * then add projects that use it. The Work section reads from these arrays, so no
 * UI changes are needed.
 */
export const CATEGORIES: ProjectCategory[] = [
  "Cafe & Bakehouse",
  "Creator & Brand",
  "Property & Professional",
];

export const PROJECTS: Project[] = [
  {
    name: "Sonder Bakehouse",
    category: "Cafe & Bakehouse",
    url: "https://sonderbakehouse.netlify.app/",
    outcome:
      "A warm, mobile-first site for a micro bakery — as crafted as its sourdough.",
    image: "/project-sonder.jpg",
    gradient: { from: "#7d3f3a", to: "#c4956a" },
  },
  {
    name: "SugarDrop Bakehouse",
    category: "Cafe & Bakehouse",
    url: "https://sugardropbakehouse.com/",
    outcome:
      "A premium, easy-to-browse site that lets a home bakery look as good as its cakes.",
    image: "/project-sugardrop.jpg",
    gradient: { from: "#f5e6d3", to: "#d4a0a0" },
  },
  {
    name: "Zermatt Neo",
    category: "Creator & Brand",
    url: "https://zermatt-neo.vercel.app/",
    outcome:
      "A cinematic creator hub built to grow a personal brand and attract collaborations.",
    image: "/project-zermatt.jpg",
    gradient: { from: "#0a0a0a", to: "#1a1a2e" },
    concept: true,
  },
  {
    name: "Matt Stonie",
    category: "Creator & Brand",
    url: "https://matt-stonie.netlify.app/",
    outcome:
      "A creator brand + commerce hub designed to drive fans toward the brand's business.",
    image: "/project-mattstonie.jpg",
    gradient: { from: "#0a0a0a", to: "#8b0000" },
    concept: true,
  },
  {
    name: "OSAS Property",
    category: "Property & Professional",
    url: "https://osas-property.vercel.app/",
    outcome:
      "A lead-generation site that turns visitors into buyer and seller enquiries.",
    image: "/project-osas.jpg",
    gradient: { from: "#0a0a0a", to: "#c9a96e" },
  },
  {
    name: "Agenteric",
    category: "Property & Professional",
    url: "https://agenteric.netlify.app/",
    outcome:
      "A clean, credible site for an insurance professional — built to win trust fast.",
    image: "/project-agenteric.jpg",
    gradient: { from: "#1e3a5f", to: "#2d5f8a" },
  },
];
