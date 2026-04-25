import Link from "next/link";
import { ArrowLeft, Newspaper } from "lucide-react";

export default function ArticleNotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-np-blue/10 mb-6">
          <Newspaper size={28} className="text-np-blue" />
        </div>
        <h1 className="font-display text-2xl font-bold text-np-gray-900">Article Not Found</h1>
        <p className="mt-3 text-np-gray-500">
          This article may have been removed, renamed, or is no longer available.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/news"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-np-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-np-blue-light transition-colors"
          >
            <ArrowLeft size={14} /> Back to News
          </Link>
        </div>
      </div>
    </section>
  );
}
