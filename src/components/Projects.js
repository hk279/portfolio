import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects_data";

const Projects = () => {
    const projectCards = projects;

    return (
        <section className="projects">
            <div className="content">
                <h2>Projects</h2>
                {projectCards.map((item) => (
                    <ProjectCard
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        sourceUrl={item.sourceUrl}
                        siteUrl={item.siteUrl}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
