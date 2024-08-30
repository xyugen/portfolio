"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTitleProps {
    text: string;
    className?: string;
    delay?: number;
}

export default function AnimatedTitle({
    text,
    className = "",
    delay = 0.1,
}: AnimatedTitleProps) {
    const characters = text.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.25 * i + delay, delay: delay },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
        hidden: {
            opacity: 0,
            y: -20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
    };

    return (
        <h1 className={cn("font-bold text-primary", className)}>
            <motion.span
                variants={container}
                initial="hidden"
                animate="visible"
                aria-label={text}
            >
                {characters.map((char, index) => (
                    <motion.span
                        variants={child}
                        key={index}
                        className="inline-block"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.span>
        </h1>
    );
}