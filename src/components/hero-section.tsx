"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Eye,
  Users,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/language-provider";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const miniStats = [
  { icon: Eye, value: "332M+", labelKey: "views" as const },
  { icon: Users, value: "1.2M+", labelKey: "community" as const },
  { icon: TrendingUp, value: "50+", labelKey: "creators" as const },
  { icon: Zap, value: "4", labelKey: "platforms" as const },
];

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-svh bg-np-bg overflow-hidden">
      <div className="absolute inset-3 sm:inset-4 rounded-3xl border-2 border-np-blue/10 pointer-events-none z-30" />

      <div className="absolute right-0 top-0 bottom-0 w-[45%] hidden lg:block">
        <Image
          src="/images/hero-reporters.png"
          alt="News Pinch reporters on the field"
          fill
          sizes="45vw"
          className="object-cover object-left rounded-r-3xl"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-np-bg via-np-bg/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full min-h-svh flex items-center">
        <div className="w-full py-20">
          <div className="max-w-2xl">
            <motion.div
              {...fadeUp(0.1)}
              className="inline-flex items-center gap-2 rounded-full bg-np-blue/5 border border-np-blue/10 px-4 py-1.5 mb-6"
            >
              <Sparkles size={14} className="text-np-yellow" />
              <span className="text-xs font-semibold uppercase tracking-wider text-np-blue">
                {t.hero.badge}
              </span>
            </motion.div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
              <motion.span className="block text-np-blue" {...fadeUp(0.2)}>
                {t.hero.line1}
              </motion.span>
              <motion.span className="block text-np-blue" {...fadeUp(0.35)}>
                {t.hero.line2_1}{" "}
                <span className="text-np-yellow">{t.hero.line2_2}</span>
              </motion.span>
              <motion.span className="block" {...fadeUp(0.5)}>
                <span className="text-np-yellow">{t.hero.line3_1} </span>
                <span className="text-np-red font-black">{t.hero.line3_2}</span>
                <span className="text-np-blue">,</span>
              </motion.span>
              <motion.span className="block text-np-blue" {...fadeUp(0.6)}>
                {t.hero.line4_1}{" "}
                <span className="text-np-yellow">{t.hero.line4_2}</span>
              </motion.span>
            </h1>

            <motion.p
              {...fadeUp(0.75)}
              className="mt-6 text-base text-np-gray-500 leading-relaxed max-w-lg"
            >
              {t.hero.description}
            </motion.p>

            <motion.div {...fadeUp(0.9)} className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/news"
                className={cn(
                  buttonVariants({ variant: "primary", size: "lg" }),
                )}
              >
                {t.hero.cta1} <ArrowRight size={18} />
              </Link>
              <Link
                href="/sponsors"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                )}
              >
                {t.hero.cta2}
              </Link>
            </motion.div>

            {/* Mini stats bar */}
            <motion.div
              {...fadeUp(1.0)}
              className="mt-10 grid grid-cols-4 gap-4 max-w-md"
            >
              {miniStats.map((stat) => (
                <div key={stat.labelKey} className="text-center">
                  <stat.icon
                    size={16}
                    className="mx-auto mb-1 text-np-yellow"
                  />
                  <div className="font-display text-lg font-extrabold text-np-blue-dark tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-np-gray-500 mt-0.5">
                    {t.stats[stat.labelKey]}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Founders */}
            <motion.div
              {...fadeUp(1.1)}
              className="mt-8 flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white ring-2 ring-np-yellow/40 shadow-md">
                  <Image
                    src="/images/team/abhinav.png"
                    alt="Abhinav"
                    width={44}
                    height={44}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white ring-2 ring-np-yellow/40 shadow-md">
                  <Image
                    src="/images/team/saurabh.png"
                    alt="Saurabh"
                    width={44}
                    height={44}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-np-gray-900">
                  {t.hero.foundedBy}
                </p>
                <p className="text-xs text-np-gray-500">
                  Abhinav Pandey & Saurabh Tripathi
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

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
