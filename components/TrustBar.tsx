import Reveal from "./Reveal";

const CHIPS = [
  "6+ Projects Shipped",
  "Mobile-First",
  "Direct With the Designer",
];

export default function TrustBar() {
  return (
    <section className="bg-bg-2 border-b border-border">
      <div className="container-kai py-8">
        <Reveal className="flex flex-col items-center gap-5 text-center">
          <p className="max-w-2xl text-sm font-medium text-ink-dim">
            Trusted to design for cafes, content creators, and property &amp;
            insurance professionals.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {CHIPS.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-ink"
              >
                {chip}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
