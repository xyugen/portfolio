import { cn } from "@/lib/utils";
import React from "react";

const H2 = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return <h2 className={cn("text-primary text-lg font-semibold", className)}>{children}</h2>;
};

export default H2;
