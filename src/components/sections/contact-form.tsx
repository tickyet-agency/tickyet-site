"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ContactForm() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="relative overflow-hidden bg-primary py-24 md:py-32">
      {/* Premium Background Effects */}
      <div
        aria-hidden
        className="absolute -left-32 -top-24 -z-0 h-96 w-96 rounded-full bg-accent/10 blur-[100px]"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -right-32 -z-0 h-[30rem] w-[30rem] rounded-full bg-accent/5 blur-[120px]"
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-start">
          
          {/* Left Column: Copy */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Let's Talk Growth
            </span>
            
            <h2 className="mt-8 font-display text-display-md font-semibold tracking-tight text-white sm:text-display-lg">
              Ready to stop guessing and start growing?
            </h2>
            
            <p className="mt-6 text-lg leading-relaxed text-white/70 max-w-md">
              We work with ambitious businesses that want measurable results. Fill out the form, and we'll schedule a strategy session to see if we're a fit.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4 text-white/80">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-accent">
                   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="font-medium">No sales pressure. Just strategy.</span>
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-accent">
                   <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="font-medium">Custom tailored action plan.</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md sm:p-10 shadow-2xl"
          >
            <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6" onSubmit={(e) => e.preventDefault()}>
              
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">Name</label>
                <input type="text" id="name" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-white/30 outline-none transition-colors focus:border-accent focus:bg-white/10" placeholder="John Doe" />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="business" className="mb-2 block text-sm font-medium text-white/80">Business Name</label>
                <input type="text" id="business" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-white/30 outline-none transition-colors focus:border-accent focus:bg-white/10" placeholder="Acme Corp" />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">Email</label>
                <input type="email" id="email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-white/30 outline-none transition-colors focus:border-accent focus:bg-white/10" placeholder="john@example.com" />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white/80">Phone</label>
                <input type="tel" id="phone" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-white/30 outline-none transition-colors focus:border-accent focus:bg-white/10" placeholder="(555) 123-4567" />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="website" className="mb-2 block text-sm font-medium text-white/80">Website URL</label>
                <input type="url" id="website" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-white/30 outline-none transition-colors focus:border-accent focus:bg-white/10" placeholder="https://example.com" />
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="budget" className="mb-2 block text-sm font-medium text-white/80">Monthly Marketing Budget</label>
                <select id="budget" className="w-full rounded-xl border border-white/10 bg-[#242930] px-4 py-3.5 text-white outline-none transition-colors focus:border-accent appearance-none">
                  <option value="" disabled selected>Select Budget</option>
                  <option value="Under ₹30,000">Under ₹30,000</option>
                  <option value="₹30,000 - ₹1,00,000">₹30,000 - ₹1,00,000</option>
                  <option value="₹1,00,000 - ₹2,00,000">₹1,00,000 - ₹2,00,000</option>
                  <option value="₹2,00,000+">₹2,00,000+</option>
                </select>
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="goal" className="mb-2 block text-sm font-medium text-white/80">Primary Business Goal</label>
                <select id="goal" className="w-full rounded-xl border border-white/10 bg-[#242930] px-4 py-3.5 text-white outline-none transition-colors focus:border-accent appearance-none">
                  <option value="" disabled selected>Select Goal</option>
                  <option value="More Leads">More Leads</option>
                  <option value="More Sales/E-commerce">More Sales / E-commerce</option>
                  <option value="Brand Awareness">Brand Awareness</option>
                  <option value="Website Redesign">Website Redesign</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">Message</label>
                <textarea id="message" rows={3} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-white/30 outline-none transition-colors focus:border-accent focus:bg-white/10 resize-none" placeholder="Tell us about your current marketing challenges..."></textarea>
              </div>

              <div className="sm:col-span-2 mt-4">
                <Button size="lg" variant="accent" className="w-full text-base h-14 font-semibold" type="submit">
                  Book My Free Strategy Call
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
