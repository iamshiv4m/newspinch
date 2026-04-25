import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home, Search, Newspaper } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <div className="relative inline-block mb-8">
          <span className="font-display text-[10rem] sm:text-[12rem] font-black leading-none text-np-blue/5">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="News Pinch"
              width={80}
              height={77}
              className="h-20 w-auto opacity-60"
            />
          </div>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl font-bold text-np-gray-900">
          Page Not Found
        </h1>
        <p className="mt-3 text-np-gray-500 leading-relaxed max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist, has been moved, or is temporarily unavailable.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-np-blue px-6 py-3 font-semibold text-white hover:bg-np-blue-light transition-colors shadow-md"
          >
            <Home size={16} /> Go Home
          </Link>
          <Link
            href="/news"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-np-blue text-np-blue px-6 py-3 font-semibold hover:bg-np-blue hover:text-white transition-colors"
          >
            <Newspaper size={16} /> Browse News
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-np-gray-200">
          <p className="text-xs text-np-gray-500 mb-3">Looking for something specific?</p>
          <div className="flex items-center gap-2 max-w-xs mx-auto rounded-lg bg-white border border-np-gray-300 px-4 py-2.5">
            <Search size={16} className="text-np-gray-500 shrink-0" />
            <input
              type="text"
              placeholder="Search articles..."
              className="bg-transparent text-sm outline-none flex-1 text-np-gray-700 placeholder:text-np-gray-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
