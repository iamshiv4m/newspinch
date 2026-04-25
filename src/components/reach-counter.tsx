"use client";

import { motion } from "framer-motion";
import { Eye, Users } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function ReachCounter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-10"
    >
      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-np-yellow/80 mb-8">
        Reach Counter
      </h3>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <Eye size={20} className="text-np-yellow/60 mb-3" />
          <div className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">{siteConfig.stats.views}</div>
          <div className="text-xs uppercase tracking-widest text-white/30 mt-2">Views</div>
        </div>
        <div>
          <Users size={20} className="text-np-yellow/60 mb-3" />
          <div className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">{siteConfig.stats.community}</div>
          <div className="text-xs uppercase tracking-widest text-white/30 mt-2">Community</div>
        </div>
      </div>
      <div className="mt-8 pt-4 border-t border-white/5">
        <p className="text-xs text-white/25">Data aggregated from all platforms</p>
      </div>
    </motion.div>
  );
}
