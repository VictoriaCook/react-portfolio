import React from "react";
import Typed from 'react-typed';
import './About.css';

export default function About() {
    return (
        <div className="main-container">
            <div className="type-writer">
                <Typed
                strings={[`Hello! I'm Victoria and I'm a software engineer based in Melbourne, Australia. I transitioned to software engineering from a career in legal / operational roles in early-stage startups and private legal practice (as an employment lawyer).`]}
                typeSpeed={50}
                backSpeed={40}
                loop >
                </Typed>
            </div>
        </div>
      )
  }