export type ProjectCategory =
  | "E-commerce Shop"
  | "Creator & Agent"
  | "Branding";

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
  "E-commerce Shop",
  "Creator & Agent",
  "Branding",
];

export const PROJECTS: Project[] = [
  {
    name: "December Floral",
    category: "E-commerce Shop",
    url: "https://decemberfloral.vercel.app/",
    outcome:
      "A boutique florist storefront with a clean, modern shopping experience built for effortless online orders.",
    image: "/december.jpg",
    gradient: { from: "#3b4a3f", to: "#dce7dd" },
  },
  {
    name: "Han Flowers",
    category: "E-commerce Shop",
    url: "https://hanflowers.vercel.app/",
    outcome:
      "A luxury preserved-flower brand site with an editorial, French-boutique aesthetic and a headless e-commerce foundation.",
    image: "/hanflowers.jpg",
    gradient: { from: "#6b7f5e", to: "#e8efe0" },
  },
  {
    name: "By Shér Cakes",
    category: "E-commerce Shop",
    url: "https://byshercakes.vercel.app/",
    outcome:
      "A custom-built bespoke cake studio site with a warm, editorial design system and seamless online ordering.",
    image: "/bysher.jpg",
    gradient: { from: "#8a5a6d", to: "#f0d9e0" },
  },
  {
    name: "Ami Floral Supplies",
    category: "E-commerce Shop",
    url: "https://ami-floral.vercel.app/",
    outcome:
      "A luxury florist e-commerce site for Selangor & KL, Malaysia — built with Next.js.",
    image: "/ami-floral.jpg",
    gradient: { from: "#5a3b4d", to: "#c98b9e" },
  },
  {
    name: "Sonder Bakehouse",
    category: "E-commerce Shop",
    url: "https://sonderbakehouse.netlify.app/",
    outcome:
      "A warm, mobile-first site for a micro bakery — as crafted as its sourdough.",
    image: "/project-sonder.jpg",
    gradient: { from: "#7d3f3a", to: "#c4956a" },
  },
  {
    name: "SugarDrop Bakehouse",
    category: "E-commerce Shop",
    url: "https://sugardropbakehouse.com/",
    outcome:
      "A premium, easy-to-browse site that lets a home bakery look as good as its cakes.",
    image: "/project-sugardrop.jpg",
    gradient: { from: "#f5e6d3", to: "#d4a0a0" },
  },
  {
    name: "Maidream",
    category: "E-commerce Shop",
    url: "https://maidream.vercel.app/",
    outcome:
      "A Japanese-inspired cake studio website built with Next.js.",
    image: "/project-maidream.jpg",
    gradient: { from: "#d98da5", to: "#f7e3ea" },
  },
  {
    name: "Euryales Patisserie",
    category: "E-commerce Shop",
    url: "https://euryales.vercel.app/",
    outcome:
      "An elegant patisserie e-commerce site built with Next.js.",
    image: "/euryales.jpg",
    gradient: { from: "#b76e79", to: "#f0d9c0" },
  },
  {
    name: "Weiss Flora",
    category: "E-commerce Shop",
    url: "https://weiss2u.com/",
    outcome:
      "A fresh, modern florist e-commerce site built with Next.js.",
    image: "/weissflora.jpg",
    gradient: { from: "#6b7f5e", to: "#e8efe0" },
  },
  {
    name: "Unsalted Butter",
    category: "E-commerce Shop",
    url: "https://unsalted-butter.vercel.app/",
    outcome:
      "A warm, mobile-first bakery e-commerce site built with Next.js.",
    image: "/unsaltedbutter.jpg",
    gradient: { from: "#d9a441", to: "#f5e6b8" },
  },
  {
    name: "Jeff Studio",
    category: "Branding",
    url: "https://jeff-studio-lac.vercel.app/",
    outcome:
      "A luxury nail salon website built with Next.js.",
    image: "/project-jeff.jpg",
    gradient: { from: "#1a1a1a", to: "#c9a96e" },
  },
  {
    name: "Hayden Hillier-Smith",
    category: "Creator & Agent",
    url: "https://hayden-smith-six.vercel.app/",
    outcome:
      "A cinematic creator landing page built with Next.js to grow a personal brand.",
    image: "/hayden-smith.jpg",
    gradient: { from: "#0a0a0a", to: "#1a1a2e" },
  },
  {
    name: "Zermatt Neo",
    category: "Creator & Agent",
    url: "https://zermatt-neo.vercel.app/",
    outcome:
      "A cinematic creator hub built to grow a personal brand and attract collaborations.",
    image: "/project-zermatt.jpg",
    gradient: { from: "#0a0a0a", to: "#1a1a2e" },
    concept: true,
  },
  {
    name: "Matt Stonie",
    category: "Creator & Agent",
    url: "https://matt-stonie.netlify.app/",
    outcome:
      "A creator brand + commerce hub designed to drive fans toward the brand's business.",
    image: "/project-mattstonie.jpg",
    gradient: { from: "#0a0a0a", to: "#8b0000" },
    concept: true,
  },
  {
    name: "OSAS Property",
    category: "Creator & Agent",
    url: "https://osas-property.vercel.app/",
    outcome:
      "A lead-generation site that turns visitors into buyer and seller enquiries.",
    image: "/project-osas.jpg",
    gradient: { from: "#0a0a0a", to: "#c9a96e" },
  },
  {
    name: "Agenteric",
    category: "Creator & Agent",
    url: "https://agenteric.netlify.app/",
    outcome:
      "A clean, credible site for an insurance professional — built to win trust fast.",
    image: "/project-agenteric.jpg",
    gradient: { from: "#1e3a5f", to: "#2d5f8a" },
  },
  {
    name: "Tintin Smith",
    category: "Creator & Agent",
    url: "https://tintin-smith.vercel.app/",
    outcome: "A cinematic creator landing page built with Next.js.",
    image: "/tintin-smith.jpg",
    gradient: { from: "#0a0a0a", to: "#1a1a2e" },
  },
  {
    name: "MuscleMie",
    category: "Branding",
    url: "https://musclemie.vercel.app/",
    outcome:
      "A high-protein noodle brand website built with Next.js.",
    image: "/musclemie.jpg",
    gradient: { from: "#8b1a1a", to: "#e8863a" },
  },
  {
    name: "Qristina's Kitchen",
    category: "Branding",
    url: "https://qristinaskitchen-gyad.vercel.app/",
    outcome:
      "A premium space-themed family restaurant website built with Next.js.",
    image: "/qristina.jpg",
    gradient: { from: "#0a0a1f", to: "#3b2f6b" },
  },
  {
    name: "JPOT",
    category: "Branding",
    url: "https://jpot.vercel.app/",
    outcome:
      "A premium Japanese yakiniku & hotpot restaurant website built with Next.js.",
    image: "/jpot.jpg",
    gradient: { from: "#1a1a1a", to: "#a83232" },
  },
];
