import {
  Mail,
  Code2,
  Palette,
  Database,
  Globe,
  Server,
  GitBranch,
  Sparkles,
  LayoutDashboard,
  Smartphone,
  Cloud,
  CreditCard,
} from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons"
import type { Project, Skill, SocialLink, Experience } from "@/types"

export const PERSONAL = {
  name: "Fenil Modi",
  title: "Full-Stack Software Engineer",
  location: "Surat, Gujarat, India",
  phone: "+91 6355952772",
  email: "Fenilmodi1811@gmail.com",
  linkedin: "https://www.linkedin.com/in/fenil-modi-363271401",
  about:
    "Full-Stack Software Engineer with 2+ years of experience delivering scalable, production-grade applications across the complete SDLC — from requirement analysis and system design through development, testing, deployment, and maintenance. I specialize in Node.js, Next.js, and NestJS, with strong command of backend architecture, RESTful APIs, authentication, and database design for high-performance web and mobile platforms.",
  resume: "/Fenil_Modi_Resume.pdf",
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/fenilm1811-lab",
    icon: GithubIcon,
    label: "GitHub",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/fenil-modi-363271401",
    icon: LinkedinIcon,
    label: "LinkedIn",
  },
  {
    name: "Email",
    href: "mailto:Fenilmodi1811@gmail.com",
    icon: Mail,
    label: "Email",
  },
]

export const SKILLS: Skill[] = [
  { name: "JavaScript", icon: Code2, category: "language", proficiency: 92 },
  { name: "TypeScript", icon: Code2, category: "language", proficiency: 90 },
  { name: "React.js", icon: Palette, category: "frontend", proficiency: 92 },
  {
    name: "Next.js",
    icon: LayoutDashboard,
    category: "frontend",
    proficiency: 90,
  },
  { name: "Flutter", icon: Smartphone, category: "frontend", proficiency: 86 },
  { name: "Node.js", icon: Server, category: "backend", proficiency: 90 },
  { name: "Express.js", icon: Globe, category: "backend", proficiency: 86 },
  { name: "NestJS", icon: Server, category: "backend", proficiency: 88 },
  { name: "Prisma ORM", icon: Database, category: "backend", proficiency: 82 },
  { name: "MongoDB", icon: Database, category: "backend", proficiency: 82 },
  { name: "MySQL", icon: Database, category: "backend", proficiency: 80 },
  { name: "PostgreSQL", icon: Database, category: "backend", proficiency: 82 },
  { name: "SQLite", icon: Database, category: "backend", proficiency: 72 },
  { name: "Firebase", icon: Cloud, category: "tooling", proficiency: 76 },
  { name: "Supabase", icon: Cloud, category: "tooling", proficiency: 78 },
  { name: "AWS", icon: Cloud, category: "tooling", proficiency: 72 },
  { name: "Redis", icon: GitBranch, category: "tooling", proficiency: 76 },
  {
    name: "Redpanda / Kafka",
    icon: Sparkles,
    category: "tooling",
    proficiency: 70,
  },
  {
    name: "Git/GitHub/GitLab",
    icon: GitBranch,
    category: "tooling",
    proficiency: 90,
  },
  { name: "REST APIs", icon: Globe, category: "backend", proficiency: 92 },
  { name: "Dart", icon: Code2, category: "language", proficiency: 84 },
  { name: "HTML/CSS", icon: Palette, category: "frontend", proficiency: 88 },
]

export const PROJECTS: Project[] = [
  {
    id: "sillynutrition",
    title: "SillyNutrition",
    description:
      "AI-powered personalised nutrition and fitness platform with meal plans, training programs, and GLP-1 support.",
    longDescription:
      "Built SillyNutrition, an AI-driven platform that generates personalised meal plans, workout routines, and nutrition guidance in minutes based on users' goals, preferences, and lifestyle. Features tiered pricing plans, GLP-1-safe programs, and a streamlined questionnaire-to-plan flow.",
    href: "https://www.sillynutrition.com",
    image:
      "/projects/silyproject/screencapture-sillynutrition-dummypage-2026-10-24-09_39_19.png",
    screenshots: [
      "/projects/silyproject/screencapture-sillynutrition-dummypage-2026-10-24-09_39_19.png",
    ],
    stack: [
      { name: "Next.js", icon: LayoutDashboard },
      { name: "AI", icon: Sparkles },
      { name: "Node.js", icon: Server },
    ],
    featured: true,
    type: "personal",
  },
  {
    id: "bhram-ai",
    title: "Bhram AI Admin Panel",
    description:
      "Next.js admin panel for a live AR-based social discovery platform with moderation tools.",
    longDescription:
      "Engineered the admin panel for Bhram, a live AR-based social discovery app, with content moderation workflows and platform management features. Resolved critical Angular rendering issues and designed a scalable Redpanda + Kafka event streaming pipeline.",
    href: "https://play.google.com/store/apps/details?id=com.paroksya.bramh&hl=en_IN&pli=1",
    image: "/projects/bharm_admin_panel/2dashboard.png",
    screenshots: [
      "/projects/bharm_admin_panel/1login_page.png",
      "/projects/bharm_admin_panel/2dashboard.png",
      "/projects/bharm_admin_panel/33dobjectscreen.png",
      "/projects/bharm_admin_panel/4mapscreen.png",
    ],
    stack: [
      { name: "Next.js", icon: LayoutDashboard },
      { name: "Node.js", icon: Server },
      { name: "Kafka", icon: Sparkles },
    ],
    featured: true,
    type: "work",
  },
  {
    id: "dealowl",
    title: "Dealowl",
    description:
      "Full-stack deal platform rebrand and relaunch with new product features and permissions.",
    longDescription:
      "Owned the full-stack development of J2X rebrand to Dealowl, shipping new deal types including Fund Placement and Term Sheet. Implemented granular role-based permissions, Open Graph share previews, and term sheet subscription flows.",
    href: "https://dealowl.co/",
    image: "/projects/screencapture-dealowl-co-2026-10-03-12_39_14.png",
    stack: [
      { name: "React", icon: Palette },
      { name: "Node.js", icon: Server },
      { name: "TypeScript", icon: Code2 },
    ],
    featured: true,
    type: "work",
  },
  {
    id: "ai-audit-tool",
    title: "AI Website Audit Tool",
    description:
      "AI-powered SaaS audit platform for SEO, UX, performance, and CRO analysis.",
    longDescription:
      "Architected a Next.js and Node.js SaaS audit tool integrating GPT-4o, Claude, Lighthouse, and custom scrapers. Delivered reports in under 90 seconds while reducing AI operating costs by 76% through optimized architecture and caching.",
    href: "https://example.com",
    stack: [
      { name: "Next.js", icon: LayoutDashboard },
      { name: "Node.js", icon: Server },
      { name: "PostgreSQL", icon: Database },
    ],
    featured: true,
    type: "work",
  },
  {
    id: "lovingloyalty",
    title: "lovingloyalty POS",
    description:
      "React POS system for dine-in, take-away, and delivery order flows.",
    longDescription:
      "Led the migration of a legacy POS system from vanilla JavaScript to React, building cashier workflows, table management, and multi-order support across tablet and desktop environments while integrating REST APIs.",
    href: "https://llpos.dk/",
    image: "/projects/screencapture-llpos-dk-2026-10-03-12_43_17.png",
    stack: [
      { name: "React", icon: Palette },
      { name: "REST APIs", icon: Globe },
      { name: "TypeScript", icon: Code2 },
    ],
    featured: false,
    type: "work",
  },
  {
    id: "tidos",
    title: "TIDOS",
    description:
      "Cross-border telemedicine platform with doctor workflows, IoT, and payments.",
    longDescription:
      "Built a telemedicine platform using React and NestJS supporting dual-doctor workflows and compliant prescription issuance. Integrated IoT devices, AI health scoring, Agora video, and Stripe payments with secure access controls.",
    href: "https://example.com",
    stack: [
      { name: "React", icon: Palette },
      { name: "NestJS", icon: Server },
      { name: "Stripe", icon: CreditCard },
    ],
    featured: false,
    type: "work",
  },
]

export const PROJECTS_FEATURED = PROJECTS.filter((p) => p.featured)

export const EXPERIENCE: Experience[] = [
  {
    role: "Software Engineer",
    company: "Paroksya",
    companyHref: "https://paroksya.com",
    linkedinHref: "https://www.linkedin.com/company/paroksya/posts/",
    startDate: "2024-06",
    current: true,
    description:
      "Delivered full-stack development for AI-driven SaaS products, fintech platforms, and healthcare systems including Bhram AI, Dealowl, AI website audit tooling, loyalty POS, and telemedicine workflows across the product lifecycle.",
  },
  {
    role: "Intern",
    company: "LogWinTech Infotech",
    companyHref: "https://logwintech.com/",
    linkedinHref: "https://www.linkedin.com/company/logwintech-pvt-ltd/home/",
    startDate: "2024-01",
    endDate: "2024-06",
    current: false,
    description:
      "Developed Node.js REST APIs for an HRMS platform covering attendance tracking and employee management, implemented RBAC, and optimized TypeORM queries for performance and scalability.",
  },
]
