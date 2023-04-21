import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (e) => {

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {setEmail(inputValue)}; 
        if (inputType === 'name') {setName(inputValue)};
        if (inputType === 'message') {setMessage(inputValue)};
    };
    
    const handleSubmitBtn = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            setError('Oops! All fields are required. Please try again.');
            return;
        }
        
        setName('');
        setEmail('');
        setMessage('');
        setError('');
    };

    return (
        <div className="main-container">
           <h2 className="heading"> Contact Me </h2>
           {error && (
                <div>
                    <p className="error-text">{error}</p>
                </div>
            )}
            <form className="form">
                <label>Name:</label>
                <br></br>
                <input
                    value={name}
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={handleInputChange}
                />
                <br></br>
                <label>Email address:</label>
                <br></br>
                <input
                    value={email}
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                />
                <br></br>
                <label>Message:</label><br></br>
                <textarea rows="15" cols="50"
                    value={message}
                    name="message"
                    type="message"
                    onChange={handleInputChange}
                />
                <br></br>
                <button type="button" id="submitBtn" onClick={handleSubmitBtn}>Submit</button>
            </form>
        </div>
    );
  };