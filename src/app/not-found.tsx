import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center py-32 px-4">
      <h1 className="font-display text-8xl font-bold text-np-blue">404</h1>
      <p className="mt-4 text-xl text-np-gray-500">Page not found</p>
      <p className="mt-2 text-np-gray-500">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-np-blue px-6 py-3 font-semibold text-white hover:bg-np-blue-light transition-colors"
      >
        <ArrowLeft size={16} /> Back to Home
      </Link>
    </section>
  );
}
