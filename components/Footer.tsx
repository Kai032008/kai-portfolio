import { WhatsAppIcon, InstagramIcon } from "./icons";
import { WHATSAPP_URL, INSTAGRAM_URL, NAV_LINKS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="container-kai py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xl font-semibold tracking-tight text-ink">Kai</p>
            <p className="mt-1 text-sm text-ink-dim">
              Freelance web designer · Malaysia
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
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
              className="text-sm font-medium text-ink-dim transition-colors hover:text-ink"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink-dim transition-colors hover:text-ink"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink-dim transition-colors hover:text-ink"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-sm text-ink-dim">
            © 2026 Kai. Built and designed by me.
          </p>
        </div>
      </div>
    </footer>
  );
}
