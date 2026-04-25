import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, TrendingUp, Users, Eye, ChevronRight } from "lucide-react";
import { ArticleThumbnail } from "@/components/article-thumbnail";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { articles, categories } from "@/lib/data";
import { NewsletterInline } from "@/components/newsletter-inline";
import { cn } from "@/lib/utils";
import { HeroSection } from "@/components/hero-section";
import { Reveal, StaggerChildren, StaggerItem, CountUp, ScaleOnScroll } from "@/components/animations";

export default function HomePage() {
  const featuredArticle = articles[0];
  const restArticles = articles.slice(1, 4);

  return (
    <>
      {/* ===== SECTION 1: Hero ===== */}
      <HeroSection />

      {/* ===== Trending Bar ===== */}
      <div className="bg-white border-b border-np-gray-200 sticky top-16 sm:top-18 z-40 shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-3">
          <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
            <span className="shrink-0 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-np-red">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-np-red opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-np-red" />
              </span>
              Trending
            </span>
            <div className="h-4 w-px bg-np-gray-300 shrink-0" />
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/news/${cat.slug}`} className="shrink-0 text-sm font-medium text-np-gray-500 hover:text-np-blue transition-colors whitespace-nowrap">
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ===== SECTION 2: Top Stories ===== */}
      <section className="story-section flex flex-col justify-center bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full py-16">
          <Reveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-np-red">Latest</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-np-gray-900 mt-1">Top Stories</h2>
              </div>
              <Link href="/news" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-np-blue hover:text-np-blue-light transition-colors group">
                View All <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </Reveal>

          {/* Featured */}
          <ScaleOnScroll>
            <Link href={`/news/${featuredArticle.category.toLowerCase().replace(/\s+/g, '-')}/${featuredArticle.slug}`} className="block mb-8">
              <div className="group relative rounded-2xl overflow-hidden bg-np-blue-dark h-[320px] sm:h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-t from-np-blue-dark via-np-blue-dark/60 to-transparent z-10" />
              <ArticleThumbnail size="hero" className="absolute inset-0" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="category">{featuredArticle.category}</Badge>
                    {featuredArticle.aiAssisted && (
                      <Badge variant="ai" className="bg-white/10 border-white/20 text-white"><Sparkles size={10} /> AI</Badge>
                    )}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:text-np-yellow transition-colors leading-tight max-w-2xl">
                    {featuredArticle.title}
                  </h3>
                  <p className="mt-2 text-white/50 max-w-xl text-sm line-clamp-2">{featuredArticle.excerpt}</p>
                </div>
              </div>
            </Link>
          </ScaleOnScroll>

          {/* Grid */}
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {restArticles.map((article) => (
              <StaggerItem key={article.id}>
                <Link href={`/news/${article.category.toLowerCase().replace(/\s+/g, '-')}/${article.slug}`}>
                  <article className="group">
                    <ArticleThumbnail size="lg" className="rounded-xl mb-3" />
                    <div className="flex items-center gap-2 mb-1.5">
                      <Badge variant="category">{article.category}</Badge>
                      {article.aiAssisted && <Badge variant="ai"><Sparkles size={10} /> AI</Badge>}
                    </div>
                    <h3 className="font-display font-bold text-base text-np-gray-900 group-hover:text-np-blue transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h3>
                    <div className="mt-2 flex items-center justify-between text-xs text-np-gray-400">
                      <span className="font-medium text-np-gray-500">{article.author}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ===== SECTION 3: Stats ===== */}
      <section className="relative overflow-hidden bg-np-blue-dark text-white py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,193,7,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal direction="none">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-np-yellow/60 mb-12">Trusted by millions</p>
          </Reveal>
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center" staggerDelay={0.12}>
            {[
              { icon: Eye, value: siteConfig.stats.views, label: "Total Views" },
              { icon: Users, value: siteConfig.stats.community, label: "Community" },
              { icon: TrendingUp, value: "50+", label: "Creators" },
              { icon: Sparkles, value: "4", label: "Platforms" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <stat.icon size={24} className="mx-auto mb-3 text-np-yellow" />
                <div className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
                  <CountUp value={stat.value} />
                </div>
                <div className="text-xs uppercase tracking-widest text-white/30 mt-2">{stat.label}</div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ===== SECTION 4: Newsletter ===== */}
      <section className="py-16 sm:py-24 bg-np-bg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <NewsletterInline />
          </Reveal>
        </div>
      </section>
    </>
  );
}
