import {
  Bot,
  CalendarDays,
  FileInput,
  MessageCircleMore,
  ScrollText,
  SquareTerminal,
  type LucideIcon,
} from "lucide-react";

// ── Experience ────────────────────────────────────────────────────

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | null;
  type: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Denso Ten Solutions Philippines Corporation",
    role: "Software Engineer Intern",
    location: "Pasig, Philippines",
    startDate: "Feb 2026",
    endDate: null,
    type: "On-site",
    bullets: [
      "Planning projects and tasks for co-interns across ongoing development initiatives.",
      "Leading development on multiple projects as the primary engineer.",
    ],
  },
];

// ── Projects ──────────────────────────────────────────────────────

export interface Project {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  icon: LucideIcon;
}

export const projects: Project[] = [
  {
    title: "Log Data Translator",
    description:
      "Python tool for parsing and translating Denso Ten .mot log files into readable formats for analysis.",
    tags: ["Python", "Denso Ten"],
    icon: SquareTerminal,
  },
  {
    title: "BulSU Schedule Plotter",
    description:
      "A web application for Bulacan State University, designed to assist instructors in efficiently scheduling and visualizing their classes.",
    tags: ["Next.js", "Lucia", "TanStack", "Zustand"],
    href: "https://github.com/xyugen/bulsu-schedule-plotter/",
    icon: CalendarDays,
  },
  {
    title: "PDS Attendance App",
    description:
      "An Android application enabling streamlined attendance management for PDS using mobile-first design.",
    tags: ["Android Studio", "Java"],
    icon: FileInput,
  },
  {
    title: "Realtime Chat",
    description:
      "A web application that facilitates realtime communication, built to explore the capabilities of WebSockets.",
    tags: ["Solid", "Golang"],
    href: "https://github.com/xyugen/realtime-chat-frontend/",
    icon: MessageCircleMore,
  },
  {
    title: "Revel Bot",
    description:
      "A custom Discord bot featuring integrations with Artificial Intelligence and various utility tools.",
    tags: ["Discord.js", "JavaScript"],
    href: "https://github.com/xyugen/revel-bot/",
    icon: Bot,
  },
  {
    title: "Anonymyst",
    description:
      "A platform enabling users to share thoughts freely and anonymously, inspired by the concept of a freedom wall.",
    tags: ["React"],
    href: "https://github.com/xyugen/anonymyst",
    icon: ScrollText,
  },
];

// ── Tech Stack ────────────────────────────────────────────────────

export interface TechCategory {
  label: string;
  items: string[];
}

export const techStack: TechCategory[] = [
  {
    label: "Languages",
    items: ["TypeScript", "Python", "Kotlin", "Dart", "Go", "JavaScript", "Java"],
  },
  {
    label: "Frameworks",
    items: ["Next.js", "React", "Jetpack Compose", "Flutter", "Solid", "SvelteKit", "Tailwind"],
  },
  {
    label: "Tools",
    items: ["Git", "Docker", "Figma", "Supabase", "PowerApps", "MongoDB"],
  },
  {
    label: "AI / LLM",
    items: ["OpenAI API", "DSPy", "LangChain"],
  },
];

// ── Testimonials ──────────────────────────────────────────────────

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Renz consistently delivers clean, well-structured code and brings a designer's eye to every project he touches.",
    name: "Team Lead",
    role: "Software Engineer, Denso Ten",
  },
  {
    quote:
      "His ability to quickly learn and apply new technologies is impressive. A reliable engineer who takes ownership.",
    name: "Project Manager",
    role: "Denso Ten Solutions Phils.",
  },
  {
    quote:
      "One of the most dedicated developers I've worked with. He doesn't just build features — he crafts experiences.",
    name: "Peer Developer",
    role: "Collaborator",
  },
];

// ── About ─────────────────────────────────────────────────────────

export const aboutText = {
  body: "I'm Renz — a Filipino creative technologist who builds across web, mobile, and AI. I care about clean code, sharp interfaces, and software that actually works. Currently exploring the intersection of engineering and intelligent systems.",
  status: "Open to opportunities",
};
