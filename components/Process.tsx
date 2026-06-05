import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    num: "1",
    title: "Chat",
    body: "We talk about your business, goals, and what you need. No jargon.",
  },
  {
    num: "2",
    title: "Plan",
    body: "I map out the structure, pages, and look before any design begins.",
  },
  {
    num: "3",
    title: "Build",
    body: "I design and build your site, keeping you updated along the way.",
  },
  {
    num: "4",
    title: "Launch",
    body: "We go live, and I make sure everything works perfectly on every device.",
  },
];

export default function Process() {
  return (
    <section className="section bg-bg">
      <div className="container-kai">
        <SectionHeading
          eyebrow="How We'll Work"
          title="Simple, Clear, No Surprises."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal
              key={step.num}
              delay={i * 0.08}
              className="flex h-full flex-col rounded-xl border border-border bg-card p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-base font-semibold text-white">
                {step.num}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
