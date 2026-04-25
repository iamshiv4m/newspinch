"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoPlayerProps {
  youtubeId: string;
  title: string;
  thumbnail?: "maxres" | "hq";
  className?: string;
  children?: React.ReactNode;
}

export function VideoPlayer({
  youtubeId,
  title,
  thumbnail = "hq",
  className = "",
  children,
}: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const thumbUrl =
    thumbnail === "maxres"
      ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
      : `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  return (
    <>
      <button
        onClick={() => setPlaying(true)}
        className={`relative cursor-pointer text-left w-full ${className}`}
        aria-label={`Play ${title}`}
      >
        {children}
      </button>

      <AnimatePresence>
        {playing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-9999 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              <button
                onClick={() => setPlaying(false)}
                className="absolute top-3 right-3 h-9 w-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Close video"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
