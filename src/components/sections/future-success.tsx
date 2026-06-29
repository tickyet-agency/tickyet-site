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
          eyebrow="Client Success"
          title="Results that speak for themselves."
          description="We're excited to help ambitious businesses achieve measurable growth — and we look forward to showcasing real results here as soon as we have them to share."
          chipClassName="bg-surface"
        />

        <motion.div
          variants={container}
          initial={shouldReduceMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {slots.map(({ icon: Icon, category }) => (
            <motion.div
              key={category}
              variants={item}
              className="relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card hover:border-accent/30 group"
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-8 text-border transition-colors duration-300 group-hover:text-accent/20">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              </div>

              <div>
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-sm border border-border/50">
                  <Icon className="h-4 w-4" />
                </div>
                
                <p className="font-display text-lg italic text-foreground leading-relaxed">
                  "A real {category.toLowerCase()} case study testimonial — highlighting exact numbers and growth metrics — will go here once we've delivered it for a client."
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-4 border-t border-border/60 pt-6">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-semibold text-primary">FC</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Future Client</p>
                  <p className="text-xs text-muted">CEO, Upcoming Brand</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
