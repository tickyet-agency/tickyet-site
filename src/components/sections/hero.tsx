"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GoalChecklist } from "@/components/sections/goal-checklist";
import { siteConfig } from "@/lib/site-config";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-24 pt-40 md:pb-32 md:pt-48"
    >
      <div
        aria-hidden
        className="absolute -right-32 -top-24 -z-10 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-primary/5 blur-3xl"
      />

      <div className="container grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          variants={container}
          initial={shouldReduceMotion ? "show" : "hidden"}
          animate="show"
          className="max-w-xl"
        >
          <motion.span
            variants={item}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            Performance-Driven Digital Growth
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-display-lg font-semibold tracking-tight text-foreground sm:text-display-xl"
          >
            Every Business Has a Goal.
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-primary px-2">Let&apos;s Tick It.</span>
              <span className="absolute bottom-1 left-0 -z-10 h-3/5 w-full bg-accent/80 skew-x-[-12deg]" />
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-lg text-balance text-lg leading-relaxed text-muted sm:text-xl"
          >
            TICKYET plans, launches, and scales Meta Ads, Google Ads, SEO,
            and web experiences — built around one thing: measurable
            progress toward your goals.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button size="lg" variant="accent" asChild>
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">{siteConfig.ctaPrimary}</a>
            </Button>
            <Button size="lg" variant="ghost" className="font-semibold" asChild>
              <a href="#services" className="group">
                {siteConfig.ctaSecondary}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <GoalChecklist />
        </motion.div>
      </div>
    </section>
  );
}
