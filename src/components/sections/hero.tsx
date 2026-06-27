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
      className="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44"
    >
      <div
        aria-hidden
        className="absolute -right-32 -top-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-32 -z-10 h-[24rem] w-[24rem] rounded-full bg-secondary/5 blur-3xl"
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
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Performance-Driven Digital Growth Agency
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-display-md font-semibold tracking-tight text-secondary sm:text-display-lg lg:text-display-xl"
          >
            Every Business Has a Goal.
            <br />
            <span className="rounded-md bg-primary/25 px-1.5">Let&apos;s Tick It.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-balance text-base leading-relaxed text-muted sm:text-lg"
          >
            TICKYET plans, launches, and scales Meta Ads, Google Ads, SEO,
            and web experiences — built around one thing: measurable
            progress toward your goals.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button size="lg" asChild>
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer">{siteConfig.ctaPrimary}</a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href="#services" className="group">
                {siteConfig.ctaSecondary}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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
