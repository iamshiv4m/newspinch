"use client";

import Link from "next/link";
import Image from "next/image";
import { Play, ChevronRight } from "lucide-react";
import { videos } from "@/lib/data";
import { useLanguage } from "@/components/language-provider";
import { Reveal, StaggerChildren, StaggerItem } from "@/components/animations";
import { Badge } from "@/components/ui/badge";
import { VideoPlayer } from "@/components/video-player";

export function VideoSection() {
  const { locale, t } = useLanguage();
  const featured = videos[0];
  const rest = videos.slice(1, 7);

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-np-red">
                {t.videos.eyebrow}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-np-gray-900 mt-1">
                {t.videos.title}
              </h2>
              <p className="text-np-gray-500 text-sm mt-1 max-w-lg">
                {t.videos.subtitle}
              </p>
            </div>
            <Link
              href="/videos"
              className="hidden sm:flex items-center gap-1 text-sm font-semibold text-np-blue hover:text-np-blue-light transition-colors group"
            >
              {t.videos.viewAll}{" "}
              <ChevronRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>
        </Reveal>

        {/* Featured documentary */}
        <Reveal>
          <VideoPlayer
            youtubeId={featured.youtubeId}
            title={locale === "hi" ? featured.title.hi : featured.title.en}
            thumbnail="maxres"
            className="group block relative rounded-2xl overflow-hidden bg-np-blue-dark h-[260px] sm:h-[380px] mb-8"
          >
            <Image
              src={`https://img.youtube.com/vi/${featured.youtubeId}/maxresdefault.jpg`}
              alt={locale === "hi" ? featured.title.hi : featured.title.en}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-np-red/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play size={28} className="text-white ml-1" fill="white" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="category">{t.videos.featured}</Badge>
                <Badge
                  variant="outline"
                  className="border-white/20 text-white/80 text-[10px]"
                >
                  {featured.duration}
                </Badge>
              </div>
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug max-w-2xl">
                {locale === "hi" ? featured.title.hi : featured.title.en}
              </h3>
              <p className="text-white/50 text-xs mt-2">
                {featured.views} {t.videos.views} · {featured.category}
              </p>
            </div>
          </VideoPlayer>
        </Reveal>

        {/* Grid */}
        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.08}
        >
          {rest.map((video) => (
            <StaggerItem key={video.id}>
              <VideoPlayer
                youtubeId={video.youtubeId}
                title={locale === "hi" ? video.title.hi : video.title.en}
                className="group block"
              >
                <div className="relative rounded-xl overflow-hidden aspect-video bg-np-gray-200 mb-3">
                  <Image
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={locale === "hi" ? video.title.hi : video.title.en}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="h-10 w-10 rounded-full bg-np-red/90 flex items-center justify-center">
                      <Play
                        size={18}
                        className="text-white ml-0.5"
                        fill="white"
                      />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black/75 text-white text-[10px] font-medium px-1.5 py-0.5 rounded">
                    {video.duration}
                  </span>
                </div>
                <h4 className="font-display font-bold text-sm text-np-gray-900 group-hover:text-np-blue transition-colors leading-snug line-clamp-2">
                  {locale === "hi" ? video.title.hi : video.title.en}
                </h4>
                <p className="text-[11px] text-np-gray-500 mt-1">
                  {video.views} {t.videos.views} · {video.category}
                </p>
              </VideoPlayer>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/videos"
            className="text-sm font-semibold text-np-blue hover:text-np-blue-light transition-colors"
          >
            {t.videos.viewAll} →
          </Link>
        </div>
      </div>
    </section>
  );
}
