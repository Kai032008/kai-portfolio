import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: Props) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-ink-dim">{subtitle}</p>
      )}
    </Reveal>
  );
}
