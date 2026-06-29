"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Philosophy() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="philosophy" className="relative overflow-hidden bg-primary py-24 md:py-32">
      {/* Decorative glows */}
      <div className="absolute top-0 left-1/4 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/10 blur-[100px]" />
      
      <div className="container relative z-10">
        <motion.div
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Our Philosophy
          </span>

          <p className="mt-8 font-display text-display-sm font-semibold leading-tight tracking-tight text-white sm:text-display-md md:text-display-lg text-balance">
            Every business deserves marketing that&apos;s measurable,
            transparent, and built around real growth — not vanity metrics
            or guesswork.
          </p>

          <p className="mt-10 font-display text-2xl font-semibold tracking-tight text-white/80 sm:text-3xl">
            Every Business Has a Goal.{" "}
            <span className="text-accent underline decoration-accent/50 underline-offset-4">Let&apos;s Tick It.</span>
          </p>

          <p className="mx-auto mt-6 max-w-xl text-balance text-sm leading-relaxed text-white/60 sm:text-base">
            That&apos;s the standard we hold every campaign, every page, and
            every recommendation to — for every client we work with,
            starting with our first.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
