"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion, useInView, animate } from "framer-motion";
import { 
  Users, 
  Target, 
  MousePointerClick, 
  TrendingUp, 
  IndianRupee,
  Calendar,
  ChevronDown,
  Facebook,
  Instagram,
  Search,
  Layout,
  CheckCircle2
} from "lucide-react";
import { Logo } from "@/components/shared/logo";

// --- Counter Component for Animated Numbers ---
interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

function Counter({ from = 0, to, duration = 2, delay = 0, decimals = 0, prefix = "", suffix = "" }: CounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      if (nodeRef.current) {
        nodeRef.current.textContent = `${prefix}${to.toFixed(decimals)}${suffix}`;
      }
      return;
    }

    if (inView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        delay,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            // Add commas for thousands if needed
            const formatted = value.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            nodeRef.current.textContent = `${prefix}${formatted}${suffix}`;
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, delay, decimals, prefix, suffix, inView, shouldReduceMotion]);

  return <span ref={nodeRef} className="font-display font-semibold tracking-tight">{prefix}{from.toFixed(decimals)}{suffix}</span>;
}

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  },
};

const chartPathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: { 
    pathLength: 1, 
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut", delay: 0.8 }
  }
};

const ringVariants = {
  hidden: { strokeDasharray: "0, 100" },
  show: { 
    strokeDasharray: "86, 100",
    transition: { duration: 1.5, ease: "easeOut", delay: 0.8 }
  }
};

export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          
          {/* Left Side: Mission Content */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted shadow-sm mb-8">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Our Mission
            </div>
            
            <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[56px] leading-[1.1] mb-8">
              We build systems,<br />not just campaigns.
            </h2>
            
            <div className="space-y-6 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                TICKYET helps businesses grow through systems that attract the right audience, convert them into customers, and maximize long-term value.
              </p>
              <p>
                We don't believe in vanity metrics. We believe in clarity, strategy, and execution that delivers real, measurable results.
              </p>
            </div>
            
            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Data-driven strategies</p>
                  <p className="text-sm text-muted">that deliver measurable growth</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Transparent reporting and continuous optimization</p>
                  <p className="text-sm text-muted">in every step</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Dashboard */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-2xl lg:ml-auto"
          >
            {/* Soft Green Glow */}
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.4, 0.3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -inset-10 -z-10 rounded-full bg-accent/20 blur-[100px]" 
            />

            {/* Dashboard Container */}
            <div className="rounded-2xl border border-border/80 bg-white p-5 sm:p-7 shadow-premium relative overflow-hidden backdrop-blur-xl">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border/50 pb-5 mb-6">
                <div className="flex items-center gap-2">
                  <Logo />
                </div>
                <div className="hidden sm:flex items-center gap-2 rounded-lg border border-border/60 bg-surface px-3 py-1.5 text-xs font-medium text-muted hover:bg-muted/30 cursor-pointer transition-colors">
                  <Calendar className="h-3.5 w-3.5" />
                  May 01 – May 31, 2024
                  <ChevronDown className="h-3.5 w-3.5 ml-1" />
                </div>
              </div>

              {/* Metrics Row */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 mb-6"
              >
                {[
                  { label: "Leads Generated", value: 1248, icon: Users, trend: "+32.6%", isCurrency: false, decimals: 0 },
                  { label: "ROAS", value: 5.42, icon: Target, trend: "+28.4%", isCurrency: false, decimals: 2, suffix: "x" },
                  { label: "CTR", value: 4.87, icon: MousePointerClick, trend: "+14.7%", isCurrency: false, decimals: 2, suffix: "%" },
                  { label: "Conversion Rate", value: 18.6, icon: TrendingUp, trend: "+21.3%", isCurrency: false, decimals: 1, suffix: "%" },
                  { label: "Cost Per Lead", value: 82.45, icon: IndianRupee, trend: "-9.2%", isCurrency: true, decimals: 2, prefix: "₹" },
                ].map((metric, i) => (
                  <motion.div 
                    key={metric.label} 
                    variants={itemVariants}
                    className="group flex flex-col justify-between rounded-xl border border-border/50 bg-background/50 p-3.5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-hover hover:border-accent/40"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <metric.icon className="h-4 w-4 text-accent" />
                    </div>
                    <p className="text-[11px] font-medium text-muted truncate">{metric.label}</p>
                    <div className="mt-1 text-lg sm:text-xl text-foreground">
                      <Counter 
                        to={metric.value} 
                        prefix={metric.prefix} 
                        suffix={metric.suffix} 
                        decimals={metric.decimals} 
                        delay={0.3 + (i * 0.1)} 
                      />
                    </div>
                    <div className={`mt-2 flex items-center gap-1 text-[10px] font-semibold ${metric.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                      {metric.trend.startsWith('+') ? '↑' : '↓'} {metric.trend.substring(1)}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Bottom Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Chart Area */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="col-span-1 md:col-span-2 rounded-xl border border-border/50 p-4 sm:p-5 shadow-sm relative group transition-all hover:border-accent/40"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs font-semibold text-foreground">Performance Over Time</h3>
                    <div className="text-[10px] font-medium text-muted bg-surface px-2 py-1 rounded flex items-center gap-1 cursor-pointer">
                      Leads <ChevronDown className="h-3 w-3" />
                    </div>
                  </div>
                  
                  {/* SVG Line Chart */}
                  <div className="relative h-40 w-full">
                    {/* Y-Axis Labels */}
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-muted pb-6">
                      <span>2K</span>
                      <span>1.5K</span>
                      <span>1K</span>
                      <span>500</span>
                      <span>0</span>
                    </div>
                    
                    {/* Grid Lines */}
                    <div className="absolute left-6 right-0 top-1 h-full flex flex-col justify-between pb-6">
                      <div className="w-full border-t border-dashed border-border/50"></div>
                      <div className="w-full border-t border-dashed border-border/50"></div>
                      <div className="w-full border-t border-dashed border-border/50"></div>
                      <div className="w-full border-t border-dashed border-border/50"></div>
                      <div className="w-full border-t border-dashed border-border/50"></div>
                    </div>
                    
                    {/* Chart Line & Area */}
                    <div className="absolute left-6 right-2 top-2 bottom-6 overflow-visible">
                      <svg viewBox="0 0 400 120" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#A3E635" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#A3E635" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {/* Area */}
                        <motion.path 
                          d="M0,90 C30,70 50,100 80,60 C110,20 140,50 170,40 C200,30 230,80 260,60 C290,40 320,70 350,50 C370,40 390,20 400,10 L400,120 L0,120 Z" 
                          fill="url(#chartGradient)"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 1.2, duration: 1 }}
                        />
                        {/* Line */}
                        <motion.path 
                          d="M0,90 C30,70 50,100 80,60 C110,20 140,50 170,40 C200,30 230,80 260,60 C290,40 320,70 350,50 C370,40 390,20 400,10" 
                          fill="none" 
                          stroke="#A3E635" 
                          strokeWidth="3" 
                          strokeLinecap="round"
                          variants={chartPathVariants}
                          initial="hidden"
                          whileInView="show"
                        />
                        {/* End Point Indicator */}
                        <motion.circle 
                          cx="400" cy="10" r="4" 
                          fill="#A3E635" 
                          stroke="#fff" 
                          strokeWidth="2"
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 2.2, type: "spring" }}
                        />
                      </svg>
                    </div>

                    {/* X-Axis Labels */}
                    <div className="absolute left-6 right-2 bottom-0 flex justify-between text-[9px] text-muted">
                      <span>May 01</span>
                      <span>May 08</span>
                      <span>May 15</span>
                      <span>May 22</span>
                      <span>May 31</span>
                    </div>

                    {/* Tooltip (Static for visual) */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.4 }}
                      className="absolute right-0 top-0 bg-white border border-border/60 shadow-sm rounded p-1.5 text-[9px]"
                    >
                      <span className="font-semibold text-foreground">1,248</span><br />
                      <span className="text-muted">May 31</span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Score & List Area */}
                <div className="col-span-1 flex flex-col gap-4">
                  {/* Circular Score */}
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="flex-1 rounded-xl border border-border/50 p-4 shadow-sm flex flex-col items-center justify-center transition-all hover:border-accent/40 group"
                  >
                    <h3 className="text-xs font-semibold text-foreground mb-3 w-full text-left">Overall Performance</h3>
                    <div className="relative h-24 w-24">
                      <svg viewBox="0 0 36 36" className="h-full w-full">
                        <path
                          className="text-muted/20"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.5"
                        />
                        <motion.path
                          className="text-accent"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          variants={ringVariants}
                          initial="hidden"
                          whileInView="show"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-xl font-display font-bold text-foreground">
                          <Counter to={86} suffix="%" delay={1.2} />
                        </span>
                        <span className="text-[9px] text-muted mt-0.5">Excellent</span>
                      </div>
                    </div>
                    <div className="mt-3 text-[10px] font-medium text-green-500 text-center">
                      ↑ 18% vs Last Month
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Campaigns List (Full width below) */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mt-6 rounded-xl border border-border/50 p-4 sm:p-5 shadow-sm transition-all hover:border-accent/40"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-semibold text-foreground">Top Campaigns</h3>
                  <span className="text-[10px] font-medium text-muted hover:text-primary cursor-pointer transition-colors">View All →</span>
                </div>
                
                <div className="space-y-3">
                  {[
                    { name: "Facebook Leads", value: 672, trend: "+35%", icon: Facebook, color: "text-blue-500" },
                    { name: "Google Search", value: 412, trend: "+18%", icon: Search, color: "text-red-500" },
                    { name: "Instagram Ads", value: 298, trend: "+22%", icon: Instagram, color: "text-pink-500" },
                    { name: "Website Campaign", value: 186, trend: "+16%", icon: Layout, color: "text-gray-600" },
                  ].map((camp, i) => (
                    <motion.div 
                      key={camp.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + (i * 0.1) }}
                      className="flex items-center justify-between group cursor-default"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`flex h-7 w-7 items-center justify-center rounded-full bg-surface ${camp.color} border border-border/40 transition-transform group-hover:scale-110`}>
                          <camp.icon className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors">{camp.name}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-semibold text-foreground"><Counter to={camp.value} delay={1.2 + (i*0.1)} /></span>
                        <span className="text-[10px] font-medium text-green-500 w-8 text-right">↑ {camp.trend}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <div className="mt-4 flex items-center justify-between text-[9px] text-muted px-1">
                <span>Last updated: 5 mins ago</span>
                <span className="cursor-pointer hover:text-primary transition-colors">Generate Full Report →</span>
              </div>

            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
