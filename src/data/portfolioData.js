// ============================================================
//  portfolioData.js  –  সব content এখানে edit করুন
// ============================================================

export const profile = {
  name: "Md. Arafat",
  title: "Full Stack Developer",
  taglines: ["Full Stack Developer", "Android Developer", "UI/UX Designer", "Problem Solver"],
  bio: "আমি একজন passionate developer যিনি modern web applications তৈরিতে বিশেষজ্ঞ। আমার লক্ষ্য হলো technology দিয়ে মানুষের জীবন সহজ করা। ৪+ বছরের অভিজ্ঞতায় ৩০+ প্রজেক্ট সফলভাবে deliver করেছি।",
  location: "Dhaka, Bangladesh",
  experience: "4+",
  projects: "30+",
  clients: "20+",
  avatar: "", // photo URL দিন অথবা খালি রাখলে initials দেখাবে
  resumeUrl: "/Arafat_Resume.pdf",
};

export const skills = [
  { name: "React.js",      level: 90, category: "Frontend" },
  { name: "Node.js",       level: 85, category: "Backend"  },
  { name: "TypeScript",    level: 78, category: "Language" },
  { name: "MongoDB",       level: 80, category: "Database" },
  { name: "PostgreSQL",    level: 72, category: "Database" },
  { name: "Docker",        level: 65, category: "DevOps"   },
  { name: "Figma",         level: 75, category: "Design"   },
  { name: "Next.js",       level: 82, category: "Frontend" },
  { name: "Python",        level: 70, category: "Language" },
  { name: "AWS",           level: 60, category: "DevOps"   },
  { name: "Java",          level: 80, category: "Android" },
  { name: "XML (Android)", level: 78, category: "Android" },
  { name: "Android SDK",   level: 75, category: "Android" },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory, payment gateway integration এবং admin dashboard।",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    live: "#",
    featured: true,
    stats: { stars: 124, forks: 38 },
  },
  {
    id: 2,
    title: "Task Manager App",
    description: "Team collaboration tool with drag-and-drop kanban board, real-time updates এবং analytics।",
    tags: ["Vue.js", "Firebase", "Tailwind"],
    github: "https://github.com",
    live: "#",
    featured: true,
    stats: { stars: 89, forks: 22 },
  },
  {
    id: 3,
    title: "AI Chat Interface",
    description: "GPT-powered conversational UI with context memory, markdown rendering এবং export functionality।",
    tags: ["Next.js", "OpenAI", "Prisma"],
    github: "https://github.com",
    live: "#",
    featured: true,
    stats: { stars: 210, forks: 67 },
  },
  {
    id: 4,
    title: "AuraWalls",
    description: "Feature-rich Android wallpaper app with dynamic categories, AI-powered recommendations, favorites system এবং smooth animations।",
    tags: ["Java", "XML", "Android", "Firebase"],
    github: "https://github.com/arafat949",
    live: "#",
    featured: true,
    stats: { stars: 45, forks: 12 },
  },
  {
    id: 5,
    title: "SothikDor",
    description: "Real-time market price tracker Android app যা বাজারের সঠিক দাম track করে। Location-based pricing এবং price history visualization সহ।",
    tags: ["Java", "XML", "Android", "REST API"],
    github: "https://github.com/arafat949",
    live: "#",
    featured: true,
    stats: { stars: 38, forks: 9 },
  },
  {
    id: 6,
    title: "Weather Dashboard",
    description: "Interactive weather visualization with forecast charts, map integration এবং location search।",
    tags: ["React", "D3.js", "Weather API"],
    github: "https://github.com",
    live: "#",
    featured: false,
    stats: { stars: 45, forks: 12 },
  },
  {
    id: 7,
    title: "Blog CMS",
    description: "Headless CMS with markdown editor, SEO optimization এবং multi-author support।",
    tags: ["Next.js", "Sanity", "Vercel"],
    github: "https://github.com",
    live: "#",
    featured: false,
    stats: { stars: 67, forks: 19 },
  },
];

export const contact = {
  email: "mdarafatmiah949@gmail.com",
  phone: "01595-404395",
  whatsapp: "01595-404395",
  address: "Dhaka, Bangladesh",
};

export const social = [
  { name: "GitHub",   url: "https://github.com/arafat949",    icon: "FaGithub"   },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourname", icon: "FaLinkedin" },
  { name: "Facebook", url: "https://facebook.com/arafat949",  icon: "FaFacebook" },
  { name: "Twitter",  url: "https://x.com/yourname",         icon: "FaXTwitter" },
];

// Skill chart data – monthly activity (last 6 months)
export const activityData = [
  { month: "Nov", commits: 34, projects: 2 },
  { month: "Dec", commits: 52, projects: 3 },
  { month: "Jan", commits: 28, projects: 1 },
  { month: "Feb", commits: 61, projects: 4 },
  { month: "Mar", commits: 45, projects: 2 },
  { month: "Apr", commits: 73, projects: 5 },
];
