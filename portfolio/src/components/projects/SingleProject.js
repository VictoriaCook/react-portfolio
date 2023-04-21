import React from 'react';

export default function SingleProject({ name, gif, deployedLink }) {
    return (
        <div className="single-project">
            <div style={{ backgroundImage: `url(${gif})` }} className="bgImage"></div>
            <a href={deployedLink}>{name}</a>
        </div>
    )
}