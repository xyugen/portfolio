import {
    Bot,
    CalendarDays,
    FileInput,
    ImageDown,
    MessageCircleMore,
    ScrollText,
    SquareTerminal,
} from "lucide-react";
import B from "@/components/B";
import H2 from "@/components/H2";
import ClassSchedule from "@/components/projects/schedule-card";
import RealtimeChat from "@/components/projects/realtime-chat";
import DiscordChat from "@/components/projects/discord-chat";
import DocumentRequestApp from "@/components/projects/document-request";

export const projects = [
    {
        title: "BulSU Schedule Plotter",
        icon: <CalendarDays className="size-4" />,
        description: (
            <>
                A web application developed for <B>Bulacan State University</B>,
                designed to assist instructors in efficiently scheduling and
                visualizing their classes.
            </>
        ),
        tags: ["NextJS", "Lucia", "TanStack", "Zustand"],
    },
    {
        title: "Realtime Chat",
        url: "https://github.com/xyugen/realtime-chat-frontend",
        icon: <MessageCircleMore className="size-4" />,
        description: (
            <>
                A web application that facilitates realtime communication, built
                to explore the capabilities of WebSockets.
            </>
        ),
        tags: ["Solid", "Golang"],
    },
    {
        title: "Revel Bot",
        url: "https://github.com/xyugen/revel-bot",
        icon: <Bot className="size-4" />,
        description: (
            <>
                A custom Discord bot for my server, featuring integrations with{" "}
                <B>Artificial Intelligence</B> and various utility tools.
            </>
        ),
        tags: ["Discord.js", "JavaScript"],
    },
    {
        title: "Anonymyst",
        url: "https://github.com/xyugen/anonymyst",
        icon: <ScrollText className="size-4" />,
        description:
            "A platform enabling users to share thoughts freely and anonymously, inspired by the concept of a freedom wall.",
        tags: ["React"],
    },
    {
        title: "Gitignite",
        url: "https://github.com/xyugen/gitignite",
        icon: <SquareTerminal className="size-4" />,
        description: (
            <>
                A command-line utility for generating <i>.gitignore</i> files
                using templates from <code>github/gitignore</code>.
            </>
        ),
        tags: ["Golang"],
    },
    {
        title: "Pixiframe",
        url: "https://github.com/xyugen/pixiframe",
        icon: <ImageDown className="size-4" />,
        description: (
            <>
                A feature-rich platform for seamless image uploading, sharing,
                and securing.
            </>
        ),
        tags: ["SvelteKit", "Supabase"],
    },
    {
        title: "Trade Document Request",
        url: "https://github.com/xyugen/trade-docrqst",
        icon: <FileInput className="size-4" />,
        description: (
            <>
                An Android application enabling streamlined document requests
                for <B>San Jose Del Monte National Trade School</B>.
            </>
        ),
        tags: ["Android Studio", "Java"],
    },
];

export const bentoProject = [
    {
        Icon: Bot,
        name: "Revel Bot",
        description:
            "A custom Discord bot for my server, featuring integrations with Artificial Intelligence and various utility tools.",
        href: "https://github.com/xyugen/revel-bot/",
        cta: "Visit Project",
        className: "col-span-4 lg:col-span-1",
        background: (
            <div className="absolute inset-7 space-y-8 mx-auto duration-300 ease-in-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] hover:scale-105 sm:inset-10">
                <DiscordChat />
            </div>
        ),
    },
    {
        Icon: CalendarDays,
        name: "BulSU Schedule Plotter",
        description:
            "A web application for Bulacan State University, designed to assist instructors in efficiently scheduling and visualizing their classes.",
        href: "https://github.com/xyugen/bulsu-schedule-plotter/",
        cta: "Visit Project",
        className: "col-span-4 lg:col-span-2",
        background: (
            <div className="absolute inset-7 space-y-8 mx-auto duration-300 ease-in-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] hover:scale-105 sm:inset-10 md:w-fit">
                <H2 className="text-center text-foreground/70">
                    BulSU Schedule Plotter
                </H2>
                <div className="flex justify-center">
                    <ClassSchedule />
                </div>
            </div>
        ),
    },
    {
        Icon: MessageCircleMore,
        name: "Realtime Chat",
        description:
            "A web application that facilitates realtime communication, built to explore the capabilities of WebSockets.",
        href: "https://github.com/xyugen/realtime-chat-frontend/",
        cta: "Visit Project",
        className: "col-span-4 lg:col-span-2",
        background: (
            <div className="absolute inset-7 space-y-8 mx-auto duration-300 ease-in-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] hover:scale-105 sm:inset-10">
                <RealtimeChat />
            </div>
        ),
    },
    {
        Icon: FileInput,
        name: "Trade Document Request",
        description:
            "An Android application enabling streamlined document requests for San Jose Del Monte National Trade School.",
        href: "https://github.com/xyugen/trade-docrqst/",
        cta: "Visit Project",
        className: "col-span-4 lg:col-span-1",
        background: (
            <div className="absolute inset-7 space-y-8 mx-auto duration-300 ease-in-out [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] hover:scale-105 sm:inset-10">
                <DocumentRequestApp />
            </div>
        ),
    },
];

export const about = [
    {
        text: "Shaping Code & Creativity",
        className: "text-5xl font-medium text-primary/90 md:text-8xl",
    },
    {
        text: "Filipino Software Engineer with a design flair and a passion for clean, efficient code. Specializing in responsive, user-friendly web applications with modern technologies.",
        className: "md:max-w-2xl font-medium text-foreground/80 md:text-2xl",
    },
];
