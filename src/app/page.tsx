import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Sparkles, TrendingUp, Users, Eye, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { articles, categories } from "@/lib/data";
import { ReachCounter } from "@/components/reach-counter";
import { NewsletterInline } from "@/components/newsletter-inline";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const featuredArticle = articles[0];
  const restArticles = articles.slice(1);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-np-blue-dark text-white min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-reporters.png"
            alt="News Pinch reporters on the field"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-np-blue-dark via-np-blue-dark/95 to-np-blue-dark/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-np-yellow/10 border border-np-yellow/20 px-4 py-1.5 mb-8">
                <Sparkles size={14} className="text-np-yellow" />
                <span className="text-xs font-semibold uppercase tracking-wider text-np-yellow">AI-Powered News Network</span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
                Objectivity for
                <br />
                citizens, <span className="text-np-yellow">powered</span>
                <br />
                <span className="text-np-yellow">by </span>
                <span className="text-np-red">AI</span>
                <span className="text-np-yellow">.</span>
              </h1>

              <p className="mt-8 text-lg sm:text-xl text-white/60 leading-relaxed max-w-xl">
                {siteConfig.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/news"
                  className={cn(buttonVariants({ variant: "primary", size: "lg" }), "text-base")}
                >
                  Read Latest News <ArrowRight size={18} />
                </Link>
                <Link
                  href="/sponsors"
                  className={cn(buttonVariants({ variant: "outlineWhite", size: "lg" }), "text-base")}
                >
                  Partner With Us
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2">
              <ReachCounter />
            </div>
          </div>
        </div>
      </section>

      {/* Breaking / Category Rail */}
      <section className="border-b border-np-gray-200 bg-white sticky top-18 z-40 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
            <span className="shrink-0 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-np-red">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-np-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-np-red"></span>
              </span>
              Trending
            </span>
            <div className="h-4 w-px bg-np-gray-300 shrink-0" />
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/news/${cat.slug}`}
                className="shrink-0 text-sm font-medium text-np-gray-500 hover:text-np-blue transition-colors whitespace-nowrap"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured + Latest Articles */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-np-red">Latest</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-np-gray-900 mt-1">Top Stories</h2>
            </div>
            <Link href="/news" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-np-blue hover:text-np-blue-light transition-colors group">
              View All <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Featured Article - Large */}
          <Link href={`/news/${featuredArticle.category.toLowerCase().replace(/\s+/g, '-')}/${featuredArticle.slug}`} className="block mb-10">
            <div className="group relative rounded-2xl overflow-hidden bg-np-blue-dark h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-t from-np-blue-dark via-np-blue-dark/60 to-transparent z-10" />
              <div className="absolute inset-0 bg-np-blue/30 flex items-center justify-center">
                <Play size={80} className="text-white/10" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="category">{featuredArticle.category}</Badge>
                  {featuredArticle.aiAssisted && (
                    <Badge variant="ai" className="bg-white/10 border-white/20 text-white">
                      <Sparkles size={10} /> AI Assisted
                    </Badge>
                  )}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white group-hover:text-np-yellow transition-colors leading-tight max-w-2xl">
                  {featuredArticle.title}
                </h3>
                <p className="mt-3 text-white/60 max-w-xl line-clamp-2">{featuredArticle.excerpt}</p>
                <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
                  <span className="font-medium text-white/70">{featuredArticle.author}</span>
                  <span>{featuredArticle.date}</span>
                  <span>{featuredArticle.readTime}</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restArticles.map((article) => (
              <Link key={article.id} href={`/news/${article.category.toLowerCase().replace(/\s+/g, '-')}/${article.slug}`}>
                <article className="group h-full">
                  <div className="rounded-xl overflow-hidden bg-gradient-to-br from-np-blue/5 to-np-blue/10 h-52 flex items-center justify-center mb-4">
                    <Play size={36} className="text-np-blue/15 group-hover:text-np-blue/30 transition-colors" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="category">{article.category}</Badge>
                    {article.aiAssisted && (
                      <Badge variant="ai"><Sparkles size={10} /> AI</Badge>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-lg text-np-gray-900 group-hover:text-np-blue transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-np-gray-500 line-clamp-2 leading-relaxed">{article.excerpt}</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-np-gray-400">
                    <span className="font-medium text-np-gray-500">{article.author}</span>
                    <span>{article.readTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center sm:hidden">
            <Link href="/news" className={cn(buttonVariants({ variant: "outline" }))}>
              View All Stories <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="relative overflow-hidden bg-np-blue text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,193,7,0.08),transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div>
              <Eye size={24} className="mx-auto mb-3 text-np-yellow" />
              <div className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">{siteConfig.stats.views}</div>
              <div className="text-xs uppercase tracking-widest text-white/40 mt-2">Total Views</div>
            </div>
            <div>
              <Users size={24} className="mx-auto mb-3 text-np-yellow" />
              <div className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">{siteConfig.stats.community}</div>
              <div className="text-xs uppercase tracking-widest text-white/40 mt-2">Community</div>
            </div>
            <div>
              <TrendingUp size={24} className="mx-auto mb-3 text-np-yellow" />
              <div className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">50+</div>
              <div className="text-xs uppercase tracking-widest text-white/40 mt-2">Creators</div>
            </div>
            <div>
              <Sparkles size={24} className="mx-auto mb-3 text-np-yellow" />
              <div className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">4</div>
              <div className="text-xs uppercase tracking-widest text-white/40 mt-2">Platforms</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <NewsletterInline />
        </div>
      </section>
    </>
  );
}
