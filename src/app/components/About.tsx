import WordFadeIn from "@/components/magicui/word-fade-in";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
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
            <Button
                variant={"ghost"}
                size={"sm"}
                className="flex items-center text-sm gap-1 text-muted-foreground"
            >
                <Link href="/resume" target="_blank" rel="noopener noreferrer">
                    Resume <ArrowUpRight className="size-4 inline-block" />
                </Link>
            </Button>
        </section>
    );
};

export default About;
