"use client";

import Link from "next/link";
import { Shield, Search, Megaphone } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/animations";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function TipNewsroom() {
  const { t } = useLanguage();

  const badges = [
    { icon: Shield, text: t.tip.badgeSecure },
    { icon: Search, text: t.tip.badgeProfessional },
    { icon: Megaphone, text: t.tip.badgeVoice },
  ];

  return (
    <section className="py-16 sm:py-24 bg-np-blue-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,193,7,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 mb-6">
              <Megaphone size={14} className="text-np-yellow" />
              <span className="text-xs font-semibold uppercase tracking-wider text-np-yellow">
                {t.tip.eyebrow}
              </span>
            </span>

            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight mb-4">
              {t.tip.title}
            </h2>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
              {t.tip.subtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {badges.map((badge) => (
                <span
                  key={badge.text}
                  className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-medium text-white/80"
                >
                  <badge.icon size={14} className="text-np-yellow" />
                  {badge.text}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "primary", size: "lg" }),
                )}
              >
                {t.tip.ctaPrimary}
              </Link>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "outlineWhite", size: "lg" }),
                )}
              >
                {t.tip.ctaSecondary}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
