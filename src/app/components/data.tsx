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
