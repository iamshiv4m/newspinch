"use client";

import Link from "next/link";
import { TrendingUp } from "lucide-react";
import { articles } from "@/lib/data";
import { useLanguage } from "@/components/language-provider";
import { Reveal, StaggerChildren, StaggerItem } from "@/components/animations";
import { ArticleThumbnail } from "@/components/article-thumbnail";
import { Badge } from "@/components/ui/badge";

export function TrendingStrip() {
  const { t } = useLanguage();
  const trendingArticles = articles.slice(3, 6);

  return (
    <section className="py-16 sm:py-20 bg-np-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={18} className="text-np-red" />
            <span className="text-xs font-bold uppercase tracking-widest text-np-red">
              {t.trending.eyebrow}
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-np-gray-900 mb-8">
            {t.trending.title}
          </h2>
        </Reveal>

        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {trendingArticles.map((article, idx) => (
            <StaggerItem key={article.id}>
              <Link
                href={`/news/${article.category.toLowerCase().replace(/\s+/g, "-")}/${article.slug}`}
              >
                <article className="group flex gap-4 items-start">
                  <span className="shrink-0 font-display text-4xl font-extrabold text-np-gray-200 group-hover:text-np-blue/20 transition-colors leading-none">
                    0{idx + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <Badge variant="category" className="mb-1.5 text-[10px]">
                      {article.category}
                    </Badge>
                    <h3 className="font-display font-bold text-sm text-np-gray-900 group-hover:text-np-blue transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-2 text-[11px] text-np-gray-400">
                      <span className="font-medium text-np-gray-500">
                        {article.author}
                      </span>
                      <span className="h-0.5 w-0.5 rounded-full bg-np-gray-300" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
