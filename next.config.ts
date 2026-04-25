import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/homepage", destination: "/", permanent: true },
      { source: "/homepage.html", destination: "/", permanent: true },
      { source: "/for_sponsors", destination: "/sponsors", permanent: true },
      { source: "/join_the_team", destination: "/team", permanent: true },
      { source: "/contact_us", destination: "/contact", permanent: true },
      {
        source: "/sponsor_with_us.html",
        destination: "/sponsors/contact",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
};

export default nextConfig;
