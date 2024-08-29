import React from "react";

const ProjectCard = () => {
    return (
        <div
            className="border bg-background border-muted rounded-lg p-4 hover:border-accent transition-colors"
        >
            <h3 className="text-base font-semibold mb-2">Project Name</h3>
            <p className="text-sm text-muted-foreground">
                A brief description of the project and the technologies used.
            </p>
        </div>
    );
};

export default ProjectCard;
