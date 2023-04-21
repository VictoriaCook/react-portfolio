import React from 'react';

export default function SingleProject({ gif, name, deployedLink }) {
    return (
        <div className="single-project">
            <div style={{ backgroundImage: `url(${gif})` }} className="bgImage"></div>
            <a href={deployedLink}>{name}</a>
        </div>
    )
}