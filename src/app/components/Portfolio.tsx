"use client";

import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background grid pattern */}
      <div className="fixed inset-0 z-0">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.05}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />

        <div className="max-w-4xl md:max-w-7xl mx-auto px-6 sm:px-8 md:px-20 lg:px-8">
          <About />
          <Experience />
          <TechStack />
          <Projects />
          <Testimonials />
          <Contact />
        </div>
      </div>
    </div>
  );
}
