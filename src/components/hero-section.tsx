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
    <section className="relative min-h-[100svh] flex items-center bg-np-blue-dark text-white overflow-hidden">
      {/* Founders as background */}
      <div className="absolute inset-0">
        <div className="absolute right-[12%] bottom-0 w-[400px] h-[560px] lg:w-[480px] lg:h-[670px] opacity-[0.1]">
          <Image
            src="/images/team/abhinav.png"
            alt=""
            fill
            sizes="480px"
            className="object-cover object-top grayscale"
            priority
          />
        </div>
        <div className="absolute right-0 bottom-0 w-[360px] h-[500px] lg:w-[440px] lg:h-[620px] opacity-[0.1]">
          <Image
            src="/images/team/saurabh.png"
            alt=""
            fill
            sizes="440px"
            className="object-cover object-top grayscale"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-np-blue-dark via-np-blue-dark/95 to-np-blue-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-np-blue-dark via-transparent to-np-blue-dark/60" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,193,7,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 rounded-full bg-np-yellow/10 border border-np-yellow/20 px-4 py-1.5 mb-8">
              <Sparkles size={14} className="text-np-yellow" />
              <span className="text-xs font-semibold uppercase tracking-wider text-np-yellow">AI-Powered News Network</span>
            </motion.div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
              <motion.span className="block" {...fadeUp(0.2)}>Objectivity for</motion.span>
              <motion.span className="block" {...fadeUp(0.35)}>
                citizens, <span className="text-np-yellow">powered</span>
              </motion.span>
              <motion.span className="block" {...fadeUp(0.5)}>
                <span className="text-np-yellow">by </span>
                <span className="text-np-red">AI</span>
                <span className="text-np-yellow">.</span>
              </motion.span>
            </h1>

            <motion.p {...fadeUp(0.65)} className="mt-8 text-lg text-white/50 leading-relaxed max-w-xl">
              {siteConfig.description}
            </motion.p>

            <motion.div {...fadeUp(0.8)} className="mt-10 flex flex-wrap gap-4">
              <Link href="/news" className={cn(buttonVariants({ variant: "primary", size: "lg" }))}>
                Read Latest News <ArrowRight size={18} />
              </Link>
              <Link href="/sponsors" className={cn(buttonVariants({ variant: "outlineWhite", size: "lg" }))}>
                Partner With Us
              </Link>
            </motion.div>

            <motion.div {...fadeUp(0.95)} className="mt-12 flex items-center gap-4">
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

          <motion.div
            className="lg:col-span-5 hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <ReachCounter />
          </motion.div>
        </div>

        <motion.div {...fadeUp(0.8)} className="lg:hidden mt-10">
          <ReachCounter />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-np-bg to-transparent z-20" />
    </section>
  );
}
