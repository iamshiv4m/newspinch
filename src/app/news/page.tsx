import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArticleThumbnail } from "@/components/article-thumbnail";
import { articles, categories } from "@/lib/data";

export const metadata: Metadata = {
  title: "News",
  description: "Latest news, explainers, and ground reports from News Pinch — India's AI-powered news network.",
};

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold">
            Latest <span className="text-np-yellow">News</span>
          </h1>
          <p className="mt-3 text-white/70 max-w-lg">
            Breaking stories, in-depth explainers, and on-ground reports from across India.
          </p>

          {/* Search Bar */}
          <div className="mt-6 max-w-md">
            <div className="flex items-center gap-2 rounded-lg bg-white/10 border border-white/20 px-4 py-2.5">
              <Search size={18} className="text-white/50" />
              <input
                type="text"
                placeholder="Search articles..."
                className="bg-transparent text-white placeholder:text-white/40 outline-none flex-1 text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-np-gray-200 bg-white sticky top-16 z-40">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            <Link
              href="/news"
              className="shrink-0 rounded-full bg-np-blue px-4 py-1.5 text-sm font-medium text-white"
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/news/${cat.slug}`}
                className="shrink-0 rounded-full bg-np-bg px-4 py-1.5 text-sm font-medium text-np-gray-700 hover:bg-np-yellow/20 hover:text-np-blue transition-colors"
              >
                {cat.name} ({cat.count})
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured Article */}
          <Link href={`/news/${articles[0].category.toLowerCase().replace(/\s+/g, '-')}/${articles[0].slug}`}>
            <Card className="mb-8 overflow-hidden hover:shadow-lg transition-all group">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <ArticleThumbnail size="hero" />
                <CardContent className="p-6 sm:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="category">{articles[0].category}</Badge>
                    {articles[0].aiAssisted && (
                      <Badge variant="ai"><Sparkles size={10} /> AI Assisted</Badge>
                    )}
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-np-gray-900 group-hover:text-np-blue transition-colors">
                    {articles[0].title}
                  </h2>
                  <p className="mt-3 text-np-gray-500">{articles[0].excerpt}</p>
                  <div className="mt-4 flex items-center gap-4 text-sm text-np-gray-500">
                    <span className="font-medium">{articles[0].author}</span>
                    <span>{articles[0].date}</span>
                    <span>{articles[0].readTime}</span>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>

          {/* Rest of articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article) => (
              <Link key={article.id} href={`/news/${article.category.toLowerCase().replace(/\s+/g, '-')}/${article.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 group overflow-hidden">
                  <ArticleThumbnail size="md" />
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="category">{article.category}</Badge>
                      {article.aiAssisted && (
                        <Badge variant="ai"><Sparkles size={10} /> AI</Badge>
                      )}
                    </div>
                    <h3 className="font-display font-semibold text-lg text-np-gray-900 group-hover:text-np-blue transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-np-gray-500 line-clamp-2">{article.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between text-xs text-np-gray-500">
                      <span>{article.author}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
