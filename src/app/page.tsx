import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Sparkles, TrendingUp, Users, Eye, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { articles, categories } from "@/lib/data";
import { ReachCounter } from "@/components/reach-counter";
import { NewsletterInline } from "@/components/newsletter-inline";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const featuredArticle = articles[0];
  const restArticles = articles.slice(1, 4);

  return (
    <>
      {/* ===== SECTION 1: Hero ===== */}
      <section className="story-section flex items-center bg-np-blue-dark text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-reporters.png"
            alt="News Pinch reporters"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-np-blue-dark via-np-blue-dark/95 to-np-blue-dark/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Tagline */}
            <div className="lg:col-span-7">
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

              <p className="mt-8 text-lg text-white/50 leading-relaxed max-w-xl">
                {siteConfig.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/news" className={cn(buttonVariants({ variant: "primary", size: "lg" }))}>
                  Read Latest News <ArrowRight size={18} />
                </Link>
                <Link href="/sponsors" className={cn(buttonVariants({ variant: "outlineWhite", size: "lg" }))}>
                  Partner With Us
                </Link>
              </div>
            </div>

            {/* Right: Founders + Reach Counter */}
            <div className="lg:col-span-5 hidden lg:flex flex-col items-center gap-8">
              {/* Founders */}
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-3 border-np-yellow/40 shadow-lg shadow-np-yellow/10">
                    <Image
                      src="/images/team/abhinav.png"
                      alt="Abhinav Pandey"
                      width={112}
                      height={112}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <p className="mt-2 text-sm font-semibold text-white/80">Abhinav Pandey</p>
                  <p className="text-xs text-np-yellow/60">Co-Founder</p>
                </div>
                <div className="text-center">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-3 border-np-yellow/40 shadow-lg shadow-np-yellow/10">
                    <Image
                      src="/images/team/saurabh.png"
                      alt="Saurabh Tripathi"
                      width={112}
                      height={112}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <p className="mt-2 text-sm font-semibold text-white/80">Saurabh Tripathi</p>
                  <p className="text-xs text-np-yellow/60">Co-Founder</p>
                </div>
              </div>

              {/* Reach Counter */}
              <ReachCounter />
            </div>
          </div>

          {/* Mobile: Founders + Counter */}
          <div className="lg:hidden mt-12 space-y-8">
            <div className="flex justify-center gap-6">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-np-yellow/40">
                  <Image src="/images/team/abhinav.png" alt="Abhinav Pandey" width={80} height={80} className="w-full h-full object-cover object-top" />
                </div>
                <p className="mt-1.5 text-xs font-semibold text-white/80">Abhinav Pandey</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-np-yellow/40">
                  <Image src="/images/team/saurabh.png" alt="Saurabh Tripathi" width={80} height={80} className="w-full h-full object-cover object-top" />
                </div>
                <p className="mt-1.5 text-xs font-semibold text-white/80">Saurabh Tripathi</p>
              </div>
            </div>
            <ReachCounter />
          </div>
        </div>
      </section>

      {/* ===== Trending Bar (between sections) ===== */}
      <div className="bg-white border-b border-np-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="mx-auto max-w-7xl px-6 py-3">
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
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-np-red">Latest</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-np-gray-900 mt-1">Top Stories</h2>
            </div>
            <Link href="/news" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-np-blue hover:text-np-blue-light transition-colors group">
              View All <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Featured */}
          <Link href={`/news/${featuredArticle.category.toLowerCase().replace(/\s+/g, '-')}/${featuredArticle.slug}`} className="block mb-8">
            <div className="group relative rounded-2xl overflow-hidden bg-np-blue-dark h-[320px] sm:h-[380px]">
              <div className="absolute inset-0 bg-gradient-to-t from-np-blue-dark via-np-blue-dark/60 to-transparent z-10" />
              <div className="absolute inset-0 bg-np-blue/30 flex items-center justify-center">
                <Play size={80} className="text-white/10" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="category">{featuredArticle.category}</Badge>
                  {featuredArticle.aiAssisted && (
                    <Badge variant="ai" className="bg-white/10 border-white/20 text-white"><Sparkles size={10} /> AI</Badge>
                  )}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-np-yellow transition-colors leading-tight max-w-2xl">
                  {featuredArticle.title}
                </h3>
                <p className="mt-2 text-white/50 max-w-xl text-sm line-clamp-2">{featuredArticle.excerpt}</p>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {restArticles.map((article) => (
              <Link key={article.id} href={`/news/${article.category.toLowerCase().replace(/\s+/g, '-')}/${article.slug}`}>
                <article className="group">
                  <div className="rounded-xl bg-gradient-to-br from-np-blue/5 to-np-blue/10 h-40 flex items-center justify-center mb-3">
                    <Play size={28} className="text-np-blue/15 group-hover:text-np-blue/30 transition-colors" />
                  </div>
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
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: Stats + Newsletter ===== */}
      <section className="story-section flex flex-col bg-np-blue-dark text-white">
        {/* Stats */}
        <div className="flex-1 flex items-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
              <div>
                <Eye size={24} className="mx-auto mb-3 text-np-yellow" />
                <div className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">{siteConfig.stats.views}</div>
                <div className="text-xs uppercase tracking-widest text-white/30 mt-2">Total Views</div>
              </div>
              <div>
                <Users size={24} className="mx-auto mb-3 text-np-yellow" />
                <div className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">{siteConfig.stats.community}</div>
                <div className="text-xs uppercase tracking-widest text-white/30 mt-2">Community</div>
              </div>
              <div>
                <TrendingUp size={24} className="mx-auto mb-3 text-np-yellow" />
                <div className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">50+</div>
                <div className="text-xs uppercase tracking-widest text-white/30 mt-2">Creators</div>
              </div>
              <div>
                <Sparkles size={24} className="mx-auto mb-3 text-np-yellow" />
                <div className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">4</div>
                <div className="text-xs uppercase tracking-widest text-white/30 mt-2">Platforms</div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="px-6 lg:px-8 pb-16">
          <div className="mx-auto max-w-7xl">
            <NewsletterInline />
          </div>
        </div>
      </section>
    </>
  );
}
