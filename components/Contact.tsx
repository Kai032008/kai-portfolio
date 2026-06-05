"use client";

import { useState, type FormEvent } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { WhatsAppIcon, InstagramIcon } from "./icons";
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/site";

const PROJECT_TYPES = [
  "Business Website",
  "Landing Page",
  "Creator Site",
  "Other",
];

// Formspree endpoint — the form submits straight from the browser, so this
// value is public by design. Can be overridden via .env.local if needed.
const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ??
  "https://formspree.io/f/mwvjpaqy";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    setStatus("submitting");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const submitting = status === "submitting";

  return (
    <section id="contact" className="section bg-bg-2 border-t border-border">
      <div className="container-kai">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something."
          subtitle="Tell me about your project. I reply within 24 hours."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              {status === "success" ? (
                <div className="flex min-h-[20rem] flex-col items-center justify-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-2/10 text-2xl text-accent-2">
                    ✓
                  </span>
                  <p className="mt-5 text-lg font-medium text-ink">
                    Thanks! I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Helps the email Kai receives read clearly in his inbox. */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="New website enquiry from kai-portfolio"
                  />

                  <Field label="Name" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="input"
                      placeholder="Your name"
                    />
                  </Field>

                  <Field label="Email or Phone" htmlFor="contact">
                    <input
                      id="contact"
                      name="contact"
                      type="text"
                      required
                      className="input"
                      placeholder="you@email.com or 01x-xxxxxxx"
                    />
                  </Field>

                  <Field label="Project Type" htmlFor="projectType">
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      defaultValue=""
                      className="input"
                    >
                      <option value="" disabled>
                        Select one…
                      </option>
                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Short Message" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="input resize-y"
                      placeholder="A sentence or two about your project."
                    />
                  </Field>

                  {status === "error" && (
                    <p
                      role="alert"
                      className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm leading-relaxed text-red-700"
                    >
                      Something went wrong. Please try WhatsApp instead.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-lg bg-accent px-6 py-3 text-base font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? "Sending…" : "Send Enquiry →"}
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Instant contact */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-ink">
                Prefer to chat first?
              </h3>
              <p className="text-sm leading-relaxed text-ink-dim">
                Message me on WhatsApp — I usually reply fast.
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-base font-medium text-white transition-opacity hover:opacity-90"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Chat on WhatsApp
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 text-base font-medium text-ink transition-colors hover:bg-bg-2"
              >
                <InstagramIcon className="h-5 w-5" />
                Instagram
              </a>

              <div className="mt-auto rounded-lg bg-bg-2 p-4 text-sm leading-relaxed text-ink-dim">
                Based in Malaysia · Working with clients near and far.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-medium text-ink"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
