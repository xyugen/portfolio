"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CustomScrollBar() {
    const [mounted, setMounted] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const padding = 40; // Padding in pixels for top and bottom
    const pillHeight = 80; // Height of the pill in pixels

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            const maxScroll =
                document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = (position / maxScroll) * 100;
            setScrollPosition(scrollPercentage);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const calculatePillPosition = () => {
        const scrollableHeight = window.innerHeight - 2 * padding - pillHeight;
        const maxScrollPosition = 100;
        const adjustedScrollPosition = Math.min(
            Math.max(scrollPosition, 0),
            maxScrollPosition
        );
        return (adjustedScrollPosition / 100) * scrollableHeight + padding;
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "100vh", opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="fixed right-1 md:right-4 top-0 h-full w-1 bg-foreground">
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${pillHeight}px` }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute w-2 md:w-3 right-[-2px] md:right-[-4px] rounded-full bg-foreground transition-all duration-150 ease-out"
                style={{
                    height: `${pillHeight}px`,
                    top: `${calculatePillPosition()}px`,
                    // right: "-4px",
                }}
            ></motion.div>
        </motion.div>
    );
}
