"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, ShieldCheck, FileText, Settings, Users } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";

const features = [
  {
    icon: Activity,
    title: "Performance-focused strategies",
    description: "Every campaign is optimized for actual business outcomes, not vanity metrics."
  },
  {
    icon: ShieldCheck,
    title: "Transparent communication",
    description: "Full visibility into your ad spend, strategy, and daily performance."
  },
  {
    icon: FileText,
    title: "Weekly reporting",
    description: "Clear, concise updates on what's working and what we're testing next."
  },
  {
    icon: Settings,
    title: "Continuous optimization",
    description: "We never set it and forget it. Constant iteration drives better results."
  },
  {
    icon: Users,
    title: "Long-term partnerships",
    description: "We act as an extension of your team, aligned with your growth goals."
  }
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function TrustCredibility() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-background py-16 md:py-24 border-t border-border/50">
      <div className="container">
        <SectionHeading
          eyebrow="Trust & Credibility"
          title="Built for businesses that demand ROI."
          description="We partner with ambitious brands to turn digital marketing into a measurable growth engine."
          chipClassName="bg-surface"
        />

        {/* Placeholder for future logos/metrics */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mt-12 mb-16 flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale"
        >
          <div className="text-xl font-bold font-display text-muted">YOUR LOGO HERE</div>
          <div className="text-xl font-bold font-display text-muted">FUTURE CLIENT</div>
          <div className="text-xl font-bold font-display text-muted">PARTNER BRAND</div>
          <div className="text-xl font-bold font-display text-muted">GROWTH CO.</div>
        </motion.div>

        <motion.div
          variants={container}
          initial={shouldReduceMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div 
              key={feature.title} 
              variants={item}
              className="group flex flex-col items-center text-center p-6 rounded-2xl border border-border/60 bg-surface transition-all duration-300 hover:shadow-card hover:border-accent/40 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/5 text-primary group-hover:bg-accent group-hover:text-primary transition-colors">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
