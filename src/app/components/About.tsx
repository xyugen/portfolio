import BlurFade from "@/components/magicui/blur-fade";
import WordFadeIn from "@/components/magicui/word-fade-in";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";

const About = () => {
    return (
        <section id="about" className="space-y-4">
            <WordFadeIn
                className="text-base"
                words="Software Engineer from the Philippines with a keen eye for design and a love
            for clean, efficient code. Specializing in creating responsive
            and user-friendly web applications using modern technologies."
                delay={0.1}
            />
            <BlurFade delay={1} transition={{ delay: 0.04 + 1, duration: 0.4, type: "tween", ease: "easeOut" }}>
                <Button
                    variant={"ghost"}
                    size={"sm"}
                    className="flex items-center text-sm gap-1 text-muted-foreground"
                >
                    <Link
                        href="/resume"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row gap-1 items-center"
                    >
                        Resume <ArrowDownToLine className="size-4" />
                    </Link>
                </Button>
            </BlurFade>
        </section>
    );
};

export default About;
