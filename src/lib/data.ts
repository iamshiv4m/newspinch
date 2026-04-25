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
    excerpt:
      "From automated fact-checking to real-time translation, artificial intelligence is transforming how Indian media houses operate.",
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
    excerpt:
      "Our ground team reports from Muzaffarnagar as farmers demand better MSP implementation and water resource management.",
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
    excerpt:
      "Breaking down the key provisions of the latest digital media framework and what it means for creators and platforms.",
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
    excerpt:
      "A comprehensive look at the major announcements, allocations, and political reactions from the latest budget session.",
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
    excerpt:
      "ISRO unveils ambitious plans for a crewed lunar mission by 2028, marking India's next giant leap in space exploration.",
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
    excerpt:
      "From the EU to Asia, governments are racing to regulate artificial intelligence. Here's a global roundup of the latest moves.",
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

export interface BreakingItem {
  id: string;
  en: string;
  hi: string;
  href?: string;
}

export const breakingNews: BreakingItem[] = [
  {
    id: "b1",
    en: "BREAKING: ISRO confirms crewed lunar mission for 2028 — Gaganyaan-2 timeline announced",
    hi: "ब्रेकिंग: ISRO ने 2028 के लिए मानव चंद्र मिशन की पुष्टि की — गगनयान-2 की समय-सीमा घोषित",
    href: "/news/india/isro-next-big-mission-announced",
  },
  {
    id: "b2",
    en: "Lok Sabha clears Digital Media Bill 2026 — creators, platforms react sharply",
    hi: "लोकसभा ने डिजिटल मीडिया विधेयक 2026 पास किया — क्रिएटर्स और प्लेटफॉर्म्स की तीखी प्रतिक्रिया",
    href: "/news/explainers/india-digital-media-regulations-2026",
  },
  {
    id: "b3",
    en: "Western UP farmer protest enters third week — MSP & water demands remain unresolved",
    hi: "पश्चिमी यूपी किसान आंदोलन तीसरे हफ्ते में — MSP और पानी की मांगें अब भी अनसुलझी",
    href: "/news/ground-reports/farmer-protests-western-up-third-week",
  },
  {
    id: "b4",
    en: "AI-generated misinformation flagged in 14 viral videos this week — News Pinch investigation",
    hi: "इस हफ्ते 14 वायरल वीडियो में AI-जनित ग़लत सूचना पकड़ी गई — News Pinch की पड़ताल",
  },
  {
    id: "b5",
    en: "Budget session highlights: ₹1.4L cr for digital infra, big push on rural broadband",
    hi: "बजट सत्र की मुख्य बातें: डिजिटल इन्फ्रा के लिए ₹1.4 लाख करोड़, ग्रामीण ब्रॉडबैंड पर ज़ोर",
    href: "/news/politics/lok-sabha-budget-session-highlights",
  },
  {
    id: "b6",
    en: "EU & India sign AI safety pact — joint research lab to come up in Bengaluru",
    hi: "EU और भारत के बीच AI सुरक्षा समझौता — संयुक्त अनुसंधान लैब बेंगलुरु में",
  },
  {
    id: "b7",
    en: "Delhi AQI dips to 'severe' again — schools shift outdoor activities indoors",
    hi: "दिल्ली का AQI फिर 'गंभीर' श्रेणी में — स्कूलों ने बाहरी गतिविधियाँ इनडोर कीं",
  },
  {
    id: "b8",
    en: "Cricket: India announce squad for tri-series — two uncapped names surprise selectors",
    hi: "क्रिकेट: भारत ने त्रिकोणीय सीरीज़ के लिए टीम घोषित की — दो अनकैप्ड नाम चयनकर्ताओं को चौंकाते हुए",
  },
];

export interface LiveUpdate {
  id: string;
  time: string;
  en: string;
  hi: string;
}

export const liveUpdates: LiveUpdate[] = [
  {
    id: "u1",
    time: "12:45 PM",
    en: "Government tables AI Safety Bill in Parliament — debate begins at 2 PM",
    hi: "सरकार ने संसद में AI सुरक्षा विधेयक पेश किया — बहस दोपहर 2 बजे से",
  },
  {
    id: "u2",
    time: "11:30 AM",
    en: "Patna AQI crosses 334 — schools advised to limit outdoor activities",
    hi: "पटना का AQI 334 के पार — स्कूलों को बाहरी गतिविधियाँ सीमित करने की सलाह",
  },
  {
    id: "u3",
    time: "10:15 AM",
    en: "Election Commission declares final voter turnout at 66.91% — women lead participation",
    hi: "EC ने अंतिम मतदान 66.91% घोषित किया — महिलाओं की भागीदारी सबसे अधिक",
  },
  {
    id: "u4",
    time: "09:00 AM",
    en: "Markets react to Budget — Sensex up 450 points in early trade",
    hi: "बजट पर बाजार की प्रतिक्रिया — शुरुआती कारोबार में सेंसेक्स 450 अंक ऊपर",
  },
  {
    id: "u5",
    time: "08:30 AM",
    en: "Security tightened across Bihar ahead of counting day",
    hi: "मतगणना दिवस से पहले पूरे बिहार में सुरक्षा कड़ी",
  },
  {
    id: "u6",
    time: "07:45 AM",
    en: "Heavy rainfall warning issued for coastal Karnataka & Kerala for next 48 hrs",
    hi: "तटीय कर्नाटक और केरल के लिए अगले 48 घंटे भारी बारिश की चेतावनी",
  },
];

export interface VideoItem {
  id: string;
  title: { en: string; hi: string };
  views: string;
  duration: string;
  youtubeId: string;
  category: string;
}

export const videos: VideoItem[] = [
  {
    id: "v1",
    title: {
      en: "Patna University Ground Report — What happened to the 'Oxford of the East'?",
      hi: "पटना यूनिवर्सिटी ग्राउंड रिपोर्ट — 'पूरब का ऑक्सफोर्ड' का क्या हुआ?",
    },
    views: "1.9M",
    duration: "01:07",
    youtubeId: "43iu6ncq8oY",
    category: "Ground Reports",
  },
  {
    id: "v2",
    title: {
      en: "Parliament Budget Session 2026: Rahul Gandhi vs Amit Shah — Full clash in Lok Sabha",
      hi: "संसद बजट सत्र 2026: राहुल गांधी vs अमित शाह — लोकसभा में पूरा टकराव",
    },
    views: "1.0M",
    duration: "09:41",
    youtubeId: "QBazxdZJKnI",
    category: "Politics",
  },
  {
    id: "v3",
    title: {
      en: "Galgotia University's AI Robot exposed — students reveal the truth",
      hi: "'Chinese Degree मत देना' — गलगोटिया यूनिवर्सिटी के छात्रों ने AI Robot की पोल खोली",
    },
    views: "1.0M",
    duration: "25:31",
    youtubeId: "nQ_IHuc5cWw",
    category: "Technology",
  },
  {
    id: "v4",
    title: {
      en: "Was Iran's Supreme Leader Khamenei killed by Mossad spies? Ex-Ambassador reveals",
      hi: "Supreme Leader Khamenei को Mossad के जासूसों ने मारा? Ex Ambassador की बात",
    },
    views: "84.4K",
    duration: "20:45",
    youtubeId: "mdJuQ3_vbng",
    category: "World",
  },
  {
    id: "v5",
    title: {
      en: "Musahar: Hunters of rats, victims of caste — A News Pinch documentary",
      hi: "मुसहर: चूहे के शिकारी, जातिवाद के शिकार — एक News Pinch डॉक्यूमेंट्री",
    },
    views: "2M+",
    duration: "50:35",
    youtubeId: "bunZDrDOMBg",
    category: "Investigative",
  },
];

export interface CategoryTile {
  slug: string;
  name: { en: string; hi: string };
  emoji: string;
  count: number;
  tone:
    | "blue"
    | "yellow"
    | "red"
    | "green"
    | "purple"
    | "orange"
    | "teal"
    | "pink";
}

export const categoryTiles: CategoryTile[] = [
  {
    slug: "politics",
    name: { en: "Politics", hi: "राजनीति" },
    emoji: "🏛️",
    count: 42,
    tone: "blue",
  },
  {
    slug: "economy",
    name: { en: "Economy", hi: "अर्थव्यवस्था" },
    emoji: "📈",
    count: 18,
    tone: "green",
  },
  {
    slug: "society",
    name: { en: "Society", hi: "समाज" },
    emoji: "👥",
    count: 31,
    tone: "yellow",
  },
  {
    slug: "technology",
    name: { en: "Technology", hi: "तकनीक" },
    emoji: "💻",
    count: 28,
    tone: "purple",
  },
  {
    slug: "culture",
    name: { en: "Culture", hi: "संस्कृति" },
    emoji: "🎭",
    count: 14,
    tone: "pink",
  },
  {
    slug: "investigative",
    name: { en: "Investigative", hi: "खोजी" },
    emoji: "🔍",
    count: 11,
    tone: "red",
  },
  {
    slug: "explainers",
    name: { en: "Explainers", hi: "विवेचना" },
    emoji: "📚",
    count: 19,
    tone: "teal",
  },
  {
    slug: "local",
    name: { en: "Local", hi: "स्थानीय" },
    emoji: "📍",
    count: 56,
    tone: "orange",
  },
];
