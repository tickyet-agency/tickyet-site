import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TICKYET — Every Business Has a Goal. Let's Tick It.",
  description:
    "TICKYET is a digital growth agency offering Meta Ads, Google Ads, SEO, website and landing page development, branding, lead generation, and performance marketing — built around measurable goals.",
  openGraph: {
    title: "TICKYET — Every Business Has a Goal. Let's Tick It.",
    description:
      "Performance-driven digital growth: Meta Ads, Google Ads, SEO, website development, branding, and more.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TICKYET — Every Business Has a Goal. Let's Tick It.",
    description:
      "Performance-driven digital growth: Meta Ads, Google Ads, SEO, website development, branding, and more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${GeistSans.variable}`}>
      <body className="bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
