"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const { finalCta } = siteConfig;

export function FinalCta() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-secondary py-24 md:py-32"
    >
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="absolute -left-24 -top-24 -z-0 h-80 w-80 rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -right-24 -z-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="container relative z-10">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {finalCta.eyebrow}
          </span>

          {/* Heading */}
          <h2 className="mt-6 font-display text-display-md font-semibold tracking-tight text-white sm:text-display-lg">
            {finalCta.title}
          </h2>

          {/* Description */}
          <p className="mt-5 text-balance text-base leading-relaxed text-white/60 sm:text-lg">
            {finalCta.description}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <a href={finalCta.primaryHref} target="_blank" rel="noopener noreferrer">{finalCta.primaryLabel}</a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a
                href={finalCta.secondaryHref}
                className="group text-white/70 hover:text-white"
              >
                {finalCta.secondaryLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
