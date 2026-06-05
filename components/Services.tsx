import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const SERVICES = [
  {
    num: "01",
    title: "Website Design & Build",
    body: "Custom landing pages and full websites designed to look premium and load fast. Built mobile-first, so your site works perfectly on every screen. Ideal for businesses launching online or replacing an outdated site.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 8h18M8 21h8M12 18v3" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Conversion-Focused Landing Pages",
    body: "Single-page sites built around one goal — getting you enquiries, bookings, or sales. Clear messaging, strong calls-to-action, and a layout that guides visitors toward taking action.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 3 3 5-6" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Website Care & Updates",
    body: "Ongoing support to keep your site fresh, fast, and secure. Content updates, new sections, fixes — handled quickly so you can focus on running your business.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6 2 2 6-6a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2 2.3-2.3z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="section bg-bg-2 border-y border-border">
      <div className="container-kai">
        <SectionHeading eyebrow="What I Do" title="Services." />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.num}
              delay={i * 0.08}
              className="flex h-full flex-col rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  {service.icon}
                </span>
                <span className="text-sm font-semibold text-ink-dim">
                  {service.num}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-dim">
                {service.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
