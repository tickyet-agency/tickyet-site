"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Compass,
  MessageCircle,
  Gauge,
  Rocket,
  RefreshCw,
  Handshake,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: Compass,
    title: "Strategy Before Execution",
    description:
      "We start with research and a clear plan, not ad spend. Every campaign has a reason before it has a budget.",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    description:
      "You'll always know what we're doing, why we're doing it, and how it's performing — no jargon, no black boxes.",
  },
  {
    icon: Gauge,
    title: "Performance-Focused Approach",
    description:
      "Every decision is measured against real business outcomes, not vanity metrics.",
  },
  {
    icon: Rocket,
    title: "Modern Marketing Techniques",
    description:
      "We use current platforms, tools, and creative formats — built for how people actually search, scroll, and buy today.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning",
    description:
      "Marketing platforms change constantly. We stay close to those changes so your strategy never runs on an outdated playbook.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    description:
      "We're not built for one-off projects. We aim to grow alongside the businesses we work with.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function WhyChoose() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="why-choose" className="bg-background py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Why TICKYET"
          title="Built on principles, not promises."
          description="We're a new agency — so we lead with how we work, not who we've worked with yet."
          chipClassName="bg-surface"
        />

        <motion.div
          variants={container}
          initial={shouldReduceMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2"
        >
          {values.map(({ icon: Icon, title, description }) => (
            <motion.div key={title} variants={item} className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-secondary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-secondary">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
