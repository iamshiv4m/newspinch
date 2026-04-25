export const siteConfig = {
  name: "News Pinch",
  tagline: "Objectivity for citizens, powered by AI, delivered by creators.",
  description:
    "An AI-powered, creator-led news network — credible, fast, and trusted by millions across India's digital platforms.",
  url: "https://newspinch.in",
  ogImage: "/og-image.jpg",
  links: {
    youtube: "https://www.youtube.com/@TheNewsPinch",
    instagram: "https://www.instagram.com/thenewspinch/",
    facebook: "https://www.facebook.com/thenewspinch/",
    twitter: "https://x.com/thenewspinch",
  },
  emails: {
    business: "business@newspinch.in",
    editorial: "thenewspinch@gmail.com",
  },
  address: "Noida, Uttar Pradesh",
  stats: {
    views: "332M+",
    community: "1.2M+",
  },
  founders: [
    {
      name: "Abhinav Pandey",
      role: "Co-Founder",
      image: "/team/abhinav.jpg",
    },
    {
      name: "Saurabh Tripathi",
      role: "Co-Founder",
      image: "/team/saurabh.jpg",
    },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "For Sponsors", href: "/sponsors" },
    { label: "Join The Team", href: "/team" },
    { label: "Community", href: "/community" },
    { label: "Trust", href: "/trust" },
    { label: "Contact Us", href: "/contact" },
  ],
  sponsorPackages: [
    { name: "Starter Boost", price: "₹2L", features: ["Social media mention", "1 branded post", "Analytics report"] },
    { name: "Growth Pack", price: "₹5L", features: ["3 branded posts", "Story integration", "Creator shoutout", "Monthly report"] },
    { name: "Impact Partner", price: "₹10L", features: ["Weekly branded series", "Dedicated creator", "Cross-platform push", "Quarterly strategy call"] },
    { name: "Flagship", price: "₹25L", features: ["Full campaign ownership", "Dedicated team", "Custom formats", "Real-time dashboard", "Priority placement"] },
  ],
} as const;
