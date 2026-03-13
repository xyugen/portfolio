import BlurFade from "@/components/magicui/blur-fade";
import { ConfettiButton } from "@/components/magicui/confetti";
import Particles from "@/components/magicui/particles";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Contact = () => {
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#000000");
    }, [theme]);

    return (
        <section
            id="contact"
            className="relative py-24 px-8 flex w-full flex-col items-center justify-center overflow-hidden rounded-xl border bg-background"
        >
            <BlurFade delay={0.5} inView>
                <p className="text-muted-foreground text-sm font-medium tracking-widest uppercase mb-6">
                    Get in touch
                </p>
            </BlurFade>
            <BlurFade delay={0.5 * 2} inView>
                <h2 className="text-4xl md:text-6xl font-bold text-foreground text-center tracking-tight mb-4 max-w-xl leading-tight">
                    Let&apos;s build something together.
                </h2>
            </BlurFade>
            <BlurFade delay={0.5 * 3} className="z-10" inView>
                <ConfettiButton
                    variant={"link"}
                    className="bg-transparent p-0 h-auto"
                >
                    <a
                        href="mailto:renzyx.dev@gmail.com"
                        className="text-xl md:text-3xl font-semibold text-foreground/50 hover:text-foreground transition-colors duration-300"
                    >
                        renzyx.dev@gmail.com
                    </a>
                </ConfettiButton>
            </BlurFade>
            <Particles
                className="absolute inset-0 z-0"
                quantity={80}
                ease={80}
                color={color}
                refresh
            />
        </section>
    );
};

export default Contact;
