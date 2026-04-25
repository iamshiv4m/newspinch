import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Shield,
  Tv,
  Package,
  Download,
} from "lucide-react";
import { YoutubeIcon, InstagramIcon, FacebookIcon, XIcon } from "@/components/icons";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "For Sponsors",
  description:
    "Partner with News Pinch — India's fastest-growing AI-powered creator-led news network.",
};

const valueProps = [
  {
    icon: Tv,
    title: "Creator-led Formats",
    description:
      "Explainers, ground reports, series — content that resonates with real audiences.",
  },
  {
    icon: BarChart3,
    title: "Reach & Impact",
    description:
      "332M+ views across platforms. Your brand in front of millions of engaged Indians.",
  },
  {
    icon: Shield,
    title: "Brand Safety",
    description:
      "Transparent labeling, editorial review — your brand associated with trusted journalism.",
  },
  {
    icon: Package,
    title: "Flexible Packages",
    description:
      "From ₹2L boosts to ₹25L flagships — find a partnership that fits your goals.",
  },
];

const socialLinks = [
  {
    icon: YoutubeIcon,
    label: "YouTube",
    href: siteConfig.links.youtube,
    color: "hover:bg-red-500",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: siteConfig.links.instagram,
    color: "hover:bg-pink-500",
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    href: siteConfig.links.facebook,
    color: "hover:bg-blue-600",
  },
  {
    icon: XIcon,
    label: "X (Twitter)",
    href: siteConfig.links.twitter,
    color: "hover:bg-gray-800",
  },
];

export default function SponsorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-yellow py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-np-blue-dark">
            Why Partner with <span className="text-np-red">News Pinch</span>?
          </h1>
          <p className="mt-4 text-lg text-np-blue-dark/70 max-w-2xl mx-auto">
            Reach millions of engaged Indians through creator-led, AI-powered
            journalism that people trust.
          </p>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valueProps.map((prop) => (
              <Card
                key={prop.title}
                className="hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <CardContent className="p-6 flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-np-blue/10">
                    <prop.icon size={24} className="text-np-blue" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-np-gray-900">
                      {prop.title}
                    </h3>
                    <p className="mt-1 text-sm text-np-gray-500">
                      {prop.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 sm:py-20 bg-np-blue text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-center mb-4">
            Sponsorship Packages
          </h2>
          <p className="text-center text-white/60 mb-12 max-w-lg mx-auto">
            Choose a package that aligns with your brand goals and budget.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.sponsorPackages.map((pkg, i) => (
              <div
                key={pkg.name}
                className={cn(
                  "rounded-2xl p-6",
                  i === 2
                    ? "bg-np-yellow text-np-blue-dark ring-2 ring-np-yellow"
                    : "bg-white/10 backdrop-blur-sm border border-white/10"
                )}
              >
                {i === 2 && (
                  <Badge className="mb-3 bg-np-blue text-white">
                    Most Popular
                  </Badge>
                )}
                <h3 className="font-display font-bold text-lg">{pkg.name}</h3>
                <div className="font-display text-3xl font-bold mt-2">
                  {pkg.price}
                </div>
                <ul className="mt-4 space-y-2">
                  {pkg.features.map((f) => (
                    <li key={f} className="text-sm flex items-start gap-2">
                      <span className={i === 2 ? "text-np-blue" : "text-np-yellow"}>
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/sponsors/contact"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
            >
              Get Started <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Handles */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-np-blue text-center mb-8">
            Our Social Handles
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-3 rounded-full border-2 border-np-blue/10 bg-white px-6 py-3 font-medium text-np-gray-900 transition-all hover:text-white hover:border-transparent hover:shadow-md",
                  s.color
                )}
              >
                <s.icon size={20} />
                {s.label}
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/sponsorship-proposal.pdf"
              className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
            >
              <Download size={18} />
              Download Sponsorship Proposal
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
