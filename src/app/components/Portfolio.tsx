"use client";

import { useState, useEffect } from "react";
import { GeistSans } from "geist/font/sans";
import { DotPattern } from "../../components/generate-grid";
import Footer from "../../components/layouts/Footer";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Component() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
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
                <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <About />

                    <Projects />

                    <Contact />
                </main>
                <Footer />
            </div>
            <div
                className="fixed w-64 h-64 rounded-full bg-gradient-radial from-white/20 to-transparent opacity-20 pointer-events-none z-0"
                style={{
                    left: mousePosition.x - 128,
                    top: mousePosition.y - 128,
                }}
            />
        </div>
    );
}
