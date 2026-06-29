"use client";

import { motion, useReducedMotion } from "framer-motion";

import { SectionHeading } from "@/components/shared/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does TICKYET offer?",
    answer:
      "Meta Ads, Google Ads, SEO, website and landing page development, branding, lead generation, and performance marketing — all in-house, so your strategy stays connected across channels instead of split between vendors.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "It depends on the channel. Paid ads typically show early signals within the first few weeks, while SEO and brand-building are longer-term plays that compound over months. We'll give you a realistic timeline specific to your goals on the strategy call.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing depends on scope — which channels, how much ongoing management is involved, and your goals. We don't publish a flat rate because a one-off landing page and an ongoing ad management retainer aren't priced the same way. Book a free strategy call and we'll give you a clear, transparent quote.",
  },
  {
    question: "What does the working process look like?",
    answer:
      "Every engagement follows the same six steps: Discover, Research, Strategy, Launch, Optimize, Scale. You'll always know which stage we're in and what's coming next.",
  },
  {
    question: "How will we communicate during the project?",
    answer:
      "Straightforwardly — regular updates on what's been done, what's planned, and how things are performing. You shouldn't have to chase us for a status update.",
  },
  {
    question: "What kind of support do you provide after launch?",
    answer:
      "Marketing isn't set-and-forget. Monitoring, reporting, and ongoing optimization of live campaigns and pages is part of the engagement, not a separate add-on.",
  },
];

export function FAQ() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="faq" className="bg-surface py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered plainly."
          description="Anything else on your mind is easier to ask directly than to guess from a page."
        />

        <motion.div
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mx-auto mt-14 max-w-3xl rounded-2xl border border-border bg-white px-8 sm:px-10 py-4 shadow-card"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={`item-${i}`}
                className={i === faqs.length - 1 ? "border-b-0" : undefined}
              >
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
