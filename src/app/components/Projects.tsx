import H2 from "@/components/H2";
import Github from "@/components/icons/Github";
import { projects } from "./data";
import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";

const Projects = () => {
    return (
        <BlurFade inView>
            <section id="projects" className="space-y-4 ">
                <H2>Projects</H2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        // <motion.div
                        //     key={index}
                        //     initial={{ opacity: 0, y: 20 }}
                        //     animate={{ opacity: 1, y: 0 }}
                        //     transition={{ duration: 0.25, delay: 0.25 * index }}
                        // >
                        //     <Project {...project} />
                        // </motion.div>
                        <BlurFade
                            key={index}
                            delay={0.25 + index * 0.15}
                            inView
                        >
                            <Project {...project} />
                        </BlurFade>
                    ))}
                </div>
            </section>
        </BlurFade>
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
        <div className="relative flex flex-col border bg-background border-muted shadow-sm md:shadow-md rounded-lg space-y-2 p-4 hover:border-accent transition-colors">
            <div className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                    {props.icon}
                    <h3 className="text-base font-medium">{props.title}</h3>
                </div>
                {props.url && (
                    <Link
                        href={props.url}
                        className="transition-colors cursor-none"
                        target="_blank"
                    >
                        <Github className="size-4 text-muted-foreground hover:text-primary" />
                    </Link>
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

const Tag = ({ tag }: { tag: string }) => {
    return (
        <div
            className="p-1 bg-muted text-muted-foreground rounded-sm text-xs"
        >
            {tag}
        </div>
    );
};

export default Projects;
