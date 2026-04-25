"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { videos } from "@/lib/data";
import { useLanguage } from "@/components/language-provider";
import { Badge } from "@/components/ui/badge";
import { Reveal, StaggerChildren, StaggerItem } from "@/components/animations";
import { VideoPlayer } from "@/components/video-player";

export function VideosPageClient() {
  const { locale, t } = useLanguage();

  return (
    <div className="bg-np-bg min-h-screen">
      <section className="pt-24 pb-12 bg-np-blue-dark text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-np-yellow/60">
              {t.videos.eyebrow}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold mt-2">
              {t.videos.page.title}
            </h1>
            <p className="text-white/50 mt-3 max-w-lg text-sm">
              {t.videos.page.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerChildren
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.08}
          >
            {videos.map((video) => (
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
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="h-12 w-12 rounded-full bg-np-red/90 flex items-center justify-center shadow-xl">
                        <Play
                          size={22}
                          className="text-white ml-0.5"
                          fill="white"
                        />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black/75 text-white text-[10px] font-medium px-1.5 py-0.5 rounded">
                      {video.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="category" className="text-[10px]">
                      {video.category}
                    </Badge>
                  </div>
                  <h3 className="font-display font-bold text-sm text-np-gray-900 group-hover:text-np-blue transition-colors leading-snug line-clamp-2">
                    {locale === "hi" ? video.title.hi : video.title.en}
                  </h3>
                  <p className="text-[11px] text-np-gray-500 mt-1">
                    {video.views} {t.videos.views}
                  </p>
                </VideoPlayer>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </div>
  );
}
