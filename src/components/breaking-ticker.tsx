"use client";

import Link from "next/link";
import { breakingNews } from "@/lib/data";
import { useLanguage } from "@/components/language-provider";

export function BreakingTicker() {
  const { locale, t } = useLanguage();

  const items = breakingNews.map((item) => ({
    ...item,
    text: locale === "hi" ? item.hi : item.en,
  }));

  const doubled = [...items, ...items];

  return (
    <div className="bg-np-red text-white overflow-hidden relative z-50">
      <div className="mx-auto flex items-center">
        <span className="shrink-0 flex items-center gap-2 bg-np-red px-4 py-2 font-bold text-xs uppercase tracking-widest z-10 border-r border-white/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          {t.breaking.label}
        </span>

        <div className="flex-1 overflow-hidden">
          <div className="flex animate-ticker whitespace-nowrap">
            {doubled.map((item, i) => {
              const content = (
                <span className="inline-flex items-center gap-3 px-6 text-sm font-medium">
                  <span className="h-1 w-1 rounded-full bg-white/60 shrink-0" />
                  {item.text}
                </span>
              );

              return item.href ? (
                <Link
                  key={`${item.id}-${i}`}
                  href={item.href}
                  className="hover:text-np-yellow transition-colors"
                >
                  {content}
                </Link>
              ) : (
                <span key={`${item.id}-${i}`}>{content}</span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
