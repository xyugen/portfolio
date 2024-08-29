import React from "react";
import { motion } from "framer-motion";

const name: string = "renzyx";

const Title = () => {
    return (
        <>
            {name.split("").map((letter, i) => {
                return (
                    <motion.div
                        key={i}
                        // variants={childVariants}
                        className="block will-change-transform"
                    >
                        <div className="relative">
                            <div className="hero-letter-bg absolute inset-0 select-none text-primary">
                                {letter}
                            </div>
                            <div className="hero-letter relative bg-gradient-to-t from-slate-950 to-slate-500 bg-clip-text text-transparent">
                                {letter}
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </>
    );
};

export default Title;
