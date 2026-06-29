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
    <section id="process" className="bg-surface py-24 md:py-32 relative overflow-hidden">
      {/* Decorative gradient for the background */}
      <div className="absolute left-1/2 top-0 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
      
      <div className="container">
        <SectionHeading
          eyebrow="Our Process"
          title="A clear path from goal to result."
          description="Six steps, repeated for every campaign — so growth is methodical, not accidental."
        />

        <div className="relative mx-auto mt-20 max-w-3xl">
          {/* Animated Connecting Line */}
          <div
            aria-hidden
            className="absolute bottom-4 left-[23px] top-4 w-0.5 bg-gradient-to-b from-border via-accent/50 to-border sm:left-[27px]"
          />

          <ol className="flex flex-col gap-12 sm:gap-16">
            {steps.map(({ icon: Icon, title, description }, i) => (
              <motion.li
                key={title}
                initial={
                  shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex gap-6 sm:gap-10"
              >
                {/* Step Indicator */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-border bg-white text-muted transition-all duration-300 group-hover:border-accent group-hover:bg-accent/10 group-hover:text-primary sm:h-14 sm:w-14">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 stroke-[1.5]" />
                  <div className="absolute -inset-2 rounded-full bg-accent/20 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                
                {/* Content */}
                <div className="pt-1 sm:pt-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary/60 transition-colors group-hover:text-primary">
                    Step {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                    {title}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
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
