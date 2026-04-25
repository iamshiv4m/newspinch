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
  metadataBase: new URL("https://newspinch.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "News Pinch",
    title: "News Pinch — Objectivity for citizens, powered by AI",
    description:
      "An AI-powered, creator-led news network — credible, fast, and trusted by millions across India's digital platforms.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@thenewspinch",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
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
