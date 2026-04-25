export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  aiAssisted: boolean;
}

export interface Category {
  name: string;
  slug: string;
  count: number;
}

export const categories: Category[] = [
  { name: "Politics", slug: "politics", count: 42 },
  { name: "Technology", slug: "technology", count: 28 },
  { name: "Ground Reports", slug: "ground-reports", count: 35 },
  { name: "Explainers", slug: "explainers", count: 19 },
  { name: "India", slug: "india", count: 56 },
  { name: "World", slug: "world", count: 23 },
];

export const articles: Article[] = [
  {
    id: "1",
    title: "How AI is Reshaping India's Newsrooms in 2026",
    excerpt: "From automated fact-checking to real-time translation, artificial intelligence is transforming how Indian media houses operate.",
    category: "Technology",
    author: "Abhinav Pandey",
    date: "2026-04-24",
    readTime: "5 min read",
    image: "/articles/ai-newsroom.jpg",
    slug: "ai-reshaping-india-newsrooms-2026",
    aiAssisted: true,
  },
  {
    id: "2",
    title: "Ground Report: Farmer Protests in Western UP Enter Third Week",
    excerpt: "Our ground team reports from Muzaffarnagar as farmers demand better MSP implementation and water resource management.",
    category: "Ground Reports",
    author: "Saurabh Tripathi",
    date: "2026-04-23",
    readTime: "8 min read",
    image: "/articles/farmer-protests.jpg",
    slug: "farmer-protests-western-up-third-week",
    aiAssisted: false,
  },
  {
    id: "3",
    title: "Explained: India's New Digital Media Regulations 2026",
    excerpt: "Breaking down the key provisions of the latest digital media framework and what it means for creators and platforms.",
    category: "Explainers",
    author: "Abhinav Pandey",
    date: "2026-04-22",
    readTime: "6 min read",
    image: "/articles/digital-regulations.jpg",
    slug: "india-digital-media-regulations-2026",
    aiAssisted: true,
  },
  {
    id: "4",
    title: "Lok Sabha Budget Session: Key Highlights and Analysis",
    excerpt: "A comprehensive look at the major announcements, allocations, and political reactions from the latest budget session.",
    category: "Politics",
    author: "Saurabh Tripathi",
    date: "2026-04-21",
    readTime: "7 min read",
    image: "/articles/budget-session.jpg",
    slug: "lok-sabha-budget-session-highlights",
    aiAssisted: false,
  },
  {
    id: "5",
    title: "India's Space Program: ISRO's Next Big Mission Announced",
    excerpt: "ISRO unveils ambitious plans for a crewed lunar mission by 2028, marking India's next giant leap in space exploration.",
    category: "India",
    author: "Abhinav Pandey",
    date: "2026-04-20",
    readTime: "4 min read",
    image: "/articles/isro-mission.jpg",
    slug: "isro-next-big-mission-announced",
    aiAssisted: true,
  },
  {
    id: "6",
    title: "Global Tech Giants Face New AI Regulations Worldwide",
    excerpt: "From the EU to Asia, governments are racing to regulate artificial intelligence. Here's a global roundup of the latest moves.",
    category: "World",
    author: "Saurabh Tripathi",
    date: "2026-04-19",
    readTime: "6 min read",
    image: "/articles/global-ai-regulation.jpg",
    slug: "global-tech-ai-regulations",
    aiAssisted: false,
  },
];

export const teamMembers = [
  {
    name: "Abhinav Pandey",
    role: "Co-Founder & Editor-in-Chief",
    bio: "Journalist and technologist with 8+ years in digital media. Previously at leading Indian news platforms.",
    image: "/images/team/abhinav.png",
  },
  {
    name: "Saurabh Tripathi",
    role: "Co-Founder & Head of Content",
    bio: "Creator and storyteller who believes in ground-level journalism. Built communities across 5+ digital platforms.",
    image: "/images/team/saurabh.png",
  },
];

export const openRoles = [
  { title: "Video Editor", type: "Full-time", location: "Noida / Remote" },
  { title: "Content Writer (Hindi)", type: "Full-time", location: "Noida" },
  { title: "Social Media Manager", type: "Full-time", location: "Remote" },
  { title: "Graphic Designer", type: "Contract", location: "Remote" },
  { title: "Ground Reporter", type: "Freelance", location: "Pan India" },
];
