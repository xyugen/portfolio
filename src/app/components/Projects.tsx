import B from "@/components/B";
import H2 from "@/components/H2";
import Github from "@/components/icons/Github";
import {
    CalendarDays,
    FileInput,
    ImageDown,
    MessageCircleMore,
    ScrollText,
    SquareTerminal,
} from "lucide-react";

const projects = [
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

const Projects = () => {
    return (
        <section id="projects" className="space-y-4 ">
            <H2>Projects</H2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

type ProjectProps = {
    title: string;
    url?: string;
    icon: React.ReactNode;
    description: React.ReactNode;
    tags?: string[];
};

const Project = (props: ProjectProps) => {
    return (
        <div className="flex flex-col border bg-background border-muted rounded-lg space-y-2 p-4 hover:border-accent transition-colors">
            <div className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                    {props.icon}
                    <h3 className="text-base font-medium">{props.title}</h3>
                </div>
                {props.url && (
                    <a
                        href={props.url}
                        className="transition-colors cursor-pointer"
                        target="_blank"
                    >
                        <Github className="size-4 text-muted-foreground hover:text-primary" />
                    </a>
                )}
            </div>
            <p className="flex-1 text-sm font-medium text-muted-foreground">
                {props.description}
            </p>
            {props.tags && (
                <div className="flex flex-row flex-wrap gap-2">
                    {props.tags.map((tag) => (
                        <Tag key={tag} tag={tag} />
                    ))}
                </div>
            )}
        </div>
    );
};

const Tag = ({ key, tag }: { key: string; tag: string }) => {
    return (
        <div
            key={key}
            className="p-1 bg-muted text-muted-foreground rounded-sm text-xs"
        >
            {tag}
        </div>
    );
};

export default Projects;
