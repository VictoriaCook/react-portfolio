import React from 'react';
import Typed from 'react-typed';
import './Home.css';

export default function Home() {
    return (
        <div className="main-container">
            <div className="type-writer">
                <Typed
                strings={['Hello! My name is Victoria.', `I'm a software engineer.`, 'Welcome to my portfolio.']}
                typeSpeed={40}
                backSpeed={40}
                loop >
                </Typed>
            </div>
        </div>   
      )
  }