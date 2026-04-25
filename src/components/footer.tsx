import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { MapPin, Mail } from "lucide-react";
import { YoutubeIcon, InstagramIcon, FacebookIcon, XIcon } from "@/components/icons";

const socialLinks = [
  { icon: YoutubeIcon, href: siteConfig.links.youtube, label: "YouTube" },
  { icon: InstagramIcon, href: siteConfig.links.instagram, label: "Instagram" },
  { icon: FacebookIcon, href: siteConfig.links.facebook, label: "Facebook" },
  { icon: XIcon, href: siteConfig.links.twitter, label: "X" },
];

export function Footer() {
  return (
    <footer className="bg-np-blue-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="News Pinch"
                width={64}
                height={62}
                className="h-16 w-auto brightness-110"
              />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-np-yellow mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/60 hover:text-np-yellow transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-np-yellow mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={16} className="mt-0.5 shrink-0 text-np-yellow/70" />
                {siteConfig.address}
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Mail size={16} className="mt-0.5 shrink-0 text-np-yellow/70" />
                <div>
                  <p>Business: {siteConfig.emails.business}</p>
                  <p className="mt-1">Editorial: {siteConfig.emails.editorial}</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-np-yellow mb-5">Follow Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-np-yellow hover:text-np-blue-dark transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} NewsPinch Network Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-white/30 flex items-center gap-1">
            Assisted by AI. Verified by Editors.
          </p>
        </div>
      </div>
    </footer>
  );
}
