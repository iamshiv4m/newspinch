"use client";

import { liveUpdates } from "@/lib/data";
import { useLanguage } from "@/components/language-provider";
import { Reveal, StaggerChildren, StaggerItem } from "@/components/animations";
import { Clock } from "lucide-react";

export function LiveUpdates() {
  const { locale, t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-np-red opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-np-red" />
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-np-red">
              {t.live.eyebrow}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-np-gray-900 mb-2">
            {t.live.title}
          </h2>
          <p className="text-np-gray-500 text-sm max-w-lg mb-10">
            {t.live.subtitle}
          </p>
        </Reveal>

        <StaggerChildren
          className="relative border-l-2 border-np-blue/15 ml-3 space-y-0"
          staggerDelay={0.08}
        >
          {liveUpdates.map((update) => (
            <StaggerItem key={update.id}>
              <div className="relative pl-8 pb-8 last:pb-0 group">
                <div className="absolute left-[-9px] top-1 h-4 w-4 rounded-full border-2 border-np-blue bg-white group-first:border-np-red group-first:bg-np-red/10 transition-colors" />
                <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                  <span className="shrink-0 inline-flex items-center gap-1.5 text-xs font-bold text-np-blue bg-np-blue/5 rounded-full px-3 py-1 w-fit">
                    <Clock size={12} />
                    {update.time}
                  </span>
                  <p className="text-sm text-np-gray-700 leading-relaxed font-medium">
                    {locale === "hi" ? update.hi : update.en}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <Reveal delay={0.3}>
          <div className="mt-8 ml-3 pl-8 border-l-2 border-transparent">
            <button className="text-sm font-semibold text-np-blue hover:text-np-blue-light transition-colors flex items-center gap-1 group">
              {t.live.viewAll}
              <span className="group-hover:translate-x-0.5 transition-transform">
                →
              </span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
