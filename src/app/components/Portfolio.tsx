"use client";

import { useState, useEffect } from "react";
import { GeistSans } from "geist/font/sans";
import { DotPattern } from "../../components/generate-grid";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Component() {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            className={`min-h-screen bg-background text-foreground overflow-hidden ${GeistSans.className}`}
        >
            <div className="fixed inset-0 z-0">
                <DotPattern windowSize={windowSize} dotSize={4} />
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
