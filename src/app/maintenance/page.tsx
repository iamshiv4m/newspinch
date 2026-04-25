import type { Metadata } from "next";
import Image from "next/image";
import { Wrench, Clock, Mail } from "lucide-react";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Under Maintenance",
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <div className="relative mb-8">
          <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-np-yellow/10 mb-2">
            <Wrench size={40} className="text-np-yellow animate-spin-slow" />
          </div>
        </div>

        <Image
          src="/images/logo.png"
          alt="News Pinch"
          width={64}
          height={62}
          className="h-16 w-auto mx-auto mb-6"
        />

        <h1 className="font-display text-3xl sm:text-4xl font-bold text-np-gray-900">
          We&apos;ll Be Right Back
        </h1>
        <p className="mt-3 text-np-gray-500 leading-relaxed max-w-md mx-auto">
          We&apos;re performing scheduled maintenance to bring you an even better experience. We&apos;ll be back shortly.
        </p>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-np-blue/5 border border-np-blue/10 px-5 py-2.5">
          <Clock size={16} className="text-np-blue" />
          <span className="text-sm font-medium text-np-blue">Estimated downtime: ~30 minutes</span>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-sm mx-auto">
          <div className="rounded-xl bg-white border border-np-gray-200 p-4 text-center">
            <Mail size={20} className="mx-auto mb-2 text-np-gray-500" />
            <p className="text-xs text-np-gray-500">Business</p>
            <p className="text-sm font-medium text-np-gray-900">{siteConfig.emails.business}</p>
          </div>
          <div className="rounded-xl bg-white border border-np-gray-200 p-4 text-center">
            <Mail size={20} className="mx-auto mb-2 text-np-gray-500" />
            <p className="text-xs text-np-gray-500">Editorial</p>
            <p className="text-sm font-medium text-np-gray-900">{siteConfig.emails.editorial}</p>
          </div>
        </div>

        <p className="mt-8 text-xs text-np-gray-500">
          Follow us on social media for updates during the maintenance.
        </p>
      </div>
    </section>
  );
}
