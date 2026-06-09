"use client";

import { motion } from "framer-motion";
import { fadeUp, sectionReveal, staggerContainer } from "@/lib/animations";
import { projects } from "./data";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      {/* Eyebrow */}
      <motion.p
        {...sectionReveal}
        className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-12"
      >
        Creations
      </motion.p>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project, index) => {
          const Icon = project.icon;
          const cardContent = (
            <motion.div
              variants={fadeUp}
              className="group relative flex flex-col rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(43,127,255,0.1)]"
              style={{
                backgroundColor: "hsl(var(--bg-elevated))",
                borderColor: "var(--border-subtle)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(43,127,255,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border-subtle)";
              }}
            >
              {/* Preview area — gradient placeholder */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    background: `linear-gradient(135deg, rgba(43,127,255,${0.08 + index * 0.02}), rgba(0,212,255,${0.04 + index * 0.01}), transparent)`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon className="size-12 text-accent-electric/20" />
                </div>
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 gradient-hero-glow" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-5">
                <h3 className="text-xl font-semibold text-foreground tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/50 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-0.5 rounded-full border"
                      style={{
                        borderColor: "var(--border-subtle)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-accent-electric font-medium mt-2 group-hover:underline">
                  View Project →
                </span>
              </div>
            </motion.div>
          );

          return project.href ? (
            <Link
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric rounded-xl"
            >
              {cardContent}
            </Link>
          ) : (
            <div key={project.title}>{cardContent}</div>
          );
        })}
      </motion.div>

      {/* Project names marquee */}
      <div className="mt-16 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...projects, ...projects].map((p, i) => (
            <span
              key={`${p.title}-${i}`}
              className="text-sm text-foreground/15 mx-6 font-mono"
            >
              {p.title} —
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
