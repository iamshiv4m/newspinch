"use client";

import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      onClick={toggleLocale}
      className={cn(
        "relative flex items-center h-8 w-16 rounded-full bg-np-gray-100 border border-np-gray-200 cursor-pointer transition-colors hover:bg-np-gray-200",
        className,
      )}
      aria-label={`Switch to ${locale === "en" ? "Hindi" : "English"}`}
    >
      <motion.div
        className="absolute h-6 w-6 rounded-full bg-np-blue shadow-sm"
        animate={{ x: locale === "en" ? 4 : 32 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      <span
        className={cn(
          "relative z-10 w-8 text-center text-xs font-bold",
          locale === "en" ? "text-white" : "text-np-gray-500",
        )}
      >
        EN
      </span>
      <span
        className={cn(
          "relative z-10 w-8 text-center text-xs font-bold",
          locale === "hi" ? "text-white" : "text-np-gray-500",
        )}
      >
        हि
      </span>
    </button>
  );
}
