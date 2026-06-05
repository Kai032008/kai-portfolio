import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kai — Freelance Web Designer | Websites That Convert",
  description:
    "Freelance web designer in Malaysia helping local businesses, creators, and personal brands launch clean, fast, conversion-focused websites — without the agency price tag.",
  openGraph: {
    title: "Kai — Freelance Web Designer",
    description:
      "Clean, fast, conversion-focused websites for local businesses, creators, and personal brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
