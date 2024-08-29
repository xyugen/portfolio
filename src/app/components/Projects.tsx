import H2 from "@/components/H2";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <section id="projects" className="space-y-4">
            <H2>Projects</H2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((project) => (
                    <ProjectCard key={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
