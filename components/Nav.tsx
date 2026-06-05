"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile overlay is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "bg-bg/95 border-b border-border backdrop-blur-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-kai flex h-16 items-center justify-between">
        <a
          href="#top"
          className="text-xl font-semibold tracking-tight text-ink"
          onClick={() => setMenuOpen(false)}
        >
          Kai
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-dim transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          <div className="relative h-4 w-6">
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-ink transition-all duration-300 ${
                menuOpen ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-6 bg-ink transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-ink transition-all duration-300 ${
                menuOpen ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="border-t border-border bg-bg md:hidden">
          <div className="container-kai flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-ink transition-colors hover:bg-bg-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-accent px-4 py-3 text-center text-base font-medium text-white"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
