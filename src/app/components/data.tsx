import {
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
        title: "Anonymyst",
        url: "https://github.com/xyugen/anonymyst",
        icon: <ScrollText className="size-4" />,
        description:
            "A digital platform that allows users to express themselves freely and anonymously, similar to a classic freedom wall.",
        tags: ["React"],
    },
    {
        title: "Gitignite",
        url: "https://github.com/xyugen/gitignite",
        icon: <SquareTerminal className="size-4" />,
        description: (
            <>
                A command-line tool for generating <i>.gitignore</i> files from
                language templates provided by <code>github/gitignore</code>.
            </>
        ),
        tags: ["Golang"],
    },
    {
        title: "BulSU Schedule Plotter",
        icon: <CalendarDays className="size-4" />,
        description: (
            <>
                A web application created for <B>Bulacan State University</B> to
                help instructors plot and visualize their schedules.
            </>
        ),
        tags: ["React", "NextJS"],
    },
    {
        title: "Realtime Chat",
        url: "https://github.com/xyugen/realtime-chat-frontend",
        icon: <MessageCircleMore className="size-4" />,
        description: (
            <>A realtime chat web application for learning WebSockets.</>
        ),
        tags: ["Solid", "Golang"],
    },
    {
        title: "Revel Bot",
        url: "https://github.com/xyugen/revel-bot",
        icon: <MessageCircleMore className="size-4" />,
        description: (
            <>
                A Discord bot created for my personal server integrated with{" "}
                <B>Artificial Intelligence</B> and other utility tools.
            </>
        ),
        tags: ["Discord.js", "JavaScript"],
    },
    {
        title: "Pixiframe",
        url: "https://github.com/xyugen/pixiframe",
        icon: <ImageDown className="size-4" />,
        description: (
            <>
                A stunning website that empowers you to upload, share, and
                secure images with ease.
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
                An android application for requesting documents on{" "}
                <B>San Jose Del Monte National Trade School</B>.
            </>
        ),
        tags: ["Android Studio", "Java"],
    },
];