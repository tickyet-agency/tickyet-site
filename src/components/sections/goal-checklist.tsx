"use client";

import { motion, useReducedMotion } from "framer-motion";

const goals = [
  "Generate qualified leads",
  "Improve ad performance",
  "Grow organic search visibility",
  "Launch a converting website",
];

export function GoalChecklist() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-accent/5 blur-3xl"
      />
      <div className="relative rounded-2xl border border-border bg-white p-6 shadow-premium sm:p-7">
        <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-muted">
          What we tick off first
        </p>
        <ul className="flex flex-col">
          {goals.map((goal, i) => (
            <li
              key={goal}
              className="flex items-center justify-between gap-4 border-b border-border/70 py-3.5 last:border-0"
            >
              <span className="text-sm font-medium text-foreground">{goal}</span>
              <motion.span
                initial={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}
                animate={{ backgroundColor: "#A3E635", borderColor: "#A3E635" }}
                transition={{
                  delay: shouldReduceMotion ? 0 : 0.6 + i * 0.25,
                  duration: shouldReduceMotion ? 0 : 0.3,
                }}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
                  <motion.path
                    d="M5 13l4 4L19 7"
                    fill="none"
                    stroke="#1E2228"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      delay: shouldReduceMotion ? 0 : 0.75 + i * 0.25,
                      duration: shouldReduceMotion ? 0 : 0.35,
                      ease: "easeOut",
                    }}
                  />
                </svg>
              </motion.span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
