"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "./data";

const easeExpo = [0.16, 1, 0.3, 1] as const;

const Experience = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    return (
        <section id="experience" ref={sectionRef}>
            {/* Eyebrow + heading */}
            <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: easeExpo }}
                className="text-muted-foreground text-sm font-medium tracking-widest uppercase mb-8"
            >
                Experience
            </motion.p>

            <div className="flex flex-col gap-12">
                {experience.map((job, jobIndex) => (
                    <ExperienceEntry
                        key={jobIndex}
                        job={job}
                        index={jobIndex}
                        isInView={isInView}
                    />
                ))}
            </div>
        </section>
    );
};

interface Job {
    company: string;
    role: string;
    location: string;
    startDate: string;
    endDate: string | null;
    type: string;
    bullets: string[];
}

const ExperienceEntry = ({
    job,
    index,
    isInView,
}: {
    job: Job;
    index: number;
    isInView: boolean;
}) => {
    const baseDelay = 0.1 + index * 0.15;

    return (
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12">
            {/* Left: date + meta */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: easeExpo, delay: baseDelay }}
                className="flex flex-col gap-1 md:pt-0.5"
            >
                {/* Date range */}
                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground/60 tabular-nums">
                        {job.startDate}
                    </span>
                    <span className="text-foreground/30 text-xs">—</span>
                    {job.endDate ? (
                        <span className="text-sm font-medium text-foreground/60 tabular-nums">
                            {job.endDate}
                        </span>
                    ) : (
                        <span className="flex items-center gap-1.5">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            <span className="text-sm font-medium text-emerald-500">
                                Present
                            </span>
                        </span>
                    )}
                </div>

                {/* Location + type */}
                <p className="text-xs text-foreground/40 leading-relaxed">
                    {job.location}
                    <span className="mx-1.5 opacity-50">·</span>
                    {job.type}
                </p>
            </motion.div>

            {/* Right: company + role + bullets */}
            <div className="flex flex-col gap-4">
                {/* Company + role */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                        duration: 0.6,
                        ease: easeExpo,
                        delay: baseDelay + 0.05,
                    }}
                >
                    <h3 className="text-xl font-bold text-foreground tracking-tight leading-snug">
                        {job.company}
                    </h3>
                    <p className="text-base font-normal text-foreground/50 mt-0.5">
                        {job.role}
                    </p>
                </motion.div>

                {/* Bullets */}
                <ul className="flex flex-col gap-2.5">
                    {job.bullets.map((bullet, bulletIndex) => (
                        <motion.li
                            key={bulletIndex}
                            initial={{ opacity: 0, y: 8 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.55,
                                ease: easeExpo,
                                delay: baseDelay + 0.15 + bulletIndex * 0.08,
                            }}
                            className="flex items-start gap-3 text-sm text-foreground/60 leading-relaxed"
                        >
                            <span
                                className="mt-[0.45em] h-px w-4 bg-foreground/25 flex-shrink-0"
                                aria-hidden="true"
                            />
                            {bullet}
                        </motion.li>
                    ))}
                </ul>

                {/* Divider — time still flowing */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
                    transition={{
                        duration: 0.7,
                        ease: easeExpo,
                        delay: baseDelay + 0.3,
                    }}
                    className="origin-left h-px bg-border mt-2"
                />
            </div>
        </div>
    );
};

export default Experience;
