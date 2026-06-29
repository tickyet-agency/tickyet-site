"use client";

import { motion, useReducedMotion } from "framer-motion";
import { 
  Stethoscope, 
  Dumbbell, 
  UtensilsCrossed, 
  Home, 
  GraduationCap, 
  ShoppingCart, 
  Briefcase 
} from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";

const industries = [
  { icon: Stethoscope, name: "Healthcare" },
  { icon: Dumbbell, name: "Gyms & Fitness" },
  { icon: UtensilsCrossed, name: "Restaurants" },
  { icon: Home, name: "Real Estate" },
  { icon: GraduationCap, name: "Education" },
  { icon: ShoppingCart, name: "E-commerce" },
  { icon: Briefcase, name: "Professional Services" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function Industries() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Expertise across the board."
          description="While our strategies are custom-tailored, our experience spans multiple industries. We know what works."
        />

        <motion.div
          variants={container}
          initial={shouldReduceMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              variants={item}
              className="group flex flex-col items-center justify-center gap-3 w-[140px] h-[130px] md:w-[160px] md:h-[150px] rounded-2xl bg-white border border-border shadow-card transition-all duration-300 hover:shadow-hover hover:-translate-y-1 hover:border-accent"
            >
              <div className="text-muted transition-colors duration-300 group-hover:text-accent-dark">
                <industry.icon className="h-8 w-8 stroke-[1.5]" />
              </div>
              <span className="font-display text-sm font-medium text-foreground text-center px-2 transition-colors duration-300 group-hover:text-primary">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
