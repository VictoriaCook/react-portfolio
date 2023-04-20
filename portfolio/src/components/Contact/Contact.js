import React from "react";
import "./Contact.css";

export default function Contact() {
    return (
        <div>
            <form className="form">
                <label>Name:</label>
                <input
                    value="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                />
                <label>Email address:</label>
                <input
                    value="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                />
                <label>Message:</label><br></br>
                <textarea rows="15" cols="50"
                    value="message"
                    name="message"
                    type="message"
                /><br></br>
                <button type="button" id="submitBtn">Submit</button>
            </form>
        </div>
    );
  }