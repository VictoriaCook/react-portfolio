import React from 'react';

export default function SingleProject({ gif, name, url }) {
    return (
        <div className="single-project">
            <div style={{ backgroundImage: `url(${gif})` }} className="bgImage"></div>
            <a href={url}>{name}</a>
        </div>
    )
}