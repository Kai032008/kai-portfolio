import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section bg-bg-2 border-y border-border">
      <div className="container-kai grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Photo — larger here */}
        <Reveal className="order-1">
          <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-border shadow-[0_20px_50px_-20px_rgba(26,26,26,0.25)]">
            <Image
              src="/kai.jpg"
              alt="Kai, freelance web designer based in Malaysia"
              width={720}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal delay={0.1} className="order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            About
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Hi, I&apos;m Kai.
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-dim">
            <p>
              I&apos;m a freelance web designer based in Malaysia. I help small
              businesses and creators turn their ideas into websites that
              actually work — clean, fast, mobile-friendly, and built to bring
              in real customers.
            </p>
            <p>
              I started out building sites for local cafes and bakeries, and
              today I work with creators, property agents, and personal brands
              who want to look credible online and convert visitors into
              enquiries.
            </p>
            <p>
              I&apos;m not an agency. When you work with me, you work directly
              with the person designing and building your site — no account
              managers, no hidden costs, no endless email chains. Just clear
              communication and work I&apos;m proud to put my name on.
            </p>
            <p>
              If you&apos;ve got a project in mind, I&apos;d love to hear about
              it.
            </p>
          </div>
          <a
            href="#contact"
            className="mt-7 inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-medium text-white transition-opacity hover:opacity-90"
          >
            Start a Project →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
