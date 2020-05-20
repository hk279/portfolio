import React from "react";
import "../App.css";

function link(url) {
    window.location.href = url;
}

const ProjectCard = (props) => {
    var img = props.image;
    var webLink;

    if (props.siteUrl !== "") {
        webLink = (
            <button className="project-button" onClick={() => link(props.siteUrl)}>
                View Website
            </button>
        );
    }
    return (
        <div className="project-container">
            <img className="project-img" src={img} alt="thumbnail"></img>
            <div className="project-content">
                <h3 className="project-title">{props.title}</h3>
                <p className="project-desc">{props.description}</p>
                <button className="project-button" onClick={() => link(props.sourceUrl)}>
                    View Source
                </button>
                {webLink}
            </div>
        </div>
    );
};

export default ProjectCard;
