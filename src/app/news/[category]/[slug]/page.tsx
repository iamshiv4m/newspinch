import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Share2, Clock, User, Sparkles, Calendar, Bookmark } from "lucide-react";
import { XIcon, FacebookIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { articles } from "@/lib/data";
import { notFound } from "next/navigation";

type Params = Promise<{ category: string; slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const relatedArticles = articles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <>
      {/* Article Header */}
      <section className="gradient-hero text-white py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/news" className="inline-flex items-center gap-1 text-white/60 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft size={16} /> Back to News
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="category">{article.category}</Badge>
            {article.aiAssisted && (
              <Badge variant="ai" className="bg-white/10 border-white/20 text-white">
                <Sparkles size={10} /> AI Assisted
              </Badge>
            )}
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {article.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/70">
            <span className="flex items-center gap-1.5">
              <User size={14} /> {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {article.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-10">
            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {/* AI TL;DR */}
              {article.aiAssisted && (
                <div className="not-prose mb-8 rounded-xl bg-np-red/5 border border-np-red/10 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles size={16} className="text-np-red" />
                    <span className="font-display font-semibold text-sm text-np-red">AI-Generated TL;DR</span>
                  </div>
                  <p className="text-sm text-np-gray-700">{article.excerpt}</p>
                </div>
              )}

              <p className="text-np-gray-700 leading-relaxed text-lg">
                {article.excerpt}
              </p>

              <p className="text-np-gray-700 leading-relaxed">
                In an era where information moves at the speed of light, the role of journalism is evolving rapidly. Traditional newsrooms are embracing new technologies while maintaining the core principles of accuracy and fairness that define quality journalism.
              </p>

              <h2 className="font-display text-2xl font-bold text-np-blue mt-8 mb-4">The Changing Landscape</h2>

              <p className="text-np-gray-700 leading-relaxed">
                Across India, digital-first news platforms are leveraging AI tools to enhance their reporting capabilities. From automated transcription services to AI-powered fact-checking systems, technology is becoming an indispensable ally for modern journalists.
              </p>

              <p className="text-np-gray-700 leading-relaxed">
                However, the human element remains irreplaceable. Editorial judgment, ethical considerations, and the ability to connect with communities on the ground — these are qualities that no algorithm can replicate. The most successful news platforms understand this balance.
              </p>

              <h2 className="font-display text-2xl font-bold text-np-blue mt-8 mb-4">What This Means for You</h2>

              <p className="text-np-gray-700 leading-relaxed">
                As consumers of news, understanding how your news is made helps you make better decisions about what to trust. Platforms that are transparent about their processes — including the use of AI — demonstrate a commitment to accountability that benefits everyone.
              </p>

              <blockquote className="border-l-4 border-np-yellow bg-np-yellow/5 py-4 px-6 my-8 italic text-np-gray-700">
                &ldquo;The future of journalism lies not in choosing between human and artificial intelligence, but in harnessing both to serve the public interest.&rdquo;
              </blockquote>

              <p className="text-np-gray-700 leading-relaxed">
                At News Pinch, we believe this story represents the broader transformation happening across Indian media — and we&apos;re committed to keeping you informed every step of the way.
              </p>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block space-y-4 sticky top-24 self-start">
              <p className="text-xs font-semibold uppercase tracking-wider text-np-gray-500">Share</p>
              <div className="flex flex-col gap-2">
                <button className="flex items-center gap-2 rounded-lg bg-np-bg p-2.5 text-sm text-np-gray-700 hover:bg-np-blue hover:text-white transition-colors">
                  <XIcon size={16} /> Twitter
                </button>
                <button className="flex items-center gap-2 rounded-lg bg-np-bg p-2.5 text-sm text-np-gray-700 hover:bg-blue-600 hover:text-white transition-colors">
                  <FacebookIcon size={16} /> Facebook
                </button>
                <button className="flex items-center gap-2 rounded-lg bg-np-bg p-2.5 text-sm text-np-gray-700 hover:bg-np-yellow hover:text-np-blue-dark transition-colors">
                  <Share2 size={16} /> Copy Link
                </button>
                <button className="flex items-center gap-2 rounded-lg bg-np-bg p-2.5 text-sm text-np-gray-700 hover:bg-np-blue hover:text-white transition-colors">
                  <Bookmark size={16} /> Save
                </button>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-12 sm:py-16 bg-np-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-np-blue mb-8">Related Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((a) => (
              <Link key={a.id} href={`/news/${a.category.toLowerCase().replace(/\s+/g, '-')}/${a.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 group">
                  <CardContent className="p-5">
                    <Badge variant="category" className="mb-3">{a.category}</Badge>
                    <h3 className="font-display font-semibold text-np-gray-900 group-hover:text-np-blue transition-colors line-clamp-2">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-sm text-np-gray-500 line-clamp-2">{a.excerpt}</p>
                    <div className="mt-3 text-xs text-np-gray-500">{a.readTime}</div>
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
