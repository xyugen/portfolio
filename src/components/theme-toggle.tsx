"use client";

import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            aria-label={
                resolvedTheme === "dark"
                    ? "Switch to light theme"
                    : "Switch to dark theme"
            }
            className="rounded-full bg-background border border-foreground transition-colors duration-200 relative overflow-hidden"
        >
            <motion.div
                initial={false}
                animate={{
                    scale: resolvedTheme === "dark" ? 1 : 0,
                    opacity: resolvedTheme === "dark" ? 1 : 0,
                    rotate: resolvedTheme === "dark" ? 0 : -180,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Moon className="h-4 w-4 text-foreground" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    scale: resolvedTheme === "dark" ? 0 : 1,
                    opacity: resolvedTheme === "dark" ? 0 : 1,
                    rotate: resolvedTheme === "dark" ? 180 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Sun className="h-4 w-4 text-foreground" />
            </motion.div>
        </Button>
    );
}
