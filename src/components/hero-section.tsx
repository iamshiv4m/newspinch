"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { ReachCounter } from "@/components/reach-counter";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center bg-np-blue-dark text-white overflow-hidden">
      {/* Background: Founders large images */}
      <div className="absolute inset-0 z-0">
        {/* Abhinav - left side */}
        <div className="absolute right-[15%] bottom-0 w-[320px] h-[450px] sm:w-[400px] sm:h-[560px] lg:w-[480px] lg:h-[670px] opacity-[0.12]">
          <Image
            src="/images/team/abhinav.png"
            alt=""
            fill
            className="object-cover object-top grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-np-blue-dark via-transparent to-np-blue-dark/80" />
        </div>
        {/* Saurabh - right side */}
        <div className="absolute right-0 bottom-0 w-[300px] h-[420px] sm:w-[380px] sm:h-[530px] lg:w-[440px] lg:h-[620px] opacity-[0.12]">
          <Image
            src="/images/team/saurabh.png"
            alt=""
            fill
            className="object-cover object-top grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-np-blue-dark via-transparent to-np-blue-dark/80" />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-np-blue-dark via-np-blue-dark/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-np-blue-dark/50 to-transparent" />
      </div>

      {/* Floating particles/grid effect */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle, rgba(255,193,7,0.6) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Tagline */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-np-yellow/10 border border-np-yellow/20 px-4 py-1.5 mb-8"
            >
              <Sparkles size={14} className="text-np-yellow" />
              <span className="text-xs font-semibold uppercase tracking-wider text-np-yellow">AI-Powered News Network</span>
            </motion.div>

            <motion.h1
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              >
                Objectivity for
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.55, ease: [0.25, 0.4, 0.25, 1] }}
              >
                citizens, <span className="text-np-yellow">powered</span>
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <span className="text-np-yellow">by </span>
                <span className="text-np-red">AI</span>
                <span className="text-np-yellow">.</span>
              </motion.span>
            </motion.h1>

            <motion.p
              className="mt-8 text-lg text-white/50 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {siteConfig.description}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <Link href="/news" className={cn(buttonVariants({ variant: "primary", size: "lg" }))}>
                Read Latest News <ArrowRight size={18} />
              </Link>
              <Link href="/sponsors" className={cn(buttonVariants({ variant: "outlineWhite", size: "lg" }))}>
                Partner With Us
              </Link>
            </motion.div>

            {/* Founders mini avatars */}
            <motion.div
              className="mt-12 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-np-blue-dark ring-2 ring-np-yellow/30">
                  <Image src="/images/team/abhinav.png" alt="Abhinav" width={40} height={40} className="w-full h-full object-cover object-top" />
                </div>
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-np-blue-dark ring-2 ring-np-yellow/30">
                  <Image src="/images/team/saurabh.png" alt="Saurabh" width={40} height={40} className="w-full h-full object-cover object-top" />
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-white/70">Founded by</p>
                <p className="text-xs text-white/40">Abhinav Pandey & Saurabh Tripathi</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Reach Counter */}
          <motion.div
            className="lg:col-span-5 hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <ReachCounter />
          </motion.div>
        </div>

        {/* Mobile: Counter */}
        <motion.div
          className="lg:hidden mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <ReachCounter />
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-np-bg to-transparent z-20" />
    </section>
  );
}
