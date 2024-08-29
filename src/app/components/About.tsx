import H2 from "@/components/H2";
import Github from "@/components/icons/Github";

const About = () => {
    return (
        <section id="about" className="space-y-4">
            <div className="flex flex-row items-center gap-2">
                <H2>Renzyx</H2>
                <a
                    href="https://github.com/xyugen"
                    className="transition-colors cursor-pointer"
                >
                    <Github className="w-4 h-4 text-muted-foreground hover:text-primary" />
                </a>
            </div>
            <p className="text-foreground text-base">
                Hello, I am web developer with a keen eye for design and a love
                for clean, efficient code. I specialize in creating responsive
                and user-friendly web applications using modern technologies.
            </p>
        </section>
    );
};

export default About;
