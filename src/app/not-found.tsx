"use client";

import { motion } from "framer-motion";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home } from "lucide-react";
import CustomScrollBar from "@/components/custom-scroll-bar";

const NotFound = () => {
    return (
        <div className="min-h-screen">
            <CustomScrollBar />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    type: "spring",
                    bounce: 0.5,
                    delay: 1,
                }}
                className="z-10 flex flex-col mt-28 gap-5 items-center justify-center"
            >
                <div
                    className={cn(
                        "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                    )}
                >
                    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        <span>Page 404</span>
                    </AnimatedShinyText>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <h2 className="text-4xl md:text-8xl font-semibold text-foreground/80">
                        Page Not Found
                    </h2>
                    <Button variant="ghost" className="rounded-sm text-foreground/80">
                        <Link
                            href="/"
                            className="flex flex-row items-center text-lg gap-2"
                        >
                            <Home className="size-6" /> Go Home
                        </Link>
                    </Button>
                </div>
            </motion.div>
        </div>
    );
};

export default NotFound;
