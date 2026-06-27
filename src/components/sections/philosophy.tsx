"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Philosophy() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="philosophy" className="bg-secondary py-24 md:py-32">
      <div className="container">
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
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-medium text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Our Philosophy
          </span>

          <p className="mt-7 font-display text-display-md font-semibold leading-tight tracking-tight text-white sm:text-display-lg">
            Every business deserves marketing that&apos;s measurable,
            transparent, and built around real growth — not vanity metrics
            or guesswork.
          </p>

          <p className="mt-8 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Every Business Has a Goal.{" "}
            <span className="text-primary">Let&apos;s Tick It.</span>
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
