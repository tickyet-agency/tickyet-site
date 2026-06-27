"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Lightbulb,
  ClipboardList,
  Compass,
  Rocket,
  SlidersHorizontal,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: Lightbulb,
    title: "Discover",
    description:
      "We learn your business, audience, and goals before touching a single campaign setting.",
  },
  {
    icon: ClipboardList,
    title: "Research",
    description:
      "Competitor analysis and market research give us a clear view of where the real opportunity is.",
  },
  {
    icon: Compass,
    title: "Strategy",
    description:
      "A documented plan — channels, messaging, and budget — built around your specific goals.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "Campaigns, pages, and creative go live, tracked from day one so every result is measurable.",
  },
  {
    icon: SlidersHorizontal,
    title: "Optimize",
    description:
      "We review performance against the plan and adjust — creative, targeting, budget — based on real data.",
  },
  {
    icon: BarChart3,
    title: "Scale",
    description:
      "Once something works, we scale it deliberately, without losing the efficiency that made it work.",
  },
];

export function Process() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="process" className="bg-surface py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Our Process"
          title="A clear path from goal to result."
          description="Six steps, repeated for every campaign — so growth is methodical, not accidental."
        />

        <div className="relative mx-auto mt-16 max-w-2xl">
          <div
            aria-hidden
            className="absolute bottom-2 left-[19px] top-2 w-px bg-border sm:left-[23px]"
          />

          <ol className="flex flex-col gap-10">
            {steps.map(({ icon: Icon, title, description }, i) => (
              <motion.li
                key={title}
                initial={
                  shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }
                }
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  delay: shouldReduceMotion ? 0 : i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative flex gap-5 sm:gap-6"
              >
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-border bg-white text-secondary sm:h-12 sm:w-12">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="pt-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary-dark">
                    Step {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-secondary">
                    {title}
                  </h3>
                  <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted">
                    {description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
