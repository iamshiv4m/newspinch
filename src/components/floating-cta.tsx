"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingCTA() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 left-6 z-50"
    >
      <Link
        href="/sponsors/contact"
        className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-np-yellow shadow-lg hover:shadow-xl hover:scale-105 transition-all group"
      >
        <span className="font-display text-xs font-bold text-np-blue-dark leading-tight text-center">
          Sponsor
          <br />
          with Us
        </span>
        <ArrowUpRight size={14} className="text-np-red mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </Link>
    </motion.div>
  );
}
