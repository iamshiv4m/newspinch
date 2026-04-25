"use client";

import Link from "next/link";
import { categoryTiles } from "@/lib/data";
import { useLanguage } from "@/components/language-provider";
import { Reveal, StaggerChildren, StaggerItem } from "@/components/animations";

const toneClasses: Record<string, string> = {
  blue: "bg-np-blue/5 hover:bg-np-blue/10 border-np-blue/10 hover:border-np-blue/25",
  yellow:
    "bg-np-yellow/10 hover:bg-np-yellow/20 border-np-yellow/20 hover:border-np-yellow/40",
  red: "bg-np-red/5 hover:bg-np-red/10 border-np-red/10 hover:border-np-red/25",
  green:
    "bg-emerald-50 hover:bg-emerald-100 border-emerald-100 hover:border-emerald-200",
  purple:
    "bg-purple-50 hover:bg-purple-100 border-purple-100 hover:border-purple-200",
  orange:
    "bg-orange-50 hover:bg-orange-100 border-orange-100 hover:border-orange-200",
  teal: "bg-teal-50 hover:bg-teal-100 border-teal-100 hover:border-teal-200",
  pink: "bg-pink-50 hover:bg-pink-100 border-pink-100 hover:border-pink-200",
};

export function CategoryGrid() {
  const { locale, t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-np-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-widest text-np-blue">
            {t.categories.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-np-gray-900 mt-1 mb-2">
            {t.categories.title}
          </h2>
          <p className="text-np-gray-500 text-sm max-w-lg mb-12">
            {t.categories.subtitle}
          </p>
        </Reveal>

        <StaggerChildren
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          staggerDelay={0.06}
        >
          {categoryTiles.map((cat) => (
            <StaggerItem key={cat.slug}>
              <Link
                href={`/news/${cat.slug}`}
                className={`group flex flex-col items-center justify-center rounded-2xl border p-6 sm:p-8 text-center transition-all duration-300 ${toneClasses[cat.tone] || toneClasses.blue}`}
              >
                <span className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {cat.emoji}
                </span>
                <span className="font-display font-bold text-np-gray-900 text-sm sm:text-base">
                  {locale === "hi" ? cat.name.hi : cat.name.en}
                </span>
                <span className="text-[11px] text-np-gray-500 mt-1">
                  {cat.count} {t.categories.stories}
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
