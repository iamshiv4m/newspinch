"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-np-gray-200/50 shadow-md"
          : "bg-white/80 backdrop-blur-xl border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 sm:h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-1 shrink-0">
          <Image
            src="/images/logo.png"
            alt="News Pinch"
            width={48}
            height={46}
            className="h-11 sm:h-12 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-0.5">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                pathname === item.href
                  ? "bg-np-blue text-white shadow-sm"
                  : "text-np-gray-700 hover:text-np-blue hover:bg-np-blue/5"
              )}
            >
              {item.label}
              {pathname === item.href && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 bg-np-blue rounded-lg -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-np-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <motion.div
            animate={{ rotate: mobileOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-np-gray-200 bg-white/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col p-4 gap-1">
              {siteConfig.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                      pathname === item.href
                        ? "bg-np-blue text-white"
                        : "text-np-gray-700 hover:bg-np-blue/5"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
