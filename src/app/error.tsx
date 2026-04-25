"use client";

import { useEffect } from "react";
import Image from "next/image";
import { RefreshCw, Home, AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-np-red/10 mb-6">
          <AlertTriangle size={36} className="text-np-red" />
        </div>

        <h1 className="font-display text-3xl sm:text-4xl font-bold text-np-gray-900">
          Something Went Wrong
        </h1>
        <p className="mt-3 text-np-gray-500 leading-relaxed max-w-md mx-auto">
          We encountered an unexpected error. Our team has been notified and is working on a fix.
        </p>

        {error.digest && (
          <p className="mt-2 text-xs text-np-gray-500 font-mono bg-np-gray-100 rounded px-3 py-1 inline-block">
            Error ID: {error.digest}
          </p>
        )}

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-np-blue px-6 py-3 font-semibold text-white hover:bg-np-blue-light transition-colors shadow-md cursor-pointer"
          >
            <RefreshCw size={16} /> Try Again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-np-blue text-np-blue px-6 py-3 font-semibold hover:bg-np-blue hover:text-white transition-colors"
          >
            <Home size={16} /> Go Home
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3 text-np-gray-500">
          <Image
            src="/images/logo.png"
            alt="News Pinch"
            width={28}
            height={27}
            className="h-7 w-auto opacity-40"
          />
          <span className="text-xs">Assisted by AI. Verified by Editors.</span>
        </div>
      </div>
    </section>
  );
}
