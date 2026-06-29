"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";

// --- Custom SVG Icons ---

const MetaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M19.032 6c-1.42 0-2.812.56-3.9 1.6l-3.132 2.94-3.132-2.94a5.508 5.508 0 00-3.9-1.6C2.224 6 0 8.224 0 10.968 0 13.712 2.224 15.936 4.968 15.936c1.42 0 2.812-.56 3.9-1.6l3.132-2.94 3.132 2.94a5.508 5.508 0 003.9 1.6C21.776 15.936 24 13.712 24 10.968 24 8.224 21.776 6 19.032 6zm0 7.936c-1.1 0-2.148-.432-2.928-1.22l-1.92-1.808 1.92-1.808c.78-.788 1.828-1.22 2.928-1.22 2.272 0 4.12 1.848 4.12 4.12 0 2.272-1.848 4.12-4.12 4.12zm-14.064 0c-2.272 0-4.12-1.848-4.12-4.12 0-2.272 1.848-4.12 4.12-4.12 1.1 0 2.148.432 2.928 1.22l-1.92 1.808 1.92 1.808c-.78.788-1.828 1.22-2.928 1.22z" fill="#0668E1"/>
  </svg>
);

const GoogleAdsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M19.34 11.12L12 6.89l-7.34 4.23a1.5 1.5 0 0 0-.74 1.3v4.46a1.5 1.5 0 0 0 .74 1.3L12 22.42l7.34-4.23a1.5 1.5 0 0 0 .74-1.3v-4.46a1.5 1.5 0 0 0-.74-1.3z" fill="#4285F4"/>
    <path d="M12 2v4.89l7.34 4.23c.43.25.74.7.74 1.3v4.46l2.18-1.26a1.5 1.5 0 0 0 .74-1.3v-6.98a1.5 1.5 0 0 0-.74-1.3L12 2z" fill="#FABB05"/>
    <path d="M12 22.42v-4.89L4.66 13.3a1.5 1.5 0 0 1-.74-1.3v-4.46L1.74 8.8A1.5 1.5 0 0 0 1 10.1v6.98c0 .54.29 1.03.74 1.3L12 22.42z" fill="#34A853"/>
  </svg>
);

const GoogleGIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    <path d="M2 12h20"/>
  </svg>
);

const BrowserIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" ry="2"/>
    <path d="M2 8h20"/>
    <circle cx="6" cy="6" r="0.5" fill="#7C3AED"/>
    <circle cx="9" cy="6" r="0.5" fill="#7C3AED"/>
    <circle cx="12" cy="6" r="0.5" fill="#7C3AED"/>
  </svg>
);

const FigmaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8.5 1.5A3.5 3.5 0 0 0 5 5a3.5 3.5 0 0 0 3.5 3.5H12V1.5H8.5z" fill="#F24E1E"/>
    <path d="M12 1.5V8.5H15.5A3.5 3.5 0 0 0 19 5a3.5 3.5 0 0 0-3.5-3.5H12z" fill="#FF7262"/>
    <path d="M8.5 8.5A3.5 3.5 0 0 0 5 12a3.5 3.5 0 0 0 3.5 3.5H12V8.5H8.5z" fill="#A259FF"/>
    <path d="M12 12a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0z" fill="#1ABCFE"/>
    <path d="M8.5 15.5A3.5 3.5 0 0 0 5 19a3.5 3.5 0 0 0 3.5 3.5A3.5 3.5 0 0 0 12 19v-3.5H8.5z" fill="#0ACF83"/>
  </svg>
);

const HubSpotIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M21.9 8.2c-.3-.9-1.2-1.5-2.2-1.5-.7 0-1.4.3-1.8.9l-4.1-2.4c.1-.3.2-.6.2-.9 0-1.5-1.2-2.7-2.7-2.7S8.6 2.8 8.6 4.3c0 .8.4 1.5 1 2l-2 3.7c-.5-.3-1.2-.5-1.8-.5-1.8 0-3.3 1.5-3.3 3.3 0 1.8 1.5 3.3 3.3 3.3.7 0 1.4-.2 2-.6l3.5 6.1c-.2.5-.2 1.1 0 1.6.4 1.2 1.6 1.9 2.8 1.9 1.6 0 3-1.3 3-3 0-1.2-.8-2.3-2-2.7L11.7 13c.4-.2.8-.5 1.1-.9l4.5 2.6c0 .1-.1.2-.1.4 0 1.5 1.2 2.7 2.7 2.7s2.7-1.2 2.7-2.7-1.3-2.7-2.8-2.7c-.7 0-1.3.3-1.8.7l-4.2-2.5c.3-.6.4-1.3.1-2l4.1-2.4c.5.5 1.1.8 1.9.8 1.5 0 2.7-1.2 2.7-2.7 0-1.1-.8-2.1-1.8-2.4zm-13.3 5.3c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1-.5 1.1-1.1 1.1zm3.8-9.2c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7zm1.1 17.5c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9zm6.3-7.5c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7zm.1-6c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z" fill="#FF7A59"/>
  </svg>
);

const GoogleAnalyticsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="2" y="14" width="6" height="8" rx="2" fill="#F4C20D"/>
    <rect x="9" y="8" width="6" height="14" rx="2" fill="#F36633"/>
    <rect x="16" y="2" width="6" height="20" rx="2" fill="#E37400"/>
  </svg>
);

// ---

interface Service {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: MetaIcon,
    title: "Meta Ads",
    description:
      "Campaigns built for Facebook and Instagram audiences — creative testing, targeting, and budget optimization included.",
  },
  {
    icon: GoogleAdsIcon,
    title: "Google Ads",
    description:
      "Search, display, and shopping campaigns that put your business in front of people already looking for what you offer.",
  },
  {
    icon: GoogleGIcon,
    title: "SEO",
    description:
      "Technical, on-page, and content optimization that helps your site rank and stay visible in organic search.",
  },
  {
    icon: GlobeIcon,
    title: "Website Development",
    description:
      "Fast, responsive websites built on modern frameworks — designed to represent your brand and convert visitors.",
  },
  {
    icon: BrowserIcon,
    title: "Landing Pages",
    description:
      "Focused, single-purpose pages built around one goal: turning traffic into leads, signups, or sales.",
  },
  {
    icon: FigmaIcon,
    title: "Branding",
    description:
      "Visual identity, messaging, and positioning that make your business instantly recognizable and consistent everywhere.",
  },
  {
    icon: HubSpotIcon,
    title: "Lead Generation",
    description:
      "Funnels and campaigns engineered to capture and qualify the right leads for your sales team.",
  },
  {
    icon: GoogleAnalyticsIcon,
    title: "Performance Marketing",
    description:
      "Data-driven campaign management across channels, optimized continuously against real business outcomes.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="bg-surface py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="Full-funnel marketing, built around your goals."
          description="From the first click to the final conversion, TICKYET handles every piece of the funnel — so your marketing works as one system, not eight disconnected vendors."
        />

        <motion.div
          variants={container}
          initial={shouldReduceMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={item}
              className="group flex flex-col justify-between rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] p-6 sm:p-8 transition-all duration-300 ease-out hover:-translate-y-[6px] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)]"
            >
              <div>
                <div className="mb-6 flex h-[56px] w-[56px] items-center justify-center rounded-[14px] bg-[#F7F8F9] transition-colors duration-300 ease-out group-hover:bg-[#F3FFE6]">
                  <div className="h-[32px] w-[32px] transition-transform duration-300 ease-out group-hover:scale-105">
                    <Icon className="h-full w-full" />
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">
                  {description}
                </p>
              </div>
              
              <div className="mt-8">
                 <span className="inline-flex items-center text-sm font-semibold text-[#16A34A] transition-colors cursor-pointer">
                    Learn More
                    <svg className="ml-2 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                 </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
