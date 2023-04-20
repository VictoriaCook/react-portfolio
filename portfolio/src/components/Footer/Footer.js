import React from 'react';
import "./Footer.css";

function Footer() {

    return (
        <div className="footer">
            <div className="socialLinks">
                <a href="https://github.com/VictoriaCook" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/victoria-cook-17140a209/" target="_blank" rel="noopener noreferrer">LinkedIn</a> 
                <a href="mailto:victoriarccook@gmail.com" target="_blank" rel="noopener noreferrer">Mail</a>
            </div>
            <p> 
                &copy; 2023
            </p>
        </div>
    );
}

export default Footer;