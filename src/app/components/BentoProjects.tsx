import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import React from "react";
import { bentoProject } from "./data";
import BlurFade from "@/components/magicui/blur-fade";

const BentoProjects = () => {
    return (
        <BlurFade inView>
            <section id="projects" className="space-y-4 ">
                <h2 className="text-primary text-3xl text-center font-semibold">Creations</h2>
                <Bento />
            </section>
        </BlurFade>
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

export default BentoProjects;
