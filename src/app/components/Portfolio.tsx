"use client";

import { GeistSans } from "geist/font/sans";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function Component() {
    return (
        <div
            className={`min-h-screen bg-background text-foreground overflow-hidden ${GeistSans.className}`}
        >
            <div className="fixed inset-0 z-0">
                <AnimatedGridPattern
                    numSquares={30}
                    maxOpacity={0.1}
                    duration={3}
                    repeatDelay={1}
                    className={cn(
                        "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
                    )}
                />
            </div>
            <div className="relative z-10">
                <div className="max-w-2xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8 py-16">
                    <About />

                    <Projects />

                    <Contact />
                </div>
            </div>
        </div>
    );
}
