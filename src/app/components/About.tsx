import BlurFade from "@/components/magicui/blur-fade";
import WordFadeIn from "@/components/magicui/word-fade-in";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";
import Link from "next/link";
import { about } from "./data";

const About = () => {
    return (
        <section id="about" className="space-y-4">
            <div className="flex flex-col gap-6 md:gap-10">
                {about.map((data, index) => (
                    <WordFadeIn
                        key={index}
                        className={data.className}
                        words={data.text}
                        delay={0.1 * index}
                    />
                ))}
            </div>
            <BlurFade
                delay={1}
                transition={{
                    delay: 0.04 + 1,
                    duration: 0.4,
                    type: "tween",
                    ease: "easeOut",
                }}
            >
                <Button
                    variant={"ghost"}
                    className="flex rounded-sm items-center text-sm gap-1 text-muted-foreground"
                >
                    <Link
                        href="/resume"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row md:text-base gap-1 items-center"
                    >
                        Resume <ArrowDownToLine className="size-4 md:size-5" />
                    </Link>
                </Button>
            </BlurFade>
        </section>
    );
};

export default About;
