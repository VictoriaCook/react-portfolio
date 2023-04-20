import React from "react";
import blank from '../../assets/blank.pdf';
import './Resume.css';

export default function Resume() {
       const handleDownload = () => {
          const link = document.createElement('a');
          link.href = blank;
          link.download = '../assets/blank.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
      };
      return (
          <div className="main-container">
              <p>Download my resume below</p>
              <button onClick={handleDownload}>
                  Download
              </button>
          </div>
      );
  }