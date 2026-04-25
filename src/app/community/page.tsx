import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { IndiaMap } from "@/components/india-map";
import { YoutubeIcon, InstagramIcon, FacebookIcon, XIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Community",
  description: "News Pinch reaches millions across India — explore our audience map and social media platforms.",
};

const socialLinks = [
  { icon: YoutubeIcon, label: "YouTube", href: siteConfig.links.youtube, followers: "800K+", color: "bg-red-500" },
  { icon: InstagramIcon, label: "Instagram", href: siteConfig.links.instagram, followers: "250K+", color: "bg-pink-500" },
  { icon: FacebookIcon, label: "Facebook", href: siteConfig.links.facebook, followers: "100K+", color: "bg-blue-600" },
  { icon: XIcon, label: "X (Twitter)", href: siteConfig.links.twitter, followers: "50K+", color: "bg-gray-800" },
];

export default function CommunityPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold">
            Our <span className="text-np-yellow">Community</span>
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Millions of viewers trust News Pinch for credible, AI-powered, creator-led journalism.
          </p>
        </div>
      </section>

      {/* India Map Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-np-blue text-center mb-4">Audience Reach Across India</h2>
          <p className="text-center text-np-gray-500 mb-10">Hover over states to see engagement levels</p>
          
          <IndiaMap />

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-np-blue-dark" />
              <span className="text-sm text-np-gray-700">Deep Blue: Strongest viewership & engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-np-blue" />
              <span className="text-sm text-np-gray-700">Medium Blue: Growing audience presence</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-np-blue/40" />
              <span className="text-sm text-np-gray-700">Light Blue: Emerging interest & new viewers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Platforms */}
      <section className="py-16 sm:py-20 bg-np-blue text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-center mb-12">
            Follow Us on <span className="text-np-yellow">Social Media</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 p-6 text-center hover:bg-white/20 transition-all hover:-translate-y-1"
              >
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-full ${s.color} mb-4`}>
                  <s.icon size={24} className="text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg">{s.label}</h3>
                <p className="text-2xl font-bold text-np-yellow mt-1">{s.followers}</p>
                <p className="text-xs text-white/50 mt-1">followers</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
