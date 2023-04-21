import React from 'react';

export default function SingleProject({ name, gif, url }) {
    return (
        <div className="single-project">
            <div style={{ backgroundImage: `url(${gif})` }} className="bgImage"></div>
            <a href={url}>{name}</a>
        </div>
    )
}