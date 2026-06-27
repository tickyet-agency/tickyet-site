"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Megaphone, Search, Filter, type LucideIcon } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";

interface StorySlot {
  icon: LucideIcon;
  category: string;
}

const slots: StorySlot[] = [
  { icon: Megaphone, category: "Paid Ads" },
  { icon: Search, category: "SEO & Web" },
  { icon: Filter, category: "Lead Generation" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function FutureSuccess() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="success-stories" className="bg-background py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Future Success Stories"
          title="Every partnership starts with a first client."
          description="We're excited to help ambitious businesses achieve measurable growth — and we look forward to showcasing real results here as soon as we have them to share."
          chipClassName="bg-surface"
        />

        <motion.div
          variants={container}
          initial={shouldReduceMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {slots.map(({ icon: Icon, category }) => (
            <motion.div
              key={category}
              variants={item}
              className="flex flex-col items-start rounded-2xl border border-dashed border-border bg-surface/60 p-6 sm:p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-muted">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted">
                {category}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                A real {category.toLowerCase()} case study — with real
                numbers — goes here once we&apos;ve delivered it for a
                client.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-2.5 py-1 text-[11px] font-medium text-muted">
                <span className="h-1 w-1 rounded-full bg-primary" />
                Awaiting first result
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
