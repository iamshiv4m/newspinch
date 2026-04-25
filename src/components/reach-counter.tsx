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
      className="rounded-2xl bg-gradient-to-br from-np-blue to-np-blue-dark border-2 border-np-yellow p-6 sm:p-8 shadow-[0_6px_0_0] shadow-np-yellow/30 text-white"
    >
      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-np-yellow mb-6 text-center">
        Reach Counter
      </h3>
      <div className="grid grid-cols-2 gap-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-np-yellow/70 mb-2">Views</p>
          <div className="bg-black/40 rounded-lg py-2 px-3 border border-np-yellow/30">
            <span className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-np-yellow">{siteConfig.stats.views}</span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-np-yellow/70 mb-2">Community</p>
          <div className="bg-black/40 rounded-lg py-2 px-3 border border-np-yellow/30">
            <span className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-np-yellow">{siteConfig.stats.community}</span>
          </div>
        </div>
      </div>
      <p className="text-center text-xs text-np-yellow/50 mt-5">Data from all platforms</p>
    </motion.div>
  );
}
