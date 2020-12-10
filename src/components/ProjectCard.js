import React from "react";

const ProjectCard = (props) => {
    if (props.siteUrl !== "") {
        var webLink = (
            <form action={props.siteUrl} method="get" target="_blank">
                <button type="submit" className="project-button">
                    View Website
                </button>
            </form>
        );
    }

    return (
        <div className="project-container">
            <img className="project-img" src={props.image} alt="thumbnail"></img>
            <div className="project-content">
                <h3 className="project-title">{props.title}</h3>
                <p className="project-desc">{props.description}</p>
                <form action={props.sourceUrl} method="get" target="_blank">
                    <button type="submit" className="project-button">
                        View Source
                    </button>
                </form>
                {webLink}
            </div>
        </div>
    );
};

export default ProjectCard;
