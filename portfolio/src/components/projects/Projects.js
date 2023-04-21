import React from "react";
import ProjectArray from "./ProjectArray";
import SingleProject from "./SingleProject";
import "./Projects.css";

export default function Projects() {
    return (
        <div className="main-container">
        <h2>Projects</h2>
        <div className="projectList">
                {ProjectArray.map((project) => {
                    return <SingleProject name={project.name} image={project.gif} url={project.deployedLink} />;
                })}
            </div>
        </div>
    );
}