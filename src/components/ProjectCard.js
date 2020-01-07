import React from 'react'
import '../App.css'

function linkToSource(url) {
    window.location.href = url;
}

const ProjectCard = (props) => {
    var img = props.image
    return(
        <div className="project-container">
            <img className="project-img" src={img} alt="thumbnail"></img>
            <div className="project-content">
                <h3 className="project-title">{props.title}</h3>
                <p className="project-desc">{props.description}</p>
                <button className="project-button" onClick={() => linkToSource(props.url)}>View Source</button>
            </div>
        </div>
    )
}

export default ProjectCard