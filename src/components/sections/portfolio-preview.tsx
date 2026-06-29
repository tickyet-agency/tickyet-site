"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Gym Website Redesign",
    service: "Web Development & SEO",
    description: "A high-converting website built for a local fitness center, resulting in a 40% increase in membership signups.",
    image: "bg-primary/5", // Placeholder for actual image
  },
  {
    title: "Meta Ads Strategy",
    service: "Performance Marketing",
    description: "Scaled a direct-to-consumer brand's ROAS from 1.5x to 3.2x within 60 days using dynamic creative testing.",
    image: "bg-accent/10", 
  },
  {
    title: "Restaurant Branding",
    service: "Branding & Identity",
    description: "Complete visual identity overhaul for a fine dining restaurant, including menus, signage, and digital presence.",
    image: "bg-secondary/5", 
  },
  {
    title: "Lead Generation Landing Page",
    service: "CRO & Web Development",
    description: "Designed and developed a targeted landing page for a B2B SaaS company that reduced cost-per-lead by 30%.",
    image: "bg-primary/10", 
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export function PortfolioPreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="work" className="bg-surface py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <SectionHeading
            eyebrow="Selected Work"
            title="Results that speak for themselves."
            description="We build strategies that look good and perform even better. Here is a sample of what we can do."
            align="left"
            className="mb-0"
          />
          <Button variant="outline" className="hidden md:inline-flex shrink-0">
            View All Case Studies
          </Button>
        </div>

        <motion.div
          variants={container}
          initial={shouldReduceMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={item}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-border shadow-card transition-all duration-500 hover:shadow-hover hover:-translate-y-2"
            >
              {/* Thumbnail Placeholder */}
              <div className={`relative aspect-[4/3] w-full overflow-hidden ${project.image}`}>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-50 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary/60">Sample Project</span>
                  <div className="mt-4 rounded-xl bg-white/50 px-6 py-4 backdrop-blur-sm border border-white/20">
                     <span className="font-display text-muted/80 font-medium">Image Placeholder</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-primary">
                      {project.service}
                    </span>
                    <ExternalLink className="h-4 w-4 text-muted transition-colors group-hover:text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">
                    {project.description}
                  </p>
                </div>
                <div className="mt-8">
                  <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-accent-dark transition-colors">
                    Read case study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="w-full">
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
}
