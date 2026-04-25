"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { ReachCounter } from "@/components/reach-counter";
import { cn } from "@/lib/utils";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] bg-np-bg overflow-hidden">
      {/* Blue frame border effect */}
      <div className="absolute inset-3 sm:inset-4 rounded-3xl border-2 border-np-blue/10 pointer-events-none z-30" />

      {/* Reporter image - RIGHT side, bright and visible */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] hidden lg:block">
        <Image
          src="/images/hero-reporters.png"
          alt="News Pinch reporters on the field"
          fill
          sizes="45vw"
          className="object-cover object-left rounded-r-3xl"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-np-bg via-np-bg/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full min-h-[100svh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full py-20">
          {/* Left content */}
          <div className="lg:col-span-7">
            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 rounded-full bg-np-blue/5 border border-np-blue/10 px-4 py-1.5 mb-6">
              <Sparkles size={14} className="text-np-yellow" />
              <span className="text-xs font-semibold uppercase tracking-wider text-np-blue">AI-Powered News Network</span>
            </motion.div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
              <motion.span className="block text-np-blue" {...fadeUp(0.2)}>Objectivity for</motion.span>
              <motion.span className="block text-np-blue" {...fadeUp(0.35)}>
                citizens, <span className="text-np-yellow">powered</span>
              </motion.span>
              <motion.span className="block" {...fadeUp(0.5)}>
                <span className="text-np-yellow">by </span>
                <span className="text-np-red font-black">AI</span>
                <span className="text-np-blue">,</span>
              </motion.span>
              <motion.span className="block text-np-blue" {...fadeUp(0.6)}>
                delivered by <span className="text-np-yellow">creators.</span>
              </motion.span>
            </h1>

            <motion.p {...fadeUp(0.75)} className="mt-6 text-base text-np-gray-500 leading-relaxed max-w-lg">
              {siteConfig.description}
            </motion.p>

            <motion.div {...fadeUp(0.9)} className="mt-8 flex flex-wrap gap-4">
              <Link href="/news" className={cn(buttonVariants({ variant: "primary", size: "lg" }))}>
                Read Latest News <ArrowRight size={18} />
              </Link>
              <Link href="/sponsors" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
                Partner With Us
              </Link>
            </motion.div>

            {/* Founders */}
            <motion.div {...fadeUp(1.0)} className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white ring-2 ring-np-yellow/40 shadow-md">
                  <Image src="/images/team/abhinav.png" alt="Abhinav" width={44} height={44} className="w-full h-full object-cover object-top" />
                </div>
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white ring-2 ring-np-yellow/40 shadow-md">
                  <Image src="/images/team/saurabh.png" alt="Saurabh" width={44} height={44} className="w-full h-full object-cover object-top" />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-np-gray-900">Founded by</p>
                <p className="text-xs text-np-gray-500">Abhinav Pandey & Saurabh Tripathi</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Reach Counter */}
          <motion.div
            className="lg:col-span-5 relative z-20"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <ReachCounter />
          </motion.div>
        </div>
      </div>

      {/* Mobile reporter image */}
      <div className="lg:hidden relative h-64 -mt-8 mx-4 rounded-2xl overflow-hidden">
        <Image
          src="/images/hero-reporters.png"
          alt="News Pinch reporters"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
