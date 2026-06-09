/**
 * Portfolio Content — Single source of truth
 *
 * All structured content for every section of the portfolio.
 * Components import from here. Keep descriptions as plain strings;
 * components handle their own rendering.
 *
 * Last updated: 2026-06-09
 */

// ── Types ────────────────────────────────────────────────────────────

export interface ExperienceEntry {
    company: string;
    role: string;
    location: string;
    startDate: string;
    endDate: string | null; // null = present
    type: string;
    bullets: string[];
}

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    tags: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
    category: "web" | "mobile" | "ai" | "tool" | "bot";
}

export interface TechCategory {
    name: string;
    items: string[];
}

export interface Testimonial {
    quote: string;
    name: string;
    role: string;
    company?: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: string; // lucide icon name
}

export interface SiteMetadata {
    name: string;
    brand: string;
    tagline: string;
    bio: string;
    bioShort: string;
    location: string;
    email: string;
    resumeUrl: string;
    githubUrl: string;
    linkedinUrl: string;
    websiteUrl: string;
    status: string;
}

// ── Site Metadata ────────────────────────────────────────────────────

export const siteMetadata: SiteMetadata = {
    name: "Renz Arias",
    brand: "renzyx.",
    tagline: "Code meets craft.",
    bio: "I'm Renz — a Filipino creative technologist who builds across web, mobile, and AI. I care about clean code, sharp interfaces, and software that actually works. Currently exploring the intersection of engineering and intelligent systems.",
    bioShort: "Filipino creative technologist. I engineer software that thinks, moves, and lasts.",
    location: "San Jose Del Monte, Bulacan, Philippines",
    email: "renzyx.dev@gmail.com",
    resumeUrl: "/resume",
    githubUrl: "https://github.com/xyugen",
    linkedinUrl: "https://linkedin.com/in/renz-arias",
    websiteUrl: "https://renzyx.is-a.dev",
    status: "Open to opportunities",
};

// ── Experience ───────────────────────────────────────────────────────

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
            "Building internal tools including a log data translator and timekeeping system using Python and PowerApps.",
        ],
    },
];

// ── Tech Stack ───────────────────────────────────────────────────────

export const techStack: TechCategory[] = [
    {
        name: "Languages",
        items: [
            "TypeScript",
            "JavaScript",
            "Python",
            "Kotlin",
            "Dart",
            "Go",
            "Java",
        ],
    },
    {
        name: "Frameworks",
        items: [
            "Next.js",
            "React",
            "Jetpack Compose",
            "Flutter",
            "Solid",
            "SvelteKit",
            "Tailwind CSS",
        ],
    },
    {
        name: "Tools",
        items: [
            "Git",
            "Docker",
            "Figma",
            "Supabase",
            "PowerApps",
            "Dataverse",
            "MongoDB",
            "Vercel",
        ],
    },
    {
        name: "AI / LLM",
        items: ["OpenAI API", "DSPy", "LangChain"],
    },
];

// Flat list for marquee display
export const techStackFlat: string[] = techStack.flatMap(
    (cat) => cat.items
);

// ── Projects ─────────────────────────────────────────────────────────

export const projects: Project[] = [
    {
        id: "log-data-translator",
        title: "Log Data Translator",
        description:
            "Python tool for parsing and translating Denso Ten .mot log files into human-readable formats for diagnostics and analysis.",
        longDescription:
            "An internal tool built during my internship at Denso Ten Solutions Philippines. Parses proprietary .mot binary log files from automotive diagnostic equipment and translates them into structured, human-readable reports. Streamlines the debugging workflow for the engineering team.",
        tags: ["Python", "Denso Ten", "CLI"],
        githubUrl: undefined,
        featured: true,
        category: "tool",
    },
    {
        id: "bulsu-schedule-plotter",
        title: "BulSU Schedule Plotter",
        description:
            "Web application for Bulacan State University instructors to efficiently schedule and visualize their classes.",
        longDescription:
            "A scheduling web app built for BulSU instructors. Features drag-and-drop schedule building, conflict detection, and PDF export. Uses Lucia auth for session management and Zustand for state. Built with Next.js App Router and TanStack Query for data fetching.",
        tags: ["Next.js", "Lucia", "TanStack", "Zustand"],
        githubUrl: "https://github.com/xyugen/bulsu-schedule-plotter",
        featured: true,
        category: "web",
    },
    {
        id: "realtime-chat",
        title: "Realtime Chat",
        description:
            "Web application facilitating realtime communication, built to explore WebSocket capabilities.",
        longDescription:
            "A full-stack realtime chat application. Frontend built with SolidJS for fine-grained reactivity; backend in Go with gorilla/websocket. Supports multiple rooms, message history, and online presence indicators. Deployed with Docker.",
        tags: ["Solid", "Golang", "WebSocket", "Docker"],
        githubUrl: "https://github.com/xyugen/realtime-chat-frontend",
        featured: true,
        category: "web",
    },
    {
        id: "powerapps-timekeeping",
        title: "PowerApps Timekeeping System",
        description:
            "Intern timekeeping system built on Microsoft PowerApps and Dataverse for Denso Ten Solutions.",
        longDescription:
            "A low-code timekeeping application built on the Microsoft Power Platform for managing intern attendance and work hours. Uses Dataverse for data storage and Power Automate for workflow automation. Replaced manual spreadsheet tracking for the intern program.",
        tags: ["PowerApps", "Dataverse", "Power Automate"],
        featured: true,
        category: "tool",
    },
    {
        id: "trade-document-request",
        title: "PDS Attendance App",
        description:
            "Android application for streamlined document requests and attendance tracking at San Jose Del Monte National Trade School.",
        longDescription:
            "A native Android application built with Java and Android Studio. Enables students and faculty to submit document requests digitally and track attendance. Built for San Jose Del Monte National Trade School to digitize their paper-based workflows.",
        tags: ["Android Studio", "Java", "Firebase"],
        githubUrl: "https://github.com/xyugen/trade-docrqst",
        featured: true,
        category: "mobile",
    },
    {
        id: "revel-bot",
        title: "Revel Bot",
        description:
            "Custom Discord bot with AI integrations and utility tools for community management.",
        longDescription:
            "A feature-rich Discord bot built with Discord.js. Includes AI-powered conversation capabilities via OpenAI API, moderation tools, utility commands, and custom event handlers. Serves as the backbone of a personal Discord community.",
        tags: ["Discord.js", "JavaScript", "OpenAI API"],
        githubUrl: "https://github.com/xyugen/revel-bot",
        featured: true,
        category: "bot",
    },
    {
        id: "anonymyst",
        title: "Anonymyst",
        description:
            "Platform enabling users to share thoughts freely and anonymously, inspired by the concept of a freedom wall.",
        tags: ["React", "Firebase"],
        githubUrl: "https://github.com/xyugen/anonymyst",
        featured: false,
        category: "web",
    },
    {
        id: "gitignite",
        title: "Gitignite",
        description:
            "Command-line utility for generating .gitignore files using templates from github/gitignore.",
        tags: ["Go", "CLI"],
        githubUrl: "https://github.com/xyugen/gitignite",
        featured: false,
        category: "tool",
    },
    {
        id: "pixiframe",
        title: "Pixiframe",
        description:
            "Feature-rich platform for seamless image uploading, sharing, and securing.",
        tags: ["SvelteKit", "Supabase"],
        githubUrl: "https://github.com/xyugen/pixiframe",
        featured: false,
        category: "web",
    },
];

// Featured projects only (for main showcase)
export const featuredProjects: Project[] = projects.filter(
    (p) => p.featured
);

// Project names for marquee
export const projectNames: string[] = projects.map((p) => p.title);

// ── Testimonials ─────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
    {
        quote: "Renz consistently delivered high-quality work and showed remarkable initiative in taking on challenging projects during his internship.",
        name: "TBD",
        role: "Supervisor",
        company: "Denso Ten Solutions Philippines",
    },
    {
        quote: "A detail-oriented developer who writes clean code and communicates clearly. Would gladly work with him again.",
        name: "TBD",
        role: "Team Lead",
    },
    {
        quote: "Renz brings both technical skill and creative thinking to every project. His ability to learn new technologies quickly is impressive.",
        name: "TBD",
        role: "Colleague",
    },
];

// ── Social Links ─────────────────────────────────────────────────────

export const socialLinks: SocialLink[] = [
    {
        name: "GitHub",
        url: "https://github.com/xyugen",
        icon: "Github",
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/renz-arias",
        icon: "Linkedin",
    },
];

// ── Navigation ───────────────────────────────────────────────────────

export const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];
