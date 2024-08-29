import H2 from "@/components/H2";
import Github from "@/components/icons/Github";
import WordFadeIn from "@/components/magicui/word-fade-in";
import Link from "next/link";

const About = () => {
    return (
        <section id="about" className="space-y-4">
            <div className="flex flex-row items-center gap-2">
                <H2>renzyx.</H2>
                <Link
                    href="https://github.com/xyugen"
                    className="transition-colors cursor-pointer"
                    target="_blank"
                >
                    <Github className="size-4 text-muted-foreground hover:text-primary" />
                </Link>
            </div>
            <WordFadeIn
                className="text-base"
                words="Hello, I am web developer with a keen eye for design and a love
            for clean, efficient code. I specialize in creating responsive
            and user-friendly web applications using modern technologies."
            />
        </section>
    );
};

export default About;
