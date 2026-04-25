import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingCTA } from "@/components/floating-cta";
import { PageTransition } from "@/components/page-transition";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "News Pinch — Objectivity for citizens, powered by AI",
    template: "%s | News Pinch",
  },
  description:
    "An AI-powered, creator-led news network — credible, fast, and trusted by millions across India's digital platforms.",
  keywords: [
    "News Pinch",
    "Indian news",
    "AI news",
    "digital news India",
    "creator-led journalism",
    "ground reports India",
    "Hindi news",
    "AI-powered news",
    "fact-checked news",
  ],
  authors: [
    { name: "Abhinav Pandey" },
    { name: "Saurabh Tripathi" },
  ],
  creator: "NewsPinch Network Pvt. Ltd.",
  publisher: "NewsPinch Network Pvt. Ltd.",
  metadataBase: new URL("https://newspinch.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "News Pinch",
    title: "News Pinch — Objectivity for citizens, powered by AI",
    description:
      "An AI-powered, creator-led news network — credible, fast, and trusted by millions across India's digital platforms.",
    url: "https://newspinch.in",
  },
  twitter: {
    card: "summary_large_image",
    site: "@thenewspinch",
    creator: "@thenewspinch",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification-code-here",
  },
  category: "News",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsMediaOrganization",
  name: "News Pinch",
  alternateName: "NewsPinch",
  url: "https://newspinch.in",
  logo: "https://newspinch.in/images/logo.png",
  description:
    "An AI-powered, creator-led news network — credible, fast, and trusted by millions across India's digital platforms.",
  foundingDate: "2025-08-11",
  founders: [
    { "@type": "Person", name: "Abhinav Pandey" },
    { "@type": "Person", name: "Saurabh Tripathi" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.youtube.com/@TheNewsPinch",
    "https://www.instagram.com/thenewspinch/",
    "https://www.facebook.com/thenewspinch/",
    "https://x.com/thenewspinch",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Business",
      email: "business@newspinch.in",
    },
    {
      "@type": "ContactPoint",
      contactType: "Editorial",
      email: "thenewspinch@gmail.com",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a237e" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <SmoothScroll />
        <Navbar />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
