import Link from "next/link";
import {
  ArrowRight,
  Play,
  Sparkles,
  TrendingUp,
  Users,
  Eye,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { articles, categories } from "@/lib/data";
import { ReachCounter } from "@/components/reach-counter";
import { NewsletterInline } from "@/components/newsletter-inline";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge
                variant="ai"
                className="mb-6 bg-white/10 text-white border-white/20"
              >
                <Sparkles size={14} />
                AI-Powered News Network
              </Badge>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Objectivity for citizens,{" "}
                <span className="text-np-yellow">powered by </span>
                <span className="text-np-red">AI</span>
                <span className="text-np-yellow">,</span>
                <br />
                <span className="text-np-yellow">delivered by creators.</span>
              </h1>
              <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-lg">
                {siteConfig.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/news"
                  className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
                >
                  Read Latest News <ArrowRight size={18} />
                </Link>
                <Link
                  href="/sponsors"
                  className={cn(buttonVariants({ variant: "outlineWhite", size: "lg" }))}
                >
                  Partner With Us
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <ReachCounter />
            </div>
          </div>

          {/* Mobile Reach Counter */}
          <div className="lg:hidden mt-12">
            <ReachCounter />
          </div>
        </div>
      </section>

      {/* Category Rail */}
      <section className="border-b border-np-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
            <span className="text-sm font-semibold text-np-gray-500 shrink-0">
              Trending:
            </span>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/news/${cat.slug}`}
                className="shrink-0 rounded-full bg-np-bg px-4 py-1.5 text-sm font-medium text-np-gray-700 hover:bg-np-yellow/20 hover:text-np-blue transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl font-bold text-np-blue">
                Latest Stories
              </h2>
              <p className="mt-2 text-np-gray-500">
                Breaking news and in-depth reports from across India
              </p>
            </div>
            <Link
              href="/news"
              className="hidden sm:flex items-center gap-1 text-sm font-semibold text-np-blue hover:text-np-blue-light transition-colors"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/news/${article.category.toLowerCase().replace(/\s+/g, "-")}/${article.slug}`}
              >
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 group overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-np-blue/10 to-np-blue/5 flex items-center justify-center">
                    <Play
                      size={40}
                      className="text-np-blue/20 group-hover:text-np-blue/40 transition-colors"
                    />
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="category">{article.category}</Badge>
                      {article.aiAssisted && (
                        <Badge variant="ai">
                          <Sparkles size={10} /> AI
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-display font-semibold text-lg text-np-gray-900 group-hover:text-np-blue transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-np-gray-500 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-np-gray-500">
                      <span>{article.author}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/news"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              View All Stories <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-np-blue text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Eye size={28} className="mx-auto mb-2 text-np-yellow" />
              <div className="font-display text-3xl font-bold">
                {siteConfig.stats.views}
              </div>
              <div className="text-sm text-white/60 mt-1">Total Views</div>
            </div>
            <div>
              <Users size={28} className="mx-auto mb-2 text-np-yellow" />
              <div className="font-display text-3xl font-bold">
                {siteConfig.stats.community}
              </div>
              <div className="text-sm text-white/60 mt-1">Community</div>
            </div>
            <div>
              <TrendingUp size={28} className="mx-auto mb-2 text-np-yellow" />
              <div className="font-display text-3xl font-bold">50+</div>
              <div className="text-sm text-white/60 mt-1">Creators</div>
            </div>
            <div>
              <Sparkles size={28} className="mx-auto mb-2 text-np-yellow" />
              <div className="font-display text-3xl font-bold">4</div>
              <div className="text-sm text-white/60 mt-1">Platforms</div>
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
