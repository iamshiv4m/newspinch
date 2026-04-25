"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

export function FloatingCTA() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 left-6 z-50"
    >
      <Link
        href="/sponsors/contact"
        className="group flex items-center gap-2 rounded-full bg-np-yellow pl-5 pr-4 py-3 shadow-lg shadow-np-yellow/25 hover:shadow-xl hover:shadow-np-yellow/30 hover:scale-105 transition-all duration-300"
      >
        <span className="font-display text-sm font-bold text-np-blue-dark whitespace-nowrap">
          {t.common.sponsorCta}
        </span>
        <ArrowUpRight
          size={16}
          className="text-np-blue-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        />
      </Link>
    </motion.div>
  );
}
