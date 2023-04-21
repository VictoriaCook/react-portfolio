import React from "react";
import ProjectArray from "./ProjectArray";
import SingleProject from "./SingleProject";
import "./Projects.css";

export default function Projects() {
    return (
        <div className="main-container">
        <h2>Projects</h2>
        <div className="project-container">
            {ProjectArray.map((project) => (
            <SingleProject
                key={project.id}
                image={project.gif}
                name={project.name}
                url={project.deployedLink}
                img className="d-block w-100" src={project.gif} alt={project.name}
            />
            ))}
        </div>
        </div>
    );
}