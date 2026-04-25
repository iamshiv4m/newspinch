import Link from "next/link";
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
    <footer className="bg-np-blue text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-np-yellow">
                <span className="font-display text-sm font-black leading-none text-np-blue-dark">NP</span>
              </div>
              <span className="font-display text-xl font-bold">
                News<span className="text-np-yellow">Pinch</span>
              </span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4 text-np-yellow">Quick Links</h3>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4 text-np-yellow">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                {siteConfig.address}
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <div>
                  <p>Business: {siteConfig.emails.business}</p>
                  <p>Editorial: {siteConfig.emails.editorial}</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4 text-np-yellow">Follow Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-np-yellow hover:text-np-blue-dark transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} NewsPinch Network Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Assisted by AI. Verified by Editors.
          </p>
        </div>
      </div>
    </footer>
  );
}
