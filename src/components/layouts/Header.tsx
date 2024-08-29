"use client";

import React from "react";
import { motion } from "framer-motion";
import Title from "@/components/animations/title";

const headerData: React.ReactNode[] = [
    <h1 className="bg-gradient-to-r from-slate-950 to-slate-500 bg-clip-text text-5xl font-extrabold text-transparent">
        renzyx.
    </h1>,
    <h3 className="text-3xl font-medium">Software Engineer</h3>,
];

const Header = () => {
    return (
        <header className="px-4 md:px-14 py-10">
            <div className="flex flex-col md:flex-row justify-between md:items-end">
                {headerData.map((data, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2, type: "spring", delay: 1 * index, bounce: 0.5 }}
                    >
                        <>{data}</>
                    </motion.div>
                ))}
            </div>
        </header>
    );
};

export default Header;
