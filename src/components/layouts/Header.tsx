"use client";

import React from "react";
import AnimatedTitle from "../animations/animated-title";

const headerData: { text: string; className: string }[] = [
    {
        text: "renzyx.",
        className:
            "pb-2 bg-gradient-to-r from-slate-950 to-slate-500 dark:from-slate-500 dark:to-slate-100 bg-clip-text text-5xl font-extrabold text-transparent text-5xl",
    },
    { text: "Software Engineer", className: "text-3xl font-medium" },
];

const Header = () => {
    return (
        <header className="px-4 md:px-14 py-10">
            <div className="flex flex-col md:flex-row justify-between md:items-end">
                {/* {headerData.map((data, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2, type: "spring", delay: 1 * index, bounce: 0.5 }}
                    >
                        <>{data}</>
                    </motion.div>
                ))} */}
                {headerData.map((data, index) => (
                    <AnimatedTitle
                        key={index}
                        delay={1 * index}
                        text={data.text}
                        className={data.className}
                    />
                ))}
            </div>
        </header>
    );
};

export default Header;
