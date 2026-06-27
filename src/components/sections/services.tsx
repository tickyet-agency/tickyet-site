"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Megaphone,
  Target,
  Search,
  Code2,
  PanelsTopLeft,
  Sparkles,
  Filter,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Megaphone,
    title: "Meta Ads",
    description:
      "Campaigns built for Facebook and Instagram audiences — creative testing, targeting, and budget optimization included.",
  },
  {
    icon: Target,
    title: "Google Ads",
    description:
      "Search, display, and shopping campaigns that put your business in front of people already looking for what you offer.",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Technical, on-page, and content optimization that helps your site rank and stay visible in organic search.",
  },
  {
    icon: Code2,
    title: "Website Development",
    description:
      "Fast, responsive websites built on modern frameworks — designed to represent your brand and convert visitors.",
  },
  {
    icon: PanelsTopLeft,
    title: "Landing Pages",
    description:
      "Focused, single-purpose pages built around one goal: turning traffic into leads, signups, or sales.",
  },
  {
    icon: Sparkles,
    title: "Branding",
    description:
      "Visual identity, messaging, and positioning that make your business instantly recognizable and consistent everywhere.",
  },
  {
    icon: Filter,
    title: "Lead Generation",
    description:
      "Funnels and campaigns engineered to capture and qualify the right leads for your sales team.",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description:
      "Data-driven campaign management across channels, optimized continuously against real business outcomes.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="bg-surface py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="Full-funnel marketing, built around your goals."
          description="From the first click to the final conversion, TICKYET handles every piece of the funnel — so your marketing works as one system, not eight disconnected vendors."
        />

        <motion.div
          variants={container}
          initial={shouldReduceMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={item}
              className="group rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card sm:p-7"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-secondary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-secondary">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
