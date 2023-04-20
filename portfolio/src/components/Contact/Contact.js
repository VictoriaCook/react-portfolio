import React from "react";
import "./Contact.css";

export default function Contact() {
    return (
        <div className="main-container">
            <form className="form">
                <label>Name:</label>
                <br></br>
                <input
                    value="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                />
                <br></br>
                <label>Email address:</label>
                <br></br>
                <input
                    value="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                />
                <br></br>
                <label>Message:</label><br></br>
                <textarea rows="15" cols="50"
                    value="message"
                    name="message"
                    type="message"
                />
                <br></br>
                <button type="button" id="submitBtn">Submit</button>
            </form>
        </div>
    );
  }