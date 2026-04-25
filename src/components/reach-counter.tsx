"use client";

import { motion } from "framer-motion";
import { Eye, Users } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function ReachCounter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg p-8"
    >
      <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-np-yellow mb-6">
        Reach Counter
      </h3>
      <div className="grid grid-cols-2 gap-8">
        <div className="text-center">
          <Eye size={32} className="mx-auto mb-2 text-np-yellow" />
          <div className="font-display text-4xl sm:text-5xl font-bold">
            {siteConfig.stats.views}
          </div>
          <div className="text-sm text-white/60 mt-1">Views</div>
        </div>
        <div className="text-center">
          <Users size={32} className="mx-auto mb-2 text-np-yellow" />
          <div className="font-display text-4xl sm:text-5xl font-bold">
            {siteConfig.stats.community}
          </div>
          <div className="text-sm text-white/60 mt-1">Community</div>
        </div>
      </div>
      <p className="text-center text-xs text-white/40 mt-6">
        Data from all platforms
      </p>
    </motion.div>
  );
}
