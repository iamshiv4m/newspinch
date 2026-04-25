import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Play, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { articles, categories } from "@/lib/data";
import { notFound } from "next/navigation";

type Params = Promise<{ category: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) return { title: "Category Not Found" };
  return {
    title: `${cat.name} News`,
    description: `Latest ${cat.name.toLowerCase()} news, reports and analysis from News Pinch.`,
  };
}

export default async function CategoryPage({ params }: { params: Params }) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) notFound();

  const categoryArticles = articles.filter(
    (a) => a.category.toLowerCase().replace(/\s+/g, "-") === category
  );

  return (
    <>
      <section className="gradient-hero text-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/news" className="inline-flex items-center gap-1 text-white/60 hover:text-white text-sm mb-4 transition-colors">
            <ArrowLeft size={16} /> All News
          </Link>
          <h1 className="font-display text-4xl sm:text-5xl font-bold">{cat.name}</h1>
          <p className="mt-2 text-white/70">{cat.count} articles</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {categoryArticles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-np-gray-500 text-lg">No articles in this category yet.</p>
              <Link href="/news" className="mt-4 inline-flex items-center gap-1 text-np-blue font-semibold hover:underline">
                <ArrowLeft size={16} /> Browse all news
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryArticles.map((article) => (
                <Link key={article.id} href={`/news/${category}/${article.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 group overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-np-blue/10 to-np-blue/5 flex items-center justify-center">
                      <Play size={40} className="text-np-blue/20 group-hover:text-np-blue/40 transition-colors" />
                    </div>
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
          )}
        </div>
      </section>
    </>
  );
}
