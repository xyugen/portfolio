import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import React from "react";
import { bentoProject } from "./data";
import WordFadeIn from "@/components/magicui/word-fade-in";
import { motion } from "framer-motion";

const BentoProjects = () => {
    return (
        <section id="projects" className="space-y-4">
            {section.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 * index }}
                >
                    {item}
                </motion.div>
            ))}
        </section>
    );
};

const Bento = () => {
    return (
        <BentoGrid>
            {bentoProject.map((project, index) => (
                <BentoCard key={index} {...project} />
            ))}
        </BentoGrid>
    );
};

const section: React.ReactNode[] = [
    <h2 key={0} className="text-primary text-7xl text-center tracking-wide font">
        Creations
    </h2>,
    <Bento key={1} />,
    <WordFadeIn
        key={2}
        words="More to come&hellip;"
        className="text-foreground/90 text-2xl md:text-4xl tracking-wide text-center"
        delay={0.75}
    />,
];

export default BentoProjects;
