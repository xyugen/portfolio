import H2 from "@/components/H2";
import BlurFade from "@/components/magicui/blur-fade";
import { ConfettiButton } from "@/components/magicui/confetti";
import Particles from "@/components/magicui/particles";

const Contact = () => {
    // const { theme } = useTheme();
    // const [color, setColor] = useState("#ffffff");

    // useEffect(() => {
    //     setColor(theme === "dark" ? "#ffffff" : "#000000");
    // }, [theme]);

    return (
        <section
            id="contact"
            className="relative p-8 md:p-2 flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
        >
            <BlurFade delay={0.5} inView>
                <H2 className="text-5xl md:text-6xl font-semibold">Contact</H2>
            </BlurFade>
            <BlurFade delay={0.5 * 2}>
                <p className="text-foreground text-center text-base md:text-xl my-4 pointer-events-none">
                    Interested in working together? Feel free to reach out!
                </p>
            </BlurFade>
            <BlurFade delay={0.5 * 3} className="z-10">
                <ConfettiButton
                    variant={"link"}
                    className="bg-transparent text-foreground"
                >
                    <a
                        href="mailto:renzyx.dev@gmail.com"
                        className="text-lg md:text-3xl font-semibold"
                    >
                        renzyx.dev@gmail.com
                    </a>
                </ConfettiButton>
            </BlurFade>
            <Particles
                className="absolute inset-0 z-0"
                quantity={100}
                ease={80}
                color={"#000000"}
                refresh
            />
        </section>
    );
};

export default Contact;
