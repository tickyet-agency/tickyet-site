"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "How Meta Ads Generate Quality Leads",
    category: "Paid Social",
    date: "Oct 12, 2023",
    description: "Discover the exact campaign structure we use to lower CPL and increase lead quality on Facebook and Instagram.",
  },
  {
    title: "Google Ads vs Meta Ads: Where to start?",
    category: "Strategy",
    date: "Sep 28, 2023",
    description: "A comprehensive breakdown of when to use search intent versus interruption marketing to grow your business.",
  },
  {
    title: "Marketing Mistakes Small Businesses Make",
    category: "Growth",
    date: "Sep 15, 2023",
    description: "Are you burning ad spend? Learn the 5 most common digital marketing pitfalls and how to avoid them.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function BlogPreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="insights" className="bg-background py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <SectionHeading
            eyebrow="Insights & Resources"
            title="Strategies you can actually use."
            description="We share our playbook so you can learn exactly how we drive growth for our partners."
            align="left"
            className="mb-0"
          />
          <Button variant="outline" className="hidden md:inline-flex shrink-0">
            Read the Blog
          </Button>
        </div>

        <motion.div
          variants={container}
          initial={shouldReduceMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {articles.map((article) => (
            <motion.div
              key={article.title}
              variants={item}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 sm:p-8 transition-all duration-300 hover:shadow-card hover:-translate-y-1 hover:border-accent/50"
            >
              <div>
                <div className="mb-4 flex items-center gap-3 text-xs font-medium text-muted">
                  <span className="uppercase tracking-wider text-primary">{article.category}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <span>{article.date}</span>
                </div>
                <h3 className="mb-3 font-display text-lg font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted line-clamp-3">
                  {article.description}
                </p>
              </div>
              <div className="mt-8">
                <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent-dark transition-colors cursor-pointer">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="w-full">
            Read the Blog
          </Button>
        </div>
      </div>
    </section>
  );
}
